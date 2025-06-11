// client/src/components/common/ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For smooth appearance/disappearance
import { useTheme } from "../../context/ThemeContext.jsx";

const ScrollToTopButton = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    // Only update state if visibility changes to prevent unnecessary re-renders
    if (window.pageYOffset > 300 && !isVisible) {
      setIsVisible(true);
    } else if (window.pageYOffset <= 300 && isVisible) {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [isVisible]); // Added isVisible to dependency array to optimize toggleVisibility calls

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 p-3 sm:p-4 rounded-full shadow-lg cursor-pointer z-50
                      ${
                        isDark
                          ? "bg-purple-700 text-white hover:bg-purple-600"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }
                      transition-colors duration-300 focus:outline-none focus:ring-2
                      ${
                        isDark ? "focus:ring-purple-500" : "focus:ring-blue-500"
                      }`}
          initial={{ y: 100, x: 0 }} // Start lower and hidden
          animate={{ y: 0, x: 0 }} // Slide up into view
          exit={{ y: 100, x: 0 }} // Slide down to exit
          transition={{ duration: 0.3, ease: "easeInOut" }}
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6" // Adjusted icon size
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
