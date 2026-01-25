// client/src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext.jsx";
import { motion } from "framer-motion";
import { FiActivity } from "react-icons/fi";

// Main Pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import ServicePackagesPage from "./pages/Packages/ServicePackagesPage.jsx";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy.jsx";
import TermsOfService from "./pages/Legal/TermsOfService.jsx";

// Service Detail Pages
import CustomWebApplications from "./pages/Services/CustomWebApplications.jsx";
import MobileAppDevelopment from "./pages/Services/MobileAppDevelopment.jsx";
import WordPressSiteCreation from "./pages/Services/WordPressSiteCreation.jsx";
import SeoOptimization from "./pages/Services/SeoOptimization.jsx";
import ApiIntegration from "./pages/Services/ApiIntegration.jsx";
import FullStackDevelopment from "./pages/Services/FullStackDevelopment.jsx";
import SupportManagementServices from "./pages/Services/SupportManagementServices.jsx";

// Layout & Common Components
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTopButton from "./components/common/ScrollToTopButton.jsx";
import FloatingWhatsAppButton from "./components/common/FloatingWhatsAppButton.jsx";
import ScrollToBegin from "./components/common/ScrollToBegin.jsx";

// --- PERFORMANCE: Dynamic Loading ---
const BlogListingPage = React.lazy(
  () => import("./pages/Blog/BlogListingPage.jsx"),
);
const BlogPostPage = React.lazy(() => import("./pages/Blog/BlogPostPage.jsx"));

// Technical "System Initializing" Spinner
const LoadingSpinner = () => (
  <div className="flex flex-col h-screen w-full items-center justify-center bg-brand-dark">
    <div className="relative flex items-center justify-center">
      <motion.div
        className="w-20 h-20 rounded-full border border-brand-accent/20 border-t-brand-accent shadow-[0_0_20px_rgba(0,245,212,0.2)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute font-mono text-[8px] text-brand-accent animate-pulse">
        WBX_OS
      </div>
    </div>
    <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-brand-gray uppercase tracking-[0.4em]">
      <FiActivity className="text-brand-accent animate-pulse" />
      Initializing_Environment
    </div>
  </div>
);

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`app-container flex flex-col min-h-screen bg-brand-dark selection:bg-brand-accent selection:text-brand-dark`}
    >
      <Router>
        <ScrollToBegin />
        <Header />

        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<ServicePackagesPage />} />
            <Route path="/our-work" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />

            {/* Blog Nodes */}
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {/* Legal Protocol */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

            {/* Service Arsenal Nodes */}
            <Route
              path="/services/custom-web-applications"
              element={<CustomWebApplications />}
            />
            <Route
              path="/services/mobile-app-development"
              element={<MobileAppDevelopment />}
            />
            <Route
              path="/services/wordpress-site-creation"
              element={<WordPressSiteCreation />}
            />
            <Route
              path="/services/seo-optimization"
              element={<SeoOptimization />}
            />
            <Route
              path="/services/api-integration"
              element={<ApiIntegration />}
            />
            <Route
              path="/services/full-stack-development"
              element={<FullStackDevelopment />}
            />
            <Route
              path="/services/support-management-services"
              element={<SupportManagementServices />}
            />

            {/* System 404 Handshake */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
        <ScrollToTopButton />
        <FloatingWhatsAppButton />
      </Router>
    </div>
  );
}

export default App;
