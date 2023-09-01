import React from "react";
import { Container, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUpAnimation, staggerAnimation } from "../utils/animation/transition";
const AboutPage: React.FC = () => {
  return (
    <motion.div variants={fadeInUpAnimation}>
      <Container sx={{ padding: 20, backgroundColor: "#f2f2f2" }}>
        <Avatar
          alt="Your Name"
          src="/img/slider.jpg"
          sx={{ width: 100, height: 100 }}
        />{" "}
        <motion.div variants={staggerAnimation} className="div">
          <Typography variant="h4">About Me</Typography>
          <Typography variant="body1">
            Share your background and skills here.Presenting a
            product/service/company on a Wow level,We create a unique value of
            your business in the eyes of your clients. We set the highest
            standards by bringing every element to perfection . We look not for
            clients but brave men ready to create the best product that leave
            competitors somewhere behind.
          </Typography>{" "}
          <Typography variant="h4">Contact</Typography>
          <Typography variant="body1">
            Feel free to get in touch with me using the contact form or chatbot
            below.
          </Typography>
        </motion.div>
      </Container>
    </motion.div>
  );
};
export default AboutPage;
