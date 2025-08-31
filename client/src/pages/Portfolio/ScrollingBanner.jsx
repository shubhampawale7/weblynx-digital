// client/src/components/Portfolio/ScrollingBanner.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi"; // Using a more on-brand separator icon

// Define the content for the banner
const bannerItems = [
  "Intuitive",
  "Scalable",
  "Performant",
  "Accessible",
  "User-Centric",
  "Clean Code",
];

const ScrollingBanner = () => {
  // We repeat the items to create a seamless, infinite loop
  const repeatedItems = [...bannerItems, ...bannerItems];

  return (
    <section className="bg-white dark:bg-black w-full overflow-hidden">
      {/* The main container is a group to enable pause-on-hover */}
      <div className="group flex flex-col justify-center h-40 md:h-48 bg-brand-dark">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at 50% 50%, hsla(169, 100%, 50%, 0.5), transparent 70%)`,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"></div>
        </div>

        {/* The scrolling content itself */}
        <div className="relative flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12 mx-6">
              <span className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white">
                {item}
              </span>
              {/* This is the visual separator */}
              <FiZap className="text-4xl md:text-5xl text-brand-accent flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingBanner;
