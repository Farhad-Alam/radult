import { defineField, defineType } from "sanity";

export default defineType({
  name: "dramas",
  title: "Dramas",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
