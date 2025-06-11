// client/src/pages/Services/Services.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";

gsap.registerPlugin(ScrollTrigger);

// Data for the overview cards
const serviceOverviewData = [
  {
    id: "custom-web-applications",
    title: "Custom Web Applications",
    icon: "💻",
    description:
      "Bespoke web solutions tailored to your unique business needs, built for scalability and performance.",
    gradient: "from-blue-500 to-purple-600",
    darkGradient: "from-purple-400 to-cyan-400",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    icon: "📱",
    description:
      "Crafting intuitive and high-performance native or cross-platform mobile applications for iOS & Android.",
    gradient: "from-orange-500 to-red-600",
    darkGradient: "from-amber-400 to-rose-400",
  },
  {
    id: "wordpress-site-creation",
    title: "WordPress Site Creation",
    icon: "🌐",
    description:
      "Flexible, secure, and user-friendly WordPress websites, from custom themes to e-commerce solutions.",
    gradient: "from-green-500 to-blue-600",
    darkGradient: "from-lime-400 to-cyan-400",
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    icon: "📈",
    description:
      "Boost your online visibility and organic traffic with expert search engine optimization strategies.",
    gradient: "from-teal-500 to-emerald-600",
    darkGradient: "from-cyan-400 dark:to-lime-400",
  },
  {
    id: "api-integration",
    title: "API Integration",
    icon: "🔗",
    description:
      "Seamlessly connect your applications with third-party services, enhancing functionality and automation.",
    gradient: "from-purple-500 to-pink-600",
    darkGradient: "from-pink-400 to-orange-400",
  },
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    icon: "🛠️",
    description:
      "End-to-end web development covering both frontend and backend, providing comprehensive digital solutions.",
    gradient: "from-indigo-500 to-sky-600",
    darkGradient: "from-purple-400 dark:to-teal-400",
  },
  {
    id: "support-management-services",
    title: "Support & Management Services",
    icon: "⚙️",
    description:
      "Proactive maintenance, security, and performance optimization to ensure your digital assets run smoothly.",
    gradient: "from-gray-500 to-gray-700",
    darkGradient: "from-gray-400 to-gray-600",
  },
];

const Services = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const overviewRef = useRef(null);
  const cardRefs = useRef([]); // This is the ref that the error claims is "not defined"
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure cardRefs.current is cleared before populating to avoid stale references on re-renders
    // (though for this component's static content, it might not be strictly necessary, it's good practice)
    cardRefs.current = [];

    let ctx = gsap.context(() => {
      // Main Heading Animation
      gsap.from(overviewRef.current.querySelector("h1"), {
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation for overview cards
      // Ensure this runs AFTER all cards are rendered and assigned to refs
      gsap.from(cardRefs.current, {
        // Accessing the array of refs
        y: 80,
        scale: 0.9,
        duration: 0.7,
        ease: "back.out(1.5)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: overviewRef.current, // Use the section ref as the main trigger for the whole grid
          start: "top 70%", // Start animating the grid when the section is 70% from top
          toggleActions: "play none none reverse",
        },
      });
      ScrollTrigger.refresh(); // Refresh after all animations are set up
    }, overviewRef);

    return () => ctx.revert(); // Cleanup
  }, []); // Empty dependency array means this effect runs only once on mount

  const navigateToService = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="min-h-screen">
      {/* SEO for the Services Index Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="Our Digital Services | Weblynx Infotech - Web & Mobile Development"
        description="Explore Weblynx Infotech's comprehensive digital services: custom web applications, mobile app development (iOS/Android), WordPress site creation, SEO optimization, API integration, full stack development, and robust support & management."
        keywords="Weblynx Infotech services, custom web apps, mobile app development, WordPress services, SEO agency, API integration, full stack developer, web support, digital solutions"
        ogTitle="Weblynx Infotech Services: Comprehensive Digital Solutions"
        ogDescription="Find the perfect digital solution for your business with Weblynx Infotech, from cutting-edge web development to expert SEO and reliable support."
        ogUrl="https://www.weblynxinfotech.com/services"
        canonical="https://www.weblynxinfotech.com/services"
      />

      {/* Services Overview Section - This is the ONLY content on the /services page now */}
      <section
        ref={overviewRef} // Attach ref to the main section
        className={`py-16 sm:py-20 px-4 ${
          isDark
            ? "bg-gradient-to-br from-gray-950 to-gray-800 text-white"
            : "bg-gradient-to-br from-blue-50 to-white text-gray-800"
        } transition-colors duration-500`}
      >
        <div className="container mx-auto max-w-7xl text-center">
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6
                         text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600
                         dark:from-purple-400 dark:to-cyan-400"
          >
            OUR DIGITAL SERVICES
          </h1>
          <p className="text-lg md:text-2xl mb-12 md:mb-16 opacity-80 max-w-3xl mx-auto px-4">
            From groundbreaking custom applications to seamless digital
            maintenance, Weblynx Infotech delivers comprehensive solutions to
            elevate your business. Click a service below to learn more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOverviewData.map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => (cardRefs.current[index] = el)} // This line is correct
                onClick={() => navigateToService(service.id)}
                className={`relative p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer
                            ${
                              isDark
                                ? "bg-gray-800 border border-gray-700"
                                : "bg-white border border-gray-200"
                            }
                            overflow-hidden group cursor-pointer transition-all duration-300`}
                whileHover={{
                  boxShadow: isDark
                    ? "0 15px 30px rgba(0, 0, 0, 0.4)"
                    : "0 15px 30px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  className={`text-5xl sm:text-6xl mb-4 sm:mb-6 p-3 sm:p-4 rounded-full inline-block
                                 ${
                                   isDark
                                     ? `bg-gradient-to-br from-purple-600/20 to-cyan-600/20 text-white`
                                     : `bg-gradient-to-br from-blue-600/10 to-green-600/10 text-gray-800`
                                 }`}
                  role="img"
                  aria-label={`Icon for ${service.title}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-blue-600 dark:text-purple-400">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg opacity-80">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional: General CTA at the very end */}
      <section className="py-16 sm:py-20 px-4 text-center text-lg sm:text-xl dark:bg-gray-900 bg-gray-50">
        <p className="max-w-2xl mx-auto px-4 opacity-80">
          Ready to start your project?{" "}
          <a
            href="/contact"
            className="text-blue-600 dark:text-purple-400 font-semibold hover:underline"
          >
            Contact us today!
          </a>
        </p>
      </section>
    </div>
  );
};

export default Services;
