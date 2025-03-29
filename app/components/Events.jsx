"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Antenna & Propagation Symposium",
      date: "May 15, 2025",
      description:
        "Explore the latest breakthroughs in antenna design and wave propagation techniques.",
    },
    {
      id: 2,
      title: "Microwave Hackathon",
      date: "June 10-12, 2025",
      description:
        "Join fellow innovators to solve real-world RF and microwave engineering challenges.",
    },
    {
      id: 3,
      title: "RF & Microwave Expo",
      date: "August 22, 2025",
      description:
        "Discover cutting-edge developments in RF, microwave circuits, and systems.",
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Upcoming Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                {event.title}
              </h3>
              <p className="text-gray-400 mb-2">{event.date}</p>
              <p className="text-gray-300">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
