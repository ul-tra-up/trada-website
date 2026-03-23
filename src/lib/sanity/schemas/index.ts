import { post } from "./post";
import { author } from "./author";
import { category } from "./category";
import { feature } from "./feature";
import { pricingPlan } from "./pricingPlan";
import { testimonial } from "./testimonial";
import { legalDocument } from "./legalDocument";
import { siteSettings } from "./siteSettings";
import { blockContent } from "./blockContent";

export const schemaTypes = [
  // Document types
  post,
  author,
  category,
  feature,
  pricingPlan,
  testimonial,
  legalDocument,
  siteSettings,
  // Object types
  blockContent,
];
