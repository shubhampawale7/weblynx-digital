// client/src/pages/Packages/ServicePackagesPage.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { packagesData } from "../../data/packagesData.js";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import Lottie from "lottie-react"; // --- ADDED: Import Lottie

// A sub-component for each package section for cleaner code
const PackageSection = ({ pkg, index }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Alternate layout based on index (even/odd)
  const isReversed = index % 2 !== 0;

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className={`py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        isReversed ? "" : "lg:gap-24"
      }`}
    >
      {/* Text Content */}
      <motion.div
        variants={itemVariants}
        className={isReversed ? "lg:order-2" : ""}
      >
        {pkg.isHighlighted && (
          <span className="inline-block px-4 py-1 text-xs font-bold text-white bg-purple-500 rounded-full mb-4">
            MOST POPULAR
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{pkg.title}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {pkg.description}
        </p>
        <ul className="space-y-4 mb-10">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <FiCheck className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className={`inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1
                    ${
                      pkg.isHighlighted
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20 hover:bg-purple-700"
                        : `${
                            isDark
                              ? "bg-gray-800 hover:bg-gray-700"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`
                    }`}
        >
          {pkg.ctaText}
          <FiArrowRight />
        </Link>
      </motion.div>

      {/* --- UPDATED: Visual/Graphic Column now uses Lottie --- */}
      <motion.div
        variants={itemVariants}
        className={`flex items-center justify-center p-8 ${
          isReversed ? "lg:order-1" : ""
        }`}
      >
        <div className="w-full max-w-sm h-auto">
          <Lottie animationData={pkg.lottieAnimation} loop={true} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServicePackagesPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Service Packages | Weblynx Infotech"
        description="Explore our tailored service packages designed for startups, growing businesses, and e-commerce platforms. Find the perfect solution for your digital needs."
      />

      <header className="py-20 sm:py-24 text-center border-b dark:border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
            Solutions For Your Goals
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            We've bundled our services into clear, value-driven packages to help
            you achieve your specific business objectives.
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4">
        {packagesData.map((pkg, index) => (
          <div
            key={pkg.title}
            className={
              index < packagesData.length - 1
                ? "border-b dark:border-gray-800"
                : ""
            }
          >
            <PackageSection pkg={pkg} index={index} />
          </div>
        ))}
      </main>

      <section
        className={`py-20 sm:py-24 text-center ${
          isDark ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See a Perfect Fit?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Every project is unique. If our packages don't match your exact
            needs, we'd love to build a custom proposal tailored specifically to
            your vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-lg text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition-transform duration-300"
          >
            Request a Custom Quote
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicePackagesPage;
