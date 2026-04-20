from flask import Flask, jsonify, request
import numpy as np
import os
from dotenv import load_dotenv
from sklearn.cluster import KMeans

from color import get_color, classify_color, color_to_hsl_encoded

load_dotenv()
PORT = int(os.getenv("PORT", 5001))

app = Flask(__name__)


@app.route("/")
def index():
    return jsonify({"status": "ok"})


@app.route("/cluster", methods=["POST"])
def cluster():
    data = request.get_json()
    urls = data.get("urls", [])

    if not urls:
        return jsonify({"class": [], "cluster": []})

    colors = [
        get_color(url, s_threshold=0.1, l_threshold_range=(0.15, 0.85), p_threshold=0.2)
        for url in urls
    ]

    classes = [classify_color(c) for c in colors]
    color_indices = [i for i, cls in enumerate(classes) if cls == "color"]
    color_items = [colors[i] for i in color_indices]

    clusters = [None] * len(urls)

    if len(color_items) >= 5:
        features = np.array(
            [list(color_to_hsl_encoded(c).values()) for c in color_items]
        )
        n_clusters = 5
        model = KMeans(n_clusters=n_clusters, random_state=42)
        labels = model.fit_predict(features).tolist()
        for idx, label in zip(color_indices, labels):
            clusters[idx] = label
    return jsonify({"class": classes, "cluster": clusters})


if __name__ == "__main__":
    app.run(port=PORT, debug=True)
