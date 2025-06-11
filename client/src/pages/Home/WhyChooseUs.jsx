// client/src/pages/Home/WhyChooseUs.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const features = [
  // ... (same data as before)
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
  const sectionRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    // Animation for the section heading (removed opacity: 0)
    gsap.from(sectionRef.current.querySelector("h2"), {
      y: -50, // Still slides from above
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // Animation for each feature card (removed opacity: 0)
    featureRefs.current.forEach((feature, index) => {
      gsap.from(feature, {
        y: 80, // Still slides up
        scale: 0.9, // Still scales in
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: feature,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-4 ${
        isDark
          ? "bg-gradient-to-br from-gray-950 to-gray-800 text-white"
          : "bg-gradient-to-br from-blue-50 to-white text-gray-800"
      } transition-colors duration-500`}
    >
      <div className="container mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-16
                       text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600
                       dark:from-cyan-400 dark:to-lime-400"
        >
          Why Choose Weblynx?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              ref={(el) => (featureRefs.current[index] = el)}
              className={`p-8 rounded-xl shadow-lg flex flex-col items-center text-center
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
              // Removed initial/animate props as GSAP handles reveal and initial visibility is desired
            >
              <div
                className={`text-6xl mb-6 p-4 rounded-full inline-block
                               ${
                                 isDark
                                   ? "bg-cyan-600/20 text-cyan-400"
                                   : "bg-green-600/10 text-green-600"
                               }`}
              >
                {feature.icon}
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-green-600 dark:text-cyan-400">
                {feature.title}
              </h3>
              <p className="text-lg opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
