// client/src/components/Home/WhyChooseUs.jsx
import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Seo from "../../components/common/Seo.jsx";
import { motion } from "framer-motion";
import {
  FiZap,
  FiUsers,
  FiBarChart2,
  FiLayers,
  FiShield,
  FiClock,
} from "react-icons/fi";

const features = [
  {
    Icon: FiZap,
    title: "Innovative Solutions",
    description:
      "We bring fresh perspectives and cutting-edge technologies to solve your unique challenges.",
    color: "text-purple-500 dark:text-purple-400",
  },
  {
    Icon: FiUsers,
    title: "Client-Centric Approach",
    description:
      "Your vision is our priority. We collaborate closely to ensure your digital product truly reflects your goals.",
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    Icon: FiBarChart2,
    title: "Performance & Scalability",
    description:
      "We build fast, robust, and scalable solutions designed to grow with your business.",
    color: "text-green-500 dark:text-green-400",
  },
  {
    Icon: FiLayers,
    title: "Pixel-Perfect Design",
    description:
      "We craft stunning, intuitive user interfaces that captivate and engage your audience.",
    color: "text-pink-500 dark:text-pink-400",
  },
  {
    Icon: FiShield,
    title: "Security & Reliability",
    description:
      "We adhere to best practices for secure development, ensuring your data and applications are safe.",
    color: "text-slate-500 dark:text-slate-400",
  },
  {
    Icon: FiClock,
    title: "Timely Delivery",
    description:
      "We respect deadlines and deliver high-quality projects on time, every time, without compromise.",
    color: "text-amber-500 dark:text-amber-400",
  },
];

// Custom hook to check window size
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const ringVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const WhyChooseUs = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [width] = useWindowSize();
  const isMobile = width < 1024; // lg breakpoint

  const featurePositions = [
    { top: "5%", left: "50%", transform: "translate(-50%, -50%)" },
    { top: "25%", left: "95%", transform: "translate(-100%, -50%)" },
    { top: "75%", left: "95%", transform: "translate(-100%, -50%)" },
    { top: "95%", left: "50%", transform: "translate(-50%, -50%)" },
    { top: "75%", left: "5%", transform: "translate(0%, -50%)" },
    { top: "25%", left: "5%", transform: "translate(0%, -50%)" },
  ];

  const linePaths = [
    "M 50 50 L 50 5",
    "M 50 50 L 95 25",
    "M 50 50 L 95 75",
    "M 50 50 L 50 95",
    "M 50 50 L 5 75",
    "M 50 50 L 5 25",
  ];

  const DesktopView = () => (
    // OVERLAP FIX: Increased container height to give elements more room
    <div className="relative w-full max-w-5xl mx-auto h-[700px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full h-full"
      >
        <motion.div
          variants={itemVariants}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-10"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 dark:from-cyan-400 dark:to-lime-400">
            Our Advantage
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-2 max-w-xs">
            The core principles that drive our success and guarantee yours.
          </p>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              variants={ringVariants}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="absolute inset-0 rounded-full border border-gray-200 dark:border-gray-800"
              style={{
                width: `${(i + 1) * 100}px`,
                height: `${(i + 1) * 100}px`,
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
              }}
            />
          ))}
        </div>

        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {linePaths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              variants={lineVariants}
              transition={{ delay: 0.5 }}
              stroke={isDark ? "#374151" : "#e5e7eb"}
              strokeWidth="0.5"
              fill="none"
            />
          ))}
        </svg>

        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            className="absolute p-4 rounded-lg w-72 cursor-pointer" // OVERLAP FIX: Increased width for better text flow
            style={featurePositions[index]}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`p-3 rounded-full mb-3 ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
              >
                <feature.Icon className={`w-7 h-7 ${feature.color}`} />
              </motion.div>
              <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  const MobileView = () => (
    <div className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-start gap-5"
        >
          <div
            className={`p-3 rounded-full mt-1 ${
              isDark ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <feature.Icon className={`w-6 h-6 ${feature.color}`} />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    // OVERLAP FIX: Removed 'overflow-hidden' class
    <section
      className={`py-20 sm:py-28 ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      {/* <Seo
        title="Why Choose Weblynx Infotech? - Our Unique Advantages"
        description="Discover why Weblynx Infotech is your ideal digital partner. We offer innovative solutions, a client-centric approach, superior performance, and timely delivery."
        keywords="Why choose Weblynx Infotech, digital agency benefits, innovative solutions, client-centric, performance, scalability, pixel-perfect design, security, reliability, timely delivery"
        ogTitle="Weblynx Infotech: Your Trusted Partner for Digital Success"
        ogDescription="Learn what sets Weblynx Infotech apart and why we're the right choice for your next digital project."
        ogUrl="https://www.weblynxinfotech.com/#why-choose-us"
        canonical="https://www.weblynxinfotech.com/#why-choose-us"
      /> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 dark:from-cyan-400 dark:to-lime-400">
            THE WEBLYNX ADVANTAGE
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            We're more than just developers. We're your dedicated partners in
            digital growth, committed to excellence at every step.
          </p>
        </div>

        {isMobile ? <MobileView /> : <DesktopView />}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
