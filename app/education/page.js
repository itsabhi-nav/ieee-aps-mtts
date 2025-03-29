"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Dummy resource data for Antenna Fundamentals
const antennaFundamentals = {
  Websites: [
    {
      id: 1,
      title: "National Radio Astronomy Observatory",
      link: "https://example.com/antenna-web",
      image:
        "https://i0.wp.com/aps-mtts.ieeebangalore.org/wp-content/uploads/2021/03/NRAO_logo_white_border.png?resize=231%2C300&ssl=1",
    },
    {
      id: 2,
      title: "Antenna Basics",
      link: "https://example.com/rf-portal",
      image:
        "https://i0.wp.com/aps-mtts.ieeebangalore.org/wp-content/uploads/2021/03/220px-Sidelobes_en.svg.png?w=220&ssl=1",
    },
    {
      id: 3,
      title: "Antenna-Theory.com",
      link: "https://example.com/rf-portal",
      image:
        "https://i0.wp.com/aps-mtts.ieeebangalore.org/wp-content/uploads/2021/03/unnamed.gif?fit=398%2C512&ssl=1",
    },
  ],
  Books: [
    {
      id: 1,
      title: "Antenna Theory: Analysis and Design",
      link: "https://example.com/book1",
      image:
        "https://i0.wp.com/aps-mtts.ieeebangalore.org/wp-content/uploads/2021/03/B1.jpg?resize=707%2C1024&ssl=1",
    },
    {
      id: 2,
      title: "Sparse Phased Array Antennas: Theory and Applications",
      link: "https://www.amazon.com/dp/163081878X",
      image:
        "https://i0.wp.com/aps-mtts.ieeebangalore.org/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-16-at-15.34.08.jpeg?w=334&ssl=1",
    },
    {
      id: 3,
      title: "Antenna and Wave Propogation",
      link: "https://www.amazon.com/dp/163081878X",
      image:
        "https://i0.wp.com/aps-mtts.ieeebangalore.org/wp-content/uploads/2021/03/B2.jpg?fit=260%2C300&ssl=1",
    },
  ],
  Journals: [
    {
      id: 1,
      title: "IEEE AP-S Journals",
      link: "https://example.com/journal1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-t4h2I41FmPKJEGQ6kfCiiLikTbBSHjoLA&s",
    },
    {
      id: 2,
      title: "Hindwai Journals",
      link: "https://example.com/journal2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYazZi9oTr9c-TKf9o0ufYRkse8RoXXQt3vg&s",
    },
  ],
  VideoLectures: [
    {
      id: 1,
      title: "Antenna Fundamentals Lecture 1",
      videoId: "ZaXm6wau-jc",
    },
    {
      id: 2,
      title: "Antenna Fundamentals Lecture 2",
      videoId: "4nKRp7TzgBI",
    },
  ],
};

// Dummy resource data for Computational Electromagnetics
const computationalEM = {
  Books: [
    {
      id: 1,
      title: "Computational Electromagnetics",
      link: "https://example.com/compBook1",
      image:
        "https://i0.wp.com/aps-mtts.ieeebangalore.org/wp-content/uploads/2021/03/BB2.jpg?fit=153%2C238&ssl=1",
    },
    {
      id: 2,
      title: "Finite-Difference Time-Domain Method",
      link: "https://example.com/compBook2",
      image:
        "https://i0.wp.com/aps-mtts.ieeebangalore.org/wp-content/uploads/2021/03/BB4.jpg?w=266&ssl=1",
    },
  ],
  VideoLectures: [
    {
      id: 1,
      title: "Computational EM Lecture 1",
      videoId: "Lc1kZwJXeNw",
    },
    {
      id: 2,
      title: "Computational EM Lecture 2",
      videoId: "NEVBspWwj3g",
    },
  ],
};

// NPTEL Video Lectures (This was missing previously)
const nptelVideos = [
  {
    id: 1,
    title: "NPTEL: Antenna Basics",
    videoId: "wx_tIvaajAI",
  },
  {
    id: 2,
    title: "How do antenna work?",
    videoId: "E6GnkJt68EA",
  },
  {
    id: 3,
    title: "NPTEL: Microwave Engineering",
    videoId: "bi1nDg9CqRo",
  },
];

// Function to extract YouTube Video ID from URL or direct videoId
const extractVideoId = (input) => {
  try {
    const url = new URL(input);
    if (url.hostname.includes("youtube.com")) {
      return url.searchParams.get("v"); // Extract video ID from youtube.com/watch?v=...
    } else if (url.hostname === "youtu.be") {
      return url.pathname.split("/")[1]; // Extract video ID from youtu.be
    }
  } catch (error) {
    return input; // If it's already a direct video ID (not a URL)
  }
  return null;
};

export default function EducationPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideoModal = (video) => setSelectedVideo(video);
  const closeVideoModal = () => setSelectedVideo(null);

  const renderResourceBoxes = (resources) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {resources.map((resource) => (
        <a
          key={resource.id}
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl hover:bg-gray-700 transition-transform duration-300 transform flex flex-col"
        >
          {resource.image && (
            <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-xl mb-4 bg-gray-900">
              <img
                src={resource.image}
                alt={resource.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
          <h3 className="text-xl font-bold text-blue-500 mb-2">
            {resource.title}
          </h3>
          <p className="text-gray-300 mt-auto">Click to explore</p>
        </a>
      ))}
    </div>
  );

  const renderVideoBoxes = (videos) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {videos.map((video) => {
        const videoId = extractVideoId(video.videoId || video.videoUrl);
        const thumbnailUrl = videoId
          ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          : "https://via.placeholder.com/480x360?text=No+Thumbnail"; // Fallback Image

        return (
          <div
            key={video.id}
            className="relative cursor-pointer group overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-all"
            onClick={() => openVideoModal({ ...video, videoId })}
          >
            {/* Video Thumbnail */}
            <img
              src={thumbnailUrl}
              alt={video.title}
              className="w-full h-48 object-cover rounded-xl group-hover:opacity-75 transition-opacity duration-300"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-16 h-16 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5,3 19,12 5,21 5,3" />
              </svg>
            </div>

            {/* Video Title */}
            <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-60 text-white text-lg font-semibold">
              {video.title}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <section className="relative flex items-center justify-center h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="https://res.cloudinary.com/dcahaaigp/video/upload/f_auto:video,q_auto/mk7latqwmlhbvtyzagi1"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-60 animate-pulse-slow" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text drop-shadow-lg mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Education & Resources
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Explore curated resources on Antenna Fundamentals, Computational
            Electromagnetics, and NPTEL Video Lectures.
          </motion.p>
        </div>
      </section>

      {/* Antenna Fundamentals Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Antenna Fundamentals
          </motion.h2>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Websites</h3>
            {renderResourceBoxes(antennaFundamentals.Websites)}
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Books</h3>
            {renderResourceBoxes(antennaFundamentals.Books)}
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Journals</h3>
            {renderResourceBoxes(antennaFundamentals.Journals)}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Video Lectures</h3>
            {renderVideoBoxes(antennaFundamentals.VideoLectures)}
          </div>
        </div>
      </section>

      {/* Computational EM Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Computational Electromagnetics
          </motion.h2>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Books</h3>
            {renderResourceBoxes(computationalEM.Books)}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Video Lectures</h3>
            {renderVideoBoxes(computationalEM.VideoLectures)}
          </div>
        </div>
      </section>

      {/* NPTEL Videos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            NPTEL Video Lectures
          </motion.h2>
          {renderVideoBoxes(nptelVideos)}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 text-white focus:outline-none"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-center text-white mt-4 text-xl font-semibold">
                {selectedVideo.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
