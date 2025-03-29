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
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-center font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-10 drop-shadow-lg">
          Why Join IEEE APS-MTT?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                className="relative overflow-hidden rounded-xl shadow-2xl bg-white/10 backdrop-blur-sm p-6 transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  rotateX: "3deg",
                  rotateY: "3deg",
                }}
              >
                <div className="relative z-10 text-left">
                  <Icon className="w-14 h-14 mb-4 text-blue-400" />
                  <h3 className="text-2xl font-bold mb-2 text-blue-400">
                    {feature.name}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                  <motion.a
                    href="#"
                    className="mt-6 inline-flex items-center text-blue-400 font-medium"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                
                  </motion.a>
                </div>

                {/* Decorative animated border overlay */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none"
                  animate={{
                    borderColor: [
                      "rgba(255,255,255,0)",
                      "rgba(255,255,255,0.3)",
                      "rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
