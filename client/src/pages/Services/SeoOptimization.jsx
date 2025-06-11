// client/src/pages/Services/SeoOptimization.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";

gsap.registerPlugin(ScrollTrigger);

const SeoOptimization = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);

  const mainHeadingRef = useRef(null);
  const introTextRef = useRef(null);
  const lottieAnimationRef = useRef(null);
  const heroCtaRef = useRef(null);

  const coreServicesHeadingRef = useRef(null);
  const coreServicesCards = useRef([]);

  const approachHeadingRef = useRef(null);
  const approachSteps = useRef([]);

  const benefitsHeadingRef = useRef(null);
  const benefitsCards = useRef([]);

  const finalCtaHeadingRef = useRef(null);
  const finalCtaTextRef = useRef(null);
  const finalCtaButtonRef = useRef(null);

  const addToArrayRef = (el, arr) => {
    if (el && !arr.current.includes(el)) {
      arr.current.push(el);
    }
  };

  useEffect(() => {
    coreServicesCards.current = [];
    approachSteps.current = [];
    benefitsCards.current = [];

    let ctx = gsap.context(() => {
      gsap.from(mainHeadingRef.current, {
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(
        [introTextRef.current, lottieAnimationRef.current, heroCtaRef.current],
        {
          y: 80,
          scale: 0.9,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introTextRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.from(coreServicesHeadingRef.current, {
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coreServicesHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(coreServicesCards.current, {
        y: 80,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: coreServicesCards.current[0],
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(approachHeadingRef.current, {
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: approachHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(approachSteps.current, {
        y: 80,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: approachSteps.current[0],
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(benefitsHeadingRef.current, {
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(benefitsCards.current, {
        y: 80,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: benefitsCards.current[0],
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(
        [
          finalCtaHeadingRef.current,
          finalCtaTextRef.current,
          finalCtaButtonRef.current,
        ],
        {
          y: 50,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: finalCtaHeadingRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="seo-optimization"
      ref={sectionRef}
      className={`min-h-screen ${
        isDark ? "bg-gray-950 text-white" : "bg-white text-gray-800"
      } transition-colors duration-500`}
    >
      {/* SEO for SEO Optimization Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="SEO Optimization Services | Weblynx Infotech - Boost Your Rankings" // UPDATED
        description="Weblynx Infotech offers comprehensive SEO optimization services to increase your online visibility, drive organic traffic, and improve your search engine rankings." // UPDATED
        keywords="SEO optimization, search engine optimization, keyword research, on-page SEO, technical SEO, content optimization, local SEO, link building, Weblynx Infotech" // UPDATED
        ogTitle="Weblynx Infotech: Expert SEO Services for Higher Rankings" // UPDATED
        ogDescription="Elevate your online presence and dominate search results with Weblynx Infotech's strategic SEO optimization." // UPDATED
        ogImage="https://www.weblynxinfotech.com/social-share-seo-optimization.jpg" // UPDATED: Use your new domain
        ogUrl="https://www.weblynxinfotech.com/services/seo-optimization" // UPDATED: Use your new domain
        canonical="https://www.weblynxinfotech.com/services/seo-optimization" // UPDATED: Use your new domain
      />
      {/* Hero/Introduction Section */}
      <section
        className={`py-16 sm:py-20 px-4 ${
          isDark
            ? "bg-gradient-to-br from-gray-950 to-gray-800 text-white"
            : "bg-gradient-to-br from-blue-50 to-white text-gray-800"
        } transition-colors duration-500`}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h1
            className="main-heading text-5xl md:text-7xl font-extrabold mb-6
                         text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600
                         dark:from-cyan-400 dark:to-lime-400"
            ref={mainHeadingRef}
          >
            SEO Optimization
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto px-4"
            ref={introTextRef}
          >
            Boost your online visibility and drive organic traffic with our
            comprehensive Search Engine Optimization services.
          </p>
          <div
            ref={lottieAnimationRef}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto my-8"
            role="img"
            aria-label="Animated illustration of SEO optimization"
          >
            <Lottie
              animationData={seoAnimationData}
              loop={true}
              autoplay={true}
            />
          </div>
          <Link
            to="/contact"
            ref={heroCtaRef}
            className={`inline-block px-8 py-4 text-lg md:text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300
                        ${
                          isDark
                            ? "bg-purple-700 text-white hover:bg-purple-600"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
          >
            Improve Your Rankings
          </Link>
        </div>
      </section>
      {/* Our Core SEO Services Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            ref={coreServicesHeadingRef}
          >
            Our Core SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, coreServicesCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Keyword Research & Strategy
              </h3>
              <p className="opacity-90 text-base">
                Identify high-value keywords to attract the right audience and
                dominate search results.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, coreServicesCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                On-Page SEO Optimization
              </h3>
              <p className="opacity-90 text-base">
                Optimize your website's content, meta tags, and structure for
                improved search engine relevance.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, coreServicesCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Technical SEO Audit & Fixes
              </h3>
              <p className="opacity-90 text-base">
                Ensure your website's technical foundation is robust, fast, and
                crawler-friendly for optimal indexing.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, coreServicesCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Content Optimization
              </h3>
              <p className="opacity-90 text-base">
                Create and optimize high-quality, engaging content that ranks
                well and resonates with your target audience.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, coreServicesCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Local SEO Strategies
              </h3>
              <p className="opacity-90 text-base">
                Dominate local search results and attract nearby customers with
                tailored local SEO tactics.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, coreServicesCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Link Building & Authority
              </h3>
              <p className="opacity-90 text-base">
                Build high-quality backlinks to establish your website's
                authority and improve domain ranking.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Strategic Approach Section */}
      <section
        className={`py-16 sm:py-20 px-4 ${
          isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
            ref={approachHeadingRef}
          >
            Our Strategic SEO Approach
          </h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8">
            <div
              className={`absolute hidden md:block h-1 w-full top-1/2 -translate-y-1/2 rounded-full
                            ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
            ></div>

            {[
              {
                num: 1,
                title: "Audit & Analysis",
                desc: "Comprehensive review of your current SEO performance and competitive landscape.",
              },
              {
                num: 2,
                title: "Strategy & Planning",
                desc: "Develop a customized SEO strategy tailored to your business goals and target audience.",
              },
              {
                num: 3,
                title: "Implementation & Optimization",
                desc: "Execute on-page, off-page, and technical SEO tactics with precision.",
              },
              {
                num: 4,
                title: "Monitoring & Reporting",
                desc: "Continuously track rankings, traffic, and conversions, providing transparent reports.",
              },
              {
                num: 5,
                title: "Adaptation & Growth",
                desc: "Adapt strategies based on performance data and search engine algorithm changes for sustained growth.",
              },
            ].map((step, index) => (
              <div
                key={step.num}
                className={`relative z-10 flex flex-col items-center text-center p-4 rounded-lg shadow-md w-full md:w-auto md:flex-1
                                           ${
                                             isDark
                                               ? "bg-gray-800 border border-gray-700"
                                               : "bg-white border border-gray-200"
                                           }
                                           transform transition-transform duration-300 hover:scale-105`}
                ref={(el) => addToArrayRef(el, approachSteps)}
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white text-xl font-bold mb-3 md:mb-4
                                 ${isDark ? "bg-purple-600" : "bg-blue-600"}`}
                >
                  {step.num}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm opacity-90">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            ref={benefitsHeadingRef}
          >
            Benefits of SEO Optimization with Weblynx
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Increased Organic Traffic
              </h3>
              <p className="opacity-90 text-base">
                Attract more relevant visitors to your website through higher
                search engine rankings.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Higher Conversion Rates
              </h3>
              <p className="opacity-90 text-base">
                Reach users with high intent, leading to more leads, sales, and
                desired actions.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Enhanced Brand Authority
              </h3>
              <p className="opacity-90 text-base">
                Achieve top rankings to establish your brand as a trusted
                authority in your industry.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Cost-Effective Marketing
              </h3>
              <p className="opacity-90 text-base">
                Generate long-term results and continuous traffic without the
                per-click costs of paid advertising.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Call to Action Section for this specific service */}     {" "}
      <section
        className={`py-16 px-4 text-center ${
          isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
        } transition-colors duration-300`}
      >
               {" "}
        <div className="container mx-auto max-w-3xl">
                   {" "}
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            ref={finalCtaHeadingRef}
          >
                        Ready to Outrank Your Competition?          {" "}
          </h2>
                   {" "}
          <p className="text-lg mb-8 opacity-90" ref={finalCtaTextRef}>
                        Let's craft an SEO strategy that puts your business at
            the top of             search engine results.          {" "}
          </p>
                   {" "}
          <Link
            to="/contact"
            ref={finalCtaButtonRef}
            className={`inline-block px-8 py-4 text-lg md:text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300
                        ${
              isDark
                ? "bg-cyan-700 text-white hover:bg-cyan-600"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
                        Get a Free SEO Audit          {" "}
          </Link>
                 {" "}
        </div>
             {" "}
      </section>
         {" "}
    </div>
  );
};

export default SeoOptimization;
