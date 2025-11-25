from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({'message': 'App is live. Welcome to the Todo List API'}), 200

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Dummy authentication logic
    if email == 'admin@example.com' and password == 'password':
        return jsonify({'message': 'Login successful', 'success': True}), 200
    else:
        return jsonify({'message': 'Invalid credentials', 'success': False}), 401