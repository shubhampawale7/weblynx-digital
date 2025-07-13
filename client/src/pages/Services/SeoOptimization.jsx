// client/src/pages/Services/SeoOptimization.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion, useScroll, useSpring } from "framer-motion";

import seoAnimationData from "../../assets/lottie-animations/seo-animation.json";
import {
  FiSearch,
  FiCode,
  FiFileText,
  FiLink2,
  FiMapPin,
  FiBarChart,
  FiTrendingUp,
  FiTarget,
  FiAward,
  FiDollarSign,
  FiCheckCircle,
  FiList,
  FiPlay,
} from "react-icons/fi";

// --- Data with Icons ---
const coreServicesData = [
  {
    icon: <FiSearch />,
    title: "Keyword Research & Strategy",
    description:
      "Identify high-value keywords to attract the right audience and dominate search results.",
  },
  {
    icon: <FiCode />,
    title: "Technical SEO Audits",
    description:
      "Ensure your website's foundation is robust, fast, and crawler-friendly for optimal indexing.",
  },
  {
    icon: <FiFileText />,
    title: "On-Page & Content Optimization",
    description:
      "Optimize content, meta tags, and structure for improved search engine relevance.",
  },
  {
    icon: <FiMapPin />,
    title: "Local SEO",
    description:
      "Dominate local search results and attract nearby customers with tailored local tactics.",
  },
  {
    icon: <FiLink2 />,
    title: "Link Building & Authority",
    description:
      "Build high-quality backlinks to establish your website's authority and improve domain ranking.",
  },
  {
    icon: <FiBarChart />,
    title: "Analytics & Reporting",
    description:
      "Continuously track rankings and traffic, providing transparent reports on your growth.",
  },
];

const approachData = [
  {
    icon: <FiCheckCircle />,
    title: "Audit & Analysis",
    description:
      "We begin with a comprehensive audit of your site's technical health, content, and backlink profile.",
  },
  {
    icon: <FiList />,
    title: "Strategy & Planning",
    description:
      "Based on our findings, we develop a custom SEO roadmap tailored to your specific business goals.",
  },
  {
    icon: <FiPlay />,
    title: "Implementation",
    description:
      "Our team executes on the plan, implementing technical fixes, optimizing content, and building authority.",
  },
  {
    icon: <FiBarChart />,
    title: "Monitoring & Reporting",
    description:
      "We track key metrics and provide clear, regular reports on your website's performance and our progress.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Adaptation & Growth",
    description:
      "SEO is ever-evolving. We continually adapt our strategy to algorithm changes and new opportunities.",
  },
];

const benefitsData = [
  {
    icon: <FiTrendingUp />,
    title: "Increased Organic Traffic",
    description:
      "Attract more relevant visitors to your website through higher, sustainable search engine rankings.",
  },
  {
    icon: <FiTarget />,
    title: "Higher Conversion Rates",
    description:
      "Reach users with high intent, leading to more qualified leads, sales, and desired actions.",
  },
  {
    icon: <FiAward />,
    title: "Enhanced Brand Authority",
    description:
      "Achieve top rankings to establish your brand as a trusted and credible authority in your industry.",
  },
  {
    icon: <FiDollarSign />,
    title: "Cost-Effective Marketing",
    description:
      "Generate long-term results and continuous traffic without the per-click costs of paid advertising.",
  },
];

// --- Framer Motion Animation Variants ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SeoOptimization = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-950 text-white" : "bg-slate-50 text-gray-800"
      } transition-colors duration-500`}
    >
      <Seo
        title="SEO Optimization Services | Weblynx Infotech"
        description="Weblynx Infotech offers comprehensive SEO optimization services to increase your online visibility, drive organic traffic, and improve your search engine rankings."
        keywords="SEO optimization, search engine optimization, keyword research, on-page SEO, technical SEO, content optimization, local SEO, link building, Weblynx Infotech"
        ogTitle="Weblynx Infotech: Expert SEO Services for Higher Rankings"
        ogDescription="Elevate your online presence and dominate search results with Weblynx Infotech's strategic SEO optimization."
        ogUrl="https://www.weblynxinfotech.com/services/seo-optimization"
        canonical="https://www.weblynxinfotech.com/services/seo-optimization"
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-gray-950 dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#a7f3d0,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#10b98122,transparent)]"></div>
        </div>
        <motion.div
          className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              variants={staggerItem}
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 dark:from-cyan-400 dark:to-lime-400"
            >
              SEO Optimization
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Boost your online visibility and drive organic traffic with our
              comprehensive Search Engine Optimization services.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link
                to="/contact"
                className={`inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                  isDark
                    ? "bg-teal-600 text-white hover:bg-teal-500"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                Improve Your Rankings
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={staggerItem}
            animate={{
              y: [-10, 10],
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            className="w-full max-w-sm mx-auto md:max-w-none"
          >
            <Lottie
              animationData={seoAnimationData}
              loop={true}
              autoplay={true}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Core SEO Services
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreServicesData.map((item, index) => (
              <motion.div
                variants={staggerItem}
                key={index}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group transition-all duration-300 ${
                  isDark
                    ? "bg-gray-900 border border-gray-800 hover:border-green-500 hover:bg-gray-800/50"
                    : "bg-white border border-gray-200 hover:border-green-300 hover:shadow-xl"
                }`}
              >
                <div
                  className={`text-2xl mb-5 p-3 rounded-lg ${
                    isDark
                      ? "bg-gray-800 text-green-400"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-70 text-base">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            Our Strategic SEO Approach
          </motion.h2>
          <div
            ref={timelineRef}
            className="relative grid grid-cols-[auto_1fr] md:gap-x-12 gap-x-6"
          >
            <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-full h-full absolute left-5 md:left-6 -translate-x-1/2">
              <motion.div
                className="w-full h-full bg-green-600 dark:bg-teal-500 origin-top"
                style={{ scaleY }}
              />
            </div>
            {approachData.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  variants={sectionVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="z-10"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-gray-950 border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    <div className="text-2xl text-green-600 dark:text-teal-500">
                      {step.icon}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={sectionVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  className="pt-2 pb-16"
                >
                  <h3 className="text-2xl font-bold text-green-600 dark:text-teal-400 mb-2">
                    {step.title}
                  </h3>
                  <p className="opacity-80">{step.description}</p>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className={`py-20 sm:py-24 px-4 ${
          isDark ? "bg-gray-900" : "bg-slate-100"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Benefits of SEO with Weblynx
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefitsData.map((item, index) => (
              <motion.div
                variants={staggerItem}
                key={index}
                className={`p-8 rounded-2xl flex items-start text-left space-x-6 ${
                  isDark ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <div
                  className={`text-3xl mt-1 text-teal-500 dark:text-teal-400`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="opacity-70 text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-24 px-4 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="container mx-auto max-w-3xl"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Outrank Your Competition?
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg mb-8 opacity-80">
            Let's craft an SEO strategy that puts your business at the top of
            search engine results.
          </motion.p>
          <motion.div variants={staggerItem}>
            <Link
              to="/contact"
              className={`inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-cyan-600 to-lime-500 text-white"
                  : "bg-gradient-to-r from-green-600 to-teal-500 text-white"
              }`}
            >
              Get a Free SEO Audit
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default SeoOptimization;
