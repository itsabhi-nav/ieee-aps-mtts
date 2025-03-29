
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "IEEE has transformed my career through its networking and learning opportunities.",
      author: "Alice Johnson, Software Engineer",
    },
    {
      id: 2,
      quote:
        "The community and resources offered by IEEE are unmatched in the tech world.",
      author: "Bob Smith, Research Scientist",
    },
    {
      id: 3,
      quote:
        "Being part of IEEE has allowed me to stay ahead in the rapidly evolving field of technology.",
      author: "Charlie Davis, Data Analyst",
    },
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Testimonials
        </motion.h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <p className="text-xl italic text-gray-300 mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-lg font-semibold text-blue-400">
                - {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
