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
      {/* SEO for the About Us Page */}
      <Seo
        title="About Weblynx - Our Story, Mission & Tech Stack"
        description="Learn about Weblynx's journey, our mission to deliver innovative digital solutions, our vision for the future, and the cutting-edge technologies we use. Discover the team and our client-first approach."
        keywords="Weblynx story, digital agency mission, web development vision, our tech stack, MERN stack, WordPress, SEO, API, full stack, mobile app, Shubham Pawale"
        ogTitle="About Weblynx - Crafting Your Digital Future"
        ogDescription="Explore the values, expertise, and passion that drive Weblynx to build exceptional digital experiences for businesses worldwide."
        // ogImage: Uses default if not provided, or you can specify a unique one for About page
        ogUrl="https://www.weblynx.com/about" // Replace with your actual domain
        canonical="https://www.weblynx.com/about" // Replace with your actual domain
      />

      <Story />
      <MissionVision />
      <TechStack />
      <FounderNote />
    </div>
  );
};

export default About;
