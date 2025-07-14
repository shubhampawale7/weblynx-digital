// client/src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiX } from "react-icons/fi";

// --- Reusable Motion Variants ---
const mobileMenuVariants = {
  hidden: { opacity: 0, y: "-50%", scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
  },
  exit: {
    opacity: 0,
    y: "-50%",
    scale: 0.9,
    transition: { duration: 0.2, ease: [0.5, 1, 0.25, 1] },
  },
};

const navItemsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/packages", label: "Packages" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          hasScrolled
            ? "py-3 shadow-md bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
            : "py-4 bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center px-4">
          <Link
            to="/"
            className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white"
          >
            <img
              src="/weblynxinfo.png"
              alt="Weblynx Infotech Logo"
              className="h-8 rounded-md"
            />
            Weblynx Infotech
          </Link>

          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="relative px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="active-nav-underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"
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
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </ul>

          <div className="md:hidden flex items-center">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <MenuToggle toggle={() => setIsMenuOpen(true)} />
          </div>
        </nav>
      </header>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // FIXED: z-index is now 50, on top of the header, with a solid background
            className="md:hidden fixed inset-0 z-50 bg-white dark:bg-black"
          >
            <motion.ul
              variants={navItemsContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link) => (
                <motion.li key={link.to} variants={navItemVariants}>
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className="text-3xl font-semibold text-gray-800 dark:text-gray-200"
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
            {/* FIXED: Close button is now part of the menu itself */}
            <motion.button
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              className="absolute top-6 right-4 p-2"
              aria-label="Close menu"
            >
              <FiX className="w-8 h-8 text-gray-800 dark:text-gray-200" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Animated Theme Toggle Component ---
const ThemeToggle = ({ isDark, toggleTheme }) => (
  <motion.button
    onClick={toggleTheme}
    className="ml-4 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-purple-500"
    aria-label="Toggle theme"
    whileTap={{ scale: 0.9, rotate: -15 }}
  >
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ y: -20, opacity: 0, rotate: -90 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: 20, opacity: 0, rotate: 90 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <FiSun className="h-5 w-5 text-gray-300" />
        ) : (
          <FiMoon className="h-5 w-5 text-gray-700" />
        )}
      </motion.div>
    </AnimatePresence>
  </motion.button>
);

// --- Hamburger Menu Component (now only opens) ---
const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className="relative h-8 w-8 text-gray-800 dark:text-gray-200 transition-colors"
    aria-label="Open menu"
  >
    <div className="absolute left-1/2 top-1/2 flex w-6 -translate-x-1/2 -translate-y-1/2 flex-col gap-[6px]">
      <span className="h-0.5 w-full rounded-full bg-current" />
      <span className="h-0.5 w-full rounded-full bg-current" />
      <span className="h-0.5 w-full rounded-full bg-current" />
    </div>
  </button>
);

export default Header;
