import { defineField, defineType } from "sanity";

export default defineType({
  name: "language",
  title: "Language",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
