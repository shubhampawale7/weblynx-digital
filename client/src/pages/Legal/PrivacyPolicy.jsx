// client/src/pages/Legal/PrivacyPolicy.jsx
import React from "react";
import Seo from "../../components/common/Seo.jsx";
import { motion } from "framer-motion";
import {
  FiShield,
  FiDatabase,
  FiSettings,
  FiMail,
  FiActivity,
  FiTerminal,
  FiLock,
} from "react-icons/fi";

// Helper component for technical section modules
const ComplianceModule = ({ icon: Icon, title, code, children }) => {
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

      <div className="relative z-10 max-w-2xl">
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

const PrivacyPolicy = () => {
  return (
    <>
      <Seo
        title="Privacy Protocol | Weblynx Infotech"
        description="Data governance and privacy protocols for Weblynx Infotech digital services."
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
                  Data_Governance_v2.0
                </span>
              </div>
              <h1 className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase dark:text-white">
                Privacy <br />{" "}
                <span className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase dark:text-white">
                  Protocol.
                </span>
              </h1>
              <p className="mt-8 font-mono text-[10px] opacity-40 uppercase tracking-widest">
                Last Synchronized: August 31, 2025 // Pune_HQ
              </p>
            </motion.div>

            <div className="flex flex-col items-end opacity-20 font-mono text-[10px] uppercase tracking-widest hidden md:flex">
              <div className="flex items-center gap-2">
                <FiTerminal /> legal_docs_verified
              </div>
              <div className="flex items-center gap-2">
                <FiActivity /> compliance: optimal
              </div>
            </div>
          </div>
        </header>

        {/* --- CONTENT ENGINE --- */}
        <section className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto bg-gray-50/50 dark:bg-brand-dark-blue/10 border border-gray-100 dark:border-white/5 rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-3xl"
          >
            <ComplianceModule
              icon={FiDatabase}
              title="Data Ingestion"
              code="WP-COLLECT-01"
            >
              We aggregate specific parameters to optimize service delivery.
              This includes
              <span className="text-brand-dark dark:text-white font-medium">
                {" "}
                Personal Metadata{" "}
              </span>
              voluntarily submitted via communication channels and
              <span className="text-brand-dark dark:text-white font-medium">
                {" "}
                Operational Usage Data{" "}
              </span>
              captured automatically through architectural monitoring tools.
            </ComplianceModule>

            <ComplianceModule
              icon={FiSettings}
              title="Utilization Logic"
              code="WP-PROCESS-02"
            >
              Aggregated data is processed to maintain system integrity,
              facilitate high-fidelity client communication, monitor
              architectural performance, and implement preventative technical
              maintenance across our infrastructure.
            </ComplianceModule>

            <ComplianceModule
              icon={FiLock}
              title="Security Hardening"
              code="WP-SECURE-03"
            >
              We implement industry-standard encryption and commercially
              acceptable protection layers. However, acknowledge that no digital
              transmission channel offers
              <span className="text-brand-accent italic font-bold">
                {" "}
                absolute 0-day immunity.
              </span>
              We prioritize continuous security hardening for all stored assets.
            </ComplianceModule>

            <ComplianceModule
              icon={FiMail}
              title="Direct Uplink"
              code="WP-CONTACT-04"
            >
              Requests regarding data rectification or protocol inquiries should
              be dispatched to our primary data management node:
              <br />
              <a
                href="mailto:weblynxinfotech@gmail.com"
                className="text-brand-accent font-bold mt-2 block hover:underline"
              >
                weblynxinfotech@gmail.com
              </a>
            </ComplianceModule>
          </motion.div>
        </section>

        {/* Tactical Footnote */}
        <div className="mt-20 container mx-auto px-6 flex justify-center opacity-10">
          <div className="flex items-center gap-6 font-mono text-[9px] uppercase tracking-[0.4em]">
            <div className="h-px w-20 bg-current" />
            <FiShield /> End of Document // Auth: Legal_Engine
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

export default PrivacyPolicy;
