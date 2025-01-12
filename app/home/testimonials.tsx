"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa"; // React User Icon for fallback
import { testimonials } from "@/constants/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl text-secondary font-bold mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="flex flex-col gap-8 sm:gap-12 md:flex-row md:justify-around">
          {testimonials.map(
            ({
              full_name,
              role,
              testimonial,
              avatar_url,
              blur_data_URL,
              id,
            }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * id }}
                className="bg-white shadow-lg rounded-lg p-6 md:w-1/2"
              >
                <div className="flex items-center mb-4">
                  {avatar_url ? (
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={avatar_url}
                        alt={`${full_name}'s photo`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        priority
                        placeholder="blur"
                        blurDataURL={blur_data_URL}
                      />
                    </div>
                  ) : (
                    <FaUserCircle className="text-secondary text-4xl mr-4" />
                  )}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                      {full_name}
                    </h3>
                    <p className="text-sm text-gray-600">{role}</p>
                  </div>
                </div>
                <p className="text-gray-800">{testimonial}</p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
