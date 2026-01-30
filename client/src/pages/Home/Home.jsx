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

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* SEO META — Optimized for Google without affecting UI */}
      <Seo
        title="Web Development Company in Pune | Weblynx Infotech"
        description="Weblynx Infotech is a Pune-based web development company specializing in MERN stack development, custom web applications, full-stack solutions, and SEO-ready websites for growing businesses."
        keywords="Web Development Pune, Website Development Company Pune, MERN Stack Development Pune, Full Stack Web Development India, Weblynx Infotech"
      />

      {/* Global Scroll Indicator */}
      <motion.div
        role="progressbar"
        aria-label="Page Scroll Progress"
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[9999] origin-left shadow-[0_0_15px_rgba(0,245,212,0.5)]"
        style={{ scaleX }}
      />

      <main
        id="main-content"
        className="bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark"
      >
        {/* Semantic SEO: Hidden H1 for crawler clarity without UI impact */}
        <h1 className="sr-only">
          Weblynx Infotech is a Web Development Company in Pune specializing in
          MERN stack development, scalable web applications, and digital
          solutions for businesses.
        </h1>

        {/* --- Hero Section --- */}
        <HeroSection />

        {/* --- Values & Impact --- */}
        <section aria-label="Our Values and Impact" className="relative z-20">
          <ValuesBanner />
          <div className="bg-gray-50 dark:bg-black/20 border-b border-gray-100 dark:border-white/5">
            <ImpactNumbers />
          </div>
        </section>

        {/* --- Technology Stack --- */}
        <section
          aria-label="Our Technology Stack"
          className="py-10 bg-white dark:bg-brand-dark"
        >
          <TechStackTicker />
        </section>

        {/* --- Services Preview --- */}
        <section
          id="arsenal"
          aria-labelledby="services-heading"
          className="relative py-24 bg-white dark:bg-brand-dark"
        >
          <div className="container mx-auto px-6 mb-20 flex items-end justify-between">
            <h2
              id="services-heading"
              className="text-5xl md:text-8xl font-black uppercase tracking-tighter dark:text-white leading-[0.8]"
            >
              The <br />
              <span className="text-brand-accent italic">Arsenal.</span>
            </h2>
            <span
              className="text-[10px] font-mono opacity-20 uppercase hidden md:block"
              aria-hidden="true"
            >
              System_Capabilities // V4.0
            </span>
          </div>
          <ServicesPreview />
        </section>

        {/* --- Featured Projects --- */}
        <section
          id="labs"
          aria-labelledby="portfolio-heading"
          className="py-24 bg-gray-50 dark:bg-black/40"
        >
          <div className="sr-only">
            <h2 id="portfolio-heading">
              Weblynx Infotech Portfolio & Featured Projects
            </h2>
          </div>
          <FeaturedProjects />
        </section>

        {/* --- Why Choose Us --- */}
        <section
          aria-label="Why Choose Weblynx Infotech"
          className="relative border-y border-gray-100 dark:border-white/5 bg-white dark:bg-brand-dark"
        >
          <WhyChooseUs />
        </section>

        {/* --- Industries --- */}
        <article aria-labelledby="industries-heading" className="py-24">
          <div className="sr-only">
            <h2 id="industries-heading">
              Industries Served by Weblynx Infotech
            </h2>
          </div>
          <IndustriesWeServe />
        </article>

        {/* --- Project Planner CTA --- */}
        <section
          aria-label="Start Your Web Development Project"
          className="relative overflow-hidden bg-brand-dark"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
          <ProjectPlannerCta />
        </section>

        {/* --- Testimonials --- */}
        <section
          aria-label="Client Testimonials"
          className="py-24 bg-white dark:bg-brand-dark border-t border-gray-100 dark:border-white/5"
        >
          <Testimonials />
        </section>

        {/* --- FAQ --- */}
        <section
          aria-labelledby="faq-heading"
          className="py-32 bg-gray-50 dark:bg-black/20"
        >
          <div className="sr-only">
            <h2 id="faq-heading">
              Frequently Asked Questions About Weblynx Infotech
            </h2>
          </div>
          <Faq />
        </section>

        {/* --- Footer --- */}
        <footer className="py-24 bg-brand-dark text-center border-t border-white/5">
          <div className="container mx-auto px-6">
            <div
              className="font-mono text-[10px] opacity-20 uppercase tracking-[0.5em] mb-8"
              aria-hidden="true"
            >
              End of Transmission // Pune_HQ
            </div>
            <p className="text-white font-bold text-2xl tracking-tighter uppercase">
              Redefining the{" "}
              <span className="text-brand-accent italic">Standard</span> of
              Digital Engineering.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
