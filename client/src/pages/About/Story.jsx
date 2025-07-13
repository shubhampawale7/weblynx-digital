// client/src/components/About/Story.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, useScroll, useTransform } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import { FiArrowDown } from "react-icons/fi";

const storyPoints = [
  {
    title: "The Spark of an Idea",
    description:
      "Our journey began with a shared passion for the MERN stack and a vision to bridge the gap between complex digital needs and seamless, elegant user experiences.",
  },
  {
    title: "Growth & Adaptation",
    description:
      "Driven by the belief that every business deserves a powerful online presence, we've evolved into a dedicated agency, constantly learning and adapting in the ever-changing tech landscape.",
  },
  {
    title: "Our Commitment Today",
    description:
      "Today, Weblynx Infotech is a testament to innovation and a client-first approach. We craft digital solutions that perform exceptionally, helping our clients achieve their goals.",
  },
];

const Story = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((storyPoints.length - 1) * 100) / storyPoints.length}%`]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // This is a simplified check for mobile that doesn't require a resize listener.
  // For a full redesign, the useWindowSize hook is more robust.
  const isLikelyMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  if (isLikelyMobile) {
    return (
      <section
        className={`py-20 sm:py-24 ${
          isDark ? "bg-gray-950 text-white" : "bg-white text-gray-800"
        }`}
      >
        <Seo
          title="Our Story - The Journey of Weblynx Infotech"
          description="Discover the inspiring story behind Weblynx Infotech..."
        />
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-purple-400 dark:to-cyan-400">
            Our Story
          </h2>
          <div className="space-y-16">
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    // TIMING CHANGE: Increased height from 300vh to 400vh to make the scroll longer.
    <section ref={targetRef} className="relative h-[400vh]">
      <Seo
        title="Our Story - The Journey of Weblynx Infotech"
        description="Discover the inspiring story behind Weblynx Infotech, our passion for digital innovation, and our journey to becoming a leading web development agency focused on client success."
        keywords="Weblynx Infotech history, company story, digital agency journey, web development founding, our beginnings, innovation, collaboration"
        ogTitle="The Weblynx Infotech Story: Passionate About Digital Excellence"
        ogDescription="Learn about the values and vision that shaped Weblynx Infotech into a dedicated agency delivering cutting-edge digital solutions."
        ogUrl="https://www.weblynxinfotech.com/about"
        canonical="https://www.weblynxinfotech.com/about"
      />
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
          <img
            src="/about-us-story.jpg"
            alt="Weblynx Infotech team collaborating"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute top-16 md:top-24 left-1/2 -translate-x-1/2 z-20 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold
                       text-transparent bg-clip-text bg-gradient-to-r 
                       from-blue-500 to-purple-600
                       dark:from-purple-400 dark:to-cyan-400"
          >
            OUR STORY
          </h2>
        </div>
        <motion.div
          style={{ x }}
          className="absolute top-0 left-0 flex h-full w-[300vw]"
        >
          {storyPoints.map((point, index) => (
            <StorySlide
              key={index}
              index={index}
              title={point.title}
              description={point.description}
              progress={scrollYProgress}
            />
          ))}
        </motion.div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/50 text-sm flex items-center gap-2"
          >
            <FiArrowDown /> Scroll to discover
          </motion.div>
          <div className="w-48 h-1 bg-white/20 rounded-full">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-white rounded-full origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StorySlide = ({ index, title, description, progress }) => {
  const slideCount = storyPoints.length;
  const slideStart = index / slideCount;
  const slideEnd = (index + 1) / slideCount;

  const opacity = useTransform(
    progress,
    [slideStart, slideStart + 0.05, slideEnd - 0.05, slideEnd],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [slideStart, slideStart + 0.05], [30, 0]);

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center text-center p-8 z-10">
      <motion.div style={{ opacity, y }} className="max-w-md md:max-w-xl">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default Story;
