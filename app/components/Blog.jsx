"use client";
import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "IEEE Advances in AI Research",
    summary:
      "Discover how IEEE is spearheading innovation in AI with groundbreaking research and collaborations.",
    date: "March 29, 2025",
  },
  {
    id: 2,
    title: "Upcoming IEEE Conferences",
    summary:
      "Learn about the latest conferences and events hosted by IEEE around the world.",
    date: "April 5, 2025",
  },
  {
    id: 3,
    title: "Member Spotlight: Innovators in Tech",
    summary:
      "Meet some of the brilliant minds behind the technology shaping our future.",
    date: "April 10, 2025",
  },
];

export default function Blog() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Latest from Our Blog
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group rounded-xl p-[1px]"
            >
              {/* Softer glow */}
              <div className="absolute -inset-px z-0 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-sm transition duration-500 pointer-events-none"></div>

              {/* Card content */}
              <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:bg-white/5">
                <h3 className="text-2xl font-semibold text-cyan-400 group-hover:text-white transition">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-xs mt-1 mb-4 tracking-wide uppercase">
                  {post.date}
                </p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {post.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
