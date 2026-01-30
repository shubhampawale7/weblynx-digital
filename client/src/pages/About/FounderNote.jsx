// client/src/components/About/FounderNote.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiTerminal, FiCpu, FiActivity, FiCode } from "react-icons/fi";

const signatureVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 },
  },
};

const FounderNote = () => {
  return (
    <section
      aria-labelledby="founder-directive-heading"
      className="relative bg-white dark:bg-brand-dark py-24 md:py-40 overflow-hidden border-t border-gray-100 dark:border-white/5"
    >
      {/* Background Architectural Layer */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <span className="absolute top-1/2 left-0 -translate-y-1/2 font-black text-[20vw] leading-none uppercase rotate-90 origin-left">
          ENGINEERING
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Left: Founder Technical Core */}
            <aside
              className="lg:col-span-5 relative"
              aria-label="Founder Technical Credentials"
            >
              <div className="relative p-12 rounded-[3rem] border border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-brand-dark-blue/20 backdrop-blur-xl overflow-hidden group">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className="p-6 rounded-2xl bg-brand-accent text-brand-dark mb-8 shadow-2xl"
                    aria-hidden="true"
                  >
                    <FiCpu size={48} className="animate-spin-slow" />
                  </div>

                  <h3 className="font-mono text-xs font-bold text-brand-accent uppercase tracking-[0.4em] mb-4">
                    Core_Logic_Center
                  </h3>

                  <div
                    className="w-full space-y-3 opacity-40"
                    aria-hidden="true"
                  >
                    <div className="h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 2 }}
                        className="h-full bg-brand-accent"
                      />
                    </div>
                    <div className="h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 2, delay: 0.2 }}
                        className="h-full bg-brand-accent"
                      />
                    </div>
                  </div>
                </div>

                {/* Structured founder authority signals */}
                <div className="mt-12 space-y-4 font-mono text-[9px] uppercase tracking-widest opacity-30">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="font-bold">Authority</span>
                    <span className="text-brand-accent">
                      Lead_MERN_Architect
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="font-bold">Role</span>
                    <span>Founder</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="font-bold">Location</span>
                    <span>Pune, India</span>
                  </div>
                </div>

                <FiCode
                  className="absolute -bottom-10 -right-10 text-[12rem] opacity-[0.02] dark:opacity-[0.05]"
                  aria-hidden="true"
                />
              </div>
            </aside>

            {/* Right: Founder Statement */}
            <article className="lg:col-span-7">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <header className="flex items-center gap-3 mb-8">
                  <span className="h-[1px] w-12 bg-brand-accent" aria-hidden />
                  <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                    Founding Directive
                  </span>
                </header>

                <h2
                  id="founder-directive-heading"
                  className="text-5xl md:text-7xl font-black text-brand-dark dark:text-white tracking-tighter uppercase leading-[0.85] mb-12 italic"
                >
                  Architecting <br />{" "}
                  <span className="text-brand-accent">Excellence.</span>
                </h2>

                {/* Semantic SEO reinforcement */}
                <p className="sr-only">
                  Shubham Pawale is the Founder and Lead MERN Stack Developer at
                  Weblynx Infotech, a Pune-based digital engineering firm
                  specializing in scalable MERN architecture and
                  high-performance web systems.
                </p>

                <div className="space-y-8 text-xl text-brand-light-blue dark:text-brand-gray font-light leading-relaxed">
                  <p>
                    Weblynx Infotech was established on a singular engineering
                    premise: that{" "}
                    <strong className="font-bold text-brand-dark dark:text-white">
                      precision software architecture
                    </strong>{" "}
                    is the only sustainable path to global digital growth.
                  </p>

                  <p>
                    As a{" "}
                    <strong className="font-bold text-brand-dark dark:text-white">
                      Lead MERN Stack Developer
                    </strong>
                    , my obsession is with the underlying logic. We don’t just
                    build interfaces; we engineer high-stakes systems through{" "}
                    <strong className="font-bold text-brand-dark dark:text-white">
                      clean-room code
                    </strong>{" "}
                    and scalable cloud performance.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-16 flex flex-col items-start relative">
                  <svg
                    className="w-64 h-24 absolute -top-12 -left-4 pointer-events-none opacity-40 dark:opacity-60"
                    viewBox="0 0 200 60"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M 5,40 C 15,35 25,25 35,28 45,31 50,40 60,42 70,44 80,35 85,28 95,18 105,18 115,22 125,26 130,35 140,40 150,45 160,40 170,30 180,20 190,18 195,22"
                      stroke="var(--brand-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="transparent"
                      variants={signatureVariants}
                    />
                  </svg>

                  <div className="relative z-10 pt-4">
                    <h3 className="text-3xl font-bold dark:text-white uppercase tracking-tighter">
                      Shubham Pawale
                    </h3>
                    <cite className="not-italic text-xs font-mono text-brand-accent uppercase tracking-[0.4em] mt-2 block">
                      Founder & Lead MERN Developer // Weblynx Infotech
                    </cite>
                  </div>

                  <div
                    className="mt-8 flex items-center gap-4 opacity-20"
                    aria-hidden="true"
                  >
                    <FiTerminal size={14} />
                    <span className="text-[9px] font-mono uppercase tracking-widest italic">
                      Commit: founding_architecture_pune_hq
                    </span>
                  </div>
                </div>
              </motion.div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderNote;
