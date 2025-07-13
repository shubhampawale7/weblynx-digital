// client/src/components/Home/IndustriesWeServe.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  FiShoppingCart,
  FiHeart,
  FiBriefcase,
  FiCloud,
  FiHome,
} from "react-icons/fi";

const industries = [
  { name: "E-commerce", Icon: FiShoppingCart },
  { name: "Non-Profit", Icon: FiHeart },
  { name: "Corporate", Icon: FiBriefcase },
  { name: "SaaS", Icon: FiCloud },
  { name: "Hospitality", Icon: FiHome },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const IndustriesWeServe = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-20 sm:py-28 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 dark:from-cyan-400 dark:to-lime-400">
            Expertise Across Industries
          </h2>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            We apply our digital expertise to solve unique challenges for a
            diverse range of clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-8 text-center rounded-2xl transition-colors duration-300
                        ${isDark ? "bg-gray-900" : "bg-gray-100"}
                    `}
            >
              <industry.Icon className="w-12 h-12 mx-auto mb-4 text-purple-500 dark:text-purple-400" />
              <h3 className="text-lg font-bold">{industry.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
