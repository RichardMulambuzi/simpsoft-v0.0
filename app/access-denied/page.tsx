"use client";

import React, { useCallback } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import useRedirect from "@/hooks/useRedirect";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";

const AccessDenied: React.FC = () => {
  const redirectDelay = 10000;
  const { countdown, disableRedirect } = useRedirect(redirectDelay);

  const handleDisableRedirect = useCallback(() => {
    disableRedirect();
  }, [disableRedirect]);

  return (
    <main className="font-sans bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200 min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-green-800 h-16 flex items-center shadow-md z-10">
        <Header />
      </header>

      {/* Breadcrumb Header */}
      <div className="relative py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BreadcrumbHeader
            breadcrumbPath="Access Denied"
            breadcrumbLink="/access-denied"
            title="Access Denied"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <section className="flex-1 flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center flex flex-col items-center"
        >
          <div className="flex items-center justify-center bg-red-100 rounded-full w-16 h-16 mb-6">
            <FaExclamationTriangle className="text-red-500 text-3xl" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-2">
            Access Denied
          </h1>
          <p className="text-gray-600 mb-4">
            You must log in to view this page or your account does not have the
            required permissions.
          </p>
          <p className="text-gray-600 mb-8">
            Please contact support if you believe this is an error.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <Link href="/" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-3 rounded bg-green-600 hover:bg-green-700 text-white font-semibold text-lg transition-transform duration-200 text-center cursor-pointer"
              >
                Back to Home
              </motion.div>
            </Link>
            <motion.button
              onClick={handleDisableRedirect}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded text-gray-800 font-medium transition-colors duration-200"
            >
              Disable Redirect
            </motion.button>
          </div>

          {/* Countdown */}
          <p className="text-gray-500 text-sm">
            Redirecting to the home page in
            <span className="font-medium text-gray-800"> {countdown} </span>
            seconds...
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>

      {/* Toast Notifications */}
      <ToastContainer />
    </main>
  );
};

export default AccessDenied;
