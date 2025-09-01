// client/src/components/Home/Testimonials.jsx
import React, { useState, useEffect } from "react";
import Seo from "../../components/common/Seo.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// --- Enriched Testimonials Data with Avatars & Colors ---
const testimonialsData = [
  {
    name: "Priya Sharma",
    company: "Aakash Textiles",
    quote:
      "Working with Weblynx Infotech was a game-changer. Their team understood our vision perfectly and delivered a web application that has streamlined our entire operation.",
    avatar: "PS",
    color: "bg-teal-500",
  },
  {
    name: "Vikram Singh",
    company: "Surya Logistics",
    quote:
      "The professionalism and technical expertise are top-notch. They handled our complex API integrations seamlessly, and their support has been outstanding.",
    avatar: "VS",
    color: "bg-sky-500",
  },
  {
    name: "Anjali Mehta",
    company: "The Chai Spot Cafe",
    quote:
      "They built a stunning WordPress site for my cafe that has brought in so much new business. The design is beautiful, and it's so easy for me to update the menu myself.",
    avatar: "AM",
    color: "bg-amber-500",
  },
  {
    name: "Rohan Desai",
    company: "NextGen Edu",
    quote:
      "For scalable, high-performance MERN stack applications, I wouldn't trust anyone else. Weblynx Infotech delivers quality code on time, every time.",
    avatar: "RD",
    color: "bg-indigo-500",
  },
];

// --- Framer Motion Variants for the carousel ---
const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovering, setIsHovering] = useState(false);

  const activeIndex =
    ((page % testimonialsData.length) + testimonialsData.length) %
    testimonialsData.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToTestimonial = (newIndex) => {
    const currentWrappedIndex =
      ((page % testimonialsData.length) + testimonialsData.length) %
      testimonialsData.length;
    const newDirection = newIndex > currentWrappedIndex ? 1 : -1;
    setPage([newIndex, newDirection]);
  };

  useEffect(() => {
    if (isHovering) return;
    const autoplay = setInterval(() => paginate(1), 5000);
    return () => clearInterval(autoplay);
  }, [page, isHovering]);

  return (
    <section className="bg-gray-50 dark:bg-black py-20 sm:py-28">
      {/* SEO Component */}
      <Seo
        title="Home | Weblynx Infotech"
        description="See what our clients in Pune and beyond are saying about our web development, SEO, and digital marketing services. Real feedback from real partners."
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
            What Our Partners Say
          </h2>
          <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
            Real feedback from businesses we've helped build and scale.
          </p>
        </motion.div>

        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative max-w-3xl mx-auto h-[350px] sm:h-[300px]"
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full p-8 bg-white dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20 rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <FaQuoteLeft className="text-3xl text-gray-200 dark:text-brand-dark-blue mb-4" />
                <blockquote className="text-lg md:text-xl font-medium text-brand-dark dark:text-white leading-relaxed">
                  {testimonialsData[activeIndex].quote}
                </blockquote>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div
                  className={`w-12 h-12 rounded-full ${testimonialsData[activeIndex].color} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {testimonialsData[activeIndex].avatar}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-dark dark:text-white">
                    {testimonialsData[activeIndex].name}
                  </h3>
                  <p className="text-sm text-brand-light-blue dark:text-brand-gray">
                    {testimonialsData[activeIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev/Next Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 p-2 bg-white/50 dark:bg-brand-dark-blue/50 backdrop-blur-sm rounded-full text-brand-dark dark:text-white hover:bg-brand-accent/20 transition-colors z-20"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 p-2 bg-white/50 dark:bg-brand-dark-blue/50 backdrop-blur-sm rounded-full text-brand-dark dark:text-white hover:bg-brand-accent/20 transition-colors z-20"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => goToTestimonial(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300
                ${
                  activeIndex === i
                    ? "w-8 bg-brand-accent"
                    : "bg-gray-300 dark:bg-brand-dark-blue hover:bg-gray-400"
                }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
