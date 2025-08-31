// client/src/components/Portfolio/AnimatedPathSection.jsx
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const milestones = [
  {
    id: 1,
    title: "01. Concept & Discovery",
    description:
      "We dive deep into your vision, goals, and audience to establish a strong foundation.",
  },
  {
    id: 2,
    title: "02. Design & Prototype",
    description:
      "Crafting wireframes and high-fidelity designs that are both beautiful and user-friendly.",
  },
  {
    id: 3,
    title: "03. Develop & Iterate",
    description:
      "Bringing designs to life with clean, efficient code and rigorous testing.",
  },
  {
    id: 4,
    title: "04. Launch & Support",
    description:
      "Deploying the project seamlessly and providing ongoing support for growth.",
  },
];

const AnimatedPathSection = () => {
  return (
    <section className="bg-white dark:bg-brand-dark py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
            Our Creative Journey
          </h2>
          <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray max-w-2xl mx-auto">
            Every project is a partnership and a path we walk together, from
            initial spark to final launch.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {milestones.map((milestone) => (
            <MilestoneCard key={milestone.id} milestone={milestone} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MilestoneCard = ({ milestone }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseX, [-150, 150], [-10, 10]);

  const springConfig = { stiffness: 300, damping: 20 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className="group relative h-full p-8 bg-white dark:bg-brand-dark-blue/30 rounded-2xl border border-gray-200 dark:border-brand-light-blue/20 shadow-lg overflow-hidden"
    >
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), hsla(169, 100%, 50%, 0.15), transparent 80%)`,
        }}
      />
      <div
        style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
      >
        <h3 className="font-display text-2xl font-bold text-brand-accent mb-3">
          {milestone.title}
        </h3>
        <p className="text-base text-brand-light-blue dark:text-brand-gray">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
};

export default AnimatedPathSection;
