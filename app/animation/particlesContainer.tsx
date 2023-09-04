import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleContainer: React.FC = () => {
  // Initialize particles engine
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // Callback when particles are loaded
    console.log("Particles loaded", container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullscreen: {
          enable: false,
        },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 30,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 90,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#FFFFFF",
          },

          links: {
            color: "#FFFFFF",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          number: {
            value: 80, 
            density: {
              enable: true, 
              area: 800,
            },
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
            anim: {
              enable: true,
              speed: 0.1,
              size_min: 1,
              sync: true,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              opacity_min: 0.2,
              sync: false,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "tomato",
            },
          },
          move: {
            enable: true,
            speed: 0.2,
            random: false,
            outModes: { default: "bounce" },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
            straight: false,
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ParticleContainer;
