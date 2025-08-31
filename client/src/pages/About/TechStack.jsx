// client/src/pages/About/TechStack.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWordpress,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

// Data is now a single array with added descriptions
const techStackData = [
  {
    name: "React",
    Icon: SiReact,
    description: "For building dynamic, high-performance user interfaces.",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    description: "For fast and scalable server-side applications.",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    description: "A flexible NoSQL database for modern applications.",
  },
  {
    name: "WordPress",
    Icon: SiWordpress,
    description: "The world's most popular content management system.",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    description: "A utility-first CSS framework for rapid UI development.",
  },
  {
    name: "Framer Motion",
    Icon: SiFramer,
    description: "A production-ready motion library for React.",
  },
  {
    name: "Express.js",
    Icon: SiExpress,
    description: "A minimal and flexible Node.js web application framework.",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    description: "The core language of the web, powering dynamic experiences.",
  },
  {
    name: "HTML5",
    Icon: SiHtml5,
    description: "The standard markup language for creating web pages.",
  },
  {
    name: "CSS3",
    Icon: SiCss3,
    description:
      "The stylesheet language used to describe the presentation of a document.",
  },
  {
    name: "GSAP",
    Icon: SiGreensock,
    description: "A professional-grade animation library for the modern web.",
  },
  {
    name: "REST APIs",
    Icon: FaGlobe,
    description:
      "For building robust and scalable communication between services.",
  },
];

const TechStack = () => {
  // Set the first item as the default active tech
  const [activeTech, setActiveTech] = useState(techStackData[0]);

  return (
    <section
      id="tech-stack"
      className="bg-white dark:bg-brand-dark py-20 sm:py-28"
    >
      <Seo
        title="Our Tech Stack | Weblynx Infotech - Modern Web Technologies"
        description="Explore the cutting-edge technologies and frameworks Weblynx Infotech specializes in, including React, Node.js, Express.js, MongoDB, WordPress, and more."
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
            Our Technology Stack
          </h2>
          <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
            A curated ecosystem of modern technologies we use to build
            high-performance applications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Information Panel */}
          <div className="relative h-28 p-6 flex items-center gap-6 bg-gray-50 dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20 rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-6"
              >
                <activeTech.Icon className="text-5xl text-brand-accent" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-brand-dark dark:text-white">
                    {activeTech.name}
                  </h3>
                  <p className="text-brand-light-blue dark:text-brand-gray">
                    {activeTech.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Icon Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="grid grid-cols-4 sm:grid-cols-6 gap-4 mt-8"
          >
            {techStackData.map((tech) => (
              <motion.div
                key={tech.name}
                onMouseEnter={() => setActiveTech(tech)}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="cursor-pointer"
              >
                <div
                  className={`w-full aspect-square flex items-center justify-center rounded-xl border transition-all duration-300
                    ${
                      activeTech.name === tech.name
                        ? "bg-white/80 dark:bg-brand-dark-blue border-brand-accent/50"
                        : "bg-gray-50/80 dark:bg-brand-dark-blue/30 border-transparent hover:border-brand-light-blue/20"
                    }`}
                >
                  <tech.Icon
                    className={`text-4xl transition-colors duration-300
                      ${
                        activeTech.name === tech.name
                          ? "text-brand-accent"
                          : "text-brand-light-blue dark:text-brand-gray"
                      }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
