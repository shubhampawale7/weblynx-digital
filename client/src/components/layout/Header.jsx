// client/src/components/layout/Header.jsx

import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi"; // Added FiMenu

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // --- Effect for scroll detection ---
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Effect to lock body scroll when mobile menu is open ---
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <>
      <header
        // --- CHANGE: Updated styles using new brand colors and smoother transitions ---
        className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          hasScrolled
            ? "py-3 shadow-lg bg-white/80 dark:bg-brand-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-brand-light-blue/20"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center px-6">
          {/* --- CHANGE: Logo with new display font --- */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold font-display text-brand-dark dark:text-white"
          >
            <img
              src="/weblynxlogo.png"
              alt="Weblynx Infotech Logo"
              className="h-16 rounded-full"
            />
            <span>Weblynx Infotech</span>
          </Link>

          {/* --- CHANGE: Desktop Navigation with better spacing and hover effects --- */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-brand-dark dark:text-white"
                        : "text-brand-light-blue hover:text-brand-dark dark:text-brand-gray dark:hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <motion.span
                        whileHover={{ y: -2 }}
                        className="inline-block"
                      >
                        {link.label}
                      </motion.span>
                      {isActive && (
                        <motion.div
                          layoutId="active-nav-underline"
                          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-accent"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* --- CHANGE: Prominent CTA button and Theme Toggle on desktop --- */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="px-5 py-2.5 text-sm font-semibold text-brand-dark bg-brand-accent hover:bg-brand-accent-hover rounded-full shadow-lg transition-all duration-300"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <FiMenu className="w-6 h-6 text-brand-dark dark:text-white" />
            </button>
          </div>
        </nav>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-0 right-0 z-50 h-full w-full max-w-xs bg-white dark:bg-brand-dark shadow-2xl"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-brand-light-blue/20">
              <span className="font-display font-bold text-lg text-brand-dark dark:text-white">
                Menu
              </span>
              <button onClick={closeMenu} aria-label="Close menu">
                <FiX className="w-6 h-6 text-brand-dark dark:text-white" />
              </button>
            </div>
            <ul className="flex flex-col p-6 gap-5">
              {[...navLinks, { to: "/contact", label: "Contact Us" }].map(
                (link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block text-lg font-medium py-2 ${
                          isActive
                            ? "text-brand-accent"
                            : "text-brand-dark dark:text-brand-bg"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                )
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

const ThemeToggle = ({ theme, toggleTheme }) => (
  <motion.button
    onClick={toggleTheme}
    className="p-2 rounded-full text-brand-dark dark:text-brand-bg hover:bg-gray-200 dark:hover:bg-brand-dark-blue transition-colors"
    whileTap={{ scale: 0.9, rotate: 15 }}
    aria-label="Toggle theme"
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ y: -15, opacity: 0, rotate: -90 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: 15, opacity: 0, rotate: 90 }}
        transition={{ duration: 0.25 }}
      >
        {theme === "dark" ? (
          <FiSun className="h-5 w-5" />
        ) : (
          <FiMoon className="h-5 w-5" />
        )}
      </motion.div>
    </AnimatePresence>
  </motion.button>
);

export default Header;
