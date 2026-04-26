import { useThree, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";

const sr = (n) => (((Math.sin(n * 127.1 + 311.7) * 43758.5453) % 1) + 1) % 1; // hashing function to get between 0,1
const xSpread = 325;
const ySpread = 200;
const zSpread = 300;

export default function TrackPlane({ i, track, total, onHover, showColor }) {
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
