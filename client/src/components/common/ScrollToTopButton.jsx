// client/src/components/common/ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useTheme } from "../../context/ThemeContext.jsx";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isVisible, setIsVisible] = useState(false);

  // --- Animation Hooks ---
  // 1. Get scroll progress of the entire page
  const { scrollYProgress } = useScroll();
  // 2. Add a spring for a smoother progress bar animation
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  // --- Logic to show/hide button ---
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.1) {
        // Show button after scrolling 10% of the page
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [scrollYProgress]);

  // --- Scroll to top function (no changes needed) ---
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
    strokeWidth: "8",
    fill: "transparent",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-16 h-16 rounded-full shadow-lg cursor-pointer z-50
                      flex items-center justify-center group
                      focus:outline-none focus:ring-2 focus:ring-offset-2
                      ${
                        isDark
                          ? "bg-gray-800/50 text-white backdrop-blur-md focus:ring-purple-500 focus:ring-offset-black"
                          : "bg-white/50 text-gray-800 backdrop-blur-md focus:ring-blue-500 focus:ring-offset-white"
                      }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-label="Scroll to top"
        >
          {/* --- Progress Bar SVG --- */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            {/* Background track */}
            <circle
              {...circleProps}
              className={`${
                isDark ? "stroke-gray-700/50" : "stroke-gray-200/80"
              }`}
            />
            {/* Animated progress bar */}
            <motion.circle
              {...circleProps}
              className={`-rotate-90 origin-center ${
                isDark ? "stroke-purple-500" : "stroke-blue-600"
              }`}
              style={{ pathLength }}
            />
          </svg>

          {/* --- Arrow Icon --- */}
          <motion.div
            whileHover={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            <FiArrowUp className="w-6 h-6" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
