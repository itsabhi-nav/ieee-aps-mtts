"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is IEEE?",
    answer:
      "IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.",
  },
  {
    question: "How do I join IEEE?",
    answer:
      "You can join IEEE by visiting the membership section on our website and filling out the application form.",
  },
  {
    question: "What benefits do I get?",
    answer:
      "As a member, you'll get access to professional development resources, networking opportunities, and exclusive events.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-lg"
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
                  className="relative rounded-xl group"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  {/* Glowing border (underneath the content) */}
                  <div className="absolute -inset-px rounded-xl z-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-60 blur-[4px] transition-opacity duration-500 pointer-events-none"></div>

                  {/* Actual content card */}
                  <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-xl p-5 transition duration-300 hover:bg-white/5">
                    <Disclosure.Button className="flex justify-between items-center w-full text-left font-semibold text-lg md:text-xl tracking-wide text-white hover:text-cyan-300 transition">
                      <span>{faq.question}</span>
                      <ChevronUpIcon
                        className={`w-6 h-6 text-cyan-400 transform transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </Disclosure.Button>

                    {/* Animate the panel expansion */}
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <Disclosure.Panel className="pt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </Disclosure.Panel>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
