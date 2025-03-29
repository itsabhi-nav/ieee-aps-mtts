"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-gray-900 text-gray-300 min-h-screen">
      {/* Hero / Banner */}
      <section className="relative flex items-center justify-center h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="https://res.cloudinary.com/dcahaaigp/video/upload/f_auto:video,q_auto/bi3uwoy63vnqq2vj1dbv"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-50 animate-pulse-slow" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About IEEE APS-MTTS
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Bangalore Section Joint Chapter
          </motion.p>
        </div>
      </section>

      {/* About Society Section */}
      <section id="ieee-society" className="py-20 px-4 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          IEEE AP-MTTS Society
        </motion.h2>
        <motion.p
          className="mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          IEEE AP-MTTS society’s field of interest includes analysis, design,
          development, measurement, and testing; radiation, radio propagation,
          and the interaction of electromagnetic waves with discrete and
          continuous media; and applications and systems pertinent to antennas,
          propagation, and sensing, such as applied optics, antenna signal
          processing and control, radio astronomy, and propagation and radiation
          aspects of terrestrial and space-based communication, including
          wireless, mobile, satellite, and telecommunications. The society
          promotes the advancement of microwave theory and its applications,
          including RF, microwave, millimetre-wave, and terahertz technologies.
        </motion.p>
        <motion.p
          className="mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          The activities sponsored by the AP-MTTS society include a broad
          spectrum of conferences, workshops, tutorials, technical committees,
          chapter meetings, publications, professional education programs, and
          local activities that foster original work in all aspects of antennas,
          microwave engineering, and technology.
        </motion.p>

        <motion.h3
          id="bangalore-chapter"
          className="text-2xl font-semibold text-white mb-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          AP-MTTS Bangalore Chapter
        </motion.h3>
        <motion.p
          className="leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          AP-MTTS Bangalore chapter is one of the most dynamic and vibrant
          chapters in India and Region 10. With over 80 AP-MTT professional
          members from industry and academia, and around 20 student members, the
          society conducts high-value technology workshops, talks, webinars, and
          seminars in the areas of antennas and microwave engineering.
        </motion.p>
        <br></br>
        <p className="leading-relaxed">
          The society is engaged in organizing high-value conferences such as
          InCAP, IRSI/IMS, and CONECCT, and is striving to bring top-rated
          events in the domain of AP-MTTS.
        </p>
      </section>

      {/* Message from the Chair Section */}
      <section id="message-from-chair" className="py-20 px-4 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Message from the Chair
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <p className="mb-4">
              <strong>Dear Esteemed Members,</strong>
            </p>
            <p className="mb-4 leading-relaxed">
              I congratulate all of you for being part of this great community
              comprising of RF and microwave engineers. RF and microwaves domain
              has a great legacy of people who have contributed greatly in
              shaping the modern world today. The origin and impact of RF and
              microwave is seen everywhere in the universe spanning across
              various domains like cosmic microwave background, radars,
              communications, biomedical applications, industrial microwaves,
              space exploration, near field applications, modern warfare
              tactics, etc.
            </p>
            <p className="mb-4 leading-relaxed">
              IEEE AP/MTTS Jt. Chapter, Bangalore has been continuously involved
              in spreading the knowledge to every person in the society and
              working on their professional upliftment. The chapter has
              witnessed great volunteers in the past and is evolving with more
              budding volunteers ready to work for the cause. As a chair, it's
              my priority to keep up the pace set by my seniors and peers, and
              to provide ample opportunities to professionals, young
              professionals, academicians, and students to grow intellectually
              and professionally.
            </p>
            <p className="mb-4 leading-relaxed italic text-gray-400 border-l-4 pl-4 border-cyan-400">
              “You cannot change your future, but you can change your habits,
              and surely your habits will change your future.” — Dr. APJ Abdul
              Kalam
            </p>
            <p className="mb-4 leading-relaxed">
              I am looking forward to more volunteers joining the cause and
              working towards the upliftment of the RF and microwave community.
              Congratulations to our 600+ members once again. I welcome you to
              the society and invite you to join the team to volunteer for
              upcoming events. This chapter has been making its mark across Pan
              India through various past endeavors such as MAPCON 2022, IEEE
              SPACE 2024, and many others.
            </p>
            <p className="mb-8 leading-relaxed">
              <strong>Best Regards,</strong> <br />
              Dr. Ashutosh Kedar <br />
              Chair-2025
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
