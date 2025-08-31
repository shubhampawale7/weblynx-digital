// client/src/pages/Blog/BlogListingPage.jsx
import React, { useState } from "react";
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
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const BlogListingPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts.slice(1)
      : blogPosts.slice(1).filter((post) => post.category === activeCategory);

  return (
    <>
      <Seo
        title="Blog | Weblynx Infotech"
        description="Explore insights, tutorials, and the latest trends in web development, SEO, and digital strategy from the experts at Weblynx Infotech."
        ogUrl="https://www.weblynxinfotech.com/blog"
        canonical="https://www.weblynxinfotech.com/blog"
      />

      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        <header className="py-20 sm:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container mx-auto px-6"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-brand-dark dark:text-white tracking-tighter">
              Insights & Ideas
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-brand-light-blue dark:text-brand-gray">
              Our expert analysis on technology, design, and the future of
              digital business.
            </p>
          </motion.div>
        </header>

        <div className="container mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-300
                  ${
                    activeCategory === category
                      ? "bg-brand-accent text-brand-dark"
                      : "bg-gray-100 dark:bg-brand-dark-blue/50 text-brand-light-blue dark:text-brand-gray hover:bg-gray-200 dark:hover:bg-brand-dark-blue"
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <FeaturedPost post={featuredPost} />

          <motion.div
            key={activeCategory} // Add key to re-trigger stagger on category change
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </>
  );
};

const FeaturedPost = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
    className="mb-16"
  >
    <Link
      to={`/blog/${post.slug}`}
      className="group block p-6 rounded-2xl bg-gray-50 dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <LazyLoadImage
            src={post.imageUrl}
            alt={post.title}
            effect="blur"
            className="w-full h-auto object-cover aspect-video transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
            <span className="px-3 py-1 text-xs font-bold text-brand-dark bg-brand-accent rounded-full">
              Featured Post
            </span>
            <span className="px-3 py-1 text-xs font-semibold text-brand-light-blue dark:text-brand-gray bg-gray-200 dark:bg-brand-dark rounded-full">
              {post.category}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-4 transition-colors group-hover:text-brand-accent dark:group-hover:text-brand-accent">
            {post.title}
          </h2>
          <p className="text-base sm:text-lg text-brand-light-blue dark:text-brand-gray mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-center lg:justify-start text-sm text-brand-gray">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const BlogPostCard = ({ post }) => (
  <motion.div
    variants={itemVariants}
    layout
    exit="exit"
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <Link
      to={`/blog/${post.slug}`}
      className="group block h-full p-4 rounded-2xl bg-white dark:bg-brand-dark-blue/30 border border-gray-200 dark:border-brand-light-blue/20 transition-shadow hover:shadow-xl"
    >
      <div className="overflow-hidden rounded-xl mb-4 shadow-md">
        <LazyLoadImage
          src={post.imageUrl}
          alt={post.title}
          effect="blur"
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-2">
        <p className="text-sm font-semibold text-brand-accent mb-2">
          {post.category}
        </p>
        <h3 className="font-display text-xl font-bold text-brand-dark dark:text-white mb-3 transition-colors group-hover:text-brand-accent dark:group-hover:text-brand-accent">
          {post.title}
        </h3>
        <p className="hidden sm:block text-sm text-brand-light-blue dark:text-brand-gray">
          {post.excerpt}
        </p>
      </div>
    </Link>
  </motion.div>
);

export default BlogListingPage;
