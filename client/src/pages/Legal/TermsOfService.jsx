// client/src/pages/Legal/TermsOfService.jsx
import React from "react";
import Seo from "../../components/common/Seo.jsx";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiCheckSquare,
  FiAward,
  FiLink,
  FiAlertTriangle,
  FiShield,
  FiMail,
} from "react-icons/fi";

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

const TermsOfService = () => {
  return (
    <>
      <Seo
        title="Terms of Service | Weblynx Infotech"
        description="Read the Terms of Service for using the Weblynx Infotech website and engaging with our services."
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
                  Terms of Service
                </h1>
                <p className="text-lg mt-4 text-brand-light-blue dark:text-brand-gray">
                  Last updated: August 31, 2025
                </p>
              </div>

              {/* Apply the custom 'prose-brand' theme here */}
              <div className="prose prose-brand lg:prose-xl mx-auto dark:prose-invert">
                <SectionTitle icon={FiCheckSquare}>
                  1. Agreement to Terms
                </SectionTitle>
                <p>
                  By accessing or using our website
                  (https://www.weblynxinfotech.com), you agree to be bound by
                  these Terms of Service. If you disagree with any part of the
                  terms, then you may not access the Service.
                </p>

                <SectionTitle icon={FiAward}>
                  2. Intellectual Property
                </SectionTitle>
                <p>
                  The Service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  Weblynx Infotech. Our trademarks may not be used without prior
                  written consent.
                </p>

                <SectionTitle icon={FiLink}>
                  3. Links To Other Web Sites
                </SectionTitle>
                <p>
                  Our Service may contain links to third-party web sites or
                  services that are not owned or controlled by Weblynx Infotech.
                  We have no control over, and assume no responsibility for,
                  their content or practices.
                </p>

                <SectionTitle icon={FiAlertTriangle}>
                  4. Limitation of Liability
                </SectionTitle>
                <p>
                  In no event shall Weblynx Infotech, nor its directors or
                  employees, be liable for any indirect, incidental, special,
                  consequential or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses, resulting from your use of the Service.
                </p>

                <SectionTitle icon={FiShield}>5. Governing Law</SectionTitle>
                <p>
                  These Terms shall be governed and construed in accordance with
                  the laws of India, within the jurisdiction of Pune,
                  Maharashtra, without regard to its conflict of law provisions.
                </p>

                <SectionTitle icon={FiMail}>6. Contact Us</SectionTitle>
                <p>
                  If you have any questions about these Terms, please contact us
                  at: <strong>weblynxinfotech@gmail.com</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsOfService;
