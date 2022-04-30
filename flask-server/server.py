import re
from flask import Flask
import pymysql, sys
import os
import requests, base64, pprint, json
from dotenv import load_dotenv
from datetime import date, datetime

load_dotenv()

app = Flask(__name__)


# an example of an endpoint, prints all the clients in the db
@app.route("/exampleMethod")
def exampleMethod():
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

    with conn.cursor() as cur:
        # stores all the column names in columns
        columns = []
        sqlQuery = "SHOW COLUMNS FROM Clients;"  # example
        cur.execute(sqlQuery)
        cols = cur.fetchall()
        for col in cols:
            columns.append(col[0])

        # stores all the clients in the database in result
        sqlQuery = "SELECT * FROM Clients;"  # example
        cur.execute(sqlQuery)
        result = cur.fetchall()

        # creates a list of dictionaries of clients from the DB
        clients = []
        for res in result:  # res is one big array of all the columns
            clients.append({})
            for i in range(len(columns)):  # the col names themselves
                clients[-1][columns[i]] = res[i]

    conn.close()
    return str(clients)


def calculate_age(birthdate):
    today = date.today()
    age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
    return age
    
@app.route("/ageGroups")
def getAgeGroups():
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
    
    with conn.cursor() as cur: #creating a connection to the database
        sqlQuery = "SELECT date_of_birth FROM sunday_friends.Clients"
        cur.execute(sqlQuery)
        date_of_births = cur.fetchall()
        # print(date_of_births)

    
    exact_age = list()
    age_map = {"0-10": 0, "11-20":0, "21-30":0, "31-40":0 , "41-50":0, "51-60":0, "61-70":0}

    
    for x in date_of_births: 

        if(x[0]==None or x[0] == "None"):
            continue
        dateObject = datetime.fromisoformat(x[0])
        age = calculate_age(dateObject)
        if age < 0:
            continue

        if age == 0:
            age =1

        if 0<=age<=10:
            age_map["0-10"] = age_map["0-10"] + 1
        if 11<=age<=20:
            age_map["11-20"] = age_map["11-20"] + 1
        if 21<=age<=30:
            age_map["21-30"] = age_map["21-30"] + 1
        if 31<=age<=40:
            age_map["31-40"] = age_map["31-40"] + 1
        if 41<=age<=50:
            age_map["41-50"] = age_map["41-50"] + 1
        if 51<=age<=60:
            age_map["51-60"] = age_map["51-60"] + 1
        if 61<=age<=70:
            age_map["61-70"] = age_map["61-70"] + 1

        
    # print(age_map)
    return age_map
        

    
    conn.close()
    return "Your reached the endpoint!"


if __name__ == "__main__":
    app.run(debug=True)
