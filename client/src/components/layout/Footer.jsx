// client/src/components/layout/Footer.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

// Data for links to keep the component clean
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" }, // --- ADDED ---
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
    href: "https://www.instagram.com/weblynxinfotech/?utm_source=ig_web_button_share_sheet",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`transition-colors duration-300 ${
        isDark ? "bg-black text-gray-400" : "bg-gray-900 text-gray-400"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto pt-16 pb-8 px-4 sm:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          {/* Column 1: Brand Info (larger span) */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <Link
              to="/"
              className="text-2xl font-bold flex items-center gap-2 text-white mb-4"
            >
              <img
                src="/weblynx-logo.png"
                alt="Weblynx Infotech Logo"
                className="h-8 bg-gray-200 rounded-md p-1"
              />
              Weblynx Infotech
            </Link>
            <p className="max-w-md text-sm">
              Crafting the next evolution of web experiences with a focus on
              performance, design, and reliability. We are your dedicated
              partners in digital growth.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wider uppercase mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex justify-center md:justify-start space-x-5 text-xl">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row-reverse justify-between items-center text-sm">
          <p>
            <a
              href="https://www.shubhampawale.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              A Shubham Pawale Creation
            </a>
          </p>
          <p className="text-gray-500 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} Weblynx Infotech. All Rights
            Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
