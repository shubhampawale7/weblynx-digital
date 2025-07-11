import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiTarget, FiEye } from "react-icons/fi";
import Seo from "../../components/common/Seo.jsx";

gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main heading
      gsap.from(".mission-vision-heading", {
        scrollTrigger: {
          trigger: ".mission-vision-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });

      // Animate each item (Mission and Vision) as it comes into view
      const items = gsap.utils.toArray(".mission-vision-item");
      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="mission-vision"
      ref={sectionRef}
      className={`py-20 sm:py-28 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } transition-colors duration-300`}
    >
      <Seo
        title="Our Mission & Vision | Weblynx Infotech"
        description="Discover the core mission and ambitious vision that drive Weblynx Infotech to deliver innovative and impactful digital solutions worldwide."
        keywords="Weblynx Infotech mission, Weblynx Infotech vision, company values, digital innovation, future of web development, digital solutions goals"
        ogTitle="Weblynx Infotech: Mission-Driven, Vision-Led Digital Agency"
        ogDescription="Explore the guiding principles and future aspirations of Weblynx Infotech in crafting digital excellence."
        ogUrl="https://www.weblynxinfotech.com/about#mission-vision"
        canonical="https://www.weblynxinfotech.com/about#mission-vision"
      />

      <div className="container mx-auto max-w-6xl px-4">
        <h2
          className="mission-vision-heading text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20
                     text-transparent bg-clip-text bg-gradient-to-r 
                     from-green-500 to-teal-600
                     dark:from-cyan-400 dark:to-lime-400"
        >
          Our Mission & Vision
        </h2>

        <div className="space-y-16">
          {/* Mission Item */}
          <div className="mission-vision-item group grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-12">
            <div
              className="flex justify-center items-center text-8xl md:col-span-1
                         text-blue-500 dark:text-purple-400 transition-transform duration-500 ease-out 
                         group-hover:scale-110"
            >
              <div
                className={`p-6 rounded-full transition-colors duration-300 ${
                  isDark ? "bg-purple-600/10" : "bg-blue-600/10"
                }`}
              >
                <FiTarget />
              </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-600 dark:text-purple-400">
                Our Mission
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To empower businesses by delivering cutting-edge, tailor-made
                digital solutions that drive growth, enhance user engagement,
                and streamline operations, fostering long-term partnerships
                built on trust and innovation.
              </p>
            </div>
          </div>

          {/* Vision Item */}
          <div className="mission-vision-item group grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-12">
            <div className="md:col-span-2 text-center md:text-left md:order-last">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-green-600 dark:text-cyan-400">
                Our Vision
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To be a global leader in digital innovation, recognized for our
                creative solutions, technical excellence, and commitment to
                pushing the boundaries of what's possible in the web and
                application development space.
              </p>
            </div>
            <div
              className="flex justify-center items-center text-8xl md:col-span-1
                         text-green-500 dark:text-cyan-400 transition-transform duration-500 ease-out
                         group-hover:scale-110"
            >
              <div
                className={`p-6 rounded-full transition-colors duration-300 ${
                  isDark ? "bg-cyan-600/10" : "bg-green-600/10"
                }`}
              >
                <FiEye />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
