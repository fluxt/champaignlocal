from datetime import datetime
from flask import Flask, request
import json

import db_store

with open('config.json') as f:
    config = json.load(f)

application = Flask(__name__, static_folder='./build', static_url_path='/')

@application.route('/')
def index():
    return application.send_static_file('index.html')

@application.route('/api/time')
def get_current_time():
    return {'ok': True, 'time': datetime.now()}

@application.route('/api/stores/get-all')
def get_all_stores():
    all_stores = db_store.query_all_stores(config)
    return {'ok': True, 'stores': all_stores}

@application.route('/api/stores/get-search')
def get_search_stores():
    searched_stores = db_store.query_search_stores(config, request.args['q'])
    return {'ok': True, 'stores': searched_stores}

@application.errorhandler(404)
def api_not_found(e):
    return "This is not the API you are looking for..."

if __name__ == "__main__":
    application.debug = False
    application.run()
