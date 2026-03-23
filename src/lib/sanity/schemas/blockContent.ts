import { defineType, defineArrayMember } from "sanity";

export const blockContent = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              { title: "URL", name: "href", type: "url" },
              { title: "Open in new tab", name: "blank", type: "boolean" },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative text" },
        { name: "caption", type: "string", title: "Caption" },
      ],
    }),
    defineArrayMember({
      title: "Code Block",
      name: "code",
      type: "object",
      fields: [
        { name: "language", title: "Language", type: "string" },
        { name: "code", title: "Code", type: "text" },
      ],
    }),
  ],
});
