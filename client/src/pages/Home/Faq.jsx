// client/src/components/Home/Faq.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPlus,
  FiMinus,
  FiTerminal,
  FiBookOpen,
  FiActivity,
} from "react-icons/fi";

const faqData = [
  {
    id: "PRO-01",
    question: "What is your development protocol like?",
    answer:
      "Our architectural process is collaborative and data-driven. We execute through a multi-stage roadmap: Discovery & Strategic Mapping, High-Fidelity UI/UX Prototyping, Agile Development & Stress Testing, and Final Cloud Deployment. Every stage is logged and transparent.",
  },
  {
    id: "CST-02",
    question: "How is project investment calculated?",
    answer:
      "Resource allocation is based on project scope, architectural complexity, and feature density. Following a technical audit, we provide a fixed-price itemized technical specification. We optimize for long-term ROI and system stability over initial low-cost shortcuts.",
  },
  {
    id: "TML-03",
    question: "What are the standard deployment windows?",
    answer:
      "Standard engineering cycles range from 6 to 12 weeks. High-stakes e-commerce platforms or complex SaaS builds require more intensive hardening phases. We provide a real-time project milestone tracker to monitor velocity.",
  },
  {
    id: "SUP-04",
    question: "What post-launch maintenance do you provide?",
    answer:
      "We offer proactive 'Sentinel' support packages including 24/7 uptime monitoring, security patching, and core performance tuning. We act as your external technical department to ensure zero-latency operations.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default first item open

  return (
    <section className="bg-white dark:bg-brand-dark py-24 md:py-40 border-t border-gray-100 dark:border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Technical Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-brand-accent"></span>
              <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                Knowledge_Base
              </span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-[0.85] uppercase italic">
              Common <br />{" "}
              <span className="font-display text-6xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-[0.85] uppercase italic">
                Queries.
              </span>
            </h2>
          </motion.div>

          <div className="hidden lg:flex flex-col items-end opacity-20">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
              <FiTerminal /> system_ready
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
              <FiActivity /> latency: 14ms
            </div>
          </div>
        </div>

        {/* Technical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[2.5rem] overflow-hidden">
          {/* Question Sidebar */}
          <div className="lg:col-span-5 bg-white dark:bg-brand-dark">
            {faqData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-8 md:p-10 transition-all duration-500 border-b border-gray-100 dark:border-white/5 last:border-0 group flex items-start gap-6 ${
                  activeIndex === index
                    ? "bg-brand-accent/5 dark:bg-brand-accent/5"
                    : "hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
              >
                <span
                  className={`font-mono text-xs mt-1 transition-colors ${activeIndex === index ? "text-brand-accent" : "opacity-20"}`}
                >
                  [{item.id}]
                </span>
                <h3
                  className={`text-xl md:text-2xl font-bold tracking-tight uppercase transition-all ${
                    activeIndex === index
                      ? "text-brand-dark dark:text-white"
                      : "opacity-40 group-hover:opacity-100"
                  }`}
                >
                  {item.question}
                </h3>
              </button>
            ))}
          </div>

          {/* Answer Display Engine */}
          <div className="lg:col-span-7 bg-gray-50/50 dark:bg-brand-dark-blue/10 backdrop-blur-3xl relative min-h-[400px] flex items-center p-8 md:p-20">
            {/* Background Decorative Icon */}
            <div className="absolute top-10 right-10 opacity-[0.03] dark:opacity-[0.05]">
              <FiBookOpen size={200} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[1px] bg-brand-accent"></div>
                  <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em]">
                    Response_Output
                  </span>
                </div>

                <p className="text-2xl md:text-3xl font-light text-brand-light-blue dark:text-brand-gray leading-relaxed mb-10">
                  {faqData[activeIndex].answer}
                </p>

                <div className="flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-brand-dark bg-brand-accent/20"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono opacity-30 uppercase tracking-widest">
                    Team Verified Solution
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1.5px currentColor;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Faq;
