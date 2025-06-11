// client/src/pages/Home/Testimonials.jsx
import React, { useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../../components/common/Seo.jsx"; // Import Seo component

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    name: "Aisha Khan",
    title: "CEO, Tech Solutions Inc.",
    quote:
      "Weblynx Infotech transformed our online presence. Their custom web application expertise and attention to detail are unmatched. Highly recommended!", // UPDATED
    image: "https://placekitten.com/100/100", // Placeholder image
  },
  {
    name: "Raj Patel",
    title: "Founder, Green Innovations",
    quote:
      "Weblynx Infotech's WordPress development skills are exceptional. They created a beautiful, user-friendly website that perfectly reflects our brand.", // UPDATED
    image: "https://placekitten.com/101/100", // Placeholder image
  },
  {
    name: "Emily Chen",
    title: "Marketing Director, Global Foods",
    quote:
      "Weblynx Infotech's SEO strategies significantly boosted our website traffic and online visibility. We saw impressive results quickly!", // UPDATED
    image: "https://placekitten.com/100/101", // Placeholder image
  },
];

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null); // Ref for the whole section to scope GSAP context
  const headingRef = useRef(null); // Ref for the heading
  const testimonialRefs = useRef([]); // Array to store refs for each testimonial card

  useEffect(() => {
    // Clear ref array on each effect run to prevent duplicates
    testimonialRefs.current = [];

    let ctx = gsap.context(() => {
      // GSAP ScrollTrigger for heading animation
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

      // GSAP ScrollTrigger for testimonial cards
      gsap.from(testimonialRefs.current, {
        y: 80, // Still slides up
        scale: 0.9, // Still scales in
        duration: 0.7,
        ease: "back.out(1.5)",
        stagger: 0.1, // Stagger effect
        scrollTrigger: {
          trigger: testimonialRefs.current[0], // Trigger by the first testimonial
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
      id="testimonials" // Added ID for potential internal linking
      ref={sectionRef}
      className={`py-16 sm:py-20 px-4 ${
        // Adjusted padding
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } transition-colors duration-300`}
    >
      {/* SEO for Testimonials Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="Client Testimonials | Weblynx Infotech - Happy Customers" // UPDATED
        description="Read what our satisfied clients say about Weblynx Infotech's web development, SEO, and digital services. Discover their success stories and experiences." // UPDATED
        keywords="Weblynx Infotech testimonials, client reviews, customer feedback, web development reviews, SEO client success, digital agency testimonials" // UPDATED
        ogTitle="Weblynx Infotech: Trusted by Our Clients" // UPDATED
        ogDescription="See how Weblynx Infotech has helped businesses achieve their digital goals through our client testimonials." // UPDATED
        ogUrl="https://www.weblynxinfotech.com/#testimonials" // Pointing to homepage section for testimonials, adjust if it's a dedicated page
        canonical="https://www.weblynxinfotech.com/#testimonials" // UPDATED: Use your new domain
      />

      <div className="container mx-auto">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 // Adjusted font sizes
                         text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600
                         dark:from-pink-400 dark:to-orange-400"
        >
          What Our Clients Say {/* Heading remains concise */}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {" "}
          {/* Adjusted gap */}
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className={`p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center
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
            >
              <img
                src={testimonial.image}
                alt={`Client testimonial from ${testimonial.name}`} // Descriptive alt text for SEO
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 sm:mb-6 object-cover" // Adjusted size
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {testimonial.name}
              </h3>{" "}
              {/* Adjusted font size */}
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
                {testimonial.title}
              </p>
              <blockquote className="text-base sm:text-lg italic opacity-90">
                {" "}
                {/* Adjusted font size and opacity */}"{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
