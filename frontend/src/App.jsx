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
  const [groups, setGroups] = useState({});
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const urlParams = new URLSearchParams(hash);
    const access_token = urlParams.get("access_token");
    setAccessToken(access_token);
    if (access_token === null) {
      window.location.href = `${VITE_API_URL}/login`;
      return;
    }
    const fetchTracks = async () => {
      const response = await fetch(
        `${VITE_API_URL}/cluster?access_token=${access_token}`,
      );
      window.history.replaceState({}, document.title, window.location.pathname);
      const data = await response.json();
      console.log(data);

      const grouped = data.reduce((acc, track) => {
        const key = track.cluster;
        if (!acc[key]) acc[key] = [];
        acc[key].push(track);
        return acc;
      }, {});

      setGroups(grouped);
    };
    fetchTracks();
  }, []);

  return (
    <div className="container">
      <header>Color Wrapped</header>
      {Object.entries(groups)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([cluster, tracks]) => (
          <div key={cluster}>
            <h2>{cluster === "-1" ? "Outliers" : `Cluster ${cluster}`}</h2>
            <TrackGrid tracks={tracks} />
          </div>
        ))}
    </div>
  );
}

export default App;
