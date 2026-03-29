import { getAverageColor } from "fast-average-color-node";

const fetchAverageColor = async (image_url) => {
  try {
    const color = await getAverageColor(image_url);
    const rgb = color.value;
    return rgb;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchAverageColor;
