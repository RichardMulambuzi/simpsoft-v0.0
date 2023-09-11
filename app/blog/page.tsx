"use client";
import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUpAnimation, staggerAnimation } from "../animation/animation";

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "Blog Post 1",
      summary: "Summary of Blog Post 1",
      image: "/img/blog-01.jpg",
    },
    {
      title: "Blog Post 2",
      summary: "Summary of Blog Post 2",
      image: "/img/blog-02.jpg",
    },
    // Add more blog posts with titles, summaries, and images as needed
  ];

  const blogContainerStyle: React.CSSProperties = {
    padding: "6rem 0",
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: "3rem",
    textAlign: "center",
  };

  const projectBoxStyle: React.CSSProperties = {
    position: "relative",
    "&:hover": {
      "& .project__btn": {
        marginBottom: "4rem",
      },
    },
  };

  const projectImgStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
  };

  const projectMetaStyle: React.CSSProperties = {
    position: "absolute",
    top: "0%",
    left: "0%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    borderRadius: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    width: "100%",
    height: "100%",
    transition: "margin-bottom 0.4s ease",
  };

  const projectTextStyle: React.CSSProperties = {
    margin: 0,
    marginBottom: "1rem",
  };

  const projectBtnStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "#fff",
    marginTop: "1rem",
    marginBottom: "-5rem",
    transition: "margin-bottom 0.4s ease",
  };

  return (
    <motion.div variants={fadeInUpAnimation}>
      <Container style={blogContainerStyle}>
        <Typography variant="h2" style={headingStyle}>
          Latest News
        </Typography>
        <motion.div variants={staggerAnimation} className="div">
          {blogPosts.map((post, index) => (
            <Card key={index} style={projectBoxStyle}>
              <div style={projectImgStyle}>
                <CardMedia
                  component="img"
                  alt=""
                  height="auto"
                  image={post.image}
                />
              </div>
              <div style={projectMetaStyle}>
                <Typography variant="h6" style={projectTextStyle}>
                  Development
                </Typography>
                <Typography variant="h5" style={projectTextStyle}>
                  {post.title}
                </Typography>
                <Link href="#" style={projectBtnStyle} className="btn">
                  Read More
                </Link>
              </div>
            </Card>
          ))}
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default BlogPage;
