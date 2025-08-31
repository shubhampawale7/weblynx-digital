// client/src/components/layout/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { to: "/services/custom-web-applications", label: "Web Applications" },
    { to: "/services/full-stack-development", label: "Full-Stack Development" },
    { to: "/services/mobile-app-development", label: "Mobile Apps" },
    { to: "/services/seo-optimization", label: "SEO Optimization" },
  ];

  const companyLinks = [
    { to: "/about", label: "About Us" },
    { to: "/portfolio", label: "Our Work" },
    { to: "/packages", label: "Packages" },
    { to: "/blog", label: "Blog" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/shubhampawale/",
      label: "LinkedIn",
      Icon: FaLinkedinIn,
    },
    {
      href: "https://github.com/shubhampawale7",
      label: "GitHub",
      Icon: FaGithub,
    },
    {
      href: "https://www.instagram.com/weblynxinfotech/",
      label: "Instagram",
      Icon: FaInstagram,
    },
  ];

  const FooterLinkColumn = ({ title, links }) => (
    <div>
      <h3 className="font-display font-semibold text-white mb-4 tracking-wider uppercase">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-brand-gray hover:text-brand-accent transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="relative bg-brand-dark text-brand-bg pt-48 pb-8 overflow-hidden">
      {/* Background SVG Landscape */}
      <div className="absolute top-0 left-0 w-full h-auto pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="footer-glow" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop
                offset="0%"
                stopColor="var(--brand-accent)"
                stopOpacity="0.3"
              />
              <stop
                offset="100%"
                stopColor="var(--brand-accent)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#footer-glow)"
            d="M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,208C672,171,768,117,864,117.3C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,320L0,320Z"
          ></path>
          <path
            fill="var(--brand-dark-blue)"
            d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,160C672,171,768,213,864,240C960,267,1056,277,1152,261.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top CTA Section (now integrated into the footer start) */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4"
          >
            Let's Build the Future.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-brand-gray max-w-2xl mx-auto mb-8"
          >
            Have a project in mind or a problem to solve? We're here to help you
            engineer the perfect digital solution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-brand-dark bg-brand-accent rounded-full shadow-lg shadow-brand-accent/20 overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <motion.span
                className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                initial={{ x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span className="relative">Start a Project</span>
              <FiArrowRight className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Links Section */}
        <div className="border-t border-brand-light-blue/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: Brand & Socials */}
            <div className="md:col-span-2 lg:col-span-1">
              <Link
                to="/"
                className="flex items-center gap-2 text-xl font-bold font-display text-white mb-4"
              >
                <img
                  src="/weblynxlogo.png"
                  alt="Weblynx Infotech Logo"
                  className="h-16 rounded-full"
                />
                <span>Weblynx Infotech</span>
              </Link>
              <p className="text-brand-gray max-w-xs mb-6">
                Engineering innovative digital solutions that drive growth and
                success for your business.
              </p>
              <div className="flex items-center gap-5 text-xl">
                {socialLinks.map(({ href, label, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-brand-gray hover:text-brand-accent"
                    whileHover={{ y: -3, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            <FooterLinkColumn title="Services" links={serviceLinks} />
            <FooterLinkColumn title="Company" links={companyLinks} />
            <div>
              <h3 className="font-display font-semibold text-white mb-4 tracking-wider uppercase">
                Get in Touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:weblynxinfotech@gmail.com"
                    className="text-brand-gray hover:text-brand-accent transition-colors duration-300"
                  >
                    weblynxinfotech@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919518364400"
                    className="text-brand-gray hover:text-brand-accent transition-colors duration-300"
                  >
                    +91 951-836-4400
                  </a>
                </li>
                <li className="text-brand-gray">Pune, Maharashtra, India</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-brand-light-blue/20 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-brand-gray">
            <p>&copy; {currentYear} Weblynx Infotech. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link
                to="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
