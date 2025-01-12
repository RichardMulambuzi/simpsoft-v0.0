"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import aboutUsImage from "@/public/images/hero2.jpg";

// Centralized motion variants
const motionVariants = {
  fadeIn: (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
  }),
};

const AboutUsSection = () => {
  const sections = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "At Simpsoft Tech, our mission is to create impactful, scalable software that transforms businesses and enriches lives, solving real-world problems with innovative solutions.",
    },
    {
      icon: "⚙️",
      title: "Key Features",
      description: [
        "Customizable software solutions tailored to business needs.",
        "Agile and client-centered development process.",
        "Seamless integration with existing systems.",
        "Data-driven decision making for business growth.",
        "User-friendly interfaces for enhanced user experience.",
      ],
    },
    {
      icon: "🔒",
      title: "Technical Requirements",
      description:
        "We use state-of-the-art technologies that guarantee security, scalability, and high performance, ensuring your solutions are future-proof and adaptable.",
    },
  ];

  return (
    <main className="font-sans bg-gradient-to-b from-primary to-gray-900">
      {/* Header */}
      <header className="w-full bg-primary h-16 flex items-center justify-center shadow-md">
        <Header />
      </header>

      {/* Breadcrumb Header */}
      <div className="relative py-4">
        <BreadcrumbHeader
          breadcrumbPath="About Us"
          breadcrumbLink="/home/pages/about"
          title="About Us"
        />
      </div>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Intro */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={motionVariants.fadeIn(0)}
            className="text-4xl font-extrabold text-center text-gray-900 mb-10"
          >
            About Simpsoft Tech
          </motion.h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={motionVariants.fadeIn(0.2)}
            >
              <Image
                src={aboutUsImage}
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right: Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={motionVariants.fadeIn(0.4)}
              className="space-y-8"
            >
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-xl flex items-start space-x-4"
                >
                  <div className="text-4xl">{section.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    {Array.isArray(section.description) ? (
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {section.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700">{section.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white bg-opacity-20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={motionVariants.fadeIn(0)}
            className="text-3xl font-bold text-primary sm:text-4xl mb-4"
          >
            Ready to take the next step with us?
          </motion.h2>
          <p className="text-lg text-gray-600 mb-8">
            We are eager to help your business grow with impactful solutions.
            Let's get started!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/home/pages/contact-us" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-primary/90 transition-transform duration-200"
              >
                Contact Us
              </motion.button>
            </Link>
            <Link href="/home/pages/about" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-secondary py-3 px-6 rounded-lg border border-secondary shadow-md hover:bg-gray-100 transition-transform duration-200"
              >
                Learn More About Us
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default AboutUsSection;
