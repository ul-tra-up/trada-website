import { groq } from "next-sanity";

// Blog posts
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    "author": author->{name, slug, image},
    "categories": categories[]->{title, slug},
    tags
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    body,
    publishedAt,
    "author": author->{name, slug, image, bio},
    "categories": categories[]->{title, slug},
    tags,
    seo
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;

// Categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;

export const postsByCategoryQuery = groq`
  *[_type == "post" && $category in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    "author": author->{name, slug, image},
    "categories": categories[]->{title, slug}
  }
`;

// Features
export const featuresQuery = groq`
  *[_type == "feature"] | order(order asc) {
    _id,
    title,
    slug,
    tagline,
    description,
    icon,
    image,
    benefits,
    order
  }
`;

export const featureBySlugQuery = groq`
  *[_type == "feature" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    tagline,
    description,
    icon,
    image,
    benefits,
    seo
  }
`;

// Pricing
export const pricingPlansQuery = groq`
  *[_type == "pricingPlan"] | order(order asc) {
    _id,
    name,
    slug,
    price,
    billingPeriod,
    description,
    features,
    highlighted,
    ctaText,
    ctaUrl,
    order
  }
`;

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    company,
    quote,
    image,
    rating
  }
`;

// Site settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    tagline,
    subTagline,
    socialLinks,
    announcementBar
  }
`;

// Legal documents
export const legalDocumentQuery = groq`
  *[_type == "legalDocument" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    lastUpdated
  }
`;
