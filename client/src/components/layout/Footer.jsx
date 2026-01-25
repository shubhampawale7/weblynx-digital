// client/src/components/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiActivity,
  FiTerminal,
  FiShield,
  FiCpu,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { to: "/services/custom-web-applications", label: "Web Applications" },
    { to: "/services/full-stack-development", label: "Full-Stack Dev" },
    { to: "/services/mobile-app-development", label: "Mobile Apps" },
    { to: "/services/seo-optimization", label: "SEO Systems" },
  ];

  const companyLinks = [
    { to: "/about", label: "The_Origin" },
    { to: "/our-work", label: "Our_Work" },
    { to: "/packages", label: "Bundles" },
    { to: "/blog", label: "Archive" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/shubhampawale/",
      label: "LI",
      Icon: FaLinkedinIn,
    },
    { href: "https://github.com/shubhampawale7", label: "GH", Icon: FaGithub },
    {
      href: "https://www.instagram.com/weblynxinfotech/",
      label: "IG",
      Icon: FaInstagram,
    },
  ];

  return (
    <footer className="relative bg-brand-dark text-white pt-32 pb-12 overflow-hidden border-t border-white/5 selection:bg-brand-accent selection:text-brand-dark">
      {/* Background Architectural Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-brand-accent/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- TOP CTA: The Mission Call --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[1px] w-12 bg-brand-accent"></span>
              <span className="text-brand-accent font-mono text-[10px] uppercase tracking-[0.4em]">
                Final_Directive
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] italic">
              Initialize <br />{" "}
              <span className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] italic">
                Expansion.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end pb-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-6 px-12 py-6 text-xl font-black text-brand-dark bg-brand-accent rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(0,245,212,0.4)]"
            >
              <span>DEPLOY PROJECT</span>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* --- MAIN GRID: Technical Directory --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-20 border-b border-white/5">
          {/* Brand Identity & Official Logo */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col items-start gap-6 group">
              <div className="relative">
                <img
                  src="/weblynxlogo.png"
                  alt="Weblynx Infotech Official Logo"
                  className="h-16 w-auto rounded-full group-hover:scale-105 transition-transform duration-500"
                />
                {/* Logo Aura */}
                <div className="absolute inset-0 rounded-full bg-brand-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter uppercase">
                  Weblynx{" "}
                  <span className="italic font-light text-brand-accent">
                    Infotech
                  </span>
                </span>
                <span className="font-mono text-[8px] opacity-30 tracking-[0.5em] uppercase mt-1">
                  Digital_Engineering_Firm
                </span>
              </div>
            </Link>
            <p className="text-sm text-brand-gray font-light leading-relaxed max-w-xs">
              Engineering high-stakes digital ecosystems with surgical
              precision. MERN stack excellence from Pune to the world.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:text-brand-accent hover:border-brand-accent transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Engineering" links={serviceLinks} />
          <FooterColumn title="Directory" links={companyLinks} />

          {/* Contact Node */}
          <div className="space-y-8">
            <h3 className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em]">
              Node_Uplink
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:weblynxinfotech@gmail.com"
                className="block text-lg font-bold hover:text-brand-accent transition-colors"
              >
                weblynxinfotech@gmail.com
              </a>
              <a
                href="tel:+919518364400"
                className="block text-lg font-bold hover:text-brand-accent transition-colors"
              >
                +91 95183 64400
              </a>
              <div className="pt-4 flex items-center gap-3 opacity-30 font-mono text-[10px] uppercase tracking-widest">
                <FiTerminal /> Sector: Pune_MH_IN
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR: System Status --- */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8 text-[10px] font-mono opacity-20 uppercase tracking-widest">
            <p>&copy; {currentYear} Weblynx_OS // V4.0.2</p>
            <div className="hidden md:flex items-center gap-4">
              <span className="flex items-center gap-2">
                <FiShield /> Secure
              </span>
              <span className="flex items-center gap-2">
                <FiCpu /> Optimized
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex gap-6 text-[10px] font-mono opacity-40 uppercase tracking-widest">
              <Link
                to="/privacy-policy"
                className="hover:text-brand-accent transition-colors"
              >
                Privacy_Protocol
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-brand-accent transition-colors"
              >
                Service_Terms
              </Link>
            </div>
            {/* Live Pulse Indicator */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_green]" />
              <span className="text-[10px] font-mono text-green-500 uppercase font-bold tracking-tighter">
                System_Online
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1.5px currentColor;
          color: transparent;
        }
      `}</style>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div className="space-y-8">
    <h3 className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em]">
      {title}_Manifest
    </h3>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className="group flex items-center gap-2 text-brand-gray hover:text-white transition-all"
          >
            <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
            <span className="font-medium">{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
