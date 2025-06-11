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
  const defaultTitle = "Weblynx - Your Digital Services Agency";
  const defaultDescription =
    "Weblynx offers MERN stack development, WordPress solutions, SEO optimization, and mobile app development to elevate your digital presence.";
  const defaultKeywords =
    "Weblynx, digital services, web development, MERN stack, React, Node.js, Express.js, MongoDB, WordPress, SEO, API integration, full stack development, mobile app development, iOS, Android, custom web applications, web solutions, digital agency, support and management";
  const defaultOgImage = "https://www.weblynx.com/weblynx-logo.png"; // Replace with your actual default OG image URL

  // Ensure title is always provided
  const finalTitle = title ? `${title} | Weblynx` : defaultTitle;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link
        rel="canonical"
        href={canonical || ogUrl || "https://www.weblynx.com/"}
      />{" "}
      {/* Replace with your actual base URL */}
      {/* Open Graph / Facebook Meta Tags (for social sharing) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || "https://www.weblynx.com/"} />
      <meta property="og:title" content={ogTitle || finalTitle} />
      <meta
        property="og:description"
        content={ogDescription || description || defaultDescription}
      />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      {/* Twitter Meta Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={ogUrl || "https://www.weblynx.com/"}
      />
      <meta property="twitter:title" content={ogTitle || finalTitle} />
      <meta
        property="twitter:description"
        content={ogDescription || description || defaultDescription}
      />
      <meta property="twitter:image" content={ogImage || defaultOgImage} />
      {/* Favicon - usually handled by index.html, but can be set here if dynamic */}
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Helmet>
  );
};

export default Seo;
