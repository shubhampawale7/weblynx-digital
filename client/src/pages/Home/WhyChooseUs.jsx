// client/src/components/Home/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiZap,
  FiUsers,
  FiBarChart2,
  FiLayers,
  FiShield,
  FiClock,
  FiCpu,
  FiActivity,
} from "react-icons/fi";

const features = [
  {
    id: "01",
    Icon: FiZap,
    title: "AGILE_INNOVATION",
    description:
      "Deploying cutting-edge tech stacks to solve complex business logic with fresh architectural perspectives.",
    longDesc:
      "Expertise in rapid development cycles and modern software architecture.",
  },
  {
    id: "02",
    Icon: FiUsers,
    title: "CLIENT_SYNERGY",
    description:
      "Close-proximity collaboration ensuring every digital pixel aligns with your primary business objectives.",
    longDesc:
      "Dedicated project management and collaborative digital strategy.",
  },
  {
    id: "03",
    Icon: FiBarChart2,
    title: "SCALABLE_INFRA",
    description:
      "Engineering robust, high-throughput systems designed to scale from MVP to enterprise global traffic.",
    longDesc: "High-performance cloud infrastructure and database scalability.",
  },
  {
    id: "04",
    Icon: FiLayers,
    title: "PIXEL_PERFECTION",
    description:
      "Surgical precision in UI/UX design, creating high-fidelity interfaces that drive user engagement.",
    longDesc: "Premium UI/UX design services and responsive web development.",
  },
  {
    id: "05",
    Icon: FiShield,
    title: "HARDENED_SECURITY",
    description:
      "End-to-end encryption and security-first development protocols to protect high-stakes data assets.",
    longDesc: "Cybersecurity-first development and secure API integration.",
  },
  {
    id: "06",
    Icon: FiClock,
    title: "ZERO_LATENCY_DELIVERY",
    description:
      "Respecting critical launch windows with a streamlined development pipeline and on-time deployment.",
    longDesc: "On-time project delivery and agile sprint management.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-white dark:bg-brand-dark py-24 md:py-40 border-t border-gray-100 dark:border-white/5"
    >
      <div className="container mx-auto px-6">
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
              ></span>
              <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                System Differentiators
              </span>
            </div>
            <h2
              id="why-choose-heading"
              className="font-display text-6xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-[0.85]"
            >
              The Weblynx <br />{" "}
              <span className="text-brand-accent italic font-light">Edge.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-right hidden lg:block"
            aria-hidden="true"
          >
            <div className="flex items-center gap-3 text-[10px] font-mono opacity-20 uppercase tracking-widest mb-2">
              <FiCpu className="text-brand-accent animate-pulse" />{" "}
              Processing_Advantage
            </div>
            <p className="text-sm text-brand-light-blue dark:text-brand-gray max-w-[200px] leading-tight opacity-40">
              Optimizing for results across every layer of the digital stack.
            </p>
          </motion.div>
        </header>

        {/* Semantic Grid List */}
        <div
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 overflow-hidden rounded-[2.5rem]"
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              role="listitem"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-brand-dark p-12 transition-all duration-500 hover:bg-brand-accent/5 overflow-hidden"
            >
              {/* Card Metadata */}
              <div className="flex justify-between items-start mb-16 relative z-10">
                <span
                  className="font-mono text-[10px] opacity-20 group-hover:opacity-100 group-hover:text-brand-accent transition-all"
                  aria-hidden="true"
                >
                  [ SPEC_ID_0{feature.id} ]
                </span>
                <div className="text-brand-accent opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  <feature.Icon size={24} aria-hidden="true" />
                </div>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="font-mono font-black text-xl text-brand-dark dark:text-white tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-500 uppercase">
                  {feature.title.replace(/_/g, " ")}
                </h3>
                <p className="text-base text-brand-light-blue dark:text-brand-gray leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                  {feature.description}
                </p>
                {/* Semantic Long Description for SEO indexing */}
                <p className="sr-only">{feature.longDesc}</p>
              </div>

              {/* Background Watermark - Hidden from bots */}
              <div
                className="absolute -bottom-10 -right-10 opacity-[0.01] dark:opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-700 pointer-events-none"
                aria-hidden="true"
              >
                <feature.Icon size={220} />
              </div>

              {/* Surgical Border Accent */}
              <div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>

        {/* Tactical Footnote */}
        <footer className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 px-6 py-2 rounded-full border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
            <FiActivity
              className="text-brand-accent text-xs animate-pulse"
              aria-hidden="true"
            />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-40">
              Engineering_Excellence_Verified
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default WhyChooseUs;
