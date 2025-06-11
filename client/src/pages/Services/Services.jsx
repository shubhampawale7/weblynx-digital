// client/src/pages/Services/Services.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx"; // Import the Seo component

gsap.registerPlugin(ScrollTrigger);

// Data for the overview cards (no changes here)
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
    darkGradient: "from-purple-400 to-teal-400",
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
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
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

      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          y: 80,
          scale: 0.9,
          duration: 0.7,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        });
      });
      ScrollTrigger.refresh();
    }, overviewRef);

    return () => ctx.revert();
  }, []);

  const navigateToService = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="min-h-screen">
      {/* SEO for the Services Index Page */}
      <Seo
        title="Our Digital Services - Web Development & Optimization"
        description="Explore Weblynx's comprehensive digital services: custom web applications, mobile app development (iOS/Android), WordPress site creation, SEO optimization, API integration, full stack development, and robust support & management."
        keywords="weblynx services, custom web apps, mobile app development, WordPress services, SEO agency, API integration, full stack developer, web support, digital solutions"
        ogTitle="Weblynx Services: Comprehensive Digital Solutions"
        ogDescription="Find the perfect digital solution for your business, from cutting-edge web development to expert SEO and reliable support."
        ogUrl="https://www.weblynx.com/services" // Replace with your actual domain
        canonical="https://www.weblynx.com/services" // Replace with your actual domain
      />

      {/* Services Overview Section - This is the ONLY content on the /services page now */}
      <section
        ref={overviewRef}
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
            Our Digital Services
          </h1>
          <p className="text-lg md:text-2xl mb-12 md:mb-16 opacity-80 max-w-3xl mx-auto px-4">
            From groundbreaking custom applications to seamless digital
            maintenance, Weblynx delivers comprehensive solutions to elevate
            your business. Click a service below to learn more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOverviewData.map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => navigateToService(service.id)}
                className={`relative p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer
                            ${
                              isDark
                                ? "bg-gray-800 border border-gray-700"
                                : "bg-white border border-gray-200"
                            }
                            transform transition-all duration-300 group hover:scale-[1.02]`}
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

      {/* Optional: General CTA at the very end (this section might be removed or moved to each detailed service page) */}
      {/* For now, keeping it here for continuity on the index page */}
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
