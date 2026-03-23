"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for traders. Free plan via partner accounts, Pro at $49/month, and Enterprise for teams.",
  openGraph: {
    title: "Pricing | Trada",
    description:
      "Simple, transparent pricing for traders. Free plan via partner accounts, Pro at $49/month, and Enterprise for teams.",
  },
};

const tiers = [
  {
    name: "Starter",
    price: "Free",
    period: "via Partner Accounts",
    description: "Perfect for getting started with copy trading",
    cta: "Get Started",
    ctaHref: "https://app.trada.io",
    highlight: false,
    features: [
      "1 Primary Account",
      "Up to 5 Copy Accounts",
      "Copy Trading",
      "Basic Trade Journaling",
      "Community Support",
      "Standard Execution Speed (< 5ms)",
    ],
    limitations: [
      "No Strategy Marketplace",
      "No Automated Guardrails",
      "No Advanced Analytics",
      "Limited to 3 Platforms",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For serious traders and small teams",
    cta: "Start Free Trial",
    ctaHref: "https://app.trada.io/signup?plan=pro",
    highlight: true,
    features: [
      "Unlimited Primary Accounts",
      "Unlimited Copy Accounts",
      "Copy Trading (< 3.2ms)",
      "Multi-Broker Aggregator (11+ platforms)",
      "Strategy Marketplace Access",
      "Advanced Trade Journaling",
      "Automated Guardrails",
      "Daily/Weekly Reports",
      "Email Support",
      "Advanced Analytics & Pattern Detection",
      "Custom Risk Rules",
      "Position Scaling Controls",
      "Scheduled Reporting",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per month",
    description: "For prop firms and institutions",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "Everything in Pro",
      "Dedicated Account Manager",
      "Custom Integration Support",
      "API Access (Full)",
      "White-Label Options",
      "Advanced Compliance & Audit Logs",
      "Bulk User Management",
      "Custom Reporting Dashboards",
      "Priority Support (24/5)",
      "SLA Guarantees (99.99%)",
      "Custom Feature Development",
      "On-Premises Deployment Option",
    ],
  },
];

const comparisonFeatures = [
  {
    category: "Core Trading",
    items: [
      { name: "Copy Trading", starter: true, pro: true, enterprise: true },
      {
        name: "Execution Speed",
        starter: "< 5ms",
        pro: "< 3.2ms",
        enterprise: "< 3.2ms",
      },
      {
        name: "Primary Accounts",
        starter: "1",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Copy Accounts",
        starter: "Up to 5",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Supported Platforms",
        starter: "3",
        pro: "11+",
        enterprise: "Custom",
      },
    ],
  },
  {
    category: "Features",
    items: [
      {
        name: "Multi-Broker Aggregator",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Strategy Marketplace",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Automated Guardrails",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Advanced Trade Journaling",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Pattern Recognition",
        starter: false,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support & Compliance",
    items: [
      { name: "Email Support", starter: true, pro: true, enterprise: true },
      {
        name: "Priority Support",
        starter: false,
        pro: false,
        enterprise: "24/5",
      },
      {
        name: "Audit Logs",
        starter: false,
        pro: true,
        enterprise: "Advanced",
      },
      {
        name: "SLA Guarantee",
        starter: false,
        pro: "99.9%",
        enterprise: "99.99%",
      },
      { name: "API Access", starter: false, pro: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: "Can I start with the free plan and upgrade later?",
    answer:
      "Yes. Start with our free plan via partner accounts and upgrade to Pro anytime. Your data migrates automatically.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), ACH transfers, and wire transfers for Enterprise plans.",
  },
  {
    question: "Is there a contract for Pro?",
    answer:
      "No. Pro is month-to-month. Cancel anytime with no penalties. Enterprise plans can be monthly or annual with custom terms.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes. Annual Pro plans are $540/year (17% savings). Custom discounts available for Enterprise.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data is yours. Export all trades, settings, and history anytime. We provide 30 days of access after cancellation.",
  },
  {
    question: "Can I switch plans mid-month?",
    answer:
      "Yes. Switching from Starter to Pro is instant. We prorate any difference and credit unused days.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Full refunds within 14 days of purchase if you're not satisfied. No questions asked.",
  },
  {
    question: "What's included in Enterprise support?",
    answer:
      "Dedicated account manager, 24/5 priority support via email/Slack, custom feature development, and quarterly business reviews.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-[var(--color-trada-red)]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.05 * index }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-start justify-between hover:bg-white/5 transition-colors"
      >
        <span className="text-left text-lg font-medium text-white pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-[var(--color-trada-red)] flex-shrink-0 mt-1"
        >
          ↓
        </motion.span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-6 text-[var(--color-dark-text-muted)]">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PricingPage() {
  const tiersRef = useRef(null);
  const tiersInView = useInView(tiersRef, { once: true, margin: "-100px" });

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
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Simple, transparent pricing.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-dark-text-muted)] max-w-2xl mx-auto"
          >
            Free plan via partner accounts. Upgrade to Pro for advanced features.
            No hidden fees.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-[var(--spacing-section)] relative" ref={tiersRef}>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-trada-red)]/5 rounded-full blur-[100px]" />

        <div className="container-trada relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={tiersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className={`relative ${tier.highlight ? "md:scale-105" : ""}`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <div className="px-4 py-1 bg-[var(--color-trada-red)] text-white text-xs font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <div
                  className={`glass-card p-8 h-full flex flex-col ${
                    tier.highlight
                      ? "border-[var(--color-trada-red)]/50"
                      : "border-white/5"
                  }`}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-sm text-[var(--color-dark-text-muted)] mb-6">
                      {tier.description}
                    </p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {tier.price !== "Custom" && (
                        <span className="text-[var(--color-dark-text-muted)]">
                          {tier.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href={tier.ctaHref}
                    className={`mb-8 px-6 py-3 font-medium rounded-[var(--radius-md)] transition-all text-center ${
                      tier.highlight
                        ? "bg-[var(--color-trada-red)] text-white hover:bg-[var(--color-trada-red)]/90"
                        : "border border-white/10 text-white hover:border-white/20"
                    }`}
                  >
                    {tier.cta}
                  </Link>

                  <div className="space-y-4 flex-grow">
                    <p className="text-xs font-semibold text-[var(--color-trada-red)] uppercase tracking-widest">
                      Included
                    </p>
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex gap-3">
                        <CheckIcon />
                        <span className="text-sm text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {tier.limitations && (
                    <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                      <p className="text-xs font-semibold text-[var(--color-dark-text-muted)] uppercase tracking-widest">
                        Not included
                      </p>
                      {tier.limitations.map((limitation) => (
                        <div key={limitation} className="flex gap-3">
                          <span className="text-[var(--color-dark-text-muted)]">
                            ✕
                          </span>
                          <span className="text-sm text-[var(--color-dark-text-muted)]">
                            {limitation}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-[var(--spacing-section)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />

        <div className="container-trada relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Detailed Feature Comparison
          </motion.h2>

          <div className="space-y-12">
            {comparisonFeatures.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * sectionIndex }}
              >
                <h3 className="text-lg font-semibold mb-6 text-[var(--color-trada-red)]">
                  {section.category}
                </h3>
                <div className="glass-card overflow-hidden">
                  <div className="divide-y divide-white/10">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="grid grid-cols-4 gap-4 px-8 py-4"
                      >
                        <div className="col-span-1 font-medium text-white">
                          {item.name}
                        </div>
                        <div className="flex items-center justify-center">
                          {typeof item.starter === "boolean" ? (
                            item.starter ? (
                              <CheckIcon />
                            ) : (
                              <span className="text-[var(--color-dark-text-muted)]">
                                ✕
                              </span>
                            )
                          ) : (
                            <span className="text-sm text-white">
                              {item.starter}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-center">
                          {typeof item.pro === "boolean" ? (
                            item.pro ? (
                              <CheckIcon />
                            ) : (
                              <span className="text-[var(--color-dark-text-muted)]">
                                ✕
                              </span>
                            )
                          ) : (
                            <span className="text-sm text-white">
                              {item.pro}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-center">
                          {typeof item.enterprise === "boolean" ? (
                            item.enterprise ? (
                              <CheckIcon />
                            ) : (
                              <span className="text-[var(--color-dark-text-muted)]">
                                ✕
                              </span>
                            )
                          ) : (
                            <span className="text-sm text-white">
                              {item.enterprise}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[var(--spacing-section)] relative">
        <div className="container-trada relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--spacing-section)] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-trada-red)]/5 rounded-full blur-[100px]" />

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
              Start free with our partner account program. No credit card
              required.
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
