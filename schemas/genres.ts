import { defineField, defineType } from "sanity";

export default defineType({
  name: "genres",
  title: "Genres",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
