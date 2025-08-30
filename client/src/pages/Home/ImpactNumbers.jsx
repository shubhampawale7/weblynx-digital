// client/src/components/Home/ImpactNumbers.jsx

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// --- CHANGE: More client-focused metrics ---
const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 100, suffix: "%", label: "On-Time Delivery" }, // Replaced "Lines of Code"
];

const AnimatedNumber = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(0, value, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1], // Smoother ease-out
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString();
          }
        },
      });
    }
  }, [inView, value]);

  return (
    <>
      <span ref={ref}>0</span>
      {suffix}
    </>
  );
};

const ImpactNumbers = () => {
  // --- CHANGE: Animation variants for a staggered entrance ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    // --- CHANGE: Seamless background and subtle top border for separation ---
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          // --- CHANGE: Elegant horizontal layout with dividers ---
          className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-brand-light-blue/20 rounded-2xl border border-gray-200 dark:border-brand-light-blue/20 p-8 shadow-sm"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center px-8 pt-8 md:pt-0"
            >
              {/* --- CHANGE: Updated typography and on-brand colors --- */}
              <h3 className="font-display text-5xl md:text-6xl font-bold text-brand-accent">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="mt-2 text-base text-brand-light-blue dark:text-brand-gray tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
