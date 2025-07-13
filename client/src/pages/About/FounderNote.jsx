// client/src/components/Home/FounderNote.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Seo from "../../components/common/Seo.jsx";

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const signatureVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const FounderNote = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionRef = useRef(null);
  // Hook for parallax scroll effect on the image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className={`relative py-24 sm:py-32 overflow-hidden ${
        isDark ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      <Seo
        title="A Word from Our Founder - Shubham Pawale | Weblynx Infotech"
        description="Read a personal message from Shubham Pawale, Founder and Lead Developer of Weblynx Infotech, sharing his vision, philosophy, and dedication to crafting impactful digital experiences."
        keywords="Shubham Pawale, Weblynx Infotech founder, founder message, lead developer, company vision, digital services philosophy"
        ogTitle="Message from Shubham Pawale, Founder of Weblynx Infotech"
        ogDescription="Gain insight into the core values driving Weblynx Infotech directly from our founder, Shubham Pawale."
        ogUrl="https://www.weblynxinfotech.com/about#founder-note"
        canonical="https://www.weblynxinfotech.com/about#founder-note"
      />

      {/* Decorative Background Element */}
      <FaQuoteLeft
        className={`absolute top-1/2 -translate-y-1/2 -left-24 md:-left-12 text-[20rem] md:text-[28rem] z-0 transition-colors duration-300 pointer-events-none ${
          isDark ? "text-gray-800/50" : "text-gray-200/80"
        }`}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto max-w-6xl px-4 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center"
      >
        {/* Left Column: Image with Parallax Effect */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-1 flex justify-center"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
            >
              <img
                src="/founder-avatar.jpg"
                alt="Shubham Pawale, Founder of Weblynx Infotech"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-2">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-amber-400 dark:to-rose-400"
          >
            A Word from Our Founder
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-serif"
          >
            <p>
              When I started Weblynx Infotech, my core philosophy was simple: to
              create digital experiences that truly matter. I believe that
              technology should be a seamless bridge between a business's vision
              and its audience, empowering growth and fostering genuine
              connections.
            </p>
            <p>
              My journey in web development, driven by a passion for clean code
              and intuitive design, has led me to appreciate the profound impact
              a well-crafted digital presence can have. We don't just build
              websites; we craft solutions that solve real problems and open new
              opportunities for our clients.
            </p>
            <p>
              Thank you for considering us as your digital partner. We're
              excited about the possibility of building something exceptional
              together.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col items-end"
          >
            {/* --- Animated Signature --- */}
            <svg
              className="w-48 h-20"
              viewBox="0 0 200 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M 5.62,39.52 C 10.54,34.94 18.2,29.35 25.1,28.24 33.32,26.91 38.99,32.22 44.22,36.56 50.9,42.11 58.74,44.97 66.8,42.61 74.96,40.22 81.42,32.74 86.63,27.24 93.38,19.98 102.39,17.21 111.4,19.28 120.59,21.39 126.34,29.31 132.3,35.25 137.91,40.85 145.42,44.91 153.2,42.61 161.73,40.09 167.36,32.3 172.9,26.47 178.69,20.37 186.2,16.92 193.3,19.28"
                stroke={isDark ? "#e879f9" : "#4f46e5"}
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="transparent"
                variants={signatureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
              />
            </svg>
            <div className="text-right -mt-2">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                Shubham Pawale
              </p>
              <p className="text-md text-gray-600 dark:text-gray-400">
                Founder & Lead Developer
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderNote;
