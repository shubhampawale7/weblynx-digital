// client/src/components/common/AngledPraiseBanner.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  FiLayers,
  FiUsers,
  FiZap,
  FiMessageSquare,
  FiBarChart2,
} from "react-icons/fi";

// UPDATED: Content is now focused on company values and philosophy
const principles = [
  { text: "Pixel-Perfect Design", Icon: FiLayers },
  { text: "User-Centric Philosophy", Icon: FiUsers },
  { text: "Innovative Solutions", Icon: FiZap },
  { text: "Transparent Communication", Icon: FiMessageSquare },
  { text: "Scalable Architecture", Icon: FiBarChart2 },
];

const AngledPraiseBanner = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isHovered, setIsHovered] = useState(false);

  // The content is duplicated for a seamless loop
  const marqueeContent = [...principles, ...principles];

  const animation = {
    x: ["0%", "-50%"],
    transition: { ease: "linear", duration: 35, repeat: Infinity },
  };

  return (
    <section
      className="relative h-48 md:h-64 w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Wave Layers */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ y: ["-5%", "5%", "-5%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <div
          className={`absolute -bottom-1/2 w-[200%] h-full rounded-[100%] ${
            isDark ? "bg-gray-900" : "bg-blue-50"
          }`}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ y: ["5%", "-5%", "5%"], x: ["-5%", "5%", "-5%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <div
          className={`absolute -bottom-1/2 w-[200%] h-full rounded-[100%] ${
            isDark ? "bg-purple-900/20" : "bg-blue-100/50"
          }`}
        />
      </motion.div>

      {/* Scrolling Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: "0%" }}
          // Pauses animation on hover by conditionally applying the animation
          animate={isHovered ? {} : animation}
        >
          {marqueeContent.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-gray-700 dark:text-gray-300 mx-10"
            >
              <item.Icon className="w-7 h-7 mr-4 text-purple-500 dark:text-purple-400 flex-shrink-0" />
              <span className="text-2xl md:text-4xl font-bold tracking-tight">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AngledPraiseBanner;
