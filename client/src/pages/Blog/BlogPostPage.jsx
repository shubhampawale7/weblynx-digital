// client/src/pages/Blog/BlogPostPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import {
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiArrowLeft,
  FiClock,
  FiActivity,
  FiTag,
  FiMaximize2,
} from "react-icons/fi";
import { blogPosts } from "../../data/blogData.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!post) {
    return (
      <main className="pt-32 bg-white dark:bg-brand-dark min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <div className="font-mono text-brand-accent mb-4">
          [ 404_DATA_NOT_FOUND ]
        </div>
        <h1 className="text-5xl font-black dark:text-white uppercase tracking-tighter">
          Null Reference.
        </h1>
        <Link
          to="/blog"
          className="mt-8 px-8 py-4 bg-brand-accent text-brand-dark font-black rounded-full uppercase tracking-widest hover:scale-105 transition-all"
        >
          Return to Archive
        </Link>
      </main>
    );
  }

  return (
    <>
      <Seo
        title={`${post.title} | Weblynx Engineering`}
        description={post.excerpt}
        ogUrl={`https://www.weblynxinfotech.com/blog/${post.slug}`}
      />

      {/* Surgical Reading Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent origin-left z-[100] shadow-[0_0_15px_rgba(0,245,212,0.5)]"
        style={{ scaleX }}
      />

      <main className="pt-32 pb-20 bg-white dark:bg-brand-dark min-h-screen selection:bg-brand-accent selection:text-brand-dark">
        <div className="container mx-auto px-6">
          {/* Article Header */}
          <header className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-mono text-[10px] uppercase tracking-widest rounded">
                  {post.category}
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] opacity-30 uppercase tracking-widest">
                  <FiClock /> 6 min read
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black dark:text-white tracking-tighter leading-[0.9] uppercase mb-10">
                {post.title}
              </h1>

              <div className="flex items-center justify-between border-y border-gray-100 dark:border-white/5 py-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center text-brand-dark font-black shadow-lg">
                    SP
                  </div>
                  <div>
                    <p className="font-bold dark:text-white uppercase text-sm tracking-tighter">
                      {post.author}
                    </p>
                    <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
                      Lead Developer // {post.date}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex gap-4 opacity-30">
                  <FiActivity className="text-brand-accent animate-pulse" />
                  <span className="font-mono text-[10px] uppercase">
                    Data_Stream_Verified
                  </span>
                </div>
              </div>
            </motion.div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar Controls */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-40 space-y-12">
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30">
                    Engagement_Tools
                  </h4>
                  <ShareCard slug={post.slug} title={post.title} />
                </div>
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30">
                    Navigation
                  </h4>
                  <BackToBlogCard />
                </div>
                <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-3xl">
                  <FiTag className="text-brand-accent mb-4" />
                  <p className="text-[10px] font-mono opacity-50 leading-relaxed uppercase">
                    Tags: React, Architecture, Scalability, Weblynx_OS
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-9">
              <div className="relative rounded-[2.5rem] overflow-hidden mb-16 border border-gray-100 dark:border-white/10 group shadow-2xl">
                <LazyLoadImage
                  src={post.imageUrl}
                  alt={post.title}
                  effect="blur"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent pointer-events-none" />
              </div>

              <div
                className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-black 
                prose-p:text-brand-light-blue dark:prose-p:text-brand-gray prose-p:font-light prose-p:leading-relaxed
                prose-a:text-brand-accent prose-strong:text-brand-dark dark:prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Mobile Share */}
              <div className="lg:hidden mt-20 pt-10 border-t border-gray-100 dark:border-white/10">
                <ShareCard slug={post.slug} title={post.title} />
              </div>
            </article>
          </div>
        </div>

        <ReadNextSection relatedPosts={relatedPosts} />
      </main>
    </>
  );
};

// --- Sub-components ---

const ShareCard = ({ slug, title }) => {
  const shareUrl = `https://www.weblynxinfotech.com/blog/${slug}`;
  const iconClass =
    "p-4 rounded-2xl bg-gray-50 dark:bg-white/5 text-brand-dark dark:text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 border border-gray-100 dark:border-white/5";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
      >
        <FiTwitter />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
      >
        <FiLinkedin />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
      >
        <FiFacebook />
      </a>
    </div>
  );
};

const BackToBlogCard = () => (
  <Link
    to="/blog"
    className="group flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-widest dark:text-white/40 hover:text-brand-accent transition-all"
  >
    <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-brand-dark transition-all">
      <FiArrowLeft />
    </div>
    Return to Archive
  </Link>
);

const ReadNextSection = ({ relatedPosts }) => (
  <section className="bg-gray-50 dark:bg-black/20 py-32 border-t border-gray-100 dark:border-white/5 mt-20">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase dark:text-white">
          Read <span className="text-brand-accent italic">Next.</span>
        </h2>
        <div className="h-px flex-grow mx-8 bg-gray-200 dark:bg-white/5 hidden md:block" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  </section>
);

const BlogPostCard = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group relative bg-white dark:bg-brand-dark p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 hover:border-brand-accent/50 transition-all duration-500 overflow-hidden"
  >
    <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-gray-100 dark:border-white/10">
      <LazyLoadImage
        src={post.imageUrl}
        alt={post.title}
        effect="blur"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
    </div>
    <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest mb-4 block">
      {post.category}
    </span>
    <h3 className="text-2xl font-bold dark:text-white tracking-tighter leading-tight uppercase group-hover:text-brand-accent transition-colors">
      {post.title}
    </h3>
    <FiMaximize2 className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all text-brand-accent" />
  </Link>
);

export default BlogPostPage;
