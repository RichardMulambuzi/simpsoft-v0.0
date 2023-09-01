"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

const ProjectCard: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
    },
    // Add more project data as needed
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedProjectIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <div onClick={() => openModal(selectedProjectIndex)}>
        </div>
      </motion.div>
      <Dialog open={isOpen} onClose={closeModal} maxWidth="lg">
        <DialogTitle>Project Details</DialogTitle>
        <DialogContent>
          <Container>
            <Typography variant="h4">Projects</Typography>
            <Grid container spacing={2}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{project.title}</Typography>

                      <Typography variant="body2">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
