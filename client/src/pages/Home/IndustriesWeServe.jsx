// client/src/components/Home/IndustriesWeServe.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiHeart,
  FiBriefcase,
  FiCloud,
  FiHome,
  FiTrendingUp,
} from "react-icons/fi";

const industriesData = [
  {
    name: "E-Commerce",
    Icon: FiShoppingCart,
    description:
      "Building high-conversion online stores with seamless user experiences and secure payment gateways.",
  },
  {
    name: "SaaS & Tech",
    Icon: FiCloud,
    description:
      "Engineering scalable and secure SaaS platforms with robust architecture and user-centric design.",
  },
  {
    name: "Corporate",
    Icon: FiBriefcase,
    description:
      "Crafting professional, responsive websites that serve as a powerful digital headquarters for your brand.",
  },
  {
    name: "Non-Profit",
    Icon: FiHeart,
    description:
      "Empowering organizations with digital tools to amplify their message and engage communities.",
  },
  {
    name: "FinTech",
    Icon: FiTrendingUp,
    description:
      "Developing cutting-edge financial applications with a focus on data integrity and security.",
  },
  {
    name: "Real Estate",
    Icon: FiHome,
    description:
      "Creating engaging property platforms and management tools for the modern real estate market.",
  },
];

const IndustriesWeServe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
            Versatility in Our DNA.
          </h2>
          <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
            Our expertise isn't confined to a single box. We adapt and innovate
            to deliver exceptional results across a diverse range of industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industriesData.map((industry) => (
            <IndustryCard key={industry.name} {...industry} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- The Polished Card Component with Subtle Hover Effect ---
const IndustryCard = ({ name, Icon, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-full p-8 bg-gray-50 dark:bg-brand-dark-blue/50 border border-gray-200 dark:border-brand-light-blue/20 rounded-2xl transition-all duration-300 hover:border-brand-accent/50 hover:shadow-2xl hover:shadow-brand-accent/10"
    >
      <div className="relative z-10">
        <Icon className="w-10 h-10 text-brand-accent mb-5" />
        <h3 className="font-display text-xl font-bold text-brand-dark dark:text-white mb-3">
          {name}
        </h3>
        <p className="text-base text-brand-light-blue dark:text-brand-gray">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default IndustriesWeServe;
