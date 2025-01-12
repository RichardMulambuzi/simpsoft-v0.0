"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import image from "@/public/images/hero2.jpg";

const HeroSection = () => {
  return (
    <div className="relative flex items-center h-screen overflow-hidden  px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Hero banner showcasing innovation and technology"
          layout="fill"
          objectFit="cover"
          className=""
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 "></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent drop-shadow-lg"
        >
          Empowering Businesses with Intelligent Solutions
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-200 drop-shadow-md"
        >
          Simsoft Tech specializes in scalable software, data science, and idea
          incubation to bring your vision to life.
        </motion.p>

        {/* Call-to-Actions */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
        >
          {/* Explore Services */}
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 rounded bg-secondary hover:bg-secondary/80 text-lg font-bold text-white uppercase shadow-md transition-transform duration-200"
            >
              Explore Services
            </motion.button>
          </Link>

          {/* Pitch an Idea */}
          <Link href="/idea-incubation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 rounded bg-white text-primary border border-secondary hover:bg-gray-100 text-lg font-bold uppercase shadow-md transition-transform duration-200"
            >
              Pitch an Idea
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
