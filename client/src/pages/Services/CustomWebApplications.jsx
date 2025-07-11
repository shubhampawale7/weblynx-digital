import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";

import customWebAppsAnimationData from "../../assets/lottie-animations/custom-web-apps-animation.json";
import {
  FiBox,
  FiBriefcase,
  FiCloud,
  FiGrid,
  FiMessageSquare,
  FiTrendingUp,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const pageData = [
  {
    type: "hero",
    title: "Custom Web Applications",
    subtitle:
      "Build your unique digital presence from the ground up. We craft scalable, secure, and intuitive web applications tailored precisely to your business objectives.",
    cta: "Start Your Project",
  },
  {
    type: "what_we_build",
    title: "What We Build",
    items: [
      {
        Icon: FiBriefcase,
        title: "Enterprise Solutions",
        description:
          "Custom CRMs, ERPs, and internal tools to streamline your operations.",
      },
      {
        Icon: FiBox,
        title: "E-commerce Platforms",
        description:
          "Secure, scalable online stores with advanced features and payment integrations.",
      },
      {
        Icon: FiGrid,
        title: "Interactive Web Portals",
        description:
          "Dynamic portals for customers, partners, or employees, offering personalized experiences.",
      },
      {
        Icon: FiCloud,
        title: "SaaS Products",
        description:
          "Multi-tenant Software-as-a-Service applications with robust architecture.",
      },
      {
        Icon: FiMessageSquare,
        title: "Real-time Applications",
        description:
          "Apps with live chat, interactive dashboards, and collaborative tools.",
      },
      {
        Icon: FiTrendingUp,
        title: "Progressive Web Apps (PWAs)",
        description:
          "Websites that offer app-like experiences, working offline and accessible via home screens.",
      },
    ],
  },
  {
    type: "approach",
    title: "Our Development Approach",
    steps: [
      "Discovery & Planning",
      "Design & Prototyping",
      "Development & Testing",
      "Deployment & Launch",
      "Support & Evolution",
    ],
  },
  {
    type: "benefits",
    title: "Why Choose Weblynx?",
    items: [
      {
        title: "Scalability & Performance",
        description:
          "We build future-proof applications that can easily scale with your business growth and handle high traffic loads.",
      },
      {
        title: "Security & Reliability",
        description:
          "Your data is protected with industry-standard security practices and robust architecture, ensuring maximum uptime.",
      },
      {
        title: "User-Centric Design",
        description:
          "Beyond functionality, we prioritize intuitive user interfaces and exceptional experiences that keep your audience engaged.",
      },
      {
        title: "Agile & Transparent Process",
        description:
          "We follow an agile development methodology, ensuring transparency, flexibility, and regular communication.",
      },
    ],
  },
  {
    type: "final_cta",
    title: "Ready to Build Your Custom Application?",
    subtitle:
      "Let's discuss your unique idea and how we can turn it into a powerful digital reality.",
    cta: "Get a Free Consultation",
  },
];

const CustomWebApplications = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const mainRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const contentSections = gsap.utils.toArray(".content-section");
      const totalSections = contentSections.length;
      const timeline = gsap.timeline();

      contentSections.forEach((section, i) => {
        if (i !== 0) {
          timeline.fromTo(
            section,
            { autoAlpha: 0, scale: 0.95, y: 100 },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              duration: 1.5,
              ease: "power3.out",
            }
          );
        }

        if (i < totalSections - 1) {
          timeline.to(section, {
            autoAlpha: 0,
            scale: 0.95,
            y: -100,
            duration: 1.5,
            ease: "power3.in",
          });
        }
      });

      ScrollTrigger.create({
        trigger: triggerRef.current,
        pin: mainRef.current,
        scrub: 2.5,
        start: "top top",
        end: `+=${totalSections * 300}vh`,
        animation: timeline,
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Seo
        title="Custom Web Applications Development | Weblynx Infotech"
        description="Weblynx Infotech specializes in crafting scalable, secure, and intuitive custom web applications tailored to your business needs, from enterprise solutions to e-commerce platforms."
        keywords="custom web development, web applications, MERN stack, React development, Node.js, enterprise solutions, e-commerce platforms, SaaS development, real-time apps, PWA, Weblynx Infotech"
        ogTitle="Custom Web Applications by Weblynx Infotech - Build Your Digital Vision"
        ogDescription="Elevate your business with bespoke web applications built for performance, scalability, and seamless user experience."
        ogImage="https://www.weblynxinfotech.com/social-share-custom-web-apps.jpg"
        ogUrl="https://www.weblynxinfotech.com/services/custom-web-applications"
        canonical="https://www.weblynxinfotech.com/services/custom-web-applications"
      />

      <div ref={triggerRef}>
        <main
          ref={mainRef}
          className="h-screen w-full relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 dark:from-blue-900/30 dark:via-transparent dark:to-purple-900/30 blur-3xl"></div>

          {pageData.map((section, index) => (
            <div
              key={index}
              className={`content-section absolute inset-0 w-full h-full flex items-center justify-center p-8 ${
                index === 0 ? "opacity-100 scale-100 z-10" : "opacity-0"
              }`}
            >
              {section.type === "hero" && (
                <div className="text-center max-w-3xl">
                  <Lottie
                    animationData={customWebAppsAnimationData}
                    loop
                    className="w-64 h-64 mx-auto mb-8"
                  />
                  <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 dark:from-purple-400 dark:to-cyan-400 mb-6">
                    {section.title}
                  </h1>
                  <p className="text-lg md:text-2xl opacity-90">
                    {section.subtitle}
                  </p>
                </div>
              )}

              {section.type === "what_we_build" && (
                <div className="w-full max-w-6xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.items.map(({ Icon, title, description }) => (
                      <div
                        key={title}
                        className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700 text-center"
                      >
                        <Icon className="w-10 h-10 mb-4 text-blue-500 dark:text-blue-400 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "approach" && (
                <div className="w-full max-w-5xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    {section.title}
                  </h2>
                  <div className="relative flex justify-between items-center">
                    <div className="absolute w-full h-1 bg-blue-200 dark:bg-gray-700 rounded-full"></div>
                    {section.steps.map((step, i) => (
                      <div
                        key={i}
                        className="relative z-10 flex flex-col items-center w-1/5 text-center"
                      >
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-xl mb-3 border-4 border-white dark:border-black">
                          {i + 1}
                        </div>
                        <h3 className="font-semibold">{step}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "benefits" && (
                <div className="w-full max-w-5xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.items.map(({ title, description }) => (
                      <div
                        key={title}
                        className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700"
                      >
                        <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                          {title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "final_cta" && (
                <div className="text-center max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg md:text-xl opacity-80 mb-8">
                    {section.subtitle}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block px-10 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {section.cta}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default CustomWebApplications;
