// client/src/pages/Home/Home.jsx
import React from "react";
import HeroSection from "./HeroSection.jsx";
import ServicesPreview from "./ServicesPreview.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import Testimonials from "./Testimonials.jsx"; // Ensure this is imported
import Seo from "../../components/common/Seo.jsx";

const Home = () => {
  return (
    <>
      {/* SEO for the Home Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="Weblynx Infotech - Your Digital Services Partner" // UPDATED
        description="Weblynx Infotech offers expert MERN stack development, WordPress solutions, SEO optimization, mobile app development, and full-stack services to transform your online presence. Crafting the next evolution of web experiences." // UPDATED
        keywords="digital services, web development, MERN stack, WordPress development, SEO optimization, API integration, full stack development, mobile app development, custom web applications, Weblynx Infotech, Pune, India" // UPDATED
        ogTitle="Weblynx Infotech - Your Digital Services Partner" // UPDATED
        ogDescription="Elevate your business with custom web and mobile applications, robust SEO, and comprehensive digital solutions from Weblynx Infotech." // UPDATED
        ogImage="https://www.weblynxinfotech.com/social-share-home.jpg" // UPDATED: Use your new domain
        ogUrl="https://www.weblynxinfotech.com/" // UPDATED: Use your new domain
        canonical="https://www.weblynxinfotech.com/" // UPDATED: Use your new domain
      />
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      {/*
        Optional: You could add a final CTA section here if desired,
        or the general CTA at the bottom of the App.jsx will suffice.
      */}
    </>
  );
};

export default Home;
