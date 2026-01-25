// client/src/pages/Services/CustomWebApplications.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import {
  FiBox,
  FiBriefcase,
  FiCloud,
  FiGrid,
  FiMessageSquare,
  FiTrendingUp,
  FiLayers,
  FiCompass,
  FiLayout,
  FiCode,
  FiFlag,
  FiLifeBuoy,
  FiCheckCircle,
  FiX,
  FiArrowLeft,
  FiMaximize,
  FiActivity,
} from "react-icons/fi";

// --- Specialized Data Models ---
const whatWeBuildData = [
  {
    id: "01",
    icon: FiBriefcase,
    title: "Enterprise Solutions",
    desc: "Custom CRMs and internal ERP systems designed for high-stakes operational efficiency.",
    span: "md:col-span-8",
  },
  {
    id: "02",
    icon: FiBox,
    title: "E-comm Platforms",
    desc: "Headless commerce with advanced payment logic.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    icon: FiCloud,
    title: "SaaS Products",
    desc: "Scalable multi-tenant cloud architectures.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    icon: FiTrendingUp,
    title: "Progressive Web Apps",
    desc: "Native-feel web experiences that work offline and scale globally.",
    span: "md:col-span-8",
  },
];

const techStackData = [
  { name: "React", Icon: FaReact },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "MERN Stack", Icon: FiLayers },
];

const comparisonData = [
  {
    feature: "Flexibility",
    custom: "Built precisely for your unique workflows.",
    offTheShelf: "Rigid templates with limited mods.",
  },
  {
    feature: "Scalability",
    custom: "Infinite growth path without bottlenecks.",
    offTheShelf: "Hard caps on traffic and data loads.",
  },
  {
    feature: "Cost Efficiency",
    custom: "No recurring per-user licensing taxes.",
    offTheShelf: "Lifetime subscription overhead.",
  },
  {
    feature: "Edge",
    custom: "A proprietary asset your rivals can't buy.",
    offTheShelf: "The same tool your competitors use.",
  },
];

const approachData = [
  {
    title: "Discovery",
    icon: FiCompass,
    desc: "Mapping business objectives into technical roadmaps.",
  },
  {
    title: "Prototyping",
    icon: FiLayout,
    desc: "High-fidelity UX blueprints and interaction design.",
  },
  {
    title: "Engineering",
    icon: FiCode,
    desc: "Agile development with clean, scalable codebases.",
  },
  {
    title: "Deployment",
    icon: FiFlag,
    desc: "Automated CI/CD pipelines and cloud launch.",
  },
  {
    title: "Evolution",
    icon: FiLifeBuoy,
    desc: "Continuous monitoring and feature scaling.",
  },
];

// --- Main Page Component ---
const CustomWebApplications = () => {
  return (
    <>
      <Seo
        title="Custom Web Engineering | Weblynx Infotech"
        description="We architect scalable, high-performance web applications tailored to elite business objectives."
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
                  System Deployment: 01
                </span>
                <h1 className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                  Custom <br />{" "}
                  <span className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                    Apps
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed">
                  We engineer proprietary digital assets. No templates. No
                  shortcuts. Just high-performance code built for your unique
                  logic.
                </p>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
                  >
                    Initialize Project
                  </Link>
                </div>
              </motion.div>

              <div className="relative h-[500px] hidden lg:flex items-center justify-center">
                <AppEngineVisual />
              </div>
            </div>
          </div>
        </section>

        {/* --- SCHEMATIC GRID --- */}
        <section className="container mx-auto px-6 py-24">
          <div className="flex justify-between items-end mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              The <span className="text-brand-accent">Builds</span>
            </h2>
            <div className="text-right font-mono text-[10px] opacity-20 uppercase hidden md:block">
              Architecture // MERN // PWA
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            {whatWeBuildData.map((item) => (
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
                  <item.icon size={300} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- TECHNICAL SPEC TABLE --- */}
        <section className="py-32 px-6 bg-gray-50 dark:bg-black/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase">
              Capability Comparison
            </h2>
            <div className="border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-3xl">
              <div className="grid grid-cols-3 bg-gray-100 dark:bg-white/5 p-8 border-b border-gray-200 dark:border-white/10">
                <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                  Feature
                </div>
                <div className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                  Weblynx Custom
                </div>
                <div className="font-mono text-[10px] opacity-40 uppercase text-right tracking-widest">
                  Generic Software
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
                    {row.offTheShelf}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SCROLL-THROUGH BLUEPRINT --- */}
        <BlueprintTimeline />

        {/* --- STACK MARQUEE --- */}
        <section className="py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="container mx-auto px-6 mb-12">
            <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.5em]">
              Engineering Stack
            </span>
          </div>
          <div className="flex justify-around items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {techStackData.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <tech.Icon size={40} />
                <span className="text-[10px] font-mono font-bold">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- FINAL TERMINAL CTA --- */}
        <section className="py-40 px-6 text-center bg-brand-dark text-white">
          <h2 className="text-7xl md:text-[12rem] font-black tracking-tighter uppercase mb-12 leading-[0.8]">
            Build <br />{" "}
            <span className="text-brand-accent italic text-outline">
              Unique.
            </span>
          </h2>
          <Link
            to="/contact"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Deploy Application <FiMaximize />
          </Link>
        </section>

        <style jsx>{`
          .text-outline {
            -webkit-text-stroke: 1px currentColor;
            color: transparent;
          }
          @media (max-width: 768px) {
            .text-outline {
              -webkit-text-stroke: 0.5px currentColor;
            }
          }
        `}</style>
      </main>
    </>
  );
};

// --- KINETIC UI VISUAL (REPLACES LOTTIE) ---
const AppEngineVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-20">
    <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full animate-pulse" />
    <div className="relative z-10 w-full h-full border border-white/5 rounded-3xl p-8 bg-black/20 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Fake App Layout */}
      <div className="flex gap-2 mb-8">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ height: [20, 60, 40] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
            className="w-full bg-brand-accent/10 rounded-lg border border-brand-accent/20"
          />
        ))}
      </div>
      <div className="space-y-4">
        <div className="h-4 w-3/4 bg-white/5 rounded" />
        <div className="h-4 w-1/2 bg-white/5 rounded" />
        <div className="h-4 w-full bg-white/5 rounded" />
      </div>
      <div className="absolute bottom-10 right-10">
        <FiActivity className="text-brand-accent text-6xl animate-pulse" />
      </div>
    </div>
  </div>
);

// --- BLUEPRINT TIMELINE COMPONENT ---
const BlueprintTimeline = () => {
  const containerRef = useRef(null);
  return (
    <section ref={containerRef} className="py-40 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-20">
        <div className="md:sticky top-40 max-w-sm">
          <h2 className="text-6xl font-black tracking-tighter uppercase mb-6 leading-[0.8]">
            The <br /> <span className="text-brand-accent">Blueprint</span>
          </h2>
          <p className="opacity-50 text-lg">
            Our methodical approach to crafting production-grade software.
          </p>
        </div>
        <div className="flex-grow space-y-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5">
          {approachData.map((step, i) => (
            <div
              key={i}
              className="bg-white dark:bg-brand-dark p-12 flex gap-10 items-start hover:bg-brand-accent/5 transition-all group"
            >
              <span className="text-5xl font-black text-brand-accent opacity-10 group-hover:opacity-100 transition-opacity">
                0{i + 1}
              </span>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <step.icon className="text-brand-accent" size={20} />
                  <h4 className="text-2xl font-bold uppercase">{step.title}</h4>
                </div>
                <p className="opacity-50 max-w-md leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomWebApplications;
