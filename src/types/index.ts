// ============================================
// Trada Website — TypeScript Types
// ============================================

// Navigation
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Blog
export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  featuredImage: SanityImage;
  author: Author;
  categories: Category[];
  tags: string[];
  publishedAt: string;
  body: any[]; // Portable Text
  seo: SEOFields;
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image: SanityImage;
  bio: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
}

// Features
export interface Feature {
  _id: string;
  title: string;
  slug: { current: string };
  tagline: string;
  description: string;
  icon: string;
  image: SanityImage;
  benefits: string[];
  order: number;
}

// Pricing
export interface PricingPlan {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  billingPeriod: "monthly" | "yearly";
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
  ctaUrl: string;
  order: number;
}

// Testimonials
export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: SanityImage;
  rating: number;
}

// SEO
export interface SEOFields {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
}

// Sanity
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

// Site Settings
export interface SiteSettings {
  title: string;
  description: string;
  tagline: string;
  subTagline: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    discord: string;
    telegram: string;
  };
  announcementBar?: {
    enabled: boolean;
    text: string;
    link: string;
  };
}

// Customer.io
export interface SubscribeFormData {
  email: string;
  source: "waitlist" | "newsletter" | "blog";
  name?: string;
}
