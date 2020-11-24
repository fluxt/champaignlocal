import time
from flask import Flask, request
import json

import db_stores

application = Flask(__name__, static_folder='./static/build', static_url_path='/')

@application.route('/')
def index():
    return application.send_static_file('index.html')

@application.route('/api/time')
def api_time():
    return {'ok': True, 'time': int(time.time())}

@application.route('/api/stores/one', methods=['GET'])
def api_stores_one():
    one_store = db_stores.one_store(request.args.get('id'))
    return {'ok': True, 'store': one_store}

@application.route('/api/stores/all', methods=['GET'])
def api_stores_all():
    all_stores = db_stores.all_stores()
    return {'ok': True, 'stores': all_stores}

@application.route('/api/stores/name-search', methods=['GET'])
def api_stores_name_search():
    payload = request.get_json()
    searched_stores = db_stores.search_stores_by_name(request.args.get('keyword'))
    return {'ok': True, 'stores': searched_stores}

@application.route('/api/stores/create', methods=['POST'])
def api_stores_create():
    payload = request.get_json()
    created_id = db_stores.create_store(payload.get('name'), payload.get('location'), payload.get('hours'), payload.get('owner'), payload.get('ratings'), payload.get('covid_restrictions'))
    one_store = db_stores.one_store(created_id)
    return {'ok': True, 'store': one_store}

@application.route('/api/stores/update', methods=['POST'])
def api_stores_update():
    payload = request.get_json()
    updated_id = db_stores.update_store(payload.get('id'), payload.get('name'), payload.get('location'), payload.get('hours'), payload.get('owner'), payload.get('ratings'), payload.get('covid_restrictions'))
    one_store = db_stores.one_store(updated_id)
    return {'ok': True, 'store': one_store}

@application.route('/api/stores/delete', methods=['POST'])
def api_stores_delete():
    payload = request.get_json()
    db_stores.delete_store(payload.get('id'))
    return {'ok': True}

@application.errorhandler(404)
def api_not_found(e):
    return application.send_static_file('index.html')

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
console.log(response);
console.table(response.stores.slice(0,5))

response = await fetch("/api/stores/name-search?keyword=family");
response = await response.json();
console.log("search stores by name");
console.log(response);
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
        ratings: 5.0,
        covid_restrictions: "OPEN"
    })
});
response = await response.json();
console.log("create apple store");
console.log(response);

created_store_id = response.store.id;
console.log(`created store id is: ${created_store_id}`)

response = await fetch("/api/stores/update", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: created_store_id,
        owner: "Tim Cook"
    })
});
response = await response.json();
console.log("update store owner to Tim Cook");
console.log(response);

response = await fetch("/api/stores/delete", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: created_store_id
    })
});
response = await response.json();
console.log("deleted the store");
console.log(response);
})()
"""