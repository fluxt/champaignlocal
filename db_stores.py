import pymysql

def get_connection(config):
    connection = pymysql.connect(
        host=config['sqlhost'],
        user=config['sqluser'],
        password=config['sqlpassword'],
        db=config['sqldbname']
    )
    return connection

def all_stores(config):
    connection = get_connection(config)
    try:
        cursor = connection.cursor()
        query = "SELECT * FROM Stores"
        cursor.execute(query)
        result = cursor.fetchall()
    finally:
        connection.close()

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

def search_stores(config, keyword):
    connection = get_connection(config)
    try:
        cursor = connection.cursor()
        query = """
                SELECT *
                FROM Stores
                WHERE Stores.Store_Name LIKE %s
                """
        cursor.execute(query, f"%{keyword}%")
        result = cursor.fetchall()
    finally:
        connection.close()

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

def create_stores(config, name, location, hours, owner, ratings, covid_restictions):
    connection = get_connection(config)
    try:
        cursor = connection.cursor()
        query = """
                INSERT INTO Stores(
                    Store_Name, Store_Location, Opening_Hours,
                    Store_Owner, Store_Ratings, Covid_Restrictions
                ) VALUES (%s, %s, %s, %s, %s, %s)
                """
        cursor.execute(query, (name, location, hours, owner, ratings, covid_restictions))
        connection.commit()
    finally:
        connection.close()

# def update_stores(config, id, name, location, hours, owner, ratings, covid_restictions):
#     connection = get_connection(config)
#     try:
#         cursor = connection.cursor()
#         query = """
#                 INSERT INTO Stores(
#                     Store_Name, Store_Location, Opening_Hours,
#                     Store_Owner, Store_Ratings, Covid_Restrictions
#                 ) VALUES (%s, %s, %s, %s, %s, %s)
#                 """
#         cursor.execute(query, (name, location, hours, owner, ratings, covid_restictions))
#         connection.commit()
#     finally:
#         connection.close()

# import json
# with open('config.json') as f:
#     config = json.load(f)

# if __name__ == "__main__":
#     print(query_search_stores(config, "restaurant"))
