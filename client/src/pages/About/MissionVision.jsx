// client/src/components/About/MissionVision.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiEye, FiActivity } from "react-icons/fi";

const principles = [
  {
    id: "01",
    Icon: FiTarget,
    title: "MISSION_OBJECTIVE",
    description:
      "To empower global enterprises by deploying surgical, high-performance digital systems that optimize operations and catalyze exponential market growth.",
    status: "Active_Deployment",
    seoContext:
      "Our mission is focused on high-performance digital systems and operational optimization.",
  },
  {
    id: "02",
    Icon: FiEye,
    title: "FUTURE_VISION",
    description:
      "To redefine the standard of digital engineering, becoming the primary catalyst for technical innovation and architectural excellence on a global scale.",
    status: "Strategic_Forecasting",
    seoContext:
      "Our vision is to set the digital engineering standard through architectural excellence.",
  },
];

const MissionVision = () => {
  return (
    <section
      id="mission-vision"
      aria-labelledby="directives-heading"
      className="relative bg-white dark:bg-brand-dark py-24 md:py-40 overflow-hidden border-t border-gray-100 dark:border-white/5"
    >
      {/* Background Architectural Watermark */}
      <div
        className="absolute top-0 left-0 p-10 opacity-[0.02] dark:opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-black text-[12vw] leading-none uppercase">
          DIRECTIVES
        </span>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                className="h-[2px] w-12 bg-brand-accent"
                aria-hidden="true"
              />
              <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                Core Parameters
              </span>
            </div>

            <h2
              id="directives-heading"
              className="font-display text-6xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-[0.85] uppercase italic"
            >
              Guiding <br />{" "}
              <span className="text-brand-accent">Principles.</span>
            </h2>

            {/* Semantic SEO reinforcement (About page safe) */}
            <p className="sr-only">
              Weblynx Infotech’s mission and vision define its commitment to
              high-performance digital engineering, scalable architecture, and
              long-term technical excellence.
            </p>
          </motion.div>

          <div
            className="hidden lg:flex items-center gap-4 text-[10px] font-mono opacity-20 uppercase tracking-[0.2em]"
            aria-hidden="true"
          >
            <FiActivity className="text-brand-accent animate-pulse" />
            <span>Execution_Protocol: Optimal</span>
          </div>
        </header>

        {/* Directive Grid */}
        <div
          role="list"
          className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[3rem] overflow-hidden"
        >
          {principles.map((p, index) => (
            <PrincipleCard key={p.id} p={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PrincipleCard = ({ p, index }) => {
  return (
    <motion.article
      role="listitem"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="lg:col-span-6 bg-white dark:bg-brand-dark p-12 md:p-20 group relative overflow-hidden"
    >
      {/* Background ID Marker */}
      <div
        className="absolute top-10 right-10 font-mono text-8xl font-black opacity-[0.02] dark:opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700"
        aria-hidden="true"
      >
        {p.id}
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <div
            className="p-4 rounded-2xl bg-brand-accent/5 border border-brand-accent/20 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-500"
            aria-hidden="true"
          >
            <p.Icon size={32} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.3em]">
              {p.status.replace(/_/g, " ")}
            </span>
            <h3 className="text-3xl font-bold dark:text-white tracking-tighter uppercase">
              {p.title.replace(/_/g, " ")}
            </h3>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-brand-light-blue dark:text-brand-gray leading-relaxed font-light mb-12">
          {p.description}
        </p>

        {/* Hidden SEO Context */}
        <p className="sr-only">{p.seoContext}</p>

        {/* Progress Bar */}
        <div
          className="w-full h-px bg-gray-100 dark:bg-white/10 relative"
          aria-hidden="true"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-0 left-0 h-full bg-brand-accent"
          />
          <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_#00f5d4]" />
        </div>
      </div>

      {/* Hover Glow */}
      <div
        className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        aria-hidden="true"
      />
    </motion.article>
  );
};

export default MissionVision;
