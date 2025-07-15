// client/src/pages/Services/Services.jsx
import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
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
  FiCheckCircle,
} from "react-icons/fi";
// Removed unused ScrollingBanner import

// Note: I've added a 'keyAspects' array to your data for a richer display.
const serviceOverviewData = [
  {
    id: "custom-web-applications",
    title: "Custom Web Applications",
    Icon: FiCode,
    description:
      "Bespoke web solutions tailored to your unique business needs, built for scalability, security, and high performance.",
    color: "#3b82f6",
    keyAspects: [
      "Scalable Architecture",
      "Secure by Design",
      "Performance Optimized",
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    Icon: FiSmartphone,
    description:
      "Crafting intuitive and engaging native mobile applications for both iOS & Android ecosystems to connect with your users anywhere.",
    color: "#f97316",
    keyAspects: [
      "Native iOS & Android",
      "User-Centric UI/UX",
      "Cross-Platform Options",
    ],
  },
  {
    id: "wordpress-site-creation",
    title: "WordPress Development",
    Icon: FiPenTool,
    description:
      "Flexible and user-friendly WordPress websites, from custom theme development to robust e-commerce solutions.",
    color: "#0ea5e9",
    keyAspects: ["Custom Themes", "Plugin Development", "WooCommerce Experts"],
  },
  {
    id: "seo-optimization",
    title: "SEO & Digital Marketing",
    Icon: FiTrendingUp,
    description:
      "Boost your online visibility and drive organic traffic with our data-driven, comprehensive optimization strategies.",
    color: "#22c55e",
    keyAspects: ["On-Page & Off-Page SEO", "Content Strategy", "PPC Campaigns"],
  },
  {
    id: "api-integration",
    title: "API Integration",
    Icon: FiLink,
    description:
      "Seamlessly connect your applications with third-party services, automating workflows and enhancing functionality.",
    color: "#ec4899",
    keyAspects: [
      "Third-Party APIs",
      "Custom API Development",
      "Data Synchronization",
    ],
  },
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    Icon: FiLayers,
    description:
      "End-to-end web development covering both frontend and backend for cohesive, powerful, and seamless digital experiences.",
    color: "#8b5cf6",
    keyAspects: [
      "Frontend & Backend",
      "Database Management",
      "DevOps & Deployment",
    ],
  },
  {
    id: "support-management-services",
    title: "Support & Management",
    Icon: FiSettings,
    description:
      "Proactive maintenance, continuous monitoring, and dedicated security to ensure your digital assets run smoothly and securely.",
    color: "#64748b",
    keyAspects: ["24/7 Monitoring", "Security Audits", "Regular Updates"],
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
  const isMobile = width < 1024;

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Our Digital Services | Weblynx Infotech"
        description="Explore our comprehensive digital services: custom web apps, mobile development, WordPress, SEO, API integration, and more."
      />
      <header className="py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            OUR DIGITAL ARSENAL
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            A full spectrum of elite services, engineered to elevate your brand
            and empower your vision.
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 pb-20 relative z-10">
        {isMobile ? (
          <MobileView isDark={isDark} />
        ) : (
          <DesktopView isDark={isDark} />
        )}
      </main>

      {/* --- ADDED: The Solution Finder Quiz at the bottom of the page --- */}
      <SolutionFinderQuiz />
    </div>
  );
};

// --- Polished Mobile View ---
const MobileView = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      {serviceOverviewData.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          className={`rounded-2xl border p-6 transition-all duration-300 group ${
            isDark
              ? "border-gray-800 bg-gray-900/50 hover:border-gray-700"
              : "border-gray-200 bg-white/50 hover:border-gray-300"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="p-3 rounded-lg"
              style={{ backgroundColor: `${service.color}20` }}
            >
              <service.Icon
                className="w-6 h-6"
                style={{ color: service.color }}
              />
            </div>
            <h2 className="text-xl font-bold">{service.title}</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
            {service.description}
          </p>
          <div className="space-y-2 mb-6">
            {service.keyAspects.map((aspect) => (
              <div
                key={aspect}
                className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
              >
                <FiCheckCircle
                  className="w-4 h-4"
                  style={{ color: service.color }}
                />
                <span>{aspect}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate(`/services/${service.id}`)}
            className="font-semibold text-sm inline-flex items-center gap-2 group/button"
            style={{ color: service.color }}
          >
            Learn More
            <FiArrowRight className="transition-transform group-hover/button:translate-x-1" />
          </button>
        </motion.div>
      ))}
    </div>
  );
};

// --- Redesigned Desktop View ---
const DesktopView = ({ isDark }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = serviceOverviewData[activeIndex];

  return (
    <div className="relative min-h-[550px]">
      <BackgroundBlobs color={activeService.color} />
      <div className="grid grid-cols-12 gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="col-span-4"
        >
          <ServiceSelector
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isDark={isDark}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="col-span-8"
        >
          <ServiceDisplay service={activeService} isDark={isDark} />
        </motion.div>
      </div>
    </div>
  );
};

// --- Helper Components for Desktop View ---
const ServiceSelector = ({ activeIndex, setActiveIndex, isDark }) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-3">
      {serviceOverviewData.map((service, index) => (
        <div
          key={service.id}
          onMouseEnter={() => setActiveIndex(index)}
          onClick={() => navigate(`/services/${service.id}`)}
          className={`p-4 rounded-lg cursor-pointer transition-all duration-300 relative group ${
            activeIndex === index
              ? isDark
                ? "bg-gray-800/60"
                : "bg-white/60"
              : isDark
              ? "hover:bg-gray-800/40"
              : "hover:bg-white/40"
          }`}
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{
                backgroundColor: `${service.color}${
                  activeIndex === index ? "FF" : "00"
                }`,
              }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-md"
            >
              <service.Icon
                className="w-6 h-6 transition-colors"
                style={{
                  color: activeIndex === index ? "#FFFFFF" : service.color,
                }}
              />
            </motion.div>
            <h3
              className={`text-lg font-semibold transition-colors ${
                activeIndex === index
                  ? isDark
                    ? "text-white"
                    : "text-gray-900"
                  : isDark
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              {service.title}
            </h3>
          </div>
          {activeIndex === index && (
            <motion.div
              layoutId="activeServiceBorder"
              className="absolute -left-1 top-0 bottom-0 w-1 rounded-full"
              style={{ backgroundColor: service.color }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const ServiceDisplay = ({ service, isDark }) => {
  const navigate = useNavigate();
  const { id, Icon, title, description, color, keyAspects } = service;
  return (
    <div
      className={`rounded-2xl p-8 h-full border ${
        isDark
          ? "border-gray-700/50 bg-gray-900/50"
          : "border-gray-200/80 bg-white/50"
      } backdrop-blur-xl shadow-lg shadow-black/5`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Icon className="w-16 h-16 mb-6" style={{ color }} />
          </motion.div>
          <motion.h2 className="text-4xl font-bold mb-3">{title}</motion.h2>
          <motion.p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {description}
          </motion.p>
          <motion.div className="border-t border-gray-500/20 pt-5 mb-8 space-y-3">
            {keyAspects.map((aspect) => (
              <div key={aspect} className="flex items-center gap-3">
                <FiCheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color }}
                />
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  {aspect}
                </span>
              </div>
            ))}
          </motion.div>
          <motion.div>
            <button
              onClick={() => navigate(`/services/${id}`)}
              className="px-6 py-3 rounded-lg font-bold text-lg text-white transform transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                background: `linear-gradient(45deg, ${color}, ${color}d0)`,
              }}
            >
              Explore Service
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const BackgroundBlobs = ({ color }) => (
  <div className="absolute inset-0 overflow-hidden opacity-50 dark:opacity-40">
    <AnimatePresence>
      <motion.div
        key={color}
        initial={{ opacity: 0, scale: 0.5, x: "50%", y: "20%" }}
        animate={{ opacity: 1, scale: 1.2, x: "40%", y: "10%" }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        className="absolute w-96 h-96 rounded-full"
        style={{ backgroundColor: color, filter: "blur(150px)" }}
      />
      <motion.div
        key={`${color}-2`}
        initial={{ opacity: 0, scale: 0.5, x: "20%", y: "-20%" }}
        animate={{ opacity: 0.7, scale: 1, x: "10%", y: "0%" }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className="absolute w-80 h-80 rounded-full"
        style={{ backgroundColor: color, filter: "blur(120px)" }}
      />
    </AnimatePresence>
  </div>
);

// =================================================================================
// SOLUTION FINDER QUIZ COMPONENT
// =================================================================================
const SolutionFinderQuiz = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    {
      question: "What is the primary goal of your project?",
      answers: [
        "Launch a new business or idea",
        "Grow my existing business",
        "Sell products online",
      ],
      key: "goal",
    },
    {
      question: "What is your estimated budget?",
      answers: ["Under ₹50,000", "₹50,000 - ₹2,00,000", "Over ₹2,00,000"],
      key: "budget",
    },
  ];
  const variants = {
    enter: (direction = 1) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction = 1) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const handleAnswer = (answer) => {
    const currentQuestion = questions[step];
    const newAnswers = { ...answers, [currentQuestion.key]: answer };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const { goal, budget } = finalAnswers;
    if (goal === "Sell products online") setResult("E-commerce Powerhouse");
    else if (
      goal === "Launch a new business or idea" &&
      budget === "Under ₹50,000"
    )
      setResult("Startup Launchpad");
    else setResult("Business Growth Engine");
    setStep(step + 1);
  };

  const progress = (step / questions.length) * 100;

  return (
    <section
      className={`py-20 sm:py-24 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Solution
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Answer two quick questions, and we'll recommend the best service
            package for your needs.
          </p>
        </motion.div>

        <div
          className={`mt-12 w-full max-w-2xl mx-auto rounded-2xl p-8 shadow-2xl relative overflow-hidden h-96 flex flex-col justify-center items-center ${
            isDark ? "bg-gray-900" : "bg-white"
          }`}
        >
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 absolute top-0 left-0">
            <motion.div
              className="bg-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <AnimatePresence mode="wait">
            {step < questions.length && (
              <motion.div
                key={step}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={1}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <h3 className="text-2xl font-semibold mb-8">
                  {questions[step].question}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {questions[step].answers.map((answer) => (
                    <button
                      key={answer}
                      onClick={() => handleAnswer(answer)}
                      className={`w-full p-4 rounded-lg text-lg font-medium border-2 transition-all ${
                        isDark
                          ? "border-gray-700 hover:bg-purple-900/50 hover:border-purple-500"
                          : "border-gray-200 hover:bg-purple-50 hover:border-purple-300"
                      }`}
                    >
                      {answer}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            {result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center flex flex-col justify-center items-center h-full"
              >
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Our Recommendation For You:
                </p>
                <h3 className="text-4xl font-bold my-4 text-purple-600 dark:text-purple-400">
                  {result}
                </h3>
                <p className="mb-8">
                  This package is designed to meet your specific goals.
                </p>
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-transform hover:-translate-y-0.5"
                >
                  Learn More <FiArrowRight />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
