// client/src/components/About/MissionVision.jsx
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiTarget, FiEye } from "react-icons/fi";
import Seo from "../../components/common/Seo.jsx";

const principles = [
  {
    Icon: FiTarget,
    title: "Our Mission",
    description:
      "To empower businesses by delivering cutting-edge, tailor-made digital solutions that drive growth, enhance user engagement, and streamline operations.",
  },
  {
    Icon: FiEye,
    title: "Our Vision",
    description:
      "To be a global leader in digital innovation, recognized for our creative solutions, technical excellence, and commitment to pushing the boundaries of what's possible.",
  },
];

const MissionVision = () => {
  return (
    <section
      id="mission-vision"
      className="relative bg-white dark:bg-black py-24 sm:py-32 overflow-hidden"
    >
      <Seo
        title="Our Mission & Vision | Weblynx Infotech"
        description="Discover the core mission and ambitious vision that drive Weblynx Infotech to deliver innovative and impactful digital solutions worldwide."
      />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -z-0" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-light-blue/10 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter">
            Our Guiding Principles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {principles.map((p) => (
            <PrincipleCard key={p.title} principle={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PrincipleCard = ({ principle }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

  const springConfig = { stiffness: 300, damping: 20 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const { width, height } = rect;
    mouseX.set(e.clientX - rect.left - width / 2);
    mouseY.set(e.clientY - rect.top - height / 2);
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
      className="group relative"
    >
      {/* The main card content */}
      <div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="relative p-8 bg-white/80 dark:bg-brand-dark-blue/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-brand-light-blue/20 shadow-2xl"
      >
        <div
          className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), hsla(169, 100%, 50%, 0.15), transparent 80%)`,
          }}
        />
        <div className="flex items-center gap-4 mb-4">
          <principle.Icon className="w-8 h-8 text-brand-accent" />
          <h3 className="font-display text-2xl font-bold text-brand-dark dark:text-white">
            {principle.title}
          </h3>
        </div>
        <p className="text-lg text-brand-light-blue dark:text-brand-gray leading-relaxed">
          {principle.description}
        </p>
      </div>

      {/* The reflection */}
      <div
        style={{ transform: "translateZ(0px)" }}
        className="absolute top-0 left-0 w-full h-full bg-white/50 dark:bg-brand-dark-blue/20 rounded-2xl [transform:scaleY(-1)] [mask-image:linear-gradient(to_top,transparent_20%,white_100%)]"
      />
    </motion.div>
  );
};

export default MissionVision;
