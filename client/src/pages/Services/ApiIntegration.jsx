// File: client/src/pages/ApiIntegration.jsx

import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import apiIntegrationAnimationData from "../../assets/lottie-animations/api-integration-animation.json";
import { FiShuffle, FiDatabase, FiLock, FiZap } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    type: "hero",
    title: "API Integration",
    subtitle:
      "Seamlessly connect your systems and applications, automating workflows and enhancing data exchange across your entire digital ecosystem.",
    cta: "Connect Your Systems",
  },
  {
    type: "benefits",
    title: "The Power of Connection",
    items: [
      {
        Icon: FiZap,
        title: "Streamlined Workflows",
        description:
          "Automate tasks and reduce manual effort by connecting disparate systems.",
      },
      {
        Icon: FiShuffle,
        title: "Enhanced Functionality",
        description:
          "Extend your app's capabilities by integrating powerful third-party services.",
      },
      {
        Icon: FiDatabase,
        title: "Unified Data",
        description:
          "Ensure accurate, real-time data synchronization across all platforms.",
      },
      {
        Icon: FiLock,
        title: "Secure Exchange",
        description:
          "Implement robust security protocols for stable and secure data flow.",
      },
    ],
  },
  {
    type: "approach",
    title: "Our Integration Blueprint",
    steps: [
      "Analysis & Strategy",
      "Design & Development",
      "Testing & Security",
      "Deployment & Monitoring",
      "Optimization & Support",
    ],
  },
  {
    type: "final_cta",
    title: "Ready to Connect Your Digital Landscape?",
    subtitle:
      "Let's discuss how seamless API integrations can transform your business workflows.",
    cta: "Get a Free Consultation",
  },
];

const ApiIntegration = () => {
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
        scrub: 2,
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
        title="API Integration Services | Weblynx Infotech"
        description="Weblynx Infotech specializes in seamless API integration, connecting your systems for automated workflows, enhanced data exchange, and improved business efficiency."
        keywords="API integration, API development, third-party APIs, CRM integration, payment gateways, data synchronization, custom APIs, Weblynx Infotech"
        ogTitle="Weblynx Infotech API Integration: Connect Your Digital Landscape"
        ogDescription="Automate workflows and enhance functionality with expert API integration services from Weblynx Infotech."
        ogImage="https://www.weblynxinfotech.com/social-share-api-integration.jpg"
        ogUrl="https://www.weblynxinfotech.com/services/api-integration"
        canonical="https://www.weblynxinfotech.com/services/api-integration"
      />

      <div ref={triggerRef}>
        <main
          ref={mainRef}
          className="h-screen w-full relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 dark:from-purple-900/30 dark:via-transparent dark:to-cyan-900/30 blur-3xl"></div>

          {sections.map((section, index) => (
            <div
              key={index}
              className={`content-section absolute inset-0 w-full h-full flex items-center justify-center p-8 ${
                index === 0 ? "opacity-100 scale-100 z-10" : "opacity-0"
              }`}
            >
              {section.type === "hero" && (
                <div className="text-center max-w-3xl">
                  <Lottie
                    animationData={apiIntegrationAnimationData}
                    loop
                    className="w-64 h-64 mx-auto mb-8"
                  />
                  <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 dark:from-pink-400 dark:to-orange-400 mb-6">
                    {section.title}
                  </h1>
                  <p className="text-lg md:text-2xl opacity-90">
                    {section.subtitle}
                  </p>
                </div>
              )}

              {section.type === "benefits" && (
                <div className="w-full max-w-5xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {section.items.map(({ Icon, title, description }) => (
                      <div
                        key={title}
                        className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700"
                      >
                        <Icon className="w-10 h-10 mb-4 text-purple-500 dark:text-purple-400" />
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
                    <div className="absolute w-full h-1 bg-purple-200 dark:bg-gray-700 rounded-full"></div>
                    {section.steps.map((step, i) => (
                      <div
                        key={i}
                        className="relative z-10 flex flex-col items-center w-1/5 text-center"
                      >
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold text-xl mb-3 border-4 border-white dark:border-gray-900">
                          {i + 1}
                        </div>
                        <h3 className="font-semibold">{step}</h3>
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
                    className="inline-block px-10 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-purple-600 text-white hover:bg-purple-700"
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

export default ApiIntegration;
