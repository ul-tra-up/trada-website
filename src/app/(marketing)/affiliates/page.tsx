"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";


const benefits = [
  {
    title: "High Commission Rates",
    description:
      "Earn 30% recurring commission on all Pro subscriptions for the lifetime of your referral.",
    icon: "💰",
  },
  {
    title: "Marketing Materials",
    description:
      "Access ready-made promotional graphics, email templates, and landing page snippets.",
    icon: "📦",
  },
  {
    title: "Dedicated Support",
    description:
      "Partner manager available to help you succeed. Weekly check-ins and performance optimization.",
    icon: "🤝",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Dashboard showing referrals, conversions, earnings, and payouts. Transparent and real-time.",
    icon: "📊",
  },
  {
    title: "Cookie Duration",
    description:
      "90-day cookie window. Plenty of time for your referrals to try the product and convert.",
    icon: "🍪",
  },
  {
    title: "No Minimum Earnings",
    description:
      "Earn immediately. Monthly payouts to your bank account or crypto wallet. No minimums.",
    icon: "🏦",
  },
];

const tiers = [
  {
    name: "Bronze",
    referrals: "0-10/month",
    commission: "25%",
    bonus: "No bonus",
  },
  {
    name: "Silver",
    referrals: "11-25/month",
    commission: "30%",
    bonus: "$100/month bonus",
  },
  {
    name: "Gold",
    referrals: "26-50/month",
    commission: "35%",
    bonus: "$500/month bonus",
  },
  {
    name: "Platinum",
    referrals: "50+/month",
    commission: "40%",
    bonus: "$2,000/month bonus + exclusive perks",
  },
];

const faqs = [
  {
    question: "How do I get paid?",
    answer:
      "Commissions are paid monthly via bank transfer (ACH) or crypto (USDC/USDT). No minimums. First payout within 30 days of your first conversion.",
  },
  {
    question: "How long is the cookie duration?",
    answer:
      "90 days. If someone clicks your referral link and signs up within 90 days, you earn the commission.",
  },
  {
    question: "Do I earn commission on free plan sign-ups?",
    answer:
      "No, only on Pro or Enterprise subscriptions. Free plan users don't generate commissions.",
  },
  {
    question: "Can I use paid ads?",
    answer:
      "Yes, you can use Google Ads, Facebook Ads, or any paid channel. We provide dedicated landing pages and creative assets.",
  },
  {
    question: "What counts as a valid referral?",
    answer:
      "Any new user who clicks your unique referral link and completes signup. Must be a genuinely new account (not an existing user switching accounts).",
  },
  {
    question: "When do commissions stop?",
    answer:
      "You earn commission as long as your referral remains a paying customer. If they cancel, commissions stop for that customer.",
  },
  {
    question: "Are there any restrictions?",
    answer:
      "No misleading claims about guaranteed returns. No trademark bidding on 'Trada' without permission. Otherwise, you're free to promote however works for you.",
  },
  {
    question: "How do I track my referrals?",
    answer:
      "Real-time dashboard showing clicks, signups, conversions, and earnings. CSV export available. Updated hourly.",
  },
];

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.05 * index }}
      className="glass-card p-8"
    >
      <div className="text-4xl mb-4">{benefit.icon}</div>
      <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
      <p className="text-[var(--color-dark-text-muted)] text-sm">
        {benefit.description}
      </p>
    </motion.div>
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
  const [isOpen, setIsOpen] = React.useState(false);
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

import React from "react";

export default function AffiliatesPage() {
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-100px",
  });

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
            Affiliate Program
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Earn recurring commissions
            <br />
            by referring traders.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-dark-text-muted)] max-w-2xl mx-auto mb-8"
          >
            Join our affiliate program and earn 25-40% recurring commission on
            every referral. Monthly payouts, real-time tracking, and dedicated
            support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="https://app.trada.io/affiliates/apply"
              className="inline-block px-8 py-3 bg-[var(--color-trada-red)] text-white font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-trada-red)]/90 transition-all"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-[var(--spacing-section)] relative" ref={benefitsRef}>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-trada-red)]/5 rounded-full blur-[100px]" />

        <div className="container-trada relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            className="mb-12"
          >
            <p className="text-sm font-semibold text-[var(--color-trada-red)] uppercase tracking-widest mb-4">
              Why Join
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything you need to succeed.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-[var(--spacing-section)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />

        <div className="container-trada relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-semibold text-[var(--color-trada-red)] uppercase tracking-widest mb-4">
              Commission Structure
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Earn more as you grow.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-bold mb-6 text-[var(--color-trada-red)]">
                  {tier.name}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium text-[var(--color-dark-text-muted)] uppercase tracking-widest mb-1">
                      Referrals/Month
                    </p>
                    <p className="text-lg font-bold">{tier.referrals}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-dark-text-muted)] uppercase tracking-widest mb-1">
                      Commission Rate
                    </p>
                    <p className="text-2xl font-bold text-[var(--color-trada-red)]">
                      {tier.commission}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-dark-text-muted)] uppercase tracking-widest mb-1">
                      Bonus
                    </p>
                    <p className="text-sm">{tier.bonus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-[var(--color-dark-text-muted)] text-sm mt-8"
          >
            Tiers reset monthly. Earn more referrals = unlock higher commission rates automatically.
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-[var(--spacing-section)] relative">
        <div className="container-trada relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-semibold text-[var(--color-trada-red)] uppercase tracking-widest mb-4">
              Getting Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Get set up in 3 steps.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Apply",
                description:
                  "Fill out a quick application. We'll review it within 24 hours.",
              },
              {
                step: 2,
                title: "Get Your Links",
                description:
                  "Receive your unique affiliate links and access to marketing materials.",
              },
              {
                step: 3,
                title: "Earn Commissions",
                description:
                  "Start promoting and earn 25-40% recurring commission on every referral.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trada-red)] flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[var(--color-dark-text-muted)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Common questions.
            </h2>
          </motion.div>

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
        <div className="container-trada relative z-10">
          <div className="glass-card p-12 md:p-16 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to earn?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-dark-text-muted)] mb-8"
            >
              Join hundreds of affiliates already earning with Trada. Apply now
              and start promoting.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="https://app.trada.io/affiliates/apply"
                className="px-8 py-3 bg-[var(--color-trada-red)] text-white font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-trada-red)]/90 transition-all"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-white/10 text-white font-medium rounded-[var(--radius-md)] hover:border-white/20 transition-all"
              >
                Questions?
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
