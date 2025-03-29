"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ChairMessage() {
  return (
    <section className="py-16 bg-gray-800 text-gray-300">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-400 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Message from the Chair
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <p className="mb-4">
            <strong>Dear Esteemed Members,</strong>
          </p>
          <p className="mb-4 leading-relaxed">
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
          </p>
          <p className="mb-4 leading-relaxed">
            IEEE AP/MTT Jt. Chapter, Bangalore has been continuously involved in
            spreading the knowledge to every person in the society and working
            on their professional upliftment. The chapter has witnessed great
            volunteers in the past and is evolving with more budding volunteers
            ready to work for the cause. As a chair, it's my priority to keep up
            the pace set by my seniors and peers, and to keep providing
            opportunities for professionals, young professionals, academicians,
            and students to grow intellectually and professionally.
          </p>
          <p className="mb-4 leading-relaxed italic text-gray-400">
            “You cannot change your future, but you can change your habits, and
            surely your habits will change your future.” — Dr. APJ Abdul Kalam
          </p>
          <p className="mb-4 leading-relaxed">
            I am looking forward to more volunteers joining the cause and
            working towards the upliftment of the RF and microwave community.
            Congratulations to our 600+ members once again. I welcome you to the
            society and invite you to join the team to volunteer for upcoming
            events. This chapter has been making its mark across Pan India
            through various past endeavors such as MAPCON 2022, IEEE SPACE 2024,
            and many others.
          </p>
          <p className="mb-8 leading-relaxed">
            <strong>Best Regards,</strong> <br />
            Dr. Ashutosh Kedar <br />
            Chair-2025
          </p>
          <p className="leading-relaxed">
            The society is engaged in organizing high-value conferences such as
            InCAP, IRSI/IMS, and CONECCT, and is striving to bring top-rated
            events in the domain of AP-MTT.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
