// client/src/pages/Services/ApiIntegration.jsx
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import apiIntegrationAnimationData from "../../assets/lottie-animations/api-integration-animation.json";
import {
  FiShoppingCart,
  FiCreditCard,
  FiUsers,
  FiMessageSquare,
  FiShuffle,
  FiLayers,
  FiFileText,
  FiCheckCircle,
  FiPlayCircle,
  FiRefreshCw,
  FiArrowRight,
  FiCheck,
  FiX,
  FiCode,
  FiArrowLeft,
} from "react-icons/fi";
import { FaAws, FaGoogle, FaStripe, FaNodeJs } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";

// --- Data (Restyled and on-brand) ---
const typesOfIntegrations = [
  {
    icon: FiShoppingCart,
    title: "E-commerce APIs",
    description:
      "Connecting platforms like Shopify, WooCommerce, and custom stores for seamless operations.",
  },
  {
    icon: FiCreditCard,
    title: "Payment Gateways",
    description:
      "Integrating secure and reliable payment solutions like Stripe and Razorpay.",
  },
  {
    icon: FaGoogle,
    title: "Google APIs",
    description:
      "Leveraging the power of Google Maps, Analytics, and other services within your app.",
  },
  {
    icon: FiUsers,
    title: "CRM & ERP Systems",
    description:
      "Syncing customer and business data with platforms like Salesforce and custom ERPs.",
  },
  {
    icon: FaAws,
    title: "Cloud Service APIs",
    description:
      "Integrating with AWS, Google Cloud, and other platforms for scalable infrastructure.",
  },
  {
    icon: FiMessageSquare,
    title: "Social & Communication",
    description:
      "Connecting with social media platforms or communication tools like Twilio.",
  },
];
const techStackData = [
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Express.js", Icon: FiLayers },
  { name: "REST APIs", Icon: FiShuffle },
  { name: "GraphQL", Icon: FiCode },
  { name: "Stripe", Icon: FaStripe },
  { name: "RazorPay", Icon: SiRazorpay },
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
    offTheShelf: "Data is often processed by a third party.",
  },
  {
    feature: "Scalability",
    custom: "Built to handle your specific growth and traffic patterns.",
    offTheShelf: "May have rate limits or performance bottlenecks.",
  },
  {
    feature: "Cost Structure",
    custom: "One-time development cost, no recurring fees.",
    offTheShelf: "Ongoing subscription fees that can grow.",
  },
];
const approachData = [
  {
    title: "Analysis & Strategy",
    description:
      "We meticulously analyze your systems and goals to map out the perfect integration plan.",
  },
  {
    title: "Design & Development",
    description:
      "Our team designs and develops robust, scalable APIs and integration pathways.",
  },
  {
    title: "Testing & Security",
    description:
      "We conduct rigorous testing to ensure seamless functionality and implement top-tier security.",
  },
  {
    title: "Deployment & Monitoring",
    description:
      "After a smooth deployment, we continuously monitor performance to ensure everything runs flawlessly.",
  },
  {
    title: "Optimization & Support",
    description:
      "We provide ongoing support and optimize integrations as your business evolves.",
  },
];

// --- Framer Motion Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Main Page Component ---
const ApiIntegration = () => {
  return (
    <>
      <Seo
        title="API Integration Services | Weblynx Infotech"
        description="We specialize in seamless API integration, connecting systems for automated workflows, enhanced data exchange, and improved business efficiency."
      />
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        <Hero />
        <IntegrationsSection />
        <TechAndIndustriesSection />
        <ComparisonSection />
        <ApproachSection />
        <FinalCta />
      </main>
    </>
  );
};

// --- Page Sections (Broken into Components) ---

const Hero = () => (
  <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
    <div className="absolute inset-0 -z-10 h-full w-full dark:bg-brand-dark bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#e0e1dd,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#00f5d41a,transparent)]" />
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
          className="font-display text-5xl lg:text-6xl font-bold mb-6 text-brand-dark dark:text-white tracking-tighter"
        >
          API Integration Services
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-8 text-brand-light-blue dark:text-brand-gray max-w-xl mx-auto md:mx-0"
        >
          Seamlessly connect your systems, automate workflows, and enhance data
          exchange across your entire digital ecosystem.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <motion.span
              className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
              initial={{ x: "-150%" }}
              whileHover={{ x: "150%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <span className="relative">Connect Your Systems</span>
          </Link>
          {/* Back Button Added Here */}
          <Link
            to="/services"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-brand-light-blue dark:text-brand-gray hover:bg-gray-100 dark:hover:bg-brand-dark-blue/50 rounded-full transition-colors duration-300"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to All Services</span>
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
);

const IntegrationsSection = () => (
  <section className="bg-gray-50 dark:bg-black py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl sm:text-5xl font-bold text-center mb-16 text-brand-dark dark:text-white tracking-tighter"
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
        {typesOfIntegrations.map((item) => {
          const Icon = item.icon;
          return (
            // Hover effect added to this motion.div
            <motion.div
              variants={itemVariants}
              key={item.title}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 rounded-2xl flex flex-col items-start text-left bg-white dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20 shadow-lg cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-brand-accent/10"
            >
              <div className="p-3 rounded-lg bg-brand-accent/20 mb-5 text-brand-accent">
                <Icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-dark dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-brand-light-blue dark:text-brand-gray text-base">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

const TechAndIndustriesSection = () => (
  <section className="py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl font-bold mb-8 text-brand-dark dark:text-white tracking-tighter"
          >
            Core Technologies
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {techStackData.map((tech) => (
              <motion.div
                variants={itemVariants}
                key={tech.name}
                className="flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-brand-dark-blue/50 rounded-lg border border-gray-200 dark:border-brand-light-blue/20"
              >
                <tech.Icon className="w-6 h-6 text-brand-accent" />
                <span className="font-semibold text-brand-dark dark:text-white">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl font-bold mb-8 text-brand-dark dark:text-white tracking-tighter"
          >
            Industries We Serve
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {industriesData.map((industry) => (
              <motion.span
                variants={itemVariants}
                key={industry}
                className="px-4 py-2 rounded-full font-medium bg-gray-100 dark:bg-brand-dark-blue/50 text-brand-light-blue dark:text-brand-gray"
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="bg-gray-50 dark:bg-black py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl sm:text-5xl font-bold text-center mb-16 text-brand-dark dark:text-white tracking-tighter"
      >
        Custom vs. Third-Party
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white dark:bg-brand-dark-blue/30 border-2 border-brand-accent shadow-2xl shadow-brand-accent/10"
        >
          <h3 className="font-display text-2xl font-bold mb-6 text-brand-dark dark:text-white">
            Our Custom Integrations
          </h3>
          <div className="space-y-4">
            {comparisonData.map((row) => (
              <div
                key={row.feature}
                className="p-4 bg-gray-100 dark:bg-brand-dark rounded-lg"
              >
                <p className="font-semibold text-brand-dark dark:text-white">
                  {row.feature}
                </p>
                <p className="flex items-start gap-2 mt-1 text-brand-light-blue dark:text-brand-gray">
                  <FiCheckCircle className="w-5 h-5 mt-1 text-brand-accent flex-shrink-0" />{" "}
                  {row.custom}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20"
        >
          <h3 className="font-display text-2xl font-bold mb-6 text-brand-dark dark:text-white">
            Third-Party Platforms
          </h3>
          <div className="space-y-4">
            {comparisonData.map((row) => (
              <div
                key={row.feature}
                className="p-4 bg-gray-100 dark:bg-brand-dark rounded-lg"
              >
                <p className="font-semibold text-brand-dark dark:text-white">
                  {row.feature}
                </p>
                <p className="flex items-start gap-2 mt-1 text-brand-light-blue dark:text-brand-gray">
                  <FiX className="w-5 h-5 mt-1 text-red-500 flex-shrink-0" />{" "}
                  {row.offTheShelf}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ApproachSection = () => (
  <section className="py-20 sm:py-28 px-6">
    <div className="container mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl sm:text-5xl font-bold text-center mb-20 text-brand-dark dark:text-white tracking-tighter"
      >
        Our Integration Blueprint
      </motion.h2>
      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-4 -bottom-4 w-1 -translate-x-1/2 bg-gray-200 dark:bg-brand-dark-blue"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {approachData.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative flex items-start md:grid md:grid-cols-2 md:gap-10"
            >
              <div className="absolute left-6 top-1 w-12 h-12 -translate-x-1/2 flex items-center justify-center rounded-full bg-gray-100 dark:bg-brand-dark border-4 border-gray-200 dark:border-brand-dark-blue">
                <span className="font-display font-bold text-xl text-brand-accent">
                  {i + 1}
                </span>
              </div>
              <div
                className={`md:col-start-${i % 2 === 0 ? "2" : "1"} ${
                  i % 2 === 0 ? "md:text-left" : "md:text-right"
                } w-full pl-20 md:pl-0 md:pr-0`}
              >
                <h3 className="font-display text-2xl font-bold text-brand-dark dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-brand-light-blue dark:text-brand-gray">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const FinalCta = () => (
  <section className="py-20 sm:py-28 px-6 bg-gray-50 dark:bg-black">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="container mx-auto max-w-3xl text-center"
    >
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white tracking-tighter mb-6">
        Ready to Connect Your Digital Landscape?
      </h2>
      <p className="text-lg text-brand-light-blue dark:text-brand-gray mb-8">
        Let's discuss how seamless API integrations can transform your business
        workflows.
      </p>
      <Link
        to="/contact"
        className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 text-xl font-bold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
      >
        <motion.span
          className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ x: "-150%" }}
          whileHover={{ x: "150%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <span className="relative">Get a Free Consultation</span>
      </Link>
    </motion.div>
  </section>
);

export default ApiIntegration;
