// client/src/pages/Services/Services.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiTrendingUp,
  FiLink,
  FiLayers,
  FiSettings,
  FiArrowRight,
  FiRefreshCw,
  FiZap,
  FiShoppingCart,
  FiClock,
  FiCalendar,
  FiGift,
  FiChevronRight,
  FiShield,
  FiActivity,
} from "react-icons/fi";

// --- Service Data (Updated with Support & Management) ---
const services = [
  {
    id: "custom-web-applications",
    title: "Custom Web Apps",
    Icon: FiCode,
    tags: ["MERN", "Scalable", "Secure"],
    desc: "Bespoke engines built for high-performance business logic and complex workflows.",
    colSpan: "md:col-span-8",
    bg: "bg-blue-500/5",
    accent: "text-blue-500",
  },
  {
    id: "mobile-app-development",
    title: "Mobile Apps",
    Icon: FiSmartphone,
    tags: ["iOS", "Android"],
    desc: "Seamless native and cross-platform mobile experiences.",
    colSpan: "md:col-span-4",
    bg: "bg-purple-500/5",
    accent: "text-purple-500",
  },
  {
    id: "api-integration",
    title: "API Systems",
    Icon: FiLink,
    tags: ["REST", "Webhooks"],
    desc: "Connecting your ecosystem with surgical precision and automated data flow.",
    colSpan: "md:col-span-4",
    bg: "bg-emerald-500/5",
    accent: "text-emerald-500",
  },
  {
    id: "full-stack-development",
    title: "Full Stack Dev",
    Icon: FiLayers,
    tags: ["End-to-End", "DevOps"],
    desc: "Frontend mastery meets Backend stability for cohesive digital products.",
    colSpan: "md:col-span-8",
    bg: "bg-brand-accent/5",
    accent: "text-brand-accent",
  },
  {
    id: "seo-optimization",
    title: "SEO & Growth",
    Icon: FiTrendingUp,
    tags: ["Analytics", "Ranking"],
    desc: "Data-driven visibility strategies that convert visitors into customers.",
    colSpan: "md:col-span-6",
    bg: "bg-orange-500/5",
    accent: "text-orange-500",
  },
  {
    id: "wordpress-site-creation",
    title: "WordPress CMS",
    Icon: FiPenTool,
    tags: ["Custom Themes"],
    desc: "Elegant, manageable, and lightning-fast WordPress solutions.",
    colSpan: "md:col-span-6",
    bg: "bg-red-500/5",
    accent: "text-red-500",
  },
  {
    id: "support-management-services",
    title: "Support & Ops",
    Icon: FiSettings,
    tags: ["24/7 Monitoring", "Security"],
    desc: "Proactive maintenance and system vigilance to ensure zero downtime.",
    colSpan: "md:col-span-12", // Full width to act as a "Managed Services" anchor
    bg: "bg-gray-500/5",
    accent: "text-gray-400",
  },
];

// --- Quiz Logic Data ---
const questions = [
  {
    id: 1,
    question: "What is your primary objective?",
    key: "goal",
    answers: [
      {
        text: "Launch New Venture",
        key: "new_business",
        icon: FiGift,
        sub: "I'm starting from scratch.",
      },
      {
        text: "Scale Operations",
        key: "grow_business",
        icon: FiTrendingUp,
        sub: "I need better infrastructure.",
      },
      {
        text: "Digital Commerce",
        key: "ecommerce",
        icon: FiShoppingCart,
        sub: "I want to sell online.",
      },
    ],
  },
  {
    id: 2,
    question: "What's the desired timeline?",
    key: "speed",
    answers: [
      {
        text: "MVP Sprint",
        key: "fast",
        icon: FiZap,
        sub: "1-3 months launch.",
      },
      {
        text: "Balanced Build",
        key: "medium",
        icon: FiClock,
        sub: "3-6 months delivery.",
      },
      {
        text: "Strategic Growth",
        key: "long_term",
        icon: FiCalendar,
        sub: "Long-term partnership.",
      },
    ],
  },
];

const resultMapping = {
  ecommerce: {
    title: "Commerce Accelerator",
    description:
      "A high-conversion MERN architecture designed for Stripe payments and massive product scaling.",
    link: "/services/ecommerce-development",
    icon: FiShoppingCart,
    color: "bg-emerald-500",
  },
  new_business_fast: {
    title: "Startup Launchpad",
    description:
      "Our rapid-deployment framework to get your MVP live and collecting data within 90 days.",
    link: "/packages",
    icon: FiZap,
    color: "bg-brand-accent",
  },
  grow_business_medium: {
    title: "Enterprise Engine",
    description:
      "Deep-stack infrastructure optimized for security, reliability, and complex data management.",
    link: "/services/full-stack-development",
    icon: FiTrendingUp,
    color: "bg-blue-600",
  },
  default: {
    title: "Bespoke Strategy",
    description:
      "Your vision requires a surgical approach. Let's design a custom technical blueprint.",
    link: "/contact",
    icon: FiSettings,
    color: "bg-purple-600",
  },
};

const Services = () => {
  return (
    <>
      <Seo
        title="Services | Weblynx Infotech"
        description="High-end MERN development and digital strategy."
      />

      <main className="bg-white dark:bg-brand-dark min-h-screen">
        {/* --- HERO --- */}
        <section className="container mx-auto px-6 pt-32 pb-20 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[150px] rounded-full -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[12vw] md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase dark:text-white">
              The <br /> <span className="text-brand-accent">Arsenal</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl font-light dark:text-brand-gray max-w-2xl">
              Specialized technical capabilities engineered to solve complex
              business challenges.
            </p>
          </motion.div>
        </section>

        {/* --- BENTO GRID --- */}
        <section className="container mx-auto px-6 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service, i) => (
              <ServiceBlock key={service.id} service={service} index={i} />
            ))}
          </div>
        </section>

        {/* --- PROJECT MATCHING SECTION --- */}
        <ProjectMatchingSection />

        {/* --- FOOTER CTA --- */}
        <section className="py-40 bg-gray-50 dark:bg-black/20 text-center">
          <h2 className="text-5xl md:text-8xl font-bold dark:text-white tracking-tighter mb-10">
            Ready to <span className="text-brand-accent">Execute?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-brand-accent text-brand-dark font-black text-xl rounded-full hover:scale-105 transition-transform"
          >
            Deploy Now <FiArrowRight />
          </Link>
        </section>
      </main>
    </>
  );
};

// --- ServiceBlock Component ---
const ServiceBlock = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className={`${service.colSpan} relative min-h-[400px] p-12 rounded-[3.5rem] overflow-hidden flex flex-col justify-between border border-gray-100 dark:border-white/5 ${service.bg} dark:bg-brand-dark-blue/20 backdrop-blur-3xl transition-all duration-500 group`}
  >
    <div className="flex justify-between items-start">
      <div
        className={`p-6 rounded-2xl bg-white dark:bg-brand-dark shadow-xl ${service.accent} group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-500`}
      >
        <service.Icon size={32} />
      </div>
      <div className="flex flex-wrap justify-end gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono font-black uppercase tracking-widest opacity-40 dark:text-white/60 px-3 py-1 rounded-full border border-current"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-12">
      <h3 className="text-4xl md:text-5xl font-bold dark:text-white tracking-tighter mb-4">
        {service.title}
      </h3>
      <p className="text-lg dark:text-brand-gray leading-tight max-w-sm mb-8">
        {service.desc}
      </p>
      <Link
        to={`/services/${service.id}`}
        className="text-brand-accent font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
      >
        Explore Capabilities <FiChevronRight />
      </Link>
    </div>

    {/* Background Decorative Icon */}
    <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none">
      <service.Icon size={300} />
    </div>
  </motion.div>
);

// --- PROJECT MATCHING SECTION ---
const ProjectMatchingSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleChoice = (key) => {
    const currentKey = questions[step].key;
    const updatedAnswers = { ...answers, [currentKey]: key };
    setAnswers(updatedAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const { goal, speed } = updatedAnswers;
      let finalKey = "default";
      if (goal === "ecommerce") finalKey = "ecommerce";
      else if (goal === "new_business" && speed === "fast")
        finalKey = "new_business_fast";
      else if (goal === "grow_business" && speed === "medium")
        finalKey = "grow_business_medium";

      setResult(resultMapping[finalKey]);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <section className="py-32 bg-brand-dark overflow-hidden relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-brand-dark-blue/30 rounded-[4rem] border border-white/5 p-8 md:p-20 relative backdrop-blur-xl">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <div className="flex gap-2 mb-12 justify-center">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-12 rounded-full transition-all duration-500 ${i <= step ? "bg-brand-accent shadow-[0_0_10px_rgba(0,245,212,0.5)]" : "bg-white/10"}`}
                    />
                  ))}
                </div>

                <h2 className="text-4xl md:text-7xl font-bold text-white text-center tracking-tighter mb-16 leading-none">
                  {questions[step].question}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {questions[step].answers.map((ans) => (
                    <button
                      key={ans.key}
                      onClick={() => handleChoice(ans.key)}
                      className="group relative p-8 bg-white/5 border border-white/5 rounded-[2.5rem] hover:bg-white/10 hover:border-brand-accent/50 transition-all text-left"
                    >
                      <ans.icon className="text-3xl text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {ans.text}
                      </h4>
                      <p className="text-sm text-brand-gray opacity-60 leading-relaxed">
                        {ans.sub}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div
                  className={`inline-flex p-8 rounded-[2rem] ${result.color} text-brand-dark mb-8 shadow-2xl`}
                >
                  <result.icon size={54} />
                </div>
                <h3 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter mb-6 uppercase italic leading-none">
                  Matched.
                </h3>
                <h4 className="text-3xl md:text-5xl font-bold text-brand-accent mb-8 tracking-tight">
                  {result.title}
                </h4>
                <p className="text-xl text-brand-gray max-w-xl mx-auto mb-12 font-light leading-relaxed">
                  {result.description}
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                  <Link
                    to={result.link}
                    className="px-12 py-6 bg-white text-brand-dark font-black rounded-full text-xl hover:scale-105 transition-transform flex items-center gap-3 shadow-xl"
                  >
                    View Strategy <FiArrowRight />
                  </Link>
                  <button
                    onClick={reset}
                    className="text-brand-gray/50 hover:text-brand-accent flex items-center gap-2 font-mono uppercase tracking-widest text-xs transition-colors"
                  >
                    <FiRefreshCw /> Run Again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
