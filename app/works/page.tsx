import Container from "@mui/material/Container/Container";
import { motion } from "framer-motion";
import * as React from "react";
import { fadeInUpAnimation, staggerAnimation } from "../animation/animation";
export default function Works() {
  return (
    <motion.div variants={fadeInUpAnimation}>
      <Container>
        <motion.div variants={staggerAnimation} className="div">
          hi 2
        </motion.div>
      </Container>
    </motion.div>
  );
}
