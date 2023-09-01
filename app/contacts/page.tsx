import Container from "@mui/material/Container/Container";
import { motion } from "framer-motion";
import * as React from "react";
import { fadeInUpAnimation, staggerAnimation } from "../utils/animation/transition";
export default function ContactsPage() {
  return (
    <>
      <motion.div variants={fadeInUpAnimation}>
        <Container>
          <motion.div variants={staggerAnimation} className="div">
            Contacts
          </motion.div>
        </Container>
      </motion.div>
    </>
  );
}
