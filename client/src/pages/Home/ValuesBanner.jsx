// client/src/components/common/ValuesBanner.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiZap,
  FiUsers,
  FiBarChart2,
  FiLayers,
  FiShield,
  FiClock,
  FiTarget,
} from "react-icons/fi";

const values = [
  {
    text: "SYSTEM_INNOVATION",
    Icon: FiZap,
    code: "0x7F",
    description: "Advanced MERN stack architectural innovation.",
  },
  {
    text: "GLOBAL_COLLABORATION",
    Icon: FiUsers,
    code: "0x4A",
    description: "Seamless partnership with global enterprise brands.",
  },
  {
    text: "PEAK_PERFORMANCE",
    Icon: FiBarChart2,
    code: "0xCC",
    description: "Zero-latency systems optimized for peak speed.",
  },
  {
    text: "ELITE_ENGINEERING",
    Icon: FiLayers,
    code: "0x12",
    description: "Surgical code quality and scalable infrastructure.",
  },
  {
    text: "HARDENED_SECURITY",
    Icon: FiShield,
    code: "0x99",
    description: "End-to-end encryption and cybersecurity standards.",
  },
  {
    text: "INFRA_RELIABILITY",
    Icon: FiClock,
    code: "0xEE",
    description: "High-availability cloud deployment and reliability.",
  },
];

const ValuesBanner = () => {
  // Triple the items for absolute seamlessness
  const marqueeContent = [...values, ...values, ...values];

  return (
    <section
      aria-label="Agency Core Values and Engineering Standards"
      className="relative py-8 bg-brand-accent overflow-hidden shadow-[0_0_50px_rgba(0,245,212,0.3)]"
    >
      {/* Semantic Keyword Anchor for Crawlers */}
      <div className="sr-only">
        {values.map((v) => (
          <p key={v.text}>
            {v.text}: {v.description}
          </p>
        ))}
      </div>

      {/* Surgical Scanline Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px]"
        aria-hidden="true"
      />

      <div className="flex whitespace-nowrap" role="marquee" aria-live="off">
        <motion.div
          className="flex items-center"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {marqueeContent.map((item, index) => (
            <div
              key={index}
              className="flex items-center group px-12"
              role="listitem"
            >
              {/* Technical Indicator */}
              <div
                className="flex flex-col items-center mr-8 opacity-40"
                aria-hidden="true"
              >
                <span className="font-mono text-[8px] font-bold text-brand-dark leading-none">
                  {item.code}
                </span>
                <div className="h-4 w-[1px] bg-brand-dark my-1" />
                <FiTarget className="text-[8px] text-brand-dark" />
              </div>

              <div className="flex items-center gap-5">
                <div
                  className="p-2 bg-brand-dark/10 rounded-lg group-hover:bg-brand-dark group-hover:text-brand-accent transition-colors duration-500"
                  aria-hidden="true"
                >
                  <item.Icon className="w-5 h-5" />
                </div>

                <strong className="font-display text-4xl md:text-5xl font-black tracking-tighter text-brand-dark uppercase transition-all duration-500 group-hover:italic">
                  {item.text.replace(/_/g, " ")}
                </strong>
              </div>

              {/* Secondary Technical Divider */}
              <div className="ml-12 flex items-center gap-3" aria-hidden="true">
                <span className="font-display text-4xl md:text-5xl font-black tracking-tighter text-transparent stroke-text opacity-10 uppercase">
                  WEBLYNX_OS
                </span>
                <div className="w-2 h-2 bg-brand-dark/20 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #1a1a1a;
          color: transparent;
          font-family: inherit;
        }
      `}</style>
    </section>
  );
};

export default ValuesBanner;
