// client/src/pages/Services/FullStackDevelopment.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion } from "framer-motion";

import fullStackAnimationData from "../../assets/lottie-animations/full-stack-animation.json";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiCloud,
  FiCheckCircle,
  FiLink,
  FiShield,
  FiUsers,
  FiClock,
  FiZap,
  FiCheck,
  FiX,
  FiLayers,
} from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

// --- Data for the page sections ---
const expertiseData = [
  {
    icon: <FiCode />,
    title: "Frontend Development",
    description:
      "Intuitive user interfaces using React.js and modern UI/UX principles.",
  },
  {
    icon: <FiServer />,
    title: "Backend Development",
    description:
      "Robust server-side logic and APIs with Node.js and Express.js.",
  },
  {
    icon: <FiDatabase />,
    title: "Database Management",
    description:
      "Efficient data storage and retrieval with MongoDB and other database technologies.",
  },
  {
    icon: <FiLink />,
    title: "API Design & Integration",
    description:
      "Designing and integrating powerful APIs to connect services seamlessly.",
  },
  {
    icon: <FiCloud />,
    title: "Cloud Deployment",
    description:
      "Deploying and managing applications on platforms like Vercel or Render.",
  },
  {
    icon: <FiShield />,
    title: "Security & QA",
    description:
      "Implementing robust security and rigorous quality assurance throughout the development cycle.",
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
  "SaaS Platforms",
  "E-commerce",
  "FinTech",
  "Healthcare",
  "Startups",
  "Enterprise",
];

const comparisonData = [
  {
    feature: "Efficiency",
    fullStack: "Streamlined communication and faster development cycles.",
    separateTeams: "Potential for delays due to team miscommunication.",
  },
  {
    feature: "Cohesion",
    fullStack: "A unified vision across the entire application stack.",
    separateTeams: "Risk of inconsistencies between frontend and backend.",
  },
  {
    feature: "Problem Solving",
    fullStack: "Holistic solutions to challenges, from UI to database.",
    separateTeams: "Siloed problem-solving can lead to patchwork fixes.",
  },
  {
    feature: "Accountability",
    fullStack:
      "A single point of contact and ownership for the entire project.",
    separateTeams: "'Blame game' between frontend and backend teams.",
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

const FullStackDevelopment = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Full Stack Development Services | Weblynx Infotech"
        description="We provide comprehensive end-to-end full stack development services, managing both frontend and backend to deliver cohesive, high-quality applications."
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#dbeafe,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#4f46e522,transparent)]" />
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
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-600 dark:from-purple-400 dark:to-teal-400"
            >
              Full Stack Development
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Receive a complete digital solution from concept to deployment. We
              manage both frontend and backend to deliver cohesive, high-quality
              applications.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Build End-to-End
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="w-full max-w-sm mx-auto md:max-w-none"
          >
            <Lottie animationData={fullStackAnimationData} loop={true} />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Full Stack Expertise Section */}
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
            Our Full Stack Expertise
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {expertiseData.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item.title}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group ${
                  isDark ? "bg-gray-900" : "bg-white shadow-lg"
                }`}
              >
                <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 mb-5 text-indigo-500 dark:text-indigo-400">
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
            Industries We Empower
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
            The Full Stack Advantage
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
                  <th className="p-4 font-semibold text-lg text-indigo-500 dark:text-purple-400">
                    Our Full Stack Approach
                  </th>
                  <th className="p-4 font-semibold text-lg">Separate Teams</th>
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
                      {row.fullStack}
                    </td>
                    <td className="p-4 text-red-500 dark:text-red-400">
                      <FiX className="inline mr-2" />
                      {row.separateTeams}
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
            Ready for a Complete Digital Solution?
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Let's discuss how our full stack expertise can bring your vision to
            life, from concept to deployment.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-indigo-600 to-sky-500 text-white"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default FullStackDevelopment;
