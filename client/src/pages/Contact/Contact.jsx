// client/src/pages/Contact/Contact.jsx
import React, { useState } from "react";
import axios from "axios";
import { useTheme } from "../../context/ThemeContext.jsx";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiAlertTriangle,
  FiLoader,
} from "react-icons/fi";
import Seo from "../../components/common/Seo.jsx";

// --- Framer Motion Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
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
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.projectType)
      newErrors.projectType = "Please select a project type.";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        formData
      );
      if (response.data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus("error");
        setErrors({
          form: response.data.message || "Submission failed. Please try again.",
        });
      }
    } catch (err) {
      console.error("Contact form submission error:", err);
      setStatus("error");
      setErrors({
        form:
          err.response?.data?.message ||
          "Network error or server issue. Please try again later.",
      });
    }
  };

  const whatsappNumber = "+919518364400";
  const whatsappMessage = encodeURIComponent(
    "Hello Weblynx Infotech! I saw your website and I'm interested in discussing a project."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const contactMethods = [
    {
      Icon: FaPhoneAlt,
      title: "Call Us",
      content: "+91 95183 64400",
      href: "tel:+919518364400",
      aria: "Call Weblynx Infotech",
    },
    {
      Icon: FaEnvelope,
      title: "Email Us",
      content: "weblynxinfotech@gmail.com",
      href: "mailto:weblynxinfotech@gmail.com",
      aria: "Email Weblynx Infotech",
    },
    {
      Icon: FaWhatsapp,
      title: "WhatsApp Us",
      content: "+91 95183 64400",
      href: whatsappLink,
      aria: "WhatsApp Weblynx Infotech",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-slate-50 text-gray-800"
      } transition-colors duration-300`}
    >
      <Seo
        title="Contact Weblynx Infotech - Get a Free Consultation"
        description="Reach out to Weblynx Infotech for a free consultation. Contact us for custom web applications, mobile app development, SEO, WordPress, API integration, and full-stack solutions. Let's build your vision!"
        keywords="contact Weblynx Infotech, web development consultation, mobile app consultation, SEO quote, WordPress quote, API integration quote, full stack development quote, contact form, WhatsApp Weblynx Infotech, Pune, India"
        ogTitle="Contact Weblynx Infotech: Your Partner for Digital Excellence"
        ogDescription="Connect with Weblynx Infotech today to discuss your digital project and receive a free consultation."
        ogUrl="https://www.weblynxinfotech.com/contact"
        canonical="https://www.weblynxinfotech.com/contact"
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-gray-950 dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]">
          {/* Original Color */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#cce3ff,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f622,transparent)]"></div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto max-w-4xl text-center"
        >
          {/* Original Color */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-purple-400 dark:to-cyan-400"
          >
            Let's Build Your Vision
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto"
          >
            Ready to turn your ideas into reality? We're excited to hear from
            you. Fill out the form below or connect with us directly.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content: Form + Contact Info */}
      <section className="py-10 sm:py-16 px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-12"
        >
          {/* Left Side: Form */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8"
          >
            {/* Original Color */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-600 dark:text-purple-400">
              Get a Free Consultation
            </h2>
            <p className="text-base mb-8 opacity-70">
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  {/* Original Color */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 ${
                      isDark
                        ? "bg-gray-800 border-gray-700"
                        : "bg-gray-50 border-gray-300"
                    } ${
                      errors.name
                        ? "border-red-500 ring-red-500"
                        : "focus:ring-blue-500 dark:focus:ring-purple-500"
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Email
                  </label>
                  {/* Original Color */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 ${
                      isDark
                        ? "bg-gray-800 border-gray-700"
                        : "bg-gray-50 border-gray-300"
                    } ${
                      errors.email
                        ? "border-red-500 ring-red-500"
                        : "focus:ring-blue-500 dark:focus:ring-purple-500"
                    }`}
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium"
                >
                  Type of Project
                </label>
                {/* Original Color */}
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg appearance-none focus:ring-2 ${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-gray-50 border-gray-300"
                  } ${
                    errors.projectType
                      ? "border-red-500 ring-red-500"
                      : "focus:ring-blue-500 dark:focus:ring-purple-500"
                  }`}
                >
                  <option value="">Select a service...</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message
                </label>
                {/* Original Color */}
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 ${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-gray-50 border-gray-300"
                  } ${
                    errors.message
                      ? "border-red-500 ring-red-500"
                      : "focus:ring-blue-500 dark:focus:ring-purple-500"
                  }`}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="h-6">
                <AnimatePresence>
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center text-green-600 dark:text-green-400 font-semibold flex items-center justify-center gap-2"
                    >
                      <FiCheckCircle /> Message sent successfully!
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center text-red-500 dark:text-red-400 font-semibold flex items-center justify-center gap-2"
                    >
                      <FiAlertTriangle />{" "}
                      {Object.values(errors).find((e) => e) ||
                        "An error occurred. Please try again."}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Original Color */}
              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  isDark
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
              >
                {status === "submitting" ? (
                  <>
                    <FiLoader className="animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Inquiry"
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Contact Info */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-bold">Or Connect Directly</h3>
            {contactMethods.map((method) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                // HOVER FIX: Changed hover background for light mode
                className={`p-6 rounded-2xl flex items-center gap-6 group transition-all duration-300 ${
                  isDark
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-white hover:bg-blue-600 shadow-lg"
                }`}
              >
                {/* HOVER FIX: Icon wrapper is now transparent on hover, and icon itself turns white */}
                <div
                  className={`p-4 rounded-lg transition-colors duration-300 ${
                    isDark
                      ? "bg-gray-800 group-hover:bg-purple-500 text-purple-400"
                      : "bg-blue-100 text-blue-600 group-hover:bg-transparent"
                  }`}
                >
                  <method.Icon
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isDark
                        ? "group-hover:text-white"
                        : "group-hover:text-white"
                    }`}
                  />
                </div>
                <div>
                  {/* HOVER FIX: Added group-hover text color change for light mode */}
                  <h4
                    className={`font-bold text-lg transition-colors duration-300 ${
                      isDark ? "" : "text-gray-800 group-hover:text-white"
                    }`}
                  >
                    {method.title}
                  </h4>
                  {/* HOVER FIX: Added group-hover text color change for light mode */}
                  <p
                    className={`opacity-70 transition-colors duration-300 ${
                      isDark ? "" : "text-gray-600 group-hover:text-blue-100"
                    }`}
                  >
                    {method.content}
                  </p>
                </div>
                {/* HOVER FIX: Added group-hover text color change for light mode */}
                <FiArrowRight
                  className={`ml-auto w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark
                      ? "text-gray-600"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
