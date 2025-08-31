// client/src/pages/About/About.jsx
import React from "react";
import Story from "./Story.jsx";
import MissionVision from "./MissionVision.jsx";
import TechStack from "./TechStack.jsx";
import FounderNote from "./FounderNote.jsx";
import Seo from "../../components/common/Seo.jsx";
import AngledPraiseBanner from "./AngledPraiseBanner.jsx";

const About = () => {
  return (
    <>
      <Seo
        title="About Weblynx Infotech - Our Story, Mission & Tech Stack"
        description="Learn about Weblynx Infotech's journey, our mission to deliver innovative digital solutions, our vision for the future, and the cutting-edge technologies we use. Discover the team and our client-first approach."
        keywords="Weblynx Infotech story, digital agency mission, web development vision, our tech stack, MERN stack, WordPress, SEO, API, full stack, mobile app, Shubham Pawale"
        ogTitle="About Weblynx Infotech - Crafting Your Digital Future"
        ogDescription="Explore the values, expertise, and passion that drive Weblynx Infotech to build exceptional digital experiences for businesses worldwide."
        ogUrl="https://www.weblynxinfotech.com/about"
        canonical="https://www.weblynxinfotech.com/about"
      />

      {/* This main tag with padding is the crucial layout fix */}
      <main className="pt-[104px] md:pt-24">
        <Story />
        <AngledPraiseBanner />
        <MissionVision />
        <TechStack />
        <FounderNote />
      </main>
    </>
  );
};

export default About;
