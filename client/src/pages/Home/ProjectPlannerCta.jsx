// client/src/components/Home/ProjectPlannerCta.jsx

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ProjectPlannerCta = () => {
  // Hooks for the interactive parallax effect on the globe
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

  const springConfig = { stiffness: 300, damping: 20 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseXVal = e.clientX - rect.left - rect.width / 2;
    const mouseYVal = e.clientY - rect.top - rect.height / 2;
    mouseX.set(mouseXVal);
    mouseY.set(mouseYVal);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto bg-gray-50 dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20 rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Background Abstract Globe */}
          <motion.div
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-0 z-0 opacity-40 dark:opacity-100"
          >
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)]">
              <DigitalOrb />
            </div>
          </motion.div>

          {/* Content Layer */}
          <div className="relative z-10 text-center py-16 px-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-4 tracking-tighter">
              Let's Build Something Remarkable.
            </h2>
            <p className="text-lg md:text-xl text-brand-light-blue dark:text-brand-gray max-w-2xl mx-auto mb-10">
              Have an idea that could change your business? We have the
              engineering expertise to bring it to life. Let's talk.
            </p>

            {/* Redesigned Shimmer Button */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              {/* Shimmer Effect */}
              <motion.span
                className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                initial={{ x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span className="relative">Schedule a Free Consultation</span>
              <FiArrowRight className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Component for the animated abstract orb
const DigitalOrb = () => (
  <div className="absolute inset-0 w-full h-full">
    {/* Concentric rings */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute inset-0 border-2 border-brand-accent/20 rounded-full"
        style={{
          width: `${100 + i * 150}px`,
          height: `${100 + i * 150}px`,
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 15 + i * 10,
          repeat: Infinity,
          ease: "linear",
          delay: i * -2,
        }}
      />
    ))}
    {/* Horizontal rotating ring */}
    <motion.div
      className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 border-t-2 border-b-2 border-brand-accent/20 rounded-full"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateX: 75, rotateZ: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: -4 }}
    />
  </div>
);

export default ProjectPlannerCta;
