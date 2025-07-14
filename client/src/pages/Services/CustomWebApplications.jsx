// client/src/pages/Services/CustomWebApplications.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion, useScroll, useSpring } from "framer-motion";
import customWebAppsAnimationData from "../../assets/lottie-animations/custom-web-apps-animation.json";

// --- FIXED: Icons are now imported from their correct libraries ---
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import {
  FiBox,
  FiBriefcase,
  FiCloud,
  FiGrid,
  FiMessageSquare,
  FiTrendingUp,
  FiCompass,
  FiLayout,
  FiCode,
  FiFlag,
  FiLifeBuoy,
  FiCheck,
  FiX,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";

// --- Data for the page sections ---
const whatWeBuildData = [
  {
    icon: <FiBriefcase />,
    title: "Enterprise Solutions",
    description:
      "Custom CRMs, ERPs, and internal tools to streamline your operations.",
  },
  {
    icon: <FiBox />,
    title: "E-commerce Platforms",
    description:
      "Secure, scalable online stores with advanced features and payment integrations.",
  },
  {
    icon: <FiGrid />,
    title: "Interactive Web Portals",
    description:
      "Dynamic portals for customers, partners, or employees with personalized experiences.",
  },
  {
    icon: <FiCloud />,
    title: "SaaS Products",
    description:
      "Multi-tenant Software-as-a-Service applications with robust, scalable architecture.",
  },
  {
    icon: <FiMessageSquare />,
    title: "Real-time Applications",
    description:
      "Engaging apps with live chat, interactive dashboards, and collaborative tools.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Progressive Web Apps (PWAs)",
    description:
      "Websites that offer app-like experiences, working offline and installable on home screens.",
  },
];

const techStackData = [
  { name: "React", Icon: FaReact, color: "text-sky-500" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", Icon: SiExpress, color: "text-gray-500" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-lime-500" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "MERN Stack", Icon: FiLayers, color: "text-purple-500" },
];

const industriesData = [
  "E-commerce & Retail",
  "SaaS & Technology",
  "Non-Profit",
  "Corporate",
  "Hospitality",
  "Startups",
];

const comparisonData = [
  {
    feature: "Flexibility & Features",
    custom: "Built precisely for your unique workflows.",
    offTheShelf: "Limited to existing features; customization is difficult.",
  },
  {
    feature: "Scalability",
    custom: "Designed to grow with your business.",
    offTheShelf: "May struggle with high traffic or data loads.",
  },
  {
    feature: "Integration",
    custom: "Seamlessly connects with your existing tools.",
    offTheShelf: "Limited or costly third-party integrations.",
  },
  {
    feature: "Competitive Advantage",
    custom: "A unique digital asset that sets you apart.",
    offTheShelf: "Uses the same templates as your competitors.",
  },
  {
    feature: "Long-term Cost",
    custom: "Higher initial investment, but no recurring license fees.",
    offTheShelf: "Lower upfront cost, but ongoing subscription fees.",
  },
];

const approachData = [
  {
    icon: <FiCompass />,
    title: "Discovery & Planning",
    description:
      "We dive deep into your requirements and business goals to create a detailed project roadmap.",
  },
  {
    icon: <FiLayout />,
    title: "Design & Prototyping",
    description:
      "Our UX/UI experts design intuitive interfaces and create interactive prototypes for your feedback.",
  },
  {
    icon: <FiCode />,
    title: "Development & Testing",
    description:
      "Using agile methodologies, we build your application with clean code and conduct rigorous testing.",
  },
  {
    icon: <FiFlag />,
    title: "Deployment & Launch",
    description:
      "We handle the entire deployment process, ensuring a smooth and successful launch.",
  },
  {
    icon: <FiLifeBuoy />,
    title: "Support & Evolution",
    description:
      "Post-launch, we provide ongoing support and work with you to evolve the product.",
  },
];

// --- Framer Motion Animation Variants ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
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

const CustomWebApplications = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Custom Web Applications Development | Weblynx Infotech"
        description="We craft scalable, secure, and intuitive custom web applications tailored to your business needs, from enterprise solutions to e-commerce platforms."
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#dbeafe,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#3b82f622,transparent)]" />
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
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-purple-400 dark:to-cyan-400"
            >
              Custom Web Applications
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Build your unique digital presence from the ground up. We craft
              scalable, secure, and intuitive web applications tailored
              precisely to your business objectives.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700"
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="w-full max-w-sm mx-auto md:max-w-none"
          >
            <Lottie animationData={customWebAppsAnimationData} loop={true} />
          </motion.div>
        </motion.div>
      </section>

      {/* What We Build (Types) Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            What We Build
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whatWeBuildData.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item.title}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group ${
                  isDark ? "bg-gray-900" : "bg-gray-50 border"
                }`}
              >
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 mb-5 text-blue-500 dark:text-blue-400">
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
      <section
        className={`py-20 sm:py-24 px-4 ${
          isDark ? "bg-gray-950" : "bg-slate-100"
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
            Our Core Technology Stack
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
      <section className="py-20 sm:py-24 px-4">
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
      <section
        className={`py-20 sm:py-24 px-4 ${
          isDark ? "bg-gray-950" : "bg-slate-100"
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Custom vs. Off-the-Shelf
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
                  <th className="p-4 font-semibold text-lg">Feature</th>
                  <th className="p-4 font-semibold text-lg text-blue-500 dark:text-purple-400">
                    Custom Application
                  </th>
                  <th className="p-4 font-semibold text-lg">
                    Off-the-Shelf Software
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
                      {row.offTheShelf}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Development Approach Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            Our Development Approach
          </motion.h2>
          <div
            ref={timelineRef}
            className="relative grid grid-cols-[auto_1fr] md:gap-x-12 gap-x-6"
          >
            <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-full h-full absolute left-5 md:left-6 -translate-x-1/2">
              <motion.div
                className="w-full h-full bg-blue-600 dark:bg-purple-500 origin-top"
                style={{ scaleY }}
              />
            </div>
            {approachData.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  variants={sectionVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="z-10"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-gray-950 border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    <div className="text-2xl text-blue-600 dark:text-purple-500">
                      {step.icon}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={sectionVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  className="pt-2 pb-16"
                >
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-purple-400 mb-2">
                    {step.title}
                  </h3>
                  <p className="opacity-80">{step.description}</p>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className={`py-20 sm:py-24 text-center ${
          isDark ? "bg-gray-950" : "bg-slate-100"
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
            Ready to Build Your Custom Application?
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Let's discuss your unique idea and how we can turn it into a
            powerful digital reality.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-500 text-white"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default CustomWebApplications;
