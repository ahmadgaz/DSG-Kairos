from flask import Flask
import pymysql, sys
import os
import atexit
from dotenv import load_dotenv
from datetime import datetime, timedelta

load_dotenv()

app = Flask(__name__)

conn = ""

def onExit():
    # Close the connection upon exitting the application
    conn.close()

# an example of an endpoint, prints all the clients in the db
@app.route("/exampleMethod")
def exampleMethod():
    with conn.cursor() as cur:
        # stores all the column names in columns
        columns = []
        sqlQuery = "SHOW COLUMNS FROM Clients;" #example
        cur.execute(sqlQuery)
        cols = cur.fetchall()
        for col in cols:
            columns.append(col[0])

        # stores all the clients in the database in result
        sqlQuery = "SELECT * FROM Clients;" # example
        cur.execute(sqlQuery)
        result = cur.fetchall()

        # creates a list of dictionaries of clients from the DB
        clients = []
        for res in result:  # res is one big array of all the columns
            clients.append({})
            for i in range(len(columns)):   # the col names themselves
                clients[-1][columns[i]] = res[i]
    
    return str(clients)

# Returns most active users using specifications in lines 48 to 53
@app.route("/get-active-users")
def getMostActiveUsers():

    # Initialize specification variables
    responseSize = 20
    endDate = datetime.today()
    # Get the date 31 days ago.
    startDate = endDate - timedelta(days=31)

    response = []

    with conn.cursor() as cur:
        columns = []
        sqlQuery = "SHOW COLUMNS FROM Clients;"
        cur.execute(sqlQuery)
        cols = cur.fetchall()
        for col in cols:
            columns.append(col[0])
        columns.append("frequency")

        sqlQuery = """
                SELECT clients.*, freq.frequency FROM Clients clients
                INNER JOIN (
                    SELECT client_id, count(client_id) frequency FROM Client_Attendance
                    WHERE event_id in (
                        SELECT id FROM Events
                        WHERE date_created BETWEEN '{start}' AND '{end}'
                    )
                    GROUP BY client_id
                    ORDER BY frequency DESC
                    LIMIT {limit}
                ) freq ON clients.id = freq.client_id;
            """.format(start=startDate, end=endDate, limit=responseSize)
        
        cur.execute(sqlQuery)
        clientsWithFreq = cur.fetchall()

        for client in clientsWithFreq:
            response.append({})
            for i in range(len(columns)):
                response[-1][columns[i]] = client[i]

    return str(response)

if __name__ == "__main__":
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
    
    # Adding onExit event handler
    atexit.register(onExit)

    app.run(debug=True)
