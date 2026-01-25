// client/src/components/Portfolio/AnimatedPathSection.jsx
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiTarget, FiPenTool, FiCode, FiSend, FiZap } from "react-icons/fi";

const milestones = [
  {
    id: 1,
    icon: <FiTarget aria-hidden="true" />,
    title: "Concept & Discovery",
    description:
      "We dive deep into your business logic, goals, and target audience to establish a hardened technical foundation.",
    color: "from-blue-500 to-cyan-400",
    seoLabel: "Phase 01: Project Discovery and Strategic Mapping",
  },
  {
    id: 2,
    icon: <FiPenTool aria-hidden="true" />,
    title: "Design & Prototype",
    description:
      "Crafting high-fidelity UI/UX blueprints and interactive prototypes that prioritize user engagement and conversion.",
    color: "from-purple-500 to-pink-400",
    seoLabel: "Phase 02: UI/UX Prototyping and Interface Design",
  },
  {
    id: 3,
    icon: <FiCode aria-hidden="true" />,
    title: "Develop & Iterate",
    description:
      "Bringing blueprints to life with clean MERN stack engineering, rigorous stress testing, and agile iteration.",
    color: "from-brand-accent to-emerald-400",
    seoLabel: "Phase 03: Agile Development and Full-Stack Engineering",
  },
  {
    id: 4,
    icon: <FiSend aria-hidden="true" />,
    title: "Launch & Support",
    description:
      "Deploying your project to secure cloud infrastructure and providing proactive Sentinel support for long-term growth.",
    color: "from-orange-500 to-yellow-400",
    seoLabel: "Phase 04: Cloud Deployment and Managed Maintenance",
  },
];

const AnimatedPathSection = () => {
  return (
    <section
      aria-labelledby="workflow-heading"
      className="relative bg-white dark:bg-brand-dark py-24 md:py-40 overflow-hidden border-t border-gray-100 dark:border-white/5"
    >
      {/* Background Section Title - Hidden from crawlers */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] dark:opacity-[0.05] whitespace-nowrap font-black text-[15rem] tracking-tighter uppercase"
        aria-hidden="true"
      >
        PROCESS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiZap
              className="text-brand-accent animate-pulse"
              aria-hidden="true"
            />
            <span className="text-brand-accent font-mono text-sm tracking-[0.3em] uppercase">
              Operational Roadmap
            </span>
          </div>
          <h2
            id="workflow-heading"
            className="font-display text-5xl md:text-7xl font-bold text-brand-dark dark:text-white tracking-tighter leading-none uppercase"
          >
            Our Digital{" "}
            <span className="text-brand-accent italic font-light">
              Workflow.
            </span>
          </h2>
        </motion.header>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line (Visual Only) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-accent/20 to-transparent -translate-x-1/2"
            aria-hidden="true"
          />

          {/* Semantic List of Workflow Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            role="list"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-24"
          >
            {milestones.map((milestone, index) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MilestoneCard = ({ milestone, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [7, -7]);
  const rotateY = useTransform(mouseX, [-150, 150], [-7, 7]);

  const springConfig = { stiffness: 150, damping: 15 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`,
    );
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.article
      role="listitem"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      variants={{
        hidden: { opacity: 0, x: isEven ? -50 : 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "circOut" },
        },
      }}
      className={`relative group p-10 bg-gray-50/50 dark:bg-brand-dark-blue/10 backdrop-blur-xl rounded-[2.5rem] border border-gray-200/50 dark:border-white/5 shadow-2xl overflow-hidden ${!isEven && "md:mt-24"}`}
    >
      {/* Invisible SEO Layer for Crawlers */}
      <span className="sr-only">{milestone.seoLabel}</span>

      {/* Spotlight Effect - Visual Only */}
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), hsla(169, 100%, 50%, 0.1), transparent 80%)`,
        }}
      />

      <div
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center justify-between mb-8">
          <div
            className={`p-4 rounded-2xl bg-gradient-to-br ${milestone.color} text-white text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-500`}
            aria-hidden="true"
          >
            {milestone.icon}
          </div>
          <span
            className="font-mono text-5xl font-black opacity-5 dark:opacity-10 select-none"
            aria-hidden="true"
          >
            0{milestone.id}
          </span>
        </div>

        <h3 className="font-display text-3xl font-bold text-brand-dark dark:text-white mb-4 tracking-tight uppercase">
          {milestone.title}
        </h3>
        <p className="text-lg text-brand-light-blue dark:text-brand-gray leading-relaxed font-medium">
          {milestone.description}
        </p>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${milestone.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
        aria-hidden="true"
      />
    </motion.article>
  );
};

export default AnimatedPathSection;
