import "./App.css";
import Navbar from "./components/Navbar";
import ClusterNav from "./components/ClusterNav";
import CameraRig from "./components/CameraRig";
import TrackPlane from "./components/TrackPlane";
import Tooltip from "./components/Tooltip";
import { groupTracks } from "./utils/tracks";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";

export default function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cluster, setCluster] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [showColor, setShowColor] = useState(false);
  const [tracks, setTracks] = useState([]);
  const handleToggleColor = () => setShowColor((prev) => !prev);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const token = params.get("access_token");
    if (token) {
      setAccessToken(token);
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (!accessToken) return;
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/cluster?access_token=${accessToken}`,
      );
      const data = await res.json();
      setTracks(data);
      setLoading(false);
    };
    fetchData();
  }, [accessToken]);

  const groupedTracks = groupTracks(tracks);
  const nClusters = groupedTracks.length;

  return (
    <div className="app">
      <Navbar />
      {!loggedIn && (
        <a
          href={`${import.meta.env.VITE_API_URL}/login`}
          className="login-button"
        >
          <span className="login-button-text">Log In With Spotify</span>
        </a>
      )}
      {loggedIn && loading && <div className="loading-menu">Loading...</div>}
      {loggedIn && !loading && tracks.length > 0 && (
        <>
          <div className="canvas-wrapper">
            <Canvas
              className="track-gallery-canvas"
              camera={{ position: [0, 0, 900], fov: 53, near: 1, far: 5000 }}
            >
              <Suspense fallback={null}>
                {groupedTracks[cluster]?.map((track, i) => (
                  <TrackPlane
                    key={i}
                    i={i}
                    track={track}
                    total={groupedTracks[cluster].length}
                    onHover={setHovered}
                    showColor={showColor}
                  />
                ))}
              </Suspense>
              <CameraRig />
            </Canvas>
          </div>
          {nClusters > 0 && (
            <ClusterNav
              cluster={cluster}
              nClusters={nClusters}
              showColor={showColor}
              onClickNav={setCluster}
              onToggleColor={handleToggleColor}
            />
          )}
          <Tooltip track={hovered} />
        </>
      )}
    </div>
  );
}
