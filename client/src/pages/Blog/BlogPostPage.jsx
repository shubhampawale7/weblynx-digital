// client/src/pages/Blog/BlogPostPage.jsx
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { FiLinkedin, FiTwitter, FiFacebook, FiArrowLeft } from "react-icons/fi";
import { blogPosts } from "../../data/blogData.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Framer Motion Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const BlogPostPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // This creates the "spotlight" effect that follows the scroll
  const spotlightY = useTransform(scrollYProgress, [0, 1], ["20%", "80%"]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-5xl font-bold mb-4">404 - Post Not Found</h1>
        <p className="mb-8 text-lg">
          We couldn't find the article you were looking for.
        </p>
        <Link
          to="/blog"
          className="px-6 py-3 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  const shareUrl = `https://www.weblynxinfotech.com/blog/${post.slug}`;

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title={`${post.title} | Weblynx Infotech Blog`}
        description={post.excerpt}
        ogUrl={shareUrl}
      />

      <div ref={containerRef} className="relative">
        {/* --- The subtle, scrolling spotlight background --- */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full -z-0 opacity-10 dark:opacity-20 blur-3xl"
          style={{
            y: spotlightY,
            background: isDark
              ? "radial-gradient(circle, #a855f7, transparent 60%)"
              : "radial-gradient(circle, #3b82f6, transparent 60%)",
          }}
        />

        <div className="relative z-10">
          {/* --- Back to Blog Link --- */}
          <div className="container max-w-5xl px-4 pt-20 mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FiArrowLeft />
              Back to all articles
            </Link>
          </div>

          <motion.article
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container max-w-3xl px-4 py-12 mx-auto"
          >
            <header className="mb-12">
              <motion.p
                variants={itemVariants}
                className="mb-4 text-base font-semibold text-purple-600 dark:text-purple-400"
              >
                {post.category}
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
              >
                {post.title}
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </motion.div>
            </header>

            <motion.figure
              variants={itemVariants}
              className="w-full my-12 overflow-hidden shadow-2xl rounded-2xl"
            >
              <LazyLoadImage
                src={post.imageUrl}
                alt={post.title}
                effect="blur"
                className="w-full h-auto"
              />
            </motion.figure>

            <motion.div
              variants={itemVariants}
              className={`prose prose-lg lg:prose-xl w-full max-w-none ${
                isDark ? "prose-invert" : ""
              } 
                                       prose-p:leading-relaxed prose-headings:font-bold prose-a:text-purple-500 hover:prose-a:text-purple-600
                                       prose-blockquote:border-l-purple-500 prose-blockquote:font-normal prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400`}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <motion.div
              variants={itemVariants}
              className="mt-16 pt-8 text-center border-t border-gray-200 dark:border-gray-800"
            >
              <h4 className="mb-4 font-semibold text-lg">Share This Article</h4>
              <div className="flex justify-center gap-6 text-2xl">
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-blue-500"
                >
                  <FiTwitter />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-blue-700"
                >
                  <FiLinkedin />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-blue-800"
                >
                  <FiFacebook />
                </a>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
