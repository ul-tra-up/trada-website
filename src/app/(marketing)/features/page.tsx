"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";


const features = [
  {
    title: "Copy Trading",
    tagline: "One trade. Every account.",
    description:
      "Execute on your primary account and mirror trades across all linked accounts in real-time. Direct broker API connectivity bypasses bridge-server lag, resulting in an average execution speed of 3.2ms.",
    href: "/features/copy-trading",
    icon: "📊",
  },
  {
    title: "Multi-Broker Aggregator",
    tagline: "One dashboard. Every platform.",
    description:
      "Connect MT4, MT5, cTrader, TradingView, Rithmic, Tradovate, Binance, IBKR, and more from a single unified interface. No more switching between platforms.",
    href: "/features/multi-broker-aggregator",
    icon: "🔗",
  },
  {
    title: "Strategy Marketplace",
    tagline: "Transparency over hype.",
    description:
      "Discover and copy proven strategy providers with verifiable, audited performance data. Every strategy shows real metrics — win rate, drawdown, risk-adjusted returns.",
    href: "/features/strategy-marketplace",
    icon: "🎯",
  },
  {
    title: "Automated Guardrails",
    tagline: "Protection built into the system.",
    description:
      "Set daily drawdown limits, profit thresholds, and automatic 'flatten all positions' triggers. Built specifically for prop firm challenge rules and risk management.",
    href: "/features/automated-guardrails",
    icon: "🛡️",
  },
  {
    title: "Trade Journaling",
    tagline: "Data, not intuition.",
    description:
      "Every trade is automatically logged with entry, exit, risk metrics, and market context. Find patterns in your trading, identify hidden edges, and refine your strategy with data.",
    href: "/features/trade-journaling",
    icon: "📝",
  },
];

export default function FeaturesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Features
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-dark-text-muted)] max-w-2xl mx-auto"
          >
            Trada unifies your entire trading workflow into a single platform
            designed for clarity, speed, and protection.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-[var(--spacing-section)] relative" ref={ref}>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-trada-red)]/5 rounded-full blur-[100px]" />

        <div className="container-trada relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
              >
                <Link href={feature.href} className="group block h-full">
                  <div className="glass-card p-8 h-full flex flex-col hover:border-[var(--color-trada-red)]/30 transition-all duration-300">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-trada-red)] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--color-trada-red)] text-sm font-medium mb-3">
                      {feature.tagline}
                    </p>
                    <p className="text-[var(--color-dark-text-muted)] flex-grow">
                      {feature.description}
                    </p>
                    <div className="mt-6 flex items-center text-[var(--color-trada-red)] font-medium text-sm group-hover:gap-2 transition-all">
                      Learn more
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--spacing-section)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />

        <div className="container-trada relative z-10">
          <div className="glass-card p-12 md:p-16 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to trade smarter?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-dark-text-muted)] mb-8"
            >
              Start with our free plan via partner accounts, or upgrade to Pro
              for advanced features.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/pricing"
                className="px-8 py-3 bg-[var(--color-trada-red)] text-white font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-trada-red)]/90 transition-all"
              >
                View Pricing
              </Link>
              <Link
                href="https://app.trada.io"
                className="px-8 py-3 border border-white/10 text-white font-medium rounded-[var(--radius-md)] hover:border-white/20 transition-all"
              >
                Start Free
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
