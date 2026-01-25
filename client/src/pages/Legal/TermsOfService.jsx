// client/src/pages/Legal/TermsOfService.jsx
import React from "react";
import Seo from "../../components/common/Seo.jsx";
import { motion } from "framer-motion";
import {
  FiCheckSquare,
  FiAward,
  FiLink,
  FiAlertTriangle,
  FiShield,
  FiMail,
  FiTerminal,
  FiActivity,
  FiCpu,
} from "react-icons/fi";

// Technical Section Module
const DirectiveModule = ({ icon: Icon, title, code, children }) => {
  return (
    <div className="group relative p-8 md:p-12 bg-white dark:bg-brand-dark border-b border-gray-100 dark:border-white/5 last:border-0 hover:bg-brand-accent/5 transition-all duration-500 overflow-hidden">
      {/* Module Metadata */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <span className="font-mono text-[10px] text-brand-accent border border-brand-accent/30 px-2 py-0.5 rounded tracking-widest uppercase">
          {code}
        </span>
        <div className="text-brand-accent opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
          <Icon size={24} />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-4">
          {title}
        </h2>
        <div className="text-lg text-brand-light-blue dark:text-brand-gray font-light leading-relaxed">
          {children}
        </div>
      </div>

      {/* Ghost Icon Watermark */}
      <div className="absolute -bottom-6 -right-6 opacity-[0.02] dark:opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 pointer-events-none">
        <Icon size={180} />
      </div>
    </div>
  );
};

const TermsOfService = () => {
  return (
    <>
      <Seo
        title="Terms of Service | Weblynx Infotech"
        description="Legal framework and service level agreements for engaging with Weblynx Infotech's digital engineering services."
      />

      <main className="pt-32 pb-20 bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark">
        {/* --- HEADER: Tactical Blueprint --- */}
        <header className="container mx-auto px-6 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-100 dark:border-white/5 pb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-brand-accent"></span>
                <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                  Service_Agreement_v4.0
                </span>
              </div>
              <h1 className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase dark:text-white">
                Terms of <br />{" "}
                <span className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase dark:text-white">
                  Service.
                </span>
              </h1>
              <p className="mt-8 font-mono text-[10px] opacity-40 uppercase tracking-widest">
                Latest Revision: August 31, 2025 // Sector_Pune
              </p>
            </motion.div>

            <div className="flex flex-col items-end opacity-20 font-mono text-[10px] uppercase tracking-widest hidden md:flex">
              <div className="flex items-center gap-2">
                <FiTerminal /> legal_protocol_active
              </div>
              <div className="flex items-center gap-2">
                <FiCpu /> jurisdiction: IN_PN
              </div>
            </div>
          </div>
        </header>

        {/* --- DIRECTIVE ENGINE --- */}
        <section className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto bg-gray-50/50 dark:bg-brand-dark-blue/10 border border-gray-100 dark:border-white/5 rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-3xl"
          >
            <DirectiveModule
              icon={FiCheckSquare}
              title="Agreement Initialization"
              code="TS-INIT-01"
            >
              By initializing access to
              <span className="text-brand-dark dark:text-white font-medium">
                {" "}
                https://www.weblynxinfotech.com
              </span>
              , you enter a binding agreement with these Terms. Disagreement
              with any specific parameter in this protocol requires immediate
              session termination.
            </DirectiveModule>

            <DirectiveModule
              icon={FiAward}
              title="Intellectual Assets"
              code="TS-ASSET-02"
            >
              All proprietary logic, original code, UI components, and
              functional features are the exclusive property of
              <span className="text-brand-dark dark:text-white font-medium">
                {" "}
                Weblynx Infotech
              </span>
              . Unauthorized replication or utilization of brand trademarks is
              strictly prohibited.
            </DirectiveModule>

            <DirectiveModule
              icon={FiLink}
              title="External Nodes"
              code="TS-EXTERNAL-03"
            >
              Our infrastructure may contain links to third-party domains not
              governed by Weblynx protocols. We assume zero liability for the
              data integrity or content accuracy of external service nodes.
            </DirectiveModule>

            <DirectiveModule
              icon={FiAlertTriangle}
              title="Liability Limitations"
              code="TS-LIMIT-04"
            >
              Weblynx Infotech, its Lead Developer, and associates are not
              liable for incidental, special, or consequential data losses
              resulting from Service utilization. This includes, without
              limitation, loss of revenue, data corruption, or system downtime.
            </DirectiveModule>

            <DirectiveModule
              icon={FiShield}
              title="Legal Jurisdiction"
              code="TS-JURIS-05"
            >
              These terms are governed by the laws of
              <span className="text-brand-dark dark:text-white font-medium">
                {" "}
                India
              </span>
              . Any disputes shall be resolved within the legal jurisdiction of
              Pune, Maharashtra.
            </DirectiveModule>

            <DirectiveModule
              icon={FiMail}
              title="Admin Uplink"
              code="TS-ADMIN-06"
            >
              Requests regarding technical terms or legal clarification should
              be dispatched to the administrative node:
              <br />
              <a
                href="mailto:weblynxinfotech@gmail.com"
                className="text-brand-accent font-bold mt-4 inline-block hover:underline"
              >
                weblynxinfotech@gmail.com
              </a>
            </DirectiveModule>
          </motion.div>
        </section>

        {/* Final Document Footnote */}
        <div className="mt-20 container mx-auto px-6 flex justify-center opacity-10">
          <div className="flex items-center gap-6 font-mono text-[9px] uppercase tracking-[0.4em]">
            <div className="h-px w-20 bg-current" />
            <FiActivity /> End of Technical Directive
            <div className="h-px w-20 bg-current" />
          </div>
        </div>
      </main>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1.5px currentColor;
          color: transparent;
        }
      `}</style>
    </>
  );
};

export default TermsOfService;
