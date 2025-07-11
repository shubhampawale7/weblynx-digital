import React, { useRef, useEffect, useState, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import Seo from "../../components/common/Seo.jsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// --- UPDATED Testimonials Data with Indian Names ---
const testimonialsData = [
  {
    name: "Priya Sharma",
    company: "Aakash Textiles",
    quote:
      "Working with Weblynx Infotech was a game-changer. Their team in Pune understood our vision perfectly and delivered a web application that has streamlined our entire operation.",
  },
  {
    name: "Vikram Singh",
    company: "Surya Logistics",
    quote:
      "The professionalism and technical expertise are top-notch. They handled our complex API integrations seamlessly, and their support has been outstanding.",
  },
  {
    name: "Anjali Mehta",
    company: "The Chai Spot Cafe",
    quote:
      "They built a stunning WordPress site for my cafe that has brought in so much new business. The design is beautiful, and it's so easy for me to update the menu myself.",
  },
  {
    name: "Rohan Desai",
    company: "NextGen Edu",
    quote:
      "For scalable, high-performance MERN stack applications, I wouldn't trust anyone else. Weblynx Infotech delivers quality code on time, every time.",
  },
];

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayTimeline = useRef(null);
  const contentRef = useRef(null);

  const allQuotes = testimonialsData.map((t) => t.quote).join(" ");

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  // Main transition animation
  useEffect(() => {
    if (!contentRef.current) return;
    const contentElements = contentRef.current.children;
    gsap
      .timeline()
      .fromTo(
        contentElements,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }
      );
  }, [activeIndex]);

  // Autoplay and marquee animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background marquee animation
      gsap.to(".marquee-column", {
        yPercent: -50,
        duration: 200,
        repeat: -1,
        ease: "none",
      });

      // Autoplay timeline
      const startAutoplay = () => {
        autoplayTimeline.current = gsap
          .timeline({ onComplete: startAutoplay })
          .to(`.progress-bar-fill`, {
            width: "100%",
            duration: 8,
            ease: "linear",
          })
          .call(handleNext);
      };
      startAutoplay();
    }, sectionRef);
    return () => {
      ctx.revert();
      if (autoplayTimeline.current) autoplayTimeline.current.kill();
    };
  }, [activeIndex, handleNext]);

  const pauseAutoplay = () => autoplayTimeline.current?.pause();
  const resumeAutoplay = () => autoplayTimeline.current?.resume();

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-300
                  ${
                    isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
                  }`}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* --- The Scrolling Wall of Words (Background) --- */}
      <div className="absolute inset-0 flex gap-8 opacity-10 dark:opacity-[0.03] blur-sm">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="marquee-column w-1/4 h-full text-4xl leading-relaxed text-justify [transform:translateY(-25%)]"
            >
              <p>
                {allQuotes} {allQuotes}
              </p>
            </div>
          ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 dark:from-pink-400 dark:to-orange-400">
            A Word from Our Partners
          </h2>
        </div>

        <div className="relative w-full max-w-3xl text-center">
          {/* The content will be swapped here */}
          <div ref={contentRef} className="min-h-[250px]">
            <p className="text-6xl md:text-8xl font-black text-purple-200 dark:text-purple-900/80">
              “
            </p>
            <blockquote className="text-2xl md:text-3xl font-medium italic my-4">
              {testimonialsData[activeIndex].quote}
            </blockquote>
            <div>
              <h3 className="text-xl font-bold">
                {testimonialsData[activeIndex].name}
              </h3>
              <p className="text-md text-gray-500 dark:text-gray-400">
                {testimonialsData[activeIndex].company}
              </p>
            </div>
          </div>
        </div>

        {/* --- Custom Navigation --- */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-3 rounded-full bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 backdrop-blur-sm"
          >
            <FaChevronLeft />
          </button>
          <div className="w-48 h-1 bg-gray-200/50 dark:bg-gray-800/50 rounded-full overflow-hidden">
            <div className="progress-bar-fill h-full bg-purple-500"></div>
          </div>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-3 rounded-full bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 backdrop-blur-sm"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
