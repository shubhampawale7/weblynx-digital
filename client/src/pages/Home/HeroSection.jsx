import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import heroAnimationData from "../../assets/lottie-animations/hero-animation.json";

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const taglineRef = useRef(null);
  const mouseGlowRef = useRef(null);

  const taglines = [
    "Engineering Digital Excellence.",
    "Building Tomorrow's Digital Landscape.",
    "The Future of Your Online Presence.",
    "Crafting the Next Web Evolution.",
  ];

  useEffect(() => {
    // GSAP context for cleanup
    let ctx = gsap.context(() => {
      // --- Mouse Follow Glow Effect ---
      const handleMouseMove = (e) => {
        gsap.to(mouseGlowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 1.5,
          ease: "power3.out",
        });
      };
      window.addEventListener("mousemove", handleMouseMove);

      // --- Entrance Animation Timeline ---
      const tl = gsap.timeline({ delay: 0.5 });
      tl.from(".char", {
        opacity: 0,
        y: 50,
        skewX: -20,
        duration: 1,
        stagger: 0.03,
        ease: "power3.out",
      })
        .from(
          ".lottie-container",
          {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          ".tagline-wrapper",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        // --- NEW: Animating the intro paragraph ---
        .from(
          ".intro-paragraph",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .from(
          ".cta-button-group > *",
          {
            // Animating both buttons together
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          "<"
        );

      // --- Tagline Typing Animation ---
      const typingTl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.5,
        delay: 4,
      }); // Increased delay
      taglines.forEach((tagline) => {
        typingTl
          .to(taglineRef.current, {
            duration: 1.2,
            text: tagline,
            ease: "power1.inOut",
          })
          .to(taglineRef.current, {
            duration: 1,
            text: "",
            ease: "power1.in",
            delay: 1.5,
          });
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [isDark]);

  const headingText = "WEBLYNX INFOTECH";

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden
                  ${
                    isDark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
                  }
                  transition-colors duration-500 ease-in-out`}
    >
      <Seo
        title="Weblynx Infotech - Your Digital Services Partner"
        description="Weblynx Infotech offers expert MERN stack development, WordPress solutions, SEO optimization, mobile app development, and full-stack services to transform your online presence."
        keywords="digital services, web development, MERN stack, WordPress development, SEO optimization, API integration, full stack development, mobile app development, custom web applications, Weblynx Infotech, Pune, India"
        ogTitle="Weblynx Infotech - Your Digital Services Partner"
        ogDescription="Elevate your business with custom web and mobile applications, robust SEO, and comprehensive digital solutions from Weblynx Infotech."
        ogImage="https://www.weblynxinfotech.com/social-share-home.jpg"
        ogUrl="https://www.weblynxinfotech.com/"
        canonical="https://www.weblynxinfotech.com/"
      />

      <div
        ref={mouseGlowRef}
        className="pointer-events-none absolute -inset-40 z-20 rounded-full opacity-30 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${
            isDark ? "rgba(192, 132, 252, 0.4)" : "rgba(129, 140, 248, 0.5)"
          }, transparent 80%)`,
        }}
      ></div>

      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(${
            isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.2)"
          } 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 tracking-tighter">
              {headingText.split("").map((char, index) => (
                <span
                  key={index}
                  className="char inline-block text-transparent bg-clip-text bg-gradient-to-r 
                             from-blue-500 to-purple-600 dark:from-purple-400 dark:to-cyan-400"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <div className="tagline-wrapper text-xl md:text-2xl font-medium mb-6 min-h-[3rem] opacity-80">
              <span ref={taglineRef}></span>
              <span className="inline-block opacity-70 animate-pulse">|</span>
            </div>

            {/* --- NEW: Intro Paragraph --- */}
            <p className="intro-paragraph text-base md:text-lg max-w-lg mx-auto md:mx-0 mb-8 text-gray-700 dark:text-gray-300">
              We are a full-service digital agency based in Pune, specializing
              in crafting high-performance web applications. From the MERN stack
              to WordPress, we transform your vision into a digital reality that
              drives growth.
            </p>

            {/* --- NEW: CTA Group --- */}
            <div className="cta-button-group flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link to="/services">
                <button
                  className="px-8 py-3 w-full sm:w-auto rounded-full font-bold text-lg
                               text-white bg-purple-600 dark:bg-purple-500
                               hover:bg-purple-700 dark:hover:bg-purple-600
                               transform transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Explore Our Services
                </button>
              </Link>
              <Link
                to="/about"
                className="group text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <span className="font-semibold text-lg">
                  Our Story{" "}
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Lottie Animation */}
          <div className="lottie-container w-full max-w-md mx-auto md:max-w-none">
            <Lottie
              animationData={heroAnimationData}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
