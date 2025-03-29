"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const imageData = [
  {
    id: 1,
    src: "/images/1.png",
    alt: "Gallery Image 1",
    title: "IEEE Conference 2021",
  },
  {
    id: 2,
    src: "/images/2.png",
    alt: "Gallery Image 2",
    title: "Robotics Workshop",
  },
  {
    id: 3,
    src: "/images/3.png",
    alt: "Gallery Image 3",
    title: "AI Summit",
  },
  {
    id: 4,
    src: "/images/4.png",
    alt: "Gallery Image 4",
    title: "Networking Event",
  },
  {
    id: 5,
    src: "/images/5.png",
    alt: "Gallery Image 5",
    title: "IoT Workshop",
  },
];

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % imageData.length);
    setImageLoaded(false);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imageData.length) % imageData.length);
    setImageLoaded(false);
  };

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleKeyDown = useCallback(
    (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowLeft") showPrev(e);
        else if (e.key === "ArrowRight") showNext(e);
        else if (e.key === "Escape") closeLightbox();
      }
    },
    [selectedIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    // Matching Testimonials background color
    <section className="relative bg-gray-900 py-10">
      <h2 className="text-4xl text-center font-bold text-white mb-6">
        Gallery
      </h2>

      {/* Slideshow */}
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={imageData[current].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full relative cursor-pointer"
            onClick={() => openLightbox(current)}
          >
            {/* Slideshow Image */}
            <div className="w-full h-[400px] bg-gray-700 rounded-xl overflow-hidden">
              <img
                src={imageData[current].src}
                alt={imageData[current].alt}
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover rounded-xl transition-opacity duration-700 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            {/* Title displayed below the image */}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full hover:bg-gray-600 z-10"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full hover:bg-gray-600 z-10"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-5xl w-full mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white focus:outline-none z-10"
              >
                <XMarkIcon className="w-7 h-7" />
              </button>

              <button
                onClick={showPrev}
                className="absolute top-1/2 left-4 text-white transform -translate-y-1/2 focus:outline-none z-10"
              >
                <ChevronLeftIcon className="w-10 h-10" />
              </button>

              <button
                onClick={showNext}
                className="absolute top-1/2 right-4 text-white transform -translate-y-1/2 focus:outline-none z-10"
              >
                <ChevronRightIcon className="w-10 h-10" />
              </button>

              <img
                src={imageData[selectedIndex].src}
                alt={imageData[selectedIndex].alt}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center text-white mt-4 text-xl font-semibold">
                {imageData[selectedIndex].title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
