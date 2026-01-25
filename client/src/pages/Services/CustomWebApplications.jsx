// client/src/pages/Services/CustomWebApplications.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import {
  FiBox,
  FiBriefcase,
  FiCloud,
  FiTrendingUp,
  FiLayers,
  FiCompass,
  FiLayout,
  FiCode,
  FiFlag,
  FiLifeBuoy,
  FiArrowLeft,
  FiMaximize,
  FiActivity,
} from "react-icons/fi";

// --- 1. DATA MODELS (Refined with High-Weight Keywords) ---
const whatWeBuildData = [
  {
    id: "01",
    icon: FiBriefcase,
    title: "Enterprise Solutions",
    desc: "Bespoke internal ERP systems and custom CRM architecture designed for operational efficiency.",
    span: "md:col-span-8",
  },
  {
    id: "02",
    icon: FiBox,
    title: "SaaS Infrastructure",
    desc: "Scalable multi-tenant cloud platforms engineered for massive user concurrency and data throughput.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    icon: FiCloud,
    title: "Headless E-comm",
    desc: "Decoupled commerce engines optimized for performance, security, and global checkout logic.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    icon: FiTrendingUp,
    title: "Progressive Web Apps",
    desc: "High-performance PWA builds offering native-feel web experiences with offline capabilities.",
    span: "md:col-span-8",
  },
];

const techStackData = [
  { name: "React", Icon: FaReact, seo: "Frontend UI Library" },
  { name: "Node.js", Icon: FaNodeJs, seo: "Backend Runtime" },
  { name: "Express.js", Icon: SiExpress, seo: "API Framework" },
  { name: "MongoDB", Icon: SiMongodb, seo: "NoSQL Database" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, seo: "Design System" },
  { name: "MERN Stack", Icon: FiLayers, seo: "Full-Stack Framework" },
];

const comparisonData = [
  {
    feature: "Flexibility",
    custom: "Surgically built for your unique business workflows.",
    generic: "Rigid templates with limited customization depth.",
  },
  {
    feature: "Scalability",
    custom: "Infinite horizontal growth without system bottlenecks.",
    generic: "Hard caps on traffic and data processing loads.",
  },
  {
    feature: "ROI (Cost)",
    custom: "One-time asset cost; no recurring per-user taxes.",
    generic: "Lifetime subscription fees and licensing overhead.",
  },
];

const approachData = [
  {
    title: "Discovery",
    icon: FiCompass,
    desc: "Mapping core business objectives into actionable technical roadmaps.",
  },
  {
    title: "Prototyping",
    icon: FiLayout,
    desc: "High-fidelity UX blueprints and interactive design system modeling.",
  },
  {
    title: "Engineering",
    icon: FiCode,
    desc: "Agile development using clean-room code and MERN stack standards.",
  },
  {
    title: "Cloud Launch",
    icon: FiFlag,
    desc: "Automated CI/CD pipelines for production-ready global deployment.",
  },
  {
    title: "Scale",
    icon: FiLifeBuoy,
    desc: "Continuous uptime monitoring and adaptive feature scaling.",
  },
];

// --- 2. MAIN COMPONENT ---
const CustomWebApplications = () => {
  return (
    <>
      <Seo
        title="Custom Web Application Development | MERN Stack Experts"
        description="We architect surgical, production-grade custom web applications tailored to elite business objectives. Specializing in MERN stack, SaaS architecture, and Enterprise ERPs."
        keywords="Custom web app development Pune, MERN stack developers India, enterprise software engineering, scalable SaaS platforms"
      />

      <main className="bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark">
        {/* --- HERO SECTION --- */}
        <section
          aria-labelledby="custom-app-hero"
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
                  System Deployment: Core_01
                </span>
                <h1
                  id="custom-app-hero"
                  className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8 dark:text-white"
                >
                  Custom <br />{" "}
                  <span className="text-brand-accent italic font-light">
                    Apps.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed dark:text-brand-gray">
                  We engineer{" "}
                  <strong className="font-bold">
                    proprietary digital assets
                  </strong>
                  . No templates. No shortcuts. Just high-performance code built
                  for your unique business logic.
                </p>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 inline-block"
                  >
                    Initialize Project
                  </Link>
                </div>
              </motion.header>

              <div
                className="relative h-[500px] hidden lg:flex items-center justify-center"
                aria-hidden="true"
              >
                <AppEngineVisual />
              </div>
            </div>
          </div>
        </section>

        {/* --- VERTICAL GRID --- */}
        <section
          aria-labelledby="builds-heading"
          className="container mx-auto px-6 py-24"
        >
          <div className="flex justify-between items-end mb-16 gap-4">
            <h2
              id="builds-heading"
              className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none dark:text-white"
            >
              The <span className="text-brand-accent">Builds.</span>
            </h2>
            <div
              className="text-right font-mono text-[10px] opacity-20 uppercase hidden md:block"
              aria-hidden="true"
            >
              Architecture // MERN Stack // PWA Systems
            </div>
          </div>
          <div
            role="list"
            className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5"
          >
            {whatWeBuildData.map((item) => (
              <motion.article
                key={item.id}
                role="listitem"
                className={`${item.span} bg-white dark:bg-brand-dark p-12 group hover:bg-brand-accent/5 transition-all duration-500 relative overflow-hidden`}
              >
                <div className="flex justify-between items-start mb-16 relative z-10">
                  <span className="text-xs font-mono opacity-20">
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
                  <item.icon size={300} />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section
          aria-label="Comparison with generic solutions"
          className="py-32 px-6 bg-gray-50 dark:bg-black/20"
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase dark:text-white">
              Capability Analysis
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
                  Metric
                </div>
                <div
                  className="font-mono text-[10px] text-brand-accent uppercase"
                  role="columnheader"
                >
                  Weblynx Surgical
                </div>
                <div
                  className="font-mono text-[10px] opacity-40 uppercase text-right"
                  role="columnheader"
                >
                  Legacy Systems
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
                    {row.generic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BlueprintTimeline />

        {/* --- STACK MARQUEE --- */}
        <section
          aria-label="Technology Engine"
          className="py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden"
        >
          <div className="container mx-auto px-6 mb-12">
            <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.5em]">
              Primary Software Engineering Stack
            </span>
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
                <span className="text-[10px] font-mono font-bold uppercase tracking-tighter dark:text-white">
                  {tech.name}
                </span>
                <span className="sr-only">{tech.seo}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <footer className="py-40 px-6 text-center bg-brand-dark text-white">
          <h2 className="text-7xl md:text-[12rem] font-black tracking-tighter uppercase mb-12 leading-[0.8]">
            Build <br />{" "}
            <span className="text-brand-accent italic text-outline">
              Unique.
            </span>
          </h2>
          <Link
            to="/contact"
            aria-label="Contact us to deploy your custom application"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Deploy Application <FiMaximize aria-hidden="true" />
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

// --- SUB-COMPONENTS ---

const AppEngineVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-20">
    <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full animate-pulse" />
    <div className="relative z-10 w-full h-full border border-white/5 rounded-3xl p-8 bg-black/20 backdrop-blur-xl shadow-2xl overflow-hidden">
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
      <div className="absolute bottom-10 right-10">
        <FiActivity className="text-brand-accent text-6xl animate-pulse" />
      </div>
    </div>
  </div>
);

const BlueprintTimeline = () => (
  <section
    aria-labelledby="blueprint-heading"
    className="py-40 container mx-auto px-6"
  >
    <div className="flex flex-col md:flex-row justify-between items-start gap-20">
      <header className="md:sticky top-40 max-w-sm">
        <h2
          id="blueprint-heading"
          className="text-6xl font-black tracking-tighter uppercase mb-6 leading-[0.8] dark:text-white"
        >
          The <br /> <span className="text-brand-accent">Blueprint.</span>
        </h2>
        <p className="opacity-50 text-lg dark:text-brand-gray">
          Our surgical approach to crafting production-grade software and
          enterprise assets.
        </p>
      </header>
      <div
        className="flex-grow space-y-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5"
        role="list"
      >
        {approachData.map((step, i) => (
          <article
            key={i}
            role="listitem"
            className="bg-white dark:bg-brand-dark p-12 flex gap-10 items-start hover:bg-brand-accent/5 transition-all group"
          >
            <span
              className="text-5xl font-black text-brand-accent opacity-10 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            >
              0{i + 1}
            </span>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <step.icon
                  className="text-brand-accent"
                  size={20}
                  aria-hidden="true"
                />
                <h4 className="text-2xl font-bold uppercase dark:text-white">
                  {step.title}
                </h4>
              </div>
              <p className="opacity-50 max-w-md leading-relaxed dark:text-brand-gray">
                {step.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CustomWebApplications;
