// client/src/components/Home/ProjectPlannerCta.jsx
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiActivity, FiTerminal, FiShield } from "react-icons/fi";

const ProjectPlannerCta = () => {
  // Parallax constraints for the internal visual logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const springConfig = { stiffness: 150, damping: 20 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative bg-white dark:bg-brand-dark py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Surgical Frame Component */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto bg-brand-dark rounded-[4rem] border border-white/10 p-12 md:p-24 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
        >
          {/* Background Technical Visuals */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
              style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                perspective: "1000px",
              }}
              className="w-full h-full flex items-center justify-center opacity-30 dark:opacity-60"
            >
              <LogicCoreVisual />
            </motion.div>

            {/* Scanline and Grid Overlays */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-10 px-4 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/5"
            >
              <FiActivity className="text-brand-accent animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-accent">
                Awaiting_Instructions // Project_V1.0
              </span>
            </motion.div>

            <h2 className="font-display text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase italic">
              Initialize <br />{" "}
              <span className="font-display text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase italic">
                Ascension.
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-brand-gray/60 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Your business requires a proprietary digital edge. We provide the
              architecture to achieve it.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 text-xl font-black text-brand-dark bg-brand-accent rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(0,245,212,0.4)]"
              >
                <span>DEPLOY PROJECT</span>
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>

              <div className="hidden md:flex flex-col items-start text-left opacity-30">
                <div className="flex items-center gap-2 text-[10px] font-mono text-white uppercase tracking-widest">
                  <FiTerminal /> Ready for input
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-white uppercase tracking-widest">
                  <FiShield /> 128-bit Encrypted
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Corner Labels */}
          <div className="absolute top-10 left-10 font-mono text-[10px] text-white/10 uppercase tracking-widest hidden md:block">
            Blueprint_ID: WBX-99
          </div>
          <div className="absolute bottom-10 right-10 font-mono text-[10px] text-white/10 uppercase tracking-widest hidden md:block">
            Weblynx Infotech // Pune_Operations
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1.5px #00f5d4;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

// High-fidelity Technical Visual Core
const LogicCoreVisual = () => (
  <div className="relative w-[600px] h-[600px] flex items-center justify-center">
    {/* Geometric Logic Gates */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute border border-brand-accent/20"
        style={{
          width: `${200 + i * 150}px`,
          height: `${200 + i * 150}px`,
          borderRadius: i % 2 === 0 ? "40%" : "50%",
        }}
        animate={{
          rotate: i % 2 === 0 ? 360 : -360,
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20 + i * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}

    {/* Pulsing Core */}
    <div className="w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute p-8 border border-brand-accent/40 rounded-[2rem] bg-brand-dark shadow-[0_0_30px_rgba(0,245,212,0.1)]">
      <FiTerminal className="text-brand-accent text-5xl opacity-20" />
    </div>
  </div>
);

export default ProjectPlannerCta;
