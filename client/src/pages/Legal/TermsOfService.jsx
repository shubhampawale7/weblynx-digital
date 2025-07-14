// client/src/pages/Legal/TermsOfService.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Seo from "../../components/common/Seo.jsx";
import { motion } from "framer-motion";
// FIXED: Removed non-existent FiGavel and added FiShield
import {
  FiFileText,
  FiCheckSquare,
  FiAward,
  FiLink,
  FiAlertTriangle,
  FiShield,
  FiMail,
} from "react-icons/fi";

// Helper component for section titles with icons
const SectionTitle = ({ icon, children }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="flex items-center gap-4 not-prose">
      <div
        className={`p-2 rounded-lg ${
          isDark ? "bg-purple-900/30" : "bg-purple-100"
        }`}
      >
        {React.createElement(icon, {
          className: "w-6 h-6 text-purple-600 dark:text-purple-400",
        })}
      </div>
      <h2 className="!my-0">{children}</h2>
    </div>
  );
};

const TermsOfService = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Terms of Service | Weblynx Infotech"
        description="Read the Terms of Service for using the Weblynx Infotech website and engaging with our services."
      />
      <div className="container mx-auto px-4 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div
              className={`inline-block p-5 rounded-full mb-6 ${
                isDark ? "bg-purple-900/20" : "bg-purple-100/80"
              }`}
            >
              <FiFileText className="w-16 h-16 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">Terms of Service</h1>
            <p className="text-lg mt-2 text-gray-500">
              Last updated: July 15, 2025
            </p>
          </div>

          <div
            className={`prose prose-lg lg:prose-xl mx-auto ${
              isDark ? "prose-invert" : ""
            }
                                   prose-headings:font-bold prose-a:text-purple-500 hover:prose-a:text-purple-600
                                   prose-blockquote:border-l-purple-500`}
          >
            <SectionTitle icon={FiCheckSquare}>
              1. Agreement to Terms
            </SectionTitle>
            <p>
              By accessing or using our website
              (https://www.weblynxinfotech.com), you agree to be bound by these
              Terms of Service. If you disagree with any part of the terms, then
              you may not access the Service.
            </p>

            <SectionTitle icon={FiAward}>2. Intellectual Property</SectionTitle>
            <p>
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of Weblynx Infotech.
              Our trademarks may not be used without prior written consent.
            </p>

            <SectionTitle icon={FiLink}>
              3. Links To Other Web Sites
            </SectionTitle>
            <p>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by Weblynx Infotech. We have no
              control over, and assume no responsibility for, their content or
              practices.
            </p>

            <SectionTitle icon={FiAlertTriangle}>
              4. Limitation of Liability
            </SectionTitle>
            <p>
              In no event shall Weblynx Infotech, nor its directors or
              employees, be liable for any indirect, incidental, special,
              consequential or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses,
              resulting from your use of the Service.
            </p>

            {/* FIXED: Replaced FiGavel with FiShield */}
            <SectionTitle icon={FiShield}>5. Governing Law</SectionTitle>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of India, within the jurisdiction of Pune, Maharashtra,
              without regard to its conflict of law provisions.
            </p>

            <SectionTitle icon={FiMail}>6. Contact Us</SectionTitle>
            <p>
              If you have any questions about these Terms, please contact us at:{" "}
              <strong>weblynxinfotech@gmail.com</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
