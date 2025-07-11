import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";

import mobileAppAnimationData from "../../assets/lottie-animations/mobile-app-development.json";
import {
  FiSmartphone,
  FiPenTool,
  FiCode,
  FiGrid,
  FiShare2,
  FiActivity,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const pageData = [
  {
    type: "hero",
    title: "Mobile App Development",
    subtitle:
      "Extend your reach and engage your users on the go with custom mobile applications for iOS and Android.",
    cta: "Build Your App",
  },
  {
    type: "what_we_build",
    title: "Types of Mobile Apps We Develop",
    items: [
      {
        Icon: FiSmartphone,
        title: "Native iOS Apps",
        description:
          "High-performance apps using Swift/Objective-C for Apple's ecosystem.",
      },
      {
        Icon: FiSmartphone,
        title: "Native Android Apps",
        description:
          "Robust and scalable apps using Kotlin/Java for the Android landscape.",
      },
      {
        Icon: FiCode,
        title: "Cross-Platform Apps",
        description:
          "Reach all users with one codebase using React Native or Flutter.",
      },
      {
        Icon: FiGrid,
        title: "Hybrid Apps",
        description:
          "Web-based apps in a native container, balancing reach and features.",
      },
      {
        Icon: FiPenTool,
        title: "Mobile UI/UX Design",
        description:
          "Crafting intuitive and engaging interfaces tailored for mobile devices.",
      },
      {
        Icon: FiShare2,
        title: "Backend for Mobile",
        description:
          "Developing robust server-side infrastructure to support your app.",
      },
    ],
  },
  {
    type: "approach",
    title: "Our Mobile App Development Approach",
    steps: [
      "Strategy & Concept",
      "UI/UX Design",
      "Development",
      "Testing & QA",
      "Deployment & Launch",
    ],
  },
  {
    type: "benefits",
    title: "The Benefits of a Custom Mobile App",
    items: [
      {
        title: "Wider Audience Reach",
        description:
          "Connect with users directly on their preferred devices, expanding your market and brand presence.",
      },
      {
        title: "Enhanced User Engagement",
        description:
          "Utilize native features like push notifications for a richer, more interactive experience.",
      },
      {
        title: "Increased Brand Loyalty",
        description:
          "A dedicated app keeps your brand top-of-mind and provides a direct channel for customer interaction.",
      },
      {
        title: "New Revenue Streams",
        description:
          "Monetize through in-app purchases or subscriptions, unlocking new business opportunities.",
      },
    ],
  },
  {
    type: "final_cta",
    title: "Ready to Launch Your Mobile App?",
    subtitle:
      "Let's discuss how we can bring your app idea to life and connect you with users worldwide.",
    cta: "Get a Free Consultation",
  },
];

const MobileAppDevelopment = () => {
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
        title="Mobile App Development Services | Weblynx Infotech"
        description="Weblynx Infotech crafts intuitive and high-performance native (iOS/Android) and cross-platform mobile applications to extend your reach and engage users worldwide."
        keywords="mobile app development, iOS app development, Android app development, cross-platform apps, React Native, Flutter, mobile UI/UX, app store optimization, Weblynx Infotech"
        ogTitle="Weblynx Infotech: Building Next-Gen Mobile Experiences"
        ogDescription="Launch powerful mobile apps with Weblynx Infotech, designed for performance, user engagement, and market success."
        ogImage="https://www.weblynxinfotech.com/social-share-mobile-app.jpg"
        ogUrl="https://www.weblynxinfotech.com/services/mobile-app-development"
        canonical="https://www.weblynxinfotech.com/services/mobile-app-development"
      />

      <div ref={triggerRef}>
        <main
          ref={mainRef}
          className="h-screen w-full relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 dark:from-orange-900/30 dark:via-transparent dark:to-red-900/30 blur-3xl"></div>

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
                    animationData={mobileAppAnimationData}
                    loop
                    className="w-64 h-64 mx-auto mb-8"
                  />
                  <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-amber-400 dark:to-rose-400 mb-6">
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
                        <Icon className="w-10 h-10 mb-4 text-orange-500 dark:text-orange-400 mx-auto" />
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
                    <div className="absolute w-full h-1 bg-orange-200 dark:bg-gray-700 rounded-full"></div>
                    {section.steps.map((step, i) => (
                      <div
                        key={i}
                        className="relative z-10 flex flex-col items-center w-1/5 text-center"
                      >
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-xl mb-3 border-4 border-white dark:border-black">
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
                        <h3 className="text-xl font-semibold mb-2 text-orange-600 dark:text-orange-400">
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
                    className="inline-block px-10 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-orange-600 text-white hover:bg-orange-700"
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

export default MobileAppDevelopment;
