// client/src/components/common/FloatingWhatsAppButton.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "+919518364400";
  const whatsappMessage = encodeURIComponent(
    "Hello Weblynx Infotech! System inquiry initialized. Ready to discuss project parameters.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 z-[999]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex items-center bg-brand-dark border border-brand-accent/30 p-1 overflow-hidden transition-all duration-500 hover:border-brand-accent"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)",
            }}
          >
            {/* Hover Background Fill */}
            <motion.div
              className="absolute inset-0 bg-brand-accent"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "0%" : "-100%" }}
              transition={{ duration: 0.3, ease: "circOut" }}
            />

            {/* Icon Container */}
            <div
              className={`relative z-10 flex items-center justify-center w-12 h-12 transition-colors duration-300 ${isHovered ? "text-brand-dark" : "text-brand-accent"}`}
            >
              <FaWhatsapp size={24} />
            </div>

            {/* Technical Metadata Reveal */}
            <motion.div
              className="relative z-10 flex flex-col pr-6 pl-2"
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: isHovered ? "auto" : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <span
                  className={`font-mono text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ${isHovered ? "text-brand-dark" : "text-brand-accent"}`}
                >
                  Direct_Uplink
                </span>
                <FiActivity
                  className={`text-xs animate-pulse ${isHovered ? "text-brand-dark" : "text-brand-accent"}`}
                />
              </div>
              <span
                className={`text-[8px] font-mono uppercase tracking-[0.2em] whitespace-nowrap opacity-60 ${isHovered ? "text-brand-dark" : "text-white"}`}
              >
                Status: Verified
              </span>
            </motion.div>

            {/* Corner Decorative Notch Accent */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-brand-accent/20 group-hover:bg-brand-dark/20 transition-colors" />
          </motion.a>

          {/* External Label (Optional - Desktop only) */}
          <div className="absolute -top-6 left-0 hidden md:block opacity-20 group-hover:opacity-100 transition-opacity">
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white">
              Comm_Node:01
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsAppButton;
