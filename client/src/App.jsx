// client/src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext.jsx";

// Main Pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

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
import ServicePackagesPage from "./pages/Packages/ServicePackagesPage.jsx";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy.jsx";
import TermsOfService from "./pages/Legal/TermsOfService.jsx";

// --- PERFORMANCE: Import blog pages dynamically with React.lazy ---
const BlogListingPage = React.lazy(() =>
  import("./pages/Blog/BlogListingPage.jsx")
);
const BlogPostPage = React.lazy(() => import("./pages/Blog/BlogPostPage.jsx"));

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app-container flex flex-col min-h-screen ${theme}`}>
      <Router>
        <ScrollToBegin />
        <Header />
        <main className="flex-grow">
          {/* --- PERFORMANCE: Suspense wraps Routes for code splitting --- */}
          <Suspense
            fallback={
              <div className="flex h-screen w-full items-center justify-center">
                <div>Loading...</div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<ServicePackagesPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />

              {/* Blog Routes */}
              <Route path="/blog" element={<BlogListingPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              {/* Detailed Service Pages */}
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

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
        <FloatingWhatsAppButton />
      </Router>
    </div>
  );
}

export default App;
