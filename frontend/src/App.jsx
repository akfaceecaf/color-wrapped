import "./App.css";
import Navbar from "./components/Navbar";
import ClusterList from "./components/ClusterList";
import mockData from "../data/mockData.json";
import { groupTracks } from "./utils/tracks";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";

const sr = (n) => (((Math.sin(n * 127.1 + 311.7) * 43758.5453) % 1) + 1) % 1; // hashing function to get between 0,1
const xSpread = 325;
const ySpread = 200;
const zSpread = 300;

function CameraRig() {
  const { viewport } = useThree();
  const xRef = useRef(0);
  const yRef = useRef(0);

  useFrame(({ camera, pointer }) => {
    const scale = viewport.height / 900;
    const targetX = pointer.x * 200 * scale;
    const targetY = pointer.y * 140 * scale;

    xRef.current += (targetX - xRef.current) * 0.05;
    camera.position.x = xRef.current;
    yRef.current += (targetY - yRef.current) * 0.05;
    camera.position.y = yRef.current;
  });
  return null;
}

function TrackPlane({ i, track, total, onHover, showColor }) {
  const { viewport } = useThree();
  const meshRef = useRef();
  const texture = useTexture(track.image_url);

  const scale = viewport.height / 900;
  const cols = total > 6 ? 4 : 3;
  const rows = Math.ceil(total / cols);
  const col = i % cols;
  const row = Math.floor(i / cols);
  const activeYSpread = ySpread * (rows / 4);
  const bx = cols > 1 ? (col / (cols - 1) - 0.5) * 2 * xSpread : 0;
  const by = rows > 1 ? (row / (rows - 1) - 0.5) * 2 * activeYSpread : 0;
  const jx = (sr(i * 7) - 0.5) * (xSpread / cols) * 0.6;
  const jy = (sr(i * 9) - 0.5) * (activeYSpread / rows) * 0.6;

  const size = (150 + sr(i * 3 + 2) * 75) * scale;
  const x = (bx + jx) * scale;
  const y = (by + jy) * -1 * scale;
  const z = (sr(i * 11) - 0.5) * 2 * zSpread * scale;

  const fs = 0.5 + sr(i * 9) * 0.5;
  const fx = sr(i * 11) * Math.PI * 2;
  const [r, g, b] = track.rgb;

  useFrame(({ clock }) => {
    meshRef.current.rotation.x = y / 900;
    meshRef.current.rotation.y = -x / 1100;
    meshRef.current.position.x = x + Math.sin(clock.elapsedTime * fs + fx) * 4;
    meshRef.current.position.y =
      y + Math.sin(clock.elapsedTime * fs + fx + 1.5) * 4;
  });

  return (
    <mesh
      ref={meshRef}
      position={[x, y, z]}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(track);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        onHover(null);
      }}
    >
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial
        key={showColor ? "color" : "texture"}
        color={showColor ? [r / 255, g / 255, b / 255] : [1, 1, 1]}
        map={showColor ? null : texture}
        toneMapped={false}
      />
    </mesh>
  );
}

export default function App() {
  const [cluster, setCluster] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [showColor, setShowColor] = useState(false);
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
      <div className="cluster-nav">
        <button
          onClick={() => setCluster((cluster - 1 + nClusters) % nClusters)}
          className="cluster-nav-button"
        >
          <img
            src="/skip.svg"
            alt="Prev"
            className="skip-button skip-button--left"
          />
        </button>
        <div className="cluster-nav-center">
          <button
            onClick={() => setShowColor(!showColor)}
            className="cluster-nav-toggle"
          >
            <div
              style={{
                position: "relative",
                width: 36,
                height: 36,
              }}
              className="cluster-nav-toggle-icon"
            >
              <svg
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: showColor ? 1 : 0,
                  transition: "opacity 0.2s ease",
                }}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <defs>
                  <mask id="circle-mask">
                    <rect width="36" height="36" fill="white" />
                    <circle cx="18" cy="18" r="9" fill="black" />
                  </mask>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  fill="currentColor"
                  mask="url(#circle-mask)"
                />
              </svg>
              <svg
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: showColor ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <circle cx="18" cy="18" r="9" fill="currentColor" />
              </svg>
            </div>
          </button>
          <span className="cluster-nav-count">
            {cluster + 1} / {nClusters}
          </span>
        </div>
        <button
          onClick={() => setCluster((cluster + 1) % nClusters)}
          className="cluster-nav-button"
        >
          <img
            src="/skip.svg"
            alt="Next"
            className="skip-button skip-button--right"
          />
        </button>
      </div>
      <div
        className={`hover-tooltip${hovered ? " hover-tooltip--visible" : ""}`}
      >
        {hovered && (
          <>
            <span className="hover-tooltip-track">{hovered.track_name}</span>
            <span> - </span>
            <span className="hover-tooltip-artist">{hovered.artist}</span>
          </>
        )}
      </div>
    </div>
  );
}
