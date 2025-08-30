// client/src/components/layout/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- CHANGE: Data is better organized for a multi-column layout ---
  const serviceLinks = [
    { to: "/services/custom-web-applications", label: "Web Applications" },
    { to: "/services/full-stack-development", label: "Full-Stack Development" },
    { to: "/services/mobile-app-development", label: "Mobile Apps" },
    { to: "/services/seo-optimization", label: "SEO Optimization" },
  ];

  const companyLinks = [
    { to: "/about", label: "About Us" },
    { to: "/portfolio", label: "Our Work" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
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

  // --- Reusable Component for Link Lists ---
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
    // --- CHANGE: Using new brand colors ---
    <footer className="bg-brand-dark text-brand-bg">
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* --- CHANGE: Professional multi-column layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold font-display text-white mb-4"
            >
              <img
                src="/weblynxinfo.png"
                alt="Weblynx Infotech Logo"
                className="h-9 rounded-md"
              />
              <span>Weblynx Infotech</span>
            </Link>
            {/* --- CHANGE: Added a short, impactful tagline --- */}
            <p className="text-brand-gray max-w-xs mb-6">
              Building innovative digital solutions that drive growth and
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

          {/* Column 2: Services */}
          <FooterLinkColumn title="Services" links={serviceLinks} />

          {/* Column 3: Company */}
          <FooterLinkColumn title="Company" links={companyLinks} />

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 tracking-wider uppercase">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@weblynxinfotech.com"
                  className="text-brand-gray hover:text-brand-accent transition-colors duration-300"
                >
                  contact@weblynxinfotech.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="text-brand-gray hover:text-brand-accent transition-colors duration-300"
                >
                  +91 123-456-7890
                </a>
              </li>
              <li className="text-brand-gray">Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar: Copyright & Legal Links --- */}
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
    </footer>
  );
};

export default Footer;
