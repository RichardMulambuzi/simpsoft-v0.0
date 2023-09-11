// Contact.tsx
import * as React from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import contactImg from "./img/about-9.jpg";
import { motion } from "framer-motion";
import { fadeInUpAnimation, staggerAnimation } from "../animation/animation";

const Contact: React.FC = () => {
  return (
    <motion.div variants={fadeInUpAnimation}>
      <Container id="Contact">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className="contact__box">
              <div className="contact__meta">
                <Typography variant="h4">Hire Me.</Typography>
                <Typography variant="body1" className="white">
                  I am available for freelance work. Connect with me via phone:
                </Typography>
                <Typography variant="body1" className="white">
                  <strong>+8436 14 245</strong> or email{" "}
                  <strong>admin@example.com</strong>
                </Typography>
              </div>
              <div className="input__box">
                <TextField
                  variant="outlined"
                  className="contact name"
                  label="Your name *"
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  className="contact email"
                  label="Your Email *"
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  className="contact subject"
                  label="Write a Subject"
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  name="message"
                  id="message"
                  label="Write Your message"
                  multiline
                  rows={4}
                  fullWidth
                />
                <Button
                  variant="contained"
                  className="btn contact pointer"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={contactImg} alt="" className="contact__img" />
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Contact;
