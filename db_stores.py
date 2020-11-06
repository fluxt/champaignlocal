import pymysql

def query_all_stores(config):
    connection = pymysql.connect(
        host=config['sqlhost'],
        user=config['sqluser'],
        password=config['sqlpassword'],
        db=config['sqldbname']
    )
    
    cursor = connection.cursor()
    query = "SELECT * FROM Stores"
    cursor.execute(query)
    result = cursor.fetchall()
    result = list(map(lambda store: {
        "id": store[0],
        "name": store[1],
        "location": store[2],
        "hours": store[3],
        "owner": store[4],
        "ratings": store[5],
        "covid_restrictions": store[6]
    }, list(result)))
    return result

def query_search_stores(config, keyword):
    connection = pymysql.connect(
        host=config['sqlhost'],
        user=config['sqluser'],
        password=config['sqlpassword'],
        db=config['sqldbname']
    )
    
    cursor = connection.cursor()
    query = """SELECT *
               FROM Stores
               WHERE Stores.Store_Name LIKE %s
            """
    cursor.execute(query, f"%{keyword}%")
    result = cursor.fetchall()
    result = list(map(lambda store: {
        "id": store[0],
        "name": store[1],
        "location": store[2],
        "hours": store[3],
        "owner": store[4],
        "ratings": store[5],
        "covid_restrictions": store[6]
    }, list(result)))
    return result



# import json
# with open('config.json') as f:
#     config = json.load(f)

# if __name__ == "__main__":
#     print(query_search_stores(config, "restaurant"))

"""
// Run this in Browser
(async function() {

console.log("fetch all stores");
let response;
response = await fetch("/api/stores/all");
response = await response.json();
console.log(response)

console.log("search stores by name");
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
console.log(response);

})()
"""