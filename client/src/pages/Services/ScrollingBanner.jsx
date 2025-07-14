// client/src/components/Home/ScrollingBanner.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiTrendingUp,
  FiLink,
  FiLayers,
  FiSettings,
} from "react-icons/fi";

// UPDATED: Data now includes a unique borderColor for each service
const services = [
  {
    name: "Custom Web Applications",
    Icon: FiCode,
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Mobile App Development",
    Icon: FiSmartphone,
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
  },
  {
    name: "WordPress Development",
    Icon: FiPenTool,
    color: "text-sky-400",
    borderColor: "border-sky-500/30",
  },
  {
    name: "SEO & Digital Marketing",
    Icon: FiTrendingUp,
    color: "text-green-400",
    borderColor: "border-green-500/30",
  },
  {
    name: "API Integration",
    Icon: FiLink,
    color: "text-pink-400",
    borderColor: "border-pink-500/30",
  },
  {
    name: "Full Stack Development",
    Icon: FiLayers,
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
  },
  {
    name: "Support & Management",
    Icon: FiSettings,
    color: "text-slate-400",
    borderColor: "border-slate-500/30",
  },
];

const ScrollingBanner = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isHovered, setIsHovered] = useState(false);

  const marqueeContent = [...services, ...services];

  const animation = {
    x: "-50%",
    transition: {
      ease: "linear",
      duration: 20, // UPDATED: Increased speed
      repeat: Infinity,
    },
  };

  return (
    // UPDATED: Brighter background for better contrast
    <section className={`py-12 ${isDark ? "bg-gray-900" : "bg-slate-100"}`}>
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: "0%" }}
          animate={isHovered ? {} : animation}
        >
          {marqueeContent.map((service, index) => (
            <div
              key={index}
              // UPDATED: Increased border thickness and added dynamic color
              className={`group flex items-center mx-4 px-6 py-4 rounded-full border-2 bg-white/5 dark:bg-white/5 shadow-md backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 transition-colors duration-300 ${service.borderColor}`}
            >
              <service.Icon
                className={`w-6 h-6 mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${service.color}`}
              />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
                {service.name}
              </span>
            </div>
          ))}
        </motion.div>

        <div
          className={`absolute left-0 top-0 bottom-0 w-32 pointer-events-none
            ${
              isDark
                ? "bg-gradient-to-r from-gray-900 to-transparent"
                : "bg-gradient-to-r from-slate-100 to-transparent"
            }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-32 pointer-events-none
            ${
              isDark
                ? "bg-gradient-to-l from-gray-900 to-transparent"
                : "bg-gradient-to-l from-slate-100 to-transparent"
            }`}
        />
      </div>
    </section>
  );
};

export default ScrollingBanner;
