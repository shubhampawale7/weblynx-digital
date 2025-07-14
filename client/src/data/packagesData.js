// client/src/data/packagesData.js
import startupAnimation from "../assets/lottie-animations/startup-rocket.json";
import growthAnimation from "../assets/lottie-animations/business-growth.json";
import ecommerceAnimation from "../assets/lottie-animations/ecommerce-store.json";
import brochureAnimation from "../assets/lottie-animations/digital-brochure.json";
import backendAnimation from "../assets/lottie-animations/backend-api.json";
import seoAnimation from "../assets/lottie-animations/seo-marketing.json";

export const packagesData = [
  {
    title: "Digital Brochure",
    description:
      "An elegant, single-page website perfect for individuals and freelancers to showcase their portfolio and contact information.",
    features: [
      "Single-Page Landing Site",
      "Mobile-First Design",
      "Contact Form",
      "Hosting Setup",
    ],
    ctaText: "Get Online",
    isHighlighted: false,
    lottieAnimation: brochureAnimation,
  },
  {
    title: "Startup Launchpad",
    description:
      "Perfect for new businesses needing a professional, foundational web presence to attract their first customers.",
    features: [
      "Responsive WordPress Website",
      "5-7 Core Pages",
      "Basic SEO Setup",
      "Social Media Links",
    ],
    ctaText: "Request a Quote",
    isHighlighted: false,
    lottieAnimation: startupAnimation,
  },
  {
    title: "Business Growth Engine",
    description:
      "For established businesses ready to scale with a high-performance, custom-built web application.",
    features: [
      "Custom Web Application (MERN)",
      "Advanced UI/UX Design",
      "API Integration",
      "Scalable Database",
      "Comprehensive SEO",
      "Priority Support",
    ],
    ctaText: "Request a Quote",
    isHighlighted: true,
    lottieAnimation: growthAnimation,
  },
  {
    title: "E-commerce Powerhouse",
    description:
      "A complete solution for businesses looking to sell products online with a secure and scalable platform.",
    features: [
      "Custom E-commerce Platform",
      "Secure Payment Gateway",
      "Inventory Management",
      "Customer Accounts",
    ],
    ctaText: "Request a Quote",
    isHighlighted: false,
    lottieAnimation: ecommerceAnimation,
  },
  {
    title: "Backend & API Development",
    description:
      "For clients who need a robust, scalable, and secure engine to power their application.",
    features: [
      "Custom REST or GraphQL API",
      "Database Architecture",
      "User Authentication",
      "Third-Party Integrations",
    ],
    ctaText: "Power Your App",
    isHighlighted: false,
    lottieAnimation: backendAnimation,
  },
  {
    title: "SEO & Marketing Starter",
    description:
      "For businesses with an existing website that need to increase their visibility and attract organic traffic.",
    features: [
      "Comprehensive SEO Audit",
      "On-Page Optimization",
      "Local SEO Setup",
      "Monthly Reporting",
    ],
    ctaText: "Boost My Rankings",
    isHighlighted: false,
    lottieAnimation: seoAnimation,
  },
];
