// client/src/pages/Services/FullStackDevelopment.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiShield,
  FiLayers,
  FiArrowLeft,
  FiMaximize,
  FiCpu,
  FiActivity,
} from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

// --- 1. DATA MODELS (Refined for Surgical SEO) ---
const expertiseData = [
  {
    id: "01",
    icon: FiCode,
    title: "Frontend Engineering",
    desc: "Crafting reactive, high-performance user interfaces using the React.js ecosystem and modern state management.",
    span: "md:col-span-4",
  },
  {
    id: "02",
    icon: FiServer,
    title: "Backend Architecture",
    desc: "Designing robust server-side logic and highly-scalable REST/GraphQL APIs with Node.js and Express.",
    span: "md:col-span-8",
  },
  {
    id: "03",
    icon: FiDatabase,
    title: "Database Schema",
    desc: "Architecting scalable, high-throughput NoSQL data models with MongoDB for enterprise data persistence.",
    span: "md:col-span-8",
  },
  {
    id: "04",
    icon: FiShield,
    title: "Hardened Security",
    desc: "Implementing end-to-end encryption, OAuth 2.0, and rigorous security audits across every stack layer.",
    span: "md:col-span-4",
  },
];

const techStackData = [
  { name: "React", Icon: FaReact, role: "UI Library" },
  { name: "Node.js", Icon: FaNodeJs, role: "Backend Runtime" },
  { name: "Express.js", Icon: SiExpress, role: "API Framework" },
  { name: "MongoDB", Icon: SiMongodb, role: "NoSQL Persistence" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, role: "Visual Framework" },
  { name: "MERN Stack", Icon: FiLayers, role: "Full-Stack Core" },
];

const comparisonData = [
  {
    feature: "Architecture",
    fullStack: "Unified, synchronized data flow.",
    fragmented: "Fragmented logic and API silos.",
  },
  {
    feature: "Velocity",
    fullStack: "Rapid deployment via CI/CD.",
    fragmented: "Bottlenecks during team hand-offs.",
  },
  {
    feature: "Security",
    fullStack: "Holistic, stack-wide hardening.",
    fragmented: "Patchwork fixes in isolation.",
  },
];

// --- 2. MAIN COMPONENT ---
const FullStackDevelopment = () => {
  return (
    <>
      <Seo
        title="MERN Full-Stack Development | End-to-End Software Engineering"
        description="Weblynx Infotech provides surgical end-to-end MERN stack development. From high-fidelity React UIs to scalable Node.js backend architectures."
        keywords="Full stack development Pune, MERN stack experts India, React Node developer Pune, enterprise software architecture"
      />

      <main className="bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark">
        {/* --- HERO SECTION --- */}
        <section
          aria-labelledby="fullstack-hero-title"
          className="pt-32 pb-20 px-6 border-b border-gray-100 dark:border-white/5 overflow-hidden"
        >
          <div className="container mx-auto">
            <nav aria-label="Breadcrumb">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all mb-16"
              >
                <FiArrowLeft aria-hidden="true" /> Back to Arsenal
              </Link>
            </nav>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-brand-accent font-mono text-sm tracking-[0.2em] mb-4 block uppercase">
                  Deployment Mode: Unified_Stack
                </span>
                <h1
                  id="fullstack-hero-title"
                  className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8 dark:text-white"
                >
                  End-To-End <br />{" "}
                  <span className="text-brand-accent italic font-light">
                    Code.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed dark:text-brand-gray">
                  We bridge the gap between{" "}
                  <strong className="font-bold">user experience</strong> and{" "}
                  <strong className="font-bold">backend stability</strong>. One
                  unified team. One flawless MERN application.
                </p>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 inline-block"
                  >
                    Deploy Full-Stack
                  </Link>
                </div>
              </motion.header>

              <div
                className="relative h-[500px] hidden lg:flex items-center justify-center"
                aria-hidden="true"
              >
                <StackVisualizer />
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERTISE GRID --- */}
        <section
          aria-labelledby="expertise-heading"
          className="container mx-auto px-6 py-24"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2
              id="expertise-heading"
              className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none dark:text-white"
            >
              The <span className="text-brand-accent">Expertise.</span>
            </h2>
            <p
              className="text-xs font-mono opacity-30 max-w-[200px] uppercase text-right leading-tight"
              aria-hidden="true"
            >
              Architecture // Unified Logic // persistence_layer
            </p>
          </div>

          <div
            role="list"
            className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5"
          >
            {expertiseData.map((item) => (
              <motion.article
                key={item.id}
                role="listitem"
                className={`${item.span} bg-white dark:bg-brand-dark p-12 group hover:bg-brand-dark-blue/20 transition-all duration-500 relative overflow-hidden`}
              >
                <div className="flex justify-between items-start mb-16 relative z-10">
                  <span
                    className="text-xs font-mono opacity-20"
                    aria-hidden="true"
                  >
                    [{item.id}]
                  </span>
                  <item.icon
                    className="text-brand-accent opacity-30 group-hover:opacity-100 transition-all duration-500"
                    size={32}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-3xl font-bold tracking-tighter mb-4 uppercase relative z-10 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-lg opacity-50 leading-tight max-w-xs relative z-10 dark:text-brand-gray">
                  {item.desc}
                </p>
                <div
                  className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity"
                  aria-hidden="true"
                >
                  <item.icon size={280} />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* --- ADVANTAGE TABLE --- */}
        <section
          aria-label="Competitive Advantage Analysis"
          className="py-32 px-6 bg-gray-50 dark:bg-black/20"
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase dark:text-white">
              The <span className="text-brand-accent">Unified</span> Edge
            </h2>
            <div
              className="border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-3xl"
              role="table"
            >
              <div
                className="grid grid-cols-3 bg-gray-100 dark:bg-white/5 p-8 border-b border-gray-200 dark:border-white/10"
                role="row"
              >
                <div
                  className="font-mono text-[10px] opacity-40 uppercase"
                  role="columnheader"
                >
                  Parameter
                </div>
                <div
                  className="font-mono text-[10px] text-brand-accent uppercase"
                  role="columnheader"
                >
                  Full-Stack Protocol
                </div>
                <div
                  className="font-mono text-[10px] opacity-40 uppercase text-right"
                  role="columnheader"
                >
                  Separate Teams
                </div>
              </div>
              {comparisonData.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 p-8 border-b border-gray-100 dark:border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                  role="row"
                >
                  <div
                    className="font-bold text-lg uppercase tracking-tighter dark:text-white"
                    role="cell"
                  >
                    {row.feature}
                  </div>
                  <div
                    className="text-brand-accent font-medium pr-4"
                    role="cell"
                  >
                    {row.fullStack}
                  </div>
                  <div
                    className="opacity-40 text-right italic text-sm dark:text-brand-gray"
                    role="cell"
                  >
                    {row.fragmented}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- DEPENDENCY MARQUEE --- */}
        <section
          aria-label="System Dependencies"
          className="py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden"
        >
          <div className="container mx-auto px-6 mb-12 flex justify-between">
            <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.5em]">
              Primary Ecosystem Dependencies
            </span>
            <FiActivity
              className="text-brand-accent animate-pulse"
              aria-hidden="true"
            />
          </div>
          <div
            className="flex justify-around items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
            role="list"
          >
            {techStackData.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2"
                role="listitem"
              >
                {tech.Icon && <tech.Icon size={40} aria-hidden="true" />}
                <span className="text-[10px] font-mono font-bold uppercase dark:text-white">
                  {tech.name}
                </span>
                <span className="sr-only">{tech.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA --- */}
        <footer className="py-40 px-6 text-center bg-brand-dark text-white">
          <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase mb-12 leading-[0.8]">
            Master <br />{" "}
            <span className="text-brand-accent italic text-outline">
              The Stack.
            </span>
          </h2>
          <Link
            to="/contact"
            aria-label="Contact us to start your full-stack project"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Start End-to-End <FiMaximize aria-hidden="true" />
          </Link>
        </footer>

        <style jsx>{`
          .text-outline {
            -webkit-text-stroke: 1px #00f5d4;
            color: transparent;
          }
        `}</style>
      </main>
    </>
  );
};

// --- SUB-COMPONENTS (Hardened) ---

const StackVisualizer = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
    <div
      className="absolute inset-0 bg-brand-accent/5 blur-[100px] rounded-full animate-pulse"
      aria-hidden="true"
    />

    <motion.div
      animate={{ x: [-5, 5, -5] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="w-64 p-6 bg-white dark:bg-brand-dark border border-brand-accent/40 rounded-2xl shadow-2xl z-20"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-3 h-3 rounded-full bg-brand-accent"
          aria-hidden="true"
        />
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest dark:text-white">
          Frontend Engineering
        </span>
      </div>
      <div
        className="h-2 w-full bg-brand-accent/10 rounded mb-2"
        aria-hidden="true"
      />
      <div
        className="h-2 w-2/3 bg-brand-accent/10 rounded"
        aria-hidden="true"
      />
    </motion.div>

    <div
      className="h-12 w-[2px] bg-gradient-to-b from-brand-accent via-white to-brand-accent relative overflow-hidden"
      aria-hidden="true"
    >
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
        <FiCpu className="text-white" aria-hidden="true" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50">
          Node.js Backend
        </span>
      </div>
      <div className="flex gap-1" aria-hidden="true">
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

    <div
      className="h-12 w-[2px] bg-gradient-to-b from-brand-accent via-white to-brand-accent relative overflow-hidden"
      aria-hidden="true"
    >
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
        <FiDatabase className="text-brand-accent" aria-hidden="true" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">
          MongoDB Architecture
        </span>
      </div>
    </motion.div>
  </div>
);

export default FullStackDevelopment;
