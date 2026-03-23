"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-trada-red)]/5 rounded-full blur-[100px]" />
      </div>

      {/* 3D Scene Container — Will be replaced with Spline scene */}
      <div className="absolute inset-0 z-0" id="hero-3d-scene">
        {/* Placeholder: Abstract animated background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full opacity-10"
          >
            <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
              <circle
                cx="150"
                cy="120"
                r="80"
                stroke="var(--color-trada-red)"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <circle
                cx="250"
                cy="120"
                r="80"
                stroke="var(--color-trada-red)"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <circle
                cx="200"
                cy="280"
                r="80"
                stroke="var(--color-trada-red)"
                strokeWidth="0.5"
                opacity="0.4"
              />
              {/* Connection lines */}
              <line
                x1="100"
                y1="100"
                x2="300"
                y2="300"
                stroke="var(--color-trada-red)"
                strokeWidth="0.3"
                opacity="0.2"
              />
              <line
                x1="300"
                y1="100"
                x2="100"
                y2="300"
                stroke="var(--color-trada-red)"
                strokeWidth="0.3"
                opacity="0.2"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container-trada relative z-10 pt-32 pb-20 md:pt-40 md:pb-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-medium text-[var(--color-trada-red)] bg-[var(--color-trada-red)]/10 border border-[var(--color-trada-red)]/20 rounded-[var(--radius-full)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-trada-red)] animate-pulse" />
          Pre-launch — Early access opening soon
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          Trade smarter,
          <br />
          <span className="text-gradient-red">scale faster.</span>
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--color-dark-text-muted)] max-w-2xl mx-auto mb-10"
        >
          Your entire trading stack unified. Copy trades across Forex, Crypto,
          and Stocks with millisecond precision and institutional-grade
          protection across 11+ platforms.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[var(--color-trada-red)] rounded-[var(--radius-full)] hover:bg-[var(--color-trada-red)]/90 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-trada-red)]/25 hover:scale-[1.02]"
          >
            Join the Waitlist
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--color-dark-text-muted)] bg-white/5 border border-white/10 rounded-[var(--radius-full)] hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Explore Features
          </Link>
        </motion.div>

        {/* Metrics preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-8 md:gap-16 mt-20"
        >
          {[
            { value: "< 5ms", label: "Execution latency" },
            { value: "11+", label: "Platforms supported" },
            { value: "99.99%", label: "Uptime SLA" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {metric.value}
              </div>
              <div className="text-xs text-[var(--color-dark-text-muted)] mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
