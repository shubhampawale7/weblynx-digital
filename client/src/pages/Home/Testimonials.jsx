// client/src/components/Home/Testimonials.jsx
import React, { useState, useEffect } from "react";
import Seo from "../../components/common/Seo.jsx";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiActivity,
  FiTerminal,
} from "react-icons/fi";

const testimonialsData = [
  {
    id: "01",
    name: "Priya Sharma",
    company: "Aakash Textiles",
    quote:
      "Weblynx Infotech was a game-changer. They built a custom architecture that effectively streamlined our entire global operation.",
    avatar: "PS",
  },
  {
    id: "02",
    name: "Vikram Singh",
    company: "Surya Logistics",
    quote:
      "The technical depth here is unmatched. They handled complex API bridges seamlessly, delivering a zero-latency system.",
    avatar: "VS",
  },
  {
    id: "03",
    name: "Anjali Mehta",
    company: "The Chai Spot",
    quote:
      "They engineered a high-performance CMS engine for us. The design is surgical, and our conversion rates have spiked.",
    avatar: "AM",
  },
  {
    id: "04",
    name: "Rohan Desai",
    company: "NextGen Edu",
    quote:
      "For scalable MERN stack infrastructure, Weblynx is the gold standard. Clean-room code and on-time deployment.",
    avatar: "RD",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative bg-white dark:bg-brand-dark py-24 md:py-40 overflow-hidden border-t border-gray-100 dark:border-white/5">
      <Seo title="Case Validations | Weblynx Infotech" />

      {/* Technical Background Element */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[25vw] leading-none uppercase">
          TRUST
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 mb-8">
            <FiActivity className="text-brand-accent animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-accent">
              Partner_Feedback // Verified_Execution
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-none uppercase italic">
            Client{" "}
            <span className="font-display text-5xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-none uppercase italic">
              Validations.
            </span>
          </h2>
        </div>

        {/* Main Carousel Module */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-gray-50 dark:bg-brand-dark-blue/20 rounded-[3rem] border border-gray-100 dark:border-white/5 overflow-hidden backdrop-blur-xl shadow-2xl">
            {/* Nav Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 flex justify-between z-30 pointer-events-none">
              <button
                onClick={prev}
                className="p-4 rounded-full bg-white/10 border border-white/10 text-white hover:bg-brand-accent hover:text-brand-dark transition-all pointer-events-auto shadow-xl"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="p-4 rounded-full bg-white/10 border border-white/10 text-white hover:bg-brand-accent hover:text-brand-dark transition-all pointer-events-auto shadow-xl"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center p-12 md:p-24 text-center"
              >
                <FiTerminal className="text-brand-accent text-3xl mb-8 opacity-20" />

                <blockquote className="text-2xl md:text-4xl font-bold dark:text-white tracking-tight leading-tight mb-12 italic">
                  "{testimonialsData[index].quote}"
                </blockquote>

                <div className="flex items-center gap-6 text-left">
                  <div className="w-16 h-16 rounded-2xl bg-brand-accent flex items-center justify-center text-brand-dark font-black text-xl shadow-lg">
                    {testimonialsData[index].avatar}
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-brand-accent uppercase tracking-widest mb-1">
                      Authenticated Partner
                    </h4>
                    <h3 className="text-xl font-bold dark:text-white uppercase">
                      {testimonialsData[index].name}
                    </h3>
                    <p className="text-sm dark:text-brand-gray opacity-40 font-mono uppercase tracking-tighter">
                      {testimonialsData[index].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Corner Decorative Code Snippet */}
            <div className="absolute bottom-6 right-10 font-mono text-[8px] opacity-10 hidden md:block select-none pointer-events-none">
              <code>
                {`{ status: "verified", id: "${testimonialsData[index].id}", type: "partner_review" }`}
              </code>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-4 mt-12">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all duration-700 ${
                  index === i
                    ? "w-16 bg-brand-accent shadow-[0_0_10px_rgba(0,245,212,0.5)]"
                    : "w-8 bg-gray-200 dark:bg-white/10"
                }`}
              />
            ))}
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

export default Testimonials;
