// client/src/components/About/Story.jsx
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import { FiZap, FiTrendingUp, FiAward } from "react-icons/fi";

// Data is now enriched with icons for the cards
const storyPoints = [
  {
    Icon: FiZap,
    title: "The Spark of an Idea",
    description:
      "Our journey began with a passion for the MERN stack and a vision to bridge the gap between complex digital needs and seamless user experiences.",
  },
  {
    Icon: FiTrendingUp,
    title: "Growth & Adaptation",
    description:
      "Driven by the belief that every business deserves a powerful online presence, we evolved into a dedicated agency, constantly adapting in the ever-changing tech landscape.",
  },
  {
    Icon: FiAward,
    title: "Our Commitment Today",
    description:
      "Weblynx Infotech is a testament to innovation and a client-first approach. We craft digital solutions that perform exceptionally, helping our clients achieve their goals.",
  },
];

const Story = () => {
  return (
    <section className="bg-white dark:bg-brand-dark py-20 sm:py-28">
      <Seo
        title="Our Story - The Journey of Weblynx Infotech"
        description="Discover the inspiring story behind Weblynx Infotech, our passion for digital innovation, and our journey to becoming a leading web development agency focused on client success."
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
            Our Journey of Innovation
          </h1>
          <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
            From a simple idea to a powerhouse of digital engineering, discover
            the story behind our passion.
          </p>
        </motion.div>

        {/* The Bento Box Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {storyPoints.map((point) => (
            <StoryCard key={point.title} point={point} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Reusing the successful Aurora Card component logic
const StoryCard = ({ point }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
  const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);

  const springConfig = { stiffness: 300, damping: 20 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
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
        transformStyle: "preserve-d",
      }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className="group relative h-full p-8 bg-white dark:bg-brand-dark-blue/30 rounded-2xl border border-gray-200 dark:border-brand-light-blue/20 shadow-lg overflow-hidden"
    >
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), hsla(169, 100%, 50%, 0.15), transparent 80%)`,
        }}
      />
      <div
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
      >
        <point.Icon className="w-10 h-10 text-brand-accent mb-4" />
        <h3 className="font-display text-2xl font-bold text-brand-dark dark:text-white mb-3">
          {point.title}
        </h3>
        <p className="text-base text-brand-light-blue dark:text-brand-gray">
          {point.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Story;
