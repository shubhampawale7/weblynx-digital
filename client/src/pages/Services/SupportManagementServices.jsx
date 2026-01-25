// client/src/pages/Services/SupportManagementServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiShield,
  FiTool,
  FiDatabase,
  FiAlertTriangle,
  FiArrowLeft,
  FiMaximize,
  FiActivity,
  FiServer,
  FiRefreshCw,
  FiLock,
  FiCpu,
} from "react-icons/fi";
import { FaWordpress, FaAws } from "react-icons/fa";
import { SiVercel, SiCloudflare } from "react-icons/si";

// --- 1. DATA MODELS (Refined for Operational Authority) ---
const typesOfSupportData = [
  {
    id: "01",
    icon: FiTool,
    title: "Asset Maintenance",
    desc: "Surgical software updates and kernel-level patching to ensure continuous operational integrity and performance stability.",
    span: "md:col-span-8",
  },
  {
    id: "02",
    icon: FiShield,
    title: "Security Hardening",
    desc: "Proactive threat hunting, DDoS mitigation, and firewall orchestration to protect high-stakes enterprise data.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    icon: FiDatabase,
    title: "Data Persistence",
    desc: "Automated, redundant backup protocols and off-site synchronization with 1-click disaster recovery systems.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    icon: FiAlertTriangle,
    title: "Uptime Vigilance",
    desc: "24/7 low-latency system monitoring with automated incident response and instant failure-notification triggers.",
    span: "md:col-span-8",
  },
];

const techStackData = [
  { name: "WordPress", Icon: FaWordpress, role: "CMS Management" },
  { name: "Cloudflare", Icon: SiCloudflare, role: "Edge Security" },
  { name: "AWS S3", Icon: FaAws, role: "Cloud Persistence" },
  { name: "Vercel Edge", Icon: SiVercel, role: "Deployment Ops" },
];

const comparisonData = [
  {
    feature: "Methodology",
    proactive: "Preventative failure-mapping.",
    reactive: "Emergency break-fix cycles.",
  },
  {
    feature: "Cost Model",
    proactive: "Fixed, predictable retainer.",
    reactive: "Uncapped emergency hourly spend.",
  },
  {
    feature: "Vulnerability",
    proactive: "Patched before public disclosure.",
    reactive: "Open until exploit occurs.",
  },
];

// --- 2. MAIN COMPONENT ---
const SupportManagementServices = () => {
  return (
    <>
      <Seo
        title="Proactive System Support & Managed Ops | Weblynx"
        description="Elite digital asset management. We provide 24/7 uptime monitoring, security hardening, and proactive maintenance for MERN and WordPress systems."
        keywords="Managed IT services Pune, proactive server maintenance, security hardening experts, disaster recovery Pune, WordPress support"
      />

      <main className="bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark">
        {/* --- HERO SECTION --- */}
        <section
          aria-labelledby="support-hero-title"
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
                  Status: operational_vigilance
                </span>
                <h1
                  id="support-hero-title"
                  className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8 dark:text-white"
                >
                  Support <br />{" "}
                  <span className="text-brand-accent italic font-light">
                    & Ops.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed dark:text-brand-gray">
                  We don't wait for things to break. We{" "}
                  <strong className="font-bold">engineer stability</strong>.
                  Your digital infrastructure, managed by a team that never
                  blinks.
                </p>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 inline-block"
                  >
                    Initialize Protocol
                  </Link>
                </div>
              </motion.header>

              <div
                className="relative h-[500px] hidden lg:flex items-center justify-center"
                aria-hidden="true"
              >
                <SentinelEngineVisual />
              </div>
            </div>
          </div>
        </section>

        {/* --- COVERAGE GRID --- */}
        <section
          aria-labelledby="coverage-heading"
          className="container mx-auto px-6 py-24"
        >
          <div className="flex justify-between items-end mb-16 gap-4">
            <h2
              id="coverage-heading"
              className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none dark:text-white"
            >
              The <span className="text-brand-accent">Coverage.</span>
            </h2>
            <div
              className="flex items-center gap-4 text-xs font-mono opacity-30 uppercase"
              aria-hidden="true"
            >
              <FiRefreshCw className="animate-spin-slow" /> Managed Sync Active
            </div>
          </div>

          <div
            role="list"
            className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5"
          >
            {typesOfSupportData.map((item) => (
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

        {/* --- VIGILANCE METRICS TABLE --- */}
        <section
          aria-label="Proactive vs Reactive Analysis"
          className="py-32 px-6 bg-gray-50 dark:bg-black/20"
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase dark:text-white">
              Vigilance{" "}
              <span className="text-brand-accent italic">Metrics.</span>
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
                  Proactive Ops
                </div>
                <div
                  className="font-mono text-[10px] opacity-40 uppercase text-right"
                  role="columnheader"
                >
                  Legacy Support
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
                    {row.proactive}
                  </div>
                  <div
                    className="opacity-40 text-right italic text-sm dark:text-brand-gray"
                    role="cell"
                  >
                    {row.reactive}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TOOL MARQUEE --- */}
        <section
          aria-label="Operational Infrastructure Stack"
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
            Zero <br />{" "}
            <span className="text-brand-accent italic text-outline">
              Failures.
            </span>
          </h2>
          <Link
            to="/contact"
            aria-label="Secure your systems with a maintenance retainer"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Initialize Retainer <FiMaximize aria-hidden="true" />
          </Link>
        </footer>

        <style jsx>{`
          .text-outline {
            -webkit-text-stroke: 1px #00f5d4;
            color: transparent;
          }
          .animate-spin-slow {
            animation: spin 6s linear infinite;
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

// --- KINETIC UI VISUAL (Sentinel Engine) ---
const SentinelEngineVisual = () => (
  <div className="relative w-full max-w-md h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full animate-pulse" />
    <div className="relative z-10 w-full aspect-square border border-white/5 rounded-[3rem] p-10 bg-black/20 backdrop-blur-xl overflow-hidden flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,245,212,0.1)_90deg,transparent_90deg)]"
      />
      <div className="relative flex flex-col items-center gap-6">
        <div className="flex gap-4">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="p-4 bg-brand-dark border border-brand-accent/50 rounded-2xl"
          >
            <FiShield className="text-brand-accent text-3xl" />
          </motion.div>
          <motion.div
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="p-4 bg-brand-dark border border-white/10 rounded-2xl"
          >
            <FiLock className="text-white text-3xl" />
          </motion.div>
        </div>
        <div className="w-48 h-12 bg-white/5 rounded-full border border-white/10 flex items-center px-4 overflow-hidden relative">
          <div className="flex gap-1">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [4, 20, 8, 15, 4] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                className="w-1 bg-brand-accent/40 rounded-full"
              />
            ))}
          </div>
          <div className="absolute right-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent">
              LIVE
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-10 right-10 p-2 bg-brand-dark border border-white/10 rounded-lg">
        <FiServer size={14} className="text-white/40" />
      </div>
      <div className="absolute bottom-10 left-10 p-2 bg-brand-dark border border-white/10 rounded-lg">
        <FiCpu size={14} className="text-white/40" />
      </div>
    </div>
  </div>
);

export default SupportManagementServices;
