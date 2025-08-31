// client/src/pages/Services/Services.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
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
  FiRefreshCw,
  FiZap,
  FiShoppingCart,
  FiClock,
  FiCalendar,
  FiDollarSign,
  FiGift,
} from "react-icons/fi";

const serviceOverviewData = [
  {
    id: "custom-web-applications",
    title: "Custom Web Apps",
    Icon: FiCode,
    description:
      "Bespoke web solutions tailored to your unique business needs, built for scalability, security, and high performance.",
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
    keyAspects: ["Custom Themes", "Plugin Development", "WooCommerce Experts"],
  },
  {
    id: "seo-optimization",
    title: "SEO & Digital Marketing",
    Icon: FiTrendingUp,
    description:
      "Boost your online visibility and drive organic traffic with our data-driven, comprehensive optimization strategies.",
    keyAspects: ["On-Page & Off-Page SEO", "Content Strategy", "PPC Campaigns"],
  },
  {
    id: "api-integration",
    title: "API Integration",
    Icon: FiLink,
    description:
      "Seamlessly connect your applications with third-party services, automating workflows and enhancing functionality.",
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
    keyAspects: ["24/7 Monitoring", "Security Audits", "Regular Updates"],
  },
];

const Services = () => {
  return (
    <>
      <Seo
        title="Our Digital Services | Weblynx Infotech"
        description="Explore our comprehensive digital services: custom web apps, mobile development, WordPress, SEO, API integration, and more."
      />
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        <header className="py-20 text-center relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-brand-dark dark:text-white tracking-tighter">
              Our Digital Arsenal
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-brand-light-blue dark:text-brand-gray">
              A full spectrum of elite services, engineered to elevate your
              brand and empower your vision.
            </p>
          </motion.div>
        </header>

        <ServiceShowcase />
        <SolutionFinderQuiz />
      </main>
    </>
  );
};

const ServiceShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = serviceOverviewData[activeIndex];

  return (
    <section className="container mx-auto px-6 pb-20 sm:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-4 space-y-3"
        >
          {serviceOverviewData.map((service, index) => (
            <ServiceSelectorItem
              key={service.id}
              service={service}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-8 lg:sticky top-32"
        >
          <ServiceDisplay service={activeService} />
        </motion.div>
      </div>
    </section>
  );
};

const ServiceSelectorItem = ({ service, isActive, onHover }) => {
  const navigate = useNavigate();
  return (
    <div
      onMouseEnter={onHover}
      onClick={() => navigate(`/services/${service.id}`)}
      className={`relative p-4 rounded-xl cursor-pointer transition-colors duration-300 group
        ${
          isActive
            ? "bg-gray-100 dark:bg-brand-dark-blue"
            : "hover:bg-gray-100/50 dark:hover:bg-brand-dark-blue/30"
        }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-2 rounded-lg transition-colors duration-300 ${
            isActive ? "bg-brand-accent" : "bg-gray-200 dark:bg-brand-dark-blue"
          }`}
        >
          <service.Icon
            className={`w-6 h-6 transition-colors duration-300 ${
              isActive ? "text-brand-dark" : "text-brand-accent"
            }`}
          />
        </div>
        <h3
          className={`font-display text-lg font-semibold transition-colors duration-300 ${
            isActive
              ? "text-brand-dark dark:text-white"
              : "text-brand-light-blue dark:text-brand-gray"
          }`}
        >
          {service.title}
        </h3>
      </div>
      {isActive && (
        <motion.div
          layoutId="activeServiceBorder"
          className="absolute -left-1 top-0 bottom-0 w-1 rounded-full bg-brand-accent"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
};

const ServiceDisplay = ({ service }) => {
  const navigate = useNavigate();
  const { id, Icon, title, description, keyAspects } = service;
  return (
    <div className="relative p-8 h-full bg-white/80 dark:bg-brand-dark-blue/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-brand-light-blue/20 shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.07, delayChildren: 0.1 },
          }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate="visible"
          >
            <Icon className="w-16 h-16 mb-6 text-brand-accent" />
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-display text-4xl font-bold text-brand-dark dark:text-white mb-3"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-base text-brand-light-blue dark:text-brand-gray mb-6 leading-relaxed"
          >
            {description}
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="border-t border-brand-light-blue/20 pt-5 mb-8 space-y-3"
          >
            {keyAspects.map((aspect) => (
              <div key={aspect} className="flex items-center gap-3">
                <FiCheckCircle className="w-5 h-5 flex-shrink-0 text-brand-accent" />
                <span className="font-medium text-brand-dark dark:text-white">
                  {aspect}
                </span>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              to={`/services/${id}`}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <motion.span
                className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                initial={{ x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span className="relative">Explore Service</span>
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- SOLUTION FINDER QUIZ (REDESIGNED) ---
const questions = [
  {
    question: "What is the primary goal of your project?",
    answers: [
      {
        text: "Launch a new business or idea",
        key: "new_business",
        icon: FiGift,
      },
      {
        text: "Grow my existing business",
        key: "grow_business",
        icon: FiTrendingUp,
      },
      {
        text: "Sell products or services online",
        key: "ecommerce",
        icon: FiShoppingCart,
      },
    ],
    key: "goal",
  },
  {
    question: "How quickly do you need to see results?",
    answers: [
      { text: "ASAP (1-3 months)", key: "fast", icon: FiZap },
      { text: "Standard (3-6 months)", key: "medium", icon: FiClock },
      {
        text: "Long-term growth (6+ months)",
        key: "long_term",
        icon: FiCalendar,
      },
    ],
    key: "speed",
  },
];
const resultMapping = {
  ecommerce: {
    title: "E-commerce Accelerator",
    description:
      "Our comprehensive e-commerce package is tailored to build, optimize, and scale your online store.",
    link: "/services/ecommerce-development",
    buttonText: "Explore E-commerce",
    icon: FiShoppingCart,
  },
  new_business_fast: {
    title: "Startup Launchpad",
    description:
      "Perfect for new ventures needing a quick, impactful online presence to validate ideas and attract customers.",
    link: "/packages",
    buttonText: "See Packages",
    icon: FiGift,
  },
  grow_business_medium: {
    title: "Business Growth Engine",
    description:
      "Designed for established businesses looking to expand their market reach and enhance user engagement.",
    link: "/services/full-stack-development",
    buttonText: "Explore Full-Stack",
    icon: FiTrendingUp,
  },
  default: {
    title: "Custom Digital Strategy",
    description:
      "Based on your unique responses, we recommend a bespoke solution. Let's discuss your vision.",
    link: "/contact",
    buttonText: "Schedule a Consultation",
    icon: FiZap,
  },
};
const questionVariants = {
  enter: (direction) => ({ x: direction > 0 ? "50%" : "-50%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction < 0 ? "50%" : "-50%", opacity: 0 }),
};
const answerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const SolutionFinderQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [resultKey, setResultKey] = useState(null);

  const handleAnswer = (answerKey) => {
    const currentQuestion = questions[step];
    const newAnswers = { ...answers, [currentQuestion.key]: answerKey };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const { goal, speed } = finalAnswers;
    let key = "default";
    if (goal === "ecommerce") key = "ecommerce";
    else if (goal === "new_business" && speed === "fast")
      key = "new_business_fast";
    else if (goal === "grow_business" && speed === "medium")
      key = "grow_business_medium";

    setResultKey(key);
    setStep(step + 1);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResultKey(null);
  };

  const currentProgress = step / questions.length;
  const currentResult = resultKey
    ? resultMapping[resultKey] || resultMapping.default
    : null;
  const ResultIcon = currentResult?.icon;

  return (
    <section className="bg-gray-50 dark:bg-black py-20 sm:py-28 relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <JourneyPath progress={currentProgress} />
      </div>
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <AnimatePresence mode="wait">
          {step < questions.length && (
            <motion.div
              key={step}
              variants={questionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <motion.h2
                variants={answerVariants}
                className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter mb-12"
              >
                {questions[step].question}
              </motion.h2>
              <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {questions[step].answers.map((answer) => (
                  <AnswerCard
                    key={answer.key}
                    answer={answer}
                    onAnswer={() => handleAnswer(answer.key)}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {currentResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center flex flex-col justify-center items-center"
            >
              <ResultIcon className="w-16 h-16 text-brand-accent mb-6" />
              <p className="text-lg text-brand-light-blue dark:text-brand-gray">
                Our Recommendation:
              </p>
              <h3 className="font-display text-5xl md:text-6xl font-bold my-4 text-brand-dark dark:text-white leading-tight">
                {currentResult.title}
              </h3>
              <p className="mb-8 text-lg text-brand-light-blue dark:text-brand-gray max-w-md mx-auto">
                {currentResult.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={currentResult.link}
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <motion.span
                    className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    initial={{ x: "-150%" }}
                    whileHover={{ x: "150%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <span className="relative">{currentResult.buttonText}</span>
                  <FiArrowRight className="relative" />
                </Link>
                <button
                  onClick={handleReset}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-brand-light-blue dark:text-brand-gray hover:bg-gray-100 dark:hover:bg-brand-dark-blue/50 rounded-full transition-colors duration-300"
                >
                  <FiRefreshCw className="transition-transform duration-300 group-hover:rotate-180" />
                  <span>Start Over</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const AnswerCard = ({ answer, onAnswer }) => {
  const { icon: Icon, text } = answer;
  return (
    <motion.button
      onClick={onAnswer}
      variants={answerVariants}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
      className="group relative h-full p-6 text-center rounded-2xl border transition-all duration-300
                       bg-white/80 dark:bg-brand-dark-blue/30 backdrop-blur-md
                       border-gray-200 dark:border-brand-light-blue/20
                       hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/10"
    >
      <Icon className="w-10 h-10 mx-auto mb-4 text-brand-accent" />
      <span className="font-display text-xl font-semibold text-brand-dark dark:text-white">
        {text}
      </span>
    </motion.button>
  );
};

const JourneyPath = ({ progress }) => {
  const ref = useRef(null);
  const motionProgress = useMotionValue(progress);
  useEffect(() => {
    motionProgress.set(progress);
  }, [progress, motionProgress]);

  const pathLength = useSpring(useTransform(motionProgress, [0, 1], [0, 1]), {
    stiffness: 400,
    damping: 90,
  });
  return (
    <svg
      ref={ref}
      className="w-full h-full"
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid meet"
    >
      <motion.path
        d="M 50 250 C 150 50, 350 450, 450 250"
        fill="none"
        strokeWidth="2"
        className="stroke-gray-200 dark:stroke-brand-dark-blue"
      />
      <motion.path
        d="M 50 250 C 150 50, 350 450, 450 250"
        fill="none"
        strokeWidth="2"
        className="stroke-brand-accent"
        style={{ pathLength }}
      />
    </svg>
  );
};

export default Services;
