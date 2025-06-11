// client/src/pages/Services/WordPressSiteCreation.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";

// IMPORTANT: Replace this with the actual path to your downloaded Lottie JSON file!
import wordpressAnimationData from "../../assets/lottie-animations/wordpress-animation.json";

gsap.registerPlugin(ScrollTrigger);

const WordPressSiteCreation = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);

  const mainHeadingRef = useRef(null);
  const introTextRef = useRef(null);
  const lottieAnimationRef = useRef(null);
  const heroCtaRef = useRef(null);

  const whatWeOfferHeadingRef = useRef(null);
  const whatWeOfferCards = useRef([]);

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
    whatWeOfferCards.current = [];
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

      gsap.from(whatWeOfferHeadingRef.current, {
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: whatWeOfferHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(whatWeOfferCards.current, {
        y: 80,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: whatWeOfferCards.current[0],
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
      id="wordpress-site-creation"
      ref={sectionRef}
      className={`min-h-screen ${
        isDark ? "bg-gray-950 text-white" : "bg-white text-gray-800"
      } transition-colors duration-500`}
    >
      {/* SEO for the WordPress Site Creation Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="WordPress Website Creation Services | Weblynx Infotech" // UPDATED
        description="Weblynx Infotech specializes in creating custom, high-performance, and secure WordPress websites. From custom themes to e-commerce solutions and ongoing support, we build powerful online presences." // UPDATED
        keywords="WordPress development, custom WordPress themes, WordPress e-commerce, WooCommerce, WordPress plugins, website migration, WordPress SEO, Weblynx Infotech" // UPDATED
        ogTitle="Weblynx Infotech WordPress: Custom, Powerful, & User-Friendly Websites" // UPDATED
        ogDescription="Unlock the full potential of WordPress with Weblynx Infotech's expert site creation and customization services." // UPDATED
        ogImage="https://www.weblynxinfotech.com/social-share-wordpress.jpg" // UPDATED: Use your new domain
        ogUrl="https://www.weblynxinfotech.com/services/wordpress-site-creation" // UPDATED: Use your new domain
        canonical="https://www.weblynxinfotech.com/services/wordpress-site-creation" // UPDATED: Use your new domain
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
                         text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600
                         dark:from-lime-400 dark:to-cyan-400"
            ref={mainHeadingRef}
          >
            WordPress Site Creation
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto px-4"
            ref={introTextRef}
          >
            Unlock the power of WordPress with custom, high-performing websites
            tailored to your unique business needs.
          </p>
          <div
            ref={lottieAnimationRef}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto my-8"
            role="img"
            aria-label="Animated illustration of WordPress site creation"
          >
            <Lottie
              animationData={wordpressAnimationData}
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
            Start Your WordPress Project
          </Link>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            ref={whatWeOfferHeadingRef}
          >
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeOfferCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Custom Theme Development
              </h3>
              <p className="opacity-90 text-base">
                From concept to code, we build unique WordPress themes that
                perfectly match your brand identity and functionality needs.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeOfferCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Plugin Development & Customization
              </h3>
              <p className="opacity-90 text-base">
                Extend your site's capabilities with bespoke plugins or
                customize existing ones to fit your specific requirements.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeOfferCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                WooCommerce E-commerce
              </h3>
              <p className="opacity-90 text-base">
                Launch powerful online stores with seamless product management,
                secure payments, and a great shopping experience.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeOfferCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Website Migration & Redesign
              </h3>
              <p className="opacity-90 text-base">
                Smoothly transition your existing website to WordPress or give
                your current WordPress site a modern facelift.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeOfferCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Performance & Security
              </h3>
              <p className="opacity-90 text-base">
                Optimize your WordPress site for speed, reliability, and robust
                security against threats.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeOfferCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Ongoing Support & Training
              </h3>
              <p className="opacity-90 text-base">
                Receive comprehensive support and training to confidently manage
                and update your WordPress website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach to WordPress Section */}
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
            Our Approach to WordPress Development
          </h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8">
            <div
              className={`absolute hidden md:block h-1 w-full top-1/2 -translate-y-1/2 rounded-full
                            ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
            ></div>

            {[
              {
                num: 1,
                title: "Discovery & Strategy",
                desc: "Understand your goals, target audience, and identify the best WordPress solutions.",
              },
              {
                num: 2,
                title: "Design & Prototyping",
                desc: "Create visually stunning and user-friendly designs, tailored to your brand.",
              },
              {
                num: 3,
                title: "Development & Customization",
                desc: "Build or customize themes and plugins, ensuring robust functionality.",
              },
              {
                num: 4,
                title: "Testing & Optimization",
                desc: "Rigorously test for responsiveness, performance, and security across all devices.",
              },
              {
                num: 5,
                title: "Launch & Training",
                desc: "Seamlessly deploy your site and provide training for easy content management.",
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
            Benefits of WordPress Site Creation with Weblynx
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                User-Friendly Management
              </h3>
              <p className="opacity-90 text-base">
                Easily update content, images, and features with WordPress's
                intuitive dashboard, no coding required.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Flexibility & Scalability
              </h3>
              <p className="opacity-90 text-base">
                WordPress adapts to your growing needs, offering endless
                customization options and robust scalability.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                SEO-Friendly Structure
              </h3>
              <p className="opacity-90 text-base">
                Built-in SEO capabilities and powerful plugins help your site
                rank higher in search engine results.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Cost-Effectiveness
              </h3>
              <p className="opacity-90 text-base">
                Benefit from a vast ecosystem of themes and plugins, offering
                powerful features without extensive custom coding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section for this specific service */}
      <section
        className={`py-16 px-4 text-center ${
          isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="container mx-auto max-w-3xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            ref={finalCtaHeadingRef}
          >
            Ready to Build Your Dream WordPress Site?
          </h2>
          <p className="text-lg mb-8 opacity-90" ref={finalCtaTextRef}>
            Let's discuss how we can create a powerful and beautiful WordPress
            website for your business.
          </p>
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
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WordPressSiteCreation;
