// client/src/components/common/TechStackTicker.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaShopify,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    Icon: FaReact,
    color: "text-sky-400",
    shadow: "shadow-sky-400/50",
  },
  {
    name: "Node.js",
    Icon: FaNodeJs,
    color: "text-green-400",
    shadow: "shadow-green-400/50",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    color: "text-lime-400",
    shadow: "shadow-lime-400/50",
  },
  {
    name: "Express.js",
    Icon: SiExpress,
    color: "text-gray-400",
    shadow: "shadow-gray-400/50",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "text-yellow-400",
    shadow: "shadow-yellow-400/50",
  },
  {
    name: "WordPress",
    Icon: FaWordpress,
    color: "text-blue-400",
    shadow: "shadow-blue-400/50",
  },
  {
    name: "Shopify",
    Icon: FaShopify,
    color: "text-green-400",
    shadow: "shadow-green-400/50",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "text-cyan-400",
    shadow: "shadow-cyan-400/50",
  },
  {
    name: "Figma",
    Icon: FaFigma,
    color: "text-pink-400",
    shadow: "shadow-pink-400/50",
  },
];

const TechStackTicker = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const marqueeContent = [...techStack, ...techStack, ...techStack];

  return (
    <section className={`py-20 sm:py-24 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Technologies We Master
          </h2>
          <p className="text-lg md:text-xl mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Leveraging a modern, powerful, and scalable tech stack to bring your
            vision to life.
          </p>
        </motion.div>

        <div className="mt-16 w-full overflow-hidden relative">
          {/* The scrolling container */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["0%", "-66.66%"], // Moves 2/3 of the total width for a 3x list
            }}
            transition={{
              ease: "linear",
              duration: 60,
              repeat: Infinity,
            }}
          >
            {marqueeContent.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center flex-shrink-0 px-6 py-4 rounded-full border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 transition-all duration-300"
                whileHover={{
                  scale: 1.1,
                  boxShadow: `0px 0px 20px ${tech.color
                    .replace("text-", "")
                    .replace("-400", "")}-500/50`,
                  borderColor: tech.color.replace("text-", "border-"),
                }}
              >
                <tech.Icon className={`w-7 h-7 mr-3 ${tech.color}`} />
                <span className="text-xl font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Left and Right fade effects */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-32 pointer-events-none bg-gradient-to-r ${
              isDark ? "from-black" : "from-white"
            } to-transparent`}
          />
          <div
            className={`absolute right-0 top-0 bottom-0 w-32 pointer-events-none bg-gradient-to-l ${
              isDark ? "from-black" : "from-white"
            } to-transparent`}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStackTicker;
