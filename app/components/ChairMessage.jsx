"use client";
import React from "react";
import { motion } from "framer-motion";

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ChairMessage() {
  return (
    <section className="py-16 bg-gray-800 text-gray-300">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 relative inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Message from the Chair
          <motion.span
            className="absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
          />
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.p variants={paragraphVariants} className="mb-4">
            <strong>Dear Esteemed Members,</strong>
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            className="mb-4 leading-relaxed"
          >
            I congratulate all of you for being part of this great community
            comprising of RF and microwave engineers. RF and microwaves domain
            has a great legacy of people who have contributed greatly in shaping
            the modern world today. The origin and impact of RF and microwave is
            seen everywhere in the universe spanning across various domains like
            cosmic microwave background, radars, communications, biomedical
            applications, industrial microwaves, space exploration, near field
            applications, modern warfare tactics, etc. The whole universe is
            submerged in an electromagnetic spectrum ranging from HF to THz and
            beyond.
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            className="mb-4 leading-relaxed"
          >
            IEEE AP/MTT Jt. Chapter, Bangalore has been continuously involved in
            spreading the knowledge to every person in the society and working
            on their professional upliftment. The chapter has witnessed great
            volunteers in the past and is evolving with more budding volunteers
            ready to work for the cause. As a chair, it's my priority to keep up
            the pace set by my seniors and peers, and to keep providing
            opportunities for professionals, young professionals, academicians,
            and students to grow intellectually and professionally.
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            className="mb-4 leading-relaxed italic text-gray-400 border-l-4 border-gray-600 pl-3"
          >
            “You cannot change your future, but you can change your habits, and
            surely your habits will change your future.” — Dr. APJ Abdul Kalam
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            className="mb-4 leading-relaxed"
          >
            I am looking forward to more volunteers joining the cause and
            working towards the upliftment of the RF and microwave community.
            Congratulations to our 600+ members once again. I welcome you to the
            society and invite you to join the team to volunteer for upcoming
            events. This chapter has been making its mark across Pan India
            through various past endeavors such as MAPCON 2022, IEEE SPACE 2024,
            and many others.
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            className="mb-8 leading-relaxed"
          >
            <strong>Best Regards,</strong> <br />
            Dr. Ashutosh Kedar <br />
            Chair-2025
          </motion.p>
          <motion.p variants={paragraphVariants} className="leading-relaxed">
            The society is engaged in organizing high-value conferences such as
            InCAP, IRSI/IMS, and CONECCT, and is striving to bring top-rated
            events in the domain of AP-MTT.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
