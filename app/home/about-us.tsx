"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaLaptopCode, FaRegHandshake } from "react-icons/fa";
import Image from "next/image";
import heroImage from "@/public/images/hero.jpg";

const AboutUs = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="About Us background image"
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur"
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary mb-10"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-xl lg:text-2xl text-white mb-10"
        >
          At Simpsoft Tech, we harness innovation to deliver intelligent,
          scalable solutions. Our mission is to empower businesses and
          individuals with impactful technology that solves real-world
          challenges.
        </motion.p>

        {/* Mission Statements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
          >
            <FaLightbulb className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Innovation
            </h3>
            <p className="text-center text-gray-700">
              We continuously explore new technologies to deliver cutting-edge
              solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
          >
            <FaLaptopCode className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Excellence
            </h3>
            <p className="text-center text-gray-700">
              We strive for the highest quality in every project, ensuring
              impactful results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
          >
            <FaRegHandshake className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Integrity
            </h3>
            <p className="text-center text-gray-700">
              We uphold transparency and trust in every action and decision we
              make.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
