// client/src/components/Services/SolutionFinderQuiz.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

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
  enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction < 0 ? "100%" : "-100%", opacity: 0 }),
};

const SolutionFinderQuiz = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

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
    if (goal === "Sell products online") {
      setResult("E-commerce Powerhouse");
    } else if (
      goal === "Launch a new business or idea" &&
      budget === "Under ₹50,000"
    ) {
      setResult("Startup Launchpad");
    } else {
      setResult("Business Growth Engine");
    }
    setStep(step + 1);
  };

  const progress = (step / questions.length) * 100;

  return (
    <section
      className={`py-20 sm:py-24 ${isDark ? "bg-gray-900" : "bg-black"}`}
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
          className={`mt-12 w-full max-w-2xl mx-auto rounded-2xl p-8 shadow-2xl relative overflow-hidden h-96 flex flex-col justify-between
                    ${isDark ? "bg-gray-900" : "bg-white"}`}
        >
          {/* Progress Bar */}
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
                      className={`w-full p-4 rounded-lg text-lg font-medium border-2 transition-all
                                                        ${
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

export default SolutionFinderQuiz;
