"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";


const blogPosts = [
  {
    slug: "sub-3ms-execution",
    title: "Achieving Sub-3ms Execution Speed",
    excerpt:
      "A technical deep-dive into how we optimized our copy trading infrastructure for near-instantaneous execution.",
    category: "Engineering",
    date: "March 15, 2025",
    readTime: "8 min read",
    image: "🔧",
  },
  {
    slug: "strategy-provider-tips",
    title: "How to Succeed as a Strategy Provider",
    excerpt:
      "Best practices for traders looking to monetize their strategies on our marketplace.",
    category: "Product",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "📈",
  },
  {
    slug: "prop-firm-compliance",
    title: "Prop Firm Challenges: A Complete Guide",
    excerpt:
      "Understanding FTMO, Topstep, and MyFXChoice rules. How to use Trada guardrails to stay compliant.",
    category: "Trading",
    date: "March 5, 2025",
    readTime: "10 min read",
    image: "🎯",
  },
  {
    slug: "multi-broker-setup",
    title: "Setting Up Your Multi-Broker Dashboard",
    excerpt:
      "Step-by-step guide to connecting MT4, MT5, cTrader, and other platforms for unified portfolio tracking.",
    category: "Tutorial",
    date: "February 28, 2025",
    readTime: "7 min read",
    image: "🔗",
  },
  {
    slug: "trade-journaling-patterns",
    title: "Finding Patterns in Your Trade Journal",
    excerpt:
      "Using Trada's analytics to identify your most profitable setups and eliminate losing patterns.",
    category: "Trading",
    date: "February 20, 2025",
    readTime: "9 min read",
    image: "📊",
  },
  {
    slug: "latency-impact-trading",
    title: "Why Latency Matters: Impact on Your Bottom Line",
    excerpt:
      "How milliseconds of delay can cost you thousands. Analysis of execution speed across major platforms.",
    category: "Engineering",
    date: "February 15, 2025",
    readTime: "11 min read",
    image: "⚡",
  },
];

const categories = ["All", "Trading", "Engineering", "Product", "Tutorial"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const postsRef = useRef(null);
  const postsInView = useInView(postsRef, { once: true, margin: "-100px" });

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-grid py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />
        </div>

        <div className="container-trada relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest text-[var(--color-trada-red)] mb-4"
          >
            Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Insights and updates.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-dark-text-muted)] max-w-2xl mx-auto"
          >
            Trading insights, platform updates, and engineering deep-dives from
            the Trada team.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 relative">
        <div className="container-trada relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-[var(--color-trada-red)] text-white"
                    : "bg-white/5 text-[var(--color-dark-text-muted)] hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-[var(--spacing-section)] relative" ref={postsRef}>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-trada-red)]/5 rounded-full blur-[100px]" />

        <div className="container-trada relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={postsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 * index }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="glass-card overflow-hidden h-full flex flex-col hover:border-[var(--color-trada-red)]/30 transition-all duration-300">
                    {/* Image/Icon */}
                    <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 text-5xl flex items-center justify-center">
                      {post.image}
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-[var(--color-trada-red)] uppercase tracking-widest">
                          {post.category}
                        </span>
                        <span className="text-xs text-[var(--color-dark-text-muted)]">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-trada-red)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[var(--color-dark-text-muted)] text-sm mb-6 flex-grow line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[var(--color-dark-text-muted)]">
                          {post.readTime}
                        </span>
                        <span className="text-[var(--color-trada-red)] group-hover:gap-2 transition-all flex items-center gap-1">
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-[var(--color-dark-text-muted)]">
                No posts found in this category yet. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-[var(--spacing-section)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />

        <div className="container-trada relative z-10">
          <div className="glass-card p-12 md:p-16 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Stay up to date.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-dark-text-muted)] mb-8"
            >
              Get the latest trading insights and product updates delivered to
              your inbox.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-[var(--radius-md)] text-sm text-white placeholder:text-[var(--color-dark-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-trada-red)]/50 focus:border-[var(--color-trada-red)]/50 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium text-white bg-[var(--color-trada-red)] rounded-[var(--radius-md)] hover:bg-[var(--color-trada-red)]/90 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
