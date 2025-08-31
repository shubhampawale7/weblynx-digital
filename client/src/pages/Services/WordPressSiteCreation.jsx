// client/src/pages/Services/WordPressSiteCreation.jsx
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import wordpressAnimationData from "../../assets/lottie-animations/wordpress-animation.json";
import {
  FiPenTool,
  FiCode,
  FiShoppingCart,
  FiShuffle,
  FiZap,
  FiLifeBuoy,
  FiEdit,
  FiCheckCircle,
  FiCheck,
  FiX,
  FiArrowLeft,
} from "react-icons/fi";
import { FaWordpress, FaElementor, FaWpforms } from "react-icons/fa";
import { SiWoocommerce, SiYoast } from "react-icons/si";

// --- Data for the page sections ---
const typesOfServicesData = [
  {
    icon: FiPenTool,
    title: "Custom Theme Development",
    description:
      "Unique, high-performance themes built from scratch to perfectly match your brand identity.",
  },
  {
    icon: FiCode,
    title: "Plugin Customization",
    description:
      "Modifying or building custom plugins to extend your site's functionality for specific needs.",
  },
  {
    icon: FiShoppingCart,
    title: "WooCommerce E-commerce",
    description:
      "Launching powerful online stores with secure payments and seamless product management.",
  },
  {
    icon: FiShuffle,
    title: "Site Migration & Redesign",
    description:
      "Smoothly transitioning your existing website to WordPress or giving it a modern facelift.",
  },
  {
    icon: FiZap,
    title: "Performance Optimization",
    description:
      "Fine-tuning your site for lightning-fast load times and a superior user experience.",
  },
  {
    icon: FiLifeBuoy,
    title: "Maintenance & Support",
    description:
      "Providing ongoing support and training to keep your WordPress website secure and updated.",
  },
];
const techStackData = [
  { name: "WordPress Core", Icon: FaWordpress },
  { name: "WooCommerce", Icon: SiWoocommerce },
  { name: "Elementor", Icon: FaElementor },
  { name: "Advanced Custom Fields", Icon: FiEdit },
  { name: "Yoast SEO", Icon: SiYoast },
  { name: "Contact Form 7", Icon: FaWpforms },
];
const industriesData = [
  "Blogs & Publishers",
  "Small Businesses",
  "E-commerce Stores",
  "Corporate Websites",
  "Portfolios",
  "Non-Profits",
];
const comparisonData = [
  {
    feature: "Uniqueness & Branding",
    custom: "A bespoke design that perfectly matches your brand.",
    template: "Risks looking generic or similar to other sites.",
  },
  {
    feature: "Performance",
    custom: "Optimized for speed with clean, minimal code.",
    template:
      "Can be bloated with unused features, leading to slower load times.",
  },
  {
    feature: "Flexibility",
    custom: "Infinitely flexible to accommodate any feature requirement.",
    template:
      "Limited to the features and layout options offered by the theme.",
  },
  {
    feature: "Security & Updates",
    custom: "Leaner code means a smaller attack surface and easier updates.",
    template:
      "Can have security vulnerabilities if not from a reputable author.",
  },
];

// --- Framer Motion Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Main Page Component ---
const WordPressSiteCreation = () => {
  return (
    <>
      <Seo
        title="WordPress Development Services | Weblynx Infotech"
        description="We specialize in creating custom, high-performance, and secure WordPress websites, from custom themes to e-commerce solutions."
      />
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        <Hero />
        <ServicesOfferSection />
        <TechAndIndustriesSection />
        <ComparisonSection />
        <FinalCta />
      </main>
    </>
  );
};

// --- Page Sections (Broken into Components) ---

const Hero = () => (
  <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
    <div className="absolute inset-0 -z-10 h-full w-full dark:bg-brand-dark bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#e0e1dd,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#00f5d41a,transparent)]" />
    </div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center"
    >
      <div className="text-center md:text-left">
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl lg:text-6xl font-bold mb-6 text-brand-dark dark:text-white tracking-tighter"
        >
          WordPress Development
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-8 text-brand-light-blue dark:text-brand-gray max-w-xl mx-auto md:mx-0"
        >
          Unlock the power of WordPress with custom, high-performing websites
          tailored to your unique business needs.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <motion.span
              className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
              initial={{ x: "-150%" }}
              whileHover={{ x: "150%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <span className="relative">Start Your Project</span>
          </Link>
          <Link
            to="/services"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-brand-light-blue dark:text-brand-gray hover:bg-gray-100 dark:hover:bg-brand-dark-blue/50 rounded-full transition-colors duration-300"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to All Services</span>
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={itemVariants}
        className="w-full max-w-sm mx-auto md:max-w-none"
      >
        <Lottie animationData={wordpressAnimationData} loop={true} />
      </motion.div>
    </motion.div>
  </section>
);

const ServicesOfferSection = () => (
  <section className="bg-gray-50 dark:bg-black py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl sm:text-5xl font-bold text-center mb-16 text-brand-dark dark:text-white tracking-tighter"
      >
        Our WordPress Services
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {typesOfServicesData.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              variants={itemVariants}
              key={item.title}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 rounded-2xl flex flex-col items-start text-left bg-white dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20 shadow-lg cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-brand-accent/10"
            >
              <div className="p-3 rounded-lg bg-brand-accent/20 mb-5 text-brand-accent">
                <Icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-dark dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-brand-light-blue dark:text-brand-gray text-base">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

const TechAndIndustriesSection = () => (
  <section className="py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl font-bold mb-8 text-brand-dark dark:text-white tracking-tighter"
          >
            Tools of Our Craft
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {techStackData.map((tech) => (
              <motion.div
                variants={itemVariants}
                key={tech.name}
                className="flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-brand-dark-blue/50 rounded-lg border border-gray-200 dark:border-brand-light-blue/20"
              >
                <tech.Icon className="w-6 h-6 text-brand-accent" />
                <span className="font-semibold text-brand-dark dark:text-white">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl font-bold mb-8 text-brand-dark dark:text-white tracking-tighter"
          >
            Perfect For Any Industry
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {industriesData.map((industry) => (
              <motion.span
                variants={itemVariants}
                key={industry}
                className="px-4 py-2 rounded-full font-medium bg-gray-100 dark:bg-brand-dark-blue/50 text-brand-light-blue dark:text-brand-gray"
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="bg-gray-50 dark:bg-black py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl sm:text-5xl font-bold text-center mb-16 text-brand-dark dark:text-white tracking-tighter"
      >
        Custom Theme vs. Pre-made
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white dark:bg-brand-dark-blue/30 border-2 border-brand-accent shadow-2xl shadow-brand-accent/10"
        >
          <h3 className="font-display text-2xl font-bold mb-6 text-brand-dark dark:text-white">
            Our Custom Themes
          </h3>
          <div className="space-y-4">
            {comparisonData.map((row) => (
              <div
                key={row.feature}
                className="p-4 bg-gray-100 dark:bg-brand-dark rounded-lg"
              >
                <p className="font-semibold text-brand-dark dark:text-white">
                  {row.feature}
                </p>
                <p className="flex items-start gap-2 mt-1 text-brand-light-blue dark:text-brand-gray">
                  <FiCheckCircle className="w-5 h-5 mt-1 text-brand-accent flex-shrink-0" />{" "}
                  {row.custom}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20"
        >
          <h3 className="font-display text-2xl font-bold mb-6 text-brand-dark dark:text-white">
            Pre-made Templates
          </h3>
          <div className="space-y-4">
            {comparisonData.map((row) => (
              <div
                key={row.feature}
                className="p-4 bg-gray-100 dark:bg-brand-dark rounded-lg"
              >
                <p className="font-semibold text-brand-dark dark:text-white">
                  {row.feature}
                </p>
                <p className="flex items-start gap-2 mt-1 text-brand-light-blue dark:text-brand-gray">
                  <FiX className="w-5 h-5 mt-1 text-red-500 flex-shrink-0" />{" "}
                  {row.template}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FinalCta = () => (
  <section className="py-20 sm:py-28 px-6 bg-gray-50 dark:bg-black">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="container mx-auto max-w-3xl text-center"
    >
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter mb-6">
        Ready to Build with WordPress?
      </h2>
      <p className="text-lg text-brand-light-blue dark:text-brand-gray mb-8">
        Let's discuss how we can create a powerful and beautiful WordPress
        website for your business.
      </p>
      <Link
        to="/contact"
        className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 text-xl font-bold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
      >
        <motion.span
          className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ x: "-150%" }}
          whileHover={{ x: "150%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <span className="relative">Get a Free Consultation</span>
      </Link>
    </motion.div>
  </section>
);

export default WordPressSiteCreation;
