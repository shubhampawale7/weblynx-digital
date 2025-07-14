// client/src/pages/Services/SeoOptimization.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion } from "framer-motion";

import seoAnimationData from "../../assets/lottie-animations/seo-animation.json";
import {
  FiSearch,
  FiCode,
  FiFileText,
  FiLink2,
  FiMapPin,
  FiBarChart,
  FiTrendingUp,
  FiTarget,
  FiAward,
  FiDollarSign,
  FiCheck,
  FiX,
  FiShoppingCart,
} from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
// FIXED: Removed incorrect icon imports for Ahrefs and SEMrush from 'si' pack

// --- Data for the page sections ---
const typesOfSeoData = [
  {
    icon: <FiCode />,
    title: "Technical SEO",
    description:
      "Optimizing your site's infrastructure to ensure it's fast, secure, and easily crawlable by search engines.",
  },
  {
    icon: <FiFileText />,
    title: "On-Page & Content SEO",
    description:
      "Crafting high-quality content and optimizing on-page elements to match user search intent.",
  },
  {
    icon: <FiLink2 />,
    title: "Off-Page & Link Building",
    description:
      "Building high-quality backlinks and brand mentions to increase your site's authority and trust.",
  },
  {
    icon: <FiMapPin />,
    title: "Local SEO",
    description:
      "Dominating local search results to attract nearby customers to your physical or service-area business.",
  },
  {
    icon: <FiShoppingCart />,
    title: "E-commerce SEO",
    description:
      "Optimizing product pages, categories, and site structure to drive sales and revenue.",
  },
  {
    icon: <FiBarChart />,
    title: "Analytics & Reporting",
    description:
      "Providing transparent, data-driven reports to track progress and refine strategy.",
  },
];

const techStackData = [
  { name: "Google Analytics", Icon: FaGoogle, color: "text-orange-500" },
  { name: "Search Console", Icon: FiSearch, color: "text-blue-500" },
  // FIXED: Replaced non-existent icons with appropriate ones from Feather Icons
  { name: "Ahrefs", Icon: FiBarChart, color: "text-sky-500" },
  { name: "SEMrush", Icon: FiTrendingUp, color: "text-pink-500" },
];

const industriesData = [
  "Local Businesses",
  "E-commerce Stores",
  "SaaS Companies",
  "Professional Services",
  "Blogs & Publishers",
];

const comparisonData = [
  {
    feature: "Expertise & Strategy",
    professional: "Data-driven strategies based on years of experience.",
    diy: "Guesswork and time-consuming trial-and-error.",
  },
  {
    feature: "Tools & Resources",
    professional: "Access to premium analytics and research tools.",
    diy: "Limited to free, less powerful tools.",
  },
  {
    feature: "Time Commitment",
    professional: "Frees you up to focus on running your business.",
    diy: "Requires hundreds of hours of learning and execution.",
  },
  {
    feature: "Results",
    professional: "Faster, more sustainable rankings and traffic growth.",
    diy: "Slow progress and risk of using outdated or harmful tactics.",
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

const SeoOptimization = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="SEO Optimization Services | Weblynx Infotech"
        description="We offer comprehensive SEO services to increase your online visibility, drive organic traffic, and improve your search engine rankings."
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#dcfce7,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#22c55e22,transparent)]" />
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
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 dark:from-cyan-400 dark:to-lime-400"
            >
              SEO Optimization
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Boost your online visibility and drive organic traffic with our
              comprehensive Search Engine Optimization services.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
              >
                Improve Your Rankings
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="w-full max-w-sm mx-auto md:max-w-none"
          >
            <Lottie animationData={seoAnimationData} loop={true} />
          </motion.div>
        </motion.div>
      </section>

      {/* Core Services Section */}
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
            Our Core SEO Services
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {typesOfSeoData.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item.title}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group ${
                  isDark ? "bg-gray-900" : "bg-white shadow-lg"
                }`}
              >
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 mb-5 text-green-500 dark:text-green-400">
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
            Tools & Technologies
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
            Businesses We Help Thrive
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
            Professional SEO vs. DIY
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
                  <th className="p-4 font-semibold text-lg">Aspect</th>
                  <th className="p-4 font-semibold text-lg text-green-500 dark:text-lime-400">
                    Our SEO Services
                  </th>
                  <th className="p-4 font-semibold text-lg">DIY Approach</th>
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
                      {row.professional}
                    </td>
                    <td className="p-4 text-red-500 dark:text-red-400">
                      <FiX className="inline mr-2" />
                      {row.diy}
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
            Ready to Outrank Your Competition?
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Let's craft an SEO strategy that puts your business at the top of
            search engine results.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-green-600 to-teal-500 text-white"
          >
            Get a Free SEO Audit
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default SeoOptimization;
