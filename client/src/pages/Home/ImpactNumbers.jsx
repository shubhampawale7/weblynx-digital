// client/src/components/Home/ImpactNumbers.jsx
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import { FiActivity, FiGlobe, FiTarget } from "react-icons/fi";

const stats = [
  { value: 10, suffix: "+", label: "SYSTEMS_DEPLOYED", icon: <FiGlobe /> },
  { value: 99, suffix: "%", label: "CLIENT_RETENTION", icon: <FiTarget /> },
  { value: 100, suffix: "%", label: "UPTIME_COMMITMENT", icon: <FiActivity /> },
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

  return <span ref={ref}>0</span>;
};

const ImpactNumbers = () => {
  return (
    <section className="relative bg-white dark:bg-brand-dark py-24 md:py-32 overflow-hidden border-y border-gray-100 dark:border-white/5">
      {/* Background Decorative Data Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none font-mono text-[10px] grid grid-cols-6 gap-10 p-10 overflow-hidden select-none">
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
          <div className="flex items-center gap-4 mb-16 opacity-40">
            <span className="h-px flex-grow bg-current"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em]">
              Performance_Metrics_v4.0
            </span>
            <span className="h-px flex-grow bg-current"></span>
          </div>

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
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                }}
                className="group relative bg-white dark:bg-brand-dark p-12 flex flex-col items-center md:items-start transition-colors duration-500 hover:bg-gray-50 dark:hover:bg-brand-dark-blue/20"
              >
                {/* Visual ID Label */}
                <div className="flex justify-between w-full items-start mb-12">
                  <span className="font-mono text-[10px] opacity-20">
                    [ DATA_POINT_0{index + 1} ]
                  </span>
                  <div className="text-brand-accent opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {stat.icon}
                  </div>
                </div>

                {/* The Stat */}
                <div className="relative">
                  <h3 className="font-display text-7xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-none flex items-baseline gap-1">
                    <AnimatedNumber value={stat.value} />
                    <span className="text-4xl md:text-5xl text-brand-accent italic font-light">
                      {stat.suffix}
                    </span>
                  </h3>
                  {/* Ghost Number for Depth */}
                  <span className="absolute -top-6 -left-4 text-9xl font-black opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none">
                    {stat.value}
                  </span>
                </div>

                <p className="mt-8 font-mono text-xs font-bold text-brand-light-blue dark:text-brand-gray tracking-[0.3em] uppercase">
                  {stat.label}
                </p>

                {/* Interactive Scanline Bar */}
                <div className="mt-4 w-full h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                    className="h-full bg-brand-accent/30"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
