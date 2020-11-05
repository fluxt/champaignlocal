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
    return result
