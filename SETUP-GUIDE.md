# Trada Website — Comprehensive Setup Guide

Welcome! This guide will walk you through setting up the Trada website from start to finish. Follow each section sequentially to deploy the full tech stack.

---

## Part 1: Sanity Project Setup

Sanity is our headless CMS for managing blog posts, testimonials, pricing, and other content.

### Step 1.1: Create a Sanity Project

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Sign up for a new account (or log in if you already have one)
3. Click **"Create new project"**
4. Enter the following details:
   - **Project Name:** `Trada`
   - **Dataset Name:** Leave as default (`production`)
   - **Project Template:** Choose "Clean project" (we have custom schemas already)
5. Click **"Create project"**
6. You'll be taken to the Sanity Studio. Copy your **Project ID** from the URL bar (format: `xyz123abc`) or from **Settings → General**.

### Step 1.2: Create API Token for Next.js

1. In Sanity, click **Settings** (gear icon, top-right)
2. Navigate to **API → Tokens**
3. Click **"Add API Token"**
4. Enter token name: `Next.js Revalidation`
5. Select permissions:
   - **Editor** (allows reading and writing content)
6. Click **"Create token"**
7. **Copy the token** (you won't see it again). Save it somewhere safe.

### Step 1.3: Configure CORS Origins

CORS (Cross-Origin Resource Sharing) allows your website to fetch content from Sanity.

1. In Sanity Settings, go to **API → CORS Origins**
2. Click **"Add CORS origin"**
3. Add these origins:
   - `https://trada.io` (production)
   - `http://localhost:3000` (local development)
4. Click **"Save"** for each

### Step 1.4: Deploy Sanity Studio (Embedded in Website)

The Sanity Studio is accessible at `/studio` on your website (e.g., `https://trada.io/studio`). It's already configured in the codebase:

- **Location:** `/src/app/studio/[[...tool]]/page.tsx`
- **Configuration:** `sanity.config.ts`

Once deployed to Vercel, you can manage all content at `https://trada.io/studio`.

---

## Part 2: Environment Variables Setup

Before deploying, you need to configure environment variables. These contain sensitive credentials and configuration.

### Step 2.1: Create Local .env.local

1. In the project root (`/trada-website/`), create a file named `.env.local`
2. Copy the contents from `.env.example`
3. Replace each placeholder with your actual values:

```bash
# From Sanity (Step 1)
NEXT_PUBLIC_SANITY_PROJECT_ID=xyz123abc
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-01
SANITY_API_TOKEN=your_sanity_api_token_here

# From Customer.io (Step 4)
CUSTOMERIO_SITE_ID=your_site_id
CUSTOMERIO_API_KEY=your_api_key
NEXT_PUBLIC_CUSTOMERIO_SITE_ID=your_site_id

# From Google Analytics (Step 6)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site URLs
NEXT_PUBLIC_SITE_URL=https://trada.io
NEXT_PUBLIC_APP_URL=https://app.trada.io
```

### Step 2.2: Environment Variable Reference

| Variable | Source | Description |
|----------|--------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity Settings → General | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity | Usually "production" |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity | API version (2026-03-01 recommended) |
| `SANITY_API_TOKEN` | Sanity Settings → API → Tokens | API token with Editor permissions |
| `CUSTOMERIO_SITE_ID` | Customer.io Settings | Workspace ID from API Credentials |
| `CUSTOMERIO_API_KEY` | Customer.io Settings | API key from API Credentials |
| `NEXT_PUBLIC_CUSTOMERIO_SITE_ID` | Customer.io Settings | Same as CUSTOMERIO_SITE_ID |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics | Measurement ID (format: G-XXXXXXXXXX) |
| `NEXT_PUBLIC_SITE_URL` | Manual | Marketing website URL |
| `NEXT_PUBLIC_APP_URL` | Manual | Dashboard/app URL |

### Step 2.3: Local Development

To test locally with your environment variables:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Site will be at http://localhost:3000
```

---

## Part 3: Customer.io Setup

Customer.io handles email marketing, automation, and subscriber management.

### Step 3.1: Create Customer.io Account

1. Go to [customer.io](https://customer.io)
2. Sign up for a new account
3. Create a workspace named "Trada"
4. Complete onboarding

### Step 3.2: Get API Credentials

1. Click **Settings** (bottom-left)
2. Navigate to **API Credentials**
3. Note down:
   - **Site ID** (looks like `123abc`)
   - **API Key** (looks like `sk_123abc...`)
4. Add these to your `.env.local` file

### Step 3.3: Create Segments

Segments are groups of subscribers based on criteria. Create these segments:

1. **Waitlist**
   - Trigger: User submits waitlist form
   - Use for: Product launch announcements

2. **Newsletter**
   - Trigger: User subscribes to newsletter
   - Use for: Weekly updates, blog summaries

3. **Blog Subscribers**
   - Trigger: User subscribes to blog updates
   - Use for: New blog post notifications

### Step 3.4: Create Campaigns

Email campaigns that auto-send based on triggers:

1. **Welcome Drip** (3-email series)
   - Email 1 (immediate): Welcome to Trada
   - Email 2 (day 3): Product overview
   - Email 3 (day 7): Customer success stories

2. **Product Updates**
   - Trigger: New feature released
   - Content: Feature announcement + docs link

### Step 3.5: JavaScript Integration

The Customer.io JavaScript snippet is already integrated in the codebase:

- **Location:** `src/components/Analytics.tsx`
- **Functionality:** Tracks page views, events, and user properties
- The snippet automatically loads when the page renders

### Step 3.6: Webhook for N8N Integration

Set up a webhook to notify N8N when subscribers are added:

1. Go to **Integrations → Webhooks**
2. Create a new webhook:
   - **Event:** "Subscriber created"
   - **URL:** `https://n8n.example.com/webhook/customerio-subscriber` (use your N8N URL)
   - **Include payload:** Yes
3. Save and test with a test subscriber

---

## Part 4: N8N Workflow Setup

N8N automates tasks like posting blog updates to social media.

### Step 4.1: Choose Hosting Option

**Option A: Self-Hosted** (Recommended for security)
```bash
docker run -it --rm \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```
Then access at `http://localhost:5678`

**Option B: Cloud** (Easier setup)
1. Go to [n8n.cloud](https://n8n.cloud)
2. Sign up and create a workspace
3. Access your N8N instance immediately

### Step 4.2: Workflow 1 — Blog Post to Social Media

This workflow automatically posts new blog articles to Twitter/X and LinkedIn.

**Setup:**

1. Create a new workflow in N8N
2. Add trigger: **Webhook** (POST)
   - URL pattern: `/webhook/sanity-publish`
   - Authentication: None (for now)
3. Add node: **HTTP Request** (get full post from Sanity)
   - Method: GET
   - URL: `https://api.sanity.io/v2026-03-01/data/query/production?query=*[_id=="{{$json.body._id}}"]`
   - Headers: Add Authorization: `Bearer YOUR_SANITY_API_TOKEN`
4. Add node: **Code** (generate social copy)
   - Language: JavaScript
   - Code:
     ```javascript
     return [{
       json: {
         twitter: `New blog post: "${$json.body[0].title}" 🚀\n\n${$json.body[0].excerpt}\n\nRead more: https://trada.io/blog/${$json.body[0].slug}`,
         linkedin: `Check out our latest blog post: "${$json.body[0].title}"\n\n${$json.body[0].excerpt}\n\nFull article: https://trada.io/blog/${$json.body[0].slug}`
       }
     }]
     ```
5. Add node: **Twitter** (post to X)
   - Authenticate with Twitter API
   - Tweet text: `{{$json.twitter}}`
6. Add node: **LinkedIn** (post to LinkedIn)
   - Authenticate with LinkedIn API
   - Post text: `{{$json.linkedin}}`
7. Save and activate workflow

**Sanity Webhook Configuration:**

1. In Sanity, go to **Settings → API → Webhooks**
2. Create new webhook:
   - **Name:** `N8N Blog Publish`
   - **Event:** `Document published`
   - **URL:** Your N8N webhook URL from step 2
   - **Trigger on document types:** `post`
   - **Include drafts:** No

### Step 4.3: Workflow 2 — New Subscriber Alert to Slack

Notifies your team when new subscribers join.

**Setup:**

1. Create a new workflow in N8N
2. Add trigger: **Webhook** (POST)
   - URL pattern: `/webhook/customerio-subscriber`
3. Add node: **Slack**
   - Authenticate with Slack workspace
   - Channel: `#leads`
   - Message:
     ```
     New subscriber from Customer.io! 🎉
     Name: {{$json.body.data.attributes.name}}
     Email: {{$json.body.data.attributes.email}}
     Segment: {{$json.body.data.attributes.segment}}
     ```
4. Save and activate workflow

**Customer.io Webhook URL:**

From Step 3.6, use your N8N webhook URL:
`https://your-n8n-instance.com/webhook/customerio-subscriber`

---

## Part 5: Google Analytics 4 Setup

Track website traffic, user behavior, and conversions.

### Step 5.1: Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Click **"Create"** → **"Property"**
4. Property name: `Trada Website`
5. Reporting timezone: Your timezone
6. Currency: USD
7. Click **"Create"**

### Step 5.2: Create Web Data Stream

1. Under your new property, click **"Data streams"**
2. Click **"Web"**
3. Enter website URL: `https://trada.io`
4. Stream name: `Trada Web`
5. Click **"Create stream"**

### Step 5.3: Get Measurement ID

1. You'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. Copy this value
3. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Step 5.4: Verify Installation

The Google Analytics code is already integrated in the codebase:

- **Location:** `src/components/Analytics.tsx`
- **Functionality:** Automatically sends page views and events
- After deployment, you'll see real-time traffic in Google Analytics dashboard

### Step 5.5: Create Key Events (Conversions)

In Google Analytics:

1. Go to **Events**
2. Click **"Create event"**
3. Create these events:
   - **Newsletter Signup**: Triggers when user subscribes
   - **Waitlist Signup**: Triggers when user joins waitlist
   - **CTA Click**: Tracks clicks on Call-To-Action buttons

---

## Part 6: Vercel Deployment

Deploy your site to production using Vercel (the recommended platform for Next.js).

### Step 6.1: Push Code to GitHub

1. Create a new GitHub repository named `trada-website`
2. In your local project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Trada website"
   git branch -M main
   git remote add origin https://github.com/your-username/trada-website.git
   git push -u origin main
   ```

### Step 6.2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up (or log in)
3. Click **"Add New"** → **"Project"**
4. Click **"Import Git Repository"**
5. Search for `trada-website` and select it
6. Click **"Import"**

### Step 6.3: Configure Build Settings

Vercel will auto-detect Next.js. Verify:

- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Step 6.4: Add Environment Variables

1. Under **Environment Variables**, add each variable from your `.env.local`:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `SANITY_API_TOKEN`
   - `CUSTOMERIO_SITE_ID`
   - `CUSTOMERIO_API_KEY`
   - `NEXT_PUBLIC_CUSTOMERIO_SITE_ID`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_APP_URL`

2. For sensitive tokens (like `SANITY_API_TOKEN`), select **"Sensitive"** checkbox
3. Click **"Deploy"**

### Step 6.5: Configure Custom Domain

Once deployment is complete:

1. Go to **Project Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `trada.io`
4. Follow DNS instructions:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add CNAME record:
     - **Name:** `trada`
     - **Value:** `cname.vercel-dns.com`
5. Vercel will verify and enable HTTPS automatically

### Step 6.6: Set Up Preview Deployments

Preview deployments allow testing branches before merging to main:

1. In **Project Settings** → **Git**
2. Enable **"Preview Deployments"** (should be on by default)
3. Linked branches: `main`
4. Now any PR will automatically get a preview URL

**Testing a branch:**
```bash
git checkout -b feature/new-feature
# Make changes
git push origin feature/new-feature
```
Vercel will create a preview URL automatically.

### Step 6.7: Configure Deployment Protection

For security, protect your production deployment:

1. Go to **Project Settings** → **Deployment Protection**
2. Enable **"Vercel Authentication"** for preview deployments
3. This requires login to view preview URLs

---

## Part 7: Post-Deployment Checklist

After deploying to Vercel, run through this checklist to ensure everything works:

### Core Functionality

- [ ] Visit `https://trada.io` and verify pages load
- [ ] All images display correctly
- [ ] Navigation menu works
- [ ] Responsive design works on mobile (test with DevTools)
- [ ] Links to `/studio` work: `https://trada.io/studio`

### Forms & Submissions

- [ ] Newsletter signup form submits
- [ ] Waitlist form submits
- [ ] Contact form submits
- [ ] Forms display success/error messages

### Analytics & Tracking

- [ ] Google Analytics dashboard shows real-time traffic
- [ ] Page views are being tracked
- [ ] Customer.io JavaScript loads (check DevTools → Network → customerio)
- [ ] Events are firing (check in Customer.io dashboard)

### Content Management

- [ ] Log in to `https://trada.io/studio`
- [ ] Create a test blog post
- [ ] Publish blog post
- [ ] Verify it appears on website immediately (or after ISR revalidation)
- [ ] Update a testimonial in Sanity
- [ ] Verify change appears on website

### SEO & Performance

- [ ] Run Lighthouse audit (DevTools → Lighthouse):
  - Target: 90+ on all metrics
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+
- [ ] Submit sitemap to Google Search Console:
  - URL: `https://trada.io/sitemap.xml`
- [ ] Submit to Bing Webmaster Tools:
  - URL: `https://www.bing.com/webmasters`
- [ ] Test OG images (social sharing):
  - Use [opengraph.xyz](https://www.opengraph.xyz)
  - Enter `https://trada.io`
  - Verify image preview shows correctly
- [ ] Check structured data:
  - Use [Google Rich Results Test](https://search.google.com/test/rich-results)
  - Enter `https://trada.io`
  - Verify schema markup is valid

### Security

- [ ] HTTPS is enabled (lock icon in browser)
- [ ] Security headers are present (check DevTools → Network → Response Headers):
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: origin-when-cross-origin`
- [ ] No console errors (DevTools → Console)
- [ ] No mixed content warnings (should be all HTTPS)

### Email & Automations

- [ ] Sign up for newsletter and receive welcome email from Customer.io
- [ ] Check that email contains correct branding/content
- [ ] Join waitlist and receive waitlist confirmation
- [ ] Check Slack for N8N subscriber alerts (if configured)

### Monitoring

- [ ] Set up error monitoring:
  - Vercel has built-in error logs: **Monitoring** tab
  - Check for any 500 errors
- [ ] Set up uptime monitoring:
  - Use [Uptime Robot](https://uptimerobot.com) or similar
  - Monitor `https://trada.io` every 5 minutes

---

## Troubleshooting

### Common Issues

**Issue:** "Cannot find module 'sanity'"
- **Solution:** Run `npm install` and restart dev server

**Issue:** Sanity Studio shows blank page
- **Solution:** Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct in `.env.local`

**Issue:** Blog posts don't appear after publishing in Sanity
- **Solution:**
  - Check browser console for errors
  - Verify `SANITY_API_TOKEN` has Editor permissions
  - Try manually revalidating: `npm run build`

**Issue:** Forms don't submit
- **Solution:**
  - Check Customer.io API credentials are correct
  - Check browser console for CORS errors
  - Verify CORS origins in Sanity settings include your domain

**Issue:** Google Analytics shows no data
- **Solution:**
  - Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is correct
  - Check DevTools → Network for `google-analytics` requests
  - Wait 24-48 hours for historical data to appear

**Issue:** Vercel deployment fails
- **Solution:**
  - Check build logs: **Deployments** → Failed deployment → **View logs**
  - Common causes: Missing env vars, build errors, dependency issues
  - Try rebuilding: **Deployments** → **...** → **Redeploy**

### Getting Help

- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Customer.io Docs:** https://customer.io/docs
- **N8N Docs:** https://docs.n8n.io

---

## Next Steps

After successful deployment:

1. **Customize Content:** Add your team, products, and company info in Sanity Studio
2. **Set Up Email Sequences:** Create welcome drips and nurture campaigns in Customer.io
3. **Configure Automations:** Set up N8N workflows for social posting and alerts
4. **Monitor Performance:** Check Google Analytics and Vercel dashboards weekly
5. **Plan Content:** Create a content calendar for blog posts and email campaigns

---

**Last Updated:** March 2026

For questions or updates to this guide, please contact the development team.
