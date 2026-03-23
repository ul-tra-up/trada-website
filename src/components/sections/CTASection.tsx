"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "waitlist" }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-[var(--spacing-section)] relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[400px] bg-[var(--color-trada-red)]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-trada relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Trade with
            <br />
            <span className="text-gradient-red">data-backed confidence.</span>
          </h2>
          <p className="text-lg text-[var(--color-dark-text-muted)] mb-10">
            Join the waitlist for early access to Trada. Be among the first to
            unify your trading stack with millisecond precision and
            institutional-grade protection.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-[var(--radius-lg)] text-emerald-400"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">You&apos;re on the list. We&apos;ll be in touch.</span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-[var(--radius-full)] text-base text-white placeholder:text-[var(--color-dark-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-trada-red)]/50 focus:border-[var(--color-trada-red)]/50 transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-4 text-base font-medium text-white bg-[var(--color-trada-red)] rounded-[var(--radius-full)] hover:bg-[var(--color-trada-red)]/90 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-trada-red)]/25 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === "loading" ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-sm text-red-400 mt-4">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="text-xs text-[var(--color-dark-text-muted)] mt-6">
            Free to join. No credit card required. We respect your data.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
