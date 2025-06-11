// client/src/pages/About/FounderNote.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../../components/common/Seo.jsx";

gsap.registerPlugin(ScrollTrigger);

const FounderNote = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null); // Ref for the entire component's root div

  // Refs for specific elements to animate
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const contentRefs = useRef([]); // Array for content paragraphs
  const signatureRef = useRef(null);

  // Helper function to add elements to a ref array
  const addToArrayRef = (el, arr) => {
    if (el && !arr.current.includes(el)) {
      arr.current.push(el);
    }
  };

  useEffect(() => {
    // Clear ref array on each effect run to prevent duplicates
    contentRefs.current = [];

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

      // Animation for image
      gsap.from(imageRef.current, {
        x: -100, // Slide from left
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation for text content (staggered slide up)
      gsap.from(contentRefs.current, {
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRefs.current[0], // Trigger by the first paragraph
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation for signature (slide in)
      gsap.from(signatureRef.current, {
        x: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: signatureRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="founder-note" // Added ID for potential internal linking
      ref={sectionRef}
      className={`py-16 sm:py-20 px-4 ${
        // Adjusted padding for responsiveness
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } transition-colors duration-300`}
    >
      {/* SEO for the Founder's Note Section */}
      <Seo
        title="A Word from Our Founder - Shubham Pawale | Weblynx"
        description="Read a personal message from Shubham Pawale, Founder and Lead Developer of Weblynx, sharing his vision, philosophy, and dedication to crafting impactful digital experiences."
        keywords="Shubham Pawale, Weblynx founder, founder message, lead developer, company vision, digital services philosophy"
        ogTitle="Message from Shubham Pawale, Founder of Weblynx"
        ogDescription="Gain insight into the core values driving Weblynx directly from our founder, Shubham Pawale."
        ogImage="https://www.weblynx.com/founder-avatar.jpg" // UPDATED: Points to your image in public folder
        ogUrl="https://www.weblynx.com/about#founder-note"
        canonical="https://www.weblynx.com/about#founder-note"
      />

      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16
                         text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600
                         dark:from-amber-400 dark:to-rose-400"
          ref={headingRef}
        >
          A Word from Our Founder
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="md:w-1/3 flex flex-col items-center">
            <img
              ref={imageRef}
              src="/founder-avatar.jpg" // FINALIZED: Path to your image in the public folder
              alt="Shubham Pawale, Founder of Weblynx"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-blue-500 dark:border-purple-500 shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
            <p className="mt-4 text-lg sm:text-xl font-semibold">
              Shubham Pawale
            </p>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              Founder & Lead Developer, Weblynx
            </p>
          </div>
          <div className="md:w-2/3 space-y-4 sm:space-y-6 text-base sm:text-lg opacity-90 text-center md:text-left">
            <div ref={(el) => addToArrayRef(el, contentRefs)}>
              <p>
                "When I started Weblynx, my core philosophy was simple: to
                create digital experiences that truly matter. I believe that
                technology should be a seamless bridge between a business's
                vision and its audience, empowering growth and fostering genuine
                connections."
              </p>
              <p>
                "My journey in web development, starting with a passion for
                clean code and intuitive design, has led me to appreciate the
                profound impact a well-crafted digital presence can have. At
                Weblynx, we don't just build websites; we craft solutions that
                solve real problems and open new opportunities for our clients."
              </p>
              <p>
                "Thank you for considering Weblynx as your digital partner.
                We're excited about the possibility of building something
                exceptional together and helping your vision come to life."
              </p>
            </div>
            <p
              ref={signatureRef}
              className={`mt-4 sm:mt-8 text-xl sm:text-2xl font-handwriting italic font-semibold text-right md:text-left
                                             ${
                                               isDark
                                                 ? "text-purple-300"
                                                 : "text-blue-700"
                                             }`}
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
