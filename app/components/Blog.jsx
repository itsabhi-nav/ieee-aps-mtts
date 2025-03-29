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
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-center font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-10 drop-shadow-lg">
          Latest from Our Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="relative overflow-hidden rounded-xl shadow-2xl bg-white/10 backdrop-blur-sm p-6 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                rotateX: "3deg",
                rotateY: "3deg",
              }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-blue-400">
                  {post.title}
                </h3>
                <p className="text-lg text-gray-400 mb-3">{post.date}</p>
                <p className="text-gray-300">{post.summary}</p>
                <motion.a
                  href="#"
                  className="mt-6 inline-flex items-center text-blue-400 font-medium"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              </div>

              {/* Decorative animated border overlay */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none"
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
          ))}
        </div>
      </div>
    </section>
  );
}
