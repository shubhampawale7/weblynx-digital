// client/src/pages/Testimonials/Testimonials.jsx
import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Seo from "../../components/common/Seo.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

// --- Testimonials Data (No Images) ---
const testimonialsData = [
  {
    name: "Priya Sharma",
    company: "Aakash Textiles",
    quote:
      "Working with Weblynx Infotech was a game-changer. Their team understood our vision perfectly and delivered a web application that has streamlined our entire operation.",
  },
  {
    name: "Vikram Singh",
    company: "Surya Logistics",
    quote:
      "The professionalism and technical expertise are top-notch. They handled our complex API integrations seamlessly, and their support has been outstanding.",
  },
  {
    name: "Anjali Mehta",
    company: "The Chai Spot Cafe",
    quote:
      "They built a stunning WordPress site for my cafe that has brought in so much new business. The design is beautiful, and it's so easy for me to update the menu myself.",
  },
  {
    name: "Rohan Desai",
    company: "NextGen Edu",
    quote:
      "For scalable, high-performance MERN stack applications, I wouldn't trust anyone else. Weblynx Infotech delivers quality code on time, every time.",
  },
];

// --- Framer Motion Variants for the text ticker effect ---
const tickerVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
  exit: { y: -20, opacity: 0, transition: { ease: "easeIn", duration: 0.3 } },
};

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isHovering) return;

    const autoplay = setInterval(() => {
      handleNext();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(autoplay);
  }, [activeIndex, isHovering, handleNext]);

  return (
    <section
      className={`py-24 sm:py-24 transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-slate-50 text-gray-900"
      }`}
    >
      <Seo
        title="Testimonials | Weblynx Infotech"
        description="See what our clients in Pune and beyond are saying about our web development, SEO, and digital marketing services. Real feedback from real partners."
        keywords="client testimonials, Weblynx Infotech reviews, web development feedback, client success stories, Pune web agency"
        ogTitle="Client Success Stories | Weblynx Infotech"
        ogDescription="Hear directly from our partners about their experience working with Weblynx Infotech to achieve their digital goals."
        ogUrl="https://www.weblynxinfotech.com/testimonials"
        canonical="https://www.weblynxinfotech.com/testimonials"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 flex flex-col items-center"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Partners Say
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-2">
            Real feedback from businesses we've helped build.
          </p>
        </div>

        <div
          className="relative w-full max-w-3xl text-center p-8 sm:p-12 rounded-2xl border min-h-[320px] flex flex-col justify-center
                     border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-gray-200 dark:text-gray-700 -z-0" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={tickerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative z-10"
            >
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed">
                {testimonialsData[activeIndex].quote}
              </blockquote>
              <div className="mt-6">
                <h3 className="text-base font-bold text-purple-600 dark:text-purple-400">
                  {testimonialsData[activeIndex].name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonialsData[activeIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === activeIndex
                  ? "bg-purple-500 scale-125"
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
