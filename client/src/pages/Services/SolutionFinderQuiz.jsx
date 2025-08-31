// client/src/components/Services/SolutionFinderQuiz.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiRefreshCw,
  FiZap,
  FiRocket,
  FiShoppingCart,
  FiTrendingUp,
  FiClock,
  FiCalendar,
  FiDollarSign,
} from "react-icons/fi";

// --- Enriched Quiz Data ---
const questions = [
  {
    question: "What is the primary goal of your project?",
    answers: [
      {
        text: "Launch a new business or idea",
        key: "new_business",
        icon: FiRocket,
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
    icon: FiRocket,
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

// --- Framer Motion Variants ---
const questionVariants = {
  enter: { opacity: 0, y: 30 },
  center: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
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
    <section className="bg-white dark:bg-black py-20 sm:py-28 relative min-h-[90vh] flex flex-col justify-center items-center">
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
  const pathLength = useSpring(useTransform(progress, [0, 1], [0, 1]), {
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

export default SolutionFinderQuiz;
