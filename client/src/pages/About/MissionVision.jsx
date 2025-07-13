// client/src/components/About/MissionVision.jsx
import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion } from "framer-motion";
import { FiTarget, FiEye } from "react-icons/fi";
import Seo from "../../components/common/Seo.jsx";

// --- Data for the cards ---
const principles = [
  {
    type: "mission",
    Icon: FiTarget,
    title: "Our Mission",
    description:
      "To empower businesses by delivering cutting-edge, tailor-made digital solutions that drive growth, enhance user engagement, and streamline operations, fostering long-term partnerships built on trust and innovation.",
    color: "text-blue-400",
    borderColor: "hover:border-blue-500/50",
  },
  {
    type: "vision",
    Icon: FiEye,
    title: "Our Vision",
    description:
      "To be a global leader in digital innovation, recognized for our creative solutions, technical excellence, and commitment to pushing the boundaries of what's possible in the web and application development space.",
    color: "text-green-400",
    borderColor: "hover:border-green-500/50",
  },
];

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const MissionVision = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hovered, setHovered] = useState(null);

  const cardVariants = {
    active: { scale: 1.03, filter: "blur(0px)", opacity: 1 },
    blurred: { scale: 0.97, filter: "blur(4px)", opacity: 0.7 },
    initial: { scale: 1, filter: "blur(0px)", opacity: 1 },
  };

  return (
    <section
      id="mission-vision"
      className={`relative py-24 sm:py-32 overflow-hidden ${
        isDark ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      <Seo
        title="Our Mission & Vision | Weblynx Infotech"
        description="Discover the core mission and ambitious vision that drive Weblynx Infotech to deliver innovative and impactful digital solutions worldwide."
        keywords="Weblynx Infotech mission, Weblynx Infotech vision, company values, digital innovation, future of web development, digital solutions goals"
        ogTitle="Weblynx Infotech: Mission-Driven, Vision-Led Digital Agency"
        ogDescription="Explore the guiding principles and future aspirations of Weblynx Infotech in crafting digital excellence."
        ogUrl="https://www.weblynxinfotech.com/about#mission-vision"
        canonical="https://www.weblynxinfotech.com/about#mission-vision"
      />
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-500/10 dark:bg-purple-900/30 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 dark:from-cyan-400 dark:to-lime-400">
            Our Guiding Principles
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          onMouseLeave={() => setHovered(null)}
        >
          {principles.map((p) => (
            <motion.div
              key={p.type}
              variants={itemVariants}
              animate={
                hovered
                  ? hovered === p.type
                    ? "active"
                    : "blurred"
                  : "initial"
              }
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onMouseEnter={() => setHovered(p.type)}
              className={`p-8 md:p-10 rounded-2xl border transition-all duration-300
                            ${
                              isDark
                                ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                                : "bg-white/50 border-gray-200/80 hover:border-gray-300"
                            } backdrop-blur-lg shadow-lg`}
            >
              <div className="flex items-center gap-4 mb-4">
                <p.Icon className={`w-8 h-8 ${p.color}`} />
                <h3 className={`text-3xl font-semibold ${p.color}`}>
                  {p.title}
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-serif">
                {p.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
