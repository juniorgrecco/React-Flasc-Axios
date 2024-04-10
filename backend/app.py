from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'  # Coloque seu usuário do MySQL aqui
app.config['MYSQL_PASSWORD'] = '@#Biel040921@#'  # Coloque sua senha do MySQL aqui
app.config['MYSQL_DB'] = 'flask_erp'  # Coloque o nome do seu banco de dados aqui

mysql = MySQL(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data['email']
    password = data['password']

    print("Received data:", email, password)  # Adicione esta linha para depuração

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO users (email, password) VALUES (%s, %s)", (email, password))
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "User registered successfully"})

if __name__ == '__main__':
    app.run(debug=True)
