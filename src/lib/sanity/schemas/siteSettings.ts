import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site Title", type: "string" }),
    defineField({ name: "description", title: "Site Description", type: "text", rows: 3 }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "subTagline", title: "Sub Tagline", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "twitter", title: "Twitter / X", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "discord", title: "Discord", type: "url" },
        { name: "telegram", title: "Telegram", type: "url" },
      ],
    }),
    defineField({
      name: "announcementBar",
      title: "Announcement Bar",
      type: "object",
      fields: [
        { name: "enabled", title: "Enabled", type: "boolean", initialValue: false },
        { name: "text", title: "Text", type: "string" },
        { name: "link", title: "Link", type: "url" },
      ],
    }),
  ],
});
