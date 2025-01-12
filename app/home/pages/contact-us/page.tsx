"use client";

import React, { useState } from "react";
import Image from "next/image";
import contactUsImage from "@/public/images/logo-trasprent.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion, Variants } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { BsFillPersonFill, BsBriefcase, BsChatDots } from "react-icons/bs";
import Link from "next/link";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";

// Centralized motion variants for smooth transition
const breadcrumbVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

// Social media links updated
const socialMediaLinks = [
  {
    icon: <FaFacebook className="h-6 w-6 text-blue-600" />,
    url: "https://www.facebook.com/SimpsoftTech",
  },
  {
    icon: <FaInstagram className="h-6 w-6 text-pink-600" />,
    url: "https://www.instagram.com/SimpsoftTech",
  },
  {
    icon: <FaWhatsapp className="h-6 w-6 text-green-600" />,
    url: "https://www.whatsapp.com/SimpsoftTech",
  },
  {
    icon: <FaTwitter className="h-6 w-6 text-blue-400" />,
    url: "https://www.twitter.com/SimpsoftTech",
  },
  {
    icon: <FaGithub className="h-6 w-6 text-gray-700" />,
    url: "https://www.github.com/SimpsoftTech",
  },
  {
    icon: <FaLinkedin className="h-6 w-6 text-blue-700" />,
    url: "https://www.linkedin.com/SimpsoftTech",
  },
];

// Input Field Component
const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  icon,
}: any) => (
  <div className="mb-6">
    <label
      htmlFor={name}
      className="block text-gray-700 font-semibold mb-2 flex items-center"
    >
      {icon && <div className="mr-2">{icon}</div>}
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
  </div>
);

const ContactUsPage: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    jobTitle: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    jobTitle: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Validate form fields
  const validate = (): boolean => {
    const newErrors = { name: "", email: "", jobTitle: "", message: "" };
    if (!formValues.name) newErrors.name = "Name is required";
    if (!formValues.email) newErrors.email = "Email is required";
    if (!formValues.jobTitle) newErrors.jobTitle = "Job title is required";
    if (!formValues.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) throw new Error("Failed to submit inquiry");

      setSubmitStatus("Your inquiry has been submitted successfully");
      setFormValues({ name: "", email: "", jobTitle: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("There was an error submitting your inquiry");
    }
  };

  return (
    <main className="font-sans bg-gray-50">
      {/* Header */}
      <header className="w-full bg-primary h-16 flex items-center justify-center shadow-md">
        <Header />
      </header>

      <div className="relative py-2">
        <BreadcrumbHeader
          breadcrumbPath="Contact Us"
          breadcrumbLink="/home/pages/contact-us"
          title="Contact Us"
        />
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-stretch gap-8">
              {/* Contact Form */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                    Get in Touch
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="flex-1 flex flex-col"
                  >
                    <InputField
                      label="Your Name"
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      error={errors.name}
                      icon={
                        <BsFillPersonFill className="mr-2 h-5 w-5 text-gray-500" />
                      }
                    />
                    <InputField
                      label="Your Email"
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      error={errors.email}
                      icon={
                        <FaEnvelope className="mr-2 h-5 w-5 text-gray-500" />
                      }
                    />
                    <InputField
                      label="Job Title"
                      type="text"
                      name="jobTitle"
                      value={formValues.jobTitle}
                      onChange={handleChange}
                      error={errors.jobTitle}
                      icon={
                        <BsBriefcase className="mr-2 h-5 w-5 text-gray-500" />
                      }
                    />
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-semibold mb-2 flex items-center"
                      >
                        <BsChatDots className="mr-2 h-5 w-5 text-gray-500" />
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="bg-orange-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-orange-600 transition duration-200"
                    >
                      Submit
                    </button>
                    {submitStatus && (
                      <p className="mt-4 text-center">{submitStatus}</p>
                    )}
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="w-full md:w-2/3 flex flex-col">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col">
                  <Image
                    src={contactUsImage}
                    alt="Contact Us"
                    className="w-full h-64 object-cover rounded-md mb-6"
                  />
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 flex items-center justify-center">
                      <FaPhoneAlt className="mr-2 h-5 w-5 text-gray-500" />
                      <span>
                        <strong>Phone:</strong> +265 (0) 9916 73 436
                      </span>
                    </p>
                    <p className="text-gray-700 flex items-center justify-center">
                      <FaEnvelope className="mr-2 h-5 w-5 text-gray-500" />
                      <span>
                        <strong>Email:</strong> info@simpsofttech.com
                      </span>
                    </p>
                    <p className="text-gray-700 flex items-center justify-center">
                      <FaWhatsapp className="mr-2 h-5 w-5 text-gray-500" />
                      <span>
                        <strong>WhatsApp:</strong> +265 9916 73 436
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 mt-8">
                    {socialMediaLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {link.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ContactUsPage;
