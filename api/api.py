from datetime import datetime
from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/time')
def get_current_time():
    return {'time': datetime.now()}

@app.errorhandler(404)
def api_not_found(e):
    return "This is not the API you are looking for..."
