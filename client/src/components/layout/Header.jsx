// client/src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

// --- Reusable Motion Variants ---
const mobileMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const navItemsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// UPDATED: Changed y-translate for a "subtle slide up" effect
const navItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Effect to handle navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to lock body scroll when mobile menu is open
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
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300
        ${
          hasScrolled
            ? "py-3 shadow-sm bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
            : "py-4 bg-white/0 dark:bg-black/0"
        }
      `}
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

        {/* --- Desktop Navigation --- */}
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

        {/* --- Mobile Menu Toggle --- */}
        <div className="md:hidden flex items-center">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <MenuToggle
            isOpen={isMenuOpen}
            toggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Animated Theme Toggle Component ---
const ThemeToggle = ({ isDark, toggleTheme }) => (
  <motion.button
    onClick={toggleTheme}
    className="ml-4 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950 focus:ring-purple-500"
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

// --- Animated Hamburger Menu Component ---
const MenuToggle = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    className="relative z-50 h-8 w-8 text-gray-800 dark:text-gray-200 transition-colors"
    aria-label="Toggle menu"
  >
    <motion.div
      className="absolute left-1/2 top-1/2 flex w-6 -translate-x-1/2 -translate-y-1/2 flex-col gap-[6px]"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.span
        className="h-0.5 w-full rounded-full bg-current"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 6.5 },
        }}
      />
      <motion.span
        className="h-0.5 w-full rounded-full bg-current"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.span
        className="h-0.5 w-full rounded-full bg-current"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -6.5 },
        }}
      />
    </motion.div>
  </button>
);

export default Header;
