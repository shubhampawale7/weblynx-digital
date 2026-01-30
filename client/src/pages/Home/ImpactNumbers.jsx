// client/src/components/Home/ImpactNumbers.jsx
import React, { useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import { FiActivity, FiGlobe, FiTarget } from "react-icons/fi";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "GLOBAL_SYSTEMS_DEPLOYED",
    icon: <FiGlobe />,
    description: "Full-stack enterprise applications launched.",
  },
  {
    value: 99,
    suffix: "%",
    label: "CLIENT_RETENTION_RATE",
    icon: <FiTarget />,
    description: "Long-term engineering partnerships maintained.",
  },
  {
    value: 100,
    suffix: "%",
    label: "UPTIME_SLA_COMMITMENT",
    icon: <FiActivity />,
    description: "Guaranteed high-availability infrastructure.",
  },
];

const AnimatedNumber = ({ value }) => {
  const [ref, animate] = useAnimate();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      animate(
        ref.current,
        { textContent: value },
        {
          duration: 3,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (latest) => {
            ref.current.textContent = Math.round(latest).toString();
          },
        },
      );
    }
  }, [inView, value, animate, ref]);

  return (
    <span ref={ref} aria-live="polite" aria-atomic="true">
      0
    </span>
  );
};

const ImpactNumbers = () => {
  return (
    <section
      aria-labelledby="impact-heading"
      className="relative bg-white dark:bg-brand-dark py-24 md:py-32 overflow-hidden border-y border-gray-100 dark:border-white/5"
    >
      {/* Background Decorative Data Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none font-mono text-[10px] grid grid-cols-6 gap-10 p-10 overflow-hidden select-none"
        aria-hidden="true"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="flex flex-col">
            <span>
              {Math.random().toString(16).substring(2, 8).toUpperCase()}
            </span>
            <span>
              {Math.random().toString(16).substring(2, 8).toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="flex items-center gap-4 mb-16 opacity-40">
            <span className="h-px flex-grow bg-current" aria-hidden="true" />
            <h2
              id="impact-heading"
              className="text-[10px] font-mono uppercase tracking-[0.4em]"
            >
              Agency_Performance_Telemetry_v4.0
            </h2>
            <span className="h-px flex-grow bg-current" aria-hidden="true" />
          </header>

          {/* SEO Semantic Context (Invisible) */}
          <p className="sr-only">
            Weblynx Infotech performance metrics including deployed systems,
            client retention rate, and infrastructure uptime across web
            development and full-stack engineering projects.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-2xl rounded-[2.5rem] overflow-hidden"
          >
            {stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8 },
                  },
                }}
                className="group relative bg-white dark:bg-brand-dark p-12 flex flex-col items-center md:items-start transition-colors duration-500 hover:bg-gray-50 dark:hover:bg-brand-dark-blue/20"
              >
                <div className="flex justify-between w-full items-start mb-12">
                  <span
                    className="font-mono text-[10px] opacity-20"
                    aria-hidden="true"
                  >
                    [ METRIC_NODE_0{index + 1} ]
                  </span>
                  <div className="text-brand-accent opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {React.cloneElement(stat.icon, { "aria-hidden": "true" })}
                  </div>
                </div>

                <div className="relative">
                  <p className="font-display text-7xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-none flex items-baseline gap-1">
                    <AnimatedNumber value={stat.value} />
                    <span
                      className="text-4xl md:text-5xl text-brand-accent italic font-light"
                      aria-hidden="true"
                    >
                      {stat.suffix}
                    </span>
                  </p>
                  <span
                    className="absolute -top-6 -left-4 text-9xl font-black opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {stat.value}
                  </span>
                </div>

                <h3 className="mt-8 font-mono text-xs font-bold text-brand-light-blue dark:text-brand-gray tracking-[0.3em] uppercase">
                  {stat.label.replace(/_/g, " ")}
                </h3>

                <p className="sr-only">{stat.description}</p>

                <div
                  className="mt-4 w-full h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden"
                  aria-hidden="true"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                    className="h-full bg-brand-accent/30"
                  />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
