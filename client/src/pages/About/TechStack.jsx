import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import Seo from "../../components/common/Seo.jsx";

// Import specific icons from react-icons
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWordpress,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { FaGlobe } from "react-icons/fa"; // For REST APIs

// --- UPDATED Tech Stack Data ---
// Using actual react-icon components for a professional look.
// Divided into two rings for the orbital design.
const techStackData = {
  outerRing: [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  ],
  innerRing: [
    { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "GSAP", Icon: SiGreensock, color: "#88CE02" },
    { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
    { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
    { name: "REST APIs", Icon: FaGlobe, color: "#808080" },
  ],
};

const TechStack = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const outerRingRef = useRef(null);
  const innerRingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main heading
      gsap.from(".tech-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });

      // Perpetual rotation for the rings
      gsap.to(outerRingRef.current, {
        rotation: 360,
        duration: 90,
        repeat: -1,
        ease: "none",
      });
      gsap.to(innerRingRef.current, {
        rotation: -360,
        duration: 60,
        repeat: -1,
        ease: "none",
      });

      // Animate the icons into view
      gsap.from(".tech-icon-wrapper", {
        scrollTrigger: {
          trigger: ".tech-cosmos",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.07,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Function to render a ring of tech icons
  const renderRing = (technologies, radius, ringRef, initialRotation = 0) => {
    const angleStep = (2 * Math.PI) / technologies.length;
    return (
      <div
        ref={ringRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        {technologies.map(({ name, Icon, color }, index) => {
          const angle = index * angleStep;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const rotation = (angle * 180) / Math.PI + 90; // Align icon to the tangent

          return (
            <div
              key={name}
              className="tech-icon-wrapper group absolute"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <div className="relative flex flex-col items-center">
                <Icon
                  style={{ color: color }}
                  className="text-4xl md:text-5xl transition-all duration-300 ease-in-out 
                             group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_var(--glow-color)]"
                />
                <span
                  className="absolute top-full mt-3 px-3 py-1 rounded-md text-sm font-bold 
                             bg-gray-800 text-white dark:bg-white dark:text-gray-900 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                >
                  {name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className={`py-20 sm:py-28 overflow-hidden ${
        isDark ? "bg-gray-950 text-white" : "bg-black text-white"
      } transition-colors duration-300`}
    >
      <Seo
        title="Our Tech Stack | Weblynx Infotech - Modern Web Technologies"
        description="Explore the cutting-edge technologies and frameworks Weblynx Infotech specializes in, including React, Node.js, Express.js, MongoDB, WordPress, Tailwind CSS, GSAP, and more."
        keywords="Weblynx Infotech tech stack, web development technologies, MERN stack, WordPress development, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, GSAP, Framer Motion, frontend, backend, full stack"
        ogTitle="Weblynx Infotech: Building with Cutting-Edge Technologies"
        ogDescription="See the powerful tools and frameworks Weblynx Infotech leverages to build high-performance and innovative digital solutions."
        ogUrl="https://www.weblynxinfotech.com/about#tech-stack"
        canonical="https://www.weblynxinfotech.com/about#tech-stack"
      />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="tech-heading text-4xl md:text-5xl font-bold
                       text-transparent bg-clip-text bg-gradient-to-r 
                       from-orange-500 to-red-600
                       dark:from-amber-400 dark:to-rose-400"
          >
            Our Tech Cosmos
          </h2>
          <p className="tech-heading mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A curated ecosystem of modern technologies we use to build
            high-performance applications.
          </p>
        </div>

        <div className="tech-cosmos relative w-full max-w-xl md:max-w-3xl mx-auto aspect-square">
          {/* --- Central Core --- */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center text-center
                                 font-bold text-lg transition-all duration-300
                                 ${
                                   isDark
                                     ? "bg-gray-900 text-gray-300 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                                     : "bg-gray-200 text-gray-700 shadow-[0_0_30px_rgba(0,0,0,0.1)]"
                                 }`}
            >
              Core Stack
            </div>
          </div>

          {/* --- Rings --- */}
          {renderRing(techStackData.outerRing, 280, outerRingRef)}
          {renderRing(techStackData.innerRing, 180, innerRingRef)}
          {/* Note: The radius (e.g., 280, 180) might need tweaking on smaller screens or different aspect ratios */}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
