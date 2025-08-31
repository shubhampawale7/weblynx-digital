// client/src/components/common/FloatingWhatsAppButton.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "+919518364400";
  const whatsappMessage = encodeURIComponent(
    "Hello Weblynx Infotech! I'd like to inquire about your services. Can we chat?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Effect to show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Framer Motion variants for the expanding pill and text
  const buttonVariants = {
    initial: { width: "56px", borderRadius: "100%" },
    hover: { width: "210px", borderRadius: "9999px" },
  };

  const textVariants = {
    initial: { opacity: 0, x: -10, width: 0 },
    hover: {
      opacity: 1,
      x: 0,
      width: "auto",
      transition: { delay: 0.1, duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="flex items-center justify-start h-14 px-4 overflow-hidden cursor-pointer shadow-lg
                       bg-brand-accent hover:bg-brand-accent-hover 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-accent
                       dark:shadow-brand-accent/20"
            variants={buttonVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaWhatsapp className="w-7 h-7 text-brand-dark flex-shrink-0" />

            <motion.span
              variants={textVariants}
              className="ml-2 text-base font-semibold text-brand-dark whitespace-nowrap"
            >
              Chat with us!
            </motion.span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsAppButton;
