"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Link your broker accounts through our secure, non-custodial API connections. We never hold your funds or credentials — direct API-key authentication only.",
    detail: "Supports MT4, MT5, cTrader, Rithmic, Tradovate, Binance, IBKR, and more.",
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Set your copy trading rules, risk parameters, and automated guardrails. Define position sizing, drawdown limits, and which accounts mirror which strategies.",
    detail: "Granular control over every parameter. No hidden defaults.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Trade on your primary account — or copy from the Strategy Marketplace — and watch every linked account mirror in real time with sub-5ms execution.",
    detail: "Monitor everything from a single, unified dashboard.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-[var(--spacing-section)] relative" ref={ref}>
      <div className="container-trada">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-xs uppercase tracking-widest text-[var(--color-trada-red)] mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Three steps. Full control.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="space-y-1">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="glass-card p-8 md:p-12 group hover:border-[var(--color-trada-red)]/20 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <span className="text-6xl md:text-7xl font-bold text-white/5 group-hover:text-[var(--color-trada-red)]/20 transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-dark-text-muted)] leading-relaxed mb-4 max-w-xl">
                    {step.description}
                  </p>
                  <p className="text-sm text-[var(--color-dark-text-muted)]/60">
                    {step.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
