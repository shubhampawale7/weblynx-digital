import React from "react";
import { motion } from "framer-motion";

// The milestones that will appear along the path
const milestones = [
  {
    id: 1,
    title: "01. Concept & Discovery",
    description:
      "We dive deep into your vision, goals, and audience to establish a strong foundation.",
    position: { top: "5%", left: "10%" },
  },
  {
    id: 2,
    title: "02. Design & Prototype",
    description:
      "Crafting wireframes and high-fidelity designs that are both beautiful and user-friendly.",
    position: { top: "65%", left: "35%" },
  },
  {
    id: 3,
    title: "03. Develop & Iterate",
    description:
      "Bringing designs to life with clean, efficient code and rigorous testing.",
    position: { top: "15%", left: "65%" },
  },
  {
    id: 4,
    title: "04. Launch & Support",
    description:
      "Deploying the project seamlessly and providing ongoing support for growth.",
    position: { top: "70%", left: "85%" },
  },
];

const AnimatedPathSection = ({ isDark }) => {
  // A new, more intentional SVG path designed to guide the eye across the milestones
  const pathData = "M 50 50 Q 250 250 450 150 T 850 50";

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Creative Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-lg opacity-60"
          >
            Every project is a partnership and a path we walk together.
          </motion.p>
        </div>

        {/* The main container for the animation, positioned relatively */}
        <div className="relative w-full max-w-6xl mx-auto h-[50vh] md:h-[60vh]">
          {/* The SVG path animation */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 900 200"
            preserveAspectRatio="none"
            fill="none"
            className="absolute top-0 left-0"
          >
            <motion.path
              d={pathData}
              stroke={isDark ? "#4A5568" : "#D1D5DB"} // A subtle gray for the background path
              strokeWidth="3"
              strokeLinecap="round"
            />
            <motion.path
              d={pathData}
              stroke={isDark ? "#A78BFA" : "#4F46E5"} // Accent color for the drawing animation
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Mapping over the milestones to place them along the path */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              className={`absolute p-4 max-w-xs text-left`}
              style={{
                top: milestone.position.top,
                left: milestone.position.left,
                transform: "translate(-50%, -50%)", // Center the div on its coordinates
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: 1 + index * 0.8,
                ease: "easeOut",
              }}
            >
              <h3
                className={`font-bold text-lg mb-2 ${
                  isDark ? "text-purple-300" : "text-indigo-700"
                }`}
              >
                {milestone.title}
              </h3>
              <p className={`text-sm ${isDark ? "opacity-70" : "opacity-80"}`}>
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedPathSection;
