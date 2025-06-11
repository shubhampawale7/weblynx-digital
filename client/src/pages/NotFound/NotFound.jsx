// client/src/pages/NotFound/NotFound.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../../components/common/Seo.jsx"; // Import Seo component

gsap.registerPlugin(ScrollTrigger);

const NotFound = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null); // Ref for the main section to scope GSAP context
  const headingRef = useRef(null);
  const introTextRef = useRef(null);
  const messageTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // GSAP animation for the 404 text
      gsap.from(headingRef.current, {
        y: -50,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
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
        delay: 0.7,
      });

      // GSAP animation for the button
      gsap.from(buttonRef.current, {
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.9,
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
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
      {/* SEO for the 404 Not Found Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="Page Not Found | Weblynx Infotech" // UPDATED
        description="The page you are looking for on Weblynx Infotech might have been moved, deleted, or never existed. Please return to our homepage." // UPDATED
        keywords="404 error, page not found, Weblynx Infotech, invalid URL, broken link" // UPDATED
        ogTitle="Oops! Page Not Found - Weblynx Infotech" // UPDATED
        ogDescription="We couldn't find the page you were looking for on Weblynx Infotech. Explore our services or contact us." // UPDATED
        ogUrl="https://www.weblynxinfotech.com/404" // UPDATED: Use your new domain for the 404 URL
        canonical="https://www.weblynxinfotech.com/404" // UPDATED: Use your new domain
      />

      <h1
        ref={headingRef}
        className="text-8xl sm:text-9xl md:text-[10rem] font-extrabold mb-4
                   text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600
                   dark:from-red-400 dark:to-yellow-400"
      >
        404
      </h1>
      <p
        ref={introTextRef}
        className="text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 opacity-90"
      >
        Oops! Page Not Found
      </p>
      <p
        ref={messageTextRef}
        className="text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 sm:mb-12 opacity-80 px-4"
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
