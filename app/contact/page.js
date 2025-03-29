"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a form submission delay
    setTimeout(() => {
      setSubmitted(true);
      // Optionally clear form fields
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[40vh] bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-black opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            We'd love to hear from you!
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              Contact Information
            </h2>
            <div>
              <p className="font-semibold">Address:</p>
              <p>
                IEEE Bangalore Section – APS-MTT Joint Chapter <br />
                XYZ Street, Bangalore, India
              </p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>+91 12345 67890</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>contact@ieeeapsmtt.in</p>
            </div>
            <div>
              <p className="font-semibold">Follow Us:</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="bg-green-500 p-6 rounded-lg text-center">
                <p className="text-xl font-semibold">
                  Thank you for reaching out!
                </p>
                <p>We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-blue-400 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Location
          </motion.h2>
          <div className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
            {/* Replace the src below with your actual Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.403736527335!2d77.59456341425887!3d12.97159899074561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16717470f6c3%3A0xbce34a7c450c1d5!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1587611445541!5m2!1sen!2sus"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
