// client/src/pages/About/TechStack.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWordpress,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { FiCpu, FiActivity, FiTerminal, FiLayers } from "react-icons/fi";

const techStackData = [
  {
    name: "React.js",
    Icon: SiReact,
    cat: "FRONTEND",
    id: "MOD-01",
    desc: "Building high-velocity, reactive user interfaces.",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    cat: "RUNTIME",
    id: "MOD-02",
    desc: "Non-blocking I/O for scalable server architectures.",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    cat: "DATABASE",
    id: "MOD-03",
    desc: "NoSQL document storage for complex data schemas.",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    cat: "LANGUAGE",
    id: "MOD-04",
    desc: "Strong typing for bulletproof enterprise code.",
  },
  {
    name: "Express.js",
    Icon: SiExpress,
    cat: "FRAMEWORK",
    id: "MOD-05",
    desc: "Minimalist web framework for surgical API builds.",
  },
  {
    name: "WordPress",
    Icon: SiWordpress,
    cat: "CMS",
    id: "MOD-06",
    desc: "Enterprise-grade content management systems.",
  },
  {
    name: "Tailwind",
    Icon: SiTailwindcss,
    cat: "STYLING",
    id: "MOD-07",
    desc: "Utility-first design systems for rapid deployment.",
  },
  {
    name: "GSAP",
    Icon: SiGreensock,
    cat: "MOTION",
    id: "MOD-08",
    desc: "Cinematic performance-based web animations.",
  },
  {
    name: "Framer",
    Icon: SiFramer,
    cat: "MOTION",
    id: "MOD-09",
    desc: "Production-ready declarative motion for React.",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    cat: "LANGUAGE",
    id: "MOD-10",
    desc: "The core engine of modern digital experiences.",
  },
  {
    name: "HTML5",
    Icon: SiHtml5,
    cat: "MARKUP",
    id: "MOD-11",
    desc: "Semantic structural layer for accessible web.",
  },
  {
    name: "CSS3",
    Icon: SiCss3,
    cat: "STYLING",
    id: "MOD-12",
    desc: "Advanced presentation and visual architecture.",
  },
];

const TechStack = () => {
  const [activeTech, setActiveTech] = useState(techStackData[0]);

  return (
    <section
      id="tech-stack"
      className="bg-white dark:bg-brand-dark py-24 md:py-40 border-t border-gray-100 dark:border-white/5 overflow-hidden"
    >
      <Seo title="System Tech Stack | Weblynx Infotech" />

      <div className="container mx-auto px-6">
        {/* Technical Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-brand-accent"></span>
              <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                Hardware_Software_Stack
              </span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-[0.85] uppercase italic">
              Core{" "}
              <span className="font-display text-6xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-[0.85] uppercase italic">
                Engine.
              </span>
            </h2>
          </motion.div>

          <div className="hidden lg:flex flex-col items-end opacity-20 font-mono text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <FiCpu /> stack_v4.0.2
            </div>
            <div className="flex items-center gap-2">
              <FiActivity /> optimization: 100%
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Information Terminal Panel */}
          <div className="relative mb-12 p-8 md:p-12 bg-gray-50 dark:bg-brand-dark-blue/20 border border-gray-200 dark:border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-xl group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-2 flex justify-center">
                  <div className="p-6 rounded-[2rem] bg-brand-accent text-brand-dark shadow-[0_0_40px_rgba(0,245,212,0.3)]">
                    <activeTech.Icon size={48} />
                  </div>
                </div>

                <div className="md:col-span-10">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-[10px] text-brand-accent border border-brand-accent/30 px-2 py-0.5 rounded tracking-widest">
                      {activeTech.id}
                    </span>
                    <span className="font-mono text-[10px] opacity-30 uppercase tracking-[0.4em]">
                      Type: {activeTech.cat}
                    </span>
                  </div>
                  <h3 className="font-display text-4xl font-bold text-brand-dark dark:text-white uppercase mb-4 tracking-tighter">
                    {activeTech.name}
                  </h3>
                  <p className="text-xl text-brand-light-blue dark:text-brand-gray font-light max-w-2xl leading-relaxed">
                    {activeTech.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Visual background element */}
            <FiTerminal className="absolute -bottom-10 -right-10 text-[15rem] opacity-[0.02] dark:opacity-[0.05]" />
          </div>

          {/* Module Selection Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-[2.5rem] overflow-hidden">
            {techStackData.map((tech) => (
              <motion.div
                key={tech.name}
                onMouseEnter={() => setActiveTech(tech)}
                className={`group relative bg-white dark:bg-brand-dark aspect-square flex flex-col items-center justify-center cursor-pointer transition-all duration-500 overflow-hidden
                  ${activeTech.name === tech.name ? "bg-brand-accent/5" : "hover:bg-gray-50 dark:hover:bg-white/5"}`}
              >
                <tech.Icon
                  className={`text-4xl transition-all duration-500 z-10 
                  ${activeTech.name === tech.name ? "text-brand-accent scale-110" : "text-brand-light-blue dark:text-brand-gray opacity-30 group-hover:opacity-100"}`}
                />

                {/* Micro-ID for the card */}
                <span className="absolute bottom-4 font-mono text-[8px] opacity-0 group-hover:opacity-20 transition-opacity tracking-widest uppercase">
                  {tech.id}
                </span>

                {/* Active Indicator Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-brand-accent transition-all duration-500 ${activeTech.name === tech.name ? "w-full" : "w-0"}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Infrastructure Footnote */}
          <div className="mt-12 flex justify-center items-center gap-6 opacity-20 font-mono text-[9px] uppercase tracking-[0.4em]">
            <div className="h-px w-20 bg-current" />
            <FiLayers /> Stack_Integrity_Verified
            <div className="h-px w-20 bg-current" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1.5px currentColor;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
