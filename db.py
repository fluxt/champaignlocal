from flask import Flask 
from flask_pymongo import pymongo
from application import application

CONNECTION_STRING = 'mongodb+srv://user:SQLPassword@flask-mongodb.rlb9i.mongodb.net/Forum?retryWrites=true&w=majority'

client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('Forum')
user_collection = pymongo.collection.Collection(db, 'Discussion')