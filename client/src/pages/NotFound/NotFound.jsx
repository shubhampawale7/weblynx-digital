// client/src/pages/NotFound/NotFound.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Ensure ScrollTrigger is imported for context cleanup

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const NotFound = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null); // Ref for the main section to scope GSAP context
  const headingRef = useRef(null);
  const introTextRef = useRef(null); // Renamed for clarity from textRef
  const messageTextRef = useRef(null); // New ref for the longer descriptive paragraph
  const buttonRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // GSAP animation for the 404 text
      gsap.from(headingRef.current, {
        y: -50,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        delay: 0.2, // Small delay on mount
      });

      // GSAP animation for the explanatory text ("Oops! Page Not Found")
      gsap.from(introTextRef.current, {
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      });

      // GSAP animation for the descriptive message
      gsap.from(messageTextRef.current, {
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.7, // Slightly delayed
      });

      // GSAP animation for the button
      gsap.from(buttonRef.current, {
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.9, // Last to animate
      });

      ScrollTrigger.refresh(); // Ensure accurate trigger positions if content changes
    }, sectionRef); // Scope the context to the main section ref

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <section
      ref={sectionRef} // Attach ref to the main section
      className={`min-h-screen flex flex-col items-center justify-center text-center p-8
                  ${
                    isDark
                      ? "bg-gradient-to-br from-gray-950 to-gray-800 text-white"
                      : "bg-gradient-to-br from-blue-50 to-white text-gray-800"
                  }
                  transition-colors duration-500`}
    >
      <h1
        ref={headingRef}
        className="text-8xl sm:text-9xl md:text-[10rem] font-extrabold mb-4 // Responsive font size for 404
                   text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600
                   dark:from-red-400 dark:to-yellow-400"
      >
        404
      </h1>
      <p
        ref={introTextRef} // Using introTextRef
        className="text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 opacity-90" // Adjusted margin for responsiveness
      >
        Oops! Page Not Found
      </p>
      <p
        ref={messageTextRef} // Using messageTextRef
        className="text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 sm:mb-12 opacity-80 px-4" // Adjusted font size, margin, and padding
      >
        It looks like you've wandered into uncharted digital territory. The page
        you're looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <Link
        to="/"
        ref={buttonRef}
        className={`inline-block px-8 py-4 text-lg md:text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300
                    ${
                      isDark
                        ? "bg-purple-700 text-white hover:bg-purple-600"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
      >
        Go to Homepage
      </Link>
    </section>
  );
};

export default NotFound;
