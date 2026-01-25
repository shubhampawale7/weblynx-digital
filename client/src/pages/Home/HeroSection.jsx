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

// Custom hook for the magnetic spotlight effect (Optimized)
const useMagneticSpotlight = (ref) => {
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = el.getBoundingClientRect();
      el.style.setProperty("--spotlight-x", `${clientX - left}px`);
      el.style.setProperty("--spotlight-y", `${clientY - top}px`);
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
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-brand-dark transition-colors duration-500
                 [--spotlight-color:rgba(0,245,212,0.08)] dark:[--spotlight-color:rgba(0,245,212,0.05)]
                 before:pointer-events-none before:absolute before:inset-0 before:z-20
                 before:bg-[radial-gradient(circle_500px_at_var(--spotlight-x)_var(--spotlight-y),var(--spotlight-color),transparent_100%)]"
    >
      <Seo
        title="Weblynx Infotech - Elite Digital Engineering"
        description="Pune's premier digital powerhouse architecting high-performance web platforms and scalable software ecosystems."
      />

      {/* Background Architectural Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:200px_200px]"></div>
      </div>

      {/* Technical Scanline Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />

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
              <FiActivity className="text-brand-accent animate-pulse text-xs" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent">
                System Status: Active // V4.0
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
              We are a surgical engineering firm based in Pune. We don't just
              build websites; we deploy high-stakes digital infrastructure
              optimized for global scale.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <Link
                to="/contact"
                className="group relative px-10 py-5 bg-brand-dark dark:bg-brand-accent text-white dark:text-brand-dark font-black uppercase text-sm tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-brand-accent/20"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Initialize Project{" "}
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <div className="flex items-center gap-4 text-xs font-mono opacity-40 uppercase tracking-widest">
                <div className="w-10 h-px bg-current" />
                Built with MERN
              </div>
            </motion.div>
          </div>

          {/* --- Interactive Bento Grid Column --- */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <GridItem
              icon={<FiLayout />}
              title="UX_ENGINE"
              description="High-fidelity human interfaces."
              className="col-span-2 bg-brand-accent/5 dark:bg-brand-accent/10 border-brand-accent/20"
            />
            <GridItem
              icon={<FiCode />}
              title="CORE_LOGIC"
              description="Clean-room architecture."
            />
            <GridItem
              icon={<FiTrendingUp />}
              title="DOMINANCE"
              description="Algorithmic SEO growth."
            />
            <div className="col-span-2 p-6 rounded-3xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/20 backdrop-blur-sm flex justify-between items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-gray"
                  />
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

      {/* CSS Shimmer Animation */}
      <style jsx>{`
        @keyframes text-shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-text-shimmer {
          animation: text-shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

// Reusable Grid Item Component
const GridItem = ({ icon, title, description, className = "" }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative p-8 bg-white/40 dark:bg-brand-dark-blue/20 backdrop-blur-xl rounded-[2.5rem] border border-gray-100 dark:border-white/5 overflow-hidden transition-all duration-500 group ${className}`}
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div className="text-2xl text-brand-accent group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <div>
          <h3 className="font-mono font-black text-sm text-brand-dark dark:text-white uppercase tracking-widest">
            {title}
          </h3>
          <p className="mt-1 text-xs text-brand-light-blue dark:text-brand-gray leading-tight">
            {description}
          </p>
        </div>
      </div>
      <FiZap className="absolute -bottom-2 -right-2 text-6xl opacity-[0.03] group-hover:opacity-[0.1] transition-opacity" />
    </motion.div>
  );
};

export default HeroSection;
