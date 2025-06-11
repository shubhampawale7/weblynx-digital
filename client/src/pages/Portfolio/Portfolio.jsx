// client/src/pages/Portfolio/Portfolio.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for CTA
import Seo from "../../components/common/Seo.jsx"; // Import the Seo component

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "Ninad's Pottery - E-commerce Platform",
    description:
      "For Ninad's Pottery, Weblynx Infotech crafted a visually captivating and fully functional e-commerce platform, enabling seamless online sales of handcrafted pottery. The solution features robust user authentication, secure payment gateway integration, intuitive product Browse, and a streamlined checkout process, significantly enhancing their digital retail presence and customer reach.", // UPDATED
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe Integration",
      "Tailwind CSS",
      "Cloudinary",
    ],
    image:
      "https://via.placeholder.com/800x500/2c3e50/DDDDDD?text=Ninad%27s+Pottery", // Placeholder image
    link: "#", // Replace with actual project link if available
  },
  {
    id: 2,
    title: "Prani Seva Ashram - Dog NGO Website",
    description:
      "Weblynx Infotech developed a dynamic and compassionate website for Prani Seva Ashram, a non-profit dog NGO. This platform facilitates increased community engagement through features like adoption insights, real-time donation tracking, and efficient volunteer management, allowing the organization to better connect with supporters and care for animals.", // UPDATED
    technologies: [
      "WordPress",
      "Custom Theme",
      "Donation System",
      "Volunteer Management",
      "Responsive Design",
    ],
    image:
      "https://via.placeholder.com/800x500/1abc9c/DDDDDD?text=Prani%20Seva%20Ashram", // Placeholder image
    link: "#",
  },
  {
    id: 3,
    title: "Trishha Mines and Minerals - Mining Website",
    description:
      "For Trishha Mines and Minerals, Weblynx Infotech delivered a modern and robust corporate website that effectively showcases their extensive services, diverse product offerings, and impressive global footprint. The site is designed for corporate professionalism, providing comprehensive information about their operations, safety standards, and commitment to sustainability, while also enhancing their online presence.", // UPDATED
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "SEO Optimization",
      "Interactive Maps",
    ],
    image:
      "https://via.placeholder.com/800x500/3498db/DDDDDD?text=Trishha%20Mines", // Placeholder image
    link: "#",
  },
  {
    id: 4,
    title: "Walnut Hotel - Landing Page",
    description:
      "Weblynx Infotech created a sleek, highly responsive, and performant landing page for Walnut Hotel. Developed with pure HTML, CSS, and JavaScript, this page provides an elegant digital storefront that captivates potential guests, highlights key amenities, and drives direct bookings with a user-friendly interface optimized for all devices.", // UPDATED
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (Vanilla)",
      "Responsive Design",
      "Performance Optimization",
    ],
    image:
      "https://via.placeholder.com/800x500/e67e22/DDDDDD?text=Walnut%20Hotel", // Placeholder image
    link: "#",
  },
];

const Portfolio = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);

  const mainHeadingRef = useRef(null);
  const introTextRef = useRef(null);
  const projectCards = useRef([]);
  const finalCtaHeadingRef = useRef(null);
  const finalCtaTextRef = useRef(null);
  const finalCtaButtonRef = useRef(null);

  const addToArrayRef = (el, arr) => {
    if (el && !arr.current.includes(el)) {
      arr.current.push(el);
    }
  };

  useEffect(() => {
    projectCards.current = [];

    let ctx = gsap.context(() => {
      gsap.from(mainHeadingRef.current, {
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(introTextRef.current, {
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introTextRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(projectCards.current, {
        y: 80,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: projectCards.current[0],
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(
        [
          finalCtaHeadingRef.current,
          finalCtaTextRef.current,
          finalCtaButtonRef.current,
        ],
        {
          y: 50,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: finalCtaHeadingRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="portfolio"
      ref={sectionRef}
      className={`min-h-screen ${
        isDark ? "bg-gray-950 text-white" : "bg-white text-gray-800"
      } transition-colors duration-500`}
    >
      {/* SEO for the Portfolio Page - UPDATED for Weblynx Infotech */}
      <Seo
        title="Weblynx Infotech Portfolio - Our Digital Projects & Case Studies" // UPDATED
        description="Explore recent web development projects by Weblynx Infotech, including e-commerce platforms, NGO websites, corporate sites, and landing pages. See our expertise in action." // UPDATED
        keywords="Weblynx Infotech portfolio, web development projects, custom web apps, WordPress sites, e-commerce solutions, NGO website, mining website, hotel landing page, React projects, Node.js projects" // UPDATED
        ogTitle="Weblynx Infotech Portfolio: Real Projects, Real Results" // UPDATED
        ogDescription="Discover the impact of Weblynx Infotech's digital solutions through our diverse portfolio of custom web applications and websites." // UPDATED
        ogImage="https://www.weblynxinfotech.com/social-share-portfolio.jpg" // UPDATED: Use your new domain
        ogUrl="https://www.weblynxinfotech.com/portfolio" // UPDATED: Use your new domain
        canonical="https://www.weblynxinfotech.com/portfolio" // UPDATED: Use your new domain
      />

      {/* Hero/Introduction Section for Portfolio */}
      <section
        className={`py-16 sm:py-20 px-4 ${
          isDark
            ? "bg-gradient-to-br from-gray-950 to-gray-800 text-white"
            : "bg-gradient-to-br from-blue-50 to-white text-gray-800"
        } transition-colors duration-500`}
      >
        <div className="container mx-auto max-w-7xl text-center">
          <h1
            className="main-heading text-5xl md:text-7xl font-extrabold mb-6
                         text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600
                         dark:from-purple-400 dark:to-cyan-400"
            ref={mainHeadingRef}
          >
            Our Agency Projects & Case Studies
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto px-4"
            ref={introTextRef}
          >
            Discover the impact of our digital solutions through a curated
            selection of projects, showcasing Weblynx Infotech's expertise and
            dedication to client success. {/* UPDATED: Text mention */}
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                ref={(el) => addToArrayRef(el, projectCards)}
                className={`p-6 rounded-xl shadow-xl flex flex-col
                            ${
                              isDark
                                ? "bg-gray-800 border border-gray-700"
                                : "bg-white border border-gray-200"
                            }
                            transform transition-all duration-300 group`}
                whileHover={{
                  y: -8,
                  boxShadow: isDark
                    ? "0 18px 36px rgba(0, 0, 0, 0.4)"
                    : "0 18px 36px rgba(0, 0, 0, 0.18)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-6 shadow-md"
                />
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600 dark:text-purple-400">
                  {project.title}
                </h3>
                <p className="text-base opacity-90 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium
                                  ${
                                    isDark
                                      ? "bg-gray-700 text-gray-300"
                                      : "bg-gray-200 text-gray-700"
                                  }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300
                                ${
                                  isDark
                                    ? "bg-purple-700 hover:bg-purple-600 text-white"
                                    : "bg-blue-600 hover:bg-blue-700 text-white"
                                }`}
                >
                  View Case Study
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-7h4m0 0v4m0-4L10 14"
                    ></path>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section for Portfolio */}
      <section
        className={`py-16 px-4 text-center ${
          isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto max-w-3xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            ref={finalCtaHeadingRef}
          >
            Ready to add your project to our success stories?
          </h2>
          <p className="text-lg mb-8 opacity-90" ref={finalCtaTextRef}>
            Let's collaborate and create the next impactful digital solution
            together.
          </p>
          <Link
            to="/contact"
            ref={finalCtaButtonRef}
            className={`inline-block px-10 py-4 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300
                        ${
                          isDark
                            ? "bg-cyan-700 text-white hover:bg-cyan-600"
                            : "bg-green-600 text-white hover:bg-green-700"
                        }`}
          >
            Get Started with Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
