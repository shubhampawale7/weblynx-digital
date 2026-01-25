// client/src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMenu, FiActivity, FiTerminal } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ORIGIN" },
    { to: "/services", label: "ARSENAL" },
    { to: "/packages", label: "BUNDLES" },
    { to: "/our-work", label: "LABS" },
    { to: "/blog", label: "ARCHIVE" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-[100] w-full transition-all duration-500 ease-in-out ${
          hasScrolled
            ? "py-3 bg-brand-dark/70 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center px-6">
          {/* --- BRAND LOGO MODULE --- */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img
                src="/weblynxlogo.png"
                alt="Weblynx Logo"
                className="h-12 w-12 rounded-full border border-brand-accent/20 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute -inset-1 rounded-full bg-brand-accent/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tighter uppercase text-white">
                Weblynx{" "}
                <span className="text-brand-accent italic font-light">
                  Infotech
                </span>
              </span>
              <span className="font-mono text-[8px] opacity-30 tracking-[0.4em] uppercase mt-1">
                System_Nav_v4.0 // Locked
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `group relative font-mono text-[10px] font-bold tracking-[0.2em] transition-all duration-300 ${
                      isActive
                        ? "text-brand-accent"
                        : "text-brand-gray hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className="flex flex-col items-center">
                      <span className="relative z-10">{link.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="nav-glow"
                          className="absolute -inset-x-2 -inset-y-1 bg-brand-accent/5 border-x border-brand-accent/20"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <div
                        className={`h-[1px] w-0 bg-brand-accent mt-1 transition-all group-hover:w-full ${isActive ? "w-full" : ""}`}
                      />
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* --- ACTION MODULE --- */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="relative px-6 py-3 bg-brand-accent text-brand-dark font-black text-[10px] tracking-[0.3em] uppercase transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] overflow-hidden group"
              style={{
                clipPath:
                  "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
              }}
            >
              <div className="relative z-10 flex items-center gap-2">
                <FiTerminal /> INITIALIZE_PROJECT
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* --- MOBILE TRIGGER --- */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 bg-white/5 rounded-xl border border-white/10"
            >
              <FiMenu className="w-6 h-6 text-white" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            navLinks={navLinks}
            closeMenu={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const MobileMenu = ({ navLinks, closeMenu }) => (
  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "spring", damping: 25, stiffness: 200 }}
    className="lg:hidden fixed inset-0 z-[110] bg-brand-dark flex flex-col p-8"
  >
    <div className="flex justify-between items-center mb-16">
      <span className="font-mono text-[10px] text-brand-accent tracking-[0.4em]">
        SYSTEM_OVERRIDE
      </span>
      <button
        onClick={closeMenu}
        className="p-4 rounded-full bg-white/5 border border-white/10 text-brand-accent"
      >
        <FiX size={24} />
      </button>
    </div>

    <div className="flex flex-col gap-8">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={closeMenu}
          className="text-5xl font-black text-white uppercase tracking-tighter italic hover:text-brand-accent transition-colors"
        >
          {link.label}
        </NavLink>
      ))}
      <Link
        to="/contact"
        onClick={closeMenu}
        className="mt-12 text-3xl font-mono text-brand-accent uppercase tracking-widest border-t border-white/10 pt-8"
      >
        [ Initialize_Contact ]
      </Link>
    </div>

    <div className="mt-auto flex justify-between items-center opacity-20">
      <div className="flex items-center gap-2 font-mono text-[8px] text-white">
        <FiActivity /> SIGNAL: OPTIMAL
      </div>
      <span className="font-mono text-[8px] text-white tracking-widest uppercase">
        Weblynx_OS_v4.0
      </span>
    </div>
  </motion.div>
);

export default Header;
