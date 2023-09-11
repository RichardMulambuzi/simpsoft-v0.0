// ContactsPage.tsx
import * as React from "react";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUpAnimation, staggerAnimation } from "../animation/animation";
import Contact from "./Contact"; // Import the Contact component

const ContactsPage: React.FC = () => {
  return (
    <>
      <motion.div variants={fadeInUpAnimation}>
        <Container>
          <motion.div variants={staggerAnimation} className="div">
            <Typography variant="h4">Contacts</Typography>
            <Typography variant="body1">
              Share your background and skills here. Presenting a
              product/service/company on a Wow level, We create a unique value
              of your business in the eyes of your clients. We set the highest
              standards by bringing every element to perfection. We look not for
              clients but brave men ready to create the best product that leaves
              competitors somewhere behind.
            </Typography>
            <Typography variant="h4">Contact</Typography>
            <Typography variant="body1">
              Feel free to get in touch with me using the contact form or
              chatbot below.
            </Typography>
          </motion.div>
        </Container>
      </motion.div>
      <Contact /> {/* Render the Contact component here */}
    </>
  );
};

export default ContactsPage;
