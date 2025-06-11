// client/src/pages/About/About.jsx
import React from "react";
import Story from "./Story.jsx";
import MissionVision from "./MissionVision.jsx";
import TechStack from "./TechStack.jsx";
import FounderNote from "./FounderNote.jsx";
import Seo from "../../components/common/Seo.jsx"; // Import the Seo component

const About = () => {
  return (
    <div className="min-h-screen">
      {/* SEO for the About Us Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="About Weblynx Infotech - Our Story, Mission & Tech Stack" // UPDATED
        description="Learn about Weblynx Infotech's journey, our mission to deliver innovative digital solutions, our vision for the future, and the cutting-edge technologies we use. Discover the team and our client-first approach." // UPDATED
        keywords="Weblynx Infotech story, digital agency mission, web development vision, our tech stack, MERN stack, WordPress, SEO, API, full stack, mobile app, Shubham Pawale" // UPDATED
        ogTitle="About Weblynx Infotech - Crafting Your Digital Future" // UPDATED
        ogDescription="Explore the values, expertise, and passion that drive Weblynx Infotech to build exceptional digital experiences for businesses worldwide." // UPDATED
        // ogImage: Uses default from Seo.jsx if not provided, or you can specify a unique one for About page
        ogUrl="https://www.weblynxinfotech.com/about" // UPDATED: Use your new domain
        canonical="https://www.weblynxinfotech.com/about" // UPDATED: Use your new domain
      />

      <Story />
      <MissionVision />
      <TechStack />
      <FounderNote />
    </div>
  );
};

export default About;
