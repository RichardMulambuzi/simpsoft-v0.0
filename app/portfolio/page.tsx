"use client";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpAnimation, imageAnimation, staggerAnimation } from "../animation/animation";
import project from "../img/html-css-javascript-lg.jpg";
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

interface PortfolioItemProps {
  title: string;
  description: string;
}
const Portfolio: React.FC<PortfolioItemProps> = ({ title, description }) => {
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100%",
        scrollSnapAlign: "center",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
        overflowY: "auto",
        flex: "2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div variants={fadeInUpAnimation}>
        <motion.div variants={staggerAnimation} className="div">
          <Container sx={{ paddingTop: 5 }}>
            <Grid container spacing={3}>
              {portfolioData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  {" "}
                  <motion.div variants={imageAnimation}>
                    <Image
                      src={project}
                      height="70"
                      width="180"
                      alt="Project 1"
                    />
                  </motion.div>
                  <Card elevation={3}>
                    <CardContent>
                      <Typography variant="h6">{title}</Typography>
                      <Typography>{description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Portfolio;
