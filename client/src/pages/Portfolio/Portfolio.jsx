import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import {
  FiGithub,
  FiExternalLink,
  FiSearch,
  FiLayout,
  FiCode,
  FiUploadCloud,
} from "react-icons/fi";
import ScrollingBanner from "./ScrollingBanner.jsx";
import AnimatedPathSection from "./AnimatedPathSection.jsx";

const projectsData = [
  {
    id: 1,
    title: "Ninad's Pottery",
    image: "/projects/project1.png",
    description: "A bespoke e-commerce platform for artisans.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://ninad-s-pottery.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7/Ninad-s-Pottery",
  },
  {
    id: 2,
    title: "Prani Seva Ashram",
    image: "/projects/project2.png",
    description: "A digital hub for a compassionate non-profit.",
    tags: ["React.js", "Node.js", "Express.js"],
    demoUrl: "https://prani-seva-ashram-2-0.onrender.com/",
    githubUrl: "https://github.com/shubhampawale7/Prani-Seva-Ashram-2.0",
  },
  {
    id: 3,
    title: "BRB Art Fusion",
    image: "/projects/project6.png",
    description: "Full-stack e-commerce with a powerful admin panel.",
    tags: ["React", "Node.js", "Fullstack"],
    demoUrl: "https://brb-art-fusion-mern.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7/brb-art-fusion-MERN",
  },
  {
    id: 4,
    title: "Trishha Mines",
    image: "/projects/project3.png",
    description: "A modern corporate identity for an industry leader.",
    tags: ["React.js", "Node.js", "Corporate"],
    demoUrl: "https://www.trishhaminesandminerals.com/",
    githubUrl: "https://github.com/shubhampawale7",
  },
  {
    id: 5,
    title: "Walnut Hotel",
    image: "/projects/project4.png",
    description: "A sleek, high-performance landing page.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://walnut-hotel.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7",
  },
  {
    id: 6,
    title: "FlowBit",
    image: "/projects/flowbit_cover.png",
    description: "A full-featured SaaS subscription manager.",
    tags: ["React", "Node.js", "SaaS"],
    demoUrl: "https://flow-bit-fcnw.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7/FlowBit",
  },
];

// Custom hook to check window size
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Portfolio = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Weblynx Infotech Portfolio - Our Creative Work"
        description="Explore a gallery of creative and impactful web development projects by Weblynx Infotech. See our expertise in creating unique digital experiences."
      />{" "}
      <HoverProjectList isDark={isDark} />
      <ScrollingBanner isDark={isDark} />
      <ProcessSection isDark={isDark} />
      <AnimatedPathSection />
      <FinalCta isDark={isDark} />
    </div>
  );
};

// Main component for the project list
const HoverProjectList = ({ isDark }) => {
  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id);
  const [width] = useWindowSize();
  const isMobile = width < 768;

  const activeProject = projectsData.find((p) => p.id === activeProjectId);

  return (
    <section className="container mx-auto min-h-screen px-4 py-16 md:py-24 flex flex-col justify-center">
      <div className="text-center md:text-left mb-12 md:mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
          Selected Works
        </h1>
        <p className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto md:mx-0">
          From full-stack e-commerce to sleek corporate sites, our work is
          diverse and purpose-driven.
        </p>
      </div>

      {/* Main Grid for Desktop and Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left Column (Desktop) / Mobile Card List */}
        <div className="w-full">
          {/* Renders a list of interactive text on desktop */}
          <div className="hidden md:block">
            {projectsData.map((project) => (
              <ProjectListItemDesktop
                key={project.id}
                project={project}
                isActive={activeProjectId === project.id}
                setActive={setActiveProjectId}
                isDark={isDark}
              />
            ))}
          </div>

          {/* Renders full cards on mobile */}
          <div className="block md:hidden space-y-12">
            {projectsData.map((project) => (
              <ProjectCardMobile
                key={project.id}
                project={project}
                isDark={isDark}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Image Display (Desktop Only) */}
        <div className="hidden md:block sticky top-24 h-[60vh] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800">
          <AnimatePresence>
            <motion.img
              key={activeProject.id}
              src={activeProject.image}
              alt={activeProject.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ProjectListItemDesktop = ({ project, isActive, setActive, isDark }) => (
  <div
    className="py-6 border-b"
    style={{
      borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    }}
    onMouseEnter={() => setActive(project.id)}
  >
    <motion.div
      animate={{ opacity: isActive ? 1 : 0.5 }}
      className="flex justify-between items-center cursor-pointer"
    >
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
        {project.title}
      </h2>
      <span className="text-xl md:text-2xl font-mono opacity-50">
        0{project.id}
      </span>
    </motion.div>
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -10 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="mt-4 text-base opacity-70">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  isDark
                    ? "bg-gray-800 text-cyan-400"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-6">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                isDark
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              <FiExternalLink /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ProjectCardMobile = ({ project, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`rounded-2xl overflow-hidden shadow-lg ${
      isDark ? "bg-gray-900" : "bg-white"
    }`}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-60 object-contain"
    />
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="opacity-70 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isDark ? "bg-gray-800 text-cyan-400" : "bg-blue-100 text-blue-800"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
            isDark
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          <FiExternalLink /> Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
            isDark
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <FiGithub /> GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

const ProcessSection = ({ isDark }) => {
  const steps = [
    {
      icon: FiSearch,
      title: "Discover",
      description:
        "We start by understanding your vision, goals, and audience.",
    },
    {
      icon: FiLayout,
      title: "Design",
      description:
        "We craft intuitive user interfaces and beautiful, modern designs.",
    },
    {
      icon: FiCode,
      title: "Develop",
      description:
        "Our team writes clean, efficient code to bring the designs to life.",
    },
    {
      icon: FiUploadCloud,
      title: "Deploy",
      description:
        "We launch your project and provide support for a seamless release.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className={`py-20 md:py-32 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg opacity-60 mb-12">
          A streamlined process for quality and efficiency.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="p-6">
              <div
                className={`mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center ${
                  isDark
                    ? "bg-purple-900/50 text-purple-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                <step.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="opacity-70">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FinalCta = ({ isDark }) => (
  <section className="py-20 md:py-32 text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
        Have a project in mind?
      </h2>
      <p className="text-lg md:text-xl opacity-60 mb-8 max-w-xl mx-auto">
        Let's collaborate and build something amazing. We're ready to bring your
        vision to life.
      </p>
      <Link
        to="/contact"
        className={`inline-block px-10 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
          isDark
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-gray-900 text-white hover:bg-black"
        }`}
      >
        Let's Talk
      </Link>
    </div>
  </section>
);

export default Portfolio;
