"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("trada_cookie_consent="));
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    document.cookie =
      "trada_cookie_consent=accepted; max-age=31536000; path=/; SameSite=Lax";
    setVisible(false);
    // Initialize analytics after consent
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    document.cookie =
      "trada_cookie_consent=declined; max-age=31536000; path=/; SameSite=Lax";
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="glass-card p-6 bg-[var(--color-dark-surface)]/95 border border-white/10">
            <p className="text-sm text-[var(--color-dark-text-muted)] mb-4">
              We use cookies to improve your experience and analyze site
              traffic. By clicking &quot;Accept,&quot; you consent to our use of
              cookies.{" "}
              <a
                href="/legal/privacy-policy"
                className="text-white underline underline-offset-2 hover:text-[var(--color-trada-red)] transition-colors"
              >
                Privacy Policy
              </a>
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-[var(--color-trada-red)] rounded-[var(--radius-md)] hover:bg-[var(--color-trada-red)]/90 transition-all"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-[var(--color-dark-text-muted)] bg-white/5 border border-white/10 rounded-[var(--radius-md)] hover:bg-white/10 transition-all"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
