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
} from "react-icons/fi";

// --- Data with Icons ---
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

const advantageData = [
  {
    icon: <FiUsers />,
    title: "Single Point of Contact",
    description:
      "Simplify project management by working with one cohesive team for all development needs.",
  },
  {
    icon: <FiClock />,
    title: "Faster Development Cycles",
    description:
      "Streamlined processes between frontend and backend lead to quicker iterations and deployment.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Consistent Vision",
    description:
      "Maintain a unified design and functional vision across your entire application, from UI to database.",
  },
  {
    icon: <FiZap />,
    title: "Optimized Performance",
    description:
      "End-to-end optimization, ensuring your application runs at peak efficiency from server to screen.",
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

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FullStackDevelopment = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-950 text-white" : "bg-slate-50 text-gray-800"
      } transition-colors duration-500`}
    >
      <Seo
        title="Full Stack Development Services | Weblynx Infotech"
        description="Weblynx Infotech provides comprehensive end-to-end full stack development services, managing both frontend and backend to deliver cohesive and high-quality applications."
        keywords="full stack development, MERN stack, Node.js, React.js, Express.js, MongoDB, web application development, frontend development, backend development, API design, cloud deployment, Weblynx Infotech"
        ogTitle="Weblynx Infotech: Complete Full Stack Development Solutions"
        ogDescription="Partner with Weblynx Infotech for holistic full stack development that brings your digital vision to life from concept to deployment."
        ogUrl="https://www.weblynxinfotech.com/services/full-stack-development"
        canonical="https://www.weblynxinfotech.com/services/full-stack-development"
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-gray-950 dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#cce3ff,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#4f46e522,transparent)]"></div>
        </div>
        <motion.div
          className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              variants={staggerItem}
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-600 dark:from-purple-400 dark:to-teal-400"
            >
              Full Stack Development
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Receive a complete digital solution from concept to deployment. We
              manage both frontend and backend to deliver cohesive, high-quality
              applications.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link
                to="/contact"
                className={`inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                  isDark
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Build End-to-End
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={staggerItem}
            animate={{
              y: [-10, 10],
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            className="w-full max-w-sm mx-auto md:max-w-none"
          >
            <Lottie
              animationData={fullStackAnimationData}
              loop={true}
              autoplay={true}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Full Stack Expertise Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Full Stack Expertise
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {expertiseData.map((item, index) => (
              <motion.div
                variants={staggerItem}
                key={index}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group transition-all duration-300 ${
                  isDark
                    ? "bg-gray-900 border border-gray-800 hover:border-indigo-500 hover:bg-gray-800/50"
                    : "bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-xl"
                }`}
              >
                <div
                  className={`text-2xl mb-5 p-3 rounded-lg ${
                    isDark
                      ? "bg-gray-800 text-indigo-400"
                      : "bg-indigo-100 text-indigo-600"
                  }`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-70 text-base">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Full Stack Advantage Section */}
      <section
        className={`py-20 sm:py-24 px-4 ${
          isDark ? "bg-gray-900" : "bg-slate-100"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            The Full Stack Advantage
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {advantageData.map((item, index) => (
              <motion.div
                variants={staggerItem}
                key={index}
                className={`p-8 rounded-2xl flex items-start text-left space-x-6 ${
                  isDark ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <div
                  className={`text-3xl mt-1 text-green-500 dark:text-green-400`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="opacity-70 text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-24 px-4 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="container mx-auto max-w-3xl"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready for a Complete Digital Solution?
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg mb-8 opacity-80">
            Let's discuss how our full stack expertise can bring your vision to
            life, from concept to deployment.
          </motion.p>
          <motion.div variants={staggerItem}>
            <Link
              to="/contact"
              className={`inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-purple-600 to-teal-500 text-white"
                  : "bg-gradient-to-r from-indigo-600 to-sky-500 text-white"
              }`}
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default FullStackDevelopment;
