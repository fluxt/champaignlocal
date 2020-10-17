import time
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World from Flask"

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.errorhandler(404)
def api_not_found(e):
    return "This is not the API you are looking for..."
