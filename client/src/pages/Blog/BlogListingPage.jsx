// client/src/pages/Blog/BlogListingPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo.jsx";
import { blogPosts } from "../../data/blogData.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  FiArrowRight,
  FiActivity,
  FiTerminal,
  FiMaximize2,
  FiFilter,
} from "react-icons/fi";
import "react-lazy-load-image-component/src/effects/blur.css";

const categories = ["All", "Trends", "Business", "Tutorials"];
const featuredPost = blogPosts[0];

const BlogListingPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts.slice(1)
      : blogPosts.slice(1).filter((post) => post.category === activeCategory);

  return (
    <>
      <Seo
        title="Archive | Weblynx Digital Engineering"
        description="Technical insights, architectural tutorials, and digital growth strategies from the Weblynx engineering team."
      />

      <main className="pt-32 pb-20 bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark">
        {/* --- HEADER: Archive Terminal --- */}
        <header className="container mx-auto px-6 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-100 dark:border-white/5 pb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-brand-accent"></span>
                <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em]">
                  Knowledge_Archive
                </span>
              </div>
              <h1 className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase dark:text-white">
                The <br />{" "}
                <span className="text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase dark:text-white">
                  Insights.
                </span>
              </h1>
            </motion.div>

            <div className="flex flex-col items-end opacity-20 font-mono text-[10px] uppercase tracking-widest hidden md:flex">
              <div className="flex items-center gap-2">
                <FiTerminal /> repo_v4.0.2
              </div>
              <div className="flex items-center gap-2">
                <FiActivity /> data_stream: active
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6">
          {/* --- FILTER TERMINAL --- */}
          <div className="flex items-center gap-6 mb-16 overflow-x-auto pb-4 no-scrollbar">
            <div className="flex items-center gap-2 text-brand-accent font-mono text-[10px] uppercase tracking-widest opacity-40">
              <FiFilter /> Filter_By:
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 border rounded-full whitespace-nowrap
                  ${
                    activeCategory === category
                      ? "bg-brand-accent border-brand-accent text-brand-dark font-black shadow-lg shadow-brand-accent/20"
                      : "border-gray-200 dark:border-white/10 text-brand-light-blue dark:text-brand-gray hover:border-brand-accent/50"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* --- FEATURED MODULE --- */}
          <FeaturedPost post={featuredPost} />

          {/* --- ARCHIVE GRID --- */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1.5px currentColor;
          color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

const FeaturedPost = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-20"
  >
    <Link
      to={`/blog/${post.slug}`}
      className="group relative block p-8 md:p-12 rounded-[3rem] bg-gray-50 dark:bg-brand-dark-blue/20 border border-gray-100 dark:border-white/10 overflow-hidden transition-all duration-700 hover:border-brand-accent/30"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/10 shadow-2xl">
          <LazyLoadImage
            src={post.imageUrl}
            alt={post.title}
            effect="blur"
            className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
          />
        </div>
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-brand-accent text-brand-dark font-mono text-[10px] font-black uppercase tracking-widest rounded">
              Featured_Entry
            </span>
            <span className="font-mono text-[10px] opacity-30 uppercase tracking-widest">
              {post.category} // {post.date}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white tracking-tighter uppercase leading-[0.9] mb-6 group-hover:text-brand-accent transition-colors">
            {post.title}
          </h2>
          <p className="text-lg text-brand-light-blue dark:text-brand-gray font-light leading-relaxed mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
            {post.excerpt}
          </p>
          <div className="inline-flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-widest text-brand-accent">
            Execute Read{" "}
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
      {/* Visual Watermark */}
      <FiTerminal className="absolute -bottom-10 -right-10 text-[20rem] opacity-[0.02] dark:opacity-[0.05]" />
    </Link>
  </motion.div>
);

const BlogPostCard = ({ post }) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="bg-white dark:bg-brand-dark p-10 group relative flex flex-col justify-between overflow-hidden transition-all duration-500 hover:bg-brand-accent/5"
  >
    <div className="relative z-10">
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 border border-gray-100 dark:border-white/10">
        <LazyLoadImage
          src={post.imageUrl}
          alt={post.title}
          effect="blur"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="flex justify-between items-start mb-6">
        <span className="font-mono text-[10px] text-brand-accent border border-brand-accent/30 px-2 py-0.5 rounded tracking-widest uppercase">
          {post.category}
        </span>
        <span className="font-mono text-[9px] opacity-20 uppercase tracking-tighter italic">
          {post.date}
        </span>
      </div>
      <h3 className="text-2xl font-bold dark:text-white tracking-tighter leading-tight uppercase group-hover:text-brand-accent transition-colors mb-4">
        {post.title}
      </h3>
      <p className="text-sm text-brand-light-blue dark:text-brand-gray font-light line-clamp-2 opacity-50 group-hover:opacity-100 transition-opacity">
        {post.excerpt}
      </p>
    </div>

    <Link
      to={`/blog/${post.slug}`}
      className="mt-10 relative z-10 inline-flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-[0.3em] text-brand-accent"
    >
      Deploy_Entry <FiMaximize2 />
    </Link>

    {/* Surgical Bottom Accent */}
    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-accent group-hover:w-full transition-all duration-700" />
  </motion.div>
);

export default BlogListingPage;
