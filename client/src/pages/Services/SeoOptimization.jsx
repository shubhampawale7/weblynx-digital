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

// --- 1. DATA MODELS (Refined for Surgical SEO) ---
const typesOfSeoData = [
  {
    id: "01",
    icon: FiCode,
    title: "Technical SEO",
    desc: "Hardening core infrastructure for maximum crawlability, schema implementation, and Core Web Vitals performance.",
    span: "md:col-span-8",
  },
  {
    id: "02",
    icon: FiFileText,
    title: "On-Page Logic",
    desc: "Surgical content optimization matching user intent to algorithmic search patterns and semantic keyword density.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    icon: FiLink2,
    title: "Authority Building",
    desc: "High-tier white-hat backlink acquisition and digital PR to elevate domain trust scores and E-E-A-T signals.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    icon: FiMapPin,
    title: "Local Dominance",
    desc: "Geo-targeted optimization and Google Business Profile management to own high-intent local search real estate.",
    span: "md:col-span-8",
  },
];

const techStackData = [
  { name: "Google Search Console", Icon: FaGoogle, role: "Index Monitoring" },
  { name: "Analytics V4", Icon: FiActivity, role: "Behavior Tracking" },
  { name: "Ahrefs Engine", Icon: FiBarChart, role: "Competitor Intelligence" },
  { name: "SEMrush Analytics", Icon: FiTrendingUp, role: "Keyword Research" },
];

const comparisonData = [
  {
    feature: "Intelligence",
    professional: "Data-driven reverse-engineering.",
    diy: "Guesswork and trial-by-error.",
  },
  {
    feature: "Tooling",
    professional: "Enterprise-grade research stack.",
    diy: "Low-fidelity free tools.",
  },
  {
    feature: "Risk",
    professional: "Future-proof white-hat tactics.",
    diy: "Penalty-triggering shortcuts.",
  },
];

// --- 2. MAIN COMPONENT ---
const SeoOptimization = () => {
  return (
    <>
      <Seo
        title="Technical SEO & Organic Growth Strategy | Weblynx"
        description="We engineer sustainable search equity. Specialized in technical SEO audits, Core Web Vitals, and intent-based content strategy for global ranking dominance."
        keywords="Technical SEO Pune, search engine optimization India, organic growth strategy, Google ranking experts, MERN SEO"
      />

      <main className="bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark">
        {/* --- HERO SECTION --- */}
        <section
          aria-labelledby="seo-hero-title"
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
                  Strategy Layer: Algorithmic_Domination
                </span>
                <h1
                  id="seo-hero-title"
                  className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8 dark:text-white"
                >
                  Search <br />{" "}
                  <span className="text-brand-accent italic font-light">
                    Dominance.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed dark:text-brand-gray">
                  We don't just "rank" websites. We engineer{" "}
                  <strong className="font-bold">organic equity</strong> that
                  compounds over time. Authoritative. Visible. Scalable.
                </p>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 inline-block"
                  >
                    Initialize SEO Audit
                  </Link>
                </div>
              </motion.header>

              <div
                className="relative h-[500px] hidden lg:flex items-center justify-center"
                aria-hidden="true"
              >
                <RankingVisualizer />
              </div>
            </div>
          </div>
        </section>

        {/* --- DIRECTIVES GRID --- */}
        <section
          aria-labelledby="directives-heading"
          className="container mx-auto px-6 py-24"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2
              id="directives-heading"
              className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none dark:text-white"
            >
              The <span className="text-brand-accent">Directives.</span>
            </h2>
            <p
              className="text-xs font-mono opacity-30 max-w-[200px] uppercase text-right leading-tight"
              aria-hidden="true"
            >
              Crawlability // Intent // Domain_Trust
            </p>
          </div>

          <div
            role="list"
            className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5"
          >
            {typesOfSeoData.map((item) => (
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
                <h3 className="text-4xl font-bold tracking-tighter mb-4 uppercase relative z-10 dark:text-white">
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

        {/* --- COMPARISON TABLE --- */}
        <section
          aria-label="Professional Differential Analysis"
          className="py-32 px-6 bg-gray-50 dark:bg-black/20"
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase dark:text-white">
              Expertise{" "}
              <span className="text-brand-accent italic">Differential.</span>
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
                  Dimension
                </div>
                <div
                  className="font-mono text-[10px] text-brand-accent uppercase"
                  role="columnheader"
                >
                  Weblynx Protocol
                </div>
                <div
                  className="font-mono text-[10px] opacity-40 uppercase text-right"
                  role="columnheader"
                >
                  Legacy / DIY
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
                    {row.professional}
                  </div>
                  <div
                    className="opacity-40 text-right italic text-sm dark:text-brand-gray"
                    role="cell"
                  >
                    {row.diy}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TOOLSET MARQUEE --- */}
        <section
          aria-label="Research Toolset Infrastructure"
          className="py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden"
        >
          <div className="container mx-auto px-6 mb-12 flex justify-between">
            <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.5em]">
              Analytics & Intelligence Infrastructure
            </span>
            <FiGlobe
              className="text-brand-accent animate-spin-slow"
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
          <h2 className="text-7xl md:text-[12rem] font-black tracking-tighter uppercase mb-12 leading-[0.8]">
            Own The <br />{" "}
            <span className="text-brand-accent italic text-outline">
              Search.
            </span>
          </h2>
          <Link
            to="/contact"
            aria-label="Start your SEO journey with a professional audit"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Initialize Audit <FiMaximize aria-hidden="true" />
          </Link>
        </footer>

        <style jsx>{`
          .text-outline {
            -webkit-text-stroke: 1px #00f5d4;
            color: transparent;
          }
          .animate-spin-slow {
            animation: spin 10s linear infinite;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </main>
    </>
  );
};

// --- KINETIC UI VISUAL (Hardened) ---
const RankingVisualizer = () => (
  <div className="relative w-full max-w-md h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full animate-pulse" />
    <div className="relative z-10 w-full aspect-square border border-white/5 rounded-full p-8 bg-black/20 backdrop-blur-xl flex items-center justify-center">
      <div className="absolute inset-4 border border-white/5 rounded-full animate-spin-slow" />
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
    <div className="absolute top-10 left-0 p-4 bg-brand-dark border border-white/10 rounded-2xl shadow-2xl">
      <FiTrendingUp className="text-brand-accent" />
    </div>
    <div className="absolute bottom-20 right-0 p-4 bg-brand-dark border border-white/10 rounded-2xl shadow-2xl">
      <FiTarget className="text-brand-accent" />
    </div>
  </div>
);

export default SeoOptimization;
