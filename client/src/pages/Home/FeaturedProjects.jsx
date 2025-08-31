// client/src/components/Home/FeaturedProjects.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { projectsData } from "../../data/projectsData.js"; // Make sure this data file exists and is populated

// We'll feature the first 3 projects for a better interaction
const featuredProjects = projectsData.slice(0, 3);

const FeaturedProjects = () => {
  // State to track the project currently being hovered or viewed
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center mx-auto mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
            Crafted with Precision
          </h2>
          <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
            A glimpse into the solutions we've engineered for our valued
            partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column: Interactive Project List */}
          <div className="flex flex-col gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectListItem
                key={project.id}
                project={project}
                isActive={activeIndex === index}
                onMouseEnter={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Right Column: Sticky Image Display */}
          <div className="hidden lg:block lg:sticky top-32">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-gray-200 dark:border-brand-light-blue/20">
              <AnimatePresence>
                {/* The image corresponding to the activeIndex is rendered here */}
                <motion.img
                  key={featuredProjects[activeIndex].id}
                  src={featuredProjects[activeIndex].imageUrl}
                  alt={featuredProjects[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Centered CTA for all screen sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/portfolio"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-brand-dark bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-brand-dark-blue dark:hover:bg-opacity-70 rounded-full transition-colors duration-300"
          >
            <span>View All Work</span>
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// A dedicated component for the list items for cleaner code
const ProjectListItem = ({ project, isActive, onMouseEnter }) => (
  <div
    onMouseEnter={onMouseEnter}
    className="relative p-6 rounded-2xl cursor-pointer transition-colors duration-300
               bg-transparent hover:bg-gray-50 dark:hover:bg-brand-dark-blue/30"
  >
    {isActive && (
      <motion.div
        layoutId="active-project-indicator"
        className="absolute inset-0 bg-white dark:bg-brand-dark-blue rounded-2xl border border-gray-200 dark:border-brand-light-blue/20 shadow-lg"
        transition={{ duration: 0.5, type: "spring" }}
      />
    )}
    <div className="relative z-10">
      <h3 className="font-display text-2xl font-bold text-brand-dark dark:text-white mb-3">
        {project.title}
      </h3>
      <p className="text-brand-light-blue dark:text-brand-gray mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className={`px-3 py-1 text-xs font-medium rounded-full
                       ${
                         isActive
                           ? "bg-gray-200 dark:bg-brand-dark"
                           : "bg-gray-100 dark:bg-brand-dark-blue/50"
                       }`}
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        to={`/portfolio/${project.id}`} // Link to a specific project page
        className="group inline-flex items-center gap-2 font-semibold text-brand-accent"
      >
        <span>View Case Study</span>
        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
);

export default FeaturedProjects;
