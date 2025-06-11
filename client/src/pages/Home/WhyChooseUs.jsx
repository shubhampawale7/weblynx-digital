// client/src/pages/Home/WhyChooseUs.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../../components/common/Seo.jsx"; // Import Seo component

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "💡",
    title: "Innovative Solutions",
    description:
      "We bring fresh perspectives and cutting-edge technologies to solve your unique challenges and drive innovation.",
  },
  {
    icon: "🤝",
    title: "Client-Centric Approach",
    description:
      "Your vision is our priority. We collaborate closely to ensure your digital product truly reflects your business goals.",
  },
  {
    icon: "🚀",
    title: "Performance & Scalability",
    description:
      "We build fast, robust, and scalable solutions designed to grow with your business and handle future demands.",
  },
  {
    icon: "✨",
    title: "Pixel-Perfect Design",
    description:
      "Attention to detail matters. We craft stunning, intuitive user interfaces that engage your audience.",
  },
  {
    icon: "🔒",
    title: "Security & Reliability",
    description:
      "Your data and applications are safe with us. We adhere to best practices for secure and reliable development.",
  },
  {
    icon: "⏱️",
    title: "Timely Delivery",
    description:
      "We respect deadlines and deliver high-quality projects on time, every time, without compromising on quality.",
  },
];

const WhyChooseUs = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null); // Ref for the whole section to scope GSAP context
  const headingRef = useRef(null); // Ref for the heading
  const featureRefs = useRef([]); // Array to store refs for each feature card

  // Helper function to add elements to a ref array
  const addToArrayRef = (el, arr) => {
    if (el && !arr.current.includes(el)) {
      arr.current.push(el);
    }
  };

  useEffect(() => {
    // Clear ref array on each effect run to prevent duplicates
    featureRefs.current = [];

    let ctx = gsap.context(() => {
      // Animation for the section heading
      gsap.from(headingRef.current, {
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation for each feature card
      gsap.from(featureRefs.current, {
        y: 80, // Still slides up
        scale: 0.9, // Still scales in
        duration: 0.7,
        ease: "back.out(1.5)",
        stagger: 0.1, // Stagger effect
        scrollTrigger: {
          trigger: featureRefs.current[0], // Trigger by the first card
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
      ScrollTrigger.refresh();
    }, sectionRef); // Scope the context to the main section ref

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-choose-us" // Added ID for potential internal linking
      ref={sectionRef}
      className={`py-16 sm:py-20 px-4 ${
        // Adjusted padding
        isDark
          ? "bg-gradient-to-br from-gray-950 to-gray-800 text-white"
          : "bg-gradient-to-br from-blue-50 to-white text-gray-800"
      } transition-colors duration-500`}
    >
      {/* SEO for Why Choose Us Section - UPDATED for Weblynx Infotech */}
      <Seo
        title="Why Choose Weblynx Infotech? - Our Unique Advantages" // UPDATED
        description="Discover why Weblynx Infotech is your ideal digital partner. We offer innovative solutions, a client-centric approach, superior performance, and timely delivery for your web and mobile projects." // UPDATED
        keywords="Why choose Weblynx Infotech, Weblynx Infotech advantages, digital agency benefits, innovative solutions, client-centric, performance, scalability, pixel-perfect design, security, reliability, timely delivery" // UPDATED
        ogTitle="Weblynx Infotech: Your Trusted Partner for Digital Success" // UPDATED
        ogDescription="Learn what sets Weblynx Infotech apart and why we're the right choice for your next digital project." // UPDATED
        ogUrl="https://www.weblynxinfotech.com/#why-choose-us" // Pointing to homepage section, adjust if it's a dedicated page
        canonical="https://www.weblynxinfotech.com/#why-choose-us" // UPDATED: Use your new domain
      />

      <div className="container mx-auto">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 // Adjusted font sizes
                         text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600
                         dark:from-cyan-400 dark:to-lime-400"
        >
          Why Choose Weblynx Infotech? {/* UPDATED: Changed display name */}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {" "}
          {/* Adjusted gap */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              ref={(el) => addToArrayRef(el, featureRefs)}
              className={`p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center
                            ${
                              isDark
                                ? "bg-gray-800 border border-gray-700"
                                : "bg-white border border-gray-200"
                            }
                            transform transition-all duration-300 group`}
              whileHover={{
                y: -5,
                boxShadow: isDark
                  ? "0 10px 20px rgba(0, 0, 0, 0.3)"
                  : "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className={`text-5xl sm:text-6xl mb-4 sm:mb-6 p-3 sm:p-4 rounded-full inline-block
                                 ${
                                   isDark
                                     ? "bg-cyan-600/20 text-cyan-400"
                                     : "bg-green-600/10 text-green-600"
                                 }`}
                role="img"
                aria-label={`Icon for ${feature.title}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-green-600 dark:text-cyan-400">
                {feature.title}
              </h3>
              <p className="text-base opacity-90">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
