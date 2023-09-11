"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Image from "next/image";
import f6 from "./img/shapes/circle.png";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import project1 from "./img/html-css-javascript-lg.jpg";
import project2 from "./img/html-css-javascript-lg.jpg";
import project3 from "./img/html-css-javascript-lg.jpg";
import { motion } from "framer-motion";
import {
  fadeInUpAnimation,
  staggerAnimation,
  hoverAnimation,
} from "./animation/animation";

const projects = [
  {
    name: "Project 1",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis consequatur magni quod nesciunt necessitatibus molestiae non eligendi, magnam est aliquam recusandae? Magnam soluta minus iste alias sunt veritatis nisi dolores!`,
    image: project1,
  },
  {
    name: "Project 2",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis consequatur magni quod nesciunt necessitatibus molestiae non eligendi, magnam est aliquam recusandae? Magnam soluta minus iste alias sunt veritatis nisi dolores!`,
    image: project2,
  },
  {
    name: "Project 3",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis consequatur magni quod nesciunt necessitatibus molestiae non eligendi, magnam est aliquam recusandae? Magnam soluta minus iste alias sunt veritatis nisi dolores!`,
    image: project3,
  },
];
const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];
const jobTitles = [
  "Frontend Developer",
  " THINK. MAKE. SOLVE.",
  "Backend Developer",
  "Native App Developer",
];
const Homepage = () => {
  const [work, setWork] = useState(data[0]);
  const [jobTitleIndex, setJobTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitleIndex((prevIndex) =>
        prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleWorkClick = (item: React.SetStateAction<string>) => {
    setWork(item);
  };

  return (
    <>
      {/* {"SECTION 1 "} */}
      <Container
        sx={{
          height: "100vh",
          width: "100%",
          scrollSnapAlign: "center",
          display: "flex",
          justifyContent: "center",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            flex: "2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            zIndex: 1,
          }}
        >
          <motion.div variants={staggerAnimation} className="div">
            {" "}
            <Typography
              variant="h2"
              component="h1"
              color="inherit"
              fontWeight="600"
              sx={{
                fontSize: "clamp(40px, 10vw, 74px)",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {jobTitles[jobTitleIndex]}
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUpAnimation}>
            {" "}
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              What we Do,
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontSize: "24px",
                fontWeight: "300",
                textAlign: "center",
              }}
            >
              We enjoy creating delightful, human-centered digital experiences.
            </Typography>
          </motion.div>
          <motion.div variants={hoverAnimation}>
            {" "}
            <Button
              href="/blog"
              sx={{
                backgroundColor: "#000",
                color: "white",
                fontWeight: "500",
                width: "150px",
                padding: "12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Learn More
            </Button>
          </motion.div>
        </Box>
        <Container sx={{ flex: "3", position: "relative" }}>
          {/* 3D Model */}
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.7}>
              <MeshDistortMaterial
                color={"#000"}
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Image
            width={300}
            height={300}
            objectFit="contain"
            src={f6}
            className="animated-image"
            alt="Simpsoft feature 6"
          />
        </Container>
      </Container>
      {/* {"SECTION 2"} */}
      <Container
        sx={{
          height: "100vh",
          width: "1400px",
          scrollSnapAlign: "center",
          display: "flex",
          justifyContent: "center", background: "#233"
        }}
      >
          <Grid container justifyContent="center" spacing={3}>
            {/* Render project cards */}
            {projects.map((project, i) => (
              <Grid item xs={12} sm={8} md={4} key={i}>
                <Card style={{ maxWidth: 345, margin: "3rem auto" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={project.name}
                      height="140"
                      image={project.image}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </Container>
      {/* {"SECTION 3"} */}
      <Container
        sx={{
          height: "100vh",
          scrollSnapAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            width: "100vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: "1", alignItems: "center" }}>
            <List
              sx={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {data.map((item) => (
                <ListItem
                  key={item}
                  onClick={() => handleWorkClick(item)}
                  sx={{
                    fontSize: "50px",
                    fontWeight: "900",
                    cursor: "pointer",
                    WebkitTextStroke: "1px #000",
                    position: "relative",
                    "&::after": {
                      top: "0",
                      left: "0",
                      width: "0",
                      overflow: "hidden",
                      color: "transparent",
                      position: "absolute",
                      whiteSpace: "nowrap",
                    },
                    "&:hover": {
                      color: "transparent",
                      "&::after": {
                        animation: "moveText 0.5s linear both",
                        animationName: {
                          to: {
                            width: "100%",
                          },
                        },
                      },
                    },
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: "1", alignItems: "right" }}>
            <Typography
              variant="h4"
              sx={{ marginBottom: 2, fontWeight: "bold" }}
            >
              {work}
            </Typography>
            <Box sx={{ flex: "1", alignItems: "right" }}>
              <Typography
                variant="h4"
                sx={{ marginBottom: 2, fontWeight: "bold" }}
              >
                {work}
              </Typography>
              {work === "Web Design" ? <WebDesign /> : null}
              {work === "Product Design" ? <ProductDesign /> : null}
              {work === "Social Media" ? <SocialMedia /> : null}
              {work === "Illustration" ? <Illustration /> : null}
              {work === "Development" ? <Development /> : null}
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
};
export default Homepage;

// WebDesign, ProductDesign, SocialMedia, Illustration, and Development components...
export const WebDesign: React.FC = () => {
  return (
    <div>
      <h2>Web Design Component</h2>
      {/* Add your web design content here */}
    </div>
  );
};

export const ProductDesign: React.FC = () => {
  return (
    <div>
      <h2>Product Design Component</h2>
      {/* Add your product design content here */}
    </div>
  );
};

export const SocialMedia: React.FC = () => {
  return (
    <div>
      <h2>Social Media Component</h2>
      {/* Add your social media content here */}
    </div>
  );
};

export const Illustration: React.FC = () => {
  return (
    <div>
      <h2>Illustration Component</h2>
      {/* Add your illustration content here */}
    </div>
  );
};

export const Development: React.FC = () => {
  return (
    <div>
      <h2>Development Component</h2>
      {/* Add your development content here */}
    </div>
  );
};
