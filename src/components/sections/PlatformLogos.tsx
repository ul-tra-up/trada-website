"use client";

import { motion } from "framer-motion";

const platforms = [
  "MetaTrader 4",
  "MetaTrader 5",
  "cTrader",
  "TradingView",
  "Rithmic",
  "Tradovate",
  "NinjaTrader",
  "Binance",
  "IBKR",
  "DXTrade",
  "TradeLocker",
];

export function PlatformLogos() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="container-trada">
        <p className="text-center text-xs uppercase tracking-widest text-[var(--color-dark-text-muted)] mb-8">
          Integrated with the platforms you already use
        </p>
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 items-center whitespace-nowrap"
          >
            {/* Double the logos for seamless loop */}
            {[...platforms, ...platforms].map((platform, i) => (
              <span
                key={`${platform}-${i}`}
                className="text-sm font-medium text-[var(--color-dark-text-muted)]/50 hover:text-[var(--color-dark-text-muted)] transition-colors flex-shrink-0"
              >
                {platform}
              </span>
            ))}
          </motion.div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-dark-bg)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-dark-bg)] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
