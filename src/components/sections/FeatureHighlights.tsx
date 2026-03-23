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
    gradient: "from-[var(--color-trada-red)]/20 to-transparent",
  },
  {
    title: "Multi-Broker Aggregator",
    tagline: "One dashboard. Every platform.",
    description:
      "Connect MT4, MT5, cTrader, TradingView, Rithmic, Tradovate, Binance, IBKR, and more from a single unified interface. No more switching between platforms.",
    href: "/features/multi-broker-aggregator",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    title: "Strategy Marketplace",
    tagline: "Transparency over hype.",
    description:
      "Discover and copy proven strategy providers with verifiable, audited performance data. Every strategy shows real metrics — win rate, drawdown, risk-adjusted returns.",
    href: "/features/strategy-marketplace",
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    title: "Automated Guardrails",
    tagline: "Protection built into the system.",
    description:
      "Set daily drawdown limits, profit thresholds, and automatic 'flatten all positions' triggers. Built specifically for prop firm challenge rules and risk management.",
    href: "/features/automated-guardrails",
    gradient: "from-amber-500/20 to-transparent",
  },
  {
    title: "Trade Journaling",
    tagline: "Data, not intuition.",
    description:
      "Every trade is automatically logged with entry, exit, risk metrics, and market context. Find patterns in your trading, identify hidden edges, and refine your strategy with data.",
    href: "/features/trade-journaling",
    gradient: "from-purple-500/20 to-transparent",
  },
];

export function FeatureHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-[var(--spacing-section)] relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--color-trada-red)]/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container-trada relative">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-xs uppercase tracking-widest text-[var(--color-trada-red)] mb-4"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-dark-text-muted)]"
          >
            Trada unifies your entire trading workflow into a single platform
            designed for clarity, speed, and protection.
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link
                href={feature.href}
                className="group block glass-card p-8 md:p-10 hover:border-white/10 transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-[var(--color-dark-text-muted)] mb-2">
                      {feature.tagline}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[var(--color-trada-red)] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--color-dark-text-muted)] leading-relaxed max-w-xl">
                      {feature.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--color-trada-red)]/50 group-hover:bg-[var(--color-trada-red)]/10 transition-all duration-300">
                      <svg
                        className="w-5 h-5 text-[var(--color-dark-text-muted)] group-hover:text-[var(--color-trada-red)] transition-all duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
