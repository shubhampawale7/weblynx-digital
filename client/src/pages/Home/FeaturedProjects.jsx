// client/src/components/Home/FeaturedProjects.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext.jsx";
import { projectsData } from "../../data/projectsData.js"; // --- CORRECTED: Using project data

const featuredProjects = projectsData.slice(0, 2); // Taking the first 2 projects

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const FeaturedProjects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-20 sm:py-28 ${isDark ? "bg-black" : "bg-white"}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600 dark:from-purple-400 dark:to-cyan-400">
            Featured Work
          </h2>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A glimpse into the solutions we've crafted for our partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              {/* CORRECTED: Link now points to the main portfolio */}
              <Link to="/portfolio" className="group block">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="px-3 py-1 text-xs font-semibold text-black bg-white/80 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-3 text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center">
          <Link
            to="/portfolio"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5
                    ${
                      isDark
                        ? "border border-gray-700 hover:bg-gray-800"
                        : "border border-gray-300 hover:bg-gray-100"
                    }`}
          >
            View All Projects
            <FiArrowRight />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
