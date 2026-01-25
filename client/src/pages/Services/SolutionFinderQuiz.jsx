// client/src/components/Services/SolutionFinderQuiz.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import {
  FiArrowRight,
  FiRefreshCw,
  FiZap,
  FiRocket,
  FiShoppingCart,
  FiTrendingUp,
  FiClock,
  FiCalendar,
  FiSettings,
} from "react-icons/fi";

// --- Quiz Data ---
const questions = [
  {
    id: 1,
    question: "What is your primary objective?",
    key: "goal",
    answers: [
      {
        text: "Launch New Venture",
        key: "new_business",
        icon: FiRocket,
        sub: "I'm starting from scratch.",
      },
      {
        text: "Scale Operations",
        key: "grow_business",
        icon: FiTrendingUp,
        sub: "I need better infrastructure.",
      },
      {
        text: "Digital Commerce",
        key: "ecommerce",
        icon: FiShoppingCart,
        sub: "I want to sell online.",
      },
    ],
  },
  {
    id: 2,
    question: "What's the desired timeline?",
    key: "speed",
    answers: [
      {
        text: "MVP Sprint",
        key: "fast",
        icon: FiZap,
        sub: "1-3 months launch.",
      },
      {
        text: "Balanced Build",
        key: "medium",
        icon: FiClock,
        sub: "3-6 months delivery.",
      },
      {
        text: "Strategic Growth",
        key: "long_term",
        icon: FiCalendar,
        sub: "Long-term partnership.",
      },
    ],
  },
];

const resultMapping = {
  ecommerce: {
    title: "Commerce Accelerator",
    description:
      "A high-conversion MERN architecture designed for Stripe payments and massive product scaling.",
    link: "/services/ecommerce-development",
    icon: FiShoppingCart,
    color: "bg-emerald-500",
  },
  new_business_fast: {
    title: "Startup Launchpad",
    description:
      "Our rapid-deployment framework to get your MVP live and collecting data within 90 days.",
    link: "/packages",
    icon: FiRocket,
    color: "bg-brand-accent",
  },
  grow_business_medium: {
    title: "Enterprise Engine",
    description:
      "Deep-stack infrastructure optimized for security, reliability, and complex data management.",
    link: "/services/full-stack-development",
    icon: FiTrendingUp,
    color: "bg-blue-600",
  },
  default: {
    title: "Bespoke Strategy",
    description:
      "Your vision requires a surgical approach. Let's design a custom technical blueprint.",
    link: "/contact",
    icon: FiSettings,
    color: "bg-purple-600",
  },
};

const SolutionFinderQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  // Progress tracking for the background path
  const progress = useMotionValue(0);

  const handleChoice = (key) => {
    const currentKey = questions[step].key;
    const updatedAnswers = { ...answers, [currentKey]: key };
    setAnswers(updatedAnswers);

    const nextStep = step + 1;
    progress.set(nextStep / questions.length);

    if (step < questions.length - 1) {
      setStep(nextStep);
    } else {
      // Logic for Result Calculation
      const { goal, speed } = updatedAnswers;
      let finalKey = "default";
      if (goal === "ecommerce") finalKey = "ecommerce";
      else if (goal === "new_business" && speed === "fast")
        finalKey = "new_business_fast";
      else if (goal === "grow_business" && speed === "medium")
        finalKey = "grow_business_medium";

      setResult(resultMapping[finalKey] || resultMapping.default);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
    progress.set(0);
  };

  return (
    <section className="bg-white dark:bg-brand-dark py-24 relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Dynamic Background Journey */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <JourneyPath progress={progress} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
              >
                {/* Progress Indicators */}
                <div className="flex gap-3 mb-12 justify-center">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-16 rounded-full transition-all duration-700 ${
                        i <= step
                          ? "bg-brand-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"
                          : "bg-gray-200 dark:bg-white/10"
                      }`}
                    />
                  ))}
                </div>

                <h2 className="text-4xl md:text-7xl font-bold text-brand-dark dark:text-white text-center tracking-tighter mb-16 leading-tight">
                  {questions[step].question}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {questions[step].answers.map((ans) => (
                    <button
                      key={ans.key}
                      onClick={() => handleChoice(ans.key)}
                      className="group relative p-8 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[2.5rem] hover:border-brand-accent transition-all duration-500 text-left"
                    >
                      <ans.icon className="text-3xl text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-2xl font-bold text-brand-dark dark:text-white mb-2">
                        {ans.text}
                      </h4>
                      <p className="text-sm text-brand-light-blue dark:text-brand-gray opacity-60 leading-relaxed">
                        {ans.sub}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <motion.div
                  initial={{ rotate: -10, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  className={`inline-flex p-8 rounded-[2.5rem] ${result.color} text-brand-dark mb-8 shadow-2xl`}
                >
                  <result.icon size={54} />
                </motion.div>

                <h3 className="text-6xl md:text-9xl font-black text-brand-dark dark:text-white tracking-tighter mb-6 uppercase italic">
                  Matched.
                </h3>
                <h4 className="text-3xl md:text-5xl font-bold text-brand-accent mb-8 leading-none">
                  {result.title}
                </h4>
                <p className="text-xl text-brand-light-blue dark:text-brand-gray max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                  {result.description}
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                  <Link
                    to={result.link}
                    className="group px-12 py-6 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-black rounded-full text-xl hover:scale-105 transition-all shadow-xl flex items-center gap-3"
                  >
                    View Strategy{" "}
                    <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <button
                    onClick={reset}
                    className="text-brand-light-blue dark:text-brand-gray/50 hover:text-brand-accent flex items-center gap-2 font-mono uppercase tracking-widest text-xs transition-colors"
                  >
                    <FiRefreshCw /> Run Again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- Journey Path Helper Component ---
const JourneyPath = ({ progress }) => {
  const pathLength = useSpring(useTransform(progress, [0, 1], [0, 1]), {
    stiffness: 40,
    damping: 20,
  });

  return (
    <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
      <path
        d="M -100 500 C 200 200, 800 800, 1100 500"
        stroke="currentColor"
        strokeWidth="2"
        className="text-gray-200 dark:text-white/5"
      />
      <motion.path
        d="M -100 500 C 200 200, 800 800, 1100 500"
        stroke="var(--brand-accent, #00f5d4)"
        strokeWidth="3"
        style={{ pathLength }}
      />
    </svg>
  );
};

export default SolutionFinderQuiz;
