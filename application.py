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
    all_stores = db_stores.all_stores(config)
    return {'ok': True, 'stores': all_stores}

@application.route('/api/stores/name-search', methods=['POST'])
def api_stores_name_search():
    payload = request.get_json()
    searched_stores = db_stores.search_stores(config, payload.get('keyword'])
    return {'ok': True, 'stores': searched_stores}

@application.route('/api/stores/create', methods=['POST'])
def api_stores_create():
    payload = request.get_json()
    db_stores.create_stores(config, payload.get('name'), payload.get('location'), payload.get('hours'), payload.get('owner'), payload.get('ratings'), payload.get('covid_restrictions'))
    return {'ok': True}

@application.errorhandler(404)
def api_not_found(e):
    return "This is not the API you are looking for..."

if __name__ == "__main__":
    application.debug = False
    application.run()

"""
// Run this in Browser
(async function() {


let response;
response = await fetch("/api/stores/all");
response = await response.json();
console.log("fetch all stores");
console.table(response.stores)


response = await fetch("/api/stores/name-search", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        keyword: "family"
    })
});
response = await response.json();
console.log("search stores by name");
console.table(response.stores);


response = await fetch("/api/stores/create", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "Apple Inc",
        location: "1 Infinite Loop",
        hours: "24/7",
        owner: "Steve Jobs",
        ratings: 5.0
    })
});
response = await response.json();
console.log("search stores by name");
console.log(response);

})()
"""