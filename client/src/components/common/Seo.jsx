// client/src/components/common/Seo.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  canonical,
  type = "website",
}) => {
  const baseDomain = "https://www.weblynxinfotech.com";

  const defaultTitle = "Weblynx Infotech | Digital Systems Engineering";

  const defaultDescription =
    "Pune's premier digital engineering firm specializing in high-stakes MERN stack development, surgical SEO, and scalable architectural solutions.";

  const defaultKeywords =
    "Weblynx Infotech, MERN Stack, React Developer Pune, Node.js Engineering, Custom Web Applications, Digital Systems, SaaS Architecture, SEO Systems, Shubham Pawale";

  const defaultOgImage = `${baseDomain}/og-image.png`;

  const finalTitle = title ? `${title} | Weblynx Infotech` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalUrl = ogUrl || canonical || baseDomain;

  // --- Schema.org Structured Data (JSON-LD) ---
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Weblynx Infotech",
    url: baseDomain,
    logo: defaultOgImage,
    founder: {
      "@type": "Person",
      name: "Shubham Pawale",
      jobTitle: "Lead Developer & Founder",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "MH",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/shubhampawale/",
      "https://github.com/shubhampawale7",
      "https://www.instagram.com/weblynxinfotech/",
    ],
  };

  return (
    <Helmet>
      {/* --- PRIMARY METADATA --- */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={finalUrl} />
      <meta name="author" content="Shubham Pawale" />

      {/* --- OPEN GRAPH / SOCIAL LAYER --- */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={ogTitle || finalTitle} />
      <meta
        property="og:description"
        content={ogDescription || finalDescription}
      />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:site_name" content="Weblynx Infotech" />

      {/* --- TWITTER / X LAYER --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={ogTitle || finalTitle} />
      <meta
        name="twitter:description"
        content={ogDescription || finalDescription}
      />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      {/* --- SYSTEM / UI META --- */}
      <meta name="theme-color" content="#0D1B2A" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* --- STRUCTURED DATA --- */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default Seo;
