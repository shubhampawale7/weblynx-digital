// client/src/pages/Legal/PrivacyPolicy.jsx
import React from "react";
import Seo from "../../components/common/Seo.jsx";
import { motion } from "framer-motion";
import { FiShield, FiDatabase, FiSettings, FiMail } from "react-icons/fi";

// Helper component for section titles with on-brand styling
const SectionTitle = ({ icon: Icon, children }) => {
  return (
    <div className="flex items-center gap-4 not-prose mb-4">
      <div className="p-3 rounded-lg bg-brand-accent/20">
        <Icon className="w-6 h-6 text-brand-accent" />
      </div>
      <h2 className="!my-0 font-display text-2xl font-bold text-brand-dark dark:text-white">
        {children}
      </h2>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <>
      <Seo
        title="Privacy Policy | Weblynx Infotech"
        description="Read the Privacy Policy for Weblynx Infotech to understand how we collect, use, and protect your data."
      />
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        <div className="relative">
          {/* Background Grid */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-brand-dark bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

          <div className="container mx-auto px-6 py-20 sm:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <h1 className="font-display text-5xl md:text-7xl font-bold text-brand-dark dark:text-white tracking-tighter">
                  Privacy Policy
                </h1>
                <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
                  Last updated: August 31, 2025
                </p>
              </div>

              {/* Apply the custom 'prose-brand' theme here */}
              <div className="prose prose-brand lg:prose-xl mx-auto dark:prose-invert">
                <SectionTitle icon={FiDatabase}>
                  Information We Collect
                </SectionTitle>
                <p>
                  We collect information to provide and improve our Service to
                  you. This includes Personal Data you provide voluntarily (like
                  name and email via our contact form) and Usage Data collected
                  automatically (like IP address and browser type via analytics
                  tools) to help us understand how our Service is used.
                </p>

                <SectionTitle icon={FiSettings}>
                  How We Use Your Data
                </SectionTitle>
                <p>
                  Weblynx Infotech uses the collected data to provide our
                  Service, to respond to your inquiries, to gather analysis for
                  Service improvement, to monitor usage, and to detect and
                  prevent technical issues.
                </p>

                <SectionTitle icon={FiShield}>Security of Data</SectionTitle>
                <p>
                  The security of your data is important to us. While we strive
                  to use commercially acceptable means to protect your Personal
                  Data, remember that no method of transmission over the
                  Internet or electronic storage is 100% secure, and we cannot
                  guarantee its absolute security.
                </p>

                <SectionTitle icon={FiMail}>Contact Us</SectionTitle>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us by email at:{" "}
                  <strong>weblynxinfotech@gmail.com</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
