// client/src/pages/Portfolio/Portfolio.jsx
import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { FiGithub, FiExternalLink, FiArrowDown } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const projectsData = [
  {
    id: 1,
    title: "Ninad's Pottery",
    description: "A bespoke e-commerce platform for artisans.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://ninad-s-pottery.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7/Ninad-s-Pottery",
  },
  {
    id: 2,
    title: "Prani Seva Ashram",
    description: "A digital hub for a compassionate non-profit.",
    image: "/projects/project2.png",
    tags: ["React.js", "Node.js", "Express.js"],
    demoUrl: "https://prani-seva-ashram-2-0.onrender.com/",
    githubUrl: "https://github.com/shubhampawale7/Prani-Seva-Ashram-2.0",
  },
  {
    id: 6,
    title: "BRB Art Fusion",
    description: "Full-stack e-commerce with a powerful admin panel.",
    image: "/projects/project6.png",
    tags: ["React", "Node.js", "Fullstack"],
    demoUrl: "https://brb-art-fusion-mern.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7/brb-art-fusion-MERN",
  },
  {
    id: 3,
    title: "Trishha Mines",
    description: "A modern corporate identity for an industry leader.",
    image: "/projects/project3.png",
    tags: ["React.js", "Node.js", "Corporate"],
    demoUrl: "https://www.trishhaminesandminerals.com/",
    githubUrl: "https://github.com/shubhampawale7",
  },
  {
    id: 4,
    title: "Walnut Hotel",
    description: "A sleek, high-performance landing page.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://walnut-hotel.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7",
  },
  {
    id: 5,
    title: "FlowBit",
    description: "A full-featured SaaS subscription manager.",
    image: "/projects/flowbit_cover.png",
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
  const [width] = useWindowSize();
  const isMobile = width < 1024; // lg breakpoint

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Weblynx Infotech Portfolio - Our Creative Work"
        description="Explore a gallery of creative and impactful web development projects by Weblynx Infotech. See our expertise in creating unique digital experiences."
      />

      {/* The CursorGlow will only be rendered on desktop */}
      {!isMobile && <CursorGlow isDark={isDark} />}

      {isMobile ? (
        <MobileView isDark={isDark} />
      ) : (
        <DesktopView isDark={isDark} />
      )}
    </div>
  );
};

// --- MOBILE VIEW ---
const MobileView = ({ isDark }) => (
  <>
    <section className="relative py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto max-w-4xl"
      >
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white tracking-tighter">
          Digital Craftsmanship.
        </h1>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          We create digital experiences that resonate. Explore a curated
          selection of our work.
        </p>
      </motion.div>
    </section>
    <section className="px-4 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-2xl flex flex-col group ${
              isDark ? "bg-gray-900" : "bg-white shadow-lg"
            }`}
          >
            <div className="overflow-hidden rounded-t-2xl border-b-2 dark:border-gray-800 border-gray-100">
              <LazyLoadImage
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-contain object-top"
                effect="blur"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                {project.title}
              </h3>
              <p className="text-base opacity-80 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                      isDark
                        ? "bg-gray-800 text-cyan-400"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
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
                  className={`inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    isDark
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <section className="py-20 px-4 text-center bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
        <Link
          to="/contact"
          className={`inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
            isDark
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-gray-900 text-white hover:bg-black"
          }`}
        >
          Let's Talk
        </Link>
      </div>
    </section>
  </>
);

// --- DESKTOP VIEW ---
const DesktopView = ({ isDark }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
  const heroText = "Digital Craftsmanship.";
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: i * 0.04 },
    }),
  };
  const letterVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 -z-10 h-full w-full bg-gray-100 dark:bg-black dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2rem_2rem]">
          <motion.div
            animate={{
              background: [
                "rgba(212, 212, 212, 0.3)",
                "rgba(212, 212, 212, 0)",
                "rgba(212, 212, 212, 0.3)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#d4d4d4,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#ffffff11,transparent)]"
          />
        </div>
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-8xl font-black mb-6 text-gray-900 dark:text-white tracking-tighter"
          >
            {heroText.split("").map((char, i) => (
              <motion.span key={i} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-xl opacity-70 max-w-2xl mx-auto"
          >
            We don't just build websites; we create digital experiences that
            resonate. Scroll to explore a curated selection of our work.
          </motion.p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="mt-12 text-gray-500 dark:text-gray-400 flex flex-col items-center justify-center gap-2"
          >
            <span className="text-sm">Scroll to explore</span>
            <FiArrowDown />
          </motion.div>
        </div>
      </section>
      <section ref={targetRef} className="relative h-[600vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 pl-12">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-28 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto max-w-3xl"
        >
          <h2 className="text-6xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-lg mb-8 opacity-70">
            Let's collaborate and turn your idea into our next success story.
          </p>
          <Link
            to="/contact"
            className={`inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
              isDark
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-gray-900 text-white hover:bg-black"
            }`}
          >
            Let's Talk
          </Link>
        </motion.div>
      </section>
    </>
  );
};

// --- Common Components for Desktop View ---
const useMousePosition = () => {
  const [isHovering, setIsHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  useEffect(() => {
    const updateMouse = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const showCursor = () => setIsHovering(true);
    const hideCursor = () => setIsHovering(false);
    window.addEventListener("mousemove", updateMouse);
    document.body.addEventListener("mouseenter", showCursor);
    document.body.addEventListener("mouseleave", hideCursor);
    return () => {
      window.removeEventListener("mousemove", updateMouse);
      document.body.removeEventListener("mouseenter", showCursor);
      document.body.removeEventListener("mouseleave", hideCursor);
    };
  }, [x, y]);
  return { x, y, isHovering };
};

const CursorGlow = ({ isDark }) => {
  const { x, y, isHovering } = useMousePosition();
  const size = 300;
  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-soft-light ${
        isDark ? "bg-white" : "bg-black"
      }`}
      style={{ x: x, y: y }}
      animate={{
        width: size,
        height: size,
        x: x - size / 2,
        y: y - size / 2,
        opacity: isHovering ? 0.1 : 0,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  );
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: cardRef,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [50, 0, 0, 50]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <motion.div
      style={{ rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-[450px] w-[600px] overflow-hidden bg-gray-900 rounded-2xl shadow-2xl flex-shrink-0"
    >
      <div
        ref={cardRef}
        className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-105"
      >
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      <div className="fixed bottom-8 right-8 z-50"></div>
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white"
      >
        <h3 className="text-4xl font-bold mb-3">{project.title}</h3>
        <p className="text-xl opacity-80 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 bg-white text-black hover:bg-gray-200 scale-100 hover:scale-105"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 bg-white/20 hover:bg-white/30 text-white scale-100 hover:scale-105"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
