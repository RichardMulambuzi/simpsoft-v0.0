import React from "react";
import { CardMedia, Container, Grid } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import PortfolioItem from "../components/PortfolioItem";
import { fadeInUpAnimation, staggerAnimation } from "../utils/animation/transition";
const portfolioData = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    image: "project",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: "project",
  },
];

const Portfolio: React.FC = () => {
  return (
    <motion.div variants={fadeInUpAnimation}>
     
        <motion.div variants={staggerAnimation} className="div">
     
          <Container sx={{ paddingTop: 5 }}>
            <Grid container spacing={3}>
              {portfolioData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Image
                    src={item.image}
                    height="70"
                    width="180"
                    alt="Project 1"
                  />
                  <PortfolioItem
                    title={item.title}
                    description={item.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </motion.div>
    </motion.div>
  );
};

export default Portfolio;
