import cors from "cors";
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const redirect_uri = process.env.REDIRECT_URI;
const port = process.env.PORT;
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const site_url = process.env.SITE_URL;
const cluster_api_url = process.env.CLUSTER_API_URL;

app.get("/login", (req, res) => {
  const scope = "user-read-recently-played";
  const query = new URLSearchParams({
    client_id: client_id,
    response_type: "code",
    redirect_uri: redirect_uri,
    scope: scope,
    show_dialog: true,
  });
  const url = "https://accounts.spotify.com/authorize?" + query.toString();
  res.redirect(url);
});

app.get("/callback", async (req, res) => {
  try {
    const code = req.query.code || null;

    const url = "https://accounts.spotify.com/api/token";
    const form = new URLSearchParams({
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    });
    const headers = {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    };
    const result = await axios.post(url, form.toString(), { headers });
    res.redirect(
      `${site_url}#access_token=${result.data.access_token}&refresh_token=${result.data.refresh_token}`,
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/refresh_token", async (req, res) => {
  try {
    const refresh_token = req.query.refresh_token;
    const url = "https://accounts.spotify.com/api/token";
    const form = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    });
    const headers = {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    };
    const result = await axios.post(url, form.toString(), { headers });
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const fetchRecentlyPlayed = async (access_token) => {
  const url = "https://api.spotify.com/v1/me/player/recently-played?limit=25";
  const headers = {
    Authorization: "Bearer " + access_token,
  };
  const result = await axios.get(url, { headers });
  const items = result.data.items;

  const extractSongDetails = (item) => {
    const image_url = item.track.album.images[0].url;
    const details = {
      track_id: item.track.uri,
      track_name: item.track.name,
      artist: item.track.artists[0].name,
      album_name: item.track.album.name,
      image_url: image_url,
    };
    return details;
  };

  return items.map((item) => extractSongDetails(item));
};

app.get("/recently_played", async (req, res) => {
  try {
    const tracks = await fetchRecentlyPlayed(req.query.access_token);
    res.json(tracks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/cluster", async (req, res) => {
  try {
    const tracks = await fetchRecentlyPlayed(req.query.access_token);
    const urls = tracks.map(({ image_url }) => image_url);
    const headers = {
      "content-type": "application/json",
    };

    const result = await axios.post(cluster_api_url, { urls }, { headers });
    const colors = result.data;

    const clustered = tracks.map((track, i) => ({
      ...track,
      ...colors[i],
    }));
    res.json(clustered);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
