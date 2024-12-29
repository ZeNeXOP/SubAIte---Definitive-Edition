from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import ObjectId

app = Flask(__name__)  #instiantiate the Flask class, 
CORS(app) #enable CORS for the react frontend

@app.route('/')
def home():
    return "Flask server is running!"

app.config['MONGO_URI'] = "mongodb://localhost:27017/hrishi"
mongo = PyMongo(app)  # This creates the connection to MongoDB

# Helper function for ObjectId conversion
def parse_json(data):
    return {**{key: str(value) if isinstance(value, ObjectId) else value 
            for key, value in data.items()}}
    
@app.route('/api/products', methods=['POST'])
def add_product():
    try:
        product_data = request.get_json()
        
        
        if not all(key in product_data for key in ['name','newPrice','oldPrice']):
            return jsonify({'error': 'Missing required fields'}), 400

        
        product_data['newPrice'] = float(product_data['newPrice'])
        product_data['oldPrice'] = float(product_data['oldPrice'])

        mongo.db.products.insert_one(product_data)

        return jsonify({'message': 'Product added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/products', methods=['GET'])
def get_products():
    try:
        products = list(mongo.db.products.find())
        return jsonify([parse_json(product) for product in products])
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)#run the app in debug mode 

##what got me connected to mongodb? imported a library called PyMongo, which is a Python driver for MongoDB.
##what is the purpose of the app.config['MONGO_URI'] = "mongodb://localhost:27017/hrishi" line? it is used to configure the MongoDB URI for the app.
##what is the purpose of the mongo = PyMongo(app) line? it is used to instantiate the PyMongo class and pass the app object to it.



