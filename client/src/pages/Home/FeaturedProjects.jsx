// client/src/components/Home/FeaturedProjects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiActivity, FiExternalLink } from "react-icons/fi";
import { projectsData } from "../../data/projectsData.js";

const featuredProjects = projectsData.slice(0, 3);

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white dark:bg-brand-dark py-24 md:py-40 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
        <span className="font-black text-[20rem] leading-none uppercase select-none">
          WORK
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-brand-accent"></span>
              <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                Selected Works
              </span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl font-bold text-brand-dark dark:text-white tracking-tighter leading-[0.85]">
              Proof of <br />{" "}
              <span className="text-brand-accent italic font-light">
                Execution.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-brand-light-blue dark:text-brand-gray max-w-sm font-light leading-relaxed"
          >
            A curated selection of high-performance systems engineered for
            market leaders.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Interactive Project Menu */}
          <div className="lg:col-span-5 space-y-2">
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

          {/* Right: Technical Viewport (Sticky) */}
          <div className="hidden lg:block lg:col-span-7 lg:sticky top-40">
            <div className="relative group">
              {/* Browser Mockup Frame */}
              <div className="absolute -top-10 left-0 right-0 h-10 bg-gray-100 dark:bg-brand-dark-blue/40 rounded-t-3xl border-t border-x border-gray-200 dark:border-white/10 flex items-center px-6 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                <div className="w-3 h-3 rounded-full bg-green-400/50" />
                <div className="ml-4 h-4 w-64 bg-white/5 rounded-full border border-white/5" />
              </div>

              <div className="relative aspect-[16/10] rounded-b-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={featuredProjects[activeIndex]?.id}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={featuredProjects[activeIndex]?.imageUrl}
                      alt={featuredProjects[activeIndex]?.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <Link
                        to="/our-work"
                        className="bg-brand-accent text-brand-dark px-8 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                      >
                        View Project <FiExternalLink />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Data Status Label */}
              <div className="absolute -bottom-6 -right-6 p-6 bg-brand-dark border border-white/10 rounded-2xl shadow-xl hidden xl:flex items-center gap-4">
                <FiActivity className="text-brand-accent animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                  Status: Deployed_v3.4
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <div className="mt-32 border-t border-gray-100 dark:border-white/5 pt-12 flex justify-center">
          <Link
            to="/our-work"
            className="group flex items-center gap-6 text-2xl md:text-4xl font-bold dark:text-white hover:text-brand-accent transition-colors"
          >
            <span>Explore the Archive</span>
            <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-brand-dark transition-all">
              <FiArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectListItem = ({ project, isActive, setActiveIndex, index }) => (
  <div
    className="relative py-10 border-b border-gray-100 dark:border-white/5 cursor-pointer group"
    onMouseEnter={() => setActiveIndex(index)}
  >
    <div className="flex justify-between items-center relative z-10">
      <div className="flex items-start gap-8">
        <span
          className={`font-mono text-sm mt-2 transition-colors ${isActive ? "text-brand-accent" : "text-brand-gray opacity-30"}`}
        >
          0{index + 1}
        </span>
        <h2
          className={`font-display text-4xl md:text-6xl font-bold tracking-tighter transition-all duration-500 ${
            isActive
              ? "text-brand-dark dark:text-white translate-x-4"
              : "text-brand-light-blue dark:text-brand-gray opacity-40 group-hover:opacity-100"
          }`}
        >
          {project.title}
        </h2>
      </div>
    </div>

    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden pl-16 md:pl-20"
        >
          {/* Mobile Only Image */}
          <div className="lg:hidden w-full aspect-video rounded-2xl overflow-hidden my-6 border border-white/10">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="py-6 text-xl text-brand-light-blue dark:text-brand-gray max-w-md font-light leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pb-4">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono font-black uppercase tracking-widest text-brand-accent px-3 py-1 rounded-full bg-brand-accent/5 border border-brand-accent/20"
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
