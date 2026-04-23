import "./App.css";
import Navbar from "./components/Navbar";
import ClusterList from "./components/ClusterList";
import mockData from "../data/mockData.json";
import { groupTracks } from "./utils/tracks";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Suspense, useRef } from "react";

function CameraRig() {
  const xRef = useRef(0);
  const yRef = useRef(0);
  const { camera, mouse } = useThree();

  useFrame(() => {
    const targetX = mouse.x * 0.3;
    const targetY = mouse.y * 0.3;
    xRef.current += (targetX - xRef.current) * 0.02;
    yRef.current += (targetY - yRef.current) * 0.06;
    camera.position.x = xRef.current;
    camera.position.y = yRef.current;
  });
  return null;
}

const sr = (n) => (((Math.sin(n * 127.1 + 311.7) * 43758.5453) % 1) + 1) % 1;

const xRange = [-2, 2];
const yRange = [-2, 2];
const zRange = [0, 2.5];

function TrackPlane({ imageUrl, i }) {
  const meshRef = useRef();
  const texture = useTexture(imageUrl);

  const x = sr(i * 3) * (xRange[1] - xRange[0]) + xRange[0];
  const y = sr(i * 3 + 1) * (yRange[1] - yRange[0]) + yRange[0];
  const z = sr(i * 3 + 2) * (zRange[1] - zRange[0]) + zRange[0];

  const fs = 0.5 + sr(i * 5) * 0.5;
  const fx = 0.5 + sr(i * 9) * Math.PI * 2;

  useFrame(({ clock }) => {
    // meshRef.current.position.y =
    //   y + Math.sin(clock.elapsedTime * fs + fx) * 0.05;
    // meshRef.current.position.x =
    //   x + Math.sin(clock.elapsedTime * fs + fx + 1.5) * 0.05;
  });

  return (
    <mesh ref={meshRef} position={[x, y, z]}>
      <planeGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default function App() {
  const tracks = mockData;
  const groupedTracks = groupTracks(tracks);
  const cluster = groupedTracks[0];

  return (
    <div className="app">
      <Navbar />
      <div className="canvas-wrapper">
        <Canvas
          className="track-gallery-canvas"
          camera={{ position: [0, 0, 5], fov: 25, near: 1, far: 100 }}
        >
          <Suspense fallback={null}>
            {/* <TrackPlane imageUrl={tracks[0].image_url} i={0} /> */}
            {cluster.map(({ image_url }, i) => (
              <TrackPlane imageUrl={image_url} i={i} key={i} />
            ))}
          </Suspense>
          <CameraRig />
        </Canvas>
      </div>

      {/* <ClusterList groups={groupedTracks} /> */}
    </div>
  );
}
