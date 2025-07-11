import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiTrendingUp,
  FiLink,
  FiLayers,
  FiSettings,
} from "react-icons/fi";

// --- UPDATED Service Data with Professional Icons & Colors ---
const serviceOverviewData = [
  {
    id: "custom-web-applications",
    title: "Custom Web Applications",
    Icon: FiCode,
    description:
      "Bespoke web solutions tailored to your unique business needs, built with the MERN stack for scalability and high performance.",
    color: "#3b82f6", // Blue
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    Icon: FiSmartphone,
    description:
      "Crafting intuitive and high-performance native or cross-platform mobile applications for both iOS & Android ecosystems.",
    color: "#f97316", // Orange
  },
  {
    id: "wordpress-site-creation",
    title: "WordPress Development",
    Icon: FiPenTool,
    description:
      "Flexible, secure, and user-friendly WordPress websites, from custom theme development to robust e-commerce solutions.",
    color: "#0ea5e9", // Sky Blue
  },
  {
    id: "seo-optimization",
    title: "SEO & Digital Marketing",
    Icon: FiTrendingUp,
    description:
      "Boost your online visibility and organic traffic with data-driven search engine optimization and marketing strategies.",
    color: "#22c55e", // Green
  },
  {
    id: "api-integration",
    title: "API Integration",
    Icon: FiLink,
    description:
      "Seamlessly connect your applications with third-party services, enhancing functionality and automating critical workflows.",
    color: "#ec4899", // Pink
  },
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    Icon: FiLayers,
    description:
      "End-to-end web development covering both frontend and backend, providing comprehensive and cohesive digital solutions.",
    color: "#8b5cf6", // Purple
  },
  {
    id: "support-management-services",
    title: "Support & Management",
    Icon: FiSettings,
    description:
      "Proactive maintenance, security audits, and performance optimization to ensure your digital assets run smoothly and securely.",
    color: "#64748b", // Slate
  },
];

const Services = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const backgroundRef = useRef(null);
  const navigate = useNavigate();

  // Animate content and background on activeIndex change
  useEffect(() => {
    if (!contentRef.current || !backgroundRef.current) return;

    const activeService = serviceOverviewData[activeIndex];
    const contentElements = contentRef.current.children;

    // Animate background color
    gsap.to(backgroundRef.current, {
      backgroundColor: activeService.color,
      duration: 1,
      ease: "power3.inOut",
    });

    // Animate content with a cascade
    gsap
      .timeline()
      .fromTo(
        contentElements,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }
      );
  }, [activeIndex]);

  // Initial page load animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".main-heading, .main-subheading", {
        opacity: 0,
        y: -30,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".service-list-item", {
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const activeService = serviceOverviewData[activeIndex];
  const ActiveIcon = activeService.Icon;

  return (
    <div
      ref={sectionRef}
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <Seo
        title="Our Digital Services | Weblynx Infotech - Web & Mobile Development"
        description="Explore Weblynx Infotech's comprehensive digital services: custom web applications, mobile app development (iOS/Android), WordPress site creation, SEO optimization, API integration, full stack development, and robust support & management."
        keywords="Weblynx Infotech services, custom web apps, mobile app development, WordPress services, SEO agency, API integration, full stack developer, web support, digital solutions"
        ogTitle="Weblynx Infotech Services: Comprehensive Digital Solutions"
        ogDescription="Find the perfect digital solution for your business with Weblynx Infotech, from cutting-edge web development to expert SEO and reliable support."
        ogUrl="https://www.weblynxinfotech.com/services"
        canonical="https://www.weblynxinfotech.com/services"
      />

      <header className="py-16 sm:py-20 text-center">
        <div className="container mx-auto px-4">
          <h1
            className="main-heading text-5xl md:text-6xl font-extrabold
                             text-transparent bg-clip-text bg-gradient-to-r 
                             from-blue-400 to-purple-600 dark:from-purple-400 dark:to-cyan-400"
          >
            Our Digital Services
          </h1>
          <p className="main-subheading text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            A full spectrum of solutions, meticulously crafted to bring your
            vision to life.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Column: Service List */}
          <div className="lg:col-span-1 flex flex-col gap-1">
            {serviceOverviewData.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="service-list-item p-4 rounded-lg cursor-pointer relative"
              >
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-gray-200/50 dark:bg-gray-800/50"
                      : "opacity-0"
                  }`}
                ></div>
                <div className="relative flex items-center gap-4">
                  <div
                    className="w-1 h-8 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor:
                        activeIndex === index ? service.color : "transparent",
                    }}
                  ></div>
                  <h3
                    className={`text-lg font-bold transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Display Panel */}
          <div
            className="lg:col-span-3 rounded-2xl min-h-[500px] flex 
                          relative overflow-hidden"
          >
            <div
              ref={backgroundRef}
              className="absolute inset-0 w-full h-full transition-colors duration-1000"
            ></div>

            <div className="relative w-full p-8 md:p-12 flex flex-col justify-center text-white">
              <div ref={contentRef} className="max-w-xl">
                <ActiveIcon className="w-24 h-24 mb-6 text-white/80" />
                <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {activeService.title}
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-8">
                  {activeService.description}
                </p>
                <button
                  onClick={() => navigate(`/services/${activeService.id}`)}
                  className="px-8 py-3 rounded-full font-bold text-lg
                                   bg-white/20 hover:bg-white/30
                                   backdrop-blur-sm
                                   transform transition-all duration-300 hover:scale-105"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
