// client/src/pages/Home/HeroSection.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionConfig, motion } from "framer-motion";
import Lottie from "lottie-react"; // Import Lottie component

// Import your Lottie animation JSON file
// IMPORTANT: Make sure the path matches where you saved your .json file!
import heroAnimationData from "../../assets/lottie-animations/hero-animation.json";

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const taglineRef = useRef(null);
  const ctaButtonRef = useRef(null);
  // animationContainerRef is no longer strictly needed if using Lottie component directly
  // but can be kept for other purposes or if you manually load Lottie.

  const taglines = [
    "Engineering Digital Excellence.",
    "Connecting Your Business to Tomorrow's Digital Landscape.",
    "Building the Future of Your Online Presence.",
    "Crafting the Next Evolution of Web Experiences.",
  ];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    taglines.forEach((tagline, index) => {
      tl.to(taglineRef.current, {
        duration: 1.5,
        text: tagline,
        ease: "power1.inOut",
        delay: index === 0 ? 0 : 0.5,
      }).to(taglineRef.current, {
        duration: 0.8,
        text: "",
        ease: "power1.inOut",
        delay: 2,
      });
    });

    gsap.from(ctaButtonRef.current, {
      y: 50,
      duration: 1,
      delay: 2,
      ease: "power3.out",
    });

    gsap.to(".hero-bg-gradient", {
      backgroundPosition: "200% 0%",
      duration: 30,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, [taglines]);

  return (
    <section
      className={`relative min-h-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden
                        ${
                          isDark
                            ? "bg-gradient-to-br from-gray-950 to-gray-800 text-white"
                            : "bg-gradient-to-br from-blue-50 to-white text-gray-900"
                        }
                        transition-colors duration-500 ease-in-out`}
    >
      <div
        className="hero-bg-gradient absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(90deg, ${
            isDark ? "#0a0a0a, #2c004c, #0a0a0a, #1a1a1a" : "transparent"
          })`,
          backgroundSize: "200% 100%",
          filter: isDark ? "blur(80px)" : "none",
          pointerEvents: "none",
        }}
      ></div>

      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg
                     text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600
                     dark:from-purple-400 dark:to-cyan-400"
        >
          Weblynx
        </motion.h1>

        <h2
          ref={taglineRef}
          className="text-3xl md:text-4xl font-semibold mb-8 min-h-[4rem] flex justify-center items-center opacity-90"
        >
          Building the Future of Your Online Presence.
        </h2>

        {/* Lottie Animation Integration */}
        <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
          <Lottie
            animationData={heroAnimationData}
            loop={true} // Loop the animation
            autoplay={true} // Play automatically
            // You can add style or className here if needed
          />
        </div>

        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          {/* <motion.button
            ref={ctaButtonRef}
            whileHover={{
              scale: 1.05,
              boxShadow: isDark
                ? "0 0 30px rgba(168, 85, 247, 0.6)"
                : "0 0 30px rgba(37, 99, 235, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-10 py-4 text-xl font-bold rounded-full shadow-lg transform active:scale-95 transition-all duration-300
                        ${
                          isDark
                            ? "bg-purple-700 text-white hover:bg-purple-600"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }
                        relative overflow-hidden group`}
          >
            <span className="relative z-10">Let’s Build Your Vision</span>
            <span
              className={`absolute inset-0 rounded-full border-2
                              ${
                                isDark
                                  ? "border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                  : "border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              }`}
              aria-hidden="true"
            ></span>
          </motion.button> */}
        </MotionConfig>
      </div>
    </section>
  );
};

export default HeroSection;
