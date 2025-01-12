"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaLaptopCode, FaHandshake } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl text-secondary font-bold mb-12"
        >
          Transform Ideas into Reality in 3 Simple Steps
        </motion.h2>

        {/* Steps */}
        <div className="flex flex-col gap-8 sm:gap-12 md:flex-row md:justify-around">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md md:w-1/3"
          >
            <div
              className="mb-4 text-secondary text-5xl"
              aria-label="Idea Icon"
            >
              <FaLightbulb />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Step 1: Share Your Vision
            </h3>
            <p className="text-lg text-gray-700">
              Pitch your idea or business challenge, and we'll help you shape it
              into a viable solution.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md md:w-1/3"
          >
            <div
              className="mb-4 text-secondary text-5xl"
              aria-label="Development Icon"
            >
              <FaLaptopCode />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Step 2: Develop the Solution
            </h3>
            <p className="text-lg text-gray-700">
              Collaborate with our experts as we build scalable, tailored
              software solutions for your needs.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md md:w-1/3"
          >
            <div
              className="mb-4 text-secondary text-5xl"
              aria-label="Collaboration Icon"
            >
              <FaHandshake />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Step 3: Achieve Success Together
            </h3>
            <p className="text-lg text-gray-700">
              Launch your project with confidence and let us provide ongoing
              support to ensure long-term success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
