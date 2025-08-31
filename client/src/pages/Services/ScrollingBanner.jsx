// client/src/components/Home/ScrollingBanner.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiTrendingUp,
  FiLink,
  FiLayers,
  FiSettings,
} from "react-icons/fi";

// Data for the banner
const services = [
  { name: "Custom Web Applications", Icon: FiCode },
  { name: "Mobile App Development", Icon: FiSmartphone },
  { name: "WordPress Development", Icon: FiPenTool },
  { name: "SEO & Digital Marketing", Icon: FiTrendingUp },
  { name: "API Integration", Icon: FiLink },
  { name: "Full Stack Development", Icon: FiLayers },
  { name: "Support & Management", Icon: FiSettings },
];

const ScrollingBanner = () => {
  const marqueeContent = [...services, ...services];

  return (
    <section className="bg-white dark:bg-black w-full overflow-hidden">
      {/* The main container is a group to enable pause-on-hover */}
      <div className="group flex items-center h-24 md:h-28 bg-brand-dark-blue">
        {/* The scrolling content itself */}
        <div className="relative flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeContent.map((service, index) => (
            <div key={index} className="flex items-center text-gray-300 mx-8">
              <service.Icon className="w-6 h-6 mr-4 text-brand-accent flex-shrink-0" />
              <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingBanner;
