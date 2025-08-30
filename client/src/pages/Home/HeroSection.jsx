// client/src/components/Home/Hero.jsx

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiLayout, FiTrendingUp } from "react-icons/fi";
import Seo from "../../components/common/Seo.jsx";

// Custom hook for the magnetic spotlight effect
const useMagneticSpotlight = (ref) => {
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      el.style.setProperty("--spotlight-x", `${x}px`);
      el.style.setProperty("--spotlight-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [ref]);
};

const HeroSection = () => {
  const containerRef = useRef(null);
  useMagneticSpotlight(containerRef);

  const containerVariants = {
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
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-brand-dark transition-colors duration-300
                 [--spotlight-color:rgba(0,245,212,0.15)] dark:[--spotlight-color:rgba(0,245,212,0.1)]
                 before:pointer-events-none before:fixed before:inset-0 before:z-20
                 before:bg-[radial-gradient(circle_350px_at_var(--spotlight-x)_var(--spotlight-y),var(--spotlight-color),transparent_100%)]"
    >
      <Seo
        title="Weblynx Infotech - We Engineer Digital Excellence"
        description="A leading digital agency in Pune, India, building high-performance web platforms, mobile applications, and scalable software solutions that define the future of digital interaction."
        keywords="elite web development, custom software Pune, tech agency India, performance engineering, Weblynx Infotech"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left Column: Headline & CTA */}
          <div className="text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark dark:text-white tracking-tighter"
            >
              We Engineer
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-teal-400">
                Digital Excellence.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-brand-light-blue dark:text-brand-gray max-w-lg mx-auto lg:mx-0"
            >
              We are a Pune-based digital powerhouse, building high-performance
              platforms that are secure, scalable, and engineered for success.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-white bg-brand-dark hover:bg-black dark:text-brand-dark dark:bg-brand-accent dark:hover:bg-brand-accent-hover rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>Start a Project</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Interactive Bento Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 grid-rows-2 gap-4 lg:gap-6"
          >
            <GridItem
              icon={<FiLayout className="text-brand-accent" />}
              title="UI/UX Design"
              description="Intuitive and beautiful interfaces."
              className="col-span-2"
            />
            <GridItem
              icon={<FiCode className="text-brand-accent" />}
              title="Clean Code"
              description="Scalable and robust architecture."
            />
            <GridItem
              icon={<FiTrendingUp className="text-brand-accent" />}
              title="SEO & Growth"
              description="Engineered for visibility."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Grid Item Component
const GridItem = ({ icon, title, description, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, z: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative p-6 bg-white/50 dark:bg-brand-dark-blue/30 backdrop-blur-md rounded-2xl border border-white/20 dark:border-brand-light-blue/20 overflow-hidden shadow-xl ${className}`}
    >
      <div className="flex flex-col gap-3">
        <div className="text-3xl">{icon}</div>
        <h3 className="font-display font-semibold text-lg text-brand-dark dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-brand-light-blue dark:text-brand-gray">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default HeroSection;
