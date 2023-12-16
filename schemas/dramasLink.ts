import { defineField, defineType } from "sanity";

export default defineType({
  name: "dramasLink",
  title: "DramasLink",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "watchLink",
      title: "WatchLink",
      type: "string",
    }),
    defineField({
      name: "downloadLink",
      title: "DownloadLink",
      type: "string",
    }),
  ],
});
