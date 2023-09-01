import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import butterfly from "../img/shapes/butterfly.png";
import star from "../img/shapes/star.png";
import love from "../img/shapes/love.png";
import circle from "../img/shapes/circle.png";

const ParticleContainer: React.FC = () => {
  // Initialize particles engine
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // Callback when particles are loaded
    console.log("Particles loaded", container);
  }, []);

  const commonOptions = {
    particles: {
      number: {
        value: 300,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 0.2,
          size_min: 1,
          sync: false,
        },
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1,
        random: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectsOn: "canvas", // Modify this line to specify the detection type
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: false,
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
  };

  const particleOptions = {
    particles: {
      ...commonOptions.particles,
      shape: {
        type: ["circle", "star", "butterfly", "love"],
      },
      color: {
        value: ["#00FFFF", "#FF69B4", "#FF0000", "#FFFFFF"],
      },
    },
  };

  const customOptions = {
    particles: {
      ...commonOptions.particles,
      shape: {
        type: "image",
        image: [
          {
            src: star, // Correct the source paths
            width: 100,
            height: 100,
          },
          {
            src: butterfly, // Correct the source paths
            width: 100,
            height: 100,
          },
          {
            src: love, // Correct the source paths
            width: 100,
            height: 100,
          },
          {
            src: circle, // Correct the source paths
            width: 100,
            height: 100,
          },
        ],
      },
      color: {
        value: ["#00FFFF", "#FF69B4", "#FF0000", "#FFFFFF"],
      },
    },
  };

  return (
    <div>
      <Particles
        params={particleOptions}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default ParticleContainer;
