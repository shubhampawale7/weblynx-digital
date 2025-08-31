// client/src/components/layout/Header.jsx

import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext.jsx";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { to: "/packages", label: "Packages" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          hasScrolled
            ? "py-3 shadow-lg bg-white/80 dark:bg-brand-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-brand-light-blue/20"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold font-display text-brand-dark dark:text-white"
          >
            <img
              src="/weblynxlogo.png"
              alt="Weblynx Infotech Logo"
              className="h-16 rounded-full"
            />
            <span className="hidden sm:inline">Weblynx Infotech</span>
          </Link>

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

          <div className="hidden md:flex items-center gap-3">
            <Magnetic>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </Magnetic>
            <Magnetic>
              <Link
                to="/contact"
                className="block px-5 py-2.5 text-sm font-semibold text-brand-dark bg-brand-accent hover:bg-brand-accent-hover rounded-full shadow-lg transition-all duration-300"
              >
                Get a Quote
              </Link>
            </Magnetic>
          </div>

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

      <AnimatePresence>
        {isMenuOpen && <MobileMenu navLinks={navLinks} closeMenu={closeMenu} />}
      </AnimatePresence>
    </>
  );
};

// --- Full Screen Mobile Menu ---
const mobileMenuVariants = {
  open: {
    y: "0%",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  closed: {
    y: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const mobileLinkVariants = {
  open: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 200 } },
  closed: { y: 20, opacity: 0 },
};

const MobileMenu = ({ navLinks, closeMenu }) => (
  <motion.div
    variants={mobileMenuVariants}
    initial="closed"
    animate="open"
    exit="closed"
    className="md:hidden fixed inset-0 z-50 bg-white dark:bg-brand-dark flex flex-col items-center justify-center"
  >
    <button
      onClick={closeMenu}
      aria-label="Close menu"
      className="absolute top-6 right-6"
    >
      <FiX className="w-8 h-8 text-brand-dark dark:text-white" />
    </button>
    <ul className="flex flex-col items-center gap-8">
      {[...navLinks, { to: "/contact", label: "Get a Quote" }].map((link) => (
        <motion.li key={link.to} variants={mobileLinkVariants}>
          <NavLink
            to={link.to}
            onClick={closeMenu}
            className={({ isActive }) =>
              `font-display text-4xl font-bold transition-colors ${
                isActive
                  ? "text-brand-accent"
                  : "text-brand-dark dark:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

// --- Theme Toggle Button ---
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

// --- Magnetic Effect Wrapper Component ---
const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default Header;
