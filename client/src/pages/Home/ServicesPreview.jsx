import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import {
  FiCode,
  FiPenTool,
  FiTrendingUp,
  FiLink,
  FiLayers,
  FiSmartphone,
} from "react-icons/fi";

// Data remains the same, but we'll use the colors more dynamically
const servicesData = [
  {
    Icon: FiCode,
    title: "Custom Web Applications",
    description:
      "Robust, scalable, and dynamic web applications built with the MERN stack, tailored precisely to your business needs and designed for high performance.",
    link: "/services#custom-web-apps",
    color: "#3b82f6", // Blue
  },
  {
    Icon: FiPenTool,
    title: "WordPress Development",
    description:
      "Flexible, powerful websites built on WordPress, giving you full control over your content with a beautiful, custom-designed theme.",
    link: "/services#wordpress",
    color: "#21759B", // WordPress Blue
  },
  {
    Icon: FiTrendingUp,
    title: "SEO & Digital Marketing",
    description:
      "Boost your online visibility and dominate search rankings. Our expert SEO strategies are designed to drive organic traffic and grow your audience.",
    link: "/services#seo",
    color: "#16a34a", // Green
  },
  {
    Icon: FiSmartphone,
    title: "Mobile App Development",
    description:
      "Engaging and intuitive mobile applications for iOS and Android that provide a seamless user experience and connect you with your customers on the go.",
    link: "/services#mobile-apps",
    color: "#f97316", // Orange
  },
  {
    Icon: FiLayers,
    title: "Full Stack Development",
    description:
      "Comprehensive, end-to-end development covering every aspect of your project, from the server-side logic to the pixel-perfect user interface.",
    link: "/services#fullstack",
    color: "#8b5cf6", // Purple
  },
];

const ServicesPreview = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const displayContentRef = useRef(null);
  const listItemsRef = useRef([]);
  const activeBarRef = useRef(null);

  // Animate the active bar to the current item's position
  useEffect(() => {
    const activeItem = listItemsRef.current[activeIndex];
    if (activeItem && activeBarRef.current) {
      gsap.to(activeBarRef.current, {
        top: activeItem.offsetTop,
        height: activeItem.offsetHeight,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [activeIndex]);

  // Animate content changes in the display panel with a cascade
  useEffect(() => {
    if (!displayContentRef.current) return;

    const elements = {
      icon: displayContentRef.current.querySelector(".service-icon"),
      title: displayContentRef.current.querySelector(".service-title"),
      description: displayContentRef.current.querySelector(
        ".service-description"
      ),
      link: displayContentRef.current.querySelector(".service-link"),
    };

    gsap
      .timeline()
      .to(Object.values(elements), {
        opacity: 0,
        y: 15,
        duration: 0.25,
        ease: "power2.in",
      })
      .set(Object.values(elements), { y: -15 })
      .to(Object.values(elements), {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08, // The cascade effect
      });
  }, [activeIndex]);

  // Entrance animation for the whole section
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".section-heading", ".section-subheading"], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: -30,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from([".service-list-container", ".display-panel-wrapper"], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const activeService = servicesData[activeIndex];

  return (
    <section
      ref={sectionRef}
      className={`py-20 sm:py-28 overflow-hidden ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="section-heading text-4xl md:text-5xl font-bold
                         text-transparent bg-clip-text bg-gradient-to-r 
                         from-blue-500 to-purple-600 dark:from-purple-400 dark:to-cyan-400"
          >
            Our Digital Capabilities
          </h2>
          <p className="section-subheading mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We architect and build robust digital solutions that drive results.
            Hover to explore our core services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 min-h-[480px]">
          {/* Left Column: Service Titles with Active Bar */}
          <div className="service-list-container relative flex flex-col justify-center -my-2">
            <div
              ref={activeBarRef}
              className="absolute left-0 w-full rounded-lg transition-colors duration-500"
              style={{
                backgroundColor: `${activeService.color}1A`, // e.g., #3b82f61A for 10% opacity
                boxShadow: `inset 2px 0 0 ${activeService.color}`,
                zIndex: 0,
              }}
            ></div>
            {servicesData.map((service, index) => (
              <div
                key={service.title}
                ref={(el) => (listItemsRef.current[index] = el)}
                onMouseEnter={() => setActiveIndex(index)}
                className="relative z-10 p-5 cursor-pointer transition-colors duration-300 group"
              >
                <h3
                  className={`text-xl font-bold transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  }`}
                >
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Column: Display Panel */}
          <div
            className="display-panel-wrapper md:col-span-2 p-8 md:p-12 rounded-2xl flex items-center
                          relative overflow-hidden
                          bg-white/[.6] dark:bg-gray-800/[.6] backdrop-blur-sm shadow-2xl border border-white/10"
          >
            {/* Morphing Background Blobs */}
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="absolute w-96 h-96 rounded-full -right-20 -top-20 opacity-0 transition-opacity duration-1000"
                style={{
                  backgroundColor: service.color,
                  opacity: index === activeIndex ? 0.2 : 0,
                  filter: "blur(100px)",
                }}
              ></div>
            ))}

            <div ref={displayContentRef} className="relative z-10 w-full">
              <activeService.Icon
                className="service-icon text-6xl mb-6"
                style={{ color: activeService.color }}
              />
              <h3 className="service-title text-3xl md:text-4xl font-bold mb-4">
                {activeService.title}
              </h3>
              <p className="service-description text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                {activeService.description}
              </p>
              <Link to={activeService.link} className="service-link">
                <span
                  className="font-bold text-lg inline-flex items-center group"
                  style={{ color: activeService.color }}
                >
                  Learn More
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
