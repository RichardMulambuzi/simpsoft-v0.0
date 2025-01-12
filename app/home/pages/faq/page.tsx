"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faq } from "@/constants/faq"; // Assuming the faq data is being imported from the constants
import BreadcrumbHeader from "@/components/BreadcrumbHeader";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [userQuestion, setUserQuestion] = useState("");
  const [submittedQuestions, setSubmittedQuestions] = useState<string[]>([]);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userQuestion.trim() !== "") {
      setSubmittedQuestions([...submittedQuestions, userQuestion]);
      setUserQuestion("");
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
          breadcrumbPath="FAQ"
          breadcrumbLink="/home/pages/faq"
          title="Frequently Asked Questions"
        />

        <section className="w-full h-full py-20 bg-gray-100">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Frequently Asked Questions
            </h1>

            <div className="mb-6">
              {/* FAQ List */}
              {faq.map((item, index) => (
                <div key={index} className="mb-4">
                  <motion.div
                    className="flex items-center justify-between cursor-pointer p-4 bg-white shadow rounded-lg"
                    onClick={() => handleClick(index)}
                  >
                    <div className="flex items-center text-gray-800">
                      <h2 className="text-lg font-semibold">{item.question}</h2>
                    </div>
                    <div>
                      {openIndex === index ? (
                        <FaChevronUp className="text-gray-600" />
                      ) : (
                        <FaChevronDown className="text-gray-600" />
                      )}
                    </div>
                  </motion.div>

                  {/* Answer Section */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-2 px-4 py-2 bg-gray-50 rounded-lg"
                      >
                        <p className="text-gray-700">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Submit User Question */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-center">
                Ask Us Anything!
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-center"
              >
                <input
                  type="text"
                  placeholder="Enter your question..."
                  value={userQuestion}
                  onChange={(e) => setUserQuestion(e.target.value)}
                  className="w-full md:w-3/4 rounded-md px-4 py-2 mb-2 md:mb-0 md:mr-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Display Submitted Questions */}
            {submittedQuestions.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-2 text-center">
                  Your Submitted Questions
                </h2>
                <ul className="list-disc list-inside px-4">
                  {submittedQuestions.map((question, index) => (
                    <li key={index} className="text-gray-700 mb-2">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default FAQPage;
