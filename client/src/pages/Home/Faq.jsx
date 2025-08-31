// client/src/components/Home/Faq.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const AccordionItem = ({ item, isActive, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white dark:bg-brand-dark-blue/30 rounded-2xl border border-gray-200 dark:border-brand-light-blue/20 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <h3 className="flex-1 font-display text-lg font-semibold text-brand-dark dark:text-white">
          {item.question}
        </h3>
        {/* Animated Plus/Minus Icon */}
        <div className="relative w-4 h-4 text-brand-accent">
          <motion.span
            className="absolute inset-0 w-full h-0.5 bg-current"
            animate={{ rotate: isActive ? 90 : 0, y: "1.5px" }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute inset-0 w-full h-0.5 bg-current"
            animate={{ rotate: isActive ? 180 : 0, y: "1.5px" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-brand-light-blue dark:text-brand-gray">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  // State is lifted to the parent to manage which item is open
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 dark:bg-black py-20 sm:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
            Quick answers to some of our most common inquiries.
          </p>
        </motion.div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={item.question}
              item={item}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
