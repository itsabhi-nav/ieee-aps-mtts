"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* IEEE Resources Column */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">IEEE Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Connect with IEEE
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Careers at IEEE
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  IEEE APS
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  IEEE MTT-S
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  AP/MTT Joint Bangalore Chapter
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  IEEE Learning Network
                </span>
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Membership Column */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Membership</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Membership
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Join
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Renew
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Benefits
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  IEEE Collbratec
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Guide to join IEEE
                </span>
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Quick Links Column */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-center">
            <li>
              <Link href="/">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </span>
              </Link>
            </li>
            <li>
              <Link href="/team">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Team
                </span>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Events
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Contact Us
                </span>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <span className="text-gray-400 hover:text-white transition duration-300">
                  Contact & Support
                </span>
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Social Media Column */}
        <motion.div
          className="flex flex-col items-center md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <Link href="https://twitter.com" target="_blank">
              <span className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </span>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <span className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedin size={24} />
              </span>
            </Link>
            <Link href="https://github.com" target="_blank">
              <span className="text-gray-400 hover:text-white transition duration-300">
                <FaGithub size={24} />
              </span>
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <span className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebook size={24} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="border-t border-gray-800 py-4">
        <p className="text-center text-gray-500 text-sm">
          Designed with care by the IEEE Chapter Team.
        </p>
      </div>
    </footer>
  );
}
