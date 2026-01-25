// client/src/pages/Services/SupportManagementServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiShield,
  FiZap,
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

// --- Specialized Data Models ---
const typesOfSupportData = [
  {
    id: "01",
    icon: FiTool,
    title: "Asset Maintenance",
    desc: "Surgical updates and kernel-level patching to ensure continuous operational integrity.",
    span: "md:col-span-8",
  },
  {
    id: "02",
    icon: FiShield,
    title: "Security Hardening",
    desc: "Proactive threat hunting, DDoS mitigation, and firewall orchestration.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    icon: FiDatabase,
    title: "Data Persistence",
    desc: "Automated, redundant backup protocols with 1-click disaster recovery.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    icon: FiAlertTriangle,
    title: "Uptime Vigilance",
    desc: "24/7 low-latency monitoring with instant failure-notification triggers.",
    span: "md:col-span-8",
  },
];

const techStackData = [
  { name: "WordPress", Icon: FaWordpress },
  { name: "Cloudflare", Icon: SiCloudflare },
  { name: "AWS S3", Icon: FaAws },
  { name: "Vercel Edge", Icon: SiVercel },
];

const comparisonData = [
  {
    feature: "Methodology",
    proactive: "Preventative failure-mapping.",
    reactive: "Emergency break-fix cycles.",
  },
  {
    feature: "Latency",
    proactive: "Optimized through continuous tuning.",
    reactive: "Degradation until total failure.",
  },
  {
    feature: "Cost Risk",
    proactive: "Fixed, predictable retainer.",
    reactive: "Uncapped emergency hourly rates.",
  },
  {
    feature: "Vulnerability",
    proactive: "Patched before disclosure.",
    reactive: "Open until exploit occurs.",
  },
];

const SupportManagementServices = () => {
  return (
    <>
      <Seo
        title="Support & Management | Weblynx Infotech"
        description="Elite digital asset management and proactive system maintenance."
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
                  System Health: Nominal
                </span>
                <h1 className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                  Support <br />{" "}
                  <span className="text-brand-accent text-outline">& Ops</span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed">
                  We don't wait for things to break. We engineer stability. Your
                  digital infrastructure, managed by a team that never blinks.
                </p>
                <div className="mt-12 flex gap-4">
                  <Link
                    to="/contact"
                    className="px-10 py-5 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
                  >
                    Initialize Protocol
                  </Link>
                </div>
              </motion.div>

              <div className="relative h-[500px] hidden lg:flex items-center justify-center">
                <SentinelEngineVisual />
              </div>
            </div>
          </div>
        </section>

        {/* --- CAPABILITY GRID --- */}
        <section className="container mx-auto px-6 py-24">
          <div className="flex justify-between items-end mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              The <span className="text-brand-accent">Coverage</span>
            </h2>
            <div className="flex items-center gap-4 text-xs font-mono opacity-30 uppercase">
              <FiRefreshCw className="animate-spin-slow" /> Automatic Sync
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            {typesOfSupportData.map((item) => (
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
                <h3 className="text-4xl font-bold tracking-tighter mb-4 uppercase relative z-10">
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

        {/* --- COMPARISON SPEC TABLE --- */}
        <section className="py-32 px-6 bg-gray-50 dark:bg-black/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center uppercase">
              Vigilance{" "}
              <span className="text-brand-accent italic">Metrics</span>
            </h2>
            <div className="border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-3xl">
              <div className="grid grid-cols-3 bg-gray-100 dark:bg-white/5 p-8 border-b border-gray-200 dark:border-white/10">
                <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                  Dimension
                </div>
                <div className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                  Proactive Ops
                </div>
                <div className="font-mono text-[10px] opacity-40 uppercase text-right tracking-widest">
                  Legacy Support
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
                    {row.proactive}
                  </div>
                  <div className="opacity-40 text-right italic text-sm">
                    {row.reactive}
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
                {tech.Icon && <tech.Icon size={40} />}
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
            Zero <br />{" "}
            <span className="text-brand-accent italic text-outline">
              Failures.
            </span>
          </h2>
          <Link
            to="/contact"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase"
          >
            Initialize Retainer <FiMaximize />
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

// --- KINETIC SENTINEL ENGINE (REPLACES LOTTIE) ---
const SentinelEngineVisual = () => (
  <div className="relative w-full max-w-md h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full animate-pulse" />

    <div className="relative z-10 w-full aspect-square border border-white/5 rounded-[3rem] p-10 bg-black/20 backdrop-blur-xl overflow-hidden flex items-center justify-center">
      {/* Radar Scanner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,245,212,0.1)_90deg,transparent_90deg)]"
      />

      {/* System Core */}
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

        {/* Uptime Pulse */}
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

      {/* Peripheral Nodes */}
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
