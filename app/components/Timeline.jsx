"use client";
import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    id: 1,
    year: "1963",
    event: "IEEE was formed as a professional association.",
  },
  {
    id: 2,
    year: "1980",
    event: "The first IEEE conference on microprocessors was held.",
  },
  {
    id: 3,
    year: "2000",
    event: "IEEE launched its global online resources.",
  },
  {
    id: 4,
    year: "2020",
    event: "IEEE led groundbreaking research in AI and robotics.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black py-24 px-6 sm:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <h2 className="text-4xl text-center font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-10 drop-shadow-lg">
          APS-MTTS Milestones
        </h2>

        {/*
          ============================
          1) MOBILE LAYOUT (md:hidden)
          ============================
          A left-aligned timeline line with each card offset to the right.
        */}
        <div className="md:hidden relative">
          {/* Vertical line on the left side */}
          <div className="absolute top-0 bottom-0 left-6 w-1 bg-gradient-to-b from-blue-400 via-purple-600 to-pink-500 rounded-full opacity-90" />

          <div className="space-y-16 pl-12 relative z-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Dot on the vertical line */}
                <div className="absolute -left-10 top-2 w-6 h-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-pink-500 animate-ping opacity-20"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full shadow-xl shadow-blue-500/30 border-2 border-white" />
                </div>

                {/* Wrap the card in a container with perspective */}
                <div style={{ perspective: 1000 }}>
                  {/* Card with a subtle gradient and tilt on hover */}
                  <motion.div
                    whileHover={{ rotate: "1.5deg" }}
                    transition={{ duration: 0.2 }}
                    className="relative bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-pink-500/10 max-w-md transform transition-all hover:shadow-blue-500/20"
                  >
                    <p className="text-blue-400 font-semibold text-lg">
                      {milestone.year}
                    </p>
                    <p className="text-gray-300 mt-2 text-base leading-relaxed tracking-wide">
                      {milestone.event}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/*
          ===============================
          2) DESKTOP LAYOUT (hidden md:grid)
          ===============================
          A three-column, center-line zigzag with always-visible arrow connectors.
        */}
        <div className="hidden md:grid md:grid-cols-3 gap-y-16 relative z-10">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-600 to-pink-500 rounded-full opacity-90 h-full" />

          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <React.Fragment key={milestone.id}>
                {/* Left Column: Even items */}
                <div
                  className={`flex items-center ${isEven ? "justify-end" : ""}`}
                >
                  {isEven && (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="group relative max-w-md"
                    >
                      {/* Card */}
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg shadow-pink-500/10 transform transition-all"
                      >
                        <p className="text-blue-400 font-semibold text-lg">
                          {milestone.year}
                        </p>
                        <p className="text-gray-300 mt-2 text-base leading-relaxed tracking-wide">
                          {milestone.event}
                        </p>
                      </motion.div>

                      {/* Always-Visible Arrow Connector */}
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute top-1/2 -right-10 transform -translate-y-1/2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Center Column: Dot */}
                <div className="flex flex-col items-center">
                  <div className="relative w-6 h-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-pink-500 animate-ping opacity-20"></div>
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full shadow-xl shadow-blue-500/30 border-2 border-white"></div>
                  </div>
                </div>

                {/* Right Column: Odd items */}
                <div
                  className={`flex items-center ${
                    !isEven ? "justify-start" : ""
                  }`}
                >
                  {!isEven && (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="group relative max-w-md"
                    >
                      {/* Card */}
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg shadow-pink-500/10 transform transition-all"
                      >
                        <p className="text-blue-400 font-semibold text-lg">
                          {milestone.year}
                        </p>
                        <p className="text-gray-300 mt-2 text-base leading-relaxed tracking-wide">
                          {milestone.event}
                        </p>
                      </motion.div>

                      {/* Always-Visible Arrow Connector */}
                      <motion.div
                        animate={{ x: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute top-1/2 -left-10 transform -translate-y-1/2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-blue-400 rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
