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
  {
    name: "Custom Web Apps",
    Icon: FiCode,
    seo: "MERN stack web application development",
  },
  {
    name: "Mobile Engineering",
    Icon: FiSmartphone,
    seo: "iOS and Android mobile app engineering",
  },
  {
    name: "WordPress CMS",
    Icon: FiPenTool,
    seo: "Custom WordPress theme and plugin development",
  },
  {
    name: "SEO & Growth",
    Icon: FiTrendingUp,
    seo: "Technical SEO and digital growth strategies",
  },
  {
    name: "API Bridges",
    Icon: FiLink,
    seo: "REST and GraphQL API system integration",
  },
  {
    name: "Full Stack Systems",
    Icon: FiLayers,
    seo: "End-to-end full stack software development",
  },
  {
    name: "DevOps & Support",
    Icon: FiSettings,
    seo: "Managed DevOps and proactive system support",
  },
];

const ScrollingBanner = () => {
  // Triple buffered content for seamless ultra-wide looping
  const marqueeContent = [...services, ...services, ...services];

  return (
    <section
      aria-label="Core Service Verticals"
      className="relative w-full overflow-hidden bg-white dark:bg-brand-dark py-12 md:py-20"
    >
      {/* SEMANTIC SEO: Hidden list for crawlers to index service keywords without motion interference */}
      <ul className="sr-only">
        {services.map((s, i) => (
          <li key={i}>{s.seo}</li>
        ))}
      </ul>

      {/* Visual Background Accent */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full" />
      </div>

      {/* The Tilted Ticker Container */}
      <div
        className="relative z-10 py-6 md:py-10 bg-brand-dark border-y border-white/5 shadow-2xl transform -rotate-1 scale-[1.02] backdrop-blur-xl"
        role="marquee"
        aria-live="off"
      >
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex items-center gap-12 md:gap-24"
            animate={{ x: [0, "-33.33%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {marqueeContent.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-6 group"
                role="listitem"
              >
                <div
                  className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-accent transition-colors duration-500"
                  aria-hidden="true"
                >
                  <service.Icon className="w-6 h-6 md:w-8 md:h-8 text-brand-accent animate-pulse" />
                </div>

                <strong className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent stroke-text dark:text-white/20 group-hover:text-white transition-all duration-700">
                  {service.name}
                </strong>

                <FiZap
                  className="text-brand-accent/30 text-2xl md:text-4xl"
                  aria-hidden="true"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

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
