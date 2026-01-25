// client/src/components/Home/ServicesPreview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCode,
  FiPenTool,
  FiTrendingUp,
  FiSmartphone,
  FiLayers,
  FiChevronRight,
  FiActivity,
} from "react-icons/fi";

const servicesData = [
  {
    id: "01",
    Icon: FiCode,
    title: "Custom Web Apps",
    tags: ["MERN", "Scalable"],
    description:
      "Bespoke engines built for high-performance business logic and complex workflows.",
    link: "/services/custom-web-applications",
    colSpan: "lg:col-span-8",
    bg: "hover:bg-blue-500/5",
  },
  {
    id: "02",
    Icon: FiSmartphone,
    title: "Mobile Systems",
    tags: ["iOS", "Android"],
    description:
      "Seamless native and cross-platform mobile experiences engineered for reach.",
    link: "/services/mobile-app-development",
    colSpan: "lg:col-span-4",
    bg: "hover:bg-purple-500/5",
  },
  {
    id: "03",
    Icon: FiLayers,
    title: "Full Stack Dev",
    tags: ["End-to-End"],
    description:
      "Unified vision across the entire stack, from UI mastery to server stability.",
    link: "/services/full-stack-development",
    colSpan: "lg:col-span-4",
    bg: "hover:bg-emerald-500/5",
  },
  {
    id: "04",
    Icon: FiTrendingUp,
    title: "SEO & Growth",
    tags: ["Analytics", "Rank"],
    description:
      "Data-driven organic strategies designed to dominate search engine grids.",
    link: "/services/seo-optimization",
    colSpan: "lg:col-span-8",
    bg: "hover:bg-orange-500/5",
  },
  {
    id: "05",
    Icon: FiPenTool,
    title: "WordPress CMS",
    tags: ["Custom Themes"],
    description:
      "Elegant, manageable, and lightning-fast WordPress solutions without the bloat.",
    link: "/services/wordpress-site-creation",
    colSpan: "lg:col-span-12",
    bg: "hover:bg-brand-accent/5",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-white dark:bg-brand-dark py-24 md:py-40 border-t border-gray-100 dark:border-white/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-brand-accent"></span>
              <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                Engineering Menu
              </span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-[0.85]">
              Surgical <br />{" "}
              <span className="text-brand-accent italic font-light">
                Capabilities.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 text-[10px] font-mono opacity-20 uppercase tracking-[0.2em]"
          >
            <span>Status: Operational</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_green]" />
          </motion.div>
        </div>

        {/* The Blueprint Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5 overflow-hidden rounded-[2.5rem]">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-20 flex justify-center">
          <Link
            to="/services"
            className="group flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-[0.4em] dark:text-white/40 hover:text-brand-accent transition-all"
          >
            View Full Technical Documentation{" "}
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`${service.colSpan} relative bg-white dark:bg-brand-dark p-10 md:p-14 group transition-all duration-500 ${service.bg} overflow-hidden`}
  >
    {/* Identification Metadata */}
    <div className="flex justify-between items-start mb-16 relative z-10">
      <span className="font-mono text-[10px] opacity-20 group-hover:opacity-100 group-hover:text-brand-accent transition-all transition-duration-500">
        [ SYSTEM_ID_0{service.id} ]
      </span>
      <div className="flex gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-mono border border-gray-200 dark:border-white/10 px-2 py-0.5 rounded uppercase opacity-40"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <div className="mb-8 p-4 w-fit rounded-2xl bg-gray-50 dark:bg-white/5 text-brand-dark dark:text-white group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-500 shadow-xl">
        <service.Icon size={32} />
      </div>
      <h3 className="text-4xl font-bold dark:text-white tracking-tighter mb-4 uppercase">
        {service.title}
      </h3>
      <p className="text-lg dark:text-brand-gray leading-tight max-w-sm font-light mb-10 opacity-60 group-hover:opacity-100 transition-opacity">
        {service.description}
      </p>

      <Link
        to={service.link}
        className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent uppercase tracking-widest overflow-hidden"
      >
        <span className="relative">
          Deploy Logic
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-brand-accent"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
          />
        </span>
        <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>

    {/* Dynamic Background Watermark */}
    <div className="absolute -bottom-10 -right-10 opacity-[0.02] dark:opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none">
      <service.Icon size={400} />
    </div>

    {/* Corner Glow Effect */}
    <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-accent/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

export default ServicesPreview;
