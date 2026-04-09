from flask import Flask, jsonify, request
from sklearn.cluster import KMeans, HDBSCAN
import numpy as np
import os
from dotenv import load_dotenv

load_dotenv()

PORT = int(os.getenv("PORT", 5001))

app = Flask(__name__)


@app.route("/")
def index():
    return jsonify({"status": "ok"})


@app.route("/cluster", methods=['POST'])
def cluster():
    data = request.get_json()
    vectors = data.get('vectors', [])
    config = data.get('config', {})
    algorithm = config.get("algorithm", 'hdbscan')

    if not vectors:
        return jsonify({'labels': []})
    
    X = np.array(vectors)

    if algorithm == "kmeans":
        model = KMeans(n_clusters=config.get("n_clusters", 8), random_state=42)
    elif algorithm == "hdbscan":
        model = HDBSCAN(
            min_cluster_size=config.get("min_cluster_size", 3),
            min_samples=config.get("min_samples", 2),
            cluster_selection_method=config.get("cluster_selection_method", "eom"),
        )
    else:
        return jsonify({"error": "invalid algorithm"}), 400
    labels = model.fit_predict(X).tolist()
    return jsonify({'labels': labels})


if __name__ == "__main__":
    app.run(port=PORT, debug=True)