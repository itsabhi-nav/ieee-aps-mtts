"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSociety() {
  return (
    <section className="py-16 bg-gray-700 text-gray-300">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          IEEE AP-MTT Society
          <motion.span
            className="absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.h2>
        <motion.p
          className="mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          IEEE AP-MTT society’s field of interest includes analysis, design,
          development, measurement, and testing; radiation, radio propagation,
          and the interaction of electromagnetic waves with discrete and
          continuous media; and applications and systems pertinent to antennas,
          propagation, and sensing, such as applied optics, antenna signal
          processing and control, radio astronomy, and propagation and radiation
          aspects of terrestrial and space-based communication, including
          wireless, mobile, satellite, and telecommunications. The society
          promotes the advancement of microwave theory and its applications,
          including RF, microwave, millimetre-wave, and terahertz technologies.
        </motion.p>
        <motion.p
          className="mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          The activities sponsored by the AP-MTT society include a broad
          spectrum of conferences, workshops, tutorials, technical committees,
          chapter meetings, publications, professional education programs and
          local activities that foster original work in all aspects of antennas,
          microwave engineering, and technology.
        </motion.p>
        <motion.h3
          className="text-2xl font-semibold text-white mb-4 mt-8 relative inline-block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          AP-MTT Bangalore Chapter
          <motion.span
            className="absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.h3>
        <motion.p
          className="leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          AP-MTT Bangalore chapter is one of the most dynamic and vibrant
          chapters in India and the Region 10. With over 80 AP-MTT professional
          members from industry and academia, and around 20 student members, the
          society conducts high-value technology workshops, talks, webinars, and
          seminars in the areas of antennas and microwave engineering.
        </motion.p>
      </div>
    </section>
  );
}
