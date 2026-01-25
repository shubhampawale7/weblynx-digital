// client/src/pages/Services/WordPressSiteCreation.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiPenTool,
  FiCode,
  FiShoppingCart,
  FiShuffle,
  FiZap,
  FiLifeBuoy,
  FiEdit,
  FiArrowLeft,
  FiMaximize,
  FiActivity,
  FiLayers,
  FiCpu,
} from "react-icons/fi";
import { FaWordpress, FaElementor, FaWpforms } from "react-icons/fa";
import { SiWoocommerce, SiYoast } from "react-icons/si";

// --- Specialized Data Models ---
const typesOfServicesData = [
  {
    id: "01",
    icon: FiPenTool,
    title: "Custom Theme Engineering",
    desc: "Bespoke, high-velocity themes engineered from scratch. Zero bloat. Pure performance.",
    span: "md:col-span-8",
  },
  {
    id: "02",
    icon: FiCode,
    title: "Plugin Architecture",
    desc: "Custom extension development to solve unique business logic requirements.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    icon: SiWoocommerce,
    title: "Headless Commerce",
    desc: "Scaling WooCommerce with high-performance storefronts and secure checkouts.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    icon: FiZap,
    title: "Performance Hardening",
    desc: "Server-level caching and asset optimization for sub-second load times.",
    span: "md:col-span-8",
  },
];

const techStackData = [
  { name: "WordPress Core", Icon: FaWordpress },
  { name: "WooCommerce", Icon: SiWoocommerce },
  { name: "ACF Pro", Icon: FiEdit },
  { name: "Elementor Pro", Icon: FaElementor },
  { name: "Yoast SEO", Icon: SiYoast },
  { name: "WP Forms", Icon: FaWpforms },
];

const comparisonData = [
  {
    feature: "Performance",
    custom: "Clean, minified code. Optimized for Core Web Vitals.",
    template: "Bloated with unused scripts and heavy assets.",
  },
  {
    feature: "Branding",
    custom: "100% bespoke design. Pixel-perfect brand alignment.",
    template: "Generic aesthetics shared by thousands of sites.",
  },
  {
    feature: "Scalability",
    custom: "Architected to handle massive traffic spikes.",
    template: "Performance bottlenecks under moderate loads.",
  },
  {
    feature: "Security",
    custom: "Lean attack surface. Hardened against exploits.",
    template: "Vulnerable to common pre-made theme leaks.",
  },
];

const WordPressSiteCreation = () => {
  return (
    <>
      <Seo
        title="WordPress Engineering | Weblynx Infotech"
        description="High-performance custom WordPress development engineered for scale, security, and speed."
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
                  Framework Layer: Custom WP
                </span>
                <h1 className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                  CMS <br />{" "}
                  <span className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                    Engine
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed">
                  We don't just "install" WordPress. We engineer
                  high-performance content frameworks that empower your brand
                  and dominate the search grid.
                </p>
                <div className="mt-12 flex gap-4">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
                  >
                    Initialize Build
                  </Link>
                </div>
              </motion.div>

              <div className="relative h-[500px] hidden lg:flex items-center justify-center">
                <CMSEngineVisual />
              </div>
            </div>
          </div>
        </section>

        {/* --- CAPABILITY GRID --- */}
        <section className="container mx-auto px-6 py-24">
          <div className="flex justify-between items-end mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              The <span className="text-brand-accent">Solutions</span>
            </h2>
            <div className="flex items-center gap-4 text-xs font-mono opacity-30 uppercase">
              <FiActivity className="text-brand-accent animate-pulse" /> Asset:
              Managed
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            {typesOfServicesData.map((item) => (
              <div
                key={item.id}
                className={`${item.span} bg-white dark:bg-brand-dark p-12 group hover:bg-brand-dark-blue/10 transition-all duration-500 relative overflow-hidden`}
              >
                <div className="flex justify-between items-start mb-16 relative z-10">
                  <span className="text-xs font-mono opacity-20">
                    [{item.id}]
                  </span>
                  <div className="text-brand-accent opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {React.createElement(item.icon, { size: 32 })}
                  </div>
                </div>
                <h3 className="text-4xl font-bold tracking-tighter mb-4 uppercase relative z-10">
                  {item.title}
                </h3>
                <p className="text-lg opacity-50 leading-tight max-w-xs relative z-10">
                  {item.desc}
                </p>
                <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                  {React.createElement(item.icon, { size: 250 })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PERFORMANCE COMPARISON --- */}
        <section className="py-32 px-6 bg-gray-50 dark:bg-black/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase">
              Custom <span className="text-brand-accent italic">vs</span>{" "}
              Generic
            </h2>
            <div className="border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-3xl">
              <div className="grid grid-cols-3 bg-gray-100 dark:bg-white/5 p-8 border-b border-gray-200 dark:border-white/10">
                <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                  Dimension
                </div>
                <div className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                  Bespoke Build
                </div>
                <div className="font-mono text-[10px] opacity-40 uppercase text-right tracking-widest">
                  Theme Template
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
                    {row.custom}
                  </div>
                  <div className="opacity-40 text-right italic text-sm">
                    {row.template}
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
                {React.createElement(tech.Icon, { size: 40 })}
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
            Build <br />{" "}
            <span className="text-brand-accent italic text-outline">
              Powerful.
            </span>
          </h2>
          <Link
            to="/contact"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Initialize CMS Build <FiMaximize />
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

// --- KINETIC CMS ENGINE VISUAL (REPLACES LOTTIE) ---
const CMSEngineVisual = () => (
  <div className="relative w-full max-w-md h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full animate-pulse" />

    <div className="relative z-10 w-full aspect-square border border-white/5 rounded-[3rem] p-8 bg-black/20 backdrop-blur-xl flex flex-col justify-center gap-6 overflow-hidden">
      {/* Floating Code Snippets */}
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="self-start p-3 bg-brand-dark border border-brand-accent/30 rounded-xl"
      >
        <FiCode className="text-brand-accent" />
      </motion.div>

      {/* Modular Blocks Visual */}
      <div className="grid grid-cols-3 gap-3">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
            className="h-16 bg-white/5 rounded-2xl border border-white/10"
          />
        ))}
      </div>

      {/* Central Core */}
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

      {/* High Speed Gauge */}
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
