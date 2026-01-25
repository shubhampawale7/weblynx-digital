// client/src/pages/Portfolio/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import {
  FiArrowRight,
  FiArrowDown,
  FiExternalLink,
  FiLayers,
  FiTerminal,
  FiActivity,
  FiMaximize2,
} from "react-icons/fi";

const projectsData = [
  {
    id: "PRJ-001",
    title: "UNITED_ENGINEERS",
    image: "/projects/united_engineers.png",
    description:
      "Industrial MERN architecture engineered for precision manufacturing data and global corporate identity.",
    tags: ["MERN", "NODE_JS", "INDUSTRIAL"],
    demoUrl: "https://united-engineers.in",
    category: "INDUSTRIAL_CORE",
    size: "large",
  },
  {
    id: "PRJ-002",
    title: "NINADS_POTTERY",
    image: "/projects/project1.png",
    description:
      "Bespoke e-commerce node with secure Stripe-layer integration and artisan-first UI.",
    tags: ["REACT", "STRIPE", "MONGODB"],
    demoUrl: "https://ninad-s-pottery.vercel.app/",
    category: "COMMERCE_NODE",
    size: "small",
  },
  {
    id: "PRJ-003",
    title: "FLOWBIT_SAAS",
    image: "/projects/flowbit_cover.png",
    description:
      "Subscription management system with real-time financial telemetry and analytics.",
    tags: ["SaaS", "ANALYTICS", "CLOUD"],
    demoUrl: "https://flow-bit-fcnw.vercel.app/",
    category: "PLATFORM_SYSTEM",
    size: "small",
  },
  {
    id: "PRJ-004",
    title: "PRANI_SEVA",
    image: "/projects/project2.png",
    description:
      "Digital outreach hub optimized for impact-scaling and donation-layer management.",
    tags: ["REACT", "EXPRESS", "IMPACT"],
    demoUrl: "https://prani-seva-ashram-2-0.onrender.com/",
    category: "SOCIAL_LAYER",
    size: "medium",
  },
  {
    id: "PRJ-005",
    title: "BRB_ART_FUSION",
    image: "/projects/project6.png",
    description:
      "Advanced commerce engine featuring high-fidelity order tracking and administrative logic.",
    tags: ["FULLSTACK", "ADMIN_UI", "LOGISTICS"],
    demoUrl: "https://brb-art-fusion-mern.vercel.app/",
    category: "COMMERCE_NODE",
    size: "medium",
  },
  {
    id: "PRJ-006",
    title: "TRISHHA_MINES",
    image: "/projects/project3.png",
    description:
      "Global mining corporate identity system focused on resource-sector digital leadership.",
    tags: ["CORPORATE", "UX_LOGIC", "REACT"],
    demoUrl: "https://www.trishhaminesandminerals.com/",
    category: "CORPORATE_SYSTEM",
    size: "small",
  },
];

const Portfolio = () => {
  return (
    <>
      <Seo title="Labs Archive | Weblynx Digital Engineering" />

      <main className="bg-brand-dark min-h-screen pt-32 selection:bg-brand-accent selection:text-brand-dark">
        {/* --- Header: Tactical Briefing --- */}
        <section className="container mx-auto px-6 mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/5 pb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="h-[2px] w-12 bg-brand-accent"></span>
                <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.4em]">
                  Project_Dossier_v4.0
                </span>
              </div>
              <h1 className="text-6xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase text-white">
                The{" "}
                <span className="text-brand-accent italic font-light text-outline">
                  Arsenal.
                </span>
              </h1>
            </motion.div>

            <div className="flex flex-col items-end opacity-20 font-mono text-[10px] uppercase tracking-widest text-white">
              <div className="flex items-center gap-2">
                <FiTerminal /> repo_status: stable
              </div>
              <div className="flex items-center gap-2">
                <FiActivity /> data_integrity: 100%
              </div>
            </div>
          </div>
        </section>

        {/* --- The Arsenal Grid --- */}
        <section className="container mx-auto px-6 pb-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
            {projectsData.map((project, index) => (
              <ProjectModule key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* --- Deployment CTA --- */}
        <section className="py-40 bg-brand-dark-blue/10 border-t border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none uppercase">
            BUILD
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-12">
              Ready for <br />{" "}
              <span className="text-brand-accent italic">Deployment?</span>
            </h2>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-6 px-12 py-6 bg-brand-accent text-brand-dark font-black text-xl rounded-full transition-all hover:scale-110 hover:shadow-[0_0_50px_rgba(0,245,212,0.4)]"
            >
              INITIALIZE PROJECT
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1.5px currentColor;
          color: transparent;
        }
      `}</style>
    </>
  );
};

const ProjectModule = ({ project, index }) => {
  const gridClasses = {
    large: "md:col-span-12 lg:col-span-8",
    medium: "md:col-span-6",
    small: "md:col-span-12 lg:col-span-4",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`${gridClasses[project.size] || gridClasses.small} group relative bg-brand-dark p-10 border-white/5 overflow-hidden transition-all duration-700 hover:bg-brand-accent/[0.02]`}
    >
      {/* Background ID Watermark */}
      <div className="absolute top-10 right-10 font-mono text-8xl font-black opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
        {project.id.split("-")[1]}
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Project Visual Module */}
        <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/5 mb-10 group/img">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-1000 scale-105 group-hover/img:scale-100"
          />
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute top-6 right-6 p-4 bg-brand-accent text-brand-dark rounded-xl opacity-0 translate-y-4 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-500 shadow-2xl"
          >
            <FiMaximize2 size={24} />
          </a>
        </div>

        {/* Technical Briefing */}
        <div className="flex flex-col flex-grow">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] text-brand-accent border border-brand-accent/30 px-2 py-0.5 rounded tracking-widest uppercase">
              {project.category}
            </span>
            <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest italic">
              {project.id}
            </span>
          </div>

          <h3 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter group-hover:text-brand-accent transition-colors">
            {project.title.replace("_", " ")}
          </h3>

          <p className="text-brand-gray text-lg font-light leading-relaxed mb-10 flex-grow opacity-60 group-hover:opacity-100 transition-opacity">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-lg text-[9px] font-bold border border-white/10 text-white/40 uppercase tracking-[0.2em] group-hover:border-brand-accent/20 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
