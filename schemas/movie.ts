import { defineField, defineType } from "sanity";

export default defineType({
  name: "movie",
  title: "Movie",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "released",
      title: "Released",
      type: "string",
    }),
    defineField({
      name: "director",
      title: "Director",
      type: "string",
    }),
    defineField({
      name: "casts",
      title: "Casts",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "string",
    }),
    defineField({
      name: "quality",
      title: "Quality",
      type: "array",
      of: [{ type: "reference", to: { type: "quality" } }],
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "array",
      of: [{ type: "reference", to: { type: "types" } }],
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "array",
      of: [{ type: "reference", to: { type: "language" } }],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "bannerImg",
      title: "Banner image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "screenImage",
      title: "Screen image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: "streamSB",
    //   title: "StreamSB",
    //   type: "string",
    // }),
    defineField({
      name: "fileMoon",
      title: "FileMoon",
      type: "string",
    }),
    // defineField({
    //   name: "doodStream",
    //   title: "DoodStream",
    //   type: "string",
    // }),
    defineField({
      name: "downloadLink",
      title: "DownloadLink",
      type: "string",
    }),
    defineField({
      name: "gdriveLink",
      title: "GdriveLink",
      type: "string",
    }),
    defineField({
      name: "zipFile",
      title: "ZipFile",
      type: "string",
    }),
    // defineField({
    //   name: "dramas",
    //   title: "Dramas",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "dramas" } }],
    // }),
    defineField({
      name: "dramasLink",
      title: "DramasLink",
      type: "array",
      of: [{ type: "reference", to: { type: "dramasLink" } }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "genres",
      title: "Genres",
      type: "array",
      of: [{ type: "reference", to: { type: "genres" } }],
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "array",
      of: [{ type: "reference", to: { type: "year" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
