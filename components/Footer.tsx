"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/images/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { navLinksData } from "@/constants/navLinksData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer: React.FC = () => {
  const socialMediaLinks = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/" },
    { icon: <FaWhatsapp />, url: "https://www.whatsapp.com/" },
    { icon: <FaTwitter />, url: "https://www.twitter.com/" },
    { icon: <FaGithub />, url: "https://www.github.com/" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/" },
  ];

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast.success("You have successfully subscribed!");
    }, 1000);
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                height={50}
                width={150}
                alt="Simpsoft Tech Logo"
              />
            </Link>
            <p className="mt-4 text-gray-300">
              At Simpsoft Tech, we empower businesses with intelligent solutions
              and innovative technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-xl font-semibold text-secondary mb-4">
              Quick Links
            </h6>
            {navLinksData.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-2"
              >
                <Link
                  href={`${link.href}`}
                  className="text-gray-300 hover:text-secondary transition"
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/faq"
              className="text-gray-300 hover:text-secondary transition"
            >
              FAQ
            </Link>
          </div>

          {/* Contact Information */}
          <div>
            <h6 className="text-xl font-semibold text-secondary mb-4">
              Contact Us
            </h6>
            <p className="text-gray-300 mb-2">
              Email: contact@simpsofttech.com
            </p>
            <p className="text-gray-300 mb-2">Phone: +265 (0) 45 7890</p>
            <p className="text-gray-300">Address: P. O. Box, Malawi</p>
          </div>

          {/* Social Media */}
          <div>
            <h6 className="text-xl font-semibold text-secondary mb-4">
              Follow Us
            </h6>
            <div className="flex space-x-4">
              {socialMediaLinks.map((link, index) => (
                <Link
                  href={link.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-gray-400 text-2xl transition"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <h6 className="text-center text-xl font-semibold text-secondary mb-4">
            Subscribe to Our Newsletter
          </h6>
          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full sm:w-1/2 p-3 rounded-lg border border-secondary focus:outline-none"
            />
            <button
              type="submit"
              className="bg-secondary text-white py-3 px-6 rounded-lg hover:bg-secondary/90 transition"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Legal Links */}
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Simpsoft Tech. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="home/pages/privacy-policy"
              className="text-gray-400 hover:text-secondary transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="home/pages/terms-of-service"
              className="text-gray-400 hover:text-secondary transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
