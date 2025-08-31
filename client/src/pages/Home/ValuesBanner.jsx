// client/src/components/common/ValuesBanner.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiZap,
  FiUsers,
  FiBarChart2,
  FiLayers,
  FiShield,
  FiClock,
} from "react-icons/fi";

const values = [
  { text: "Innovation", Icon: FiZap },
  { text: "Collaboration", Icon: FiUsers },
  { text: "Performance", Icon: FiBarChart2 },
  { text: "Quality", Icon: FiLayers },
  { text: "Security", Icon: FiShield },
  { text: "Reliability", Icon: FiClock },
];

const bannerVariants = {
  animate: {
    x: [0, "-100%"], // Animate from the start to the end of the first set of items
    transition: {
      x: {
        repeat: Infinity, // Loop the animation forever
        repeatType: "loop",
        duration: 30, // Adjust this value to change the speed (higher is slower)
        ease: "linear",
      },
    },
  },
};

const ValuesBanner = () => {
  return (
    <section className="py-6 bg-white dark:bg-brand-dark border-y border-gray-200 dark:border-brand-light-blue/20 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        variants={bannerVariants}
        animate="animate"
      >
        {/* We render the list twice for a seamless loop */}
        {[...values, ...values].map((value, index) => (
          <div key={index} className="flex items-center mx-8 flex-shrink-0">
            <value.Icon className="w-5 h-5 mr-3 text-brand-accent" />
            <span className="text-md font-medium text-brand-light-blue dark:text-brand-gray">
              {value.text}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ValuesBanner;
