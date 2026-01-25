// client/src/pages/Services/ApiIntegration.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiArrowLeft,
  FiZap,
  FiActivity,
  FiMaximize,
  FiGlobe,
  FiLock,
  FiCpu,
  FiRepeat,
  FiCheckCircle,
  FiShuffle,
  FiCode,
  FiShoppingCart,
  FiCreditCard,
  FiRefreshCw,
  FiClock,
  FiCalendar,
  FiGift,
  FiTrendingUp,
  FiLayers,
  FiSettings,
} from "react-icons/fi";
import { FaNodeJs, FaAws, FaStripe, FaGoogle } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";

// --- Data Models ---
const typesOfIntegrations = [
  {
    id: "01",
    icon: FiShoppingCart,
    title: "E-commerce APIs",
    desc: "Headless commerce sync for Shopify, WooCommerce, and custom MERN stores.",
    span: "md:col-span-8",
  },
  {
    id: "02",
    icon: FiCreditCard,
    title: "Payments",
    desc: "Hardened Stripe & Razorpay gateways.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    icon: FaGoogle,
    title: "Google Stack",
    desc: "Maps, Analytics, and Auth integration.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    icon: FiCpu,
    title: "CRM / ERP",
    desc: "Salesforce & SAP real-time data bridges.",
    span: "md:col-span-8",
  },
];

const comparisonData = [
  {
    feature: "Customization",
    custom: "Perfectly tailored to your business logic.",
    offTheShelf: "Limited to provider's fixed rules.",
  },
  {
    feature: "Data Control",
    custom: "You own the entire data pipeline.",
    offTheShelf: "Data lives in third-party black boxes.",
  },
  {
    feature: "Scalability",
    custom: "Built for your specific traffic spikes.",
    offTheShelf: "Subject to external rate limits.",
  },
  {
    feature: "Cost",
    custom: "One-time dev cost, long-term ROI.",
    offTheShelf: "Lifetime monthly subscription tax.",
  },
];

const roadmap = [
  {
    title: "Discovery",
    desc: "Mapping system architecture and data endpoints.",
  },
  {
    title: "Protocol Design",
    desc: "Defining REST/GraphQL schemas and security.",
  },
  { title: "Hardening", desc: "Encryption and stress-testing the bridge." },
  { title: "Sync", desc: "Live deployment with real-time logging." },
];

const questions = [
  {
    question: "What is your primary project goal?",
    key: "goal",
    answers: [
      { text: "Launch a new business", key: "new_business", icon: FiGift },
      {
        text: "Grow existing business",
        key: "grow_business",
        icon: FiTrendingUp,
      },
      { text: "Sell products online", key: "ecommerce", icon: FiShoppingCart },
    ],
  },
  {
    question: "How quickly do you need results?",
    key: "speed",
    answers: [
      { text: "ASAP (1-3 months)", key: "fast", icon: FiZap },
      { text: "Standard (3-6 months)", key: "medium", icon: FiClock },
      { text: "Long-term (6+ months)", key: "long_term", icon: FiCalendar },
    ],
  },
];

const resultMapping = {
  ecommerce: {
    title: "Commerce Accelerator",
    desc: "MERN-based scale for high-volume sales.",
    link: "/services/ecommerce-development",
  },
  new_business_fast: {
    title: "Startup Launchpad",
    desc: "Rapid MVP deployment for market validation.",
    link: "/packages",
  },
  default: {
    title: "Custom Blueprint",
    desc: "Bespoke technical strategy for unique needs.",
    link: "/contact",
  },
};

const ApiIntegration = () => {
  return (
    <>
      <Seo
        title="API Orchestration | Weblynx"
        description="Surgical system connectivity."
      />

      <main className="bg-white dark:bg-brand-dark min-h-screen text-brand-dark dark:text-white selection:bg-brand-accent selection:text-brand-dark">
        {/* --- HERO SECTION WITH CODE-BASED ANIMATION --- */}
        <section className="pt-32 pb-20 px-6 border-b border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="container mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all mb-16"
            >
              <FiArrowLeft /> Back to Arsenal
            </Link>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-brand-accent font-mono text-sm tracking-[0.2em] mb-4 block uppercase">
                  Protocol: Bridge_v2.0
                </span>
                <h1 className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
                  API <br /> <span className="text-brand-accent">Bridges</span>
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-60 max-w-lg leading-relaxed">
                  We architect the invisible nervous system of modern business.
                  Robust. Encrypted. Fully Automated.
                </p>
                <div className="mt-12 flex gap-4">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-brand-accent text-brand-dark font-black rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-transform"
                  >
                    Initialize Link
                  </Link>
                </div>
              </motion.div>

              {/* THE REPLACEMENT ANIMATION (No Lottie Required) */}
              <div className="relative h-[400px] flex items-center justify-center">
                <DataPulseAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* --- THE BLUEPRINT GRID --- */}
        <section className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            {typesOfIntegrations.map((item) => (
              <div
                key={item.id}
                className={`${item.span} bg-white dark:bg-brand-dark p-12 group hover:bg-brand-dark-blue/10 transition-all duration-500 relative overflow-hidden`}
              >
                <div className="flex justify-between items-start mb-16 relative z-10">
                  <span className="text-xs font-mono opacity-20">
                    [{item.id}]
                  </span>
                  <item.icon
                    className="text-brand-accent opacity-30 group-hover:opacity-100 transition-all duration-500"
                    size={32}
                  />
                </div>
                <h3 className="text-3xl font-bold tracking-tighter mb-4 uppercase relative z-10">
                  {item.title}
                </h3>
                <p className="text-lg opacity-50 leading-tight max-w-xs relative z-10">
                  {item.desc}
                </p>
                <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                  <item.icon size={250} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section className="py-32 px-6 bg-gray-50 dark:bg-black/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-20 text-center uppercase">
              Custom vs Generic
            </h2>
            <div className="border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-3xl">
              <div className="grid grid-cols-3 bg-gray-100 dark:bg-white/5 p-8 border-b border-gray-200 dark:border-white/10">
                <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                  Parameter
                </div>
                <div className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                  Weblynx Core
                </div>
                <div className="font-mono text-[10px] opacity-40 uppercase text-right tracking-widest">
                  Legacy Provider
                </div>
              </div>
              {comparisonData.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 p-8 border-b border-gray-100 dark:border-white/5 last:border-0 hover:bg-brand-accent/5 transition-colors"
                >
                  <div className="font-bold text-lg uppercase tracking-tighter">
                    {row.feature}
                  </div>
                  <div className="text-brand-accent font-medium pr-4">
                    {row.custom}
                  </div>
                  <div className="opacity-40 text-right italic text-sm">
                    {row.offTheShelf}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS ROADMAP --- */}
        <section className="py-40 container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20">
            <div className="md:sticky top-40 max-w-sm">
              <h2 className="text-6xl font-black tracking-tighter uppercase mb-6 leading-[0.8]">
                The <br /> <span className="text-brand-accent">Protocol</span>
              </h2>
              <p className="opacity-50 text-lg">
                A surgical integration roadmap ensuring zero data latency.
              </p>
            </div>
            <div className="flex-grow space-y-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5">
              {roadmap.map((step, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-brand-dark p-12 flex gap-10 items-start hover:bg-brand-accent/5 transition-all"
                >
                  <span className="text-5xl font-black text-brand-accent opacity-10">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="text-2xl font-bold uppercase mb-2">
                      {step.title}
                    </h4>
                    <p className="opacity-50 max-w-md leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INTERACTIVE QUIZ SECTION --- */}
        <section className="py-40 bg-brand-dark text-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <QuizSection />
          </div>
        </section>

        {/* --- FINAL CALL TO ACTION --- */}
        <section className="py-40 px-6 text-center">
          <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase mb-12 leading-[0.8]">
            Sync <br /> <span className="text-brand-accent italic">Now.</span>
          </h2>
          <Link
            to="/contact"
            className="px-16 py-8 bg-brand-accent text-brand-dark font-black text-2xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-4 uppercase tracking-tighter"
          >
            Initialize Link <FiMaximize />
          </Link>
        </section>
      </main>
    </>
  );
};

// --- CUSTOM ANIMATION COMPONENT (REPLACES LOTTIE) ---
const DataPulseAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-64 h-64 border border-brand-accent/20 rounded-full animate-ping" />
    <div className="absolute w-48 h-48 border border-brand-accent/40 rounded-full" />
    <div className="relative z-10 grid grid-cols-2 gap-12">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="p-6 bg-brand-dark border border-brand-accent/50 rounded-2xl shadow-2xl shadow-brand-accent/20"
      >
        <FiCpu className="text-brand-accent text-4xl" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
        className="p-6 bg-brand-dark border border-white/20 rounded-2xl shadow-2xl"
      >
        <FiGlobe className="text-white text-4xl" />
      </motion.div>
      <div className="col-span-2 flex justify-center">
        <div className="w-full h-[2px] bg-gradient-to-r from-brand-accent via-white to-brand-accent relative overflow-hidden">
          <motion.div
            animate={{ x: [-100, 400] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 bottom-0 w-20 bg-brand-accent blur-sm"
          />
        </div>
      </div>
    </div>
  </div>
);

// --- QUIZ COMPONENT ---
const QuizSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleChoice = (key) => {
    const updatedAnswers = { ...answers, [questions[step].key]: key };
    setAnswers(updatedAnswers);
    if (step < questions.length - 1) setStep(step + 1);
    else {
      const { goal } = updatedAnswers;
      let final =
        goal === "ecommerce"
          ? "ecommerce"
          : goal === "new_business"
            ? "new_business_fast"
            : "default";
      setResult(resultMapping[final]);
    }
  };

  return (
    <div className="relative border border-white/10 p-12 md:p-24 rounded-[4rem] bg-brand-dark-blue/20 backdrop-blur-3xl overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <FiActivity size={100} />
      </div>
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-4xl md:text-7xl font-bold tracking-tighter mb-16 text-center uppercase">
              {questions[step].question}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {questions[step].answers.map((ans) => (
                <button
                  key={ans.key}
                  onClick={() => handleChoice(ans.key)}
                  className="group p-10 border border-white/10 bg-white/5 rounded-[2.5rem] hover:bg-brand-accent hover:text-brand-dark transition-all text-left"
                >
                  <ans.icon
                    size={32}
                    className="mb-6 group-hover:scale-110 transition-transform text-brand-accent group-hover:text-brand-dark"
                  />
                  <span className="text-2xl font-black uppercase block tracking-tighter">
                    {ans.text}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <span className="text-brand-accent font-mono uppercase tracking-[0.3em] mb-4 block">
              Recommended Config
            </span>
            <h3 className="text-6xl md:text-9xl font-black uppercase italic mb-8 tracking-tighter">
              {result.title}
            </h3>
            <p className="text-xl opacity-60 max-w-xl mx-auto mb-12 leading-relaxed">
              {result.desc}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link
                to={result.link}
                className="px-12 py-5 bg-white text-brand-dark font-black rounded-full uppercase tracking-widest text-sm"
              >
                Access Strategy
              </Link>
              <button
                onClick={() => {
                  setStep(0);
                  setResult(null);
                }}
                className="px-12 py-5 border border-white/20 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-dark transition-all"
              >
                Restart
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApiIntegration;
