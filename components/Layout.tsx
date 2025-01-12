"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ClerkLoaded} from "@clerk/nextjs";
import SkeletonScreen from "./Loading";

const TIMEOUT_DURATION = 500;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), TIMEOUT_DURATION);
    return () => clearTimeout(timeout);
  }, [pathname]);

  const fadeTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      {isLoading ? (
        <motion.div
          key="loading"
          variants={fadeTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
            backgroundColor: "white",
          }}
          aria-live="polite"
        >
          <SkeletonScreen />
        </motion.div>
      ) : (
        <motion.div
          key={pathname}
          variants={fadeTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <ClerkLoaded>{children}</ClerkLoaded>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Layout;
