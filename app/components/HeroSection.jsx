"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-[50vh] sm:h-[60vh] lg:h-[80vh] overflow-hidden px-4">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dcahaaigp/video/upload/f_auto:video,q_auto/p9xll7iisai5y2pj6qc3"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>Welcome to</div>
          <div className="text-blue-400">IEEE Bangalore Section</div>
          <div className="text-purple-400">APS-MTTS Joint Chapter</div>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 px-2 sm:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Fostering RF & Microwave Innovation for a Better Future
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link href="/about">
            <button
              className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              aria-label="Learn more about the chapter"
            >
              Know More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
