"use client";
import React from "react";
import {
  AcademicCapIcon,
  LightBulbIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      name: "Antennas & Propagation",
      description:
        "Advance your knowledge in cutting-edge antenna designs, electromagnetic propagation, and more.",
      icon: AcademicCapIcon,
    },
    {
      name: "Microwave Techniques",
      description:
        "Explore state-of-the-art microwave systems, RF circuits, and high-frequency technologies.",
      icon: LightBulbIcon,
    },
    {
      name: "Global Community",
      description:
        "Connect with IEEE members worldwide and be part of a vibrant research and innovation ecosystem.",
      icon: GlobeAltIcon,
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Why Join IEEE APS-MTT?
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Discover the benefits of being part of the Antennas and Propagation &
          Microwave Theory and Techniques communities.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="p-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <feature.icon className="w-12 h-12 mx-auto text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {feature.name}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
