"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a form submission delay
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      // Optionally clear form fields
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <main className="relative bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] animate-gradient-x"></div>
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[40vh] bg-transparent z-10">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-center px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Your feedback fuels our innovation.
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="relative z-10 py-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">
              Contact Information
            </h2>
            <div>
              <p className="font-semibold">Address:</p>
              <p className="text-sm sm:text-base">
                IEEE Bangalore Section – APS-MTT Joint Chapter <br />
                XYZ Street, Bangalore, India
              </p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p className="text-sm sm:text-base">+91 12345 67890</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p className="text-sm sm:text-base">contact@ieeeapsmtt.in</p>
            </div>
            <div>
              <p className="font-semibold">Follow Us:</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition duration-300 text-sm sm:text-base"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition duration-300 text-sm sm:text-base"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition duration-300 text-sm sm:text-base"
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
            <AnimatePresence exitBeforeEnter>
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-green-600 p-8 rounded-lg text-center shadow-lg"
                >
                  <p className="text-xl sm:text-2xl font-semibold mb-2">
                    Thank you for reaching out!
                  </p>
                  <p className="text-sm sm:text-base">
                    We will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
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
                      className="mt-1 w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm sm:text-base"
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
                      className="mt-1 w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm sm:text-base"
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
                      className="mt-1 w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm sm:text-base"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition duration-300 text-sm sm:text-base"
                    disabled={loading}
                  >
                    {loading && <FaSpinner className="animate-spin" />}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-blue-400 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Location
          </motion.h2>
          <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-2xl">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.403736527335!2d77.59456341425887!3d12.97159899074561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16717470f6c3%3A0xbce34a7c450c1d5!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1587611445541!5m2!1sen!2sus"
              className="w-full h-full border-0"
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
