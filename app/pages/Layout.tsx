"use client";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { AnimatePresence } from "framer-motion";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
     <AnimatePresence initial={false} mode="wait">
    <div style={{ position: "relative" }}>
      {" "}
      <Header />
      <main>{children}</main>
      <Footer />
    </div></AnimatePresence>
  );
};
export default Layout;