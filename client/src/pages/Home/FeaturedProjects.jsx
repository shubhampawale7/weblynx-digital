// client/src/components/Home/FeaturedProjects.jsx

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { projectsData } from "../../data/projectsData.js"; // Ensure you have this data file

// Assuming you want to feature the first 2-3 projects
const featuredProjects = projectsData.slice(0, 2);

// Reusable Project Card Component for a cleaner structure
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group block"
    >
      <Link to="/portfolio">
        <div className="bg-white dark:bg-brand-dark-blue rounded-2xl overflow-hidden border border-gray-200 dark:border-brand-light-blue/20 transition-shadow duration-300 shadow-sm hover:shadow-2xl">
          <div className="overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="font-display text-xl font-bold text-brand-dark dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-brand-light-blue dark:text-brand-gray text-sm mb-4">
              {project.description}{" "}
              {/* --- CHANGE: Added project description --- */}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {/* --- CHANGE: Added technology tags --- */}
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium text-brand-light-blue dark:text-brand-gray bg-gray-100 dark:bg-brand-dark rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 font-semibold text-brand-accent transition-colors duration-300">
              <span>View Case Study</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    // --- CHANGE: Seamless background for integration ---
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-28">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-6"
      >
        {/* --- CHANGE: Modern split layout for the header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-xl text-center md:text-left"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
              Crafted with Precision.
            </h2>
            <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
              A glimpse into the solutions we've engineered for our valued
              partners.
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="hidden md:block"
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-brand-dark dark:text-white hover:bg-gray-200 dark:hover:bg-brand-dark-blue rounded-full transition-colors duration-300"
            >
              <span>View All Work</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* --- CHANGE: Grid now uses the redesigned ProjectCard component --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* --- CHANGE: Centered CTA for mobile view --- */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center md:hidden mt-12"
        >
          <Link
            to="/portfolio"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-brand-dark dark:text-white bg-gray-100 dark:bg-brand-dark-blue rounded-full transition-colors duration-300"
          >
            <span>View All Work</span>
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
