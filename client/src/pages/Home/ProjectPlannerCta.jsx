// client/src/components/Home/ProjectPlannerCta.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const ProjectPlannerCta = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`py-20 sm:py-24 ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Have a Project in Mind?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Let's turn your idea into a reality. Reach out today for a free,
          no-obligation consultation and project roadmap.
        </p>
        <Link
          to="/contact"
          className={`inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              : "bg-gray-900 text-white hover:bg-black"
          }`}
        >
          Start Your Project
        </Link>
      </motion.div>
    </section>
  );
};

export default ProjectPlannerCta;
