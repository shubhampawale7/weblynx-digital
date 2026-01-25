// client/src/components/common/TechStackTicker.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaShopify,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const techStack = [
  { name: "React", Icon: FaReact, color: "#61DAFB", category: "FRONTEND" },
  { name: "Node.js", Icon: FaNodeJs, color: "#8CC84B", category: "BACKEND" },
  { name: "MongoDB", Icon: SiMongodb, color: "#4DB33D", category: "DATABASE" },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
    category: "LANGUAGE",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E",
    category: "LANGUAGE",
  },
  { name: "WordPress", Icon: FaWordpress, color: "#21759B", category: "CMS" },
  { name: "AWS", Icon: FaAws, color: "#FF9900", category: "INFRA" },
  {
    name: "Tailwind",
    Icon: SiTailwindcss,
    color: "#38BDF8",
    category: "STYLING",
  },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28", category: "CLOUD" },
];

const tickerVariants = {
  animate: {
    x: ["0%", "-50%"], // Adjusted for perfect seamless loop
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  },
};

const TechStackTicker = () => {
  return (
    <section className="bg-white dark:bg-brand-dark py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
              Hardware_Software_Stack
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-black text-brand-dark dark:text-white tracking-tighter leading-none">
              The{" "}
              <span className="text-brand-accent italic font-light">
                Engine.
              </span>
            </h2>
          </motion.div>
          <p className="text-sm font-mono opacity-30 uppercase tracking-widest max-w-[250px] text-right hidden md:block">
            Vetted Tools // Scalable Architecture // V4.0.2
          </p>
        </div>
      </div>

      {/* Ticker Belt */}
      <div className="relative w-full flex items-center">
        {/* Surgical Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-brand-dark to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-brand-dark to-transparent z-10" />

        <motion.div
          className="flex gap-4 md:gap-6"
          variants={tickerVariants}
          animate="animate"
        >
          {/* Tripled list for absolute seamless transition at all widths */}
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <TechModule key={index} {...tech} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TechModule = ({ name, Icon, color, category }) => (
  <motion.div
    whileHover={{ y: -4, backgroundColor: "rgba(var(--accent-rgb), 0.05)" }}
    className="group flex-shrink-0 relative w-48 md:w-56 p-6 border border-gray-100 dark:border-white/5 bg-gray-50/30 dark:bg-white/5 transition-all duration-500 overflow-hidden"
  >
    {/* Identification Metadata */}
    <div className="flex justify-between items-center mb-8">
      <span className="font-mono text-[8px] opacity-20 tracking-widest uppercase">
        {category}
      </span>
      <div className="w-1 h-1 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    {/* The Icon & Label */}
    <div className="flex flex-col gap-4">
      <Icon
        size={32}
        className="text-brand-dark dark:text-white opacity-20 group-hover:opacity-100 transition-all duration-500"
        style={{ color: "initial" }} // Keeps it mono until hover
      />
      <span className="font-display text-xl font-bold tracking-tighter text-brand-dark dark:text-white uppercase">
        {name}
      </span>
    </div>

    {/* Decorative Background ID */}
    <span className="absolute -bottom-2 -right-2 font-mono text-[40px] font-black opacity-[0.02] select-none uppercase">
      {name.substring(0, 2)}
    </span>

    {/* Animated Bottom Line */}
    <div className="absolute bottom-0 left-0 h-0.5 bg-brand-accent w-0 group-hover:w-full transition-all duration-500" />
  </motion.div>
);

export default TechStackTicker;
