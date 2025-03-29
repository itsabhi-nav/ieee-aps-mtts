"use client";
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
  { id: 3, year: "2000", event: "IEEE launched its global online resources." },
  {
    id: 4,
    year: "2020",
    event: "IEEE led groundbreaking research in AI and robotics.",
  },
];

export default function Timeline() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          IEEE Milestones
        </h2>
        <div className="relative">
          <div className="border-l-2 border-blue-500 ml-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                className="mb-8 ml-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full -ml-3 mr-3"></div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <p className="text-xl font-semibold text-blue-400">
                      {milestone.year}
                    </p>
                    <p className="text-gray-300">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
