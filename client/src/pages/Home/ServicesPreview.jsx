import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCode,
  FiPenTool,
  FiTrendingUp,
  FiSmartphone,
  FiLayers,
} from "react-icons/fi";

const servicesData = [
  {
    Icon: FiCode,
    title: "Custom Web Applications",
    description:
      "Robust, scalable, and dynamic web applications built with the MERN stack, tailored precisely to your business needs and designed for high performance.",
    link: "/services#custom-web-apps",
  },
  {
    Icon: FiLayers,
    title: "Full Stack Development",
    description:
      "Comprehensive, end-to-end development covering every aspect of your project, from the server-side logic to the pixel-perfect user interface.",
    link: "/services#fullstack",
  },
  {
    Icon: FiPenTool,
    title: "WordPress Development",
    description:
      "Flexible, powerful websites built on WordPress, giving you full control over your content with a beautiful, custom-designed theme.",
    link: "/services#wordpress",
  },
  {
    Icon: FiTrendingUp,
    title: "SEO & Digital Marketing",
    description:
      "Boost your online visibility and dominate search rankings. Our expert SEO strategies are designed to drive organic traffic and grow your audience.",
    link: "/services#seo",
  },
  {
    Icon: FiSmartphone,
    title: "Mobile App Development",
    description:
      "Engaging and intuitive mobile applications that provide a seamless user experience and connect you with your customers on the go.",
    link: "/services#mobile-apps",
  },
];

const ITEM_HEIGHT = 450; // The fixed height of each content item in the reel

const ServicesPreview = () => {
  // We'll use the same state for both mobile and desktop active items
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header (remains the same) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
            Our Digital Capabilities
          </h2>
          <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
            We architect and build robust digital solutions engineered to drive
            results and fuel growth for your business.
          </p>
        </motion.div>

        {/* DESKTOP VIEW: The original two-column reel layout */}
        {/* This entire div is hidden on screens smaller than 'lg' */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-4 lg:sticky top-32">
            {servicesData.map((service, index) => (
              <motion.button
                key={service.title}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative w-full p-6 text-left rounded-xl transition-all duration-300 border
                  ${
                    activeIndex === index
                      ? "bg-white dark:bg-brand-dark-blue shadow-xl border-transparent"
                      : "bg-transparent border-gray-200 dark:border-brand-light-blue/20 hover:bg-gray-50 dark:hover:bg-brand-dark-blue/30"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <service.Icon
                    className={`w-8 h-8 transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-brand-accent"
                        : "text-brand-light-blue"
                    }`}
                  />
                  <h3 className="font-display text-xl font-bold text-brand-dark dark:text-white">
                    {service.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>

          <div
            className="relative border border-gray-200 dark:border-brand-light-blue/20 rounded-2xl"
            style={{ height: ITEM_HEIGHT }}
          >
            <div
              className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              }}
            >
              <motion.div
                className="absolute inset-0 w-full"
                animate={{ y: -activeIndex * ITEM_HEIGHT }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              >
                {servicesData.map((service, index) => (
                  <div
                    key={service.title}
                    className="w-full flex flex-col justify-center p-8 lg:p-12 text-left bg-gray-50 dark:bg-brand-dark-blue/50"
                    style={{ height: ITEM_HEIGHT }}
                  >
                    <h3 className="font-display text-3xl lg:text-4xl font-bold text-brand-dark dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-brand-light-blue dark:text-brand-gray mb-6 max-w-xl">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="group inline-flex items-center gap-2 font-semibold text-brand-accent"
                    >
                      <span>Learn More</span>
                      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW: A user-friendly accordion layout */}
        {/* This div is only visible on screens smaller than 'lg' */}
        <div className="lg:hidden flex flex-col gap-4">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className="bg-white dark:bg-brand-dark-blue/30 rounded-xl border border-gray-200 dark:border-brand-light-blue/20 overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <service.Icon
                    className={`w-7 h-7 transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-brand-accent"
                        : "text-brand-light-blue"
                    }`}
                  />
                  <h3 className="flex-1 font-display text-lg font-bold text-brand-dark dark:text-white">
                    {service.title}
                  </h3>
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <p className="text-md text-brand-light-blue dark:text-brand-gray mb-4">
                        {service.description}
                      </p>
                      <Link
                        to={service.link}
                        className="group inline-flex items-center gap-2 font-semibold text-sm text-brand-accent"
                      >
                        <span>Learn More</span>
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
