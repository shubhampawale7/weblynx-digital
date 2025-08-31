// client/src/pages/Contact/Contact.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import {
  FiArrowRight,
  FiCheckCircle,
  FiAlertTriangle,
  FiLoader,
  FiMessageSquare,
  FiShare2,
} from "react-icons/fi";

// --- Framer Motion Variants (Moved to top level for global scope within the file) ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const contactMethods = [
  {
    Icon: FaPhoneAlt,
    title: "Call Us",
    content: "+91 95183 64400",
    href: "tel:+919518364400",
  },
  {
    Icon: FaEnvelope,
    title: "Email Us",
    content: "weblynxinfotech@gmail.com",
    href: "mailto:weblynxinfotech@gmail.com",
  },
  {
    Icon: FaWhatsapp,
    title: "WhatsApp Us",
    content: "+91 95183 64400",
    href: `https://wa.me/+919518364400?text=${encodeURIComponent(
      "Hello Weblynx Infotech! I'm interested in discussing a project."
    )}`,
  },
];

const Contact = () => {
  const [activeView, setActiveView] = useState("form");

  return (
    <>
      <Seo
        title="Contact Weblynx Infotech - Get a Free Consultation"
        description="Reach out to Weblynx Infotech for a free consultation. Contact us for custom web applications, mobile app development, SEO, WordPress, and more."
      />
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        <header className="py-20 sm:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container mx-auto px-6"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-brand-dark dark:text-white tracking-tighter">
              Let's Build Your Vision
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-brand-light-blue dark:text-brand-gray">
              Ready to turn your ideas into reality? We're excited to hear from
              you. Choose your preferred method to connect below.
            </p>
          </motion.div>
        </header>

        <section className="container mx-auto px-6 pb-20 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative max-w-4xl mx-auto p-8 rounded-2xl bg-white/80 dark:bg-brand-dark-blue/40 backdrop-blur-md border border-gray-200 dark:border-brand-light-blue/20 shadow-2xl"
          >
            <div className="flex justify-center border-b border-gray-200 dark:border-brand-light-blue/20 mb-8">
              <TabButton
                title="Send a Message"
                icon={FiMessageSquare}
                isActive={activeView === "form"}
                onClick={() => setActiveView("form")}
              />
              <TabButton
                title="Direct Channels"
                icon={FiShare2}
                isActive={activeView === "direct"}
                onClick={() => setActiveView("direct")}
              />
            </div>

            <AnimatePresence mode="wait">
              {activeView === "form" && <ContactForm key="form" />}
              {activeView === "direct" && <DirectChannels key="direct" />}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>
    </>
  );
};

const TabButton = ({ title, icon: Icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className="relative w-1/2 flex items-center justify-center gap-3 pb-4 font-display font-semibold transition-colors"
  >
    <Icon
      className={`w-5 h-5 ${
        isActive
          ? "text-brand-accent"
          : "text-brand-light-blue dark:text-brand-gray"
      }`}
    />
    <span
      className={
        isActive
          ? "text-brand-dark dark:text-white"
          : "text-brand-light-blue dark:text-brand-gray"
      }
    >
      {title}
    </span>
    {isActive && (
      <motion.div
        layoutId="contact-hub-indicator"
        className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-brand-accent"
      />
    )}
  </button>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const projectTypes = [
    "Custom Web Applications",
    "Mobile App Development",
    "WordPress Site Creation",
    "SEO Optimization",
    "API Integration",
    "Full Stack Development",
    "Support & Management Services",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email address is invalid.";
    if (!formData.projectType)
      newErrors.projectType = "Please select a project type.";
    if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters long.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    if (!validateForm()) {
      setStatus("error");
      return;
    }
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        formData
      );
      if (res.data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus("error");
        setErrors({ form: res.data.message || "Submission failed." });
      }
    } catch (err) {
      setStatus("error");
      setErrors({
        form: err.response?.data?.message || "A network error occurred.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            id="name"
            name="name"
            label="Your Name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="John Doe"
          />
          <FormInput
            id="email"
            name="email"
            label="Your Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="john.doe@example.com"
            type="email"
          />
        </div>
        <FormSelect
          id="projectType"
          name="projectType"
          label="Type of Project"
          value={formData.projectType}
          onChange={handleChange}
          error={errors.projectType}
          options={projectTypes}
        />
        <FormTextarea
          id="message"
          name="message"
          label="Your Message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          placeholder="Tell us about your project..."
        />

        <div className="h-6">
          <AnimatePresence>
            {status === "success" && (
              <StatusMessage
                type="success"
                message="Message sent successfully!"
              />
            )}
            {status === "error" && (
              <StatusMessage
                type="error"
                message={
                  Object.values(errors).find((e) => e) || "An error occurred."
                }
              />
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type="submit"
          disabled={status === "submitting"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold text-brand-dark bg-brand-accent rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50"
        >
          <motion.span
            className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
            initial={{ x: "-150%" }}
            whileHover={{ x: "150%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <span className="relative flex items-center justify-center gap-2">
            {status === "submitting" ? (
              <>
                <FiLoader className="animate-spin" /> Sending...
              </>
            ) : (
              "Send Inquiry"
            )}
          </span>
        </motion.button>
      </form>
    </motion.div>
  );
};

const DirectChannels = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }}
    exit={{ opacity: 0, y: -20 }}
  >
    <p className="text-center text-brand-light-blue dark:text-brand-gray mb-8">
      Prefer a more direct approach? Reach out to us through any of these
      channels.
    </p>
    <div className="space-y-6">
      {contactMethods.map((method) => (
        <ContactMethodCard key={method.title} {...method} />
      ))}
    </div>
  </motion.div>
);

// --- Reusable Form & Card Components ---
const FormInput = ({ id, name, label, error, ...props }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-brand-dark dark:text-brand-gray"
    >
      {label}
    </label>
    <input
      id={id}
      name={name}
      {...props}
      className={`w-full p-3 border rounded-lg focus:ring-2 transition-colors bg-white/50 dark:bg-brand-dark-blue/50 ${
        error
          ? "border-red-500 ring-red-500"
          : "border-gray-200 dark:border-brand-light-blue/20 focus:ring-brand-accent focus:border-brand-accent"
      }`}
    />
  </div>
);
const FormSelect = ({ id, name, label, error, options, ...props }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-brand-dark dark:text-brand-gray"
    >
      {label}
    </label>
    <select
      id={id}
      name={name}
      {...props}
      className={`w-full p-3 border rounded-lg appearance-none focus:ring-2 transition-colors bg-white/50 dark:bg-brand-dark-blue/50 ${
        error
          ? "border-red-500 ring-red-500"
          : "border-gray-200 dark:border-brand-light-blue/20 focus:ring-brand-accent focus:border-brand-accent"
      }`}
    >
      <option value="">Select a service...</option>
      {options.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  </div>
);
const FormTextarea = ({ id, name, label, error, ...props }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-brand-dark dark:text-brand-gray"
    >
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      rows="5"
      {...props}
      className={`w-full p-3 border rounded-lg focus:ring-2 transition-colors bg-white/50 dark:bg-brand-dark-blue/50 resize-none ${
        error
          ? "border-red-500 ring-red-500"
          : "border-gray-200 dark:border-brand-light-blue/20 focus:ring-brand-accent focus:border-brand-accent"
      }`}
    ></textarea>
  </div>
);
const StatusMessage = ({ type, message }) => (
  <motion.p
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className={`text-center font-semibold flex items-center justify-center gap-2 ${
      type === "success"
        ? "text-green-600 dark:text-green-400"
        : "text-red-500 dark:text-red-400"
    }`}
  >
    {type === "success" ? <FiCheckCircle /> : <FiAlertTriangle />} {message}
  </motion.p>
);
const ContactMethodCard = ({ Icon, title, content, href }) => (
  <motion.a
    href={href}
    target={href.startsWith("http") ? "_blank" : "_self"}
    rel="noopener noreferrer"
    variants={itemVariants}
    whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
    className="p-6 rounded-2xl flex items-center gap-6 group transition-all duration-300 bg-gray-50 dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20 hover:border-brand-accent hover:shadow-lg"
  >
    <div className="p-4 rounded-lg bg-brand-accent/20 text-brand-accent">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-display font-bold text-lg text-brand-dark dark:text-white">
        {title}
      </h4>
      <p className="text-brand-light-blue dark:text-brand-gray">{content}</p>
    </div>
    <FiArrowRight className="ml-auto w-6 h-6 text-brand-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.a>
);

export default Contact;
