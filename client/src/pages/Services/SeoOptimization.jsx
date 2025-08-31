// client/src/pages/Services/SeoOptimization.jsx
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import seoAnimationData from "../../assets/lottie-animations/seo-animation.json";
import {
  FiSearch,
  FiCode,
  FiFileText,
  FiLink2,
  FiMapPin,
  FiBarChart,
  FiTrendingUp,
  FiCheckCircle,
  FiCheck,
  FiX,
  FiShoppingCart,
  FiArrowLeft,
} from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

// --- Data for the page sections ---
const typesOfSeoData = [
  {
    icon: FiCode,
    title: "Technical SEO",
    description:
      "Optimizing your site's infrastructure to ensure it's fast, secure, and easily crawlable by search engines.",
  },
  {
    icon: FiFileText,
    title: "On-Page & Content SEO",
    description:
      "Crafting high-quality content and optimizing on-page elements to match user search intent.",
  },
  {
    icon: FiLink2,
    title: "Off-Page & Link Building",
    description:
      "Building high-quality backlinks and brand mentions to increase your site's authority and trust.",
  },
  {
    icon: FiMapPin,
    title: "Local SEO",
    description:
      "Dominating local search results to attract nearby customers to your physical or service-area business.",
  },
  {
    icon: FiShoppingCart,
    title: "E-commerce SEO",
    description:
      "Optimizing product pages, categories, and site structure to drive sales and revenue.",
  },
  {
    icon: FiBarChart,
    title: "Analytics & Reporting",
    description:
      "Providing transparent, data-driven reports to track progress and refine strategy.",
  },
];
const techStackData = [
  { name: "Google Analytics", Icon: FaGoogle },
  { name: "Search Console", Icon: FiSearch },
  { name: "Ahrefs", Icon: FiBarChart },
  { name: "SEMrush", Icon: FiTrendingUp },
];
const industriesData = [
  "Local Businesses",
  "E-commerce Stores",
  "SaaS Companies",
  "Professional Services",
  "Blogs & Publishers",
];
const comparisonData = [
  {
    feature: "Expertise & Strategy",
    professional: "Data-driven strategies based on years of experience.",
    diy: "Guesswork and time-consuming trial-and-error.",
  },
  {
    feature: "Tools & Resources",
    professional: "Access to premium analytics and research tools.",
    diy: "Limited to free, less powerful tools.",
  },
  {
    feature: "Time Commitment",
    professional: "Frees you up to focus on running your business.",
    diy: "Requires hundreds of hours of learning and execution.",
  },
  {
    feature: "Results",
    professional: "Faster, more sustainable rankings and traffic growth.",
    diy: "Slow progress and risk of using outdated or harmful tactics.",
  },
];

// --- Framer Motion Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Main Page Component ---
const SeoOptimization = () => {
  return (
    <>
      <Seo
        title="SEO Optimization Services | Weblynx Infotech"
        description="We offer comprehensive SEO services to increase your online visibility, drive organic traffic, and improve your search engine rankings."
      />
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        <Hero />
        <CoreServicesSection />
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
          SEO Optimization
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-8 text-brand-light-blue dark:text-brand-gray max-w-xl mx-auto md:mx-0"
        >
          Boost your online visibility and drive organic traffic with our
          comprehensive Search Engine Optimization services.
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
            <span className="relative">Improve Your Rankings</span>
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
        <Lottie animationData={seoAnimationData} loop={true} />
      </motion.div>
    </motion.div>
  </section>
);

const CoreServicesSection = () => (
  <section className="bg-gray-50 dark:bg-black py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl sm:text-5xl font-bold text-center mb-16 text-brand-dark dark:text-white tracking-tighter"
      >
        Our Core SEO Services
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {typesOfSeoData.map((item) => {
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
            Tools & Technologies
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
            Businesses We Help Thrive
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
        Professional SEO vs. DIY
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
            Our SEO Services
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
                  {row.professional}
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
            DIY Approach
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
                  {row.diy}
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
        Ready to Outrank Your Competition?
      </h2>
      <p className="text-lg text-brand-light-blue dark:text-brand-gray mb-8">
        Let's craft an SEO strategy that puts your business at the top of search
        engine results.
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
        <span className="relative">Get a Free SEO Audit</span>
      </Link>
    </motion.div>
  </section>
);

export default SeoOptimization;
