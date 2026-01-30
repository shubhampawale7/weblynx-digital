// client/src/components/common/TechStackTicker.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaWordpress, FaAws } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const techStack = [
  { name: "React", Icon: FaReact, category: "FRONTEND_ENGINEERING" },
  { name: "Node.js", Icon: FaNodeJs, category: "SERVER_SIDE_LOGIC" },
  { name: "MongoDB", Icon: SiMongodb, category: "DATABASE_NOSQL" },
  { name: "TypeScript", Icon: SiTypescript, category: "ENTERPRISE_JS" },
  { name: "JavaScript", Icon: SiJavascript, category: "ES6_CORE" },
  { name: "WordPress", Icon: FaWordpress, category: "HEADLESS_CMS" },
  { name: "AWS", Icon: FaAws, category: "CLOUD_SCALING" },
  { name: "Tailwind", Icon: SiTailwindcss, category: "MODERN_UI_UX" },
  { name: "Firebase", Icon: SiFirebase, category: "REALTIME_BAAS" },
];

const tickerVariants = {
  animate: {
    x: ["0%", "-50%"],
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
    <section
      aria-labelledby="tech-stack-heading"
      className="bg-white dark:bg-brand-dark py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.header
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
              Hardware_Software_Stack
            </span>

            <h2
              id="tech-stack-heading"
              className="font-display text-5xl md:text-7xl font-black text-brand-dark dark:text-white tracking-tighter leading-none"
            >
              The{" "}
              <span className="text-brand-accent italic font-light">
                Engine.
              </span>
            </h2>

            {/* SEO Semantic Context (Invisible) */}
            <p className="sr-only">
              Technology stack used by Weblynx Infotech including React,
              Node.js, MongoDB, TypeScript, AWS, WordPress, Tailwind CSS, and
              Firebase for building scalable MERN stack web applications and
              cloud-ready digital platforms.
            </p>
          </motion.header>

          <div className="text-sm font-mono opacity-30 uppercase tracking-widest max-w-[250px] text-right hidden md:block">
            <p>
              Vetted MERN Stack Engineering // Scalable AWS Infrastructure //
              V4.0.2
            </p>
          </div>
        </div>
      </div>

      {/* Ticker Belt */}
      <div
        className="relative w-full flex items-center"
        role="region"
        aria-label="Weblynx Technology Stack Marquee"
      >
        {/* Edge Fades */}
        <div
          className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-brand-dark to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-brand-dark to-transparent z-10"
          aria-hidden="true"
        />

        <motion.div
          className="flex gap-4 md:gap-6"
          variants={tickerVariants}
          animate="animate"
          role="list"
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <TechModule key={index} {...tech} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TechModule = ({ name, Icon, category }) => (
  <motion.div
    role="listitem"
    aria-label={`Full-stack expertise in ${name}`}
    whileHover={{ y: -4 }}
    className="group flex-shrink-0 relative w-48 md:w-56 p-6 border border-gray-100 dark:border-white/5 bg-gray-50/30 dark:bg-white/5 transition-all duration-500 overflow-hidden"
  >
    <div className="flex justify-between items-center mb-8">
      <span className="font-mono text-[8px] opacity-20 tracking-widest uppercase">
        {category.replace(/_/g, " ")}
      </span>
      <div
        className="w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#00F5D4]"
        aria-hidden="true"
      />
    </div>

    <div className="flex flex-col gap-4">
      <Icon
        size={32}
        className="text-brand-dark dark:text-white opacity-20 group-hover:opacity-100 transition-all duration-500"
        aria-hidden="true"
      />
      <h3 className="font-display text-xl font-bold tracking-tighter text-brand-dark dark:text-white uppercase">
        {name}
      </h3>
    </div>

    <p className="sr-only">
      Professional {name} development and architectural services provided by
      Weblynx Infotech.
    </p>

    <span
      className="absolute -bottom-2 -right-2 font-mono text-[40px] font-black opacity-[0.02] select-none uppercase"
      aria-hidden="true"
    >
      {name.substring(0, 2)}
    </span>

    <div
      className="absolute bottom-0 left-0 h-0.5 bg-brand-accent w-0 group-hover:w-full transition-all duration-500"
      aria-hidden="true"
    />
  </motion.div>
);

export default TechStackTicker;
