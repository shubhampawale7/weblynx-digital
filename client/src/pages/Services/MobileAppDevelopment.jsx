// client/src/pages/Services/MobileAppDevelopment.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { Link } from "react-router-dom"; // Import Link for CTA
import Seo from "../../components/common/Seo.jsx"; // Import Seo component

// IMPORTANT: Replace this with the actual path to your downloaded Lottie JSON file!
import mobileAppAnimationData from "../../assets/lottie-animations/mobile-app-development.json";

gsap.registerPlugin(ScrollTrigger);

const MobileAppDevelopment = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null); // Ref for the entire component's root div

  // Refs for specific groups of elements to animate
  const mainHeadingRef = useRef(null);
  const introTextRef = useRef(null);
  const lottieAnimationRef = useRef(null);
  const heroCtaRef = useRef(null);

  const whatWeBuildHeadingRef = useRef(null);
  const whatWeBuildCards = useRef([]); // Array for "What We Build" cards

  const approachHeadingRef = useRef(null);
  const approachSteps = useRef([]); // Array for "Our Mobile Approach" steps

  const benefitsHeadingRef = useRef(null);
  const benefitsCards = useRef([]); // Array for "Benefits" cards

  const finalCtaHeadingRef = useRef(null);
  const finalCtaTextRef = useRef(null);
  const finalCtaButtonRef = useRef(null);

  // Helper function to add elements to a ref array
  const addToArrayRef = (el, arr) => {
    if (el && !arr.current.includes(el)) {
      arr.current.push(el);
    }
  };

  useEffect(() => {
    // Clear ref arrays on each effect run to prevent duplicates
    whatWeBuildCards.current = [];
    approachSteps.current = [];
    benefitsCards.current = [];

    let ctx = gsap.context(() => {
      // Main Heading Animation
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

      // Hero Section Text, Lottie, & CTA
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

      // What We Build Section Animations
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

      // Our Approach Section Animations
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

      // Benefits Section Animations
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

      // Final CTA Section Animations
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
      id="mobile-app"
      ref={sectionRef}
      className={`min-h-screen ${
        isDark ? "bg-gray-950 text-white" : "bg-white text-gray-800"
      } transition-colors duration-500`}
    >
      {/* SEO for Mobile App Development Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="Mobile App Development Services | Weblynx Infotech" // UPDATED
        description="Weblynx Infotech crafts intuitive and high-performance native (iOS/Android) and cross-platform mobile applications to extend your reach and engage users worldwide." // UPDATED
        keywords="mobile app development, iOS app development, Android app development, cross-platform apps, React Native, Flutter, mobile UI/UX, app store optimization, Weblynx Infotech" // UPDATED
        ogTitle="Weblynx Infotech: Building Next-Gen Mobile Experiences" // UPDATED
        ogDescription="Launch powerful mobile apps with Weblynx Infotech, designed for performance, user engagement, and market success." // UPDATED
        ogImage="https://www.weblynxinfotech.com/social-share-mobile-app.jpg" // UPDATED: Use your new domain
        ogUrl="https://www.weblynxinfotech.com/services/mobile-app-development" // UPDATED: Use your new domain
        canonical="https://www.weblynxinfotech.com/services/mobile-app-development" // UPDATED: Use your new domain
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
                         text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600
                         dark:from-amber-400 dark:to-rose-400"
            ref={mainHeadingRef}
          >
            Mobile App Development
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto px-4"
            ref={introTextRef}
          >
            Extend your reach and engage your users on the go with custom mobile
            applications for iOS and Android.
          </p>
          <div
            ref={lottieAnimationRef}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto my-8"
            role="img"
            aria-label="Animated illustration of mobile app development"
          >
            <Lottie
              animationData={mobileAppAnimationData}
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
            Build Your App
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
            Types of Mobile Apps We Develop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Native iOS Apps
              </h3>
              <p className="opacity-90 text-base">
                Leverage Swift/Objective-C to build high-performance,
                feature-rich applications exclusively for Apple's ecosystem.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Native Android Apps
              </h3>
              <p className="opacity-90 text-base">
                Develop robust and scalable applications using Kotlin/Java,
                optimized for the vast Android device landscape.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Cross-Platform Apps
              </h3>
              <p className="opacity-90 text-base">
                Reach both iOS and Android users with a single codebase using
                frameworks like React Native or Flutter, saving time and cost.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Hybrid Apps
              </h3>
              <p className="opacity-90 text-base">
                Develop web-based applications wrapped in a native container,
                offering a balance of reach and native features.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Mobile UI/UX Design
              </h3>
              <p className="opacity-90 text-base">
                Craft intuitive, engaging, and accessible user interfaces and
                experiences tailored for mobile devices.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, whatWeBuildCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Backend for Mobile
              </h3>
              <p className="opacity-90 text-base">
                Develop robust and scalable server-side infrastructure to
                support your mobile application's data and logic.
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
            Our Mobile App Development Approach
          </h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8">
            <div
              className={`absolute hidden md:block h-1 w-full top-1/2 -translate-y-1/2 rounded-full
                            ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
            ></div>

            {[
              {
                num: 1,
                title: "Strategy & Concept",
                desc: "Define your app's purpose, target audience, and key features to build a solid foundation.",
              },
              {
                num: 2,
                title: "UI/UX Design",
                desc: "Create engaging wireframes, mockups, and prototypes that prioritize user experience.",
              },
              {
                num: 3,
                title: "Development",
                desc: "Build the app using native or cross-platform technologies, ensuring clean and efficient code.",
              },
              {
                num: 4,
                title: "Testing & QA",
                desc: "Rigorously test the app across devices and scenarios to ensure stability and performance.",
              },
              {
                num: 5,
                title: "Deployment & Launch",
                desc: "Handle app store submission (Apple App Store, Google Play) and smooth deployment.",
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
            Benefits of Mobile App Development with Weblynx
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Wider Audience Reach
              </h3>
              <p className="opacity-90 text-base">
                Connect with users directly on their preferred devices,
                expanding your market and brand presence.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Enhanced User Engagement
              </h3>
              <p className="opacity-90 text-base">
                Utilize native features like push notifications and device
                hardware for a richer, more interactive experience.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Increased Brand Loyalty
              </h3>
              <p className="opacity-90 text-base">
                A dedicated app keeps your brand top-of-mind and provides a
                direct channel for customer interaction.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, benefitsCards)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                New Revenue Streams
              </h3>
              <p className="opacity-90 text-base">
                Monetize through in-app purchases, subscriptions, or premium
                features, unlocking new business opportunities.
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
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-lg mb-8 opacity-90" ref={finalCtaTextRef}>
            Let's discuss how we can bring your app idea to life and connect you
            with users worldwide.
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

export default MobileAppDevelopment;
