"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Affiliates", href: "/affiliates" },
  { label: "Docs", href: "/docs" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-dark-bg)]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container-trada flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Trada Logomark SVG */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-105"
          >
            <circle cx="30" cy="25" r="22" fill="var(--color-trada-red)" />
            <circle cx="70" cy="25" r="22" fill="var(--color-trada-red)" />
            <circle cx="50" cy="72" r="22" fill="var(--color-trada-red)" />
            {/* Connection paths */}
            <path
              d="M 42 36 Q 50 45 58 36"
              fill="var(--color-trada-red)"
            />
            <path
              d="M 36 40 Q 42 58 50 55"
              fill="var(--color-trada-red)"
            />
            <path
              d="M 64 40 Q 58 58 50 55"
              fill="var(--color-trada-red)"
            />
          </svg>
          <span className="text-xl font-bold tracking-tight text-white">
            Trada
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-dark-text-muted)] hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-[var(--color-dark-text-muted)] hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[var(--color-trada-red)] rounded-[var(--radius-full)] hover:bg-[var(--color-trada-red)]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[var(--color-trada-red)]/20"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-200 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-dark-bg)]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="container-trada py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-[var(--color-dark-text-muted)] hover:text-white transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link
                  href="/login"
                  className="text-center py-3 text-[var(--color-dark-text-muted)] hover:text-white"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="text-center py-3 font-medium text-white bg-[var(--color-trada-red)] rounded-[var(--radius-full)]"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
