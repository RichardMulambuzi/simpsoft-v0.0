"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaLightbulb, FaLaptopCode, FaHandshake } from "react-icons/fa"; // Updated icons based on the steps
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";

// Defining breadcrumb animation for smooth transition
const breadcrumbVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <main className="font-sans bg-gray-50">
      {/* Header */}
      <header className="w-full bg-primary h-16 flex items-center justify-center shadow-md">
        <Header />
      </header>

      <div className="relative py-2">
        {/* Breadcrumbs */}
        <BreadcrumbHeader
          breadcrumbPath="How It Works"
          breadcrumbLink="/home/pages/how-it-works"
          title="How It Works"
        />

        {/* Section for How it Works */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl text-green-900 font-bold mb-12"
            >
              Transform Ideas into Reality in 3 Simple Steps
            </motion.h2>

            <div className="flex flex-col gap-8 sm:gap-12 md:flex-row md:justify-around">
              {/* Step 1: Share Your Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md md:w-1/3"
              >
                <div
                  className="mb-4 text-green-600 text-5xl"
                  aria-label="Idea Icon"
                >
                  <FaLightbulb />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-green-900 mb-2">
                  Step 1: Share Your Vision
                </h3>
                <p className="text-lg text-gray-700">
                  Pitch your idea or business challenge, and we'll help you
                  shape it into a viable solution.
                </p>
              </motion.div>

              {/* Step 2: Develop the Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md md:w-1/3"
              >
                <div
                  className="mb-4 text-green-600 text-5xl"
                  aria-label="Development Icon"
                >
                  <FaLaptopCode />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-green-900 mb-2">
                  Step 2: Develop the Solution
                </h3>
                <p className="text-lg text-gray-700">
                  Collaborate with our experts as we build scalable, tailored
                  software solutions for your needs.
                </p>
              </motion.div>

              {/* Step 3: Achieve Success Together */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md md:w-1/3"
              >
                <div
                  className="mb-4 text-green-600 text-5xl"
                  aria-label="Collaboration Icon"
                >
                  <FaHandshake />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-green-900 mb-2">
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
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default HowItWorks;
