import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

// Define breadcrumb animation variants for smooth transitions
const breadcrumbVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

interface BreadcrumbHeaderProps {
  breadcrumbPath: string;
  breadcrumbLink: string;
  title: string;
}

const BreadcrumbHeader: React.FC<BreadcrumbHeaderProps> = ({
  breadcrumbPath,
  breadcrumbLink,
  title,
}) => {
  return (
    <section className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white rounded-lg shadow-xl p-10 mb-16">
      <div className="flex items-center justify-between pb-6">
        {/* Breadcrumb Section */}
        <motion.div
          variants={breadcrumbVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4 }}
          className="text-gray-200 flex items-center space-x-2"
        >
          <span className="text-lg">/</span>
          <Link href={breadcrumbLink}>
            <button className="text-gray-200 hover:text-gray-100 font-medium transition-all duration-300 ease-in-out">
              {breadcrumbPath}
            </button>
          </Link>
        </motion.div>

        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-center text-gray-900"
        >
          {title}
        </motion.h2>
      </div>
    </section>
  );
};

export default BreadcrumbHeader;
