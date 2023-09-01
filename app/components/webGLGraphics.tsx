"use client";
import Container from "@mui/material/Container/Container";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const WebGLGraphics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Create a background plane
    const planeGeometry = new THREE.PlaneGeometry(200, 200);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0xaaaaaa,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = Math.PI / 2; // Rotate the plane to be horizontal
    scene.add(plane);

    // Create a light source
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 0);
    scene.add(light);

    // Handle mouse movement
    container.addEventListener("mousemove", (event) => {
      mouseX.current = (event.clientX / container.clientWidth) * 2 - 1;
      mouseY.current = -(event.clientY / container.clientHeight) * 2 + 1;
    });

    const animate = () => {
      // Update cube rotation based on mouse movement
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Update camera position based on mouse movement
      camera.position.x += (mouseX.current * 5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY.current * 5 - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeEventListener("mousemove", () => {});
      container.removeChild(renderer.domElement);
    };
  }, []);
  return (
    <>
      {" "}
      <Container ref = { containerRef }
      />
    </>
  );
};

export default WebGLGraphics;