import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";

import seoAnimationData from "../../assets/lottie-animations/seo-animation.json";
import {
  FiSearch,
  FiCode,
  FiFileText,
  FiLink2,
  FiMapPin,
  FiBarChart,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const pageData = [
  {
    type: "hero",
    title: "SEO Optimization",
    subtitle:
      "Boost your online visibility and drive organic traffic with our comprehensive Search Engine Optimization services.",
    cta: "Improve Your Rankings",
  },
  {
    type: "core_services",
    title: "Our Core SEO Services",
    items: [
      {
        Icon: FiSearch,
        title: "Keyword Research & Strategy",
        description:
          "Identify high-value keywords to attract the right audience and dominate search results.",
      },
      {
        Icon: FiCode,
        title: "Technical SEO Audits",
        description:
          "Ensure your website's foundation is robust, fast, and crawler-friendly for optimal indexing.",
      },
      {
        Icon: FiFileText,
        title: "On-Page & Content Optimization",
        description:
          "Optimize content, meta tags, and structure for improved search engine relevance.",
      },
      {
        Icon: FiMapPin,
        title: "Local SEO",
        description:
          "Dominate local search results and attract nearby customers with tailored local tactics.",
      },
      {
        Icon: FiLink2,
        title: "Link Building & Authority",
        description:
          "Build high-quality backlinks to establish your website's authority and improve domain ranking.",
      },
      {
        Icon: FiBarChart,
        title: "Analytics & Reporting",
        description:
          "Continuously track rankings and traffic, providing transparent reports on your growth.",
      },
    ],
  },
  {
    type: "approach",
    title: "Our Strategic SEO Approach",
    steps: [
      "Audit & Analysis",
      "Strategy & Planning",
      "Implementation",
      "Monitoring & Reporting",
      "Adaptation & Growth",
    ],
  },
  {
    type: "benefits",
    title: "Benefits of SEO with Weblynx",
    items: [
      {
        title: "Increased Organic Traffic",
        description:
          "Attract more relevant visitors to your website through higher, sustainable search engine rankings.",
      },
      {
        title: "Higher Conversion Rates",
        description:
          "Reach users with high intent, leading to more qualified leads, sales, and desired actions.",
      },
      {
        title: "Enhanced Brand Authority",
        description:
          "Achieve top rankings to establish your brand as a trusted and credible authority in your industry.",
      },
      {
        title: "Cost-Effective Marketing",
        description:
          "Generate long-term results and continuous traffic without the per-click costs of paid advertising.",
      },
    ],
  },
  {
    type: "final_cta",
    title: "Ready to Outrank Your Competition?",
    subtitle:
      "Let's craft an SEO strategy that puts your business at the top of search engine results.",
    cta: "Get a Free SEO Audit",
  },
];

const SeoOptimization = () => {
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
        title="SEO Optimization Services | Weblynx Infotech - Boost Your Rankings"
        description="Weblynx Infotech offers comprehensive SEO optimization services to increase your online visibility, drive organic traffic, and improve your search engine rankings."
        keywords="SEO optimization, search engine optimization, keyword research, on-page SEO, technical SEO, content optimization, local SEO, link building, Weblynx Infotech"
        ogTitle="Weblynx Infotech: Expert SEO Services for Higher Rankings"
        ogDescription="Elevate your online presence and dominate search results with Weblynx Infotech's strategic SEO optimization."
        ogImage="https://www.weblynxinfotech.com/social-share-seo-optimization.jpg"
        ogUrl="https://www.weblynxinfotech.com/services/seo-optimization"
        canonical="https://www.weblynxinfotech.com/services/seo-optimization"
      />

      <div ref={triggerRef}>
        <main
          ref={mainRef}
          className="h-screen w-full relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-500/20 via-transparent to-teal-500/20 dark:from-green-900/30 dark:via-transparent dark:to-teal-900/30 blur-3xl"></div>

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
                    animationData={seoAnimationData}
                    loop
                    className="w-64 h-64 mx-auto mb-8"
                  />
                  <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 dark:from-cyan-400 dark:to-lime-400 mb-6">
                    {section.title}
                  </h1>
                  <p className="text-lg md:text-2xl opacity-90">
                    {section.subtitle}
                  </p>
                </div>
              )}

              {section.type === "core_services" && (
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
                        <Icon className="w-10 h-10 mb-4 text-green-500 dark:text-green-400 mx-auto" />
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
                    <div className="absolute w-full h-1 bg-green-200 dark:bg-gray-700 rounded-full"></div>
                    {section.steps.map((step, i) => (
                      <div
                        key={i}
                        className="relative z-10 flex flex-col items-center w-1/5 text-center"
                      >
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white font-bold text-xl mb-3 border-4 border-white dark:border-black">
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
                        <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">
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
                    className="inline-block px-10 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-green-600 text-white hover:bg-green-700"
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

export default SeoOptimization;
