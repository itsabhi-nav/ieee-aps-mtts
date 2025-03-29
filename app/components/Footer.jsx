"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  const socialIcons = [
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  ];

  const links = {
    "Quick Links": [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Events", href: "/events" },
      { label: "Contact Us", href: "/contact" },
      { label: "Support", href: "/support" },
    ],
    "IEEE Resources": [
      "Connect with IEEE",
      "Careers at IEEE",
      "IEEE APS",
      "IEEE MTT-S",
      "AP/MTT Joint Bangalore Chapter",
      "IEEE Learning Network",
    ],
    Membership: [
      "Membership",
      "Join",
      "Renew",
      "Benefits",
      "IEEE Collabratec",
      "Guide to join IEEE",
    ],
  };

  const gradientHeadings = {
    "IEEE Resources": "from-pink-400 to-yellow-400",
    Membership: "from-purple-400 to-red-400",
    "Quick Links": "from-green-400 to-blue-400",
    "Connect With Us": "from-teal-400 to-cyan-500",
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* About Section */}
        <motion.div {...fadeInUp} className="flex flex-col space-y-4 text-left">
          <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-cyan-500">
            About the Society
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed hover:text-gray-100 transition-colors duration-300">
            IEEE AP-MTT Society advances RF, microwave, and antenna technologies
            across mobile, satellite, and wireless networks. We host premium
            workshops, webinars, and events for professionals and students.
          </p>
        </motion.div>

        {/* Dynamic Link Sections */}
        {Object.entries(links).map(([sectionTitle, items], idx) => (
          <motion.div
            key={idx}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 * (idx + 1) }}
            className="flex flex-col space-y-4 text-left"
          >
            <h3
              className={`text-xl font-bold bg-gradient-to-r ${
                gradientHeadings[sectionTitle] || "from-white to-gray-400"
              } text-transparent bg-clip-text relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-white`}
            >
              {sectionTitle}
            </h3>
            <ul className="text-sm text-gray-300 space-y-3">
              {items.map((item, index) => {
                const text = typeof item === "string" ? item : item.label;
                const href = typeof item === "string" ? "#" : item.href;

                return (
                  <li key={index}>
                    <Link href={href}>
                      <span className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-white hover:underline underline-offset-4 cursor-pointer">
                        {text}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}

        {/* Connect With Us */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.5 }}
          className="flex flex-col space-y-6 text-left"
        >
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-teal-400 mb-3">
              Connect With Us
            </h3>
            <div className="flex gap-6">
              {socialIcons.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                >
                  <div
                    title={item.label}
                    className="group transition-transform duration-300 hover:scale-110"
                  >
                    <item.icon
                      className="text-gray-300 group-hover:text-white transition-colors duration-300"
                      size={22}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full transform transition-transform hover:scale-[1.02] hover:shadow-xl">
            <iframe
              title="IEEE Location"
              className="w-full h-48 rounded-lg border-0 shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.9293359202213!2d77.56670737507549!3d12.957865087359205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c1f6230d3d%3A0xd1c1cbcd50836f72!2sIEEE%20Bangalore%20Section!5e0!3m2!1sen!2sin!4v1680437234051!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-sm text-gray-400 space-y-1 pb-6 px-4"
      >
        <p className="hover:text-white transition duration-300">
          © 2025 IEEE AP-MTT Society, Bangalore Chapter. All Rights Reserved.
        </p>
        <p className="transition duration-300">
          <a
            href="https://dubeyabhinav.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text font-semibold cursor-pointer transition-transform transform hover:scale-105 hover:underline underline-offset-4 hover:brightness-125 duration-300"
          >
            Designed and developed by Abhinav Dubey
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
