// client/src/pages/About/TechStack.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../../components/common/Seo.jsx"; // Import Seo component

gsap.registerPlugin(ScrollTrigger);

const techStackData = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "⚡" },
  { name: "MongoDB", icon: "🍃" },
  { name: "WordPress", icon: "🔵" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "GSAP", icon: "🎬" },
  { name: "Framer Motion", icon: "✨" },
  { name: "REST APIs", icon: "🌐" },
  { name: "HTML5", icon: "📄" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
];

const TechStack = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null); // Ref for the main section to scope GSAP context

  // Refs for specific elements to animate
  const headingRef = useRef(null);
  const techCardsRefs = useRef([]); // Array for tech badges

  // Helper function to add elements to a ref array
  const addToArrayRef = (el, arr) => {
    if (el && !arr.current.includes(el)) {
      arr.current.push(el);
    }
  };

  useEffect(() => {
    // Clear ref array on each effect run to prevent duplicates
    techCardsRefs.current = [];

    let ctx = gsap.context(() => {
      // Heading Animation
      gsap.from(headingRef.current, {
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation for tech badges
      gsap.from(techCardsRefs.current, {
        y: 50,
        scale: 0.8,
        duration: 0.6,
        ease: "back.out(1.2)",
        stagger: 0.08,
        scrollTrigger: {
          trigger: techCardsRefs.current[0],
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef); // Scope the context to the main section ref

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="tech-stack" // Added ID for potential internal linking
      ref={sectionRef}
      className={`py-16 sm:py-20 px-4 ${
        // Adjusted padding for responsiveness
        isDark ? "bg-gray-950 text-white" : "bg-white text-gray-800"
      } transition-colors duration-300`}
    >
      {/* SEO for Tech Stack Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="Our Tech Stack | Weblynx Infotech - Modern Web Technologies" // UPDATED
        description="Explore the cutting-edge technologies and frameworks Weblynx Infotech specializes in, including React, Node.js, Express.js, MongoDB, WordPress, Tailwind CSS, GSAP, and more." // UPDATED
        keywords="Weblynx Infotech tech stack, web development technologies, MERN stack, WordPress development, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, GSAP, Framer Motion, frontend, backend, full stack" // UPDATED
        ogTitle="Weblynx Infotech: Building with Cutting-Edge Technologies" // UPDATED
        ogDescription="See the powerful tools and frameworks Weblynx Infotech leverages to build high-performance and innovative digital solutions." // UPDATED
        ogUrl="https://www.weblynxinfotech.com/about#tech-stack" // UPDATED: Use your new domain
        canonical="https://www.weblynxinfotech.com/about#tech-stack" // UPDATED: Use your new domain
      />

      <div className="container mx-auto max-w-6xl">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16
                         text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600
                         dark:from-amber-400 dark:to-rose-400"
        >
          Our Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
          {techStackData.map((tech, index) => (
            <motion.div
              key={tech.name}
              ref={(el) => addToArrayRef(el, techCardsRefs)}
              className={`p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[100px] sm:min-h-[120px] w-full max-w-[140px] sm:max-w-[160px]
                          ${
                            isDark
                              ? "bg-gray-800 border border-gray-700"
                              : "bg-gray-100 border border-gray-200"
                          }
                          transform transition-all duration-300 group`}
              whileHover={{
                y: -5,
                boxShadow: isDark
                  ? "0 10px 20px rgba(0, 0, 0, 0.3)"
                  : "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className={`text-3xl sm:text-4xl mb-2 sm:mb-3 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
                role="img"
                aria-label={`${tech.name} icon`}
              >
                {tech.icon}
              </div>
              <p className="text-sm sm:text-lg font-semibold text-center">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
