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
    <section
      aria-labelledby="testimonials-heading"
      className="relative bg-white dark:bg-brand-dark py-24 md:py-40 overflow-hidden border-t border-gray-100 dark:border-white/5"
    >
      <Seo
        title="Client Validations | Case Proof"
        description="Verified feedback from global partners. Read how Weblynx Infotech deploys surgical MERN stack solutions and custom software architecture."
      />

      {/* Technical Background Element - Hidden from bots */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[25vw] leading-none uppercase">
          TRUST
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 mb-8">
            <FiActivity
              className="text-brand-accent animate-pulse"
              aria-hidden="true"
            />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-accent">
              Partner_Feedback // Verified_Execution
            </span>
          </div>
          <h2
            id="testimonials-heading"
            className="font-display text-5xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-none uppercase italic"
          >
            Client <span className="text-brand-accent">Validations.</span>
          </h2>
        </header>

        {/* Main Carousel Module */}
        <div className="relative max-w-5xl mx-auto">
          <div
            className="relative aspect-[16/9] md:aspect-[21/9] bg-gray-50 dark:bg-brand-dark-blue/20 rounded-[3rem] border border-gray-100 dark:border-white/5 overflow-hidden backdrop-blur-xl shadow-2xl"
            aria-live="polite"
          >
            {/* Nav Controls */}
            <nav className="absolute top-1/2 -translate-y-1/2 left-6 right-6 flex justify-between z-30 pointer-events-none">
              <button
                onClick={prev}
                aria-label="Previous Testimonial"
                className="p-4 rounded-full bg-white/10 border border-white/10 text-white hover:bg-brand-accent hover:text-brand-dark transition-all pointer-events-auto shadow-xl"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                aria-label="Next Testimonial"
                className="p-4 rounded-full bg-white/10 border border-white/10 text-white hover:bg-brand-accent hover:text-brand-dark transition-all pointer-events-auto shadow-xl"
              >
                <FiChevronRight size={24} />
              </button>
            </nav>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center p-12 md:p-24 text-center"
              >
                <FiTerminal
                  className="text-brand-accent text-3xl mb-8 opacity-20"
                  aria-hidden="true"
                />

                <blockquote className="text-2xl md:text-4xl font-bold dark:text-white tracking-tight leading-tight mb-12 italic">
                  <q className="before:content-none after:content-none">
                    {testimonialsData[index].quote}
                  </q>
                </blockquote>

                <figcaption className="flex items-center gap-6 text-left">
                  <div
                    className="w-16 h-16 rounded-2xl bg-brand-accent flex items-center justify-center text-brand-dark font-black text-xl shadow-lg"
                    aria-hidden="true"
                  >
                    {testimonialsData[index].avatar}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest mb-1 block">
                      Authenticated Partner
                    </span>
                    <h3 className="text-xl font-bold dark:text-white uppercase leading-none mb-1">
                      {testimonialsData[index].name}
                    </h3>
                    <cite className="not-italic text-sm dark:text-brand-gray opacity-40 font-mono uppercase tracking-tighter">
                      {testimonialsData[index].company}
                    </cite>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {/* Corner Code - Purely Decorative */}
            <div
              className="absolute bottom-6 right-10 font-mono text-[8px] opacity-10 hidden md:block select-none pointer-events-none"
              aria-hidden="true"
            >
              <code>
                {`{ status: "verified", node: "0${testimonialsData[index].id}", type: "partner_review" }`}
              </code>
            </div>
          </div>

          {/* Progress Indicators */}
          <nav
            className="flex justify-center gap-4 mt-12"
            aria-label="Carousel Pagination"
          >
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to validation ${i + 1}`}
                aria-current={index === i ? "true" : "false"}
                className={`h-1 rounded-full transition-all duration-700 ${
                  index === i
                    ? "w-16 bg-brand-accent shadow-[0_0_10px_rgba(0,245,212,0.5)]"
                    : "w-8 bg-gray-200 dark:bg-white/10"
                }`}
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
