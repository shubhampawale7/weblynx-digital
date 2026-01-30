// client/src/components/About/Story.jsx
import React from "react";
import {
  FiZap,
  FiTrendingUp,
  FiAward,
  FiActivity,
  FiLayers,
} from "react-icons/fi";
import { motion } from "framer-motion";

const storyPoints = [
  {
    id: "PHASE_01",
    Icon: FiZap,
    title: "The Initial Spark",
    description:
      "Our journey began with a singular obsession: mastering the MERN stack to bridge the gap between technical vision and market execution.",
    tech: "Kernel_Initialization",
    seoContext:
      "Weblynx origin focused on MERN stack mastery and technical architecture.",
  },
  {
    id: "PHASE_02",
    Icon: FiTrendingUp,
    title: "Operational Growth",
    description:
      "We evolved into a dedicated engineering firm, adapting to high-stakes requirements and complex, scalable infrastructure needs.",
    tech: "System_Scaling",
    seoContext:
      "Scaling phase involved complex infrastructure and high-stakes software requirements.",
  },
  {
    id: "PHASE_03",
    Icon: FiAward,
    title: "Global Excellence",
    description:
      "Today, Weblynx Infotech stands as a beacon of technical precision, delivering bespoke software solutions at a global scale.",
    tech: "Peak_Optimization",
    seoContext:
      "Current status: Global technical precision and bespoke software delivery.",
  },
];

const Story = () => {
  return (
    <section
      aria-labelledby="story-heading"
      className="bg-white dark:bg-brand-dark py-24 md:py-40 border-t border-gray-100 dark:border-white/5 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Technical Header */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                className="h-[2px] w-12 bg-brand-accent"
                aria-hidden="true"
              />
              <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                Operational Timeline
              </span>
            </div>

            <h2
              id="story-heading"
              className="font-display text-6xl md:text-8xl font-black text-brand-dark dark:text-white tracking-tighter leading-[0.85] uppercase italic"
            >
              History of <br />{" "}
              <span className="text-brand-accent">Innovation.</span>
            </h2>

            {/* SEO Semantic Context (Invisible, About-page safe) */}
            <p className="sr-only">
              The origin story of Weblynx Infotech, a Pune-based software
              engineering company, tracing its evolution from MERN stack
              specialization to delivering scalable, global digital solutions.
            </p>
          </motion.div>

          <div
            className="hidden lg:flex items-center gap-4 text-[10px] font-mono opacity-20 uppercase tracking-[0.2em]"
            aria-hidden="true"
          >
            <FiLayers className="text-brand-accent" />
            <span>Sequence_Verified // 2026_Edition</span>
          </div>
        </header>

        {/* Timeline Grid */}
        <ol
          role="list"
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[2.5rem] overflow-hidden"
        >
          {storyPoints.map((point, index) => (
            <StoryPhase key={point.id} point={point} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
};

const StoryPhase = ({ point, index }) => {
  return (
    <motion.li
      role="listitem"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white dark:bg-brand-dark p-12 md:p-16 group relative overflow-hidden transition-all duration-500 hover:bg-brand-accent/5"
    >
      <div
        className="absolute top-10 right-10 font-mono text-8xl font-black opacity-[0.02] dark:opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700"
        aria-hidden="true"
      >
        0{index + 1}
      </div>

      <article className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div
              className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 text-brand-dark dark:text-white group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-500 shadow-xl"
              aria-hidden="true"
            >
              <point.Icon size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.3em]">
                {point.tech.replace(/_/g, " ")}
              </span>
              <h3 className="text-2xl font-bold dark:text-white tracking-tighter uppercase">
                {point.id.replace(/_/g, " ")}
              </h3>
            </div>
          </div>

          <h4 className="text-2xl font-bold dark:text-white mb-4 group-hover:text-brand-accent transition-colors">
            {point.title}
          </h4>
          <p className="text-lg text-brand-light-blue dark:text-brand-gray leading-relaxed font-light mb-12">
            {point.description}
          </p>

          <p className="sr-only">{point.seoContext}</p>
        </div>

        <footer
          className="flex items-center gap-4 opacity-20 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          <div
            className={`w-3 h-3 rounded-full border border-current ${
              index === 2 ? "bg-brand-accent border-brand-accent" : ""
            }`}
          />
          <div className="flex-grow h-px bg-current" />
          <FiActivity className="text-xs" />
        </footer>
      </article>

      <div
        className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        aria-hidden="true"
      />
    </motion.li>
  );
};

export default Story;
   