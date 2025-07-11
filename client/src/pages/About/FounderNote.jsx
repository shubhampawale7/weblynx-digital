import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaQuoteLeft } from "react-icons/fa";
import Seo from "../../components/common/Seo.jsx";

gsap.registerPlugin(ScrollTrigger);

const FounderNote = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionRef = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    // A single context for all GSAP animations in this component
    const ctx = gsap.context(() => {
      timeline.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%", // Start animation when 60% of the section is in view
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          ".founder-card",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(
          ".founder-image",
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.75)",
          },
          "-=0.5" // Overlap with previous animation
        )
        .from(
          ".founder-heading",
          { y: -30, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .from(
          ".founder-content p",
          {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".founder-signature",
          {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    // Cleanup function to revert all animations
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="founder-note"
      ref={sectionRef}
      className={`relative py-20 sm:py-28 overflow-hidden ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } transition-colors duration-300`}
    >
      {/* SEO Component remains the same as it's content-focused */}
      <Seo
        title="A Word from Our Founder - Shubham Pawale | Weblynx Infotech"
        description="Read a personal message from Shubham Pawale, Founder and Lead Developer of Weblynx Infotech, sharing his vision, philosophy, and dedication to crafting impactful digital experiences."
        keywords="Shubham Pawale, Weblynx Infotech founder, founder message, lead developer, company vision, digital services philosophy"
        ogTitle="Message from Shubham Pawale, Founder of Weblynx Infotech"
        ogDescription="Gain insight into the core values driving Weblynx Infotech directly from our founder, Shubham Pawale."
        ogImage="https://www.weblynxinfotech.com/founder-avatar.jpg"
        ogUrl="https://www.weblynxinfotech.com/about#founder-note"
        canonical="https://www.weblynxinfotech.com/about#founder-note"
      />

      {/* Decorative Background Element */}
      <FaQuoteLeft
        className={`absolute top-16 left-1/2 -translate-x-1/2 text-[12rem] md:text-[18rem] z-0 transition-colors duration-300 ${
          isDark ? "text-gray-800/60" : "text-gray-200/80"
        }`}
      />

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <h2
          className="founder-heading text-4xl md:text-5xl font-bold text-center mb-16
                     text-transparent bg-clip-text bg-gradient-to-r 
                     from-orange-500 to-red-600
                     dark:from-amber-400 dark:to-rose-400"
        >
          A Word from Our Founder
        </h2>

        {/* Main Content Card */}
        <div
          className="founder-card grid grid-cols-1 md:grid-cols-3 gap-8 items-center
                     p-8 md:p-12 rounded-2xl shadow-xl
                     transition-colors duration-300
                     bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
        >
          {/* Image and Title Section - Spans 1 column */}
          <div className="flex flex-col items-center text-center md:col-span-1">
            <img
              src="/founder-avatar.jpg"
              alt="Shubham Pawale, Founder of Weblynx Infotech"
              className="founder-image w-40 h-40 md:w-48 md:h-48 rounded-full object-cover 
                         border-4 border-blue-500 dark:border-purple-500 
                         shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
            <div className="mt-4">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                Shubham Pawale
              </p>
              <p className="text-md text-gray-600 dark:text-gray-400">
                Founder & Lead Developer
              </p>
            </div>
          </div>

          {/* Text Content Section - Spans 2 columns */}
          <div className="md:col-span-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <div className="founder-content space-y-4 text-center md:text-left">
              <p>
                "When I started Weblynx Infotech, my core philosophy was simple:
                to create digital experiences that truly matter. I believe that
                technology should be a seamless bridge between a business's
                vision and its audience, empowering growth and fostering genuine
                connections."
              </p>
              <p>
                "My journey in web development, starting with a passion for
                clean code and intuitive design, has led me to appreciate the
                profound impact a well-crafted digital presence can have. At
                Weblynx Infotech, we don't just build websites; we craft
                solutions that solve real problems and open new opportunities
                for our clients."
              </p>
              <p>
                "Thank you for considering Weblynx Infotech as your digital
                partner. We're excited about the possibility of building
                something exceptional together and helping your vision come to
                life."
              </p>
            </div>

            <p
              className="founder-signature mt-8 text-2xl font-handwriting italic font-semibold text-right
                         transition-colors duration-300
                         text-blue-700 dark:text-purple-300"
            >
              Shubham Pawale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
