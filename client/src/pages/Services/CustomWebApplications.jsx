// client/src/pages/Services/CustomWebApplications.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion, useScroll, useSpring } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import customWebAppsAnimationData from "../../assets/lottie-animations/custom-web-apps-animation.json";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import {
  FiBox,
  FiBriefcase,
  FiCloud,
  FiGrid,
  FiMessageSquare,
  FiTrendingUp,
  FiLayers,
  FiCompass,
  FiLayout,
  FiCode,
  FiFlag,
  FiLifeBuoy,
  FiCheckCircle,
  FiX,
  FiArrowLeft,
} from "react-icons/fi";

// --- Data for the page sections ---
const whatWeBuildData = [
  {
    icon: FiBriefcase,
    title: "Enterprise Solutions",
    description:
      "Custom CRMs, ERPs, and internal tools to streamline your operations.",
  },
  {
    icon: FiBox,
    title: "E-commerce Platforms",
    description:
      "Secure, scalable online stores with advanced features and payment integrations.",
  },
  {
    icon: FiGrid,
    title: "Interactive Web Portals",
    description:
      "Dynamic portals for customers, partners, or employees with personalized experiences.",
  },
  {
    icon: FiCloud,
    title: "SaaS Products",
    description:
      "Multi-tenant Software-as-a-Service applications with robust, scalable architecture.",
  },
  {
    icon: FiMessageSquare,
    title: "Real-time Applications",
    description:
      "Engaging apps with live chat, interactive dashboards, and collaborative tools.",
  },
  {
    icon: FiTrendingUp,
    title: "Progressive Web Apps",
    description:
      "Websites that offer app-like experiences, working offline and installable on home screens.",
  },
];
const techStackData = [
  { name: "React", Icon: FaReact },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "MERN Stack", Icon: FiLayers },
];
const industriesData = [
  "E-commerce & Retail",
  "SaaS & Technology",
  "Non-Profit",
  "Corporate",
  "Hospitality",
  "Startups",
];
const comparisonData = [
  {
    feature: "Flexibility & Features",
    custom: "Built precisely for your unique workflows.",
    offTheShelf: "Limited to existing features; customization is difficult.",
  },
  {
    feature: "Scalability",
    custom: "Designed to grow with your business.",
    offTheShelf: "May struggle with high traffic or data loads.",
  },
  {
    feature: "Integration",
    custom: "Seamlessly connects with your existing tools.",
    offTheShelf: "Limited or costly third-party integrations.",
  },
  {
    feature: "Competitive Advantage",
    custom: "A unique digital asset that sets you apart.",
    offTheShelf: "Uses the same templates as your competitors.",
  },
  {
    feature: "Long-term Cost",
    custom: "Higher initial investment, but no recurring license fees.",
    offTheShelf: "Ongoing subscription fees.",
  },
];
const approachData = [
  {
    icon: FiCompass,
    title: "Discovery & Planning",
    description:
      "We dive deep into your requirements and business goals to create a detailed project roadmap.",
  },
  {
    icon: FiLayout,
    title: "Design & Prototyping",
    description:
      "Our UX/UI experts design intuitive interfaces and create interactive prototypes for your feedback.",
  },
  {
    icon: FiCode,
    title: "Development & Testing",
    description:
      "Using agile methodologies, we build your application with clean code and conduct rigorous testing.",
  },
  {
    icon: FiFlag,
    title: "Deployment & Launch",
    description:
      "We handle the entire deployment process, ensuring a smooth and successful launch.",
  },
  {
    icon: FiLifeBuoy,
    title: "Support & Evolution",
    description:
      "Post-launch, we provide ongoing support and work with you to evolve the product.",
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
const CustomWebApplications = () => {
  return (
    <>
      <Seo
        title="Custom Web Applications Development | Weblynx Infotech"
        description="We craft scalable, secure, and intuitive custom web applications tailored to your business needs, from enterprise solutions to e-commerce platforms."
      />
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        <Hero />
        <WhatWeBuildSection />
        <TechAndIndustriesSection />
        <ComparisonSection />
        <ApproachSection />
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
          Custom Web Applications
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-8 text-brand-light-blue dark:text-brand-gray max-w-xl mx-auto md:mx-0"
        >
          Build your unique digital presence from the ground up. We craft
          scalable, secure, and intuitive web applications tailored precisely to
          your business objectives.
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
        <Lottie animationData={customWebAppsAnimationData} loop={true} />
      </motion.div>
    </motion.div>
  </section>
);

const WhatWeBuildSection = () => (
  <section className="bg-gray-50 dark:bg-black py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl sm:text-5xl font-bold text-center mb-16 text-brand-dark dark:text-white tracking-tighter"
      >
        What We Build
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {whatWeBuildData.map((item) => {
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
                {/* Corrected Render Logic */}
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
            Our Core Technology
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
            Industries We Serve
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
        Custom vs. Off-the-Shelf
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
            Custom Application
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
            Off-the-Shelf Software
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
                  {row.offTheShelf}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// This is a standalone component. You can replace the existing ApproachSection in your file with this.
const ApproachSection = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"],
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-20 sm:py-28 px-6 bg-white dark:bg-brand-dark">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl font-bold text-center mb-20 text-brand-dark dark:text-white tracking-tighter"
        >
          Our Development Blueprint
        </motion.h2>

        <div ref={timelineRef} className="relative">
          {/* The Timeline Line */}
          <div className="absolute left-6 w-1 h-full bg-gray-200 dark:bg-brand-dark-blue rounded-full">
            <motion.div
              className="w-full h-full bg-brand-accent origin-top rounded-full"
              style={{ scaleY: lineProgress }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {approachData.map((step, i) => (
              <TimelineItem key={i} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for each step in the timeline for cleaner code
const TimelineItem = ({ step }) => {
  const { icon: Icon, title, description } = step;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pl-20"
    >
      {/* Node on the timeline */}
      <div className="absolute left-6 top-1 w-12 h-12 -translate-x-1/2 flex items-center justify-center rounded-full bg-white dark:bg-brand-dark border-4 border-gray-200 dark:border-brand-dark-blue">
        <Icon className="text-2xl text-brand-accent" />
      </div>

      {/* Animated SVG Connector */}
      <div className="absolute top-7 left-12 h-1 w-8">
        <svg width="100%" height="100%" viewBox="0 0 32 1">
          <motion.line
            x1="0"
            y1="0.5"
            x2="32"
            y2="0.5"
            stroke="var(--brand-accent)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </svg>
      </div>

      {/* Content Card */}
      <div className="p-6 rounded-2xl bg-gray-50 dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20">
        <h3 className="font-display text-2xl font-bold text-brand-dark dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-base text-brand-light-blue dark:text-brand-gray">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
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
        Ready to Build Your Custom Application?
      </h2>
      <p className="text-lg text-brand-light-blue dark:text-brand-gray mb-8">
        Let's discuss your unique idea and how we can turn it into a powerful
        digital reality.
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

export default CustomWebApplications;
