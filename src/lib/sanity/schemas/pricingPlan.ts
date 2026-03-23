import { defineField, defineType } from "sanity";

export const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Plan Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "price", title: "Price (USD)", type: "number" }),
    defineField({ name: "billingPeriod", title: "Billing Period", type: "string", options: { list: ["monthly", "yearly"] } }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "highlighted", title: "Highlighted", type: "boolean", initialValue: false }),
    defineField({ name: "ctaText", title: "CTA Text", type: "string", initialValue: "Get Started" }),
    defineField({ name: "ctaUrl", title: "CTA URL", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
