import { groq } from "next-sanity";
import { client } from "../../sanity";
import { Category, Movie } from "../../types";

export default async function sitemap() {
  const baseUrl = "https://radult.vercel.app";
  // const movieQuery = groq`
  // *[_type == "movie"] |  order(_createdAt  desc)`;
  // const movieData: Movie[] = await client.fetch(movieQuery);

  // const moviesUrls =
  //   movieData.map((movie) => {
  //     return {
  //       url: `${baseUrl}/post/${movie.slug.current}`,
  //       lastModified: new Date(movie._updatedAt),
  //     };
  //   }) ?? [];

  //   Get all categories from CMS
  const categoryQuery = groq`
*[_type == "movie" && $keyword in categories[]->title] |  order(_createdAt  desc) | order(released  desc)`;
  const categoryData: Category[] = await client.fetch(categoryQuery, {
    keyword: "Adult 18+",
  });

  const categoriesUrls =
    categoryData.map((category) => {
      return {
        url: `${baseUrl}/post/${category.slug.current}`,
        lastModified: new Date(category._createdAt),
      };
    }) ?? [];
  //   const dramasQuery = groq`
  // *[_type == "dramas"] |  order(_createdAt  desc)`;
  //   const dramasData = await client.fetch(dramasQuery);
  //   const dramassUrls =
  //     dramasData.map((dramas: any) => {
  //       return {
  //         url: `${baseUrl}/dramas/${dramas.title}`,
  //         lastModified: new Date(dramas._createdAt),
  //       };
  //     }) ?? [];

  //   const genresQuery = groq`
  // *[_type == "genres"] |  order(_createdAt  desc)`;
  //   const genresData = await client.fetch(genresQuery);
  //   const genressUrls =
  //     genresData.map((genres: any) => {
  //       return {
  //         url: `${baseUrl}/genres/${genres.title}`,
  //         lastModified: new Date(genres._createdAt),
  //       };
  //     }) ?? [];
  //   const yearQuery = groq`
  // *[_type == "year"] |  order(_createdAt  desc)`;
  //   const yearData = await client.fetch(yearQuery);
  //   const yearsUrls =
  //     yearData.map((year: any) => {
  //       return {
  //         url: `${baseUrl}/year/${year.title}`,
  //         lastModified: new Date(year._createdAt),
  //       };
  //     }) ?? [];
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    ...categoriesUrls,
  ];
}
