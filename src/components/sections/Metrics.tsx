"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  {
    value: 3.2,
    suffix: "ms",
    prefix: "",
    label: "Average execution speed",
    description: "Direct broker API connectivity",
  },
  {
    value: 99.99,
    suffix: "%",
    prefix: "",
    label: "Uptime SLA",
    description: "Enterprise-grade infrastructure",
  },
  {
    value: 11,
    suffix: "+",
    prefix: "",
    label: "Platforms supported",
    description: "And growing every quarter",
  },
  {
    value: 94,
    suffix: "%",
    prefix: "",
    label: "Fill rate within 1 tick",
    description: "Direct-to-API execution",
  },
];

function AnimatedCounter({
  value,
  suffix,
  prefix,
  isInView,
}: {
  value: number;
  suffix: string;
  prefix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayValue =
    value % 1 !== 0 ? count.toFixed(value < 10 ? 1 : 2) : Math.floor(count);

  return (
    <span className="text-5xl md:text-6xl font-bold text-white tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-[var(--spacing-section)] border-y border-white/5 relative"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="container-trada relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center text-xs uppercase tracking-widest text-[var(--color-trada-red)] mb-16"
        >
          Built for performance
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter
                value={metric.value}
                suffix={metric.suffix}
                prefix={metric.prefix}
                isInView={isInView}
              />
              <p className="text-sm font-medium text-white mt-3">
                {metric.label}
              </p>
              <p className="text-xs text-[var(--color-dark-text-muted)] mt-1">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
