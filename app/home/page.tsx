import * as React from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Container from "@mui/material/Container";
import hero from "../img/hero.jpg";
import "../styles/global.css"; // Import your CSS file
import { motion } from "framer-motion";
import { staggerAnimation } from "../utils/animation/transition";

export default function LandingPage() {
  return (
    <motion.div variants={staggerAnimation} className="hide-scrollbar">
      {/* Section 1 */}
      <Section1 />

      {/* Section 2 */}
      <Section2 />

      {/* Section 3 */}
      <Section3 />

      {/* Section 4 */}
      <div
        className="background-section"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Section4 />
      </div>

      {/* Section 5 */}
      <Section5 />
    </motion.div>
  );
}
