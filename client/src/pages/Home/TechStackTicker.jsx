// client/src/components/common/TechStackTicker.jsx
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaShopify,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", Icon: FaNodeJs, color: "#8CC84B" },
  { name: "MongoDB", Icon: SiMongodb, color: "#4DB33D" },
  { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "WordPress", Icon: FaWordpress, color: "#21759B" },
  { name: "Shopify", Icon: FaShopify, color: "#95BF47" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Figma", Icon: FaFigma, color: "#F24E1E" },
];

// Animation variant for a smooth, continuous loop
const tickerVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50, // Adjust duration for speed
        ease: "linear",
      },
    },
  },
};

const TechStackTicker = () => {
  return (
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
            Technologies We Master
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-brand-light-blue dark:text-brand-gray">
            Leveraging a modern, powerful, and scalable tech stack to bring your
            vision to life.
          </p>
        </motion.div>

        {/* Scrolling banner using Framer Motion */}
        <div className="mt-16 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <motion.div
            className="flex gap-8" // Increased gap for better spacing
            variants={tickerVariants}
            animate="animate"
          >
            {/* Render the list twice for a seamless loop */}
            {[...techStack, ...techStack].map((tech, index) => (
              <TechPill key={index} {...tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Refactored "Pill" component using a declarative approach
const TechPill = ({ name, Icon, color }) => (
  <motion.div
    // Use Framer Motion's whileHover for all hover effects
    whileHover={{
      y: -6,
      boxShadow: `0 10px 25px -5px ${color}50`, // Hex code with alpha for transparency
    }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    // The 'group' class allows us to style child elements on hover
    className="group flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-white dark:bg-brand-dark-blue/50 border border-gray-200 dark:border-brand-light-blue/20 rounded-full cursor-pointer"
    // We pass the unique color as a CSS variable for the icon to use
    style={{ "--tech-color": color }}
  >
    <Icon
      className="w-7 h-7 text-brand-light-blue dark:text-brand-gray transition-colors duration-300
                 group-hover:text-[var(--tech-color)]" // Icon color changes on parent hover
    />
    <span className="text-xl font-semibold text-brand-dark dark:text-white whitespace-nowrap">
      {name}
    </span>
  </motion.div>
);

export default TechStackTicker;
