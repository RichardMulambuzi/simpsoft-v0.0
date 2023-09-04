"use client";
import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUpAnimation, staggerAnimation } from "../animation/animation";

const BlogPage: React.FC = () => {
  const blogPosts = [
    { title: "Blog Post 1", summary: "Summary of Blog Post 1" },
    { title: "Blog Post 2", summary: "Summary of Blog Post 2" },
  ];

  return (
    <motion.div variants={fadeInUpAnimation}>
      <Container>
        <motion.div variants={staggerAnimation} className="div">
          <Typography variant="h4">Blog</Typography>
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2">{post.summary}</Typography>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default BlogPage;
