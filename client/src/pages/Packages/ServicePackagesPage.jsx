// client/src/pages/Packages/ServicePackagesPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { packagesData } from "../../data/packagesData.js";
import {
  FiArrowRight,
  FiActivity,
  FiBox,
  FiCpu,
  FiCode,
  FiGlobe,
} from "react-icons/fi";

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicePackagesPage = () => {
  return (
    <>
      <Seo
        title="Software Development Packages | MERN Stack Pricing – Weblynx Infotech"
        description="Explore our structured engineering tiers. From MVP rapid-deployment to enterprise-grade MERN architectures, discover the blueprint for your digital growth."
        keywords="Software development pricing, MVP engineering packages, Enterprise MERN stack cost, Pune tech agency bundles"
        canonical="https://www.weblynxinfotech.com/packages"
      />

      <main className="pt-32 pb-20 bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark">
        {/* --- HEADER: Tactical Dossier --- */}
        <header className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="h-[1px] w-8 bg-brand-accent"
                aria-hidden="true"
              ></span>
              <span className="text-brand-accent font-mono text-[10px] uppercase tracking-[0.4em]">
                Resource_Index_2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black dark:text-white uppercase tracking-tighter leading-none mb-6">
              Engineering <br />
              <span className="text-brand-accent italic font-light">
                Bundles.
              </span>
            </h1>
            <p className="text-brand-light-blue dark:text-brand-gray text-base max-w-xl font-light leading-relaxed">
              Structured deployment tiers engineered for{" "}
              <strong className="font-bold">scalability</strong>, performance,
              and{" "}
              <strong className="font-bold">strategic business growth</strong>.
            </p>
          </div>
        </header>

        {/* --- COMPACT TIERS GRID: Semantic Product List --- */}
        <section
          aria-label="Available Service Tiers"
          className="container mx-auto px-6"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            role="list"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {packagesData.map((pkg, index) => (
              <CompactPackageCard key={pkg.title} pkg={pkg} index={index} />
            ))}
          </motion.div>
        </section>

        {/* --- CUSTOM TERMINAL FOOTER --- */}
        <footer className="mt-24 py-16 bg-gray-50 dark:bg-brand-dark-blue/10 border-t border-gray-100 dark:border-white/5">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h2 className="text-2xl font-bold dark:text-white uppercase tracking-tight mb-2">
                Non-Standard Requirements?
              </h2>
              <p className="text-sm text-brand-gray opacity-60 font-light">
                We engineer bespoke proprietary systems for{" "}
                <strong className="font-bold text-brand-accent">
                  enterprise-scale logic
                </strong>
                .
              </p>
            </div>
            <Link
              to="/contact"
              aria-label="Request a custom technical build quote"
              className="group flex items-center gap-4 px-8 py-4 bg-brand-accent text-brand-dark font-black uppercase text-[10px] tracking-widest rounded-full transition-all hover:scale-105 shadow-xl shadow-brand-accent/20"
            >
              REQUEST CUSTOM BUILD{" "}
              <FiArrowRight
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
};

const CompactPackageCard = ({ pkg, index }) => {
  const icons = [FiCode, FiCpu, FiGlobe];
  const Icon = icons[index] || FiBox;

  return (
    <motion.article
      variants={itemVariants}
      role="listitem"
      className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-500 group
        ${
          pkg.isHighlighted
            ? "bg-brand-accent/[0.03] border-brand-accent shadow-2xl z-10"
            : "bg-white dark:bg-brand-dark border-gray-100 dark:border-white/5"
        }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div
          className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-500"
          aria-hidden="true"
        >
          <Icon size={20} />
        </div>
        <span className="font-mono text-[9px] opacity-20 group-hover:opacity-100 transition-opacity">
          CONFIG_ID: 0{index + 1}
        </span>
      </div>

      <h2 className="text-2xl font-black dark:text-white uppercase tracking-tighter mb-2 group-hover:text-brand-accent transition-colors">
        {pkg.title}
      </h2>

      <p className="text-xs text-brand-gray font-light leading-relaxed mb-8 opacity-60 dark:text-brand-gray">
        {pkg.description}
      </p>

      <ul
        className="space-y-3 mb-10 flex-grow"
        aria-label={`${pkg.title} features list`}
      >
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <div
              className="w-1 h-1 rounded-full bg-brand-accent opacity-40"
              aria-hidden="true"
            />
            <span className="text-[11px] font-medium dark:text-brand-gray">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        aria-label={`Initialize project with the ${pkg.title} configuration`}
        className={`w-full py-4 text-[9px] font-black uppercase tracking-[0.3em] rounded-xl transition-all duration-500 text-center
          ${
            pkg.isHighlighted
              ? "bg-brand-accent text-brand-dark shadow-lg shadow-brand-accent/20"
              : "bg-gray-100 dark:bg-white/5 dark:text-white hover:bg-brand-accent hover:text-brand-dark"
          }`}
      >
        {pkg.ctaText}
      </Link>

      <footer
        className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between opacity-20 group-hover:opacity-100 transition-opacity"
        aria-hidden="true"
      >
        <span className="font-mono text-[8px] uppercase tracking-widest">
          Protocol: Deployment_Ready
        </span>
        <FiActivity
          className={`text-[10px] ${
            pkg.isHighlighted ? "text-brand-accent animate-pulse" : ""
          }`}
        />
      </footer>
    </motion.article>
  );
};

export default ServicePackagesPage;
