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
}) => {
  const defaultTitle = "Weblynx Infotech - Your Digital Services Agency"; // UPDATED
  const defaultDescription =
    "Weblynx Infotech offers expert MERN stack development, WordPress solutions, SEO optimization, and mobile app development to elevate your digital presence."; // UPDATED
  const defaultKeywords =
    "Weblynx Infotech, digital services, web development, MERN stack, React, Node.js, Express.js, MongoDB, WordPress, SEO, API integration, full stack development, mobile app development, iOS, Android, custom web applications, web solutions, digital agency, support and management"; // UPDATED
  const defaultOgImage = "https://www.weblynxinfotech.com/weblynx-logo.png"; // UPDATED: Use your new domain's URL
  const baseDomain = "https://www.weblynxinfotech.com"; // New variable for the base domain

  const finalTitle = title ? `${title} | Weblynx Infotech` : defaultTitle; // UPDATED

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonical || ogUrl || baseDomain} />{" "}
      {/* UPDATED to use baseDomain */}
      {/* Open Graph / Facebook Meta Tags (for social sharing) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || baseDomain} />{" "}
      {/* UPDATED to use baseDomain */}
      <meta property="og:title" content={ogTitle || finalTitle} />
      <meta
        property="og:description"
        content={ogDescription || description || defaultDescription}
      />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      {/* Twitter Meta Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl || baseDomain} />{" "}
      {/* UPDATED to use baseDomain */}
      <meta property="twitter:title" content={ogTitle || finalTitle} />
      <meta
        property="twitter:description"
        content={ogDescription || description || defaultDescription}
      />
      <meta property="twitter:image" content={ogImage || defaultOgImage} />
    </Helmet>
  );
};

export default Seo;
