// client/src/components/Portfolio/ScrollingBanner.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

const bannerItems = [
  { text: "MERN Stack", seo: "Full-stack MERN engineering" },
  { text: "Scalable", seo: "Scalable cloud infrastructure" },
  { text: "Precision", seo: "Pixel-perfect precision design" },
  { text: "Intuitive UI", seo: "User-centric interface design" },
  { text: "Performant", seo: "High-performance software optimization" },
  { text: "Clean Code", seo: "Maintainable clean-room code standards" },
  { text: "User-Centric", seo: "Conversion-focused user experiences" },
];

const ScrollingBanner = () => {
  // Triple items for infinite seamless flow
  const repeatedItems = [...bannerItems, ...bannerItems, ...bannerItems];

  return (
    <section
      aria-label="Engineering Quality Signals"
      className="relative w-full py-12 md:py-20 bg-white dark:bg-brand-dark overflow-hidden"
    >
      {/* SEMANTIC SEO: Hidden list for crawlers to index technical values */}
      <ul className="sr-only">
        {bannerItems.map((item, i) => (
          <li key={i}>{item.seo}</li>
        ))}
      </ul>

      {/* Soft Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-light-blue/10 blur-[120px] rounded-full" />
      </div>

      {/* The Banner Container */}
      <div
        className="relative border-y border-gray-100 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-sm py-8 md:py-12 transform -rotate-1 scale-105"
        role="marquee"
        aria-live="off"
      >
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24"
            animate={{ x: [0, "-33.33%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, // Slightly slower for better readability
                ease: "linear",
              },
            }}
          >
            {repeatedItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-12 md:gap-24"
                role="listitem"
              >
                <strong className="font-display text-5xl md:text-8xl font-black tracking-[0.15em] uppercase text-transparent stroke-text dark:text-white/10 dark:hover:text-brand-accent transition-all duration-500 cursor-default">
                  {item.text}
                </strong>
                <div className="relative" aria-hidden="true">
                  <FiZap className="text-3xl md:text-5xl text-brand-accent opacity-50" />
                  <div className="absolute inset-0 text-brand-accent blur-md opacity-40 animate-pulse">
                    <FiZap size="100%" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.1);
        }
        @media (prefers-color-scheme: dark) {
          .stroke-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
          }
        }
      `}</style>
    </section>
  );
};

export default ScrollingBanner;
