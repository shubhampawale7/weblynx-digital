// client/src/pages/Legal/PrivacyPolicy.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Seo from "../../components/common/Seo.jsx";
import { motion } from "framer-motion";
import { FiShield, FiDatabase, FiSettings, FiMail } from "react-icons/fi";

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

const PrivacyPolicy = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Privacy Policy | Weblynx Infotech"
        description="Read the Privacy Policy for Weblynx Infotech to understand how we collect, use, and protect your data."
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
              <FiShield className="w-16 h-16 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">Privacy Policy</h1>
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
            <SectionTitle icon={FiDatabase}>
              Information We Collect
            </SectionTitle>
            <p>
              We collect information to provide and improve our Service to you.
              This includes Personal Data you provide voluntarily (like name and
              email via our contact form) and Usage Data collected automatically
              (like IP address and browser type via analytics tools) to help us
              understand how our Service is used.
            </p>

            <SectionTitle icon={FiSettings}>How We Use Your Data</SectionTitle>
            <p>
              Weblynx Infotech uses the collected data to provide our Service,
              to respond to your inquiries, to gather analysis for Service
              improvement, to monitor usage, and to detect and prevent technical
              issues.
            </p>

            <SectionTitle icon={FiShield}>Security of Data</SectionTitle>
            <p>
              The security of your data is important to us. While we strive to
              use commercially acceptable means to protect your Personal Data,
              remember that no method of transmission over the Internet or
              electronic storage is 100% secure, and we cannot guarantee its
              absolute security.
            </p>

            <SectionTitle icon={FiMail}>Contact Us</SectionTitle>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us by email at: <strong>weblynxinfotech@gmail.com</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
