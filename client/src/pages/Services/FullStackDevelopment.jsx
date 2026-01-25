// client/src/pages/Services/FullStackDevelopment.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiCloud,
  FiShield,
  FiLayers,
  FiArrowRight,
  FiCheckCircle,
  FiArrowLeft,
  FiMaximize,
  FiCpu,
  FiGlobe,
  FiActivity,
} from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

// --- Specialized Expertise Data ---
const expertiseData = [
  {
    id: "01",
    icon: FiCode,
    title: "Frontend Engineering",
    desc: "Crafting reactive, high-performance UIs using the latest React.js ecosystems.",
    span: "md:col-span-4",
  },
  {
    id: "02",
    icon: FiServer,
    title: "Backend Architecture",
    desc: "Designing robust server-side logic and REST/GraphQL APIs with Node.js.",
    span: "md:col-span-8",
  },
  {
    id: "03",
    icon: FiDatabase,
    title: "Database Schema",
    desc: "Architecting scalable data models with MongoDB for high-velocity retrieval.",
    span: "md:col-span-8",
  },
  {
    id: "04",
    icon: FiShield,
    title: "Hardened Security",
    desc: "End-to-end encryption and rigorous QA across every layer of the stack.",
    span: "md:col-span-4",
  },
];

const techStackData = [
  { name: "React", Icon: FaReact },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind CSS", SiTailwindcss },
  { name: "MERN Stack", Icon: FiLayers },
];

const comparisonData = [
  {
    feature: "Communication",
    fullStack: "Seamless internal data flow.",
    separateTeams: "Latency due to cross-team silos.",
  },
  {
    feature: "Project Velocity",
    fullStack: "Synchronized development cycles.",
    separateTeams: "Bottlenecks during hand-offs.",
  },
  {
    feature: "Problem Solving",
    fullStack: "Holistic, stack-wide debugging.",
    separateTeams: "Patchwork fixes in isolation.",
  },
  {
    feature: "Ownership",
    fullStack: "One point of total accountability.",
    separateTeams: "Fragmented responsibility.",
  },
];

const FullStackDevelopment = () => {
  return (
    <>
      <Seo
        title="Full Stack Engineering | Weblynx Infotech"
        description="End-to-end MERN stack development engineered for performance and scalability."
      />
      <main className="bg-white dark:bg-brand-dark min-h-screen text-brand-dark dark:text-white selection:bg-brand-accent selection:text-brand-dark">
        {/* --- SURGICAL HERO --- */}
        <section className="pt-32 pb-20 px-6 border-b border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="container mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all mb-16"
            >
              <FiArrowLeft /> Back to Arsenal
            </Link>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-brand-accent font-mono text-sm tracking-[0.2em] mb-4 block uppercase">
                  System Layer: Full-Stack
                </span>
                <h1 className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                  End-To-End <br />{" "}
                  <span className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                    Code
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed">
                  We bridge the gap between user experience and server-side
                  stability. One unified team. One flawlessly integrated
                  application.
                </p>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
                  >
                    Deploy Full-Stack
                  </Link>
                </div>
              </motion.div>

              <div className="relative h-[500px] hidden lg:flex items-center justify-center">
                <StackVisualizer />
              </div>
            </div>
          </div>
        </section>

        {/* --- BLUEPRINT SCHEMATIC --- */}
        <section className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              The <span className="text-brand-accent">Expertise</span>
            </h2>
            <p className="text-xs font-mono opacity-30 max-w-[200px] uppercase text-right leading-tight">
              Architecture // Logic // Persistence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            {expertiseData.map((item) => (
              <div
                key={item.id}
                className={`${item.span} bg-white dark:bg-brand-dark p-12 group hover:bg-brand-dark-blue/20 transition-all duration-500 relative overflow-hidden`}
              >
                <div className="flex justify-between items-start mb-16 relative z-10">
                  <span className="text-xs font-mono opacity-20">
                    [{item.id}]
                  </span>
                  <item.icon
                    className="text-brand-accent opacity-30 group-hover:opacity-100 transition-all duration-500"
                    size={32}
                  />
                </div>
                <h3 className="text-3xl font-bold tracking-tighter mb-4 uppercase relative z-10">
                  {item.title}
                </h3>
                <p className="text-lg opacity-50 leading-tight max-w-xs relative z-10">
                  {item.desc}
                </p>
                <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                  <item.icon size={280} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- ADVANTAGE COMPARISON --- */}
        <section className="py-32 px-6 bg-gray-50 dark:bg-black/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase">
              The <span className="text-brand-accent">Unified</span> Edge
            </h2>
            <div className="border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-3xl">
              <div className="grid grid-cols-3 bg-gray-100 dark:bg-white/5 p-8 border-b border-gray-200 dark:border-white/10">
                <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                  Dimension
                </div>
                <div className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                  Full-Stack Sync
                </div>
                <div className="font-mono text-[10px] opacity-40 uppercase text-right tracking-widest">
                  Fragmented Teams
                </div>
              </div>
              {comparisonData.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 p-8 border-b border-gray-100 dark:border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                >
                  <div className="font-bold text-lg uppercase tracking-tighter">
                    {row.feature}
                  </div>
                  <div className="text-brand-accent font-medium pr-4">
                    {row.fullStack}
                  </div>
                  <div className="opacity-40 text-right italic text-sm">
                    {row.separateTeams}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TECH FLOW --- */}
        <section className="py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="container mx-auto px-6 mb-12 flex justify-between">
            <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.5em]">
              System Dependencies
            </span>
            <FiActivity className="text-brand-accent animate-pulse" />
          </div>
          <div className="flex justify-around items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {techStackData.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                {tech.Icon && <tech.Icon size={40} />}
                <span className="text-[10px] font-mono font-bold uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- TERMINAL CTA --- */}
        <section className="py-40 px-6 text-center bg-brand-dark text-white">
          <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase mb-12 leading-[0.8]">
            Master <br />{" "}
            <span className="text-brand-accent italic text-outline">
              The Stack.
            </span>
          </h2>
          <Link
            to="/contact"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Start End-to-End <FiMaximize />
          </Link>
        </section>

        <style jsx>{`
          .text-outline {
            -webkit-text-stroke: 1px currentColor;
            color: transparent;
          }
        `}</style>
      </main>
    </>
  );
};

// --- INTERACTIVE STACK VISUALIZER ---
const StackVisualizer = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
    <div className="absolute inset-0 bg-brand-accent/5 blur-[100px] rounded-full animate-pulse" />

    <motion.div
      animate={{ x: [-5, 5, -5] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="w-64 p-6 bg-white dark:bg-brand-dark border border-brand-accent/40 rounded-2xl shadow-2xl z-20"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-brand-accent" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
          Frontend
        </span>
      </div>
      <div className="h-2 w-full bg-brand-accent/10 rounded mb-2" />
      <div className="h-2 w-2/3 bg-brand-accent/10 rounded" />
    </motion.div>

    <div className="h-12 w-[2px] bg-gradient-to-b from-brand-accent via-white to-brand-accent relative overflow-hidden">
      <motion.div
        animate={{ y: [-50, 100] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="absolute w-full h-10 bg-brand-accent blur-sm"
      />
    </div>

    <motion.div
      animate={{ x: [5, -5, 5] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="w-64 p-6 bg-brand-dark border border-white/10 rounded-2xl shadow-2xl z-20"
    >
      <div className="flex items-center gap-3 mb-4">
        <FiCpu className="text-white" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50">
          Backend API
        </span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
            className="h-1 flex-grow bg-brand-accent"
          />
        ))}
      </div>
    </motion.div>

    <div className="h-12 w-[2px] bg-gradient-to-b from-brand-accent via-white to-brand-accent relative overflow-hidden">
      <motion.div
        animate={{ y: [-50, 100] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
          delay: 0.5,
        }}
        className="absolute w-full h-10 bg-brand-accent blur-sm"
      />
    </div>

    <motion.div
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="w-64 p-6 bg-brand-dark-blue/40 border border-brand-accent/20 rounded-2xl shadow-2xl z-20"
    >
      <div className="flex items-center gap-3">
        <FiDatabase className="text-brand-accent" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">
          Database
        </span>
      </div>
    </motion.div>
  </div>
);

export default FullStackDevelopment;
