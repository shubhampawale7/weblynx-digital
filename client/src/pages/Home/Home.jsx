// client/src/pages/Home/Home.jsx
import React from "react";
import HeroSection from "./HeroSection.jsx";
import ServicesPreview from "./ServicesPreview.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import Testimonials from "./Testimonials.jsx";
import Seo from "../../components/common/Seo.jsx"; // Import the Seo component

const Home = () => {
  return (
    <>
      {/* SEO for the Home Page */}
      <Seo
        title="Your Digital Services Partner"
        description="Weblynx offers expert MERN stack development, WordPress solutions, SEO optimization, mobile app development, and full-stack services to transform your online presence. Crafting the next evolution of web experiences."
        keywords="digital services, web development, MERN stack, WordPress development, SEO optimization, API integration, full stack development, mobile app development, custom web applications, Weblynx, Pune, India"
        ogTitle="Weblynx - Your Digital Services Partner"
        ogDescription="Elevate your business with custom web and mobile applications, robust SEO, and comprehensive digital solutions from Weblynx."
        ogImage="https://www.weblynx.com/social-share-home.jpg" // Replace with a specific image for homepage sharing
        ogUrl="https://www.weblynx.com/" // Replace with your actual domain
        canonical="https://www.weblynx.com/" // Replace with your actual domain
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
