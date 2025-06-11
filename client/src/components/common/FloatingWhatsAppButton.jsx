// client/src/components/common/FloatingWhatsAppButton.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext.jsx";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // New state for hover effect

  const whatsappNumber = "+919518364400";
  const whatsappMessage = encodeURIComponent(
    "Hello Weblynx! I'd like to inquire about your services. Can we chat?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const toggleVisibility = () => {
    if (window.pageYOffset > 400 && !isVisible) {
      setIsVisible(true);
    } else if (window.pageYOffset <= 400 && isVisible) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [isVisible]);

  // Framer Motion variants for the text bubble
  const textBubbleVariants = {
    hidden: { opacity: 0, x: 20 }, // Starts slightly right and transparent
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-8 z-50 flex items-center"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onMouseEnter={() => setIsHovered(true)} // Set hovered state
          onMouseLeave={() => setIsHovered(false)} // Clear hovered state
        >
          {/* Text Bubble */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className={`mr-3 p-2 text-sm rounded-lg whitespace-nowrap shadow-md
                            ${
                              isDark
                                ? "bg-gray-700 text-white"
                                : "bg-white text-gray-800"
                            }`}
                variants={textBubbleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                Chat with us!
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 sm:p-4 rounded-full shadow-lg cursor-pointer
                        flex items-center justify-center text-white
                        ${
                          isDark
                            ? "bg-green-700 hover:bg-green-600"
                            : "bg-green-500 hover:bg-green-600"
                        }
                        transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
                        ${
                          isDark
                            ? "focus:ring-green-400 focus:ring-offset-gray-900"
                            : "focus:ring-green-400 focus:ring-offset-white"
                        }`}
            aria-label="Chat with us on WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsAppButton;
