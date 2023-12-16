import { defineField, defineType } from "sanity";

export default defineType({
  name: "quality",
  title: "Quality",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
