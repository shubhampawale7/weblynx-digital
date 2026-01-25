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
      <Seo
        title="Weblynx Infotech | Top MERN Stack Agency in Pune"
        description="Engineering high-performance web applications and digital ecosystems with surgical precision. Leading MERN stack development & SEO experts in Pune, India."
        keywords="Web Development Pune, MERN Stack Agency Pune, Software Engineering India, Weblynx Infotech Shubham Pawale, Custom Web Apps"
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
        {/* SEMANTIC SEO: Hidden H1 for crawler context without breaking visual UI */}
        <h1 className="sr-only">
          Weblynx Infotech: Digital Engineering Agency Pune - Specialized in
          MERN Stack & Scalable Web Solutions
        </h1>

        {/* --- Hero Layer --- */}
        <HeroSection />

        {/* --- Trust & Momentum Layer --- */}
        <section aria-label="Our Values and Impact" className="relative z-20">
          <ValuesBanner />
          <div className="bg-gray-50 dark:bg-black/20 border-b border-gray-100 dark:border-white/5">
            <ImpactNumbers />
          </div>
        </section>

        {/* --- Tech Momentum --- */}
        <section
          aria-label="Our Technology Stack"
          className="py-10 bg-white dark:bg-brand-dark"
        >
          <TechStackTicker />
        </section>

        {/* --- The Arsenal (Services) --- */}
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
              The <br />{" "}
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

        {/* --- Selected Case Studies --- */}
        <section
          id="labs"
          aria-labelledby="portfolio-heading"
          className="py-24 bg-gray-50 dark:bg-black/40"
        >
          <div className="sr-only">
            <h2 id="portfolio-heading">Featured Portfolio & Projects</h2>
          </div>
          <FeaturedProjects />
        </section>

        {/* --- The Differential (Why Us) --- */}
        <section
          aria-label="Why Choose Weblynx Infotech"
          className="relative border-y border-gray-100 dark:border-white/5 bg-white dark:bg-brand-dark"
        >
          <WhyChooseUs />
        </section>

        {/* --- Industries --- */}
        <article aria-labelledby="industries-heading" className="py-24">
          <div className="sr-only">
            <h2 id="industries-heading">Industries We Serve</h2>
          </div>
          <IndustriesWeServe />
        </article>

        {/* --- Conversion Engine --- */}
        <section
          aria-label="Start Your Project"
          className="relative overflow-hidden bg-brand-dark"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
          <ProjectPlannerCta />
        </section>

        {/* --- Social Proof --- */}
        <section
          aria-label="Client Testimonials"
          className="py-24 bg-white dark:bg-brand-dark border-t border-gray-100 dark:border-white/5"
        >
          <Testimonials />
        </section>

        {/* --- Knowledge Base --- */}
        <section
          aria-labelledby="faq-heading"
          className="py-32 bg-gray-50 dark:bg-black/20"
        >
          <div className="sr-only">
            <h2 id="faq-heading">Frequently Asked Questions</h2>
          </div>
          <Faq />
        </section>

        {/* --- Terminal Footer Link --- */}
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
