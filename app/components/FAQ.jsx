"use client";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronUpIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the IEEE APS-MTT Joint Chapter?",
    answer:
      "The IEEE APS-MTT Joint Chapter is a collaborative unit of the Antennas and Propagation Society (APS) and Microwave Theory and Techniques Society (MTT-S) under the IEEE Bangalore Section. It promotes research and development in RF, microwave, antennas, and related technologies.",
  },
//   {
//     question: "Who can join the IEEE AP-MTT Chapter?",
//     answer:
//       "Any professional, academician, student, or enthusiast working or studying in the fields of antennas, microwaves, RF systems, or wireless communication can join the chapter by becoming an IEEE member and selecting AP-S or MTT-S as their society of interest.",
//   },
  {
    question: "What kind of events does the chapter organize?",
    answer:
      "The chapter organizes flagship conferences like MAPCON, IEEE SPACE, and CONECCT, along with webinars, seminars, workshops, and technical talks focused on cutting-edge antenna and microwave technologies.",
  },
//   {
//     question: "How can I volunteer for the chapter?",
//     answer:
//       "Students and professionals can volunteer by connecting with the chapter through the official website or social media handles. Opportunities are regularly open for event coordination, content creation, technical support, and outreach.",
//   },
  {
    question: "What are the benefits of joining IEEE AP-MTT?",
    answer:
      "Members gain access to global IEEE resources, conferences, networking opportunities, professional development, and recognition in the fields of antennas and microwave engineering.",
  },
  {
    question: "What is the Bangalore Chapter's significance?",
    answer:
      "The IEEE AP-MTT Bangalore Chapter is one of the most active and dynamic chapters in Region 10 (Asia-Pacific), with over 80 professionals and 20+ student members contributing to impactful technical and outreach activities across India.",
  },
  {
    question: "Who is the current Chair of the Chapter?",
    answer:
      "Dr. Ashutosh Kedar is the Chair for the year 2025, continuing the legacy of promoting RF and microwave engineering through community engagement and technical excellence.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative group rounded-xl"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <div className="absolute -inset-px rounded-xl z-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-50 blur-[4px] transition-opacity duration-500 pointer-events-none" />

                  <motion.div
                    className={`relative z-10 bg-white/5 backdrop-blur-lg rounded-xl p-5 transition duration-300 ${
                      openIndex === index
                        ? "scale-[1.01] ring-2 ring-cyan-400/30"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex justify-between items-center w-full text-left text-lg md:text-xl font-semibold tracking-wide text-white transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <QuestionMarkCircleIcon className="w-6 h-6 text-cyan-400" />
                        <span
                          className={`transition ${
                            openIndex === index
                              ? "bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent"
                              : ""
                          }`}
                        >
                          {faq.question.split("").map((char, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.015 }}
                            >
                              {char}
                            </motion.span>
                          ))}
                        </span>
                      </div>
                      <ChevronUpIcon
                        className={`w-6 h-6 text-cyan-400 transform transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
