// client/src/pages/Packages/ServicePackagesPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { packagesData } from "../../data/packagesData.js";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import Lottie from "lottie-react";
import { useTheme } from "../../context/ThemeContext.jsx"; // Import useTheme

// --- Framer Motion Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// --- A Sub-component for each Package Card ---
const PackageCard = ({ pkg }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
      className={`relative h-full flex flex-col p-8 rounded-2xl border transition-all duration-300
        ${
          pkg.isHighlighted
            ? isDark
              ? "bg-brand-dark-blue border-2 border-brand-accent shadow-2xl shadow-brand-accent/10 lg:scale-105" // Dark mode highlight
              : "bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 border-2 border-brand-accent shadow-2xl shadow-brand-accent/10 lg:scale-105" // Light mode highlight
            : isDark
            ? "bg-brand-dark-blue/30 backdrop-blur-md border-brand-light-blue/20 shadow-xl" // Dark mode normal
            : "bg-white/80 backdrop-blur-md border-gray-200 shadow-lg" // Light mode normal
        }`}
    >
      {pkg.isHighlighted && (
        <div
          className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-bold bg-brand-accent rounded-full
          text-brand-dark"
        >
          {" "}
          {/* Ensure text is always dark for contrast on accent background */}
          MOST POPULAR
        </div>
      )}

      <div className="w-full h-48 mb-6 flex items-center justify-center">
        <Lottie
          animationData={pkg.lottieAnimation}
          loop={true}
          style={{ height: "100%" }}
        />
      </div>

      <h2
        className="font-display text-3xl font-bold mb-3 text-center tracking-tight
        ${pkg.isHighlighted && !isDark ? 'text-brand-dark' : 'text-brand-dark dark:text-white'}"
      >
        {pkg.title}
      </h2>
      <p
        className="mb-8 text-center min-h-[4.5rem]
        ${pkg.isHighlighted && !isDark ? 'text-brand-dark/80' : 'text-brand-light-blue dark:text-brand-gray'}"
      >
        {pkg.description}
      </p>

      <div
        className={`flex-grow pt-8 ${
          pkg.isHighlighted && !isDark
            ? "border-t border-brand-dark/20"
            : "border-t border-brand-light-blue/20"
        }`}
      >
        <ul className="space-y-4 mb-10">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <FiCheckCircle className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
              <span
                className={`font-medium ${
                  pkg.isHighlighted && !isDark
                    ? "text-brand-dark"
                    : "text-brand-dark dark:text-white"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/contact"
        className={`group relative mt-auto w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-300
                    ${
                      pkg.isHighlighted
                        ? "text-brand-dark bg-brand-accent hover:scale-105"
                        : isDark
                        ? "text-white bg-brand-dark-blue hover:scale-105"
                        : "text-brand-dark bg-gray-100 hover:bg-gray-200 hover:scale-105"
                    }`}
      >
        <motion.span
          className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ x: "-150%" }}
          whileHover={{ x: "150%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <span className="relative">{pkg.ctaText}</span>
        <FiArrowRight className="relative transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

const ServicePackagesPage = () => {
  return (
    <>
      <Seo
        title="Service Packages | Weblynx Infotech"
        description="Explore our tailored service packages designed for startups, growing businesses, and e-commerce platforms. Find the perfect solution for your digital needs."
      />
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        <header className="py-20 sm:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container mx-auto px-6"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-brand-dark dark:text-white tracking-tighter">
              Solutions For Your Goals
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-brand-light-blue dark:text-brand-gray">
              We've bundled our services into clear, value-driven packages to
              help you achieve your specific business objectives.
            </p>
          </motion.div>
        </header>

        <section className="container mx-auto px-6 pb-20 sm:pb-28">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            {packagesData.map((pkg) => (
              <PackageCard key={pkg.title} pkg={pkg} />
            ))}
          </motion.div>
        </section>

        <section className="py-20 sm:py-24 text-center bg-gray-50 dark:bg-black">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="container mx-auto px-6 max-w-4xl"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-4 tracking-tight">
              Don't See a Perfect Fit?
            </h2>
            <p className="text-lg text-brand-light-blue dark:text-brand-gray mb-8 max-w-2xl mx-auto">
              Every project is unique. If our packages don't match your exact
              needs, we'd love to build a custom proposal tailored specifically
              to your vision.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <motion.span
                className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                initial={{ x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span className="relative">Request a Custom Quote</span>
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default ServicePackagesPage;
