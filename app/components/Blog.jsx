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
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Latest from Our Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{post.date}</p>
              <p className="text-gray-300">{post.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
