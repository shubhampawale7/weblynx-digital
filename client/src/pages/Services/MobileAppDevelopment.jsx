// client/src/pages/Services/MobileAppDevelopment.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion, useScroll, useSpring } from "framer-motion";

import mobileAppAnimationData from "../../assets/lottie-animations/mobile-app-development.json";
import {
  FiSmartphone,
  FiPenTool,
  FiCode,
  FiGrid,
  FiShare2,
  FiBox,
  FiPocket,
  FiCheckCircle,
  FiCompass,
  FiFlag,
  FiTrendingUp,
  FiHeart,
  FiDollarSign,
  FiUsers,
} from "react-icons/fi";

// --- Data with Icons ---
const whatWeBuildData = [
  {
    icon: <FiSmartphone className="text-red-500" />,
    title: "Native iOS & Android",
    description:
      "High-performance apps using Swift & Kotlin for a seamless native experience.",
  },
  {
    icon: <FiCode className="text-green-500" />,
    title: "Cross-Platform Apps",
    description:
      "Reach all users with one codebase using powerful frameworks like React Native.",
  },
  {
    icon: <FiGrid className="text-blue-500" />,
    title: "Progressive Web Apps (PWAs)",
    description:
      "Web-based apps in a native container, balancing reach and features.",
  },
  {
    icon: <FiPenTool className="text-purple-500" />,
    title: "Mobile UI/UX Design",
    description:
      "Crafting intuitive and engaging interfaces tailored for mobile devices.",
  },
  {
    icon: <FiShare2 className="text-yellow-500" />,
    title: "Backend for Mobile",
    description:
      "Developing robust server-side infrastructure and APIs to support your app.",
  },
  {
    icon: <FiBox className="text-indigo-500" />,
    title: "App Store Deployment",
    description:
      "Navigating the complexities of the Apple App Store and Google Play Store.",
  },
];

const approachData = [
  {
    icon: <FiCompass />,
    title: "Strategy & Concept",
    description:
      "We collaborate to define your app's core purpose, target audience, and roadmap to success.",
  },
  {
    icon: <FiPenTool />,
    title: "UI/UX Design",
    description:
      "Our designers create stunning, user-centric interfaces that are both beautiful and intuitive to use.",
  },
  {
    icon: <FiCode />,
    title: "Development",
    description:
      "Expert developers bring the designs to life with clean, efficient, and scalable code.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Testing & QA",
    description:
      "Rigorous testing across devices ensures a bug-free, high-performance application at launch.",
  },
  {
    icon: <FiFlag />,
    title: "Deployment & Launch",
    description:
      "We manage the entire submission process to the App Stores and ensure a smooth launch.",
  },
];

const benefitsData = [
  {
    icon: <FiUsers />,
    title: "Wider Audience Reach",
    description:
      "Connect with users directly on their preferred devices, expanding your market and brand presence.",
  },
  {
    icon: <FiHeart />,
    title: "Enhanced User Engagement",
    description:
      "Utilize native features like push notifications for a richer, more interactive experience.",
  },
  {
    icon: <FiPocket />,
    title: "Increased Brand Loyalty",
    description:
      "A dedicated app keeps your brand top-of-mind and provides a direct channel for customer interaction.",
  },
  {
    icon: <FiDollarSign />,
    title: "New Revenue Streams",
    description:
      "Monetize through in-app purchases or subscriptions, unlocking new business opportunities.",
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

const MobileAppDevelopment = () => {
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
        title="Mobile App Development Services | Weblynx Infotech"
        description="Weblynx Infotech crafts intuitive and high-performance native (iOS/Android) and cross-platform mobile applications to extend your reach and engage users worldwide."
        keywords="mobile app development, iOS app development, Android app development, cross-platform apps, React Native, Flutter, mobile UI/UX, app store optimization, Weblynx Infotech"
        ogTitle="Weblynx Infotech: Building Next-Gen Mobile Experiences"
        ogDescription="Launch powerful mobile apps with Weblynx Infotech, designed for performance, user engagement, and market success."
        ogUrl="https://www.weblynxinfotech.com/services/mobile-app-development"
        canonical="https://www.weblynxinfotech.com/services/mobile-app-development"
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-gray-950 dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#fca5a533,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#ef444433,transparent)]"></div>
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
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-amber-400 dark:to-rose-400"
            >
              Mobile App Development
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Extend your reach and engage your users on the go with custom
              mobile applications for iOS and Android.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link
                to="/contact"
                className={`inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                  isDark
                    ? "bg-red-600 text-white hover:bg-red-500"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                Build Your App
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
              animationData={mobileAppAnimationData}
              loop={true}
              autoplay={true}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Types of Apps We Develop
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whatWeBuildData.map((item, index) => (
              <motion.div
                variants={staggerItem}
                key={index}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group transition-all duration-300 ${
                  isDark
                    ? "bg-gray-900 border border-gray-800 hover:border-red-500 hover:bg-gray-800/50"
                    : "bg-white border border-gray-200 hover:border-red-300 hover:shadow-xl"
                }`}
              >
                <div className="text-3xl mb-5 p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
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
            Our Development Approach
          </motion.h2>
          <div
            ref={timelineRef}
            className="relative grid grid-cols-[auto_1fr] md:gap-x-12 gap-x-6"
          >
            <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-full h-full absolute left-5 md:left-6 -translate-x-1/2">
              <motion.div
                className="w-full h-full bg-red-600 dark:bg-rose-500 origin-top"
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
                    <div className="text-2xl text-red-600 dark:text-rose-500">
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
                  <h3 className="text-2xl font-bold text-red-600 dark:text-rose-400 mb-2">
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
            Benefits of a Custom Mobile App
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
            Ready to Launch Your Mobile App?
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg mb-8 opacity-80">
            Let's discuss how we can bring your app idea to life and connect you
            with users worldwide.
          </motion.p>
          <motion.div variants={staggerItem}>
            <Link
              to="/contact"
              className={`inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-amber-600 to-rose-600 text-white"
                  : "bg-gradient-to-r from-orange-600 to-red-500 text-white"
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

export default MobileAppDevelopment;
