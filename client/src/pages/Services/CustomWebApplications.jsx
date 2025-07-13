// client/src/pages/Services/CustomWebApplications.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion, useScroll, useSpring } from "framer-motion";

import customWebAppsAnimationData from "../../assets/lottie-animations/custom-web-apps-animation.json";
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
  FiBarChart,
  FiShield,
  FiUsers,
  FiChevronsRight,
} from "react-icons/fi";

// --- Data with Icons ---
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
      "Dynamic portals for customers, partners, or employees, offering personalized experiences.",
  },
  {
    icon: <FiCloud />,
    title: "SaaS Products",
    description:
      "Multi-tenant Software-as-a-Service applications with robust architecture.",
  },
  {
    icon: <FiMessageSquare />,
    title: "Real-time Applications",
    description:
      "Apps with live chat, interactive dashboards, and collaborative tools.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Progressive Web Apps (PWAs)",
    description:
      "Websites that offer app-like experiences, working offline and accessible via home screens.",
  },
];

const approachData = [
  {
    icon: <FiCompass />,
    title: "Discovery & Planning",
    description:
      "We dive deep into your requirements and business goals to create a detailed project roadmap and strategy.",
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
      "We handle the entire deployment process, ensuring a smooth and successful launch of your application.",
  },
  {
    icon: <FiLifeBuoy />,
    title: "Support & Evolution",
    description:
      "Post-launch, we provide ongoing support and work with you to evolve the product with new features.",
  },
];

const benefitsData = [
  {
    icon: <FiBarChart />,
    title: "Scalability & Performance",
    description:
      "We build future-proof applications that can easily scale with your business growth and handle high traffic loads.",
  },
  {
    icon: <FiShield />,
    title: "Security & Reliability",
    description:
      "Your data is protected with industry-standard security practices and robust architecture, ensuring maximum uptime.",
  },
  {
    icon: <FiUsers />,
    title: "User-Centric Design",
    description:
      "Beyond functionality, we prioritize intuitive user interfaces and exceptional experiences that keep your audience engaged.",
  },
  {
    icon: <FiChevronsRight />,
    title: "Agile & Transparent Process",
    description:
      "We follow an agile development methodology, ensuring transparency, flexibility, and regular communication.",
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

const CustomWebApplications = () => {
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
        title="Custom Web Applications Development | Weblynx Infotech"
        description="Weblynx Infotech specializes in crafting scalable, secure, and intuitive custom web applications tailored to your business needs, from enterprise solutions to e-commerce platforms."
        keywords="custom web development, web applications, MERN stack, React development, Node.js, enterprise solutions, e-commerce platforms, SaaS development, real-time apps, PWA, Weblynx Infotech"
        ogTitle="Custom Web Applications by Weblynx Infotech - Build Your Digital Vision"
        ogDescription="Elevate your business with bespoke web applications built for performance, scalability, and seamless user experience."
        ogUrl="https://www.weblynxinfotech.com/services/custom-web-applications"
        canonical="https://www.weblynxinfotech.com/services/custom-web-applications"
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
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
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-purple-400 dark:to-cyan-400"
            >
              Custom Web Applications
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Build your unique digital presence from the ground up. We craft
              scalable, secure, and intuitive web applications tailored
              precisely to your business objectives.
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
                Start Your Project
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
              animationData={customWebAppsAnimationData}
              loop={true}
              autoplay={true}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            What We Build
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whatWeBuildData.map((item, index) => (
              <motion.div
                variants={staggerItem}
                key={index}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group transition-all duration-300 ${
                  isDark
                    ? "bg-gray-900 border border-gray-800 hover:border-blue-500 hover:bg-gray-800/50"
                    : "bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl"
                }`}
              >
                <div
                  className={`text-2xl mb-5 p-3 rounded-lg ${
                    isDark
                      ? "bg-gray-800 text-blue-400"
                      : "bg-blue-100 text-blue-600"
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

      {/* Our Development Approach Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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

      {/* Why Choose Weblynx Section */}
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
            Why Choose Weblynx?
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
            Ready to Build Your Custom Application?
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg mb-8 opacity-80">
            Let's discuss your unique idea and how we can turn it into a
            powerful digital reality.
          </motion.p>
          <motion.div variants={staggerItem}>
            <Link
              to="/contact"
              className={`inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                  : "bg-gradient-to-r from-blue-600 to-purple-500 text-white"
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

export default CustomWebApplications;
