// client/src/pages/About/About.jsx
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Story from "./Story.jsx";
import MissionVision from "./MissionVision.jsx";
import TechStack from "./TechStack.jsx";
import FounderNote from "./FounderNote.jsx";
import Seo from "../../components/common/Seo.jsx";
import AngledPraiseBanner from "./AngledPraiseBanner.jsx";
import { FiActivity, FiCpu, FiShield } from "react-icons/fi";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Seo
        title="Our Origin | Weblynx Infotech Engineering Leadership"
        description="Discover the technical DNA of Weblynx Infotech. Pune's leading software engineering firm specializing in high-stakes MERN stack development and digital digital architecture."
        keywords="Weblynx Infotech story, MERN stack expertise Pune, Shubham Pawale, software engineering leadership, Pune tech agency"
        ogTitle="About Weblynx Infotech - Decoding Our Engineering DNA"
        ogUrl="https://www.weblynxinfotech.com/about"
        canonical="https://www.weblynxinfotech.com/about"
      />

      {/* Global Scroll Indicator */}
      <motion.div
        role="progressbar"
        aria-label="Chapter Reading Progress"
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[9999] origin-left shadow-[0_0_15px_rgba(0,245,212,0.5)]"
        style={{ scaleX }}
      />

      <main
        id="about-dossier"
        className="bg-white dark:bg-brand-dark overflow-hidden selection:bg-brand-accent selection:text-brand-dark"
      >
        {/* --- HERO SECTION: Dossier Header --- */}
        <section
          aria-label="about-hero-title"
          className="pt-32 pb-20 px-6 border-b border-gray-100 dark:border-white/5 relative"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <header className="flex items-center gap-3 mb-6">
                  <span
                    className="h-[2px] w-12 bg-brand-accent"
                    aria-hidden="true"
                  ></span>
                  <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                    Agency Dossier
                  </span>
                </header>
                <h1
                  id="about-hero-title"
                  className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase dark:text-white"
                >
                  The <br />{" "}
                  <span className="text-brand-accent italic font-light">
                    Origin.
                  </span>
                </h1>
              </motion.div>

              <div
                className="flex flex-col items-end opacity-20 hidden md:flex"
                aria-hidden="true"
              >
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                  <FiCpu className="text-brand-accent" /> processor_v4.0_active
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                  <FiShield className="text-brand-accent" /> security_clearance:
                  elite
                </div>
              </div>
            </div>
          </div>

          {/* Background Technical Watermark */}
          <div
            className="absolute top-0 right-0 p-10 opacity-[0.02] dark:opacity-[0.05] pointer-events-none select-none"
            aria-hidden="true"
          >
            <span className="font-black text-[20rem] leading-none uppercase">
              WEBLYNX
            </span>
          </div>
        </section>

        {/* --- Content Components: Dossier Chapters --- */}

        {/* Story Section: The Narrative */}
        <article
          aria-label="Our Narrative and History"
          className="relative z-10 bg-white dark:bg-brand-dark"
        >
          <Story />
        </article>

        {/* Global Praise: Social Proof Ticker */}
        <section aria-label="Global Client Praise" className="relative z-20">
          <AngledPraiseBanner />
        </section>

        {/* Mission/Vision: The Objective */}
        <section
          aria-label="Our Mission and Strategic Vision"
          className="bg-gray-50 dark:bg-black/20 border-y border-gray-100 dark:border-white/5 py-10"
        >
          <MissionVision />
        </section>

        {/* Tech Stack: The Hardware */}
        <section aria-label="stack-heading" className="py-20">
          <div className="container mx-auto px-6 mb-12 flex justify-between items-center opacity-30">
            <span
              id="stack-heading"
              className="text-[10px] font-mono uppercase tracking-[0.5em]"
            >
              Primary Engine Components // MERN Stack
            </span>
            <FiActivity
              className="text-brand-accent animate-pulse"
              aria-hidden="true"
            />
          </div>
          <TechStack />
        </section>

        {/* Founder's Note: Executive Summary */}
        <section
          aria-label="Founder Note from Shubham Pawale"
          className="relative overflow-hidden bg-brand-dark border-t border-white/5"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none"
            aria-hidden="true"
          />
          <FounderNote />
        </section>

        {/* Final Dossier Footer Link */}
        <footer className="py-20 bg-brand-dark text-center border-t border-white/5">
          <div className="container mx-auto px-6">
            <div
              className="font-mono text-[10px] opacity-20 uppercase tracking-[0.5em] mb-8"
              aria-hidden="true"
            >
              Transmission Complete // Auth: SP-01
            </div>
            <p className="text-white font-bold text-2xl tracking-tighter uppercase">
              Engineering{" "}
              <span className="text-brand-accent italic">Bespoke</span>{" "}
              Solutions Since Inception.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default About;
