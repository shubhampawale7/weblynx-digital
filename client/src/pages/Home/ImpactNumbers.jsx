// client/src/components/Home/ImpactNumbers.jsx

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimate } from "framer-motion";

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
];

const AnimatedNumber = ({ value }) => {
  const [ref, animate] = useAnimate();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      // Animate from 0 to the target value
      animate(
        ref.current,
        { textContent: value },
        {
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
          // Framer Motion can animate non-CSS properties like textContent
          // by specifying the type and rounding the value on each frame.
          onUpdate: (latest) => {
            ref.current.textContent = Math.round(latest).toString();
          },
        }
      );
    }
  }, [inView, value, animate, ref]);

  return <span ref={ref}>0</span>;
};

const ImpactNumbers = () => {
  const containerRef = useRef(null);

  return (
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          ref={containerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
          className="group relative mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3
                     divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-brand-light-blue/20
                     rounded-2xl border border-gray-200 dark:border-brand-light-blue/20 p-8
                     bg-white/80 dark:bg-brand-dark-blue/30 backdrop-blur-md shadow-lg overflow-hidden"
          onMouseMove={(e) => {
            if (containerRef.current) {
              const rect = containerRef.current.getBoundingClientRect();
              containerRef.current.style.setProperty(
                "--mouse-x",
                `${e.clientX - rect.left}px`
              );
              containerRef.current.style.setProperty(
                "--mouse-y",
                `${e.clientY - rect.top}px`
              );
            }
          }}
        >
          {/* Aurora Spotlight Effect */}
          <div
            className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 -z-10"
            style={{
              background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), hsla(169, 100%, 50%, 0.1), transparent 80%)`,
            }}
          />

          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="text-center px-8 pt-8 md:pt-0"
            >
              <h3 className="font-display text-5xl md:text-6xl font-bold text-brand-accent">
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
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
