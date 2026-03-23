import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Analytics } from "@/components/layout/Analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://trada.io"),
  title: {
    default: "Trada — Trade Smarter, Scale Faster",
    template: "%s | Trada",
  },
  description:
    "Copy trades across Forex, Crypto, and Stocks with millisecond precision and institutional-grade protection across 11+ platforms. Your entire trading stack unified.",
  keywords: [
    "trade copier",
    "copy trading",
    "multi-account trading",
    "forex trade copier",
    "prop firm compliance",
    "MT4 copier",
    "MT5 copier",
    "Rithmic",
    "Tradovate",
    "trade journaling",
    "multi-broker aggregator",
  ],
  authors: [{ name: "Trada" }],
  creator: "Trada",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trada.io",
    siteName: "Trada",
    title: "Trada — Trade Smarter, Scale Faster",
    description:
      "Copy trades across Forex, Crypto, and Stocks with millisecond precision and institutional-grade protection across 11+ platforms.",
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: "Trada — Your entire trading stack unified",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trada — Trade Smarter, Scale Faster",
    description:
      "Copy trades across Forex, Crypto, and Stocks with millisecond precision across 11+ platforms.",
    images: ["/images/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Trada",
              url: "https://trada.io",
              logo: "https://trada.io/images/logos/trada-logo.svg",
              description:
                "SaaS platform for multi-account trade management with copy trading, multi-broker aggregation, and institutional-grade protection.",
              sameAs: [
                "https://twitter.com/tabortrading",
                "https://linkedin.com/company/trada",
              ],
            }),
          }}
        />
        {/* Structured Data — SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Trada",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              description:
                "Copy trades across Forex, Crypto, and Stocks with millisecond precision and institutional-grade protection across 11+ platforms.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free plan available via partner accounts",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-dark-bg text-dark-text antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
