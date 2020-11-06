from datetime import datetime
from flask import Flask, request
import json

import db_stores

with open('config.json') as f:
    config = json.load(f)

application = Flask(__name__, static_folder='./build', static_url_path='/')

@application.route('/')
def index():
    return application.send_static_file('index.html')

@application.route('/api/time')
def api_time():
    return {'ok': True, 'time': datetime.now()}

@application.route('/api/stores/all', methods=['GET'])
def api_stores_all():
    all_stores = db_stores.query_all_stores(config)
    return {'ok': True, 'stores': all_stores}

@application.route('/api/stores/name-search', methods=['POST'])
def api_stores_name_search():
    query_json = request.get_json()
    searched_stores = db_stores.query_search_stores(config, query_json['keyword'])
    return {'ok': True, 'stores': searched_stores}

# @application.route('/api/stores/create-store', methods=['POST'])


@application.errorhandler(404)
def api_not_found(e):
    return "This is not the API you are looking for..."

if __name__ == "__main__":
    application.debug = False
    application.run()
