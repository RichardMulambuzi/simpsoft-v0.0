"use client";
import { SignedIn, SignedOut, UserButton, useSession } from "@clerk/nextjs";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { navLinksData } from "@/constants/navLinksData";
import { FaSignInAlt } from "react-icons/fa";
import SkeletonScreen from "./Loading";
import { useRouter } from "next/navigation";

const MenuIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-secondary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-secondary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Header: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("transparent");
  const { isLoaded, session } = useSession();
  const router = useRouter();

  const userRole = useMemo(
    () => session?.lastActiveToken?.jwt?.claims?.org_role,
    [session]
  );

  const handleScroll = useCallback(() => {
    if (drawerOpen) setDrawerOpen(false);
    setNavBackground(
      window.scrollY > 1 ? "rgba(2, 11, 18, 0.95)" : "transparent"
    );
  }, [drawerOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const renderDashboardButton = () => {
    if (!session) return null;
    const href = userRole === "org:admin" ? "/pages/admin" : "/pages/user";
    return (
      <Link
        href={href}
        className="p-2 rounded-lg hover:bg-secondary flex items-center gap-x-2 transition-colors"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <span className="text-sm text-white font-semibold">Dashboard</span>
        </motion.div>
      </Link>
    );
  };

  if (!isLoaded) {
    return <SkeletonScreen />;
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        navBackground === "transparent" ? "mt-0" : "bg-primary"
      }`}
    >
      <nav
        className="w-full h-16"
        style={{
          backgroundColor: navBackground,
          transition: "background-color 0.5s ease-in-out",
        }}
      >
        <div className="flex items-center justify-between h-full px-4">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              <Image
                src={logo}
                height={40}
                width={100}
                alt="Logo"
                priority
                placeholder="blur"
              />
            </Link>
          </motion.div>

          {/* Mobile Menu Icon */}
          <button
            aria-label="Toggle menu"
            aria-expanded={drawerOpen}
            onClick={toggleDrawer}
            className="md:hidden p-2 rounded text-secondary"
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinksData.map(({ href, text }, index) => (
              <Link
                key={index}
                href={href || "#"}
                className="p-2 rounded-lg hover:bg-secondary flex items-center transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm text-white font-semibold">
                    {text}
                  </span>
                </motion.div>
              </Link>
            ))}
            {renderDashboardButton()}
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg hover:bg-secondary flex items-center gap-x-2 transition-colors"
                >
                  <FaSignInAlt className="text-white text-2xl" />
                  <span className="text-sm text-white font-semibold">
                    Login
                  </span>
                </motion.div>
              </Link>
            </SignedOut>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-primary fixed top-0 left-0 w-full h-screen overflow-y-auto shadow-lg z-50"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-4 py-3">
                <Link href="/" onClick={toggleDrawer} aria-label="Go to home">
                  <Image
                    src={logo}
                    height={40}
                    width={100}
                    alt="Logo"
                    priority
                    placeholder="blur"
                  />
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={toggleDrawer}
                  className="text-white text-2xl"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col mt-6">
                {navLinksData.map(({ href, text }, index) => (
                  <Link
                    key={index}
                    href={href || "#"}
                    onClick={toggleDrawer}
                    className="block py-4 px-6 hover:bg-secondary/90 text-white transition-colors duration-300 text-lg font-medium"
                    aria-label={text}
                  >
                    <motion.li
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-b border-secondary/40"
                    >
                      {text}
                    </motion.li>
                  </Link>
                ))}
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-4 px-6 border-b border-secondary/40 text-white text-lg font-medium flex items-center gap-3"
                >
                  {renderDashboardButton()}
                </motion.li>
                <SignedIn>
                  <motion.li
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-4 px-6 border-b border-secondary/40 text-white text-lg font-medium flex items-center gap-3"
                  >
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          userButtonOuter: "hover:bg-secondary p-4 w-full",
                          userButtonInner:
                            "text-white flex items-center justify-center gap-2",
                        },
                      }}
                    />
                  </motion.li>
                </SignedIn>
                <SignedOut>
                  <Link
                    href="/sign-in"
                    onClick={toggleDrawer}
                    className="block py-4 px-6 hover:bg-secondary/90 text-white text-lg font-medium transition-colors duration-300 flex items-center gap-3"
                    aria-label="Login"
                  >
                    <motion.li
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-b border-secondary/40 flex items-center"
                    >
                      <FaSignInAlt className="text-2xl text-white" />
                      Login
                    </motion.li>
                  </Link>
                </SignedOut>
              </ul>

              {/* Footer Links */}
              <div className="mt-6 px-6 text-white text-sm border-t border-secondary/40 pt-4">
                <p className="mb-3">
                  © {new Date().getFullYear()} Simpsoft Tech. All rights
                  reserved.
                </p>
                <div className="flex justify-start gap-4">
                  <Link href="/privacy-policy" className="hover:text-secondary">
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-secondary"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Header;
