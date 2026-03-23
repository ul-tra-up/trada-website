"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const featureData = {
  "copy-trading": {
    title: "Copy Trading",
    subtitle: "One trade. Every account.",
    description:
      "Execute on your primary account and mirror trades across all linked accounts in real-time with institutional-grade precision.",
    heroImage: "📊",
    benefits: [
      {
        title: "Sub-3ms Execution",
        description:
          "Direct broker API connectivity eliminates bridge-server lag. Average execution speed of 3.2ms across all major platforms.",
      },
      {
        title: "No Slippage Loss",
        description:
          "Trades are mirrored at the exact price executed on your primary account. No additional spread or commission.",
      },
      {
        title: "Multi-Account Sync",
        description:
          "Copy from 1 primary account to 50+ linked accounts simultaneously. Maintain synchronized positions across your entire book.",
      },
      {
        title: "Partial Copy Control",
        description:
          "Copy entire positions or set trade size scaling rules. Scale down for risk management or scale up for account sizing.",
      },
    ],
    specs: {
      "Supported Platforms": "MT4, MT5, cTrader, Tradovate, Rithmic, Binance",
      "Max Accounts": "50+",
      "Execution Speed": "< 3.2ms average",
      "Latency Guarantee": "99.99% uptime SLA",
    },
  },
  "multi-broker-aggregator": {
    title: "Multi-Broker Aggregator",
    subtitle: "One dashboard. Every platform.",
    description:
      "Connect all your trading platforms from a single unified interface and manage your entire trading infrastructure without platform switching.",
    heroImage: "🔗",
    benefits: [
      {
        title: "Universal Platform Support",
        description:
          "Integrates with MT4, MT5, cTrader, TradingView, Rithmic, Tradovate, Binance Futures, IBKR, and 5+ additional platforms.",
      },
      {
        title: "Unified Position View",
        description:
          "See all open positions across all platforms in a single dashboard. Real-time P&L, exposure, and risk metrics at a glance.",
      },
      {
        title: "Consolidated Reporting",
        description:
          "Generate unified P&L reports, tax statements, and performance analytics across all brokers in one download.",
      },
      {
        title: "Seamless Account Linking",
        description:
          "Connect accounts via read-only API keys. No credentials stored. Trada acts as a secure aggregation layer only.",
      },
    ],
    specs: {
      "Supported Platforms": "11+",
      "API Connections": "Read-only, secure",
      "Real-time Updates": "500ms",
      "Data Encryption": "AES-256, TLS 1.3",
    },
  },
  "strategy-marketplace": {
    title: "Strategy Marketplace",
    subtitle: "Transparency over hype.",
    description:
      "Discover and copy proven strategy providers with verifiable, audited performance data. No marketing fluff, only real numbers.",
    heroImage: "🎯",
    benefits: [
      {
        title: "Verified Performance Data",
        description:
          "Every strategy shows audited P&L, win rate, drawdown, Sharpe ratio, and risk-adjusted returns. No cherry-picked results.",
      },
      {
        title: "Provider Track Record",
        description:
          "View each provider's full history, customer reviews, and compliance status. Make informed decisions with complete transparency.",
      },
      {
        title: "One-Click Subscription",
        description:
          "Copy any strategy provider directly into your account. Positions are auto-mirrored and tracked separately for analysis.",
      },
      {
        title: "Earnings Sharing Model",
        description:
          "Strategy providers earn based on performance fees. 30% of monthly returns. Aligned incentives for quality strategies.",
      },
    ],
    specs: {
      "Available Strategies": "150+",
      "Performance Audit": "Third-party verified",
      "Min Performance Track": "6 months",
      "Fee Structure": "30% profit sharing",
    },
  },
  "automated-guardrails": {
    title: "Automated Guardrails",
    subtitle: "Protection built into the system.",
    description:
      "Set daily drawdown limits, profit thresholds, and automatic position flattening. Built specifically for prop firm rules and risk management.",
    heroImage: "🛡️",
    benefits: [
      {
        title: "Daily Drawdown Limits",
        description:
          "Set a daily loss limit (e.g., $500). If hit, all positions are automatically closed and trading is paused until reset.",
      },
      {
        title: "Profit Targets",
        description:
          "Set a daily profit target (e.g., $1000). Once hit, close all positions and lock in gains automatically.",
      },
      {
        title: "Prop Firm Rules Engine",
        description:
          "Pre-built rules for FTMO, Topstep, MyFXChoice, and other major prop firms. Compliance is automatic.",
      },
      {
        title: "Time-Based Controls",
        description:
          "Set trading windows (e.g., no trading after 5pm EST). Set max consecutive loss days before auto-pause.",
      },
    ],
    specs: {
      "Pre-built Rules": "10+ prop firm templates",
      "Customization": "Fully customizable",
      "Alert Notifications": "Email, SMS, Slack",
      "Execution": "Sub-second position closure",
    },
  },
  "trade-journaling": {
    title: "Trade Journaling",
    subtitle: "Data, not intuition.",
    description:
      "Every trade is automatically logged with entry, exit, risk metrics, and market context. Identify patterns, find edges, refine strategy.",
    heroImage: "📝",
    benefits: [
      {
        title: "Automatic Trade Capture",
        description:
          "Every trade is logged automatically via API. No manual entry. Entry time, exit time, price, size, commission, slippage, all captured.",
      },
      {
        title: "Contextual Analysis",
        description:
          "Each trade includes market context: volatility at entry, economic events, correlation with other assets, and winning/losing streaks.",
      },
      {
        title: "Pattern Recognition",
        description:
          "Identify your profitable setups. Win rate by instrument, by time of day, by strategy. Find your edge.",
      },
      {
        title: "Performance Heatmaps",
        description:
          "Visualize performance across instruments, timeframes, and strategies. Heat maps show which combinations work best.",
      },
    ],
    specs: {
      "Trades Logged": "Unlimited",
      "Data Retention": "Unlimited",
      "Export Formats": "CSV, JSON, PDF",
      "Analytics Available": "50+",
    },
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function FeaturePage({ params }: PageProps) {
  const feature =
    featureData[params.slug as keyof typeof featureData] ||
    featureData["copy-trading"];
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-grid py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />
        </div>

        <div className="container-trada relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl mb-6"
            >
              {feature.heroImage}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-widest text-[var(--color-trada-red)] mb-4"
            >
              Feature
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            >
              {feature.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[var(--color-trada-red)] font-medium mb-4"
            >
              {feature.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-[var(--color-dark-text-muted)]"
            >
              {feature.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-[var(--spacing-section)] relative" ref={benefitsRef}>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-trada-red)]/5 rounded-full blur-[100px]" />

        <div className="container-trada relative">
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why {feature.title}?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={benefitsInView ? { opacity: 1, width: "3rem" } : {}}
              transition={{ delay: 0.1 }}
              className="h-1 bg-[var(--color-trada-red)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {feature.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * (index + 1) }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-[var(--color-dark-text-muted)]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-[var(--spacing-section)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />

        <div className="container-trada relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Technical Specifications
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(feature.specs).map(([key, value], index) => (
                <div key={key}>
                  <p className="text-sm font-medium text-[var(--color-trada-red)] mb-2">
                    {key}
                  </p>
                  <p className="text-white text-lg">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
              Ready to start?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-dark-text-muted)] mb-8"
            >
              All features are included with Trada Pro. Start with our free plan
              via partner accounts.
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
                Start Free
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-white/10 text-white font-medium rounded-[var(--radius-md)] hover:border-white/20 transition-all"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
