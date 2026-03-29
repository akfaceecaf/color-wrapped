import { useState, useEffect } from "react";
import convert from "color-convert";
import "./App.css";

const VITE_API_URL = import.meta.env.VITE_API_URL;

function TrackGrid({ tracks }) {
  return (
    <div className="tracks-grid">
      {tracks.map((track, index) => (
        <div className="track-card" key={`${track.track_id}-${index}`}>
          <div className="track-box">
            <div className="track-top-row">
              <div className="track-square">
                <img src={track.image_url} alt="Description of the image" />
              </div>
              <div
                className="color-square"
                style={{
                  backgroundColor: `rgb(${track.average_color[0]}, ${track.average_color[1]}, ${track.average_color[2]})`,
                }}
              />
            </div>
            <div className="track-bottom-row">
              <p>{track.track_name}</p>
              <p></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [tracks, setTracks] = useState([]);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const access_token = urlParams.get("access_token");
    setAccessToken(access_token);
    if (access_token === null) {
      window.location.href = `${VITE_API_URL}/login`;
      return;
    }
    const fetchTracks = async () => {
      const response = await fetch(
        `${VITE_API_URL}/recently_played?access_token=${access_token}`,
      );
      // window.history.replaceState({}, document.title, window.location.pathname);
      const data = await response.json();
      // sort tracks
      data.sort((a, b) => {
        const [ra, ga, ba] = a.average_color;
        const [rb, gb, bb] = b.average_color;
        const [ha, sa, la] = convert.rgb.hsl(ra, ga, ba);
        const [hb, sb, lb] = convert.rgb.hsl(rb, gb, bb);
        if (ha !== hb) {
          return ha - hb;
        } else if (sa !== sb) {
          return sa - sb;
        } else {
          return la - lb;
        }
      });
      setTracks(data);
    };
    fetchTracks();
  }, []);

  return (
    <div className="container">
      <header>Color Wrapped</header>
      <TrackGrid tracks={tracks} />
    </div>
  );
}

export default App;
