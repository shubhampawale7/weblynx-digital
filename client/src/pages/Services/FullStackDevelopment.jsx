// client/src/pages/Services/FullStackDevelopment.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";

// IMPORTANT: Replace this with the actual path to your downloaded Lottie JSON file!
import fullStackAnimationData from "../../assets/lottie-animations/full-stack-animation.json";

gsap.registerPlugin(ScrollTrigger);

const FullStackDevelopment = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);

  const mainHeadingRef = useRef(null);
  const introTextRef = useRef(null);
  const lottieAnimationRef = useRef(null);
  const heroCtaRef = useRef(null);

  const expertiseHeadingRef = useRef(null);
  const expertiseCards = useRef([]);

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
    expertiseCards.current = [];
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

      gsap.from(expertiseHeadingRef.current, {
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: expertiseHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(expertiseCards.current, {
        y: 80,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: expertiseCards.current[0],
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
      id="fullstack-development"
      ref={sectionRef}
      className={`min-h-screen ${
        isDark ? "bg-gray-950 text-white" : "bg-white text-gray-800"
      } transition-colors duration-500`}
    >
      {/* SEO for Full Stack Development Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="Full Stack Development Services | Weblynx Infotech" // UPDATED
        description="Weblynx Infotech provides comprehensive end-to-end full stack development services, managing both frontend and backend to deliver cohesive and high-quality applications." // UPDATED
        keywords="full stack development, MERN stack, Node.js, React.js, Express.js, MongoDB, web application development, frontend development, backend development, API design, cloud deployment, Weblynx Infotech" // UPDATED
        ogTitle="Weblynx Infotech: Complete Full Stack Development Solutions" // UPDATED
        ogDescription="Partner with Weblynx Infotech for holistic full stack development that brings your digital vision to life from concept to deployment." // UPDATED
        ogImage="https://www.weblynxinfotech.com/social-share-full-stack.jpg" // UPDATED: Use your new domain
        ogUrl="https://www.weblynxinfotech.com/services/full-stack-development" // UPDATED: Use your new domain
        canonical="https://www.weblynxinfotech.com/services/full-stack-development" // UPDATED: Use your new domain
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
                         text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-600
                         dark:from-purple-400 dark:to-teal-400"
            ref={mainHeadingRef}
          >
            Full Stack Development
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto px-4"
            ref={introTextRef}
          >
            Receive a complete digital solution from concept to deployment. We
            manage both frontend and backend to deliver cohesive, high-quality
            applications.
          </p>
          <div
            ref={lottieAnimationRef}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto my-8"
            role="img"
            aria-label="Animated illustration of full stack development"
          >
            <Lottie
              animationData={fullStackAnimationData}
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
            Build End-to-End
          </Link>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            ref={expertiseHeadingRef}
          >
            Our Full Stack Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, expertiseCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Frontend Development
              </h3>
              <p className="opacity-90 text-base">
                Crafting intuitive and engaging user interfaces using React.js
                and modern UI/UX principles.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, expertiseCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Backend Development
              </h3>
              <p className="opacity-90 text-base">
                Building robust and scalable server-side logic, APIs, and
                database solutions with Node.js and Express.js.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, expertiseCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Database Management
              </h3>
              <p className="opacity-90 text-base">
                Expertise in MongoDB, SQL, and other database technologies for
                efficient data storage and retrieval.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, expertiseCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                API Design & Integration
              </h3>
              <p className="opacity-90 text-base">
                Designing and integrating powerful APIs to enable seamless
                communication between services.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, expertiseCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Cloud Deployment
              </h3>
              <p className="opacity-90 text-base">
                Deploying and managing applications on cloud platforms like
                Vercel, Render, or Railway for scalability.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, expertiseCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Security & QA
              </h3>
              <p className="opacity-90 text-base">
                Implementing robust security measures and rigorous quality
                assurance throughout the development cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Full Stack Advantage Section */}
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
            The Full Stack Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, approachSteps)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Single Point of Contact
              </h3>
              <p className="opacity-90 text-base">
                Simplify communication and project management by working with
                one cohesive team for all development needs.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, approachSteps)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Faster Development Cycles
              </h3>
              <p className="opacity-90 text-base">
                Streamlined processes between frontend and backend teams lead to
                quicker iterations and deployment.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, approachSteps)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Consistent Vision
              </h3>
              <p className="opacity-90 text-base">
                Maintain a unified design and functional vision across your
                entire application, from user interface to database.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, approachSteps)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Optimized Performance
              </h3>
              <p className="opacity-90 text-base">
                Expertise across the stack allows for end-to-end optimization,
                ensuring your application runs efficiently.
              </p>
            </div>
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
            Why Choose Weblynx for Full Stack Development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Holistic Approach
              </h3>
              <p className="opacity-90 text-base">
                We handle everything from pixels to databases, providing a
                cohesive and fully integrated solution.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Problem Solvers
              </h3>
              <p className="opacity-90 text-base">
                Our full stack team can quickly diagnose and solve challenges
                across any layer of your application.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Future-Proof Solutions
              </h3>
              <p className="opacity-90 text-base">
                We build scalable and maintainable applications designed to
                evolve with your business needs.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Dedicated Expertise
              </h3>
              <p className="opacity-90 text-base">
                Benefit from a team with deep knowledge and experience across
                the entire web development spectrum.
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
            Ready for a Complete Digital Solution?
          </h2>
          <p className="text-lg mb-8 opacity-90" ref={finalCtaTextRef}>
            Let's discuss how our full stack expertise can bring your vision to
            life from concept to deployment.
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

export default FullStackDevelopment;
