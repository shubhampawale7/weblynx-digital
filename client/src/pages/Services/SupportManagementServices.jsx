// client/src/pages/Services/SupportManagementServices.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion } from "framer-motion";

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
} from "react-icons/fi";
import { FaWordpress, FaAws } from "react-icons/fa";
import { SiVercel, SiCloudflare } from "react-icons/si";

// --- Data for the page sections ---
const typesOfSupportData = [
  {
    icon: <FiTool />,
    title: "Website & App Maintenance",
    description:
      "Regular updates, bug fixes, and security patches to keep your digital assets running smoothly.",
  },
  {
    icon: <FiZap />,
    title: "Performance Optimization",
    description:
      "Ensuring fast loading times and optimal performance for a superior user experience and better SEO.",
  },
  {
    icon: <FiShield />,
    title: "Security Audits & Patching",
    description:
      "Protecting your platform from vulnerabilities with continuous monitoring and timely security updates.",
  },
  {
    icon: <FiDatabase />,
    title: "Backup & Disaster Recovery",
    description:
      "Robust backup solutions and recovery plans to safeguard your data and ensure business continuity.",
  },
  {
    icon: <FiAlertTriangle />,
    title: "Uptime Monitoring",
    description:
      "24/7 monitoring to detect and respond to downtime instantly, often before you even notice.",
  },
  {
    icon: <FiPlusSquare />,
    title: "Content & Feature Updates",
    description:
      "Effortlessly add new content, features, or make design adjustments as your business evolves.",
  },
];

const techStackData = [
  { name: "WordPress", Icon: FaWordpress, color: "text-blue-500" },
  { name: "Cloudflare", Icon: SiCloudflare, color: "text-orange-500" },
  { name: "AWS", Icon: FaAws, color: "text-yellow-500" },
  { name: "Vercel", Icon: SiVercel, color: "text-gray-500" },
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

// --- Framer Motion Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SupportManagementServices = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Support & Management Services | Weblynx Infotech"
        description="We offer comprehensive support and management services, including maintenance, performance optimization, security, and technical assistance."
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#e0e7ff,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#4338ca22,transparent)]" />
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
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-gray-600 dark:from-slate-400 dark:to-gray-400"
            >
              Support & Management
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Ensure the continuous success and optimal performance of your
              digital products with our comprehensive support and management
              services.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gray-800 text-white hover:bg-black dark:bg-gray-200 dark:text-black dark:hover:bg-white"
              >
                Get Dedicated Support
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

      {/* Types of Support Section */}
      <section
        className={`py-20 sm:py-24 px-4 ${
          isDark ? "bg-gray-950" : "bg-slate-50"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
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
            {typesOfSupportData.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item.title}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group ${
                  isDark ? "bg-gray-900" : "bg-white shadow-lg"
                }`}
              >
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 mb-5 text-slate-500 dark:text-slate-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-70 text-base">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Platforms We Manage
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {techStackData.map((tech) => (
              <motion.div
                variants={itemVariants}
                key={tech.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <tech.Icon className={`w-12 h-12 ${tech.color}`} />
                <span className="font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        className={`py-20 sm:py-24 px-4 ${
          isDark ? "bg-gray-950" : "bg-slate-50"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Who We Support
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {industriesData.map((industry) => (
              <motion.span
                variants={itemVariants}
                key={industry}
                className={`px-5 py-2 rounded-full font-medium ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Proactive Support vs. Reactive Fixes
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="p-4 font-semibold text-lg">Factor</th>
                  <th className="p-4 font-semibold text-lg text-slate-500 dark:text-slate-400">
                    Our Proactive Support
                  </th>
                  <th className="p-4 font-semibold text-lg">
                    Reactive "Break-Fix"
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={i}
                    variants={itemVariants}
                    className="border-b dark:border-gray-800"
                  >
                    <td className="p-4 font-semibold">{row.feature}</td>
                    <td className="p-4 text-green-600 dark:text-green-400">
                      <FiCheck className="inline mr-2" />
                      {row.proactive}
                    </td>
                    <td className="p-4 text-red-500 dark:text-red-400">
                      <FiX className="inline mr-2" />
                      {row.reactive}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className={`py-20 sm:py-24 text-center ${
          isDark ? "bg-gray-950" : "bg-slate-50"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Peace of Mind?
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Let's secure the long-term success and smooth operation of your
            valuable digital assets.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gray-800 text-white hover:bg-black dark:bg-gray-200 dark:text-black dark:hover:bg-white"
          >
            Get a Support Plan
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default SupportManagementServices;
