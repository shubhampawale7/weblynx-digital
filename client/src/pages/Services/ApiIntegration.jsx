// File: client/src/pages/ApiIntegration.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion, useScroll, useSpring } from "framer-motion";
import apiIntegrationAnimationData from "../../assets/lottie-animations/api-integration-animation.json";
import {
  FiShuffle,
  FiDatabase,
  FiLock,
  FiZap,
  FiFileText,
  FiLayers,
  FiCheckCircle,
  FiRefreshCw,
  FiPlayCircle,
} from "react-icons/fi";

// --- Data with Icons ---
const benefitsData = [
  {
    icon: <FiZap />,
    title: "Streamlined Workflows",
    description:
      "Automate tasks and reduce manual effort by connecting disparate systems.",
  },
  {
    icon: <FiShuffle />,
    title: "Enhanced Functionality",
    description:
      "Extend your app's capabilities by integrating powerful third-party services.",
  },
  {
    icon: <FiDatabase />,
    title: "Unified Data",
    description:
      "Ensure accurate, real-time data synchronization across all platforms.",
  },
  {
    icon: <FiLock />,
    title: "Secure Exchange",
    description:
      "Implement robust security protocols for stable and secure data flow.",
  },
];

const approachData = [
  {
    icon: <FiFileText />,
    title: "Analysis & Strategy",
    description:
      "We meticulously analyze your existing systems and strategic goals to map out the perfect integration plan.",
  },
  {
    icon: <FiLayers />,
    title: "Design & Development",
    description:
      "Our team designs and develops robust, scalable APIs and integration pathways tailored to your needs.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Testing & Security",
    description:
      "We conduct rigorous testing to ensure seamless functionality and implement top-tier security measures.",
  },
  {
    icon: <FiPlayCircle />,
    title: "Deployment & Monitoring",
    description:
      "After a smooth deployment, we continuously monitor performance to ensure everything runs flawlessly.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Optimization & Support",
    description:
      "We provide ongoing support and optimize integrations as your business evolves and scales.",
  },
];

// --- Framer Motion Animation Variants ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ApiIntegration = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-950 text-white" : "bg-slate-50 text-gray-800"
      } transition-colors duration-500`}
    >
      <Seo
        title="API Integration Services | Weblynx Infotech"
        description="Weblynx Infotech specializes in seamless API integration, connecting your systems for automated workflows, enhanced data exchange, and improved business efficiency."
        keywords="API integration, API development, third-party APIs, CRM integration, payment gateways, data synchronization, custom APIs, Weblynx Infotech"
        ogTitle="Weblynx Infotech API Integration: Connect Your Digital Landscape"
        ogDescription="Automate workflows and enhance functionality with expert API integration services from Weblynx Infotech."
        ogUrl="https://www.weblynxinfotech.com/services/api-integration"
        canonical="https://www.weblynxinfotech.com/services/api-integration"
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-gray-950 dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#cce3ff,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#8b5cf622,transparent)]"></div>
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
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 dark:from-pink-400 dark:to-orange-400"
            >
              API Integration Services
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Seamlessly connect your systems and applications, automating
              workflows and enhancing data exchange across your entire digital
              ecosystem.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link
                to="/contact"
                className={`inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                  isDark
                    ? "bg-pink-600 text-white hover:bg-pink-500"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                Connect Your Systems
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
              animationData={apiIntegrationAnimationData}
              loop={true}
              autoplay={true}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
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
            The Power of Connection
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefitsData.map((item, index) => (
              <motion.div
                variants={staggerItem}
                key={index}
                className={`p-8 rounded-2xl flex items-start text-left space-x-6 ${
                  isDark ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <div
                  className={`text-3xl mt-1 text-purple-500 dark:text-purple-400`}
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

      {/* Our Integration Blueprint Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            Our Integration Blueprint
          </motion.h2>
          <div
            ref={timelineRef}
            className="relative grid grid-cols-[auto_1fr] md:gap-x-12 gap-x-6"
          >
            <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-full h-full absolute left-5 md:left-6 -translate-x-1/2">
              <motion.div
                className="w-full h-full bg-purple-600 dark:bg-pink-500 origin-top"
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
                    <div className="text-2xl text-purple-600 dark:text-pink-500">
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
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-pink-400 mb-2">
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
            Ready to Connect Your Digital Landscape?
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg mb-8 opacity-80">
            Let's discuss how seamless API integrations can transform your
            business workflows.
          </motion.p>
          <motion.div variants={staggerItem}>
            <Link
              to="/contact"
              className={`inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white"
                  : "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
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

export default ApiIntegration;
