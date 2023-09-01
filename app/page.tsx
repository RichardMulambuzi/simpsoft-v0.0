"use client";

import * as React from "react";
import LandingPage from "./home/page";
import { fadeInUpAnimation } from "./utils/animation/transition";
import { motion } from "framer-motion";
export default function HomePage() {
  return (
    <motion.div variants={fadeInUpAnimation}>
      <LandingPage />
    </motion.div>
  );
}
