// client/src/pages/Services/CustomWebApplications.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";

// IMPORTANT: Replace this with the actual path to your downloaded Lottie JSON file!
import customWebAppsAnimationData from "../../assets/lottie-animations/custom-web-apps-animation.json";

gsap.registerPlugin(ScrollTrigger);

const CustomWebApplications = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);

  const mainHeadingRef = useRef(null);
  const introTextRef = useRef(null);
  const lottieAnimationRef = useRef(null);
  const heroCtaRef = useRef(null);

  const whatWeBuildHeadingRef = useRef(null);
  const whatWeBuildCards = useRef([]);

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
    whatWeBuildCards.current = [];
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

      gsap.from(whatWeBuildHeadingRef.current, {
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: whatWeBuildHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(whatWeBuildCards.current, {
        y: 80,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: whatWeBuildCards.current[0],
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
      id="custom-web-applications"
      ref={sectionRef}
      className={`min-h-screen ${
        isDark ? "bg-gray-950 text-white" : "bg-white text-gray-800"
      } transition-colors duration-500`}
    >
      {/* SEO for the Custom Web Applications Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="Custom Web Applications Development | Weblynx Infotech" // UPDATED
        description="Weblynx Infotech specializes in crafting scalable, secure, and intuitive custom web applications tailored to your business needs, from enterprise solutions to e-commerce platforms." // UPDATED
        keywords="custom web development, web applications, MERN stack, React development, Node.js, enterprise solutions, e-commerce platforms, SaaS development, real-time apps, PWA, Weblynx Infotech" // UPDATED
        ogTitle="Custom Web Applications by Weblynx Infotech - Build Your Digital Vision" // UPDATED
        ogDescription="Elevate your business with bespoke web applications built for performance, scalability, and seamless user experience." // UPDATED
        ogImage="https://www.weblynxinfotech.com/social-share-custom-web-apps.jpg" // UPDATED: Use your new domain
        ogUrl="https://www.weblynxinfotech.com/services/custom-web-applications" // UPDATED: Use your new domain
        canonical="https://www.weblynxinfotech.com/services/custom-web-applications" // UPDATED: Use your new domain
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
                         text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600
                         dark:from-purple-400 dark:to-cyan-400"
            ref={mainHeadingRef}
          >
            Custom Web Applications
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto px-4"
            ref={introTextRef}
          >
            Build your unique digital presence from the ground up. We craft
            scalable, secure, and intuitive web applications tailored precisely
            to your business objectives.
          </p>
          <div
            ref={lottieAnimationRef}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto my-8"
            role="img"
            aria-label="Animated illustration of custom web application development"
          >
            <Lottie
              animationData={customWebAppsAnimationData}
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
            Start Your Project
          </Link>
        </div>
      </section>
      {/* What We Build Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            ref={whatWeBuildHeadingRef}
          >
            What We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Enterprise Solutions
              </h3>
              <p className="opacity-90 text-base">
                Custom CRMs, ERPs, and internal tools designed to streamline
                your business operations and improve efficiency.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                E-commerce Platforms
              </h3>
              <p className="opacity-90 text-base">
                Secure, scalable online stores with advanced features, payment
                integrations, and intuitive user experiences.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Interactive Web Portals
              </h3>
              <p className="opacity-90 text-base">
                Dynamic portals for customers, partners, or employees, offering
                personalized experiences and data access.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                SaaS Products
              </h3>
              <p className="opacity-90 text-base">
                Develop multi-tenant Software-as-a-Service applications with
                robust architecture and flexible subscription models.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Real-time Applications
              </h3>
              <p className="opacity-90 text-base">
                Applications featuring instant updates, live chat, interactive
                dashboards, and collaborative tools.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Progressive Web Apps (PWAs)
              </h3>
              <p className="opacity-90 text-base">
                Websites that offer app-like experiences, working offline, and
                accessible via home screen icons.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Approach Section */}
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
            Our Development Approach
          </h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8">
            <div
              className={`absolute hidden md:block h-1 w-full top-1/2 -translate-y-1/2 rounded-full
                            ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
            ></div>

            {[
              {
                num: 1,
                title: "Discovery & Planning",
                desc: "Deep dive into your vision, requirements, and market to formulate a solid strategy.",
              },
              {
                num: 2,
                title: "Design & Prototyping",
                desc: "Craft intuitive UI/UX, wireframes, and interactive prototypes for early feedback.",
              },
              {
                num: 3,
                title: "Development & Testing",
                desc: "Build robust code with agile methodologies, rigorous testing, and continuous integration.",
              },
              {
                num: 4,
                title: "Deployment & Launch",
                desc: "Ensure a smooth and secure deployment, bringing your application to life.",
              },
              {
                num: 5,
                title: "Support & Evolution",
                desc: "Provide ongoing maintenance, performance optimization, and future enhancements.",
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
            Why Choose Weblynx for Custom Web Applications?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Scalability & Performance
              </h3>
              <p className="opacity-90 text-base">
                We build future-proof applications that can easily scale with
                your business growth and handle high traffic loads with optimal
                performance.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Security & Reliability
              </h3>
              <p className="opacity-90 text-base">
                Your data and intellectual property are protected with
                industry-standard security practices and robust architecture,
                ensuring maximum uptime.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                User-Centric Design
              </h3>
              <p className="opacity-90 text-base">
                Beyond functionality, we prioritize intuitive user interfaces
                and exceptional user experiences that keep your audience engaged
                and satisfied.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Agile & Transparent Process
              </h3>
              <p className="opacity-90 text-base">
                We follow an agile development methodology, ensuring
                transparency, flexibility, and regular communication throughout
                your project lifecycle.
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
                        Ready to Build Your Custom Application?          {" "}
          </h2>
                   {" "}
          <p className="text-lg mb-8 opacity-90" ref={finalCtaTextRef}>
                        Let's discuss your unique idea and how we can turn it
            into a             powerful digital reality.          {" "}
          </p>
                   {" "}
          <Link
            to="/contact"
            ref={finalCtaButtonRef}
            className={`inline-block px-10 py-4 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300
                        ${
              isDark
                ? "bg-cyan-700 text-white hover:bg-cyan-600"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
                        Get a Free Consultation          {" "}
          </Link>
                 {" "}
        </div>
             {" "}
      </section>
         {" "}
    </div>
  );
};

export default CustomWebApplications;
