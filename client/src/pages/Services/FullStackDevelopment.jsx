import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";

import fullStackAnimationData from "../../assets/lottie-animations/full-stack-animation.json";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiCloud,
  FiCheckCircle,
  FiLink,
  FiShield,
  FiUsers,
  FiClock,
  FiZap,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const pageData = [
  {
    type: "hero",
    title: "Full Stack Development",
    subtitle:
      "Receive a complete digital solution from concept to deployment. We manage both frontend and backend to deliver cohesive, high-quality applications.",
    cta: "Build End-to-End",
  },
  {
    type: "expertise",
    title: "Our Full Stack Expertise",
    items: [
      {
        Icon: FiCode,
        title: "Frontend Development",
        description:
          "Intuitive user interfaces using React.js and modern UI/UX principles.",
      },
      {
        Icon: FiServer,
        title: "Backend Development",
        description:
          "Robust server-side logic and APIs with Node.js and Express.js.",
      },
      {
        Icon: FiDatabase,
        title: "Database Management",
        description:
          "Efficient data storage and retrieval with MongoDB and other database technologies.",
      },
      {
        Icon: FiLink,
        title: "API Design & Integration",
        description:
          "Designing and integrating powerful APIs to connect services seamlessly.",
      },
      {
        Icon: FiCloud,
        title: "Cloud Deployment",
        description:
          "Deploying and managing applications on platforms like Vercel or Render.",
      },
      {
        Icon: FiShield,
        title: "Security & QA",
        description:
          "Implementing robust security and rigorous quality assurance throughout the development cycle.",
      },
    ],
  },
  {
    type: "advantage",
    title: "The Full Stack Advantage",
    items: [
      {
        Icon: FiUsers,
        title: "Single Point of Contact",
        description:
          "Simplify project management by working with one cohesive team for all development needs.",
      },
      {
        Icon: FiClock,
        title: "Faster Development Cycles",
        description:
          "Streamlined processes between frontend and backend lead to quicker iterations and deployment.",
      },
      {
        Icon: FiCheckCircle,
        title: "Consistent Vision",
        description:
          "Maintain a unified design and functional vision across your entire application, from UI to database.",
      },
      {
        Icon: FiZap,
        title: "Optimized Performance",
        description:
          "End-to-end optimization, ensuring your application runs at peak efficiency from server to screen.",
      },
    ],
  },
  {
    type: "final_cta",
    title: "Ready for a Complete Digital Solution?",
    subtitle:
      "Let's discuss how our full stack expertise can bring your vision to life, from concept to deployment.",
    cta: "Get a Free Consultation",
  },
];

const FullStackDevelopment = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const mainRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".content-section");
      const total = sections.length;

      const tl = gsap.timeline();

      sections.forEach((section, i) => {
        if (i !== 0) {
          tl.fromTo(
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

        if (i < total - 1) {
          tl.to(section, {
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
        end: `+=${total * 300}vh`,
        animation: tl,
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
        title="Full Stack Development Services | Weblynx Infotech"
        description="Weblynx Infotech provides comprehensive end-to-end full stack development services, managing both frontend and backend to deliver cohesive and high-quality applications."
        keywords="full stack development, MERN stack, Node.js, React.js, Express.js, MongoDB, web application development, frontend development, backend development, API design, cloud deployment, Weblynx Infotech"
        ogTitle="Weblynx Infotech: Complete Full Stack Development Solutions"
        ogDescription="Partner with Weblynx Infotech for holistic full stack development that brings your digital vision to life from concept to deployment."
        ogImage="https://www.weblynxinfotech.com/social-share-full-stack.jpg"
        ogUrl="https://www.weblynxinfotech.com/services/full-stack-development"
        canonical="https://www.weblynxinfotech.com/services/full-stack-development"
      />

      <div ref={triggerRef}>
        <main
          ref={mainRef}
          className="h-screen w-full relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-sky-500/20 dark:from-indigo-900/30 dark:via-transparent dark:to-sky-900/30 blur-3xl"></div>

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
                    animationData={fullStackAnimationData}
                    loop
                    className="w-64 h-64 mx-auto mb-8"
                  />
                  <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-600 dark:from-purple-400 dark:to-teal-400 mb-6">
                    {section.title}
                  </h1>
                  <p className="text-lg md:text-2xl opacity-90">
                    {section.subtitle}
                  </p>
                </div>
              )}

              {section.type === "expertise" && (
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
                        <Icon className="w-10 h-10 mb-4 text-indigo-500 dark:text-purple-400 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "advantage" && (
                <div className="w-full max-w-5xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.items.map(({ Icon, title, description }) => (
                      <div
                        key={title}
                        className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700 flex items-start gap-4"
                      >
                        <Icon className="w-8 h-8 mt-1 text-indigo-500 dark:text-purple-400 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold mb-1">
                            {title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {description}
                          </p>
                        </div>
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
                    className="inline-block px-10 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-indigo-600 text-white hover:bg-indigo-700"
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

export default FullStackDevelopment;
