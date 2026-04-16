import { getAverageColor } from "fast-average-color-node";

export const fetchAverageColor = async (image_url) => {
  try {
    const color = await getAverageColor(image_url);
    const rgb = color.value;
    return rgb;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const toEncodedHSL = (rgba) => {
  if (!rgba || rgba.length < 3 || rgba[3] === 0) return null;
  const r = rgba[0] / 255;
  const g = rgba[1] / 255;
  const b = rgba[2] / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const c = max - min;

  if (c === 0) {
    return [0, 0, l];
  }

  const s = l <= 0.5 ? c / (max + min) : c / (2 - max - min);

  let h;
  if (max === r) {
    h = (g - b) / c + (g < b ? 6 : 0);
  } else if (max === g) {
    h = (b - r) / c + 2;
  } else {
    h = (r - g) / c + 4;
  }
  h *= 60;
  const hRad = (h * Math.PI) / 180;
  return [Math.sin(hRad) * s, Math.cos(hRad) * s, l];
};

export const prepareSongs = (songs) =>
  songs.map((song) => ({
    song,
    vector: toEncodedHSL(song.average_color),
  }));
