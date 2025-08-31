// client/src/components/common/ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // --- Animation Hooks ---
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  // --- Logic to show/hide button ---
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // --- SVG Circle Properties ---
  const circleProps = {
    cx: "50",
    cy: "50",
    r: "40",
    strokeWidth: "6", // Slightly thinner for a sleeker look
    fill: "transparent",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 rounded-full shadow-lg z-50
                     flex items-center justify-center group
                     bg-brand-dark-blue/80 backdrop-blur-sm border border-brand-light-blue/20
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-accent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          {/* --- Progress Bar SVG --- */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            {/* Background track */}
            <circle {...circleProps} className="stroke-brand-light-blue/20" />
            {/* Animated progress bar */}
            <motion.circle
              {...circleProps}
              className="-rotate-90 origin-center stroke-brand-accent"
              style={{ pathLength }}
            />
          </svg>

          {/* --- Arrow Icon --- */}
          <FiArrowUp className="w-6 h-6 text-brand-gray group-hover:text-white transition-colors duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
