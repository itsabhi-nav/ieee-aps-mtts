"use client";
import React, { useState } from "react";
import {
  AcademicCapIcon,
  GlobeAltIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutSociety() {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "About IEEE AP-MTT Society",
      icon: AcademicCapIcon,
      content: [
        "IEEE AP-MTT Society’s field of interest includes analysis, design, development, measurement, and testing; radiation, radio propagation, and interaction of electromagnetic waves with discrete and continuous media.",
        "It applies to areas such as applied optics, antenna signal processing, radio astronomy, wireless/mobile/satellite communications, and sensing systems.",
        "The society promotes advancements in RF, microwave, millimetre-wave, and terahertz technologies.",
      ],
      borderColor: "border-cyan-500",
    },
    {
      title: "Activities of the Society",
      icon: UserGroupIcon,
      content: [
        "The society actively organizes a wide range of events including conferences, workshops, tutorials, chapter meetings, technical committees, and professional education programs.",
        "It fosters original research and knowledge sharing in all aspects of antennas, propagation, microwave theory, and engineering technologies.",
      ],
      borderColor: "border-green-500",
    },
    {
      title: "AP-MTT Bangalore Chapter",
      icon: GlobeAltIcon,
      content: [
        "One of the most vibrant chapters in India and IEEE Region 10 with over 80 professionals and 20 student members.",
        "The chapter hosts impactful workshops, webinars, and seminars in the field of antennas and microwave engineering.",
        "Known for organizing events like MAPCON 2022, IEEE SPACE 2024, and promoting high-value initiatives like InCAP, IRSI/IMS, and CONECCT.",
      ],
      borderColor: "border-purple-500",
    },
    {
      title: "Message from the Chair",
      icon: PresentationChartBarIcon,
      content: [
        "Dear Members, our domain spans everything from cosmic microwave background to radars, space exploration, biomedical tech, and modern warfare systems.",
        "As Chair, I aim to uphold the legacy and foster volunteering, learning, and community-building opportunities.",
        "Join us in shaping the future of RF and microwave engineering. – Dr. Ashutosh Kedar",
        "“You cannot change your future, but you can change your habits, and surely your habits will change your future.” — Dr. A.P.J. Abdul Kalam",
      ],
      borderColor: "border-blue-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 to-black text-gray-300 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[120vw] h-[120vh] bg-[radial-gradient(circle,_rgba(103,232,249,0.1)_0%,_rgba(0,0,0,0)_70%)] -translate-x-1/2 blur-3xl z-0"></div>
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <motion.h2
          className="text-4xl md:text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-16 drop-shadow-xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          About IEEE AP-MTT Society
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className={`relative rounded-3xl bg-white/10 backdrop-blur-lg p-6 shadow-2xl border-l-4 ${section.borderColor} transition-all hover:shadow-blue-500/30`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setOpenIndex((prev) => (prev === index ? null : index))
                  }
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-10 h-10 text-blue-400" />
                    <h3
                      className={`text-xl md:text-2xl font-bold transition-colors ${
                        isOpen ? "text-white" : "text-blue-400"
                      }`}
                    >
                      {section.title}
                    </h3>
                  </div>
                  <motion.span
                    className="text-blue-300 text-lg"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="mt-4 space-y-4 text-gray-300"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {section.content.map((para, idx) => (
                        <p
                          key={idx}
                          className="leading-relaxed text-base md:text-lg text-gray-200"
                        >
                          {para}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-3xl pointer-events-none"
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
