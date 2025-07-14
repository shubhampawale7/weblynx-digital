// client/src/pages/Services/ApiIntegration.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { motion, useScroll, useSpring } from "framer-motion";
import apiIntegrationAnimationData from "../../assets/lottie-animations/api-integration-animation.json";
import {
  FiShuffle,
  FiDatabase,
  FiLock,
  FiZap,
  FiFileText,
  FiLayers,
  FiCheckCircle,
  FiRefreshCw,
  FiPlayCircle,
  FiCheck,
  FiX,
  FiShoppingCart,
  FiCreditCard,
  FiUsers,
  FiMessageSquare,
  FiCode,
} from "react-icons/fi";
import { FaAws, FaGoogle, FaStripe, FaNodeJs } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";

// --- Data for the page sections ---
const typesOfIntegrations = [
  {
    icon: <FiShoppingCart />,
    title: "E-commerce APIs",
    description:
      "Connecting platforms like Shopify, WooCommerce, and custom stores for seamless operations.",
  },
  {
    icon: <FiCreditCard />,
    title: "Payment Gateways",
    description:
      "Integrating secure and reliable payment solutions like Stripe and Razorpay.",
  },
  {
    icon: <FaGoogle />,
    title: "Google APIs",
    description:
      "Leveraging the power of Google Maps, Analytics, and other services within your app.",
  },
  {
    icon: <FiUsers />,
    title: "CRM & ERP Systems",
    description:
      "Syncing customer and business data with platforms like Salesforce and custom ERPs.",
  },
  {
    icon: <FaAws />,
    title: "Cloud Service APIs",
    description:
      "Integrating with AWS, Google Cloud, and other platforms for scalable infrastructure.",
  },
  {
    icon: <FiMessageSquare />,
    title: "Social & Communication APIs",
    description:
      "Connecting with social media platforms or communication tools like Twilio.",
  },
];

const techStackData = [
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", Icon: FiLayers, color: "text-gray-500" },
  { name: "REST APIs", Icon: FiShuffle, color: "text-blue-500" },
  { name: "GraphQL", Icon: FiCode, color: "text-pink-500" },
  { name: "Stripe", Icon: FaStripe, color: "text-purple-500" },
  { name: "RazorPay", Icon: SiRazorpay, color: "text-sky-500" },
];

const industriesData = [
  "E-commerce",
  "SaaS",
  "FinTech",
  "Healthcare",
  "Logistics",
  "Marketing Tech",
];

const comparisonData = [
  {
    feature: "Customization",
    custom: "Perfectly tailored to your exact business logic and workflows.",
    offTheShelf: "Limited to the provider's features and rules.",
  },
  {
    feature: "Data Control",
    custom: "You own and control your data flow completely.",
    offTheShelf: "Data is often processed and stored by a third party.",
  },
  {
    feature: "Scalability",
    custom: "Built to handle your specific growth and traffic patterns.",
    offTheShelf: "May have rate limits or performance bottlenecks.",
  },
  {
    feature: "Cost Structure",
    custom: "One-time development cost, no recurring fees.",
    offTheShelf: "Ongoing subscription fees that can grow over time.",
  },
];

const approachData = [
  {
    icon: <FiFileText />,
    title: "Analysis & Strategy",
    description:
      "We meticulously analyze your systems and goals to map out the perfect integration plan.",
  },
  {
    icon: <FiLayers />,
    title: "Design & Development",
    description:
      "Our team designs and develops robust, scalable APIs and integration pathways.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Testing & Security",
    description:
      "We conduct rigorous testing to ensure seamless functionality and implement top-tier security.",
  },
  {
    icon: <FiPlayCircle />,
    title: "Deployment & Monitoring",
    description:
      "After a smooth deployment, we continuously monitor performance to ensure everything runs flawlessly.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Optimization & Support",
    description:
      "We provide ongoing support and optimize integrations as your business evolves.",
  },
];

// --- Framer Motion Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ApiIntegration = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="API Integration Services | Weblynx Infotech"
        description="We specialize in seamless API integration, connecting systems for automated workflows, enhanced data exchange, and improved business efficiency."
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#fce7f3,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#ec489922,transparent)]" />
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="text-center md:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 dark:from-pink-400 dark:to-orange-400"
            >
              API Integration Services
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 opacity-80 max-w-xl mx-auto md:mx-0"
            >
              Seamlessly connect your systems, automate workflows, and enhance
              data exchange across your entire digital ecosystem.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-pink-600 text-white hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600"
              >
                Connect Your Systems
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="w-full max-w-sm mx-auto md:max-w-none"
          >
            <Lottie animationData={apiIntegrationAnimationData} loop={true} />
          </motion.div>
        </motion.div>
      </section>

      {/* Types of Integrations Section */}
      <section
        className={`py-20 sm:py-24 px-4 ${
          isDark ? "bg-gray-950" : "bg-slate-50"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Integrations We Handle
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {typesOfIntegrations.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item.title}
                className={`p-8 rounded-2xl flex flex-col items-start text-left group ${
                  isDark ? "bg-gray-900" : "bg-white shadow-lg"
                }`}
              >
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 mb-5 text-purple-500 dark:text-purple-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-70 text-base">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Core Technologies
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {techStackData.map((tech) => (
              <motion.div
                variants={itemVariants}
                key={tech.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <tech.Icon className={`w-12 h-12 ${tech.color}`} />
                <span className="font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        className={`py-20 sm:py-24 px-4 ${
          isDark ? "bg-gray-950" : "bg-slate-50"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Industries We Serve
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {industriesData.map((industry) => (
              <motion.span
                variants={itemVariants}
                key={industry}
                className={`px-5 py-2 rounded-full font-medium ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Custom vs. Third-Party
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="p-4 font-semibold text-lg">Factor</th>
                  <th className="p-4 font-semibold text-lg text-pink-500 dark:text-pink-400">
                    Our Custom Integrations
                  </th>
                  <th className="p-4 font-semibold text-lg">
                    Third-Party Platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={i}
                    variants={itemVariants}
                    className="border-b dark:border-gray-800"
                  >
                    <td className="p-4 font-semibold">{row.feature}</td>
                    <td className="p-4 text-green-600 dark:text-green-400">
                      <FiCheck className="inline mr-2" />
                      {row.custom}
                    </td>
                    <td className="p-4 text-red-500 dark:text-red-400">
                      <FiX className="inline mr-2" />
                      {row.offTheShelf}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section
        className={`py-20 sm:py-24 px-4 ${
          isDark ? "bg-gray-950" : "bg-slate-50"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            Our Integration Blueprint
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            {approachData.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-6"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-400 font-bold text-xl flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24 text-center bg-white dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Connect Your Digital Landscape?
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Let's discuss how seamless API integrations can transform your
            business workflows.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-500 text-white"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ApiIntegration;
