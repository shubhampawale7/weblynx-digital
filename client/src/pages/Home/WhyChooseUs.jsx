// client/src/components/Home/WhyChooseUs.jsx
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  FiZap,
  FiUsers,
  FiBarChart2,
  FiLayers,
  FiShield,
  FiClock,
} from "react-icons/fi";

const features = [
  {
    Icon: FiZap,
    title: "Innovative Solutions",
    description:
      "We bring fresh perspectives and cutting-edge technologies to solve your unique challenges.",
  },
  {
    Icon: FiUsers,
    title: "Client-Centric Approach",
    description:
      "Your vision is our priority. We collaborate closely to ensure your digital product reflects your goals.",
  },
  {
    Icon: FiBarChart2,
    title: "Performance & Scalability",
    description:
      "We build fast, robust, and scalable solutions designed to grow with your business.",
  },
  {
    Icon: FiLayers,
    title: "Pixel-Perfect Design",
    description:
      "We craft stunning, intuitive user interfaces that captivate and engage your audience.",
  },
  {
    Icon: FiShield,
    title: "Security & Reliability",
    description:
      "We adhere to best practices for secure development, ensuring your data and applications are safe.",
  },
  {
    Icon: FiClock,
    title: "Timely Delivery",
    description:
      "We respect deadlines and deliver high-quality projects on time, every time, without compromise.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-black py-20 sm:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
            The Weblynx Advantage
          </h2>
          <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
            We're more than just developers. We're your dedicated partners in
            digital growth, committed to excellence at every step.
          </p>
        </motion.div>

        {/* Responsive Grid of Awesome 3D Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// The new, more awesome FeatureCard component
const FeatureCard = ({ feature }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // For the 3D tilt
  const rotateX = useTransform(mouseY, [-150, 150], [15, -15]);
  const rotateY = useTransform(mouseX, [-150, 150], [-15, 15]);

  // For the content parallax
  const parallaxX = useTransform(mouseX, [-150, 150], [-10, 10]);
  const parallaxY = useTransform(mouseY, [-150, 150], [-10, 10]);

  const springConfig = { stiffness: 400, damping: 25 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const { width, height } = rect;
    const mouseXVal = e.clientX - rect.left - width / 2;
    const mouseYVal = e.clientY - rect.top - height / 2;
    mouseX.set(mouseXVal);
    mouseY.set(mouseYVal);

    // Update CSS variables for the aurora spotlight
    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className="group relative p-8 h-full bg-white dark:bg-brand-dark-blue/30 rounded-2xl border border-gray-200 dark:border-brand-light-blue/20 shadow-lg overflow-hidden"
    >
      {/* Aurora Spotlight Effect */}
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), hsla(169, 100%, 50%, 0.15), transparent 80%)`,
        }}
      />

      <motion.div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
          x: parallaxX,
          y: parallaxY,
        }}
        className="relative text-center"
      >
        <motion.div className="inline-block p-4 bg-gray-100 dark:bg-brand-dark rounded-full mb-4 transition-shadow duration-300 shadow-sm group-hover:shadow-[0_0_20px_hsla(169,100%,50%,0.5)]">
          <feature.Icon className="w-8 h-8 text-brand-accent" />
        </motion.div>
        <h3 className="font-display text-xl font-bold text-brand-dark dark:text-white mb-2">
          {feature.title}
        </h3>
        <p className="text-md text-brand-light-blue dark:text-brand-gray">
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUs;
