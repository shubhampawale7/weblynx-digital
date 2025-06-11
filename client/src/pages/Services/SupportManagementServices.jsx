// client/src/pages/Services/SupportManagementServices.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";

// IMPORTANT: Replace this with the actual path to your downloaded Lottie JSON file!
import supportAnimationData from "../../assets/lottie-animations/support-management.json";

gsap.registerPlugin(ScrollTrigger);

const SupportManagementServices = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);

  const mainHeadingRef = useRef(null);
  const introTextRef = useRef(null);
  const lottieAnimationRef = useRef(null);
  const heroCtaRef = useRef(null);

  const whatWeCoverHeadingRef = useRef(null);
  const whatWeCoverCards = useRef([]);

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
    whatWeCoverCards.current = [];
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

      gsap.from(whatWeCoverHeadingRef.current, {
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: whatWeCoverHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(whatWeCoverCards.current, {
        y: 80,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: whatWeCoverCards.current[0],
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
      id="support-management-services"
      ref={sectionRef}
      className={`min-h-screen ${
        isDark ? "bg-gray-950 text-white" : "bg-white text-gray-800"
      } transition-colors duration-500`}
    >
      {/* SEO for the Support & Management Services Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="Support & Management Services | Weblynx Infotech" // UPDATED
        description="Weblynx Infotech offers comprehensive support and management services for websites and applications, including maintenance, performance optimization, security, and technical assistance." // UPDATED
        keywords="website support, app maintenance, digital asset management, server management, security audits, performance optimization, technical assistance, weblynx Infotech support" // UPDATED
        ogTitle="Weblynx Infotech Support: Proactive Digital Asset Management" // UPDATED
        ogDescription="Ensure the long-term success and smooth operation of your digital investments with Weblynx Infotech's expert support and management services." // UPDATED
        ogImage="https://www.weblynxinfotech.com/social-share-support.jpg" // UPDATED: Use your new domain
        ogUrl="https://www.weblynxinfotech.com/services/support-management-services" // UPDATED: Use your new domain
        canonical="https://www.weblynxinfotech.com/services/support-management-services" // UPDATED: Use your new domain
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
                         text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600
                         dark:from-green-400 dark:to-lime-400"
            ref={mainHeadingRef}
          >
            Support & Management Services
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto px-4"
            ref={introTextRef}
          >
            Ensure the continuous success and optimal performance of your
            digital products with our comprehensive support and management.
          </p>
          <div
            ref={lottieAnimationRef}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto my-8"
            role="img"
            aria-label="Animated illustration of support and management services"
          >
            <Lottie
              animationData={supportAnimationData}
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
            Get Dedicated Support
          </Link>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            ref={whatWeCoverHeadingRef}
          >
            What Our Services Cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeCoverCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Website & App Maintenance
              </h3>
              <p className="opacity-90 text-base">
                Keep your digital assets running smoothly with regular updates,
                bug fixes, and security patches.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeCoverCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Performance Optimization
              </h3>
              <p className="opacity-90 text-base">
                Ensure fast loading times and optimal performance for a superior
                user experience and SEO.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeCoverCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Security Audits & Patching
              </h3>
              <p className="opacity-90 text-base">
                Protect your platform from vulnerabilities with continuous
                monitoring and timely security updates.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeCoverCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Backup & Disaster Recovery
              </h3>
              <p className="opacity-90 text-base">
                Implement robust backup solutions and recovery plans to
                safeguard your data and ensure business continuity.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeCoverCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Content & Feature Updates
              </h3>
              <p className="opacity-90 text-base">
                Effortlessly add new content, features, or make design
                adjustments as your business evolves.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeCoverCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Technical Support & Troubleshooting
              </h3>
              <p className="opacity-90 text-base">
                Receive prompt and expert assistance for any technical issues,
                minimizing downtime and disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Proactive Approach Section */}
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
            Our Proactive Approach
          </h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8">
            <div
              className={`absolute hidden md:block h-1 w-full top-1/2 -translate-y-1/2 rounded-full
                            ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
            ></div>

            {[
              {
                num: 1,
                title: "Initial Assessment",
                desc: "Thorough analysis of your current systems and infrastructure.",
              },
              {
                num: 2,
                title: "Customized Plan",
                desc: "Develop a tailored support and maintenance strategy based on your needs.",
              },
              {
                num: 3,
                title: "Proactive Monitoring",
                desc: "Continuous monitoring for performance, security, and potential issues.",
              },
              {
                num: 4,
                title: "Regular Reporting",
                desc: "Transparent updates on maintenance activities, performance metrics, and recommendations.",
              },
              {
                num: 5,
                title: "Ongoing Evolution",
                desc: "Strategic advice and implementation for future enhancements and scalability.",
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
            Benefits of Support & Management with Weblynx
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Uninterrupted Operations
              </h3>
              <p className="opacity-90 text-base">
                Minimize downtime and ensure your digital platforms are always
                available and performing.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Enhanced Security
              </h3>
              <p className="opacity-90 text-base">
                Protect your data and users with proactive security measures and
                rapid response to threats.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Optimal Performance
              </h3>
              <p className="opacity-90 text-base">
                Regular optimization ensures your site or app loads quickly and
                provides a smooth user experience.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Peace of Mind
              </h3>
              <p className="opacity-90 text-base">
                Focus on your business knowing your digital infrastructure is
                expertly managed and supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section for this specific service */}
      <section
        className={`py-16 px-4 text-center ${
          isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto max-w-3xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            ref={finalCtaHeadingRef}
          >
            Ready for Reliable Digital Support?
          </h2>
          <p className="text-lg mb-8 opacity-90" ref={finalCtaTextRef}>
            Let's secure the long-term success and smooth operation of your
            valuable digital assets.
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

export default SupportManagementServices;
