// client/src/pages/About/Story.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../../components/common/Seo.jsx"; // Import Seo for this page

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null); // Ref for the main section to scope GSAP context

  // Refs for specific elements to animate
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textContentRefs = useRef([]); // Array for paragraphs/text children

  // Helper function to add elements to a ref array
  const addToArrayRef = (el, arr) => {
    if (el && !arr.current.includes(el)) {
      arr.current.push(el);
    }
  };

  useEffect(() => {
    // Clear ref arrays on each effect run to prevent duplicates
    textContentRefs.current = [];

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
        x: 100, // Slide from right
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation for text content
      gsap.from(textContentRefs.current, {
        y: 50, // Slide up
        stagger: 0.15, // Stagger paragraphs
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textContentRefs.current[0], // Trigger by the first text element
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef); // Scope the context to the main section ref

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="our-story" // Added ID for potential internal linking
      ref={sectionRef}
      className={`py-16 sm:py-20 px-4 ${
        // Adjusted padding for responsiveness
        isDark ? "bg-gray-950 text-white" : "bg-white text-gray-800"
      } transition-colors duration-300`}
    >
      {/* SEO for the Story Page */}
      <Seo
        title="Our Story - The Journey of Weblynx"
        description="Discover the inspiring story behind Weblynx, our passion for digital innovation, and our journey to becoming a leading web development agency focused on client success."
        keywords="Weblynx history, company story, digital agency journey, web development founding, our beginnings, innovation, collaboration"
        ogTitle="The Weblynx Story: Passionate About Digital Excellence"
        ogDescription="Learn about the values and vision that shaped Weblynx into a dedicated agency delivering cutting-edge digital solutions."
        ogImage="https://www.weblynx.com/about-us-story.jpg" // UPDATED: Your specific image URL
        ogUrl="https://www.weblynx.com/about" // Canonical URL for the About page
        canonical="https://www.weblynx.com/about"
      />

      <div className="container mx-auto max-w-5xl">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 // Adjusted font sizes
                         text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600
                         dark:from-purple-400 dark:to-cyan-400"
        >
          OUR STORY
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <img
              ref={imageRef}
              src="/about-us-story.jpg" // UPDATED: Path to your image in the public folder
              alt="Weblynx team collaborating on a digital project, representing our company's story and innovation" // Descriptive alt text for SEO
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-4 md:space-y-6 text-base md:text-lg opacity-90">
            <p ref={(el) => addToArrayRef(el, textContentRefs)}>
              Founded with a vision to bridge the gap between complex digital
              needs and seamless user experiences, Weblynx began as a passion
              project among a group of developers fascinated by the MERN stack
              and the endless possibilities of modern web technologies.
            </p>
            <p ref={(el) => addToArrayRef(el, textContentRefs)}>
              From humble beginnings, we've grown into a dedicated agency,
              driven by the belief that every business, regardless of its size,
              deserves a powerful and intuitive online presence. Our journey has
              been marked by continuous learning, adapting to the ever-evolving
              tech landscape, and a relentless pursuit of excellence.
            </p>
            <p ref={(el) => addToArrayRef(el, textContentRefs)}>
              Today, Weblynx stands as a testament to innovation, collaboration,
              and a client-first approach. We pride ourselves on crafting
              digital solutions that not only look good but also perform
              exceptionally, helping our clients achieve their strategic goals
              and connect with their audience effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
