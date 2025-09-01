// client/src/data/packagesData.js
import startupAnimation from "../assets/lottie-animations/startup-rocket.json";
import growthAnimation from "../assets/lottie-animations/business-growth.json";
import ecommerceAnimation from "../assets/lottie-animations/ecommerce-store.json";
import brochureAnimation from "../assets/lottie-animations/digital-brochure.json";
import backendAnimation from "../assets/lottie-animations/backend-api.json";
import seoAnimation from "../assets/lottie-animations/seo-marketing.json";
import giftingAnimation from "../assets/lottie-animations/gifting-animation.json";

// --- ADD NEW LOTTIE ANIMATIONS FOR THE NEW PACKAGES ---
// Note: You will need to find and add these .json files to your assets folder.
import portfolioAnimation from "../assets/lottie-animations/portfolio-resume.json";
import lmsAnimation from "../assets/lottie-animations/lms-courses.json";
import maintenanceAnimation from "../assets/lottie-animations/maintenance-support.json";

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
    title: "Personalized Gift Website",
    description:
      "A unique and heartfelt digital gift. Create a beautiful, private website for your loved one to celebrate a birthday, anniversary, or any special occasion.",
    features: [
      "Custom Photo & Video Gallery",
      "Personalized Messages & Notes",
      "Password Protection for Privacy",
      "Mobile-Friendly Design",
    ],
    ctaText: "Create a Gift",
    isHighlighted: true,
    lottieAnimation: giftingAnimation,
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
    isHighlighted: false,
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
  // --- NEW PACKAGE ADDED HERE ---
  {
    title: "Interactive Portfolios & Resumes",
    description:
      "A stunning digital resume and portfolio to help students and job seekers stand out and land their dream job.",
    features: [
      "Modern, Professional Templates",
      "Animated Skills Showcase",
      "Easy-to-Update Project Gallery",
      "Contact Form Integration",
    ],
    ctaText: "Build Your Portfolio",
    isHighlighted: false,
    lottieAnimation: portfolioAnimation,
  },
  // --- NEW PACKAGE ADDED HERE ---
  {
    title: "Learning Management System (LMS)",
    description:
      "Launch your own online academy. We build and configure powerful Learning Management Systems for courses and student management.",
    features: [
      "Online Course Creation & Hosting",
      "Student Enrollment & Management",
      "Secure Payment Integration",
      "Quizzes & Certification",
    ],
    ctaText: "Launch Your Academy",
    isHighlighted: false,
    lottieAnimation: lmsAnimation,
  },
  // --- NEW PACKAGE ADDED HERE ---
  {
    title: "Maintenance & Support",
    description:
      "Ensure the long-term success and optimal performance of your digital products with our comprehensive support plans.",
    features: [
      "Regular Backups",
      "Security Monitoring",
      "Performance Optimization",
      "Monthly Updates & Bug Fixes",
    ],
    ctaText: "Get a Support Plan",
    isHighlighted: false,
    lottieAnimation: maintenanceAnimation,
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
