// client/src/components/Home/FeaturedProjects.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { projectsData } from "../../data/projectsData.js";

const featuredProjects = projectsData.slice(0, 3);

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-6">
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
          <div className="w-full">
            {featuredProjects.map((project, index) => (
              <ProjectListItem
                key={project.id}
                project={project}
                isActive={activeIndex === index}
                setActiveIndex={setActiveIndex}
                index={index}
              />
            ))}
          </div>

          {/* Right Column: Sticky Image Display */}
          <div className="hidden lg:block lg:sticky top-32">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-gray-200 dark:border-brand-light-blue/20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={featuredProjects[activeIndex]?.id}
                  src={featuredProjects[activeIndex]?.imageUrl}
                  alt={featuredProjects[activeIndex]?.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-fill"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/our-work"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-brand-dark bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-brand-dark-blue dark:hover:bg-brand-dark-blue/80 rounded-full transition-colors duration-300"
          >
            <span>View All Work</span>
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectListItem = ({ project, isActive, setActiveIndex, index }) => (
  <div
    className="border-b border-gray-200 dark:border-brand-light-blue/20 cursor-pointer"
    onMouseEnter={() => setActiveIndex(index)}
    onClick={() => setActiveIndex(isActive ? null : index)}
  >
    <div className="py-6 flex justify-between items-center">
      <h2
        className={`font-display text-2xl md:text-4xl font-bold tracking-tight transition-colors ${
          isActive
            ? "text-brand-dark dark:text-white"
            : "text-brand-light-blue dark:text-brand-gray"
        }`}
      >
        {project.title}
      </h2>
    </div>
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -10 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="lg:hidden w-full h-auto object-fill rounded-lg mb-4"
          />
          <p className="pb-4 text-base text-brand-light-blue dark:text-brand-gray">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pb-6">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-brand-dark text-brand-light-blue dark:text-brand-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default FeaturedProjects;
