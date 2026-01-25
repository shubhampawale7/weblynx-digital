// client/src/pages/Services/MobileAppDevelopment.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiGrid,
  FiShare2,
  FiPenTool,
  FiServer,
  FiDatabase,
  FiCheckCircle,
  FiArrowLeft,
  FiMaximize,
  FiSmartphone,
  FiCpu,
  FiZap,
  FiActivity,
} from "react-icons/fi";
import { FaApple, FaAndroid, FaReact } from "react-icons/fa";

// --- Specialized Data Models ---
const typesOfAppsData = [
  {
    id: "01",
    icon: FaApple,
    title: "Native iOS",
    desc: "Swift-powered high-performance apps for the Apple ecosystem.",
    span: "md:col-span-4",
  },
  {
    id: "02",
    icon: FaAndroid,
    title: "Native Android",
    desc: "Kotlin-based robust applications for global Android reach.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    icon: FaReact,
    title: "Cross-Platform",
    desc: "React Native solutions for unified iOS and Android codebases.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    icon: FiPenTool,
    title: "Mobile UI/UX",
    desc: "Surgical interface design optimized for thumb-reach and micro-interactions.",
    span: "md:col-span-8",
  },
  {
    id: "05",
    icon: FiShare2,
    title: "API Architecture",
    desc: "Scalable backend bridges designed specifically for mobile latency.",
    span: "md:col-span-4",
  },
];

const techStackData = [
  { name: "React Native", Icon: FaReact },
  { name: "Swift", Icon: FaApple },
  { name: "Kotlin", Icon: FaAndroid },
  { name: "Node.js", Icon: FiServer },
  { name: "Firebase", Icon: FiDatabase },
  { name: "Figma", Icon: FiPenTool },
];

const comparisonData = [
  {
    feature: "Performance",
    native: "Maximum frame rates & response.",
    crossPlatform: "Near-native for 95% of use cases.",
  },
  {
    feature: "Development Time",
    native: "Longer (Dual codebases).",
    crossPlatform: "Rapid (Unified codebase).",
  },
  {
    feature: "Access",
    native: "Full hardware API access.",
    crossPlatform: "Standard hardware API access.",
  },
  {
    feature: "Budget",
    native: "Premium investment.",
    crossPlatform: "Cost-optimized efficiency.",
  },
];

const MobileAppDevelopment = () => {
  return (
    <>
      <Seo
        title="Mobile Engineering | Weblynx Infotech"
        description="High-performance native and cross-platform mobile solutions for iOS and Android."
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
                  System: Mobile_OS v4.0
                </span>
                <h1 className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                  Mobile <br />{" "}
                  <span className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                    Native
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed">
                  We engineer pocket-sized powerhouses. From pixel-perfect UI to
                  hardened backends, we build mobile experiences that command
                  attention.
                </p>
                <div className="mt-12 flex gap-4">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
                  >
                    Deploy App
                  </Link>
                </div>
              </motion.div>

              <div className="relative h-[600px] hidden lg:flex items-center justify-center">
                <PhoneMockupVisual />
              </div>
            </div>
          </div>
        </section>

        {/* --- CAPABILITY GRID --- */}
        <section className="container mx-auto px-6 py-24">
          <div className="flex justify-between items-end mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              The <span className="text-brand-accent">Toolkit</span>
            </h2>
            <div className="flex items-center gap-4 text-xs font-mono opacity-30 uppercase">
              <FiActivity className="text-brand-accent animate-pulse" /> Live
              Deployment
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            {typesOfAppsData.map((item) => (
              <div
                key={item.id}
                className={`${item.span} bg-white dark:bg-brand-dark p-12 group hover:bg-brand-dark-blue/10 transition-all duration-500 relative overflow-hidden`}
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
                  <item.icon size={250} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- NATIVE VS CROSS-PLATFORM TABLE --- */}
        <section className="py-32 px-6 bg-gray-50 dark:bg-black/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase">
              Architecture{" "}
              <span className="text-brand-accent italic">Split</span>
            </h2>
            <div className="border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-3xl">
              <div className="grid grid-cols-3 bg-gray-100 dark:bg-white/5 p-8 border-b border-gray-200 dark:border-white/10">
                <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                  Feature Set
                </div>
                <div className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                  Native Core
                </div>
                <div className="font-mono text-[10px] opacity-40 uppercase text-right tracking-widest">
                  React Native
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
                    {row.native}
                  </div>
                  <div className="opacity-40 text-right italic text-sm">
                    {row.crossPlatform}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- LOGO MARQUEE --- */}
        <section className="py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="flex justify-around items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {techStackData.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <tech.Icon size={40} />
                <span className="text-[10px] font-mono font-bold uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- FINAL TERMINAL CTA --- */}
        <section className="py-40 px-6 text-center bg-brand-dark text-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
          <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase mb-12 leading-[0.8]">
            Go <br />{" "}
            <span className="text-brand-accent italic text-outline">
              Mobile.
            </span>
          </h2>
          <Link
            to="/contact"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Initialize Build <FiMaximize />
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

// --- KINETIC PHONE MOCKUP (REPLACES LOTTIE) ---
const PhoneMockupVisual = () => (
  <div className="relative w-72 h-[550px] bg-brand-dark border-[8px] border-white/5 rounded-[3rem] shadow-2xl overflow-hidden">
    {/* Screen Content */}
    <div className="p-6 pt-12">
      <div className="w-1/3 h-1 bg-white/20 rounded-full mx-auto mb-10" />

      <div className="grid grid-cols-2 gap-3 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
            className="h-24 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl flex items-center justify-center"
          >
            <FiZap className="text-brand-accent/30" />
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="h-3 w-full bg-white/5 rounded" />
        <div className="h-3 w-4/5 bg-white/5 rounded" />
        <div className="h-12 w-full bg-brand-accent rounded-xl mt-6" />
      </div>
    </div>

    {/* Home Indicator */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full" />

    {/* Dynamic Glow */}
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-accent/20 blur-3xl rounded-full" />
  </div>
);

export default MobileAppDevelopment;
