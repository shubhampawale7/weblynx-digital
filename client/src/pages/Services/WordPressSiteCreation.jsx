// client/src/pages/Services/WordPressSiteCreation.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FiPenTool,
  FiCode,
  FiShoppingCart,
  FiShuffle,
  FiZap,
  FiLifeBuoy,
  FiEdit,
  FiThumbsUp,
  FiTrendingUp,
  FiDollarSign,
} from "react-icons/fi";

// Lottie animation data
import wordpressAnimationData from "../../assets/lottie-animations/wordpress-animation.json";

// --- Data with Icons ---
const offerData = [
  {
    icon: <FiPenTool />,
    title: "Custom Theme Development",
    desc: "From concept to code, we build unique WordPress themes that perfectly match your brand identity and functionality needs.",
  },
  {
    icon: <FiCode />,
    title: "Plugin Development & Customization",
    desc: "Extend your site's capabilities with bespoke plugins or customize existing ones to fit your specific requirements.",
  },
  {
    icon: <FiShoppingCart />,
    title: "WooCommerce E-commerce",
    desc: "Launch powerful online stores with seamless product management, secure payments, and a great shopping experience.",
  },
  {
    icon: <FiShuffle />,
    title: "Website Migration & Redesign",
    desc: "Smoothly transition your existing website to WordPress or give your current WordPress site a modern facelift.",
  },
  {
    icon: <FiZap />,
    title: "Performance & Security",
    desc: "Optimize your WordPress site for speed, reliability, and robust security against common threats and vulnerabilities.",
  },
  {
    icon: <FiLifeBuoy />,
    title: "Ongoing Support & Training",
    desc: "Receive comprehensive support and training to confidently manage and update your WordPress website with ease.",
  },
];

const approachData = [
  {
    num: 1,
    title: "Discovery & Strategy",
    desc: "We start by understanding your goals, target audience, and project scope to identify the best WordPress solutions for you.",
  },
  {
    num: 2,
    title: "Design & Prototyping",
    desc: "Our team creates visually stunning and user-friendly designs, tailored to your brand, ensuring a flawless user experience.",
  },
  {
    num: 3,
    title: "Development & Customization",
    desc: "We bring the designs to life, building or customizing themes and plugins to ensure robust and scalable functionality.",
  },
  {
    num: 4,
    title: "Testing & Optimization",
    desc: "We rigorously test for responsiveness, performance, and security across all devices to guarantee a perfect launch.",
  },
  {
    num: 5,
    title: "Launch & Training",
    desc: "We seamlessly deploy your new site and provide comprehensive training for easy content management.",
  },
];

const benefitsData = [
  {
    icon: <FiEdit />,
    title: "User-Friendly Management",
    desc: "Easily update content, images, and features with WordPress's intuitive dashboard, no coding required.",
  },
  {
    icon: <FiThumbsUp />,
    title: "Flexibility & Scalability",
    desc: "WordPress adapts to your growing needs, offering endless customization options and robust scalability for the future.",
  },
  {
    icon: <FiTrendingUp />,
    title: "SEO-Friendly Structure",
    desc: "Built-in SEO capabilities and powerful plugins help your site rank higher in search engine results from day one.",
  },
  {
    icon: <FiDollarSign />,
    title: "Cost-Effectiveness",
    desc: "Benefit from a vast ecosystem of themes and plugins, offering powerful features without extensive custom coding.",
  },
];

// --- Framer Motion Animation Variants ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WordPressSiteCreation = () => {
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
        title="WordPress Website Creation Services | Weblynx Infotech"
        description="Weblynx Infotech specializes in creating custom, high-performance, and secure WordPress websites. From custom themes to e-commerce solutions and ongoing support, we build powerful online presences."
        keywords="WordPress development, custom WordPress themes, WordPress e-commerce, WooCommerce, WordPress plugins, website migration, WordPress SEO, Weblynx Infotech"
        ogTitle="Weblynx Infotech WordPress: Custom, Powerful, & User-Friendly Websites"
        ogDescription="Unlock the full potential of WordPress with Weblynx Infotech's expert site creation and customization services."
        ogUrl="https://www.weblynxinfotech.com/services/wordpress-site-creation"
        canonical="https://www.weblynxinfotech.com/services/wordpress-site-creation"
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-gray-950 dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#cce3ff,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f622,transparent)]"></div>
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
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 dark:from-lime-400 dark:to-cyan-400"
            >
              WordPress Site Creation
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Unlock the power of WordPress with custom, high-performing
              websites tailored to your unique business needs.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link
                to="/contact"
                className={`inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                  isDark
                    ? "bg-purple-600 text-white hover:bg-purple-500"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Start Your WordPress Project
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
            className="w-full max-w-md mx-auto md:max-w-none"
          >
            <Lottie
              animationData={wordpressAnimationData}
              loop={true}
              autoplay={true}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            What We Offer
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {offerData.map((item, index) => (
              <motion.div
                variants={staggerItem}
                key={index}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group transition-all duration-300 ${
                  isDark
                    ? "bg-gray-900 border border-gray-800 hover:border-purple-500 hover:bg-gray-800/50"
                    : "bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl"
                }`}
              >
                <div
                  className={`text-2xl mb-5 p-3 rounded-lg ${
                    isDark
                      ? "bg-gray-800 text-purple-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-70 text-base">{item.desc}</p>
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
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Approach to WordPress
          </motion.h2>
          <div
            ref={timelineRef}
            className="relative grid grid-cols-[auto_1fr] md:gap-x-12 gap-x-6"
          >
            <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-full h-full absolute left-5 md:left-6 -translate-x-1/2">
              <motion.div
                className="w-full h-full bg-blue-600 dark:bg-purple-500 origin-top"
                style={{ scaleY }}
              />
            </div>
            {approachData.map((step) => (
              <React.Fragment key={step.num}>
                <div className="z-10">
                  <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-gray-950 border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 dark:bg-purple-500"></div>
                  </div>
                </div>
                <motion.div
                  variants={sectionVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  className="pt-2 pb-16"
                >
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-purple-400 mb-2">
                    Step {step.num}: {step.title}
                  </h3>
                  <p className="opacity-80">{step.desc}</p>
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
            Why Choose WordPress?
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
                  className={`text-3xl mt-1 text-green-500 dark:text-green-400`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="opacity-70 text-base">{item.desc}</p>
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
            Ready to Build with WordPress?
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg mb-8 opacity-80">
            Let's discuss how we can create a powerful and beautiful WordPress
            website for your business.
          </motion.p>
          <motion.div variants={staggerItem}>
            <Link
              to="/contact"
              className={`inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                  : "bg-gradient-to-r from-blue-600 to-green-500 text-white"
              }`}
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default WordPressSiteCreation;
