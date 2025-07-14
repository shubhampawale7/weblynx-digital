// client/src/pages/Services/WordPressSiteCreation.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion, useScroll, useSpring } from "framer-motion";
import wordpressAnimationData from "../../assets/lottie-animations/wordpress-animation.json";

import {
  FiPenTool,
  FiCode,
  FiShoppingCart,
  FiShuffle,
  FiZap,
  FiLifeBuoy,
  FiEdit,
  FiThumbsUp,
  FiTrendingUp,
  FiDollarSign,
  FiCompass,
  FiLayout,
  FiFlag,
  FiCheck,
  FiX,
} from "react-icons/fi";
import { FaWordpress, FaElementor, FaWpforms } from "react-icons/fa";
import { SiWoocommerce, SiYoast } from "react-icons/si";

// --- Data for the page sections ---
const typesOfServicesData = [
  {
    icon: <FiPenTool />,
    title: "Custom Theme Development",
    description:
      "Unique, high-performance themes built from scratch to perfectly match your brand identity.",
  },
  {
    icon: <FiCode />,
    title: "Plugin Customization",
    description:
      "Modifying or building custom plugins to extend your site's functionality for specific needs.",
  },
  {
    icon: <FiShoppingCart />,
    title: "WooCommerce E-commerce",
    description:
      "Launching powerful online stores with secure payments and seamless product management.",
  },
  {
    icon: <FiShuffle />,
    title: "Site Migration & Redesign",
    description:
      "Smoothly transitioning your existing website to WordPress or giving it a modern facelift.",
  },
  {
    icon: <FiZap />,
    title: "Performance Optimization",
    description:
      "Fine-tuning your site for lightning-fast load times and a superior user experience.",
  },
  {
    icon: <FiLifeBuoy />,
    title: "Maintenance & Support",
    description:
      "Providing ongoing support and training to keep your WordPress website secure and updated.",
  },
];

const techStackData = [
  { name: "WordPress Core", Icon: FaWordpress, color: "text-blue-500" },
  { name: "WooCommerce", Icon: SiWoocommerce, color: "text-purple-500" },
  { name: "Elementor", Icon: FaElementor, color: "text-pink-500" },
  { name: "Advanced Custom Fields", Icon: FiEdit, color: "text-indigo-500" },
  { name: "Yoast SEO", Icon: SiYoast, color: "text-orange-500" },
  { name: "Contact Form 7", Icon: FaWpforms, color: "text-gray-500" },
];

const industriesData = [
  "Blogs & Publishers",
  "Small Businesses",
  "E-commerce Stores",
  "Corporate Websites",
  "Portfolios",
  "Non-Profits",
];

const comparisonData = [
  {
    feature: "Uniqueness & Branding",
    custom: "A bespoke design that perfectly matches your brand.",
    template: "Risks looking generic or similar to other sites.",
  },
  {
    feature: "Performance",
    custom: "Optimized for speed with clean, minimal code.",
    template:
      "Can be bloated with unused features, leading to slower load times.",
  },
  {
    feature: "Flexibility",
    custom: "Infinitely flexible to accommodate any feature requirement.",
    template:
      "Limited to the features and layout options offered by the theme.",
  },
  {
    feature: "Security & Updates",
    custom: "Leaner code means a smaller attack surface and easier updates.",
    template:
      "Can have security vulnerabilities if not from a reputable author.",
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

const WordPressSiteCreation = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="WordPress Development Services | Weblynx Infotech"
        description="We specialize in creating custom, high-performance, and secure WordPress websites, from custom themes to e-commerce solutions."
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#dbeafe,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#0ea5e922,transparent)]" />
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
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 dark:from-lime-400 dark:to-cyan-400"
            >
              WordPress Development
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Unlock the power of WordPress with custom, high-performing
              websites tailored to your unique business needs.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 dark:bg-sky-500 dark:hover:bg-sky-600"
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="w-full max-w-sm mx-auto md:max-w-none"
          >
            <Lottie animationData={wordpressAnimationData} loop={true} />
          </motion.div>
        </motion.div>
      </section>

      {/* What We Offer Section */}
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
            Our WordPress Services
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {typesOfServicesData.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item.title}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group ${
                  isDark ? "bg-gray-900" : "bg-white shadow-lg"
                }`}
              >
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 mb-5 text-blue-500 dark:text-blue-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-70 text-base">{item.desc}</p>
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
            Tools of Our Craft
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
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
            Perfect For Any Industry
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
            Custom Theme vs. Pre-made
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
                  <th className="p-4 font-semibold text-lg text-blue-500 dark:text-sky-400">
                    Our Custom Themes
                  </th>
                  <th className="p-4 font-semibold text-lg">
                    Pre-made Templates
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
                      {row.custom}
                    </td>
                    <td className="p-4 text-red-500 dark:text-red-400">
                      <FiX className="inline mr-2" />
                      {row.template}
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
            Ready to Build with WordPress?
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Let's discuss how we can create a powerful and beautiful WordPress
            website for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-blue-600 to-green-500 text-white"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default WordPressSiteCreation;
