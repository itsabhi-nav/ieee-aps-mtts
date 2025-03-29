// app/components/SponsorCarousel.jsx
"use client";
"use client";
import React from "react";

export default function SponsorCarousel() {
  const sponsors = [
    "/images/sponsor1.png",
    "/images/sponsor2.png",
    "/images/sponsor3.png",
    "/images/sponsor4.png",
    "/images/sponsor5.png",
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Sponsors</h2>
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-8">
            {sponsors.map((sponsor, index) => (
              <img
                key={index}
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                className="w-40 h-auto object-contain hover:scale-110 transition-transform"
              />
            ))}
            {/* Duplicate for continuous effect */}
            {sponsors.map((sponsor, index) => (
              <img
                key={index + sponsors.length}
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                className="w-40 h-auto object-contain hover:scale-110 transition-transform"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
