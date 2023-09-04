'use client';
import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { pageVariants } from "../animation/animation";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const shouldShowHeader = router.pathname === "/";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div style={{ position: "relative" }}>
          {shouldShowHeader && <Header />}{" "}
          {/* Conditionally render the Header */}
          <main>{children}</main>
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}; export default Layout;
