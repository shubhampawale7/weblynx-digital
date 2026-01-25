// client/src/pages/Home/HeroSection.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiLayout,
  FiTrendingUp,
  FiActivity,
  FiZap,
} from "react-icons/fi";
import Seo from "../../components/common/Seo.jsx";

const HeroSection = () => {
  const containerRef = useRef(null);
  // useMagneticSpotlight(containerRef); // Hook active

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      aria-label="Weblynx Hero Intro"
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-brand-dark transition-colors duration-500
                 [--spotlight-color:rgba(0,245,212,0.08)] dark:[--spotlight-color:rgba(0,245,212,0.05)]
                 before:pointer-events-none before:absolute before:inset-0 before:z-20
                 before:bg-[radial-gradient(circle_500px_at_var(--spotlight-x)_var(--spotlight-y),var(--spotlight-color),transparent_100%)]"
    >
      <Seo
        title="Digital Engineering & MERN Stack Development Pune"
        description="Weblynx Infotech is a surgical engineering firm in Pune specializing in high-performance MERN stack applications, scalable SaaS architecture, and algorithmic SEO dominance."
      />

      {/* --- Background Architectural Layers --- */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]"
        aria-hidden="true"
      />

      <div className="relative z-30 container mx-auto px-6 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* --- Content Column --- */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 mb-8"
            >
              <FiActivity
                className="text-brand-accent animate-pulse text-xs"
                aria-hidden="true"
              />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent">
                System Status: Online // Deploying_Excellence
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-6xl sm:text-8xl lg:text-[7rem] font-black text-brand-dark dark:text-white tracking-tighter leading-[0.85]"
            >
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-teal-400 to-brand-accent bg-[size:200%_auto] animate-text-shimmer italic font-light">
                Digital Power.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-xl text-brand-light-blue dark:text-brand-gray max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Weblynx Infotech is a{" "}
              <strong className="font-bold text-brand-dark dark:text-white">
                surgical engineering firm based in Pune
              </strong>
              . We don't just build websites; we deploy{" "}
              <strong className="font-bold text-brand-dark dark:text-white">
                high-stakes MERN stack infrastructure
              </strong>{" "}
              optimized for global scale and algorithmic SEO dominance.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <Link
                to="/contact"
                aria-label="Initialize your project with Weblynx"
                className="group relative px-10 py-5 bg-brand-dark dark:bg-brand-accent text-white dark:text-brand-dark font-black uppercase text-sm tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-brand-accent/20"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Initialize Project{" "}
                  <FiArrowRight
                    className="group-hover:translate-x-2 transition-transform"
                    aria-hidden="true"
                  />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <div className="flex items-center gap-4 text-xs font-mono opacity-40 uppercase tracking-widest">
                <div className="w-10 h-px bg-current" aria-hidden="true" />
                Specializing in Full-Stack MERN
              </div>
            </motion.div>
          </div>

          {/* --- Interactive Bento Grid Column --- */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
            role="list"
            aria-label="Core Engineering Capabilities"
          >
            <GridItem
              icon={<FiLayout aria-hidden="true" />}
              title="UX_ENGINE"
              description="High-fidelity MERN interfaces."
              className="col-span-2 bg-brand-accent/5 dark:bg-brand-accent/10 border-brand-accent/20"
            />
            <GridItem
              icon={<FiCode aria-hidden="true" />}
              title="CORE_LOGIC"
              description="Clean-room Node.js architecture."
            />
            <GridItem
              icon={<FiTrendingUp aria-hidden="true" />}
              title="SEO_SYSTEMS"
              description="Algorithmic growth protocols."
            />

            <div className="col-span-2 p-6 rounded-3xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/20 backdrop-blur-sm flex justify-between items-center">
              <div
                className="flex -space-x-3"
                aria-label="Recent client project contributors"
              >
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-gray overflow-hidden"
                  >
                    <img
                      src={`/avatars/client-${i}.jpg`}
                      alt={`Weblynx Client Deployment ${i}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="text-right">
                <span className="block text-xl font-bold dark:text-white leading-none">
                  50+
                </span>
                <span className="text-[10px] font-mono opacity-40 uppercase">
                  Systems Shipped
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ... Styles remain ... */}
    </section>
  );
};

const GridItem = ({ icon, title, description, className = "" }) => {
  return (
    <motion.div
      role="listitem"
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative p-8 bg-white/40 dark:bg-brand-dark-blue/20 backdrop-blur-xl rounded-[2.5rem] border border-gray-100 dark:border-white/5 overflow-hidden transition-all duration-500 group ${className}`}
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div className="text-2xl text-brand-accent group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <div>
          <h2 className="font-mono font-black text-sm text-brand-dark dark:text-white uppercase tracking-widest">
            {title}
          </h2>
          <p className="mt-1 text-xs text-brand-light-blue dark:text-brand-gray leading-tight">
            {description}
          </p>
        </div>
      </div>
      <FiZap
        className="absolute -bottom-2 -right-2 text-6xl opacity-[0.03] group-hover:opacity-[0.1] transition-opacity"
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default HeroSection;
