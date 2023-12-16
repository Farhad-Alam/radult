import { defineField, defineType } from "sanity";

export default defineType({
  name: "year",
  title: "Year",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
