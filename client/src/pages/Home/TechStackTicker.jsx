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

// The data is the same, but we will use it more dynamically
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

const TechStackTicker = () => {
  const extendedTech = [...techStack, ...techStack];

  return (
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark dark:text-white">
            Technologies We Master
          </h2>
          <p className="text-lg mt-3 max-w-2xl mx-auto text-brand-light-blue dark:text-brand-gray">
            Leveraging a modern, powerful, and scalable tech stack to bring your
            vision to life.
          </p>
        </motion.div>

        {/* Polished scrolling banner */}
        <div className="mt-16 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-scroll [animation-duration:60s] gap-6">
            {extendedTech.map((tech, index) => (
              <TechPill key={index} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// The enhanced and polished "Pill" component
const TechPill = ({ name, Icon, color }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="group flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-white dark:bg-brand-dark-blue/50 border border-gray-200 dark:border-brand-light-blue/20 rounded-full"
    style={{
      // The colored shadow appears on hover, using the specific color from your data
      boxShadow: `0 0 0 0 ${color}00`,
      transition: "box-shadow 0.3s ease-in-out",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.boxShadow = `0 10px 25px -5px ${color}40`)
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.boxShadow = `0 0 0 0 ${color}00`)
    }
  >
    <Icon
      className="w-7 h-7 text-brand-light-blue dark:text-brand-gray transition-colors duration-300"
      // The icon's color changes to its unique color on hover
      style={{ transition: "color 0.3s ease-in-out" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = color)}
      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
    />
    <span className="text-xl font-semibold text-brand-dark dark:text-white whitespace-nowrap">
      {name}
    </span>
  </motion.div>
);

export default TechStackTicker;
