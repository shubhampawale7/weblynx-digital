// client/src/components/Home/ImpactNumbers.jsx
import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

// UPDATED: Changed '50+' to '10+' and removed 'Countries Served'
const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "k+", label: "Lines of Code Written" },
];

const AnimatedNumber = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(0, value, {
        duration: 2,
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString();
          }
        },
      });
    }
  }, [inView, value]);

  return (
    <span className="flex items-center justify-center">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

const ImpactNumbers = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`py-20 sm:py-24 ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <div className="container mx-auto px-4">
        {/* UPDATED: Changed grid columns to look better with 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
