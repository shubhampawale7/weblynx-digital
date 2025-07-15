import React from "react";
import { motion } from "framer-motion";

// Define the content for the banner
const bannerItems = [
  "Intuitive",
  "Scalable",
  "Performant",
  "Accessible",
  "User-Centric",
  "Clean Code",
];

const ScrollingBanner = ({ isDark }) => {
  // We repeat the items to create a seamless, infinite loop
  const repeatedItems = React.useMemo(
    () => Array(5).fill(bannerItems).flat(),
    []
  );

  return (
    <section className="py-16 md:py-24">
      <div className="w-full overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex items-center gap-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 70, // Adjust this value to change the speed
              ease: "linear",
            },
          }}
        >
          {/* Map over the repeated items to create the scrolling content */}
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span
                className={`text-5xl md:text-7xl font-black tracking-tighter ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {item}
              </span>
              {/* This is the visual separator */}
              <span
                className={`text-3xl md:text-4xl ${
                  isDark ? "text-purple-400" : "text-blue-600"
                }`}
              >
                &#x2726;
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollingBanner;
