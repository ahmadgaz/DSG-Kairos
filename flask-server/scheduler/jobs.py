from apscheduler.schedulers.background import BackgroundScheduler
from utils.DB import DBConnection

db = None
# create and return a scheduler instance
def initScheduler(app):
    db = DBConnection(app)
    scheduler = BackgroundScheduler()

    # It took about 3 and a half minutes to populateAllDB
    scheduler.add_job(db.populateAllDB, trigger="interval", minutes=5)

    # scheduler.add_job(db.testMethod, trigger="interval", seconds=3)

    return scheduler