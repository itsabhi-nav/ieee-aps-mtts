"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Education() {
  const sections = [
    {
      title: "Resources",
      items: [
        {
          label: "National Radio Astronomy Observatory",
          href: "https://public.nrao.edu/",
        },
        {
          label: "Antenna Basics",
          href: "https://www.antenna-theory.com/basics/main.php",
        },
        {
          label: "Antenna-Theory.com",
          href: "https://www.antenna-theory.com/",
        },
      ],
    },
    {
      title: "Books",
      items: [],
    },
    {
      title: "Journals",
      items: [
        {
          label: "IEEE AP-S Journals",
          href: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8",
        },
        {
          label: "Hindawi Journals",
          href: "https://www.hindawi.com/journals/ijap/",
        },
      ],
    },
    {
      title: "Video Lectures",
      items: [
        {
          label: "IEEE APS Videos",
          href: "https://ieeetv.ieee.org/ieeetv-specials/aps",
        },
        {
          label: "IEEE Bangalore Section Videos",
          href: "https://ieeetv.ieee.org/",
        },
        {
          label: "Computational Electromagnetics",
          href: "https://nptel.ac.in/courses/108/106/108106167",
        },
        {
          label: "Computational Electromagnetics & Applications",
          href: "https://nptel.ac.in/courses/108/101/108101122/",
        },
        { label: "NPTEL Video Lectures", href: "https://nptel.ac.in/" },
        {
          label: "Antennas",
          href: "https://nptel.ac.in/courses/108/101/108101092/",
        },
        {
          label: "Analysis and Design Principles of Microwave Antennas",
          href: "https://nptel.ac.in/courses/117/101/117101135/",
        },
        {
          label: "Microwave Engineering",
          href: "https://nptel.ac.in/courses/117/101/117101090/",
        },
        {
          label: "Microwave Theory and Techniques",
          href: "https://nptel.ac.in/courses/108/105/108105132/",
        },
        {
          label: "Basic Building Blocks of Microwave Engineering",
          href: "https://nptel.ac.in/courses/117/105/117105143/",
        },
        {
          label: "Basic Tools of Microwave Engineering",
          href: "https://nptel.ac.in/courses/117/105/117105144/",
        },
      ],
    },
  ];

  return (
    <main className="bg-gray-900 text-gray-300 min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education Resources
        </motion.h1>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-gray-700 pb-1">
                {section.title}
              </h2>
              <ul className="space-y-2 ml-4 list-disc">
                {section.items.length > 0 ? (
                  section.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        target="_blank"
                        className="hover:underline text-gray-300 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400">Coming soon...</li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
