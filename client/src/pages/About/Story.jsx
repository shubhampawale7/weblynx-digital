import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../../components/common/Seo.jsx";

gsap.registerPlugin(ScrollTrigger);

// Define the story content as an array of objects
const storyPoints = [
  {
    title: "The Spark of an Idea",
    description:
      "Our journey began with a shared passion for the MERN stack and a vision to bridge the gap between complex digital needs and seamless, elegant user experiences.",
  },
  {
    title: "Growth & Adaptation",
    description:
      "Driven by the belief that every business deserves a powerful online presence, we've evolved into a dedicated agency, constantly learning and adapting in the ever-changing tech landscape.",
  },
  {
    title: "Our Commitment Today",
    description:
      "Today, Weblynx Infotech is a testament to innovation and a client-first approach. We craft digital solutions that perform exceptionally, helping our clients achieve their goals.",
  },
];

const Story = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);
  const textRefs = useRef([]);
  textRefs.current = [];

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    const pin = gsap.fromTo(
      contentRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${(storyPoints.length - 1) * 100}vw`,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${storyPoints.length * 1000}`, // Duration of the pin
          scrub: 0.8,
          pin: true,
        },
      }
    );

    // Animate the background image
    gsap.to(".story-background-image", {
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${storyPoints.length * 1000}`,
        scrub: 0.8,
      },
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <Seo
        title="Our Story - The Journey of Weblynx Infotech"
        description="Discover the inspiring story behind Weblynx Infotech, our passion for digital innovation, and our journey to becoming a leading web development agency focused on client success."
        keywords="Weblynx Infotech history, company story, digital agency journey, web development founding, our beginnings, innovation, collaboration"
        ogTitle="The Weblynx Infotech Story: Passionate About Digital Excellence"
        ogDescription="Learn about the values and vision that shaped Weblynx Infotech into a dedicated agency delivering cutting-edge digital solutions."
        ogImage="https://www.weblynxinfotech.com/about-us-story.jpg"
        ogUrl="https://www.weblynxinfotech.com/about"
        canonical="https://www.weblynxinfotech.com/about"
      />
      <div
        ref={triggerRef}
        className={`relative h-screen overflow-hidden ${
          isDark ? "bg-gray-950 text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* Static Heading */}
        <div className="absolute top-16 md:top-24 left-1/2 -translate-x-1/2 z-20 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold
                           text-transparent bg-clip-text bg-gradient-to-r 
                           from-blue-500 to-purple-600
                           dark:from-purple-400 dark:to-cyan-400"
          >
            OUR STORY
          </h2>
        </div>

        {/* Pinned Content */}
        <div
          ref={contentRef}
          className="h-full w-[300vw] flex flex-row relative"
        >
          {/* Background Image - will be shared across all slides */}
          <div className="story-background-image absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60"></div>
            <img
              src="/about-us-story.jpg"
              alt="Weblynx Infotech team collaborating"
              className="w-full h-full object-cover"
            />
          </div>

          {storyPoints.map((point, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="w-screen h-full flex flex-col justify-center items-center text-center p-8 z-10"
            >
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {point.title}
                </h3>
                <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
