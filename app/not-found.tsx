"use client";

import Link from "next/link";
import { useCallback } from "react";
import { motion } from "framer-motion";
import useRedirect from "@/hooks/useRedirect";

const NotFoundPage = () => {
  const redirectDelay = 10000;
  const { countdown, disableRedirect } = useRedirect(redirectDelay);

  // Memoized click handler to prevent unnecessary re-renders
  const handleDisableRedirect = useCallback(() => {
    disableRedirect();
  }, [disableRedirect]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-primary to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
        className="max-w-lg p-10 bg-white shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out text-center"
      >
        {/* Header Section */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          The page you are looking for might have been moved, deleted, or does
          not exist.
        </p>
        <p className="text-lg text-secondary font-medium mb-6">
          Please check the URL or return to the homepage.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Link href="/" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-6 bg-secondary text-white font-semibold rounded shadow-md hover:bg-secondary/90 transition-transform duration-200"
            >
              Back to Home
            </motion.button>
          </Link>
          <motion.button
            onClick={handleDisableRedirect}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-6 bg-gray-300 text-gray-800 rounded shadow-md hover:bg-gray-400 transition-colors duration-200"
          >
            Disable Redirect
          </motion.button>
        </div>

        {/* Countdown */}
        <p className="text-gray-600 text-sm">
          Redirecting to the home page in{" "}
          <span className="font-bold text-gray-900">{countdown}</span>{" "}
          seconds...
        </p>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
