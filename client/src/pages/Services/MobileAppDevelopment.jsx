// client/src/pages/Services/MobileAppDevelopment.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion } from "framer-motion";

import mobileAppAnimationData from "../../assets/lottie-animations/mobile-app-development.json";
import {
  FiSmartphone,
  FiPenTool,
  FiCode,
  FiGrid,
  FiShare2,
  FiBox,
  FiPocket,
  FiCheckCircle,
  FiCompass,
  FiFlag,
  FiTrendingUp,
  FiHeart,
  FiDollarSign,
  FiUsers,
  FiCheck,
  FiX,
  FiServer,
  FiDatabase,
} from "react-icons/fi";
import { FaApple, FaAndroid, FaReact } from "react-icons/fa";

// --- Data for the page sections ---
const typesOfAppsData = [
  {
    icon: <FaApple />,
    title: "Native iOS Development",
    description:
      "High-performance, secure apps built with Swift for the Apple ecosystem.",
  },
  {
    icon: <FaAndroid />,
    title: "Native Android Development",
    description:
      "Robust and scalable apps built with Kotlin for the vast Android landscape.",
  },
  {
    icon: <FaReact />,
    title: "Cross-Platform (React Native)",
    description:
      "Reach all users with a single codebase, saving time and development costs.",
  },
  {
    icon: <FiGrid />,
    title: "Progressive Web Apps (PWAs)",
    description:
      "App-like experiences on the web that are fast, reliable, and installable.",
  },
  {
    icon: <FiPenTool />,
    title: "Mobile UI/UX Design",
    description:
      "Crafting intuitive and engaging interfaces tailored specifically for mobile devices.",
  },
  {
    icon: <FiShare2 />,
    title: "Backend & API Development",
    description:
      "Developing robust server-side infrastructure to power your mobile application.",
  },
];

const techStackData = [
  { name: "React Native", Icon: FaReact, color: "text-sky-500" },
  { name: "Swift (iOS)", Icon: FaApple, color: "text-gray-500" },
  { name: "Kotlin (Android)", Icon: FaAndroid, color: "text-green-500" },
  { name: "Node.js (Backend)", Icon: FiServer, color: "text-green-400" },
  { name: "Firebase", Icon: FiDatabase, color: "text-yellow-500" },
  { name: "Figma (Design)", Icon: FiPenTool, color: "text-pink-500" },
];

const industriesData = [
  "E-commerce",
  "Social Networking",
  "Healthcare & Fitness",
  "On-Demand Services",
  "EdTech",
  "Startups",
];

const comparisonData = [
  {
    feature: "Performance",
    native: "Highest possible performance and responsiveness.",
    crossPlatform: "Excellent performance, near-native for most use cases.",
  },
  {
    feature: "Development Time",
    native: "Longer, as separate codebases are required for iOS and Android.",
    crossPlatform: "Faster, as one codebase serves both platforms.",
  },
  {
    feature: "Cost",
    native: "Higher due to separate teams and longer development cycles.",
    crossPlatform:
      "More cost-effective due to shared code and faster development.",
  },
  {
    feature: "Device Feature Access",
    native: "Complete access to all native device APIs and features.",
    crossPlatform:
      "Access to most features, but some cutting-edge ones may need native modules.",
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

const MobileAppDevelopment = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Mobile App Development Services | Weblynx Infotech"
        description="We craft intuitive and high-performance native (iOS/Android) and cross-platform mobile applications to extend your reach and engage users worldwide."
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#fef2f2,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#ef444422,transparent)]" />
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
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-amber-400 dark:to-rose-400"
            >
              Mobile App Development
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Extend your reach and engage your users on the go with custom
              mobile applications for iOS and Android.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-red-600 text-white hover:bg-red-700 dark:bg-orange-500 dark:hover:bg-orange-600"
              >
                Build Your App
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="w-full max-w-sm mx-auto md:max-w-none"
          >
            <Lottie animationData={mobileAppAnimationData} loop={true} />
          </motion.div>
        </motion.div>
      </section>

      {/* Types of Apps Section */}
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
            Types of Apps We Develop
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {typesOfAppsData.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item.title}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group ${
                  isDark ? "bg-gray-900" : "bg-white shadow-lg"
                }`}
              >
                <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/30 mb-5 text-orange-500 dark:text-orange-400">
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
            Core Technologies
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
            Industries We Serve
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
            Native vs. Cross-Platform
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
                  <th className="p-4 font-semibold text-lg text-orange-500 dark:text-amber-400">
                    Native (iOS/Android)
                  </th>
                  <th className="p-4 font-semibold text-lg">
                    Cross-Platform (React Native)
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
                      {row.native}
                    </td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">
                      <FiCheck className="inline mr-2 text-sky-500" />
                      {row.crossPlatform}
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
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Let's discuss how we can bring your app idea to life and connect you
            with users worldwide.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-orange-600 to-red-500 text-white"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
