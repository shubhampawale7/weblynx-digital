// client/src/pages/Services/Services.jsx
import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiTrendingUp,
  FiLink,
  FiLayers,
  FiSettings,
  FiArrowRight,
} from "react-icons/fi";

const serviceOverviewData = [
  {
    id: "custom-web-applications",
    title: "Custom Web Applications",
    Icon: FiCode,
    description:
      "Bespoke web solutions tailored to your unique business needs, built for scalability and high performance.",
    color: "#3b82f6",
    lightBg: "bg-blue-500/10",
    darkBg: "bg-blue-900/20",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    Icon: FiSmartphone,
    description:
      "Crafting intuitive mobile applications for both iOS & Android ecosystems.",
    color: "#f97316",
    lightBg: "bg-orange-500/10",
    darkBg: "bg-orange-900/20",
  },
  {
    id: "wordpress-site-creation",
    title: "WordPress Development",
    Icon: FiPenTool,
    description:
      "Flexible and user-friendly WordPress websites, from custom themes to e-commerce solutions.",
    color: "#0ea5e9",
    lightBg: "bg-sky-500/10",
    darkBg: "bg-sky-900/20",
  },
  {
    id: "seo-optimization",
    title: "SEO & Digital Marketing",
    Icon: FiTrendingUp,
    description:
      "Boost your online visibility and organic traffic with data-driven optimization strategies.",
    color: "#22c55e",
    lightBg: "bg-green-500/10",
    darkBg: "bg-green-900/20",
  },
  {
    id: "api-integration",
    title: "API Integration",
    Icon: FiLink,
    description:
      "Seamlessly connect your applications with third-party services, enhancing functionality.",
    color: "#ec4899",
    lightBg: "bg-pink-500/10",
    darkBg: "bg-pink-900/20",
  },
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    Icon: FiLayers,
    description:
      "End-to-end web development covering both frontend and backend for cohesive solutions.",
    color: "#8b5cf6",
    lightBg: "bg-purple-500/10",
    darkBg: "bg-purple-900/20",
  },
  {
    id: "support-management-services",
    title: "Support & Management",
    Icon: FiSettings,
    description:
      "Proactive maintenance and security to ensure your digital assets run smoothly.",
    color: "#64748b",
    lightBg: "bg-slate-500/10",
    darkBg: "bg-slate-800/20",
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

const Services = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [width] = useWindowSize();
  const isMobile = width < 1024; // lg breakpoint

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Our Digital Services | Weblynx Infotech"
        description="Explore our comprehensive digital services: custom web apps, mobile development, WordPress, SEO, API integration, and more."
      />
      <header className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 dark:from-purple-400 dark:to-cyan-400">
            Our Digital Services
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            A full spectrum of solutions, meticulously crafted to bring your
            vision to life.
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 pb-20">
        {isMobile ? (
          <MobileView isDark={isDark} />
        ) : (
          <DesktopView isDark={isDark} />
        )}
      </main>
    </div>
  );
};

// --- Mobile View: A clean, vertically scrolling list of service cards ---
const MobileView = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-8">
      {serviceOverviewData.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`p-8 rounded-2xl border ${
            isDark
              ? "border-gray-800 bg-gray-900"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`p-3 rounded-lg ${
                isDark ? service.darkBg : service.lightBg
              }`}
            >
              <service.Icon
                className={`w-6 h-6`}
                style={{ color: service.color }}
              />
            </div>
            <h2 className="text-2xl font-bold">{service.title}</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {service.description}
          </p>
          <button
            onClick={() => navigate(`/services/${service.id}`)}
            className="font-semibold inline-flex items-center gap-2 group"
            style={{ color: service.color }}
          >
            Learn More{" "}
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      ))}
    </div>
  );
};

// --- Desktop View: The interactive list and panel layout ---
const DesktopView = ({ isDark }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const activeService = serviceOverviewData[activeIndex];
  const ActiveIcon = activeService.Icon;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="lg:col-span-1 flex flex-col gap-1"
      >
        {serviceOverviewData.map((service, index) => (
          <div
            key={service.id}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => navigate(`/services/${service.id}`)}
            className="p-4 rounded-lg cursor-pointer relative"
          >
            {activeIndex === index && (
              <motion.div
                layoutId="activeServiceHighlight"
                className={`absolute inset-0 rounded-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}
              />
            )}
            <div className="relative flex items-center gap-4">
              <motion.div
                className="w-1 h-8 rounded-full"
                animate={{
                  backgroundColor:
                    activeIndex === index ? service.color : "transparent",
                }}
              />
              <h3
                className={`text-lg font-bold transition-colors ${
                  activeIndex === index
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="lg:col-span-3 rounded-2xl min-h-[500px] flex relative overflow-hidden">
        <motion.div
          animate={{ backgroundColor: activeService.color }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative w-full p-12 flex flex-col justify-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-xl"
            >
              <ActiveIcon className="w-24 h-24 mb-6 text-white/80" />
              <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
                {activeService.title}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                {activeService.description}
              </p>
              <button
                onClick={() => navigate(`/services/${activeService.id}`)}
                className="px-8 py-3 rounded-full font-bold text-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transform transition-transform hover:scale-105"
              >
                View Details
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Services;
