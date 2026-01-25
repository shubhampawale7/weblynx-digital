// client/src/pages/NotFound/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiArrowLeft,
  FiTerminal,
  FiActivity,
  FiAlertCircle,
} from "react-icons/fi";

const NotFound = () => {
  // Generate a persistent-looking trace ID for this specific session error
  const traceId = React.useMemo(
    () => Math.random().toString(16).slice(2, 10).toUpperCase(),
    [],
  );

  return (
    <>
      {/* CRITICAL SEO: 
        We use noindex here to tell crawlers NOT to index this error page.
        This keeps your search results clean of 'dead' system pages.
      */}
      <Seo
        title="404 Error // System_Null | Weblynx Engineering"
        description="The requested data URI does not exist within the current Weblynx architecture."
      />
      {/* Adding a manual meta tag for extra safety if your Seo component doesn't support a 'noindex' prop yet */}
      <meta name="robots" content="noindex, follow" />

      <main
        id="error-terminal"
        className="bg-brand-dark min-h-screen relative overflow-hidden flex items-center justify-center selection:bg-brand-accent selection:text-brand-dark"
      >
        {/* --- Background Architectural Layer --- */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(0,245,212,0.1),transparent)]" />
        </div>

        {/* --- Central Terminal Module --- */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 container mx-auto px-6 text-center"
          role="alert"
          aria-live="assertive"
        >
          {/* Status Badge */}
          <header className="inline-flex items-center gap-4 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-12">
            <FiAlertCircle
              className="text-red-500 animate-pulse"
              aria-hidden="true"
            />
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-500">
              Error_Code: 404 // Null_Pointer_Exception
            </h2>
          </header>

          <div className="relative inline-block mb-10 select-none">
            <span
              className="text-[15vw] md:text-[14rem] font-black leading-none tracking-tighter text-white uppercase italic text-outline opacity-20"
              aria-hidden="true"
            >
              404
            </span>
            <h1 className="absolute inset-0 text-[15vw] md:text-[14rem] font-black leading-none tracking-tighter text-white uppercase italic flex items-center justify-center">
              404
            </h1>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
              Uncharted{" "}
              <span className="text-brand-accent italic">Directory.</span>
            </h3>
            <p className="text-lg text-brand-gray/60 font-light leading-relaxed mb-12">
              The requested data packet has been moved, purged, or never existed
              within this architectural layer. Return to the primary node to
              re-initialize your connection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                to="/"
                aria-label="Return to homepage and restore session"
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 text-lg font-black text-brand-dark bg-brand-accent rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(0,245,212,0.4)]"
              >
                <FiArrowLeft
                  className="group-hover:-translate-x-2 transition-transform"
                  aria-hidden="true"
                />
                <span>RESTORE_SESSION</span>
              </Link>

              <aside className="flex flex-col items-start text-left opacity-20">
                <div className="flex items-center gap-2 text-[10px] font-mono text-white uppercase tracking-widest">
                  <FiTerminal aria-hidden="true" /> system_recovery: active
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-white uppercase tracking-widest">
                  <FiActivity aria-hidden="true" /> trace_id: {traceId}
                </div>
              </aside>
            </div>
          </div>
        </motion.section>

        {/* --- Decorative Corner Labels --- */}
        <footer className="contents" aria-hidden="true">
          <div className="absolute top-10 left-10 font-mono text-[10px] text-white/10 uppercase tracking-widest hidden md:block">
            Directory_Error_Log: WBX-404
          </div>
          <div className="absolute bottom-10 right-10 font-mono text-[10px] text-white/10 uppercase tracking-widest hidden md:block">
            Weblynx_OS // Failure_Handling_Module
          </div>
        </footer>

        <style jsx>{`
          .text-outline {
            -webkit-text-stroke: 1.5px #00f5d4;
            color: transparent;
          }
        `}</style>
      </main>
    </>
  );
};

export default NotFound;
