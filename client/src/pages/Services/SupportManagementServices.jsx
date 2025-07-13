// client/src/pages/Services/SupportManagementServices.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion, useScroll, useSpring } from "framer-motion"; // <-- Import Framer Motion hooks
import {
  FiShield,
  FiZap,
  FiTool,
  FiDatabase,
  FiPlusSquare,
  FiLifeBuoy,
  FiBarChart2,
  FiThumbsUp,
  FiSmile,
} from "react-icons/fi";

// Lottie animation data
import supportAnimationData from "../../assets/lottie-animations/support-management.json";

// --- Data with Icons (No change) ---
const coverageData = [
  {
    icon: <FiTool />,
    title: "Website & App Maintenance",
    desc: "Keep your digital assets running smoothly with regular updates, bug fixes, and security patches.",
  },
  {
    icon: <FiZap />,
    title: "Performance Optimization",
    desc: "Ensure fast loading times and optimal performance for a superior user experience and SEO.",
  },
  {
    icon: <FiShield />,
    title: "Security Audits & Patching",
    desc: "Protect your platform from vulnerabilities with continuous monitoring and timely security updates.",
  },
  {
    icon: <FiDatabase />,
    title: "Backup & Disaster Recovery",
    desc: "Implement robust backup solutions and recovery plans to safeguard your data and ensure business continuity.",
  },
  {
    icon: <FiPlusSquare />,
    title: "Content & Feature Updates",
    desc: "Effortlessly add new content, features, or make design adjustments as your business evolves.",
  },
  {
    icon: <FiLifeBuoy />,
    title: "Technical Support & Troubleshooting",
    desc: "Receive prompt and expert assistance for any technical issues, minimizing downtime and disruption.",
  },
];
const approachData = [
  {
    num: 1,
    title: "Initial Assessment",
    desc: "Thorough analysis of your current systems and infrastructure.",
  },
  {
    num: 2,
    title: "Customized Plan",
    desc: "Develop a tailored support and maintenance strategy based on your needs.",
  },
  {
    num: 3,
    title: "Proactive Monitoring",
    desc: "Continuous monitoring for performance, security, and potential issues.",
  },
  {
    num: 4,
    title: "Regular Reporting",
    desc: "Transparent updates on maintenance activities, performance metrics, and recommendations.",
  },
  {
    num: 5,
    title: "Ongoing Evolution",
    desc: "Strategic advice and implementation for future enhancements and scalability.",
  },
];
const benefitsData = [
  {
    icon: <FiThumbsUp />,
    title: "Uninterrupted Operations",
    desc: "Minimize downtime and ensure your digital platforms are always available and performing.",
  },
  {
    icon: <FiShield />,
    title: "Enhanced Security",
    desc: "Protect your data and users with proactive security measures and rapid response to threats.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Optimal Performance",
    desc: "Regular optimization ensures your site or app loads quickly and provides a smooth user experience.",
  },
  {
    icon: <FiSmile />,
    title: "Peace of Mind",
    desc: "Focus on your business knowing your digital infrastructure is expertly managed and supported.",
  },
];

// --- Framer Motion Animation Variants ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SupportManagementServices = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Ref for the vertical timeline container to track scroll progress
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
        title="Support & Management Services | Weblynx Infotech"
        description="Weblynx Infotech offers comprehensive support and management services for websites and applications, including maintenance, performance optimization, security, and technical assistance."
        keywords="website support, app maintenance, digital asset management, server management, security audits, performance optimization, technical assistance, weblynx Infotech support"
        ogTitle="Weblynx Infotech Support: Proactive Digital Asset Management"
        ogDescription="Ensure the long-term success and smooth operation of your digital investments with Weblynx Infotech's expert support and management services."
        ogUrl="https://www.weblynxinfotech.com/services/support-management-services"
        canonical="https://www.weblynxinfotech.com/services/support-management-services"
      />

      {/* --- Hero Section --- */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background elements... */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-gray-950 dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#cce3ff,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f622,transparent)]"></div>
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
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-green-400 dark:to-lime-400"
            >
              Support & Management
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Ensure the continuous success and optimal performance of your
              digital products with our comprehensive support and management.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link
                to="/contact"
                className={`inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                  isDark
                    ? "bg-purple-600 text-white hover:bg-purple-500"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Dedicated Support
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
            className="w-full max-w-md mx-auto md:max-w-none"
          >
            <Lottie
              animationData={supportAnimationData}
              loop={true}
              autoplay={true}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* --- What We Cover Section --- */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            What Our Services Cover
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coverageData.map((item, index) => (
              <motion.div
                variants={staggerItem}
                key={index}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group transition-all duration-300 ${
                  isDark
                    ? "bg-gray-900 border border-gray-800 hover:border-purple-500 hover:bg-gray-800/50"
                    : "bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl"
                }`}
              >
                <div
                  className={`text-2xl mb-5 p-3 rounded-lg ${
                    isDark
                      ? "bg-gray-800 text-purple-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-70 text-base">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Our Proactive Approach Section (Vertical Timeline) --- */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Proactive Approach
          </motion.h2>
          <div
            ref={timelineRef}
            className="relative grid grid-cols-[auto_1fr] md:gap-x-12 gap-x-6"
          >
            {/* The Vertical Line with Progress */}
            <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-full h-full absolute left-5 md:left-6 -translate-x-1/2">
              <motion.div
                className="w-full h-full bg-blue-600 dark:bg-purple-500 origin-top"
                style={{ scaleY }}
              />
            </div>

            {approachData.map((step) => (
              <React.Fragment key={step.num}>
                <div className="z-10">
                  <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-gray-950 border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 dark:bg-purple-500"></div>
                  </div>
                </div>
                <motion.div
                  variants={sectionVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  className="pt-2 pb-16"
                >
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-purple-400 mb-2">
                    Step {step.num}: {step.title}
                  </h3>
                  <p className="opacity-80">{step.desc}</p>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* --- Benefits Section --- */}
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
            Your Benefits, Guaranteed
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
                  className={`text-3xl mt-1 text-green-500 dark:text-green-400`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="opacity-70 text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
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
            Ready for Reliable Digital Support?
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg mb-8 opacity-80">
            Let's secure the long-term success of your valuable digital assets.
          </motion.p>
          <motion.div variants={staggerItem}>
            <Link
              to="/contact"
              className={`inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                  : "bg-gradient-to-r from-blue-600 to-green-500 text-white"
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

export default SupportManagementServices;
