import { getAverageColor } from "fast-average-color-node";

const fetchAverageColor = async (image_url) => {
  try {
    const color = await getAverageColor(image_url);
    const rgb = color.value;
    console.log(color);
    return rgb;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchAverageColor;
