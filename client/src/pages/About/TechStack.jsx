// client/src/pages/About/TechStack.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  // For icons that are text, make sure the icon property is just the emoji if possible,
  // or a very short, clear representation for 'aria-label'.
  // If "Markup" is meant as the icon itself, it will be text. I'll treat it as text.
  { name: "HTML5", icon: "📄" }, // Changed to an emoji icon for consistency
  { name: "CSS3", icon: "🎨" }, // Changed to an emoji icon for consistency
  { name: "JavaScript", icon: "📜" }, // Changed to an emoji icon for consistency
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
        y: -50, // Slide from top
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
        y: 50, // Slide up
        scale: 0.8, // Scale in
        duration: 0.6,
        ease: "back.out(1.2)",
        stagger: 0.08, // Stagger effect
        scrollTrigger: {
          trigger: techCardsRefs.current[0], // Trigger by the first badge
          start: "top 95%", // Staggered entry from bottom
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
      <div className="container mx-auto max-w-6xl">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 // Adjusted font sizes
                         text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600
                         dark:from-amber-400 dark:to-rose-400"
        >
          Our Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
          {" "}
          {/* Adjusted gap for responsiveness */}
          {techStackData.map((tech, index) => (
            <motion.div
              key={tech.name}
              ref={(el) => addToArrayRef(el, techCardsRefs)} // Using helper function
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
                  // Adjusted icon size
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
                role="img" // For accessibility
                aria-label={`${tech.name} icon`} // For accessibility
              >
                {tech.icon}
              </div>
              <p className="text-sm sm:text-lg font-semibold text-center">
                {tech.name}
              </p>{" "}
              {/* Adjusted font size */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
