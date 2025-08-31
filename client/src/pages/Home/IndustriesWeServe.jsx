// client/src/components/Home/IndustriesWeServe.jsx

import React, { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industriesData[activeIndex];

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
            Versatility in Our DNA
          </h2>
          <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
            Our expertise isn't confined to a single box. We adapt and innovate
            to deliver exceptional results across a diverse range of industries.
          </p>
        </motion.div>

        {/* Main interactive container */}
        <div className="max-w-4xl mx-auto">
          {/* Content Viewport */}
          <div className="relative w-full h-[300px] mb-8 bg-gray-50 dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20 rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full flex flex-col justify-center items-center text-center p-8"
              >
                <activeIndustry.Icon className="w-12 h-12 text-brand-accent mb-4" />
                <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-dark dark:text-white mb-3">
                  {activeIndustry.name}
                </h3>
                <p className="text-base text-brand-light-blue dark:text-brand-gray max-w-lg">
                  {activeIndustry.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Dock */}
          <Dock activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
      </div>
    </section>
  );
};

// --- The Interactive Dock Component ---
const Dock = ({ activeIndex, setActiveIndex }) => {
  const dockRef = useRef(null);
  const mouseX = useMotionValue(Infinity);

  return (
    <nav
      ref={dockRef}
      onMouseMove={(e) => {
        if (dockRef.current) {
          const { left } = dockRef.current.getBoundingClientRect();
          mouseX.set(e.clientX - left);
        }
      }}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex justify-center items-end gap-4 h-20 p-3 bg-gray-100 dark:bg-brand-dark-blue/50 rounded-2xl border border-gray-200 dark:border-brand-light-blue/20"
    >
      {industriesData.map((industry, index) => (
        <DockIcon
          key={industry.name}
          mouseX={mouseX}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        >
          <industry.Icon className="w-7 h-7" />
        </DockIcon>
      ))}
    </nav>
  );
};

// --- The Dock Icon with Magnetic Effect ---
const DockIcon = ({ mouseX, isActive, onClick, children }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(distance, [-150, 0, 150], [1, 1.75, 1]);
  const scaleSpring = useSpring(scale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.button
      ref={ref}
      style={{ scale: scaleSpring }}
      onClick={onClick}
      className={`relative p-4 rounded-full transition-colors duration-200
                  ${
                    isActive
                      ? "text-brand-accent bg-gray-200 dark:bg-brand-dark"
                      : "text-brand-light-blue dark:text-brand-gray hover:text-brand-accent"
                  }`}
      aria-label={`Select ${children.props.name}`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="active-industry-indicator"
          className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-accent rounded-full"
        />
      )}
    </motion.button>
  );
};

export default IndustriesWeServe;
