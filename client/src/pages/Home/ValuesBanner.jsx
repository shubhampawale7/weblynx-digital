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
  FiCpu,
  FiTarget,
} from "react-icons/fi";

const values = [
  { text: "SYSTEM_INNOVATION", Icon: FiZap, code: "0x7F" },
  { text: "GLOBAL_COLLABORATION", Icon: FiUsers, code: "0x4A" },
  { text: "PEAK_PERFORMANCE", Icon: FiBarChart2, code: "0xCC" },
  { text: "ELITE_ENGINEERING", Icon: FiLayers, code: "0x12" },
  { text: "HARDENED_SECURITY", Icon: FiShield, code: "0x99" },
  { text: "INFRA_RELIABILITY", Icon: FiClock, code: "0xEE" },
];

const ValuesBanner = () => {
  // Triple the items for absolute seamlessness
  const marqueeContent = [...values, ...values, ...values];

  return (
    <section className="relative py-8 bg-brand-accent overflow-hidden shadow-[0_0_50px_rgba(0,245,212,0.3)]">
      {/* Surgical Scanline Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px]" />

      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, // Smooth, authoritative pace
              ease: "linear",
            },
          }}
        >
          {marqueeContent.map((item, index) => (
            <div key={index} className="flex items-center group px-12">
              {/* Technical Indicator */}
              <div className="flex flex-col items-center mr-8 opacity-40">
                <span className="font-mono text-[8px] font-bold text-brand-dark leading-none">
                  {item.code}
                </span>
                <div className="h-4 w-[1px] bg-brand-dark my-1" />
                <FiTarget className="text-[8px] text-brand-dark" />
              </div>

              <div className="flex items-center gap-5">
                <div className="p-2 bg-brand-dark/10 rounded-lg group-hover:bg-brand-dark group-hover:text-brand-accent transition-colors duration-500">
                  <item.Icon className="w-5 h-5" />
                </div>

                <span className="font-display text-4xl md:text-5xl font-black tracking-tighter text-brand-dark uppercase transition-all duration-500 group-hover:italic">
                  {item.text}
                </span>
              </div>

              {/* Secondary Technical Divider */}
              <div className="ml-12 flex items-center gap-3">
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
        }
      `}</style>
    </section>
  );
};

export default ValuesBanner;
