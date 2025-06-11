// client/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext.jsx";

// Import your main pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx"; // This is now the Services Index Page
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

// Import ALL detailed service components (they will now be their own routes)
import CustomWebApplications from "./pages/Services/CustomWebApplications.jsx";
import MobileAppDevelopment from "./pages/Services/MobileAppDevelopment.jsx";
import WordPressSiteCreation from "./pages/Services/WordPressSiteCreation.jsx";
import SeoOptimization from "./pages/Services/SeoOptimization.jsx";
import ApiIntegration from "./pages/Services/ApiIntegration.jsx";
import FullStackDevelopment from "./pages/Services/FullStackDevelopment.jsx";
import SupportManagementServices from "./pages/Services/SupportManagementServices.jsx";

// Import layout components
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTopButton from "./components/common/ScrollToTopButton.jsx";
import FloatingWhatsAppButton from "./components/common/FloatingWhatsAppButton.jsx"; // Import the new component

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app-container flex flex-col min-h-screen ${theme}`}>
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/contact" element={<Contact />} />

            {/* ROUTES FOR EACH DETAILED SERVICE PAGE */}
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
        </main>
        <Footer />
        <ScrollToTopButton />
        <FloatingWhatsAppButton /> {/* Add the floating WhatsApp button here */}
      </Router>
    </div>
  );
}

export default App;
