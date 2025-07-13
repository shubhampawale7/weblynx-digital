// client/src/pages/Portfolio/Portfolio.jsx
import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { FiGithub, FiExternalLink, FiArrowDown } from "react-icons/fi";

// --- UPDATED: Project descriptions are now short taglines ---
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

const Portfolio = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
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
  const contentStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const contentRise = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Weblynx Infotech Portfolio - Our Creative Work"
        description="Explore a gallery of creative and impactful web development projects by Weblynx Infotech. See our expertise in creating unique digital experiences."
        keywords="creative portfolio, web development projects, web design gallery, horizontal scroll portfolio, framer motion portfolio, React projects"
        ogTitle="The Creative Portfolio of Weblynx Infotech"
        ogDescription="Discover our work in a unique, interactive gallery showcasing the best of our e-commerce, corporate, and SaaS projects."
        ogUrl="https://www.weblynxinfotech.com/portfolio"
        canonical="https://www.weblynxinfotech.com/portfolio"
      />
      <CursorGlow isDark={isDark} />
      <section className="relative py-28 sm:py-32 px-4 text-center">
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
            className="text-5xl md:text-8xl font-black mb-6 text-gray-900 dark:text-white tracking-tighter"
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
            className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto"
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

      {/* Horizontal Scroll Projects Section */}
      <section ref={targetRef} className="relative h-[600vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 pl-12">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- NEW: Overall Write-up Section --- */}
      <section className="py-28 sm:py-32 px-4">
        <motion.div
          variants={contentStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={contentRise}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-cyan-400"
          >
            Your Vision, Realized Through Technology.
          </motion.h2>
          <motion.div
            variants={contentRise}
            className="mt-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 space-y-6 font-serif leading-relaxed"
          >
            <p>
              You've seen our work, but each project is more than just a
              collection of code and pixels—it's a story of a partnership. It's
              a business challenge accepted and a digital solution delivered
              with precision and passion.
            </p>
            <p>
              Our approach combines strategic thinking with technical
              excellence. We build scalable, high-performance applications
              designed not just to function, but to drive growth and deliver
              tangible results. The next success story we want to tell is yours.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-28 sm:py-32 px-4 text-center bg-gray-200 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
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
    </div>
  );
};

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
      className="group relative h-[300px] w-[400px] md:h-[450px] md:w-[600px] overflow-hidden bg-gray-900 rounded-2xl shadow-2xl flex-shrink-0"
    >
      <div
        ref={cardRef}
        className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-105"
      >
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white"
      >
        {/* Adjusted layout for shorter descriptions */}
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
