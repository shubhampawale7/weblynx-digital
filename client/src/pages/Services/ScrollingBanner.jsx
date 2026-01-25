// client/src/components/Home/ScrollingBanner.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiTrendingUp,
  FiLink,
  FiLayers,
  FiSettings,
  FiZap,
} from "react-icons/fi";

const services = [
  { name: "Custom Web Apps", Icon: FiCode },
  { name: "Mobile Engineering", Icon: FiSmartphone },
  { name: "WordPress CMS", Icon: FiPenTool },
  { name: "SEO & Growth", Icon: FiTrendingUp },
  { name: "API Bridges", Icon: FiLink },
  { name: "Full Stack Systems", Icon: FiLayers },
  { name: "DevOps & Support", Icon: FiSettings },
];

const ScrollingBanner = () => {
  // Triple the content to ensure zero gaps on ultra-wide screens
  const marqueeContent = [...services, ...services, ...services];

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-brand-dark py-12 md:py-20">
      {/* Visual Background Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full" />
      </div>

      {/* The Tilted Ticker Container */}
      <div className="relative z-10 py-6 md:py-10 bg-brand-dark border-y border-white/5 shadow-2xl transform -rotate-1 scale-[1.02] backdrop-blur-xl">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex items-center gap-12 md:gap-24"
            animate={{ x: [0, "-33.33%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Adjust speed: higher = slower
                ease: "linear",
              },
            }}
          >
            {marqueeContent.map((service, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-accent transition-colors duration-500">
                  <service.Icon className="w-6 h-6 md:w-8 md:h-8 text-brand-accent animate-pulse" />
                </div>

                <span className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent stroke-text dark:text-white/20 group-hover:text-white transition-all duration-700">
                  {service.name}
                </span>

                <FiZap className="text-brand-accent/30 text-2xl md:text-4xl" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CSS for the Hollow Text Effect */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          color: transparent;
        }
        @media (max-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </section>
  );
};

export default ScrollingBanner;
