"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";
import { motion, Variants } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";

// Breadcrumb motion variants
const breadcrumbVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Login = () => {
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
          breadcrumbPath="Login"
          breadcrumbLink="/home/pages/terms-of-service"
          title="Login"
        />
      </motion.div>

      {/* Login Form Section */}
      <section className="bg-white py-4 sm:py-16 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="container mx-auto max-w-lg px-4">
          <div className="flex justify-center py-24">
            <SignIn />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <ToastContainer />
    </main>
  );
};

export default Login;
