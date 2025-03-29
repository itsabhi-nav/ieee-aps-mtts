"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

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
    <section className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-blue-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Disclosure.Button className="flex justify-between w-full text-left text-white font-medium">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-blue-400`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 text-gray-300">
                    {faq.answer}
                  </Disclosure.Panel>
                </motion.div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
