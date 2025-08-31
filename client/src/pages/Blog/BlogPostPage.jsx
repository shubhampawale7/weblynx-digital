// client/src/pages/Blog/BlogPostPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";
import { FiLinkedin, FiTwitter, FiFacebook, FiArrowLeft } from "react-icons/fi";
import { blogPosts } from "../../data/blogData.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Hook for the reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!post) {
    return (
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <h1 className="font-display text-5xl font-bold text-brand-dark dark:text-white mb-4">
          404 - Post Not Found
        </h1>
        <p className="mb-8 text-lg text-brand-light-blue dark:text-brand-gray">
          We couldn't find the article you were looking for.
        </p>
        <Link
          to="/blog"
          className="px-6 py-3 font-semibold text-brand-dark bg-brand-accent rounded-lg hover:bg-brand-accent-hover"
        >
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <>
      <Seo
        title={`${post.title} | Weblynx Infotech Blog`}
        description={post.excerpt}
        ogUrl={`https://www.weblynxinfotech.com/blog/${post.slug}`}
      />
      <main className="pt-[104px] md:pt-24 bg-white dark:bg-brand-dark">
        {/* Reading Progress Bar */}
        <motion.div
          className="fixed top-[68px] md:top-[88px] left-0 right-0 h-1 bg-brand-accent origin-left z-50"
          style={{ scaleX }}
        />

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
            {/* --- Sticky Sidecar Column --- */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32 space-y-8">
                <AuthorCard author={post.author} date={post.date} />
                <ShareCard slug={post.slug} title={post.title} />
                <BackToBlogCard />
              </div>
            </aside>

            {/* --- Main Article Column --- */}
            <article className="lg:col-span-9 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-sm font-semibold text-brand-accent mb-2">
                  {post.category}
                </p>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-brand-dark dark:text-white tracking-tighter mb-8">
                  {post.title}
                </h1>
                <div className="block lg:hidden mb-8">
                  <AuthorCard author={post.author} date={post.date} />
                </div>
                <div className="overflow-hidden rounded-2xl mb-12 shadow-lg">
                  <LazyLoadImage
                    src={post.imageUrl}
                    alt={post.title}
                    effect="blur"
                    className="w-full h-auto"
                  />
                </div>
                <div
                  className="prose prose-brand lg:prose-xl w-full max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </motion.div>

              {/* Share section for mobile */}
              <div className="block lg:hidden mt-12 pt-8 border-t dark:border-brand-light-blue/20">
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

// --- Sub-components for the page structure ---

const AuthorCard = ({ author, date }) => (
  <div>
    <h3 className="font-display text-lg font-semibold text-brand-dark dark:text-white mb-2">
      Author
    </h3>
    <div className="flex items-center gap-3">
      <img
        src="/founder-avatar.jpg"
        alt="Author"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-brand-dark dark:text-white">
          {author}
        </p>
        <p className="text-sm text-brand-gray">{date}</p>
      </div>
    </div>
  </div>
);

const ShareCard = ({ slug, title }) => {
  const shareUrl = `https://www.weblynxinfotech.com/blog/${slug}`;
  return (
    <div>
      <h4 className="font-display text-lg font-semibold text-brand-dark dark:text-white mb-3">
        Share This Article
      </h4>
      <div className="flex gap-4 text-xl">
        <a
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 dark:bg-brand-dark-blue/50 text-brand-gray hover:text-brand-accent transition-colors"
        >
          <FiTwitter />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 dark:bg-brand-dark-blue/50 text-brand-gray hover:text-brand-accent transition-colors"
        >
          <FiLinkedin />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 dark:bg-brand-dark-blue/50 text-brand-gray hover:text-brand-accent transition-colors"
        >
          <FiFacebook />
        </a>
      </div>
    </div>
  );
};

const BackToBlogCard = () => (
  <Link
    to="/blog"
    className="group inline-flex items-center gap-2 pt-8 font-semibold text-brand-light-blue dark:text-brand-gray hover:text-brand-accent transition-colors border-t border-gray-200 dark:border-brand-light-blue/20 w-full"
  >
    <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
    Back to all articles
  </Link>
);

const ReadNextSection = ({ relatedPosts }) => (
  <section className="bg-gray-50 dark:bg-black py-20 sm:py-28">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="font-display text-4xl font-bold text-center mb-12 text-brand-dark dark:text-white tracking-tight"
      >
        Read Next
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {relatedPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  </section>
);

const BlogPostCard = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="h-full"
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
      </div>
    </Link>
  </motion.div>
);

export default BlogPostPage;
