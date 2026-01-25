// client/src/pages/Home/Home.jsx
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "./HeroSection.jsx";
import ServicesPreview from "./ServicesPreview.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import Testimonials from "./Testimonials.jsx";
import Seo from "../../components/common/Seo.jsx";
import ImpactNumbers from "./ImpactNumbers.jsx";
import FeaturedProjects from "./FeaturedProjects.jsx";
import IndustriesWeServe from "./IndustriesWeServe.jsx";
import ProjectPlannerCta from "./ProjectPlannerCta.jsx";
import Faq from "./Faq.jsx";
import TechStackTicker from "./TechStackTicker.jsx";
import ValuesBanner from "./ValuesBanner.jsx";
// import ScrollingBanner from "../../components/Home/ScrollingBanner.jsx";

const Home = () => {
  // Global Scroll Progress for the surgical top line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Seo
        title="Weblynx Infotech | Elite Digital Engineering"
        description="Architecting high-performance MERN stack solutions and digital ecosystems. We build the infrastructure of tomorrow."
        keywords="digital services, web development, MERN stack, Weblynx Infotech, Pune, India"
      />

      {/* Global Scroll Indicator (Surgical Top Line) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[9999] origin-left shadow-[0_0_15px_rgba(0,245,212,0.5)]"
        style={{ scaleX }}
      />

      <main className="bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark">
        {/* --- Hero Layer --- */}
        <HeroSection />

        {/* --- Trust & Momentum Layer --- */}
        <section className="relative z-20">
          <ValuesBanner />
          <div className="bg-gray-50 dark:bg-black/20 border-b border-gray-100 dark:border-white/5">
            <ImpactNumbers />
          </div>
        </section>

        {/* --- Tech Momentum --- */}
        <section className="py-10 bg-white dark:bg-brand-dark">
          <TechStackTicker />
        </section>

        {/* --- The Arsenal (Services) --- */}
        <section className="relative py-24 bg-white dark:bg-brand-dark">
          <div className="container mx-auto px-6 mb-20 flex items-end justify-between">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter dark:text-white leading-[0.8]">
              The <br />{" "}
              <span className="text-brand-accent italic">Arsenal.</span>
            </h2>
            <span className="text-[10px] font-mono opacity-20 uppercase hidden md:block">
              System_Capabilities // V4.0
            </span>
          </div>
          <ServicesPreview />
        </section>

        {/* --- High-Speed Ticker --- */}
        {/* <ScrollingBanner /> */}

        {/* --- Selected Case Studies --- */}
        <section className="py-24 bg-gray-50 dark:bg-black/40">
          <FeaturedProjects />
        </section>

        {/* --- The Differential (Why Us) --- */}
        <section className="relative border-y border-gray-100 dark:border-white/5 bg-white dark:bg-brand-dark">
          <WhyChooseUs />
        </section>

        {/* --- Industries --- */}
        <section className="py-24">
          <IndustriesWeServe />
        </section>

        {/* --- Conversion Engine --- */}
        <section className="relative overflow-hidden bg-brand-dark">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
          <ProjectPlannerCta />
        </section>

        {/* --- Social Proof --- */}
        <section className="py-24 bg-white dark:bg-brand-dark border-t border-gray-100 dark:border-white/5">
          <Testimonials />
        </section>

        {/* --- Knowledge Base --- */}
        <section className="py-32 bg-gray-50 dark:bg-black/20">
          <Faq />
        </section>

        {/* --- Terminal Footer Link --- */}
        <section className="py-24 bg-brand-dark text-center border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="font-mono text-[10px] opacity-20 uppercase tracking-[0.5em] mb-8">
              End of Transmission // Pune_HQ
            </div>
            <h3 className="text-white font-bold text-2xl tracking-tighter uppercase">
              Redefining the{" "}
              <span className="text-brand-accent italic">Standard</span> of
              Digital Engineering.
            </h3>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
