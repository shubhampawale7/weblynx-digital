// client/src/components/common/ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiArrowUp, FiActivity } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [percent, setPercent] = useState(0);

  // --- Animation Hooks ---
  const { scrollYProgress } = useScroll();

  // Create a springy path length for the line animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  // Track the actual percentage for the numeric readout
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.1);
      setPercent(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[998] flex flex-col items-center gap-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Numeric Position Readout */}
          <div className="font-mono text-[10px] text-brand-accent bg-brand-dark/80 backdrop-blur-md border border-brand-accent/20 px-2 py-1 rounded tracking-tighter shadow-xl">
            {percent < 100 ? `pos:${percent}%` : "end_docs"}
          </div>

          <motion.button
            onClick={scrollToTop}
            onMouseEnter={() => {}}
            className="relative w-12 h-16 bg-brand-dark border border-brand-accent/30 flex flex-col items-center justify-center group overflow-hidden transition-colors hover:border-brand-accent"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%)",
            }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Initialize Scroll To Top"
          >
            {/* Background Fill on Hover */}
            <motion.div
              className="absolute inset-0 bg-brand-accent"
              initial={{ y: "100%" }}
              whileHover={{ y: "0%" }}
              transition={{ duration: 0.3, ease: "circOut" }}
            />

            {/* Vertical Progress Line (Surgical Component) */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-brand-accent/10">
              <motion.div
                className="w-full bg-brand-accent shadow-[0_0_10px_#00f5d4]"
                style={{ height: "100%", scaleY, originY: 0 }}
              />
            </div>

            {/* Icons */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <FiArrowUp className="w-5 h-5 text-brand-accent group-hover:text-brand-dark transition-colors duration-300" />
              <FiActivity className="text-[8px] text-brand-accent/40 group-hover:text-brand-dark/40 animate-pulse" />
            </div>

            {/* Technical Corner Accent */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-accent/40" />
          </motion.button>

          {/* Orientation Label (Vertical Desktop Only) */}
          <div className="hidden md:block absolute -left-12 top-1/2 -rotate-90 origin-center opacity-20 pointer-events-none">
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white whitespace-nowrap">
              System_Navigation
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
