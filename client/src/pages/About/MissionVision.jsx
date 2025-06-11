// client/src/pages/About/MissionVision.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx"; // Import Seo component

gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null); // Ref for the entire component's root div

  // Refs for specific elements to animate
  const headingRef = useRef(null);
  const missionCardRef = useRef(null);
  const visionCardRef = useRef(null);

  useEffect(() => {
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

      // Animation for Mission card
      gsap.from(missionCardRef.current, {
        x: -100, // Slide from left
        scale: 0.8, // Scale in
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionCardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation for Vision card
      gsap.from(visionCardRef.current, {
        x: 100, // Slide from right
        scale: 0.8, // Scale in
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionCardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="mission-vision" // Added ID for potential internal linking
      className={`py-16 sm:py-20 px-4 ${
        // Adjusted padding for responsiveness
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } transition-colors duration-300`}
      ref={sectionRef}
    >
      {/* SEO for Mission & Vision Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="Our Mission & Vision | Weblynx Infotech" // UPDATED
        description="Discover the core mission and ambitious vision that drive Weblynx Infotech to deliver innovative and impactful digital solutions worldwide." // UPDATED
        keywords="Weblynx Infotech mission, Weblynx Infotech vision, company values, digital innovation, future of web development, digital solutions goals" // UPDATED
        ogTitle="Weblynx Infotech: Mission-Driven, Vision-Led Digital Agency" // UPDATED
        ogDescription="Explore the guiding principles and future aspirations of Weblynx Infotech in crafting digital excellence." // UPDATED
        ogUrl="https://www.weblynxinfotech.com/about#mission-vision" // UPDATED: Use your new domain
        canonical="https://www.weblynxinfotech.com/about#mission-vision" // UPDATED: Use your new domain
      />

      <div className="container mx-auto max-w-5xl">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16
                         text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600
                         dark:from-cyan-400 dark:to-lime-400"
        >
          Our Mission & Vision
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
          {/* Mission Card */}
          <motion.div
            ref={missionCardRef}
            className={`md:w-1/2 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center
                        ${
                          isDark
                            ? "bg-gray-800 border border-gray-700"
                            : "bg-white border border-gray-200"
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
              className={`text-5xl sm:text-6xl mb-4 sm:mb-6 p-3 sm:p-4 rounded-full inline-block
                                 ${
                                   isDark
                                     ? "bg-purple-600/20 text-purple-400"
                                     : "bg-blue-600/10 text-blue-600"
                                 }`}
              role="img"
              aria-label="Target icon representing mission"
            >
              🎯
            </div>
            <h3 className="text-xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-blue-600 dark:text-purple-400">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg opacity-90">
              To empower businesses by delivering cutting-edge, tailor-made
              digital solutions that drive growth, enhance user engagement, and
              streamline operations, fostering long-term partnerships built on
              trust and innovation.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            ref={visionCardRef}
            className={`md:w-1/2 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center
                        ${
                          isDark
                            ? "bg-gray-800 border border-gray-700"
                            : "bg-white border border-gray-200"
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
              className={`text-5xl sm:text-6xl mb-4 sm:mb-6 p-3 sm:p-4 rounded-full inline-block
                                 ${
                                   isDark
                                     ? "bg-cyan-600/20 text-cyan-400"
                                     : "bg-green-600/10 text-green-600"
                                 }`}
              role="img"
              aria-label="Telescope icon representing vision"
            >
              🔭
            </div>
            <h3 className="text-xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-green-600 dark:text-cyan-400">
              Our Vision
            </h3>
            <p className="text-base sm:text-lg opacity-90">
              To be a global leader in digital innovation, recognized for our
              creative solutions, technical excellence, and commitment to
              pushing the boundaries of what's possible in the web and
              application development space.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
