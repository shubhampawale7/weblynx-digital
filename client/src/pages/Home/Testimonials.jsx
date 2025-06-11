// client/src/pages/Home/Testimonials.jsx
import React, { useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  // ... (same data as before)
  {
    name: "Aisha Khan",
    title: "CEO, Tech Solutions Inc.",
    quote:
      "Weblynx transformed our online presence. Their MERN stack expertise and attention to detail are unmatched. Highly recommended!",
    image: "https://placekitten.com/100/100", // Placeholder image
  },
  {
    name: "Raj Patel",
    title: "Founder, Green Innovations",
    quote:
      "Their WordPress development skills are exceptional. They created a beautiful, user-friendly website that perfectly reflects our brand.",
    image: "https://placekitten.com/101/100", // Placeholder image
  },
  {
    name: "Emily Chen",
    title: "Marketing Director, Global Foods",
    quote:
      "Weblynx's SEO strategies significantly boosted our website traffic and online visibility. We saw results quickly!",
    image: "https://placekitten.com/100/101", // Placeholder image
  },
];

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const testimonialRefs = useRef([]);

  useEffect(() => {
    // GSAP ScrollTrigger for heading animation (removed opacity: 0)
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

    // GSAP ScrollTrigger for testimonial cards (removed opacity: 0)
    testimonialRefs.current.forEach((testimonial, index) => {
      gsap.from(testimonial, {
        y: 80, // Still slides up
        scale: 0.9, // Still scales in
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: testimonial,
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
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-16
                       text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600
                       dark:from-pink-400 dark:to-orange-400"
        >
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className={`p-8 rounded-xl shadow-lg flex flex-col items-center text-center
                          ${
                            isDark
                              ? "bg-gray-800 border border-gray-700"
                              : "bg-white border border-gray-200"
                          }
                          transform transition-all duration-300`}
              whileHover={{
                y: -5,
                boxShadow: isDark
                  ? "0 10px 20px rgba(0, 0, 0, 0.3)"
                  : "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              // Removed initial/animate props
            >
              <img
                src={testimonial.image}
                alt={`Testimonial from ${testimonial.name}`}
                className="w-24 h-24 rounded-full mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {testimonial.title}
              </p>
              <blockquote className="text-lg italic opacity-80">
                {testimonial.quote}
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
