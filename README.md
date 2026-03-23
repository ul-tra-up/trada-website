# Trada — Marketing Website

Pre-launch marketing website for [Trada](https://trada.io) — a SaaS trading platform for copy trading, multi-broker aggregation, and prop firm compliance.

Built with **Next.js 15** (App Router) + **Sanity v3** CMS + **Tailwind CSS v4** + **TypeScript**.

## Tech Stack

- **Framework:** Next.js 15 with App Router & Turbopack
- **CMS:** Sanity v3 with embedded Studio at `/studio`
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Animations:** Framer Motion + Three.js / Spline (3D)
- **Email:** Customer.io Track API (waitlist & newsletter)
- **Analytics:** GA4 with GDPR consent mode
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-org/trada-website.git
cd trada-website
npm install
```

### 2. Environment Variables

Copy the example file and fill in your credentials:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (e.g. `production`) |
| `SANITY_API_TOKEN` | Sanity read token |
| `SANITY_REVALIDATE_SECRET` | Webhook secret for on-demand revalidation |
| `CUSTOMERIO_SITE_ID` | Customer.io site ID |
| `CUSTOMERIO_API_KEY` | Customer.io Track API key |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_SITE_URL` | Production URL (https://trada.io) |

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the website and [http://localhost:3000/studio](http://localhost:3000/studio) for Sanity Studio.

### 4. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── (marketing)/       # Marketing pages (features, pricing, about, etc.)
│   ├── blog/              # Blog listing & post pages
│   ├── studio/            # Embedded Sanity Studio
│   ├── api/               # API routes (subscribe, revalidate)
│   ├── layout.tsx         # Root layout with SEO & JSON-LD
│   ├── page.tsx           # Homepage
│   └── not-found.tsx      # Custom 404
├── components/
│   ├── layout/            # NavBar, Footer, CookieBanner, Analytics
│   └── sections/          # Homepage sections (Hero, Metrics, etc.)
├── lib/sanity/            # Sanity client, queries, schemas
├── styles/                # Global CSS with design tokens
└── types/                 # TypeScript interfaces
```

## Pages

- `/` — Homepage (hero, platform logos, problem/solution, features, metrics, how it works, CTA)
- `/features` — Features overview
- `/features/[slug]` — Individual feature pages
- `/pricing` — Pricing tiers (Starter, Pro, Enterprise)
- `/about` — Company mission & values
- `/blog` — Blog listing
- `/blog/[slug]` — Blog posts (Sanity-powered)
- `/contact` — Contact form
- `/affiliates` — Partner program
- `/legal/terms-of-service` — Terms of Service
- `/legal/privacy-policy` — Privacy Policy
- `/legal/risk-disclaimer` — Risk Disclaimer
- `/studio` — Sanity CMS Studio

## Deployment

This project is configured for **Vercel**. Import the repo in Vercel, set environment variables, and deploy. See `vercel.json` for custom headers and redirects.

## License

Proprietary — Trada.io. All rights reserved.
