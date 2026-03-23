"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    problem: "Emotional Trading",
    description: "High frequency of mistakes driven by emotion rather than data",
    solution: "Integrated Journaling",
    solutionDesc:
      "Automated trade journaling and analytics to refine a trader's edge",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    problem: "Fragmented Infrastructure",
    description:
      "Managing trades across multiple brokers is complex and requires high-friction workflows",
    solution: "Multi-Broker Aggregator",
    solutionDesc:
      "Real-time execution sync and low-latency mirroring across MT4/5, Binance, IBKR, and more",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    problem: "Lack of Transparency",
    description:
      "Difficulty finding proven strategies with verifiable performance",
    solution: "Strategy Marketplace",
    solutionDesc:
      "A transparent marketplace to discover and copy proven strategy providers",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    problem: "Prop Firm Risk",
    description:
      "Traders struggle to stay within strict daily drawdown and challenge rules",
    solution: "Automated Guardrails",
    solutionDesc:
      "Daily drawdown limits, profit thresholds, and 'flatten all' actions to protect capital",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function ProblemSolution() {
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
            The Problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Trading infrastructure is broken.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-dark-text-muted)]"
          >
            Serious traders face four systemic problems that existing tools fail
            to solve in a unified way.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * (index + 1) }}
              className="glass-card p-8 group hover:border-[var(--color-trada-red)]/20 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[var(--color-trada-red)]/10 rounded-[var(--radius-md)] text-[var(--color-trada-red)]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-dark-text-muted)] mb-1">
                    Problem
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    {item.problem}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[var(--color-dark-text-muted)] mb-6">
                {item.description}
              </p>
              <div className="pt-6 border-t border-white/5">
                <p className="text-xs uppercase tracking-wider text-[var(--color-trada-red)] mb-1">
                  Trada&apos;s Solution
                </p>
                <h4 className="text-base font-semibold text-white mb-2">
                  {item.solution}
                </h4>
                <p className="text-sm text-[var(--color-dark-text-muted)]">
                  {item.solutionDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
