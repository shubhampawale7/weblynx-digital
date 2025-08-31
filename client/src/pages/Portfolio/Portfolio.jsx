// client/src/pages/Portfolio/Portfolio.jsx
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import {
  FiGithub,
  FiExternalLink,
  FiSearch,
  FiLayout,
  FiCode,
  FiUploadCloud,
  FiZap,
} from "react-icons/fi";

// --- Data for Project Showcase ---
const projectsData = [
  {
    id: 1,
    title: "Ninad's Pottery",
    image: "/projects/project1.png",
    description:
      "A bespoke e-commerce platform for artisans, featuring a clean user interface and secure payment integration with Stripe.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://ninad-s-pottery.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7/Ninad-s-Pottery",
  },
  {
    id: 2,
    title: "Prani Seva Ashram",
    image: "/projects/project2.png",
    description:
      "A digital hub for a compassionate non-profit, designed to increase outreach and streamline donations.",
    tags: ["React.js", "Node.js", "Express.js"],
    demoUrl: "https://prani-seva-ashram-2-0.onrender.com/",
    githubUrl: "https://github.com/shubhampawale7/Prani-Seva-Ashram-2.0",
  },
  {
    id: 3,
    title: "BRB Art Fusion",
    image: "/projects/project6.png",
    description:
      "A full-stack e-commerce solution with a powerful admin panel for managing products, orders, and customers.",
    tags: ["React", "Node.js", "Fullstack"],
    demoUrl: "https://brb-art-fusion-mern.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7/brb-art-fusion-MERN",
  },
  {
    id: 4,
    title: "Trishha Mines",
    image: "/projects/project3.png",
    description:
      "Crafting a modern and professional corporate identity for an industry leader in mining and minerals.",
    tags: ["React.js", "Node.js", "Corporate"],
    demoUrl: "https://www.trishhaminesandminerals.com/",
    githubUrl: "https://github.com/shubhampawale7",
  },
  {
    id: 5,
    title: "Walnut Hotel",
    image: "/projects/project4.png",
    description:
      "A sleek, high-performance, and visually appealing landing page designed to increase direct bookings.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://walnut-hotel.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7",
  },
  {
    id: 6,
    title: "FlowBit",
    image: "/projects/flowbit_cover.png",
    description:
      "A full-featured SaaS subscription manager to help businesses track and control their software expenses.",
    tags: ["React", "Node.js", "SaaS"],
    demoUrl: "https://flow-bit-fcnw.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7/FlowBit",
  },
];

// --- Data for Scrolling Banner ---
const bannerItems = [
  "Intuitive",
  "Scalable",
  "Performant",
  "Accessible",
  "User-Centric",
  "Clean Code",
];

// --- Data for Animated Path Section ---
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

const Portfolio = () => {
  return (
    <>
      <Seo
        title="Weblynx Infotech Portfolio - Our Creative Work"
        description="Explore a gallery of creative and impactful web development projects by Weblynx Infotech. See our expertise in creating unique digital experiences."
      />
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        <ProjectShowcase />
        <ScrollingBanner />
        <AnimatedPathSection />
        <FinalCta />
      </main>
    </>
  );
};

// --- Main Showcase Component ---
const ProjectShowcase = () => {
  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id);
  const activeProject = projectsData.find((p) => p.id === activeProjectId);

  return (
    <section className="container mx-auto min-h-screen px-6 py-16 md:py-24 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center md:text-left mb-12 md:mb-16"
      >
        <h1 className="font-display text-5xl md:text-7xl font-bold text-brand-dark dark:text-white tracking-tighter">
          Selected Works
        </h1>
        <p className="text-lg md:text-xl text-brand-light-blue dark:text-brand-gray mt-4 max-w-2xl mx-auto md:mx-0">
          From full-stack e-commerce to sleek corporate sites, our work is
          diverse and purpose-driven.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full"
        >
          {projectsData.map((project) => (
            <ProjectListItem
              key={project.id}
              project={project}
              isActive={activeProjectId === project.id}
              setActive={setActiveProjectId}
            />
          ))}
        </motion.div>

        <div className="hidden lg:block sticky top-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="h-[60vh] rounded-2xl overflow-hidden shadow-2xl bg-brand-dark-blue/30 border border-brand-light-blue/20"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProject?.id}
                src={activeProject?.image}
                alt={activeProject?.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectListItem = ({ project, isActive, setActive }) => (
  <div
    className="border-b border-gray-200 dark:border-brand-light-blue/20 cursor-pointer"
    onMouseEnter={() => setActive(project.id)}
    onClick={() => setActive(isActive ? null : project.id)}
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
      <span
        className={`text-xl md:text-2xl font-mono transition-colors ${
          isActive
            ? "text-brand-accent"
            : "text-brand-light-blue/50 dark:text-brand-gray/50"
        }`}
      >
        0{project.id}
      </span>
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
            src={project.image}
            alt={project.title}
            className="lg:hidden w-full h-auto object-cover rounded-lg mb-4"
          />
          <p className="pb-4 text-base text-brand-light-blue dark:text-brand-gray">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-brand-dark-blue text-brand-light-blue dark:text-brand-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 pb-6">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors bg-brand-accent text-brand-dark hover:bg-brand-accent-hover"
            >
              <FiExternalLink /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors bg-gray-200 dark:bg-brand-dark-blue text-brand-dark dark:text-white hover:bg-gray-300 dark:hover:bg-brand-light-blue/20"
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- Scrolling Banner Component ---
const ScrollingBanner = () => {
  const repeatedItems = [...bannerItems, ...bannerItems];
  return (
    <section className="bg-white dark:bg-black w-full overflow-hidden">
      <div className="group flex flex-col justify-center h-40 md:h-48 bg-brand-dark">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at 50% 50%, hsla(169, 100%, 50%, 0.5), transparent 70%)`,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"></div>
        </div>
        <div className="relative flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12 mx-6">
              <span className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white">
                {item}
              </span>
              <FiZap className="text-4xl md:text-5xl text-brand-accent flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Animated Path / Process Section Component ---
const AnimatedPathSection = () => (
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
          Our Streamlined Process
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
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {milestones.map((milestone) => (
          <MilestoneCard key={milestone.id} milestone={milestone} />
        ))}
      </motion.div>
    </div>
  </section>
);

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

// --- Final CTA Component ---
const FinalCta = () => (
  <section className="py-20 md:py-28 text-center">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-brand-dark dark:text-white mb-6"
      >
        Have a project in mind?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-brand-light-blue dark:text-brand-gray mb-8 max-w-xl mx-auto"
      >
        Let's collaborate and build something amazing. We're ready to bring your
        vision to life.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/contact"
          className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-bold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
        >
          <motion.span
            className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
            initial={{ x: "-150%" }}
            whileHover={{ x: "150%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <span className="relative">Let's Talk</span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Portfolio;
