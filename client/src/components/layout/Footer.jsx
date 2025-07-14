// client/src/components/layout/Footer.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

// Data for links
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
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
    href: "https://www.instagram.com/weblynxinfotech/?utm_source=ig_web_button_share_sheet",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
};

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
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto pt-16 pb-8 px-4 sm:px-8"
      >
        {/* Centered layout for all content */}
        <div className="flex flex-col items-center gap-8">
          {/* 1. Brand Logo */}
          <motion.div variants={itemVariants}>
            <Link
              to="/"
              className="text-2xl font-bold flex items-center gap-2 text-white"
            >
              <img
                src="/weblynxinfo.png"
                alt="Weblynx Infotech Logo"
                className="h-8 bg-gray-200 rounded-md p-1"
              />
              Weblynx Infotech
            </Link>
          </motion.div>

          {/* 2. Navigation Links */}
          <motion.ul
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2"
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm font-medium hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>

          {/* 3. Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 text-2xl"
          >
            {socialLinks.map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-white transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-gray-800 pt-8 mt-12 text-center text-sm text-gray-500"
        >
          <p>
            &copy; {new Date().getFullYear()} Weblynx Infotech. All Rights
            Reserved.
          </p>
          <div className="flex gap-4">
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
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
