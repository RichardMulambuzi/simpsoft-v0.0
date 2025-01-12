"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";

// Motion variants for smooth transitions
const motionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const PrivacyPolicy: React.FC = () => {
  const policyContent = [
    {
      title: null,
      content:
        "At Simpsoft Tech, we are committed to protecting your privacy and ensuring a secure online experience. Our Privacy Policy outlines how we collect, use, and protect your personal data when you engage with our services, including using our software solutions, consulting services, and other digital offerings.",
    },
    {
      title: "Information We Collect:",
      content:
        "Personal Information: When you interact with our platform, create an account, or use our services, we may collect personal details, including your name, email address, phone number, and any other data necessary to offer personalized services and support.",
    },
    {
      title: null,
      content:
        "Usage Data: We may also gather data on how you use our platform, such as the features you engage with, job or service inquiries, and software preferences. This data is collected to improve your experience and optimize our services.",
    },
    {
      title: "How We Use Your Information:",
      content:
        "We utilize the collected data to provide you with the best possible experience, including processing your requests, communicating important updates, enhancing service delivery, and offering tailored solutions that meet your needs.",
    },
    {
      title: "Your Rights:",
      content:
        "As a user, you have the right to access, update, or delete your personal information. If you have any concerns or wish to exercise your rights, please contact us using the provided details.",
    },
    {
      title: "Contact Us:",
      content:
        "For any inquiries or concerns related to your personal data or our Privacy Policy, please reach out to us at [contact information]. We are happy to assist you.",
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
          breadcrumbPath="Privacy Policy"
          breadcrumbLink="/home/pages/privacy-policy"
          title="Privacy Policy"
        />
      </div>

      {/* Privacy Policy Section */}
      <section className="container mx-auto px-4 py-8 lg:py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          className="bg-white text-gray-800 rounded-lg shadow-lg p-8 lg:p-12"
        >
          {policyContent.map((item, index) => (
            <React.Fragment key={index}>
              {item.title && (
                <motion.h3
                  variants={motionVariants}
                  custom={index}
                  className="text-xl font-semibold mb-4 text-green-900"
                >
                  {item.title}
                </motion.h3>
              )}
              <motion.p
                variants={motionVariants}
                custom={index}
                className="text-lg mb-6 text-gray-700"
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

export default PrivacyPolicy;
