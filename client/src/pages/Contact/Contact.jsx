// client/src/pages/Contact/Contact.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useTheme } from "../../context/ThemeContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Import icons
import { motion } from "framer-motion"; // Import motion for advanced hovers

import Seo from "../../components/common/Seo.jsx";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Refs for animation - ALL DECLARED HERE AT THE TOP
  const sectionRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const introTextRef = useRef(null);

  const formSectionHeadingRef = useRef(null);
  const contactQuoteRef = useRef(null);
  const formRef = useRef(null); // Ref for the main form element

  const connectMethodsHeadingRef = useRef(null);
  const contactCardRefs = useRef([]); // Array for contact method cards

  // These are the refs that were potentially causing the "not defined" error:
  const finalCtaHeadingRef = useRef(null);
  const finalCtaTextRef = useRef(null);
  const finalCtaButtonRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
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

  // WhatsApp Pre-loaded Message and Link
  const whatsappNumber = "+919518364400";
  const whatsappMessage = encodeURIComponent(
    "Hello Weblynx! I saw your website and I'm interested in discussing a project. Can we chat?"
  );
  const whatsappLink = `https://wa.me/<span class="math-inline">\{whatsappNumber\}?text\=</span>{whatsappMessage}`;

  // Helper function for refs
  const addToArrayRef = (el, arr) => {
    if (el && !arr.current.includes(el)) {
      arr.current.push(el);
    }
  };

  useEffect(() => {
    contactCardRefs.current = []; // Clear array refs on effect run

    let ctx = gsap.context(() => {
      // Hero/Intro section animations
      gsap.from([mainHeadingRef.current, introTextRef.current], {
        y: 50,
        // opacity: 0, // REMOVED opacity:0 as per user request
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Form section animations
      gsap.from(
        [
          formSectionHeadingRef.current,
          contactQuoteRef.current,
          formRef.current,
        ],
        {
          y: 50,
          // opacity: 0, // REMOVED opacity:0
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formSectionHeadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Connect Methods section animations
      gsap.from(connectMethodsHeadingRef.current, {
        y: 50,
        // opacity: 0, // REMOVED opacity:0
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: connectMethodsHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(contactCardRefs.current, {
        y: 80,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: contactCardRefs.current[0],
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Final CTA Section Animations
      gsap.from(
        [
          finalCtaHeadingRef.current,
          finalCtaTextRef.current,
          finalCtaButtonRef.current,
        ],
        {
          y: 50,
          // opacity: 0, // REMOVED opacity:0
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: finalCtaHeadingRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact-page" // Added ID for potential internal linking
      className={`min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } transition-colors duration-300`}
      ref={sectionRef}
    >
      {/* SEO for the Contact Page */}
      <Seo
        title="Contact Weblynx - Get a Free Consultation"
        description="Reach out to Weblynx for a free consultation. Contact us for custom web applications, mobile app development, SEO, WordPress, API integration, and full-stack solutions. Let's build your vision!"
        keywords="contact Weblynx, web development consultation, mobile app consultation, SEO quote, WordPress quote, API integration quote, full stack development quote, contact form, WhatsApp Weblynx, shubhampawale7@gmail.com, Pune, India"
        ogTitle="Contact Weblynx: Your Partner for Digital Excellence"
        ogDescription="Connect with Weblynx today to discuss your digital project and receive a free consultation."
        ogImage="https://www.weblynx.com/social-share-contact.jpg" // Replace with specific image
        ogUrl="https://www.weblynx.com/contact" // Replace with your actual domain
        canonical="https://www.weblynx.com/contact" // Replace with your actual domain
      />

      {/* Hero/Introduction Section for Contact Page */}
      <section
        className={`py-16 sm:py-20 px-4 ${
          isDark
            ? "bg-gradient-to-br from-gray-950 to-gray-800 text-white"
            : "bg-gradient-to-br from-blue-50 to-white text-gray-800"
        } transition-colors duration-500`}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6
                         text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600
                         dark:from-purple-400 dark:to-cyan-400"
            ref={mainHeadingRef}
          >
            Let's Build Your Vision
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto px-4"
            ref={introTextRef}
          >
            Ready to turn your ideas into a digital reality? We're excited to
            hear from you and discuss how Weblynx can bring your project to
            life.
          </p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600 dark:text-purple-400"
            ref={formSectionHeadingRef}
          >
            Get a Free Consultation
          </h2>
          <blockquote
            className="text-center text-xl md:text-2xl italic opacity-90 mb-10 text-gray-700 dark:text-gray-300"
            ref={contactQuoteRef}
          >
            "Every great digital journey begins with a conversation. Let's start
            yours."
          </blockquote>

          <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
            {/* Form Fields - Now in a responsive grid for 2-column layout on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2.5 md:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500
                                    ${
                                      isDark
                                        ? "bg-gray-700 border-gray-600 text-white"
                                        : "bg-gray-100 border-gray-300 text-gray-900"
                                    }
                                    ${errors.name ? "border-red-500" : ""}`}
                  placeholder="John Doe"
                  aria-label="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs md:text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2.5 md:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500
                                    ${
                                      isDark
                                        ? "bg-gray-700 border-gray-600 text-white"
                                        : "bg-gray-100 border-gray-300 text-gray-900"
                                    }
                                    ${errors.email ? "border-red-500" : ""}`}
                  placeholder="john.doe@example.com"
                  aria-label="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs md:text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Project Type - Full width */}
            <div>
              <label
                htmlFor="projectType"
                className="block text-sm md:text-base font-medium mb-2"
              >
                Type of Project
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full p-2.5 md:p-3 border rounded-md appearance-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500
                                ${
                                  isDark
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "bg-gray-100 border-gray-300 text-gray-900"
                                }
                                ${errors.projectType ? "border-red-500" : ""}`}
                aria-label="Select Project Type"
              >
                <option value="">Select a service...</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p className="text-red-500 text-xs md:text-sm mt-1">
                  {errors.projectType}
                </p>
              )}
            </div>

            {/* Message - Full width */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm md:text-base font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2.5 md:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500
                                ${
                                  isDark
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "bg-gray-100 border-gray-300 text-gray-900"
                                }
                                ${errors.message ? "border-red-500" : ""}`}
                placeholder="Tell us about your project..."
                aria-label="Your Message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs md:text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {status === "submitting" && (
              <p className="text-center text-blue-500 dark:text-purple-300 text-sm md:text-base">
                Submitting...
              </p>
            )}
            {status === "success" && (
              <p className="text-center text-green-600 dark:text-green-400 font-semibold text-sm md:text-base">
                Inquiry submitted successfully! We'll contact you soon.
              </p>
            )}
            {status === "error" && errors.form && (
              <p className="text-center text-red-600 dark:text-red-400 font-semibold text-sm md:text-base">
                {errors.form}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full py-2.5 md:py-3 rounded-md text-base md:text-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5
                          ${
                            isDark
                              ? "bg-purple-600 hover:bg-purple-700"
                              : "bg-blue-600 hover:bg-blue-700"
                          } text-white
                          disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {status === "submitting" ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </section>

      {/* Connect Directly / Other Contact Methods Section */}
      <section
        className={`py-16 sm:py-20 px-4 ${
          isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            ref={connectMethodsHeadingRef}
          >
            Or Connect Directly
          </h2>
          <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto mb-12 px-4">
            Prefer a direct conversation? Reach out to us through the channels
            below. We're here to answer your questions and provide quick
            support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Phone Card */}
            <motion.div
              className={`p-6 sm:p-8 rounded-lg shadow-md flex flex-col items-center text-center w-full max-w-sm
                            ${
                              isDark
                                ? "bg-gray-800 border border-gray-700"
                                : "bg-white border border-gray-200"
                            }`}
              ref={(el) => addToArrayRef(el, contactCardRefs)}
              whileHover={{
                y: -5,
                boxShadow: isDark
                  ? "0 10px 20px rgba(0, 0, 0, 0.3)"
                  : "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <FaPhoneAlt className="text-5xl text-blue-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Call Us
              </h3>
              <p className="text-base mb-4 opacity-90">
                Get instant answers to your queries.
              </p>
              <a
                href="tel:+919518364400"
                className="text-blue-500 dark:text-purple-400 hover:underline text-lg font-medium"
                aria-label="Call Shubham Pawale on 9518364400"
              >
                +91 95183 64400
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div
              className={`p-6 sm:p-8 rounded-lg shadow-md flex flex-col items-center text-center w-full max-w-sm
                            ${
                              isDark
                                ? "bg-gray-800 border border-gray-700"
                                : "bg-white border border-gray-200"
                            }`}
              ref={(el) => addToArrayRef(el, contactCardRefs)}
              whileHover={{
                y: -5,
                boxShadow: isDark
                  ? "0 10px 20px rgba(0, 0, 0, 0.3)"
                  : "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <FaEnvelope className="text-5xl text-blue-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Email Us
              </h3>
              <p className="text-base mb-4 opacity-90">
                Send us your detailed inquiries anytime.
              </p>
              <a
                href="mailto:shubhampawale7@gmail.com"
                className="text-blue-500 dark:text-purple-400 hover:underline text-lg font-medium"
                aria-label="Email Shubham Pawale at shubhampawale7@gmail.com"
              >
                shubhampawale7@gmail.com
              </a>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              className={`p-6 sm:p-8 rounded-lg shadow-md flex flex-col items-center text-center w-full max-w-sm
                            ${
                              isDark
                                ? "bg-gray-800 border border-gray-700"
                                : "bg-white border border-gray-200"
                            }`}
              ref={(el) => addToArrayRef(el, contactCardRefs)}
              whileHover={{
                y: -5,
                boxShadow: isDark
                  ? "0 10px 20px rgba(0, 0, 0, 0.3)"
                  : "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <FaWhatsapp className="text-5xl text-green-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                WhatsApp Us
              </h3>
              <p className="text-base mb-4 opacity-90">
                For quick questions and instant support.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-purple-400 hover:underline text-lg font-medium"
                aria-label="WhatsApp Shubham Pawale on 9518364400"
              >
                +91 95183 64400
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section (New Content) */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            ref={(el) => addToArrayRef(el, contactCardRefs)}
          >
            Why Connect with Weblynx?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, contactCardRefs)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Expert Guidance
              </h3>
              <p className="opacity-90 text-base">
                Receive insights and recommendations from seasoned digital
                professionals to guide your project.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, contactCardRefs)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                Tailored Solutions
              </h3>
              <p className="opacity-90 text-base">
                We listen to your unique needs to propose strategies and
                solutions that truly fit your business.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
              ref={(el) => addToArrayRef(el, contactCardRefs)}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-purple-400">
                No-Obligation Consultation
              </h3>
              <p className="opacity-90 text-base">
                Your initial discussion with us is completely free, with no
                commitment required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section (Moved from previous location in file) */}
      <section
        className={`py-16 px-4 text-center ${
          isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto max-w-3xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            ref={finalCtaHeadingRef}
          >
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg mb-8 opacity-90" ref={finalCtaTextRef}>
            We're eager to partner with you and bring your ambitious projects to
            life. Let's start the conversation.
          </p>
          {/* <Link
            to="/contact" // Can also be '#' if this section is purely illustrative
            ref={finalCtaButtonRef}
            className={`inline-block px-8 py-4 text-lg md:text-xl font-bold rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300
                        ${
                          isDark
                            ? "bg-cyan-700 text-white hover:bg-cyan-600"
                            : "bg-green-600 text-white hover:bg-green-700"
                        }`}
          >
            Schedule a Meeting
          </Link> */}
        </div>
      </section>
    </section>
  );
};

export default Contact;
