// client/src/pages/Blog/BlogListingPage.jsx
import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { blogPosts } from "../../data/blogData.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const categories = ["All", "Trends", "Business", "Tutorials"];
const featuredPost = blogPosts[0];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } },
};

const BlogListingPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts.slice(1)
      : blogPosts.slice(1).filter((post) => post.category === activeCategory);

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <Seo
        title="Blog | Weblynx Infotech"
        description="Explore insights, tutorials, and the latest trends in web development, SEO, and digital strategy from the experts at Weblynx Infotech."
        ogUrl="https://www.weblynxinfotech.com/blog"
        canonical="https://www.weblynxinfotech.com/blog"
      />

      <section className="py-20 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-cyan-400">
            INSIGHTS & IDEAS
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Our expert analysis on technology, design, and the future of digital
            business.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-12 md:mb-16 lg:mb-24"
        >
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <LazyLoadImage
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                effect="blur"
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                {featuredPost.category}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-center lg:justify-start text-sm text-gray-500 dark:text-gray-500">
                <span>{featuredPost.author}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.date}</span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* --- UPDATED: Grid now starts with 2 columns on the smallest screens --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        >
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.slug}
                variants={itemVariants}
                layout
                exit="exit"
              >
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl mb-4 sm:mb-6 shadow-lg">
                    <LazyLoadImage
                      src={post.imageUrl}
                      alt={post.title}
                      effect="blur"
                      className="w-full h-40 sm:h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                    {post.category}
                  </p>
                  <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  {/* Hide excerpt on the smallest screens to save space */}
                  <p className="hidden sm:block text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogListingPage;
