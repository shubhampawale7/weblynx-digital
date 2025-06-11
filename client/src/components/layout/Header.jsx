// client/src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    `hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-200 ${
      isActive ? "text-blue-600 dark:text-purple-400 font-bold" : ""
    }`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: "0%",
      transition: { type: "tween", duration: 0.3, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      transition: { type: "tween", duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <header
      className={`py-4 px-8 shadow-md transition-colors duration-300 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } sticky top-0 z-40 w-full`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <img
            src="/weblynx-logo.png"
            alt="Weblynx Infotech Logo"
            className="h-8"
          />{" "}
          {/* Updated alt text */}
          Weblynx Infotech {/* UPDATED: Changed display name */}
        </Link>

        <ul className="hidden md:flex space-x-4 lg:space-x-6 text-md">
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={getNavLinkClass}>
              Services
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/portfolio" className={getNavLinkClass}>
              Portfolio
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/contact" className={getNavLinkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="focus:outline-none text-2xl"
              aria-label="Toggle dark/light theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center
                        ${
                          isDark
                            ? "bg-gray-950 text-white"
                            : "bg-white text-gray-800"
                        }
                        bg-opacity-95 md:hidden`}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={closeMenu}
              className="absolute top-8 right-8 text-3xl focus:outline-none"
              aria-label="Close menu"
            >
              ✕
            </button>
            <ul className="flex flex-col space-y-8 text-2xl">
              <li>
                <NavLink to="/" className={getNavLinkClass} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={getNavLinkClass}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={getNavLinkClass}
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/portfolio"
                  className={getNavLinkClass}
                  onClick={closeMenu}
                >
                  Portfolio
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/contact"
                  className={getNavLinkClass}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleTheme();
                    closeMenu();
                  }}
                  className="focus:outline-none text-2xl"
                  aria-label="Toggle dark/light theme"
                >
                  {isDark ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
