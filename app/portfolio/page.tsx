"use client";
import React from "react";
import { Card, CardContent,Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpAnimation, staggerAnimation } from "../animation/animation";
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
  );
};

export default Portfolio;
