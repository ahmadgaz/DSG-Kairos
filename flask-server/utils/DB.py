from time import sleep
from flask import Flask
import pymysql, os, sys, base64, requests, json
from dotenv import load_dotenv
sys.path.append("..")

load_dotenv()

app = Flask(__name__)

conn = ""
encodedAPIKey = ""

def parseClientsJson(clients: list):
    cleanedClients = []
    for client in clients:
        cleanedClients.append({})
        cleanedClients[-1]["id"] = client.get("CONTACT_ID")
        cleanedClients[-1]["first_name"] = client.get("FIRST_NAME")
        cleanedClients[-1]["last_name"] = client.get("LAST_NAME")
        cleanedClients[-1]["email"] = client.get("EMAIL_ADDRESS")
        cleanedClients[-1]["date_of_birth"] = client.get("DATE_OF_BIRTH")
        cleanedClients[-1]["street_address"] = address = client.get("ADDRESS_MAIL_STREET")
        cleanedClients[-1]["city"] = client.get("ADDRESS_MAIL_CITY")  
        cleanedClients[-1]["state"] = client.get("ADDRESS_MAIL_STATE") 
        cleanedClients[-1]["postal_code"] = client.get("ADDRESS_MAIL_POSTCODE")

        customFields = client.get("CUSTOMFIELDS")
        for ele in customFields:
            if ele['CUSTOM_FIELD_ID'] == "Gender__c":
                cleanedClients[-1]["gender"] = ele["FIELD_VALUE"]
            elif ele['CUSTOM_FIELD_ID'] == "Primary_Language__c":
                cleanedClients[-1]["primary_language"] = ele["FIELD_VALUE"]
            elif ele['CUSTOM_FIELD_ID'] == "Marital_Status__c":
                cleanedClients[-1]["marital_status"] = ele["FIELD_VALUE"]

    return cleanedClients

def populateClientsDB():
    header = {"Authorization": "Basic " + encodedAPIKey}

    # collects all of the clients from insightly in clientList, a list of dictionaries
    # cleans and extracts the data into clientList
    skipCount = 0
    clientList = []

    while True:
        # get the next 500 of contacts
        params={"skip": skipCount, "top": 500}
        response = requests.get("https://api.na1.insightly.com/v3.1/Contacts", headers=header, params=params)
        
        # Insightly API has a limit of 10 calls per second. Sleeping for 0.21 seconds.
        sleep(0.21)

        clients = json.loads(response.text)

        cleanedClients = parseClientsJson(clients)
        clientList.extend(cleanedClients) 
        if len(clients) < 500:
            break
        skipCount += 500

    # insert the data into the database
    with conn.cursor() as cur:
        for client in clientList:     
            columns = client.keys()
            columnsString = ",".join(columns)
            placeholders = ', '.join(['%s'] * len(client.values()))
       
            # query in case client already exists in database
            colValues = tuple(client.values())
            update_query = ""
            for i, col in enumerate(columns):
                if col == "id":
                    continue
                update_query += col + "=\"" + str(colValues[i])+"\""
                if i < len(columns) - 1:
                    update_query += ", "
            update_query += ";"


            sqlQuery = "INSERT INTO Clients (" + columnsString + ") VALUES({}) ON DUPLICATE KEY UPDATE {}".format(placeholders, update_query)
            cur.execute(sqlQuery, colValues,)

    conn.commit()




def parseCategoriesJSON(categories: list):
    res = []
    for category in categories:
        res.append({
            "id": category.get("CATEGORY_ID"),
            "name": category.get("CATEGORY_NAME")
        })
    return res

def populateCategoriesDB():
    header = {"Authorization": "Basic " + encodedAPIKey}

    skipCount = 0
    categories = []
    
    while True:
        params={"skip": skipCount, "top": 500}
        response = requests.get("https://api.na1.insightly.com/v3.1/ProjectCategories", headers=header, params=params)

        sleep(0.21)

        data = json.loads(response.text)
        categories.extend(parseCategoriesJSON(data))

        if len(data) < 500:
            break
        skipCount += 500
    
    with conn.cursor() as cur:
        for category in categories:     
            cols = category.keys()
            colsString = ",".join(cols)
            placeholders = ', '.join(['%s'] * len(category.values()))
       
            # query in case client already exists in database
            colValues = tuple(category.values())
            update_query = ""
            for i, col in enumerate(cols):
                if col == "id":
                    continue
                update_query += col + "=\"" + str(colValues[i])+"\""
                if i < len(cols) - 1:
                    update_query += ", "
            update_query += ";"


            sqlQuery = "INSERT INTO Categories (" + colsString + ") VALUES({}) ON DUPLICATE KEY UPDATE {}".format(placeholders, update_query)
            cur.execute(sqlQuery, colValues)
    
    conn.commit()




def parseEventsJSON(events: list):
    res = []
    for event in events:
        res.append({
            "id": event.get("PROJECT_ID"),
            "name": event.get("PROJECT_NAME"),
            "description": event.get("PROJECT_DETAILS"),
            "date_created": event.get("DATE_CREATED_UTC"),
            "category_id": event.get("CATEGORY_ID")
        })

    return res

def populateEventsDB():
    header = {"Authorization": "Basic " + encodedAPIKey}

    skipCount = 0
    events = [] 

    while True:
        params={"skip": skipCount, "top": 500}
        response = requests.get("https://api.na1.insightly.com/v3.1/Projects", headers=header, params=params)
        
        sleep(0.21)

        data = json.loads(response.text)
        events.extend(parseEventsJSON(data))

        if len(data) < 500:
            break
        skipCount += 500
    
    with conn.cursor() as cur:
        for event in events:
            cols = event.keys()
            colsString = ",".join(cols)
            placeholders = ', '.join(['%s'] * len(event.values()))
       
            colValues = tuple(event.values())
            update_query = ""
            for i, col in enumerate(cols):
                if col == "id":
                    continue
                update_query += col + "=\"" + str(colValues[i])+"\""
                if i < len(cols) - 1:
                    update_query += ", "
            update_query += ";"

            # Filter out Events with unknown category id
            if not cur.execute("SELECT * FROM Categories WHERE id = " + str(event.get("category_id"))):
                continue
            sqlQuery = "INSERT INTO Events (" + colsString + ") VALUES({}) ON DUPLICATE KEY UPDATE {}".format(placeholders, update_query)
            cur.execute(sqlQuery, colValues)

    conn.commit()





def parseClientAttendanceJSON(events: list):
    res = []
    for event in events:
        links = event.get("LINKS")
        event_id = event.get("PROJECT_ID")
        for link in links:
            if link.get("LINK_OBJECT_NAME") == "Contact":
                client_id = link.get("LINK_OBJECT_ID")
                res.append({
                    "event_id": event_id,
                    "client_id": client_id
                })
    return res

def populateClientAttendanceDB():
    header = {"Authorization": "Basic " + encodedAPIKey}

    skipCount = 0
    attendance = [] 

    while True:
        params={"skip": skipCount, "top": 500}
        response = requests.get("https://api.na1.insightly.com/v3.1/Projects", headers=header, params=params)

        sleep(0.21)
        
        data = json.loads(response.text)
        attendance.extend(parseClientAttendanceJSON(data))

        if len(data) < 500:
            break
        skipCount += 500
    
    with conn.cursor() as cur:
        for event_client in attendance:
            cols = event_client.keys()
            colsString = ",".join(cols)
            placeholders = ', '.join(['%s'] * len(event_client.values()))
       
            colValues = tuple(event_client.values())
            update_query = ""
            for i, col in enumerate(cols):
                if col == "id":
                    continue
                update_query += col + "=\"" + str(colValues[i])+"\""
                if i < len(cols) - 1:
                    update_query += ", "
            update_query += ";"

            # Filter out Client_Attendance where the event is not stored in our database
            if not cur.execute("SELECT * FROM Events WHERE id = " + str(event_client.get("event_id"))):
                continue

            sqlQuery = "INSERT INTO Client_Attendance (" + colsString + ") VALUES({}) ON DUPLICATE KEY UPDATE {}".format(placeholders, update_query)
            cur.execute(sqlQuery, colValues)

    conn.commit()

if __name__ == "__main__":
    # Connecting to MySQL
    try:
        conn = pymysql.connect(host=os.environ.get("RDS_HOST_NAME"), 
                            user=os.environ.get("RDS_USER"), 
                            passwd=os.environ.get("RDS_PASSWORD"), 
                            db=os.environ.get("DATABASE"), 
                            connect_timeout=5)
    except pymysql.MySQLError as e:
        print("ERROR: Unexpected error: Could not connect to MySQL instance.")
        print(e)
        sys.exit(1)
    
    # encoding the APIkey in base64 for authorization
    encodedAPIKey = (base64.b64encode(str.encode(os.environ["INSIGHTLY_APIKEY"]))).decode()
    
    # TODO: Slow. Gotta make it faster later.
    populateClientsDB()
    populateCategoriesDB()
    populateEventsDB()
    populateClientAttendanceDB()

    conn.close()