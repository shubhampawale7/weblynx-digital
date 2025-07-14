// client/src/components/common/ValuesBanner.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  FiZap,
  FiUsers,
  FiBarChart2,
  FiLayers,
  FiShield,
  FiClock,
} from "react-icons/fi";

const values = [
  { text: "Innovation", Icon: FiZap },
  { text: "Collaboration", Icon: FiUsers },
  { text: "Performance", Icon: FiBarChart2 },
  { text: "Quality Craftsmanship", Icon: FiLayers },
  { text: "Security", Icon: FiShield },
  { text: "Reliability", Icon: FiClock },
];

const ValuesBanner = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // The content is only needed once for this animation type
  const animation = {
    x: ["-25%", "25%"], // The range of motion
    transition: {
      ease: "easeInOut",
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror", // This creates the back-and-forth effect
    },
  };

  return (
    <section
      className={`py-12 border-y ${
        isDark ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="w-full overflow-hidden">
        <motion.div className="flex whitespace-nowrap" animate={animation}>
          {/* Render the list multiple times to ensure it fills the screen */}
          {[...values, ...values, ...values].map((value, index) => (
            <div key={index} className="flex items-center mx-6">
              <value.Icon className="w-5 h-5 mr-3 text-purple-500 dark:text-purple-400" />
              <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                {value.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesBanner;
