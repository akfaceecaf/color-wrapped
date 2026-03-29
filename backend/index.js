import cors from "cors";
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

import fetchAverageColor from "./color.js";

dotenv.config();

const app = express();
app.use(cors());

const redirect_uri = process.env.REDIRECT_URI;
const port = process.env.PORT;
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const site_url = process.env.SITE_URL;

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
  const code = req.query.code || null;
  const state = req.query.state || null;
  if (false) {
    console.log(false);
  } else {
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
    res.redirect(`${site_url}?access_token=${result.data.access_token}`);
  }
});

app.get("/refresh_token", async (req, res) => {
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
});

app.get("/recently_played", async (req, res) => {
  const url = "https://api.spotify.com/v1/me/player/recently-played?limit=50";
  const headers = {
    Authorization: "Bearer " + req.query.access_token,
  };
  const result = await axios.get(url, { headers });
  const data = result.data.slice(0, 20);

  const extractSongDetails = async (item) => {
    const image_url = item.track.album.images[0].url;
    const details = {
      track_id: item.track.uri,
      track_name: item.track.name,
      artist: item.track.artists[0].name,
      album_name: item.track.album.name,
      image_url: image_url,
      average_color: await fetchAverageColor(image_url),
    };
    return details;
  };

  const tracks = await Promise.all(
    data.items.map((item) => extractSongDetails(item)),
  );
  res.json(tracks);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
