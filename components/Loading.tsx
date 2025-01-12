"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/images/logo.png";

// Define a type for skeleton item props
interface SkeletonItemProps {
  height: string;
  width?: string;
  marginBottom?: string;
}

const SkeletonItem: React.FC<SkeletonItemProps> = memo(
  ({ height, width = "w-full", marginBottom = "mb-4" }) => (
    <div
      className={`bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-md ${height} ${width} ${marginBottom}`}
    />
  )
);

SkeletonItem.displayName = "SkeletonItem";

// Main skeleton screen layout
const SkeletonScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-primary to-gray-900 text-white z-50">
      {/* Header */}
      <header className="flex justify-between items-center h-20 px-6 bg-secondary shadow-lg">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={40}
            className="animate-pulse"
          />
        </div>
        <div className="flex items-center gap-2">
          <FaSpinner className="text-white animate-spin text-xl" />
          <span className="text-sm font-semibold">Loading...</span>
        </div>
      </header>

      {/* Body */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col sm:flex-row overflow-hidden"
      >

        {/* Main Content */}
        <section className="flex-1 p-6">
          <div className="space-y-6">
            <SkeletonItem height="h-16" width="w-3/4" /> {/* Title */}
            <SkeletonItem height="h-6" width="w-full" /> {/* Content Line 1 */}
            <SkeletonItem height="h-6" width="w-full" /> {/* Content Line 2 */}
            <SkeletonItem height="h-6" width="w-full" /> {/* Content Line 3 */}
            <SkeletonItem height="h-6" width="w-2/3" /> {/* Content Line 4 */}
          </div>

          <div className="mt-10 space-y-6">
            <SkeletonItem height="h-16" width="w-3/4" /> {/* Title */}
            <SkeletonItem height="h-6" width="w-full" /> {/* Content Line 1 */}
            <SkeletonItem height="h-6" width="w-full" /> {/* Content Line 2 */}
            <SkeletonItem height="h-6" width="w-full" /> {/* Content Line 3 */}
            <SkeletonItem height="h-6" width="w-2/3" /> {/* Content Line 4 */}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default SkeletonScreen;
