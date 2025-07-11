import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../../components/common/Seo.jsx";
import {
  FiZap,
  FiUsers,
  FiBarChart2,
  FiLayers,
  FiShield,
  FiClock,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    Icon: FiZap,
    title: "Innovative Solutions",
    description:
      "We bring fresh perspectives and cutting-edge technologies to solve your unique challenges and drive innovation.",
    color: "text-purple-500 dark:text-purple-400",
  },
  {
    Icon: FiUsers,
    title: "Client-Centric Approach",
    description:
      "Your vision is our priority. We collaborate closely to ensure your digital product truly reflects your business goals.",
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    Icon: FiBarChart2,
    title: "Performance & Scalability",
    description:
      "We build fast, robust, and scalable solutions designed to grow with your business and handle future demands.",
    color: "text-green-500 dark:text-green-400",
  },
  {
    Icon: FiLayers,
    title: "Pixel-Perfect Design",
    description:
      "Attention to detail matters. We craft stunning, intuitive user interfaces that captivate and engage your audience.",
    color: "text-pink-500 dark:text-pink-400",
  },
  {
    Icon: FiShield,
    title: "Security & Reliability",
    description:
      "Your data and applications are safe with us. We adhere to best practices for secure and reliable development.",
    color: "text-slate-500 dark:text-slate-400",
  },
  {
    Icon: FiClock,
    title: "Timely Delivery",
    description:
      "We respect deadlines and deliver high-quality projects on time, every time, without compromising on quality.",
    color: "text-amber-500 dark:text-amber-400",
  },
];

const WhyChooseUs = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main heading
      gsap.from(".section-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power3.out",
      });

      // Staggered animation for each feature item
      const featureItems = gsap.utils.toArray(".feature-item");
      featureItems.forEach((item) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(item.querySelector(".feature-icon"), {
          scale: 0,
          autoAlpha: 0,
          ease: "back.out(1.7)",
          duration: 0.6,
        }).from(
          item.querySelectorAll(".feature-title, .feature-description"),
          {
            autoAlpha: 0,
            x: -30,
            stagger: 0.15,
            ease: "power2.out",
            duration: 0.8,
          },
          "-=0.4"
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 sm:py-28 overflow-hidden ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300`}
    >
      <Seo
        title="Why Choose Weblynx Infotech? - Our Unique Advantages"
        description="Discover why Weblynx Infotech is your ideal digital partner. We offer innovative solutions, a client-centric approach, superior performance, and timely delivery."
        keywords="Why choose Weblynx Infotech, digital agency benefits, innovative solutions, client-centric, performance, scalability, pixel-perfect design, security, reliability, timely delivery"
        ogTitle="Weblynx Infotech: Your Trusted Partner for Digital Success"
        ogDescription="Learn what sets Weblynx Infotech apart and why we're the right choice for your next digital project."
        ogUrl="https://www.weblynxinfotech.com/#why-choose-us"
        canonical="https://www.weblynxinfotech.com/#why-choose-us"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="section-heading text-4xl md:text-5xl font-bold
                       text-transparent bg-clip-text bg-gradient-to-r 
                       from-green-500 to-teal-600
                       dark:from-cyan-400 dark:to-lime-400"
          >
            The Weblynx Advantage
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-item flex items-start gap-6"
            >
              <div className="feature-icon mt-1">
                <feature.Icon className={`w-10 h-10 ${feature.color}`} />
              </div>
              <div>
                <h3 className="feature-title text-2xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="feature-description text-base md:text-lg text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
