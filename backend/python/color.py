import numpy as np
import requests
from io import BytesIO
from PIL import Image
import colorsys
from sklearn.cluster import KMeans


def load_image(url):
    response = requests.get(url)
    response.raise_for_status()
    return Image.open(BytesIO(response.content))


def get_color_palette(url: str):
    img = load_image(url).convert("RGB")
    pixels = np.array(img).reshape(-1, 3)
    n_colors = 5
    km = KMeans(n_clusters=n_colors, random_state=42).fit(pixels)
    clusters = km.cluster_centers_
    count = np.bincount(km.labels_)
    proportions = count / count.sum()
    return clusters, proportions


def get_color(
    url: str,
    s_threshold: float = 0.0,
    l_threshold_range: tuple = (0.0, 1.0),
    p_threshold: float = 1.0,
):
    palette, proportions = get_color_palette(url)

    vibrant = []
    for i, rgb in enumerate(palette):
        h, l, s = colorsys.rgb_to_hls(*np.array(rgb) / 255)
        p = proportions[i]
        if (
            s > s_threshold
            and l_threshold_range[0] < l < l_threshold_range[1]
            and p > p_threshold
        ):
            vibrant.append((p, rgb.astype(int).tolist()))
    if vibrant:
        return max(vibrant, key=lambda x: x[0])[1]

    idx = proportions.argmax()
    return palette[idx].astype(int).tolist()


def color_to_hsl_encoded(color:list):
    h, l, s = colorsys.rgb_to_hls(*np.array(color) / 255)
    return {
        'h_sin': np.sin(2 * np.pi * h),
        'h_cos': np.cos(2 * np.pi * h),
        's': s,
        'l': l
    }


def classify_color(rgb:list):
    h,l,s = colorsys.rgb_to_hls(*np.array(rgb) / 255)
    if l < 0.1:
        return 'dark'
    if l > 0.9:
        return 'light'
    if s < 0.03:
        return 'gray'
    return 'color'