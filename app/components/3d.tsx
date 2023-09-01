import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"; // Import OrbitControls from 'drei' for camera controls
import { Container } from "@mui/material";

const WebGraphics: React.FC = () => {
  return (
    <Container sx={{ height: "100vh", width: "100%" }}>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />{" "}
          {/* Use 'boxBufferGeometry' instead of 'boxGeometry' */}
          <meshStandardMaterial color="red" />{" "}
          {/* Add a material to the mesh */}
        </mesh>
      </Canvas>
    </Container>
  );
};

export default WebGraphics;
