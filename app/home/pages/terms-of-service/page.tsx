"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";

const motionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const TermsOfUse: React.FC = () => {
  const termsContent = [
    {
      title: null,
      content:
        "By using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.",
    },
    {
      title: "Use of the Website:",
      content: "You may use this website for lawful purposes only.",
    },
    {
      title: null,
      content:
        "You must be of legal age to purchase our products or sign up for workshops.",
    },
    {
      title: "Intellectual Property:",
      content:
        "The content on this website, including text, images, logos, and graphics, is protected by copyright and other intellectual property laws. You may not use or reproduce our content without our express consent.",
    },
    {
      title: "Third-Party Links:",
      content:
        "This website may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites.",
    },
    {
      title: "Disclaimer:",
      content:
        "We strive to provide accurate and up-to-date information on our website. However, we make no warranties or representations regarding the accuracy, completeness, or reliability of the information.",
    },
    {
      title: "Limitation of Liability:",
      content:
        "Illovo Malawi Limited, its affiliates, and employees shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website.",
    },
    {
      title: "Changes to Terms:",
      content:
        "We reserve the right to modify these Terms of Use at any time. Please review these terms regularly for updates.",
    },
  ];

  return (
    <main className="font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="w-full bg-primary h-16 flex items-center justify-center shadow-md">
        <Header />
      </header>

      {/* Breadcrumb */}
      <div className="py-4 bg-gray-100">
        <BreadcrumbHeader
          breadcrumbPath="Terms of Use"
          breadcrumbLink="/home/pages/terms-of-service"
          title="Terms of Use"
        />
      </div>

      {/* Terms of Use Section */}
      <section className="container mx-auto px-4 py-8 lg:py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          className="bg-white text-gray-800 rounded-lg shadow-lg p-8 lg:p-12"
        >
          {termsContent.map((item, index) => (
            <React.Fragment key={index}>
              {item.title && (
                <motion.h3
                  variants={motionVariants}
                  custom={index}
                  className="text-xl font-semibold mb-4"
                >
                  {item.title}
                </motion.h3>
              )}
              <motion.p
                variants={motionVariants}
                custom={index}
                className="text-lg mb-6"
              >
                {item.content}
              </motion.p>
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default TermsOfUse;
