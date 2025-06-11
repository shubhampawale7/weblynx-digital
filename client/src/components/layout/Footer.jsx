// client/src/components/layout/Footer.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`py-8 px-4 sm:px-8 mt-auto transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"
      }`}
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 text-sm sm:text-md">
          <Link
            to="/"
            className="hover:text-blue-500 dark:hover:text-purple-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 dark:hover:text-purple-400"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-blue-500 dark:hover:text-purple-400"
          >
            Services
          </Link>
          {/* <Link
            to="/portfolio"
            className="hover:text-blue-500 dark:hover:text-purple-400"
          >
            Portfolio
          </Link> */}
          <Link
            to="/contact"
            className="hover:text-blue-500 dark:hover:text-purple-400"
          >
            Contact
          </Link>
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 text-xl sm:text-2xl">
          <a
            href="https://www.linkedin.com/in/shubhampawale/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Connect on LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/shubhampawale7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
            aria-label="Visit GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/__shubh999__/?igsh=cXoybGo5M3J4a2E5#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200"
            aria-label="Follow on Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Weblynx Infotech. All rights
          reserved. {/* UPDATED: Copyright name */}
        </p>
        <p className="mt-1 text-xs sm:text-sm">
          <a
            href="https://www.shubhampawale.info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-purple-400 hover:underline"
          >
            Shubham Pawale's Portfolio
          </a>
        </p>
        <p className="mt-2 text-xs sm:text-sm">
          Crafting the Next Evolution of Web Experiences.{" "}
          {/* Tagline remains the same */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
