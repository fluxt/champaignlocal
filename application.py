from datetime import datetime
from flask import Flask

application = Flask(__name__, static_folder='./build', static_url_path='/')

@application.route('/')
def index():
    return application.send_static_file('index.html')

@application.route('/api/time')
def get_current_time():
    return {'time': datetime.now()}

@application.errorhandler(404)
def api_not_found(e):
    return "This is not the API you are looking for..."

if __name__ == "__main__":
    application.debug = False
    application.run()
