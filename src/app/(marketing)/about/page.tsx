"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Making trading infrastructure easier to understand and run. Trada is built by traders, for traders.",
  openGraph: {
    title: "About | Trada",
    description:
      "Making trading infrastructure easier to understand and run. Trada is built by traders, for traders.",
  },
};

const values = [
  {
    title: "Clarity",
    description:
      "We believe trading infrastructure should be straightforward. No marketing fluff, no obfuscation. Just clear metrics and honest communication.",
    icon: "🔍",
  },
  {
    title: "Speed",
    description:
      "Milliseconds matter in trading. Our platform is engineered for sub-3ms execution. Every design decision prioritizes latency and reliability.",
    icon: "⚡",
  },
  {
    title: "Protection",
    description:
      "Risk management is built into the system. Automated guardrails, audit logs, and compliance controls are standard, not premium features.",
    icon: "🛡️",
  },
  {
    title: "Transparency",
    description:
      "We share what we do, how we do it, and why we do it. Our engineering team publishes deep-dives on our architecture and performance metrics.",
    icon: "📖",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Trada Founded",
    description:
      "Started with a simple problem: traders are managing 5+ platforms with no unified view. We built Trada to fix that.",
  },
  {
    year: "Q2 2024",
    title: "Copy Trading MVP",
    description:
      "Launched copy trading with sub-5ms execution. First 100 beta users across MT4, MT5, and cTrader.",
  },
  {
    year: "Q3 2024",
    title: "Multi-Broker Aggregator",
    description:
      "Unified 11+ platforms into a single dashboard. Real-time P&L tracking across all brokers.",
  },
  {
    year: "Q4 2024",
    title: "Strategy Marketplace & Guardrails",
    description:
      "Launched strategy marketplace with verified performance data. Added automated guardrails for prop firm compliance.",
  },
  {
    year: "Q1 2025",
    title: "Trade Journaling & Analytics",
    description:
      "Built comprehensive trade journaling with pattern recognition. 50+ analytics metrics automatically tracked.",
  },
  {
    year: "Q2 2025",
    title: "Enterprise & API",
    description:
      "Enterprise tier launched. Full REST API for custom integrations. Dedicated support teams.",
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.1 * index }}
      className={`flex gap-8 items-start ${
        index % 2 === 1 ? "flex-row-reverse md:flex-row" : ""
      }`}
    >
      <div className="hidden md:flex flex-1" />
      <div className="flex flex-col items-center gap-4">
        <div className="w-4 h-4 rounded-full bg-[var(--color-trada-red)] ring-4 ring-[var(--color-trada-red)]/20" />
        <div className="hidden md:block w-1 h-32 bg-gradient-to-b from-[var(--color-trada-red)]/50 to-transparent" />
      </div>
      <div className="flex-1">
        <div className="glass-card p-8">
          <p className="text-sm font-semibold text-[var(--color-trada-red)] mb-2">
            {item.year}
          </p>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-[var(--color-dark-text-muted)]">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

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
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Making trading infrastructure
            <br />
            easier to understand and run.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-dark-text-muted)] max-w-2xl mx-auto"
          >
            Trada is built by traders, for traders. We started because we were
            frustrated with the fragmented state of trading infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-[var(--spacing-section)] relative">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-trada-red)]/5 rounded-full blur-[100px]" />

        <div className="container-trada relative">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 md:p-16"
            >
              <p className="text-sm font-semibold text-[var(--color-trada-red)] uppercase tracking-widest mb-4">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unify trading infrastructure.
              </h2>
              <p className="text-lg text-[var(--color-dark-text-muted)] leading-relaxed mb-6">
                The average active trader uses 5+ platforms: MT4 for forex, cTrader
                for stocks, TradingView for charts, a journaling tool, a risk
                calculator, and manual spreadsheets for reporting. This fragmentation
                causes errors, slows down decision-making, and creates blind spots in
                risk management.
              </p>
              <p className="text-lg text-[var(--color-dark-text-muted)] leading-relaxed">
                Trada consolidates your entire trading workflow into a single,
                unified platform. One API for all brokers. One dashboard for all
                accounts. One source of truth for all your trades.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-[var(--spacing-section)] relative overflow-hidden" ref={valuesRef}>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />

        <div className="container-trada relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="mb-12"
          >
            <p className="text-sm font-semibold text-[var(--color-trada-red)] uppercase tracking-widest mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              How we work.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * (index + 1) }}
                className="glass-card p-8"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-[var(--color-dark-text-muted)]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-[var(--spacing-section)] relative">
        <div className="container-trada relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-semibold text-[var(--color-trada-red)] uppercase tracking-widest mb-4">
              Timeline
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Journey
            </h2>
          </motion.div>

          <div className="space-y-8 md:space-y-4">
            {timeline.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-[var(--spacing-section)] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-trada-red)]/5 rounded-full blur-[100px]" />

        <div className="container-trada relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-semibold text-[var(--color-trada-red)] uppercase tracking-widest mb-4">
              Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built by traders, for traders.
            </h2>
            <p className="text-lg text-[var(--color-dark-text-muted)]">
              Our team combines deep expertise in trading, fintech infrastructure,
              and systems engineering.
            </p>
          </motion.div>

          <div className="glass-card p-12 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <p className="text-sm font-semibold text-[var(--color-trada-red)] uppercase">
                  Engineering
                </p>
                <p className="text-white">
                  Our infrastructure team previously built trading systems at major
                  hedge funds. Experience with high-frequency trading, latency
                  optimization, and institutional-grade reliability.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-3"
              >
                <p className="text-sm font-semibold text-[var(--color-trada-red)] uppercase">
                  Trading
                </p>
                <p className="text-white">
                  Product leadership includes active traders across forex, crypto,
                  and equities. We eat our own dog food and use Trada daily for
                  our own trading operations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--spacing-section)] relative overflow-hidden">
        <div className="container-trada relative z-10">
          <div className="glass-card p-12 md:p-16 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Join us.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-dark-text-muted)] mb-8"
            >
              If you share our mission to unify trading infrastructure, let's talk.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="https://app.trada.io"
                className="px-8 py-3 bg-[var(--color-trada-red)] text-white font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-trada-red)]/90 transition-all"
              >
                Start Trading
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-white/10 text-white font-medium rounded-[var(--radius-md)] hover:border-white/20 transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
