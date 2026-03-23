import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Documentation", href: "/docs" },
    { label: "API", href: "/docs" },
    { label: "Changelog", href: "/blog/category/product-updates" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Affiliates", href: "/affiliates" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/legal/terms-of-service" },
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Risk Disclaimer", href: "/legal/risk-disclaimer" },
  ],
  Connect: [
    { label: "Twitter / X", href: "https://twitter.com/tabortrading" },
    { label: "LinkedIn", href: "https://linkedin.com/company/trada" },
    { label: "Discord", href: "#" },
    { label: "Telegram", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[var(--color-dark-bg)]">
      <div className="container-trada py-16 md:py-20">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/5">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-white mb-2">
              Stay in the loop
            </h3>
            <p className="text-[var(--color-dark-text-muted)] text-sm">
              Product updates, market insights, and engineering deep-dives.
              No hype. No spam.
            </p>
          </div>
          <form className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 md:w-72 px-4 py-3 bg-white/5 border border-white/10 rounded-[var(--radius-md)] text-sm text-white placeholder:text-[var(--color-dark-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-trada-red)]/50 focus:border-[var(--color-trada-red)]/50 transition-all"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium text-white bg-[var(--color-trada-red)] rounded-[var(--radius-md)] hover:bg-[var(--color-trada-red)]/90 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-dark-text-muted)] hover:text-white transition-colors"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <div className="flex items-center gap-3">
            {/* Logomark */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="25" r="22" fill="var(--color-trada-red)" />
              <circle cx="70" cy="25" r="22" fill="var(--color-trada-red)" />
              <circle cx="50" cy="72" r="22" fill="var(--color-trada-red)" />
              <path d="M 42 36 Q 50 45 58 36" fill="var(--color-trada-red)" />
              <path d="M 36 40 Q 42 58 50 55" fill="var(--color-trada-red)" />
              <path d="M 64 40 Q 58 58 50 55" fill="var(--color-trada-red)" />
            </svg>
            <span className="text-sm font-semibold text-white">Trada</span>
          </div>
          <p className="text-xs text-[var(--color-dark-text-muted)]">
            &copy; {new Date().getFullYear()} Trada. All rights reserved.
            Copy Trading does not equal to investment advice.
            Past performance is not an indicator of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
