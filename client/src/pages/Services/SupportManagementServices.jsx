// client/src/pages/Services/SupportManagementServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import supportAnimationData from "../../assets/lottie-animations/support-management.json";
import {
  FiShield,
  FiZap,
  FiTool,
  FiDatabase,
  FiPlusSquare,
  FiLifeBuoy,
  FiCheck,
  FiX,
  FiServer,
  FiAlertTriangle,
  FiCheckCircle,
  FiArrowLeft,
} from "react-icons/fi";
import { FaWordpress, FaAws } from "react-icons/fa";
import { SiVercel, SiCloudflare } from "react-icons/si";

// --- Data for the page sections ---
const typesOfSupportData = [
  {
    icon: FiTool,
    title: "Website & App Maintenance",
    description:
      "Regular updates, bug fixes, and security patches to keep your digital assets running smoothly.",
  },
  {
    icon: FiZap,
    title: "Performance Optimization",
    description:
      "Ensuring fast loading times and optimal performance for a superior user experience and better SEO.",
  },
  {
    icon: FiShield,
    title: "Security Audits & Patching",
    description:
      "Protecting your platform from vulnerabilities with continuous monitoring and timely security updates.",
  },
  {
    icon: FiDatabase,
    title: "Backup & Disaster Recovery",
    description:
      "Robust backup solutions and recovery plans to safeguard your data and ensure business continuity.",
  },
  {
    icon: FiAlertTriangle,
    title: "Uptime Monitoring",
    description:
      "24/7 monitoring to detect and respond to downtime instantly, often before you even notice.",
  },
  {
    icon: FiPlusSquare,
    title: "Content & Feature Updates",
    description:
      "Effortlessly add new content, features, or make design adjustments as your business evolves.",
  },
];
const techStackData = [
  { name: "WordPress", Icon: FaWordpress },
  { name: "Cloudflare", Icon: SiCloudflare },
  { name: "AWS", Icon: FaAws },
  { name: "Vercel", Icon: SiVercel },
];
const industriesData = [
  "E-commerce Stores",
  "SaaS Companies",
  "Corporate Websites",
  "Startups",
  "Blogs & Publishers",
];
const comparisonData = [
  {
    feature: "Approach",
    proactive:
      "Continuously monitoring and preventing issues before they occur.",
    reactive: "Waiting for something to break before fixing it.",
  },
  {
    feature: "Downtime",
    proactive: "Minimized downtime through preventative measures.",
    reactive: "Significant downtime while problems are diagnosed and fixed.",
  },
  {
    feature: "Cost",
    proactive: "Predictable monthly cost for peace of mind.",
    reactive: "Unpredictable, often high emergency repair costs.",
  },
  {
    feature: "Security",
    proactive: "Constant vigilance against threats and vulnerabilities.",
    reactive: "Vulnerabilities remain open until they are exploited.",
  },
];

// --- Framer Motion Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Main Page Component ---
const SupportManagementServices = () => {
  return (
    <>
      <Seo
        title="Support & Management Services | Weblynx Infotech"
        description="We offer comprehensive support and management services, including maintenance, performance optimization, security, and technical assistance."
      />
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        <Hero />
        <SupportCoversSection />
        <TechAndIndustriesSection />
        <ComparisonSection />
        <FinalCta />
      </main>
    </>
  );
};

// --- Page Sections (Broken into Components) ---

const Hero = () => (
  <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
    <div className="absolute inset-0 -z-10 h-full w-full dark:bg-brand-dark bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#e0e1dd,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#00f5d41a,transparent)]" />
    </div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center"
    >
      <div className="text-center md:text-left">
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl lg:text-6xl font-bold mb-6 text-brand-dark dark:text-white tracking-tighter"
        >
          Support & Management
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-8 text-brand-light-blue dark:text-brand-gray max-w-xl mx-auto md:mx-0"
        >
          Ensure the continuous success and optimal performance of your digital
          products with our comprehensive support and management services.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <motion.span
              className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
              initial={{ x: "-150%" }}
              whileHover={{ x: "150%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <span className="relative">Get Dedicated Support</span>
          </Link>
          <Link
            to="/services"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-brand-light-blue dark:text-brand-gray hover:bg-gray-100 dark:hover:bg-brand-dark-blue/50 rounded-full transition-colors duration-300"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to All Services</span>
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={itemVariants}
        className="w-full max-w-sm mx-auto md:max-w-none"
      >
        <Lottie animationData={supportAnimationData} loop={true} />
      </motion.div>
    </motion.div>
  </section>
);

const SupportCoversSection = () => (
  <section className="bg-gray-50 dark:bg-black py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl sm:text-5xl font-bold text-center mb-16 text-brand-dark dark:text-white tracking-tighter"
      >
        What Our Support Covers
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {typesOfSupportData.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              variants={itemVariants}
              key={item.title}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 rounded-2xl flex flex-col items-start text-left bg-white dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20 shadow-lg cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-brand-accent/10"
            >
              <div className="p-3 rounded-lg bg-brand-accent/20 mb-5 text-brand-accent">
                <Icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-dark dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-brand-light-blue dark:text-brand-gray text-base">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

const TechAndIndustriesSection = () => (
  <section className="py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl font-bold mb-8 text-brand-dark dark:text-white tracking-tighter"
          >
            Platforms We Manage
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {techStackData.map((tech) => (
              <motion.div
                variants={itemVariants}
                key={tech.name}
                className="flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-brand-dark-blue/50 rounded-lg border border-gray-200 dark:border-brand-light-blue/20"
              >
                <tech.Icon className="w-6 h-6 text-brand-accent" />
                <span className="font-semibold text-brand-dark dark:text-white">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl font-bold mb-8 text-brand-dark dark:text-white tracking-tighter"
          >
            Who We Support
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {industriesData.map((industry) => (
              <motion.span
                variants={itemVariants}
                key={industry}
                className="px-4 py-2 rounded-full font-medium bg-gray-100 dark:bg-brand-dark-blue/50 text-brand-light-blue dark:text-brand-gray"
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="bg-gray-50 dark:bg-black py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl sm:text-5xl font-bold text-center mb-16 text-brand-dark dark:text-white tracking-tighter"
      >
        Proactive Support vs. Reactive Fixes
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white dark:bg-brand-dark-blue/30 border-2 border-brand-accent shadow-2xl shadow-brand-accent/10"
        >
          <h3 className="font-display text-2xl font-bold mb-6 text-brand-dark dark:text-white">
            Our Proactive Support
          </h3>
          <div className="space-y-4">
            {comparisonData.map((row) => (
              <div
                key={row.feature}
                className="p-4 bg-gray-100 dark:bg-brand-dark rounded-lg"
              >
                <p className="font-semibold text-brand-dark dark:text-white">
                  {row.feature}
                </p>
                <p className="flex items-start gap-2 mt-1 text-brand-light-blue dark:text-brand-gray">
                  <FiCheckCircle className="w-5 h-5 mt-1 text-brand-accent flex-shrink-0" />{" "}
                  {row.proactive}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20"
        >
          <h3 className="font-display text-2xl font-bold mb-6 text-brand-dark dark:text-white">
            Reactive "Break-Fix"
          </h3>
          <div className="space-y-4">
            {comparisonData.map((row) => (
              <div
                key={row.feature}
                className="p-4 bg-gray-100 dark:bg-brand-dark rounded-lg"
              >
                <p className="font-semibold text-brand-dark dark:text-white">
                  {row.feature}
                </p>
                <p className="flex items-start gap-2 mt-1 text-brand-light-blue dark:text-brand-gray">
                  <FiX className="w-5 h-5 mt-1 text-red-500 flex-shrink-0" />{" "}
                  {row.reactive}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FinalCta = () => (
  <section className="py-20 sm:py-28 px-6 bg-gray-50 dark:bg-black">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="container mx-auto max-w-3xl text-center"
    >
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter mb-6">
        Ready for Peace of Mind?
      </h2>
      <p className="text-lg text-brand-light-blue dark:text-brand-gray mb-8">
        Let's secure the long-term success and smooth operation of your valuable
        digital assets.
      </p>
      <Link
        to="/contact"
        className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 text-xl font-bold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
      >
        <motion.span
          className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ x: "-150%" }}
          whileHover={{ x: "150%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <span className="relative">Get a Support Plan</span>
      </Link>
    </motion.div>
  </section>
);

export default SupportManagementServices;
