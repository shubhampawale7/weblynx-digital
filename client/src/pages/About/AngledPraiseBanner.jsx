// client/src/components/common/AngledPraiseBanner.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiLayers,
  FiUsers,
  FiZap,
  FiMessageSquare,
  FiBarChart2,
} from "react-icons/fi";

const principles = [
  { text: "Pixel-Perfect Design", Icon: FiLayers },
  { text: "User-Centric Philosophy", Icon: FiUsers },
  { text: "Innovative Solutions", Icon: FiZap },
  { text: "Transparent Communication", Icon: FiMessageSquare },
  { text: "Scalable Architecture", Icon: FiBarChart2 },
];

const AngledPraiseBanner = () => {
  const marqueeContent = [...principles, ...principles];

  return (
    // The outer section is now simpler
    <section className="bg-brand-dark w-full overflow-hidden group">
      {/* The inner container is no longer rotated or scaled */}
      <div className="relative flex items-center h-32 md:h-40">
        {/* Background Aurora & Grid */}
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

        {/* Scrolling Content - now pauses on hover via CSS */}
        <div className="absolute flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeContent.map((item, index) => (
            <div key={index} className="flex items-center text-gray-300 mx-10">
              <item.Icon className="w-8 h-8 mr-4 text-brand-accent flex-shrink-0" />
              <span className="font-display text-2xl md:text-4xl font-bold tracking-tight text-white">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AngledPraiseBanner;
