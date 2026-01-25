// client/src/pages/Services/WordPressSiteCreation.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiPenTool,
  FiCode,
  FiZap,
  FiEdit,
  FiArrowLeft,
  FiMaximize,
  FiActivity,
  FiCpu,
} from "react-icons/fi";
import { FaWordpress, FaElementor, FaWpforms } from "react-icons/fa";
import { SiWoocommerce, SiYoast } from "react-icons/si";

// --- 1. DATA MODELS (Refined for Architectural Authority) ---
const typesOfServicesData = [
  {
    id: "01",
    icon: FiPenTool,
    title: "Custom Theme Engineering",
    desc: "Bespoke, high-velocity WordPress themes engineered from scratch. Zero bloat. Optimized for Core Web Vitals and peak performance.",
    span: "md:col-span-8",
  },
  {
    id: "02",
    icon: FiCode,
    title: "Plugin Architecture",
    desc: "Custom extension and API development to solve unique enterprise business logic requirements without third-party dependencies.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    icon: SiWoocommerce,
    title: "Headless Commerce",
    desc: "Scaling WooCommerce with decoupled, high-performance storefronts, secure checkout logic, and custom payment integrations.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    icon: FiZap,
    title: "Performance Hardening",
    desc: "Advanced server-level caching, database optimization, and asset minification for sub-second load times and SEO dominance.",
    span: "md:col-span-8",
  },
];

const techStackData = [
  { name: "WordPress Core", Icon: FaWordpress, role: "Engine Base" },
  { name: "WooCommerce", Icon: SiWoocommerce, role: "E-comm Logic" },
  { name: "ACF Pro", Icon: FiEdit, role: "Custom Fields" },
  { name: "Elementor Pro", Icon: FaElementor, role: "Visual System" },
  { name: "Yoast SEO", Icon: SiYoast, role: "Search Logic" },
  { name: "WP Forms", Icon: FaWpforms, role: "Interaction" },
];

const comparisonData = [
  {
    feature: "Performance",
    custom: "Optimized for Core Web Vitals.",
    template: "Bloated with unused scripts.",
  },
  {
    feature: "Scalability",
    custom: "Architected for massive traffic.",
    template: "Bottlenecks under moderate load.",
  },
  {
    feature: "Security",
    custom: "Lean attack surface. Hardened.",
    template: "Vulnerable pre-made leaks.",
  },
];

// --- 2. MAIN COMPONENT ---
const WordPressSiteCreation = () => {
  return (
    <>
      <Seo
        title="Custom WordPress Development | High-Performance CMS Engineering"
        description="We engineer bespoke WordPress solutions designed for speed, scale, and SEO dominance. Custom themes, plugins, and Headless WooCommerce architectures."
        keywords="Custom WordPress developer Pune, WooCommerce experts India, Headless WordPress agency, WordPress speed optimization"
      />

      <main className="bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark">
        {/* --- HERO SECTION --- */}
        <section
          aria-labelledby="wp-hero-title"
          className="pt-32 pb-20 px-6 border-b border-gray-100 dark:border-white/5 overflow-hidden"
        >
          <div className="container mx-auto">
            <nav aria-label="Breadcrumb navigation">
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
                  Framework Layer: Architectural_WP
                </span>
                <h1
                  id="wp-hero-title"
                  className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8 dark:text-white"
                >
                  CMS <br />{" "}
                  <span className="text-brand-accent italic font-light">
                    Engine.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed dark:text-brand-gray">
                  We don't just "install" WordPress. We{" "}
                  <strong className="font-bold">
                    engineer content frameworks
                  </strong>{" "}
                  that empower your brand and dominate the search grid.
                </p>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 inline-block"
                  >
                    Initialize Build
                  </Link>
                </div>
              </motion.header>

              <div
                className="relative h-[500px] hidden lg:flex items-center justify-center"
                aria-hidden="true"
              >
                <CMSEngineVisual />
              </div>
            </div>
          </div>
        </section>

        {/* --- SOLUTIONS GRID --- */}
        <section
          aria-labelledby="solutions-heading"
          className="container mx-auto px-6 py-24"
        >
          <div className="flex justify-between items-end mb-16 gap-4">
            <h2
              id="solutions-heading"
              className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none dark:text-white"
            >
              The <span className="text-brand-accent">Solutions.</span>
            </h2>
            <div
              className="flex items-center gap-4 text-xs font-mono opacity-30 uppercase"
              aria-hidden="true"
            >
              <FiActivity className="text-brand-accent animate-pulse" /> Asset
              Managed: v4.0.2
            </div>
          </div>

          <div
            role="list"
            className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5"
          >
            {typesOfServicesData.map((item) => (
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
                  <div className="text-brand-accent opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {React.createElement(item.icon, {
                      size: 32,
                      "aria-hidden": "true",
                    })}
                  </div>
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
                  {React.createElement(item.icon, { size: 250 })}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section
          aria-label="Bespoke vs Template Analysis"
          className="py-32 px-6 bg-gray-50 dark:bg-black/20"
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase dark:text-white">
              Bespoke <span className="text-brand-accent italic">vs</span>{" "}
              Generic
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
                  Bespoke Build
                </div>
                <div
                  className="font-mono text-[10px] opacity-40 uppercase text-right"
                  role="columnheader"
                >
                  Theme Template
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
                    {row.custom}
                  </div>
                  <div
                    className="opacity-40 text-right italic text-sm dark:text-brand-gray"
                    role="cell"
                  >
                    {row.template}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- LOGO MARQUEE --- */}
        <section
          aria-label="WordPress Technology Stack"
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
                {React.createElement(tech.Icon, {
                  size: 40,
                  "aria-hidden": "true",
                })}
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
            Build <br />{" "}
            <span className="text-brand-accent italic text-outline">
              Powerful.
            </span>
          </h2>
          <Link
            to="/contact"
            aria-label="Start your custom WordPress project"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Initialize CMS Build <FiMaximize aria-hidden="true" />
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

// --- KINETIC UI VISUAL (CMS Engine) ---
const CMSEngineVisual = () => (
  <div className="relative w-full max-w-md h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full animate-pulse" />
    <div className="relative z-10 w-full aspect-square border border-white/5 rounded-[3rem] p-8 bg-black/20 backdrop-blur-xl flex flex-col justify-center gap-6 overflow-hidden">
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="self-start p-3 bg-brand-dark border border-brand-accent/30 rounded-xl"
      >
        <FiCode className="text-brand-accent" />
      </motion.div>
      <div className="grid grid-cols-3 gap-3">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
            className="h-16 bg-white/5 rounded-2xl border border-white/10"
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3">
          <div className="p-4 bg-brand-accent text-brand-dark rounded-2xl">
            <FaWordpress size={24} />
          </div>
          <div className="space-y-1">
            <div className="h-2 w-20 bg-white/20 rounded" />
            <div className="h-2 w-12 bg-white/10 rounded" />
          </div>
        </div>
        <FiCpu className="text-white/20 animate-pulse" size={32} />
      </div>
      <div className="absolute bottom-6 right-8 flex items-center gap-2">
        <div className="text-right">
          <span className="block text-[8px] font-mono opacity-40 uppercase">
            Load Speed
          </span>
          <span className="text-xs font-mono font-bold text-brand-accent">
            0.42s
          </span>
        </div>
        <FiZap className="text-brand-accent" />
      </div>
    </div>
  </div>
);

export default WordPressSiteCreation;
