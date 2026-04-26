import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraRig() {
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
