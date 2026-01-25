// client/src/components/common/AngledPraiseBanner.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiLayers,
  FiUsers,
  FiZap,
  FiMessageSquare,
  FiBarChart2,
  FiShield,
  FiCpu,
  FiMaximize2,
} from "react-icons/fi";

const principles = [
  { text: "PIXEL_PERFECT_DESIGN", Icon: FiLayers, code: "PX-01" },
  { text: "USER_CENTRIC_UI", Icon: FiUsers, code: "UX-02" },
  { text: "INNOVATIVE_LOGIC", Icon: FiZap, code: "LG-03" },
  { text: "HARDENED_INFRA", Icon: FiShield, code: "SC-04" },
  { text: "SCALABLE_MERN", Icon: FiBarChart2, code: "DB-05" },
  { text: "ZERO_LATENCY_OPS", Icon: FiCpu, code: "OP-06" },
];

const AngledPraiseBanner = () => {
  // Triple buffered content for infinite smoothness
  const marqueeContent = [...principles, ...principles, ...principles];

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-brand-dark border-y border-gray-100 dark:border-white/5 py-12 md:py-16">
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Flat Technical Ribbon */}
      <div className="relative z-10 flex items-center">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex items-center gap-12 md:gap-24"
            animate={{ x: [0, "-33.33%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Slower, steady "monitoring" speed
                ease: "linear",
              },
            }}
          >
            {marqueeContent.map((item, index) => (
              <div
                key={index}
                className="flex items-center group cursor-default"
              >
                {/* Technical Meta Card */}
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center">
                    <span className="font-mono text-[9px] text-brand-accent mb-1 tracking-tighter font-bold">
                      {item.code}
                    </span>
                    <div className="h-6 w-[1px] bg-gray-200 dark:bg-white/10 group-hover:bg-brand-accent transition-colors duration-500" />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group-hover:border-brand-accent transition-all duration-500">
                      <item.Icon className="w-5 h-5 text-brand-light-blue dark:text-brand-gray group-hover:text-brand-accent" />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-display text-2xl md:text-3xl font-black tracking-tighter text-brand-dark dark:text-white uppercase">
                        {item.text.replace("_", " ")}
                      </span>
                      <span className="font-mono text-[8px] opacity-20 uppercase tracking-[0.3em] mt-1 group-hover:opacity-100 group-hover:text-brand-accent transition-all">
                        Verified_Protocol
                      </span>
                    </div>
                  </div>
                </div>

                {/* Surgical Separator */}
                <div className="ml-12 md:ml-24 flex items-center gap-3 opacity-10">
                  <FiMaximize2 className="rotate-45 text-xs" />
                  <div className="w-12 h-px bg-current" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Absolute Corner Marker */}
      <div className="absolute bottom-4 right-6 hidden md:flex items-center gap-2 opacity-10 font-mono text-[8px] uppercase tracking-widest">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
        System_Flow: Nominal
      </div>
    </section>
  );
};

export default AngledPraiseBanner;
