// client/src/pages/Home/ServicesPreview.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../../components/common/Seo.jsx"; // Import Seo component

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    icon: "💻",
    title: "Custom Web Applications",
    description:
      "Robust, scalable, and dynamic web applications tailored precisely to your business needs.",
    link: "/services#custom-web-apps",
  },
  {
    icon: "🌐",
    title: "WordPress Site Creation",
    description:
      "Flexible, user-friendly, and powerful websites tailored to your business needs.",
    link: "/services#wordpress",
  },
  {
    icon: "📈",
    title: "SEO Optimization",
    description:
      "Boost your online visibility and rank higher with expert search engine optimization.",
    link: "/services#seo",
  },
  {
    icon: "🔗",
    title: "API Integration",
    description:
      "Seamlessly connect your applications with third-party services and data.",
    link: "/services#api",
  },
  {
    icon: "🛠️",
    title: "Full Stack Development",
    description:
      "End-to-end development covering both front-end and back-end aspects of your project.",
    link: "/services#fullstack",
  },
  // Note: Add Mobile App Development and Support & Management Services here if you want them in the preview as well,
  // matching the data in client/src/pages/Services/Services.jsx
  // For this update, I'm using the provided servicesData only.
];

const ServicesPreview = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const cardsRefs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Using gsap.context for robustness
      gsap.from(sectionRef.current.querySelector("h2"), {
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      cardsRefs.current.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15,
        });
      });
      ScrollTrigger.refresh(); // Refresh after all animations are set up
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-4 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } transition-colors duration-300`}
    >
      {/* SEO for Services Preview Section on Homepage */}
      <Seo
        title="Our Digital Services Preview | Weblynx Infotech" // UPDATED
        description="A preview of Weblynx Infotech's core digital services, including custom web applications, WordPress solutions, SEO optimization, and API integration." // UPDATED
        keywords="Weblynx Infotech services preview, web development, digital solutions, custom apps, WordPress, SEO, API, full stack" // UPDATED
        ogTitle="Weblynx Infotech: A Glimpse of Our Services" // UPDATED
        ogDescription="See a quick overview of how Weblynx Infotech can elevate your digital presence." // UPDATED
        ogUrl="https://www.weblynxinfotech.com/" // This section is part of the homepage, so canonical should point to homepage
        canonical="https://www.weblynxinfotech.com/" // UPDATED: Use your new domain
      />

      <div className="container mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-16
                         text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600
                         dark:from-purple-400 dark:to-cyan-400"
        >
          OUR CORE DIGITAL SERVICES {/* Heading remains concise */}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              ref={(el) => (cardsRefs.current[index] = el)}
              className={`relative p-8 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer
                            ${
                              isDark
                                ? "bg-gray-800 border border-gray-700"
                                : "bg-gray-50 border border-gray-200"
                            }
                            overflow-hidden group cursor-pointer transition-all duration-300`}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: isDark
                  ? "0 15px 30px rgba(0, 0, 0, 0.4)"
                  : "0 15px 30px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div
                className={`absolute inset-0 rounded-xl pointer-events-none
                                ${
                                  isDark
                                    ? "bg-gradient-to-br from-purple-500 to-cyan-500"
                                    : "bg-gradient-to-br from-blue-500 to-green-500"
                                }
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{ zIndex: 0, filter: "blur(10px)" }}
              ></div>

              <div className="relative z-10">
                <div
                  className={`text-6xl mb-6 p-4 rounded-full inline-block
                                 ${
                                   isDark
                                     ? "bg-purple-600/20 text-purple-400"
                                     : "bg-blue-600/10 text-blue-600"
                                 }`}
                  role="img"
                  aria-label={`Icon for ${service.title}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-purple-400">
                  {service.title}
                </h3>
                <p className="text-lg opacity-80 mb-6">{service.description}</p>
                <a
                  href={service.link}
                  className={`inline-flex items-center px-6 py-2 rounded-full font-medium transition-all duration-300
                                ${
                                  isDark
                                    ? "bg-purple-700 hover:bg-purple-600 text-white"
                                    : "bg-blue-600 hover:bg-blue-700 text-white"
                                }`}
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/services"
            className={`inline-block px-8 py-4 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300
                        ${
                          isDark
                            ? "bg-cyan-700 text-white hover:bg-cyan-600"
                            : "bg-green-600 text-white hover:bg-green-700"
                        }`}
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
