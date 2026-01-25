// client/src/pages/Services/MobileAppDevelopment.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiShare2,
  FiPenTool,
  FiServer,
  FiArrowLeft,
  FiMaximize,
  FiZap,
  FiActivity,
} from "react-icons/fi";
import { FaApple, FaAndroid, FaReact } from "react-icons/fa";

// --- 1. DATA MODELS (Refined for Enterprise Intent) ---
const typesOfAppsData = [
  {
    id: "01",
    icon: FaApple,
    title: "Native iOS",
    desc: "Swift-powered high-performance applications tailored for the premium Apple ecosystem.",
    span: "md:col-span-4",
  },
  {
    id: "02",
    icon: FaAndroid,
    title: "Native Android",
    desc: "Robust Kotlin-based applications designed for global scale and massive Android reach.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    icon: FaReact,
    title: "Cross-Platform",
    desc: "React Native solutions for a unified codebase, reducing time-to-market without performance loss.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    icon: FiPenTool,
    title: "Mobile UI/UX",
    desc: "Surgical interface design optimized for ergonomic thumb-reach and predictive micro-interactions.",
    span: "md:col-span-8",
  },
  {
    id: "05",
    icon: FiShare2,
    title: "API Middleware",
    desc: "Scalable backend bridges and GraphQL architectures designed specifically for mobile latency.",
    span: "md:col-span-4",
  },
];

const techStackData = [
  { name: "React Native", Icon: FaReact, role: "Unified Codebase" },
  { name: "Swift", Icon: FaApple, role: "iOS Native" },
  { name: "Kotlin", Icon: FaAndroid, role: "Android Native" },
  { name: "Node.js", Icon: FiServer, role: "Backend Logic" },
];

const comparisonData = [
  {
    feature: "Performance",
    native: "Maximum frame rates.",
    crossPlatform: "Near-native stability.",
  },
  {
    feature: "Dev Cycle",
    native: "Longer (Dual code).",
    crossPlatform: "Rapid (Unified code).",
  },
  {
    feature: "Hardware Access",
    native: "Full sensor integration.",
    crossPlatform: "Standard API bridging.",
  },
];

// --- 2. MAIN COMPONENT ---
const MobileAppDevelopment = () => {
  return (
    <>
      <Seo
        title="Mobile App Development | iOS, Android & React Native Experts"
        description="We engineer high-performance native and cross-platform mobile solutions. Specializing in Swift, Kotlin, and React Native for global digital brands."
        keywords="Mobile app development Pune, iOS developer India, React Native agency Pune, Android application engineering"
      />

      <main className="bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark">
        {/* --- HERO SECTION --- */}
        <section
          aria-labelledby="mobile-hero-title"
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
                  Environment: mobile_os_v4.0
                </span>
                <h1
                  id="mobile-hero-title"
                  className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8 dark:text-white"
                >
                  Mobile <br />{" "}
                  <span className="text-brand-accent italic font-light">
                    Native.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed dark:text-brand-gray">
                  We engineer{" "}
                  <strong className="font-bold">
                    pocket-sized powerhouses
                  </strong>
                  . From pixel-perfect mobile interfaces to hardened server-side
                  backends.
                </p>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 inline-block"
                  >
                    Deploy Application
                  </Link>
                </div>
              </motion.header>

              <div
                className="relative h-[600px] hidden lg:flex items-center justify-center"
                aria-hidden="true"
              >
                <PhoneMockupVisual />
              </div>
            </div>
          </div>
        </section>

        {/* --- TOOLKIT GRID --- */}
        <section
          aria-labelledby="toolkit-heading"
          className="container mx-auto px-6 py-24"
        >
          <div className="flex justify-between items-end mb-16 gap-4">
            <h2
              id="toolkit-heading"
              className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none dark:text-white"
            >
              The <span className="text-brand-accent">Toolkit.</span>
            </h2>
            <div
              className="flex items-center gap-4 text-xs font-mono opacity-30 uppercase"
              aria-hidden="true"
            >
              <FiActivity className="text-brand-accent animate-pulse" /> Live
              Deployment Sequence
            </div>
          </div>

          <div
            role="list"
            className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5"
          >
            {typesOfAppsData.map((item) => (
              <motion.article
                key={item.id}
                role="listitem"
                className={`${item.span} bg-white dark:bg-brand-dark p-12 group hover:bg-brand-dark-blue/10 transition-all duration-500 relative overflow-hidden`}
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
                  <item.icon size={250} />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section
          aria-label="Architecture Comparison"
          className="py-32 px-6 bg-gray-50 dark:bg-black/20"
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase dark:text-white">
              Architecture{" "}
              <span className="text-brand-accent italic">Split</span>
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
                  Native Core
                </div>
                <div
                  className="font-mono text-[10px] opacity-40 uppercase text-right"
                  role="columnheader"
                >
                  Cross-Platform
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
                    {row.native}
                  </div>
                  <div
                    className="opacity-40 text-right italic text-sm dark:text-brand-gray"
                    role="cell"
                  >
                    {row.crossPlatform}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TECH MARQUEE --- */}
        <section
          aria-label="Mobile Stack Dependencies"
          className="py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden"
        >
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
                <tech.Icon size={40} aria-hidden="true" />
                <span className="text-[10px] font-mono font-bold uppercase dark:text-white">
                  {tech.name}
                </span>
                <span className="sr-only">{tech.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA --- */}
        <footer className="py-40 px-6 text-center bg-brand-dark text-white relative">
          <div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"
            aria-hidden="true"
          />
          <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase mb-12 leading-[0.8]">
            Go <br />{" "}
            <span className="text-brand-accent italic text-outline">
              Mobile.
            </span>
          </h2>
          <Link
            to="/contact"
            aria-label="Start your mobile development project"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Initialize Build <FiMaximize aria-hidden="true" />
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

// --- KINETIC UI VISUAL ---
const PhoneMockupVisual = () => (
  <div className="relative w-72 h-[550px] bg-brand-dark border-[8px] border-white/5 rounded-[3rem] shadow-2xl overflow-hidden">
    <div className="p-6 pt-12">
      <div
        className="w-1/3 h-1 bg-white/20 rounded-full mx-auto mb-10"
        aria-hidden="true"
      />
      <div className="grid grid-cols-2 gap-3 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
            className="h-24 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl flex items-center justify-center"
          >
            <FiZap className="text-brand-accent/30" aria-hidden="true" />
          </motion.div>
        ))}
      </div>
      <div className="space-y-4" aria-hidden="true">
        <div className="h-3 w-full bg-white/5 rounded" />
        <div className="h-3 w-4/5 bg-white/5 rounded" />
        <div className="h-12 w-full bg-brand-accent rounded-xl mt-6" />
      </div>
    </div>
    <div
      className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full"
      aria-hidden="true"
    />
    <div
      className="absolute -top-20 -right-20 w-40 h-40 bg-brand-accent/20 blur-3xl rounded-full"
      aria-hidden="true"
    />
  </div>
);

export default MobileAppDevelopment;
