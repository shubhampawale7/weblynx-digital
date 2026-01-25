// client/src/pages/Services/SeoOptimization.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiSearch,
  FiCode,
  FiFileText,
  FiLink2,
  FiMapPin,
  FiBarChart,
  FiTrendingUp,
  FiArrowLeft,
  FiMaximize,
  FiActivity,
  FiGlobe,
  FiTarget,
} from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

// --- Specialized Data Models ---
const typesOfSeoData = [
  {
    id: "01",
    icon: FiCode,
    title: "Technical SEO",
    desc: "Hardening site infrastructure for maximum crawlability and Core Web Vitals performance.",
    span: "md:col-span-8",
  },
  {
    id: "02",
    icon: FiFileText,
    title: "On-Page Logic",
    desc: "Surgical content optimization matching intent to algorithmic patterns.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    icon: FiLink2,
    title: "Authority Building",
    desc: "High-tier backlink acquisition to elevate domain trust scores.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    icon: FiMapPin,
    title: "Local Dominance",
    desc: "Geo-targeted optimization to own local search real estate.",
    span: "md:col-span-8",
  },
];

const techStackData = [
  { name: "Google Search Console", Icon: FaGoogle },
  { name: "Analytics V4", Icon: FiActivity },
  { name: "Ahrefs Engine", Icon: FiBarChart },
  { name: "SEMrush Analytics", Icon: FiTrendingUp },
];

const comparisonData = [
  {
    feature: "Intelligence",
    professional: "Data-driven algorithmic reverse-engineering.",
    diy: "Guesswork and trial-by-error cycles.",
  },
  {
    feature: "Tool Access",
    professional: "Enterprise-grade research infrastructure.",
    diy: "Limited access to low-fidelity free tools.",
  },
  {
    feature: "Risk Management",
    professional: "White-hat strategies built for longevity.",
    diy: "High risk of penalty-triggering tactics.",
  },
  {
    feature: "Outcome",
    professional: "Compounding organic equity and ROI.",
    diy: "Stagnant rankings and wasted ad spend.",
  },
];

const SeoOptimization = () => {
  return (
    <>
      <Seo
        title="SEO & Organic Growth | Weblynx Infotech"
        description="Data-driven search engine optimization engineered for sustainable ranking dominance."
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
                  Strategy Layer: Organic Growth
                </span>
                <h1 className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                  Search <br />{" "}
                  <span className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                    Dominance
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed">
                  We don't just "rank" websites. We engineer organic search
                  equity that compounds over time. Visible. Authoritative.
                  Unstoppable.
                </p>
                <div className="mt-12 flex gap-4">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
                  >
                    Initialize Audit
                  </Link>
                </div>
              </motion.div>

              <div className="relative h-[500px] hidden lg:flex items-center justify-center">
                <RankingVisualizer />
              </div>
            </div>
          </div>
        </section>

        {/* --- CAPABILITY GRID --- */}
        <section className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              The <span className="text-brand-accent">Directives</span>
            </h2>
            <p className="text-xs font-mono opacity-30 max-w-[200px] uppercase text-right leading-tight">
              Crawlability // Intent // Authority
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            {typesOfSeoData.map((item) => (
              <div
                key={item.id}
                className={`${item.span} bg-white dark:bg-brand-dark p-12 group hover:bg-brand-accent/5 transition-all duration-500 relative overflow-hidden`}
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
                <h3 className="text-4xl font-bold tracking-tighter mb-4 uppercase relative z-10">
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

        {/* --- PERFORMANCE COMPARISON --- */}
        <section className="py-32 px-6 bg-gray-50 dark:bg-black/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase">
              Expertise{" "}
              <span className="text-brand-accent italic">Differential</span>
            </h2>
            <div className="border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-3xl">
              <div className="grid grid-cols-3 bg-gray-100 dark:bg-white/5 p-8 border-b border-gray-200 dark:border-white/10">
                <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                  Dimension
                </div>
                <div className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                  Weblynx Pro
                </div>
                <div className="font-mono text-[10px] opacity-40 uppercase text-right tracking-widest">
                  Generalist/DIY
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
                    {row.professional}
                  </div>
                  <div className="opacity-40 text-right italic text-sm">
                    {row.diy}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- ANALYTICS MARQUEE --- */}
        <section className="py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="container mx-auto px-6 mb-12 flex justify-between">
            <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.5em]">
              Analytics Infrastructure
            </span>
            <FiGlobe className="text-brand-accent animate-spin-slow" />
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
        <section className="py-40 px-6 text-center bg-brand-dark text-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
          <h2 className="text-7xl md:text-[12rem] font-black tracking-tighter uppercase mb-12 leading-[0.8]">
            Own The <br />{" "}
            <span className="text-brand-accent italic text-outline">
              Search.
            </span>
          </h2>
          <Link
            to="/contact"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Initialize SEO Audit <FiMaximize />
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

// --- KINETIC RANKING VISUALIZER (REPLACES LOTTIE) ---
const RankingVisualizer = () => (
  <div className="relative w-full max-w-md h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full animate-pulse" />

    <div className="relative z-10 w-full aspect-square border border-white/5 rounded-full p-8 bg-black/20 backdrop-blur-xl flex items-center justify-center">
      {/* Orbital Path */}
      <div className="absolute inset-4 border border-white/5 rounded-full animate-spin-slow" />

      {/* Search Target */}
      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <FiSearch className="text-brand-accent text-8xl mb-4" />
        </motion.div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              animate={{ height: [10, 40, 10] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
              className="w-1 bg-brand-accent/40 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Floating Rank Markers */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-brand-accent text-brand-dark rounded-xl font-black text-xs">
          #1
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-2 border border-white/10 text-white/40 rounded-lg font-bold text-[10px] bg-brand-dark">
          #42
        </div>
      </motion.div>
    </div>

    {/* Floating Data Icons */}
    <div className="absolute top-10 left-0 p-4 bg-brand-dark border border-white/10 rounded-2xl shadow-2xl">
      <FiTrendingUp className="text-brand-accent" />
    </div>
    <div className="absolute bottom-20 right-0 p-4 bg-brand-dark border border-white/10 rounded-2xl shadow-2xl">
      <FiTarget className="text-brand-accent" />
    </div>
  </div>
);

export default SeoOptimization;
