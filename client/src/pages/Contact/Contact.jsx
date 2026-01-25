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
  FiActivity,
  FiTerminal,
  FiShield,
} from "react-icons/fi";

const contactMethods = [
  {
    Icon: FaPhoneAlt,
    title: "VOICE_CHANNEL",
    content: "+91 95183 64400",
    href: "tel:+919518364400",
    label: "Call Weblynx engineering support",
  },
  {
    Icon: FaEnvelope,
    title: "DATA_INBOX",
    content: "weblynxinfotech@gmail.com",
    href: "mailto:weblynxinfotech@gmail.com",
    label: "Send project documentation via email",
  },
  {
    Icon: FaWhatsapp,
    title: "ENCRYPTED_CHAT",
    content: "WhatsApp Dispatch",
    href: `https://wa.me/+919518364400?text=${encodeURIComponent(
      "Hello Weblynx Infotech! I'm interested in discussing a project.",
    )}`,
    label: "Start an encrypted WhatsApp consultation",
  },
];

const Contact = () => {
  const [activeView, setActiveView] = useState("form");

  return (
    <>
      <Seo
        title="Connect | Initialize Your Digital Project"
        description="Launch your digital transformation. Contact Weblynx Infotech for surgical MERN stack development and enterprise software consulting in Pune."
      />
      <main
        id="contact-uplink"
        className="pt-32 pb-20 bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark"
      >
        {/* --- HEADER: Tactical Dossier --- */}
        <header className="container mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-100 dark:border-white/5 pb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="h-[2px] w-12 bg-brand-accent"
                  aria-hidden="true"
                ></span>
                <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                  Project_Initialization
                </span>
              </div>
              <h1 className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase dark:text-white">
                The <br />{" "}
                <span className="text-brand-accent italic font-light">
                  Connect.
                </span>
              </h1>
            </motion.div>

            <div
              className="flex flex-col items-end opacity-20 font-mono text-[10px] uppercase tracking-widest hidden md:flex"
              aria-hidden="true"
            >
              <div className="flex items-center gap-2">
                <FiTerminal /> awaiting_input
              </div>
              <div className="flex items-center gap-2">
                <FiShield /> 256-bit encrypted
              </div>
            </div>
          </div>
        </header>

        <section className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
            {/* --- Sidebar Controller --- */}
            <nav
              className="lg:col-span-4 bg-white dark:bg-brand-dark p-8 md:p-12 flex flex-col justify-between border-r border-gray-100 dark:border-white/5"
              aria-label="Contact protocol selector"
            >
              <div>
                <div className="mb-12">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-30 mb-8 text-center lg:text-left">
                    Select_Protocol
                  </h3>
                  <div className="flex flex-col gap-4" role="tablist">
                    <button
                      role="tab"
                      aria-selected={activeView === "form"}
                      onClick={() => setActiveView("form")}
                      className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-500 uppercase font-bold tracking-widest text-xs
                        ${activeView === "form" ? "bg-brand-accent text-brand-dark shadow-lg shadow-brand-accent/20" : "hover:bg-gray-50 dark:hover:bg-white/5 dark:text-white opacity-40 hover:opacity-100"}`}
                    >
                      <FiMessageSquare aria-hidden="true" /> Transmission
                    </button>
                    <button
                      role="tab"
                      aria-selected={activeView === "direct"}
                      onClick={() => setActiveView("direct")}
                      className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-500 uppercase font-bold tracking-widest text-xs
                        ${activeView === "direct" ? "bg-brand-accent text-brand-dark shadow-lg shadow-brand-accent/20" : "hover:bg-gray-50 dark:hover:bg-white/5 dark:text-white opacity-40 hover:opacity-100"}`}
                    >
                      <FiShare2 aria-hidden="true" /> Direct_Channels
                    </button>
                  </div>
                </div>

                <div
                  className="hidden lg:block space-y-6 opacity-30 mt-20"
                  aria-hidden="true"
                >
                  <p className="text-[10px] font-mono leading-relaxed uppercase tracking-widest border-t border-gray-100 dark:border-white/5 pt-8">
                    Our engineers review all incoming packets within a 24-hour
                    window.
                  </p>
                  <FiActivity className="text-brand-accent animate-pulse" />
                </div>
              </div>
            </nav>

            {/* --- Interaction Field --- */}
            <div className="lg:col-span-8 bg-gray-50/30 dark:bg-brand-dark-blue/10 backdrop-blur-3xl p-8 md:p-20 relative min-h-[600px]">
              <AnimatePresence mode="wait">
                {activeView === "form" ? (
                  <ContactForm key="form" />
                ) : (
                  <DirectChannels key="direct" />
                )}
              </AnimatePresence>
              <FiTerminal
                className="absolute -bottom-20 -right-20 text-[30rem] opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

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
    "Custom Web Apps",
    "Mobile Apps",
    "WordPress Site",
    "SEO Optimization",
    "API Systems",
    "Full Stack",
    "Support & Ops",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Identification required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid gateway.";
    if (!formData.projectType) newErrors.projectType = "Specify system.";
    if (formData.message.trim().length < 10)
      newErrors.message = "Min 10 characters.";
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
        formData,
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
        form: err.response?.data?.message || "Network link failure.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      role="tabpanel"
    >
      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormInput
            id="name"
            name="name"
            label="OPERATOR_NAME"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="John Doe"
            required
          />
          <FormInput
            id="email"
            name="email"
            label="COMM_GATEWAY"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="john@example.com"
            type="email"
            required
          />
        </div>
        <FormSelect
          id="projectType"
          name="projectType"
          label="SYSTEM_TARGET"
          value={formData.projectType}
          onChange={handleChange}
          error={errors.projectType}
          options={projectTypes}
          required
        />
        <FormTextarea
          id="message"
          name="message"
          label="OBJECTIVE_DETAILS"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          placeholder="Describe project parameters..."
          required
        />

        <div className="h-8 flex items-center" aria-live="assertive">
          <AnimatePresence>
            {status === "success" && (
              <StatusMessage type="success" message="Transmission Delivered." />
            )}
            {status === "error" && (
              <StatusMessage
                type="error"
                message={
                  Object.values(errors).find((e) => e) || "System Error."
                }
              />
            )}
          </AnimatePresence>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group relative w-full p-6 bg-brand-accent text-brand-dark font-black uppercase tracking-[0.3em] rounded-2xl shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 flex items-center justify-center gap-4 overflow-hidden"
        >
          {status === "submitting" ? (
            <>
              <FiLoader className="animate-spin" /> Uplinking...
            </>
          ) : (
            <>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />{" "}
              Execute Dispatch
            </>
          )}
          <div
            className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            aria-hidden="true"
          />
        </button>
      </form>
    </motion.div>
  );
};

const DirectChannels = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="space-y-6"
    role="tabpanel"
  >
    <div className="flex items-center gap-4 mb-12">
      <div className="w-8 h-[1px] bg-brand-accent" aria-hidden="true"></div>
      <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em]">
        Alternative_Protocols
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contactMethods.map((method) => (
        <ContactMethodCard key={method.title} {...method} />
      ))}
    </div>
  </motion.div>
);

// --- HELPER UI ---
const FormInput = ({ id, name, label, error, ...props }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="block font-mono text-[10px] font-bold text-brand-accent uppercase tracking-widest"
    >
      {label}
    </label>
    <input
      id={id}
      name={name}
      {...props}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`w-full p-4 bg-white dark:bg-brand-dark border rounded-xl transition-all font-light dark:text-white
        ${error ? "border-red-500" : "border-gray-200 dark:border-white/10 focus:border-brand-accent outline-none"}`}
    />
    {error && (
      <span id={`${id}-error`} className="sr-only">
        {error}
      </span>
    )}
  </div>
);

const FormSelect = ({ id, name, label, error, options, ...props }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="block font-mono text-[10px] font-bold text-brand-accent uppercase tracking-widest"
    >
      {label}
    </label>
    <div className="relative">
      <select
        id={id}
        name={name}
        {...props}
        aria-invalid={!!error}
        className={`w-full p-4 bg-white dark:bg-brand-dark border rounded-xl appearance-none transition-all dark:text-white
          ${error ? "border-red-500" : "border-gray-200 dark:border-white/10 focus:border-brand-accent outline-none"}`}
      >
        <option value="">Select_Type</option>
        {options.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const FormTextarea = ({ id, name, label, error, ...props }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="block font-mono text-[10px] font-bold text-brand-accent uppercase tracking-widest"
    >
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      rows="4"
      {...props}
      aria-invalid={!!error}
      className={`w-full p-4 bg-white dark:bg-brand-dark border rounded-xl transition-all resize-none dark:text-white
        ${error ? "border-red-500" : "border-gray-200 dark:border-white/10 focus:border-brand-accent outline-none"}`}
    />
  </div>
);

const StatusMessage = ({ type, message }) => (
  <motion.p
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className={`font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 ${type === "success" ? "text-green-500" : "text-red-500"}`}
  >
    {type === "success" ? <FiCheckCircle /> : <FiAlertTriangle />} {message}
  </motion.p>
);

const ContactMethodCard = ({ Icon, title, content, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ y: -5 }}
    className="p-8 rounded-[2rem] bg-white dark:bg-brand-dark border border-gray-100 dark:border-white/5 hover:border-brand-accent/50 transition-all group overflow-hidden relative"
  >
    <div className="relative z-10">
      <div className="text-brand-accent mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h4 className="font-mono text-[10px] opacity-40 mb-2">{title}</h4>
      <p className="font-bold dark:text-white uppercase tracking-tighter text-xl">
        {content}
      </p>
    </div>
    <Icon
      className="absolute -bottom-4 -right-4 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity"
      size={120}
      aria-hidden="true"
    />
  </motion.a>
);

export default Contact;
