from flask import Flask, jsonify
import os
from dotenv import load_dotenv
load_dotenv()

PORT = int(os.getenv('PORT', 5001))

app = Flask(__name__)


@app.route("/")
def index():
    return jsonify({"message": "ok"})

@app.route("/cluster", methods=['POST'])
def cluster():
    return jsonify({"message": "ok"})

if __name__ == "__main__":
    app.run(port=PORT, debug=True)