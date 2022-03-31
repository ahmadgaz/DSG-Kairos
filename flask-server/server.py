from flask import Flask
from sympy import true
from insightly.insightly import Insightly
import os
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route("/clients")
def clients():
    return {"clientele": ["Bob Jones", "Bobby123"]}

@app.route("/exampleMethod")
def exampleMethod():
    i = Insightly(apikey=os.environ["INSIGHTLY_APIKEY"])
    first_500_contacts = i.read('contacts')
    return str(first_500_contacts)

@app.route("/get-most-active-users")
def getMostActiveUsers():
    i = Insightly(apikey=os.environ["INSIGHTLY_APIKEY"])
    
    skipCount = 0
    attendeeFreq = dict()

    timeFrame = datetime.today() - timedelta(days=31)

    while true:
        # Process projects in chunks of 500 or less
        chunk = i.read('projects', skip=skipCount)

        # Reverse iterate to start from the chunk's most recent projects
        for idx in range(len(chunk) - 1, -1, -1):
            project = chunk[idx]
            
            # Stop iterating once outside of timeframe
            if datetime.strptime(project['DATE_CREATED_UTC'], '%Y-%m-%d %H:%M:%S') < timeFrame:
                break
            
            for link in project['LINKS']:
                contactID = link['CONTACT_ID']
                if contactID != None:
                    if contactID not in attendeeFreq:
                        attendeeFreq[contactID] = 1
                    else:
                        attendeeFreq[contactID] += 1
        
        skipCount += 500
        if len(chunk) < 500:
            break
    
    # Sort users by frequency of attending projects, from low to high
    sortedFreq = sorted((v, key) for (key, v) in attendeeFreq.items())

    responseSize = 10
    if len(sortedFreq) > responseSize:
        sortedFreq = sortedFreq[len(sortedFreq) - responseSize:]
    
    res = []
    for idx in range(responseSize - 1, -1, -1):
        user = i.read('contacts', id=sortedFreq[idx][1])[0]
        user['FREQUENCY_OF_APPEARANCE'] = sortedFreq[idx][0]
        res.append(user)
    
    # TODO: Takes 6 to 7 seconds before returning response, needs optimization

    return str(res)


if __name__ == "__main__":
    app.run(debug=True)