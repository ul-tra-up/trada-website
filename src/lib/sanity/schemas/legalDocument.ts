import { defineField, defineType } from "sanity";

export const legalDocument = defineType({
  name: "legalDocument",
  title: "Legal Document",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({ name: "lastUpdated", title: "Last Updated", type: "datetime" }),
  ],
});
