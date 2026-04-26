import "./App.css";
import Navbar from "./components/Navbar";
import ClusterNav from "./components/ClusterNav";
import mockData from "../data/mockData.json";
import CameraRig from "./components/CameraRig";
import TrackPlane from "./components/TrackPlane";
import Tooltip from "./components/Tooltip";
import { groupTracks } from "./utils/tracks";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

export default function App() {
  const [cluster, setCluster] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [showColor, setShowColor] = useState(false);
  const handleToggleColor = () => setShowColor((prev) => !prev);
  const groupedTracks = groupTracks(mockData);
  const nClusters = groupedTracks.length;

  return (
    <div className="app">
      <Navbar />
      <div className="canvas-wrapper">
        <Canvas
          className="track-gallery-canvas"
          camera={{ position: [0, 0, 900], fov: 53, near: 1, far: 5000 }}
        >
          <Suspense fallback={null}>
            {groupedTracks[cluster].map((track, i) => (
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
      <ClusterNav
        cluster={cluster}
        nClusters={nClusters}
        showColor={showColor}
        onClickNav={setCluster}
        onToggleColor={handleToggleColor}
      />
      <Tooltip track={hovered} />
    </div>
  );
}
