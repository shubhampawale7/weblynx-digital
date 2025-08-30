// client/src/components/Home/ProjectPlannerCta.jsx

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ProjectPlannerCta = () => {
  return (
    // The section itself has a seamless background
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // --- CHANGE: A structured, self-contained container ---
          className="relative max-w-4xl mx-auto text-center bg-gray-50 dark:bg-brand-dark-blue/50 border border-gray-200 dark:border-brand-light-blue/20 rounded-2xl shadow-lg overflow-hidden py-16 px-8"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-4 tracking-tighter">
            Let's Build Something Remarkable.
          </h2>
          <p className="text-lg md:text-xl text-brand-light-blue dark:text-brand-gray max-w-2xl mx-auto mb-10">
            Have an idea that could change your business? We have the
            engineering expertise to bring it to life. Let's talk.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              // --- CHANGE: Redesigned high-conversion button ---
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent hover:bg-brand-accent-hover rounded-full shadow-lg transition-all duration-300"
            >
              <span>Schedule a Free Consultation</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPlannerCta;
