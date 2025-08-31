// client/src/pages/NotFound/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";

// --- Framer Motion Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const NotFound = () => {
  return (
    <>
      <Seo
        title="404 Page Not Found | Weblynx Infotech"
        description="The page you are looking for on Weblynx Infotech might have been moved, deleted, or never existed. Please return to our homepage."
        keywords="404 error, page not found, Weblynx Infotech, invalid URL, broken link"
      />
      <main className="pt-[104px] md:pt-24 min-h-screen">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-96px)] flex flex-col items-center justify-center text-center p-8 bg-brand-dark text-white overflow-hidden"
        >
          {/* Animated Particle Background */}
          <ParticleBackground />

          <motion.h1
            variants={itemVariants}
            className="font-display text-8xl sm:text-9xl md:text-[12rem] font-bold mb-4 text-white/80"
          >
            404
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-display text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-white"
          >
            Oops! You've ventured into the void.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg max-w-xl mx-auto mb-10 sm:mb-12 text-brand-gray px-4"
          >
            It looks like you've wandered into uncharted digital territory. The
            page you're looking for might have been removed or never existed.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              to="/"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <motion.span
                className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                initial={{ x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span className="relative">Return to Homepage</span>
            </Link>
          </motion.div>
        </motion.section>
      </main>
    </>
  );
};

// Reusable animated particle background from your "Story" page for consistency
const ParticleBackground = () => (
  <motion.div
    className="absolute inset-0 z-0 h-full bg-[radial-gradient(circle_farthest-side,rgba(255,255,255,0.05),rgba(255,255,255,0))] bg-repeat"
    style={{ backgroundSize: "200px 200px" }}
    animate={{
      backgroundPosition: ["0% 0%", "100% 100%"],
    }}
    transition={{
      duration: 200,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
    }}
  />
);

export default NotFound;
