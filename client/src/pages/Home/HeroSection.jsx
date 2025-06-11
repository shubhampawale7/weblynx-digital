// client/src/pages/Home/HeroSection.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionConfig, motion } from "framer-motion";
import Lottie from "lottie-react"; // Import Lottie component
import { NavLink, Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx"; // Import the Seo component

// IMPORTANT: Make sure this path matches where you saved your .json file!
// This import line is crucial for heroAnimationData to be defined.
import heroAnimationData from "../../assets/lottie-animations/hero-animation.json";

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const taglineRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const mainHeadingRef = useRef(null); // Ref for the main heading

  const taglines = [
    "Engineering Digital Excellence with Weblynx Infotech.",
    "Connecting Your Business to Tomorrow's Digital Landscape.",
    "Building the Future of Your Online Presence.",
    "Crafting the Next Evolution of Web Experiences.",
  ];

  useEffect(() => {
    // Wrap all GSAP animations in a context for proper cleanup
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      if (taglineRef.current) {
        // Ensure ref is not null before animating
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
      }

      if (ctaButtonRef.current) {
        // Ensure ref is not null
        gsap.from(ctaButtonRef.current, {
          y: 50,
          duration: 1,
          delay: 2,
          ease: "power3.out",
        });
      }

      // Main Heading Animation - Add conditional check
      if (mainHeadingRef.current) {
        gsap.from(mainHeadingRef.current, {
          y: -50,
          duration: 1,
          ease: "power3.out",
        });
      }

      gsap.to(".hero-bg-gradient", {
        backgroundPosition: "200% 0%",
        duration: 30,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert(); // Cleanup all GSAP animations
  }, [taglines]); // Re-run if taglines change (unlikely)

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
      <Seo
        title="Weblynx Infotech - Your Digital Services Partner"
        description="Weblynx Infotech offers expert MERN stack development, WordPress solutions, SEO optimization, mobile app development, and full-stack services to transform your online presence. Crafting the next evolution of web experiences."
        keywords="digital services, web development, MERN stack, WordPress development, SEO optimization, API integration, full stack development, mobile app development, custom web applications, Weblynx Infotech, Pune, India"
        ogTitle="Weblynx Infotech - Your Digital Services Partner"
        ogDescription="Elevate your business with custom web and mobile applications, robust SEO, and comprehensive digital solutions from Weblynx Infotech."
        ogImage="https://www.weblynxinfotech.com/social-share-home.jpg"
        ogUrl="https://www.weblynxinfotech.com/"
        canonical="https://www.weblynxinfotech.com/"
      />

      <div
        className="hero-bg-gradient absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(90deg, ${
            isDark ? "#0a0a0a, #2c004c, #0a0a0a, 1a1a1a" : "transparent"
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
          ref={mainHeadingRef}
        >
          WEBLYNX INFOTECH
        </motion.h1>

        <h2
          ref={taglineRef}
          className="text-3xl md:text-4xl font-semibold mb-8 min-h-[4rem] flex justify-center items-center opacity-90"
        >
          Building the Future of Your Online Presence.
        </h2>

        {/* Lottie Animation Integration - Uses heroAnimationData */}
        <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
          <Lottie
            animationData={heroAnimationData} // This is the variable in question
            loop={true}
            autoplay={true}
          />
        </div>

        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          {/* <Link
            to="/contact"
            ref={ctaButtonRef}
            className={`inline-block px-10 py-4 text-xl font-bold rounded-full shadow-lg transform active:scale-95 transition-all duration-300
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
          </Link> */}
        </MotionConfig>
      </div>
    </section>
  );
};

export default HeroSection;
