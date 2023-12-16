import { defineField, defineType } from "sanity";

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "movie",
      title: "Movie",
      type: "reference",
      to: [{ type: "movie" }],
    }),
  ],
});
