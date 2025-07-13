// client/src/components/Home/Faq.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    question: "What is your development process like?",
    answer:
      "Our process is collaborative and transparent. We follow a clear path: Discovery & Strategy, UI/UX Design, Development & Testing, and finally Deployment & Support. We keep you involved at every stage to ensure the final product perfectly matches your vision.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Project costs vary greatly depending on the scope, features, and complexity. After our initial discovery call, we provide a detailed, itemized proposal with a fixed price so you know exactly what to expect. We focus on providing value, not just the lowest price.",
  },
  {
    question: "How long will it take to build my website?",
    answer:
      "A typical timeline for a custom website is 6-12 weeks, depending on the project's complexity. A simple landing page might be faster, while a large e-commerce platform could take longer. We will provide a detailed project timeline after our initial discovery phase.",
  },
  {
    question: "Do you provide support after the website is launched?",
    answer:
      "Absolutely. We offer a range of support and maintenance packages to ensure your website remains secure, up-to-date, and performing at its best. We believe in building long-term partnerships with our clients.",
  },
];

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="border-b border-gray-200 dark:border-gray-800"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left"
      >
        <h3 className="text-lg font-semibold">{item.question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <FiChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 dark:text-gray-400">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-20 sm:py-28 ${isDark ? "bg-black" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl mt-4 text-gray-600 dark:text-gray-400">
            Quick answers to some of our most common inquiries.
          </p>
        </motion.div>
        <div className="space-y-4">
          {faqData.map((item) => (
            <AccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
