"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FaUser } from "react-icons/fa";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";

// Breadcrumb motion variants
const breadcrumbVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Register = () => {
  return (
    <main className="font-sans bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-green-900 h-16 shadow-md">
        <Header />
      </header>

      {/* Breadcrumb */}
      <motion.div
        className="py-4 bg-gray-100"
        variants={breadcrumbVariants}
        initial="hidden"
        animate="visible"
      >
        <BreadcrumbHeader
          breadcrumbPath="Register"
          breadcrumbLink="/home/pages/terms-of-service"
          title="Register"
        />
      </motion.div>

      {/* Sign-Up Form Section */}
      <section className="bg-white py-4 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-lg px-4">
          <div className="flex justify-center py-24">
            <SignUp />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Register;
