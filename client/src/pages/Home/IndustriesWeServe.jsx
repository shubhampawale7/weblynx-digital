// client/src/components/Home/IndustriesWeServe.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShoppingCart,
  FiHeart,
  FiBriefcase,
  FiCloud,
  FiHome,
  FiTrendingUp,
  FiChevronRight,
  FiActivity,
} from "react-icons/fi";

const industriesData = [
  {
    id: "01",
    name: "E_COMMERCE",
    Icon: FiShoppingCart,
    desc: "High-conversion MERN engines for headless commerce and secure global scale.",
  },
  {
    id: "02",
    name: "SAAS_SYSTEMS",
    Icon: FiCloud,
    desc: "Multi-tenant cloud architectures engineered for massive data throughput.",
  },
  {
    id: "03",
    name: "CORP_INFRA",
    Icon: FiBriefcase,
    desc: "Surgical digital headquarters for enterprise entities requiring zero-latency performance.",
  },
  {
    id: "04",
    name: "NON_PROFIT",
    Icon: FiHeart,
    desc: "High-impact toolsets for organizations requiring secure, mission-critical digital reach.",
  },
  {
    id: "05",
    name: "FIN_TECH",
    Icon: FiTrendingUp,
    desc: "Hardened financial applications with end-to-end encryption and audit-ready architecture.",
  },
  {
    id: "06",
    name: "REAL_ESTATE",
    Icon: FiHome,
    desc: "Dynamic asset management platforms with integrated geolocation and data-rich filtering.",
  },
];

const IndustriesWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white dark:bg-brand-dark py-24 md:py-40 overflow-hidden border-t border-gray-100 dark:border-white/5">
      {/* Background Section Title */}
      <div className="absolute top-0 left-0 p-10 opacity-[0.02] dark:opacity-[0.05] pointer-events-none select-none">
        <span className="font-black text-[15rem] leading-none uppercase">
          INDUSTRIES
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left: Tactical Info Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="h-[2px] w-12 bg-brand-accent"></span>
                <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                  Market Verticals
                </span>
              </div>

              <h2 className="font-display text-6xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-[0.85] mb-10">
                Surgical <br />{" "}
                <span className="text-brand-accent italic font-light">
                  Versatility.
                </span>
              </h2>

              <div className="relative p-10 bg-gray-50 dark:bg-brand-dark-blue/20 rounded-[3rem] border border-gray-100 dark:border-white/5 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="relative z-10"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-brand-accent font-mono text-sm">
                        [{industriesData[activeIndex].id}]
                      </span>
                      <div className="h-px flex-grow bg-brand-accent/20"></div>
                      <FiActivity className="text-brand-accent animate-pulse" />
                    </div>
                    <h3 className="text-3xl font-bold dark:text-white mb-4 uppercase tracking-tighter">
                      {industriesData[activeIndex].name}
                    </h3>
                    <p className="text-lg text-brand-light-blue dark:text-brand-gray font-light leading-relaxed">
                      {industriesData[activeIndex].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
                {/* Visual Watermark Icon */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] dark:opacity-[0.08]">
                  {React.createElement(industriesData[activeIndex].Icon, {
                    size: 200,
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Technical Industry Selector */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industriesData.map((industry, index) => (
                <IndustryTile
                  key={industry.id}
                  industry={industry}
                  isActive={activeIndex === index}
                  onSelect={() => setActiveIndex(index)}
                />
              ))}
            </div>

            {/* System Status Footnote */}
            <div className="mt-12 flex justify-end">
              <div className="flex items-center gap-4 text-[10px] font-mono opacity-20 uppercase tracking-[0.2em]">
                <span>Protocol: Multi_Sector_Integration</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_green]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustryTile = ({ industry, isActive, onSelect }) => (
  <motion.div
    onClick={onSelect}
    whileHover={{ y: -5, scale: 1.02 }}
    className={`relative p-8 rounded-[2rem] border cursor-pointer transition-all duration-500 group overflow-hidden ${
      isActive
        ? "bg-brand-accent border-brand-accent text-brand-dark shadow-2xl shadow-brand-accent/20"
        : "bg-white dark:bg-brand-dark-blue/10 border-gray-100 dark:border-white/5 text-brand-dark dark:text-white hover:border-brand-accent/50"
    }`}
  >
    <div className="relative z-10 flex flex-col gap-6">
      <div
        className={`text-3xl transition-colors duration-500 ${isActive ? "text-brand-dark" : "text-brand-accent"}`}
      >
        <industry.Icon />
      </div>
      <div>
        <span className="font-mono text-[10px] opacity-40 uppercase block mb-1">
          ID_{industry.id}
        </span>
        <h4 className="font-display text-xl font-black tracking-tighter uppercase">
          {industry.name.replace("_", " ")}
        </h4>
      </div>
    </div>

    {/* Geometric background element */}
    <div
      className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-3xl transition-opacity duration-500 ${
        isActive
          ? "bg-white/30 opacity-100"
          : "bg-brand-accent/5 opacity-0 group-hover:opacity-100"
      }`}
    />

    {/* Detail Indicator */}
    <div
      className={`absolute bottom-8 right-8 transition-transform duration-500 ${isActive ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
    >
      <FiChevronRight size={20} />
    </div>
  </motion.div>
);

export default IndustriesWeServe;
