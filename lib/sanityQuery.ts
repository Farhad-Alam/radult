import { groq } from "next-sanity";

export const postQuery = groq`
*[_type == "movie" && $keyword in featured[]->slug.current]  | order(released desc)`;
export const bannerQuery = groq`
*[_type == "movie" && $keyword in categories[]->title] | order(_createdAt  desc)[0...5]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->
}`;
export const categoryQuery = groq`
*[_type == "movie" && $keyword in categories[]->title] |  order(_createdAt  desc) | order(released  desc)[0...7]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->
}`;
export const trendingQuery = groq`
*[_type == "movie" && $keyword in categories[]->title] |  order(_createdAt  desc) | order(released  desc)[0...14]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->
}`;
export const featuredQuery = groq`
*[_type == "movie" && $keyword in categories[]->title] |  order(_createdAt  desc) | order(released  desc)[0...14]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->
}`;
export const categoriesQuery = groq`
*[_type == "movie" && $keyword in categories[]->title] |  order(_createdAt  desc) | order(released  desc)[0...$end]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->,
    "count": count(*[_type == "movie" && $keyword in categories[]->title])
}`;
export const categoryQuery2 = groq`
*[_type == "movie" && $keyword in categories[]->title] |  order(_createdAt  desc) | order(released  desc)[0...$end]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->,
    "count": count(*[_type == "movie" && $keyword in categories[]->title])
}`;
export const dramaQuery = groq`
*[_type == "movie" && $keyword in dramas[]->title] |  order(_createdAt  desc) | order(released desc)[0...$end]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->,
    "count": count(*[_type == "movie" && $keyword in dramas[]->title])
}`;
export const typeQuery = groq`
*[_type == "movie" && $keyword in type[]->title] | order(released desc)[0...7]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->
}`;
export const typesQuery = groq`
*[_type == "movie" && $keyword in type[]->title] | order(released desc)[0...$end]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->,
    "count": count(*[_type == "movie" && $keyword in type[]->title])
}`;
export const dramasQuery = groq`
*[_type == "movie" && $keyword in type[]->title] | order(released desc)[0...$end]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->,
    "count": count(*[_type == "movie" && $keyword in type[]->title])
  
}`;

export const genreQuery = groq`
*[_type == "movie" && $keyword in genres[]->title] |  order(_createdAt  desc) | order(released desc)[0...$end]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->,
    "count": count(*[_type == "movie" &&  $keyword in genres[]->title])
}`;
export const yearQuery = groq`
*[_type == "movie" && $keyword in year[]->title] |  order(_createdAt  desc) | order(released desc)[0...$end]{
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->,
    "count": count(*[_type == "movie" && $keyword in year[]->title])
}`;

export const singleMovieQuery = groq`
*[_type == "movie" && slug.current == $slug][0] {
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->,
    dramas[]->,
    dramasLink[]->,
    "comments": *[_type == "comment" && references(^._id)]{
        name,
        comment,
        _createdAt
    } 
}`;
export const movieQuery = groq`
*[_type == "movie" && $keyword in type[]->title] | order(released desc)[0...$end] {
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->,
    "count": count(*[_type == "movie" && $keyword in type[]->title])
}`;
export const mustWatchQuery = groq`
*[_type == "mustWatch"] | order(_updatedAt desc) | order(released desc)[0...9]`;
export const multipleCategoryQuery = groq`
*[_type == 'movie' && count((categories[]-> title)[@ in $keyword]) > 0] |  order(_createdAt  desc) | order(released desc)[0...14] {
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->
}`;
export const indianyQuery = groq`
*[_type == 'movie' && count((categories[]-> title)[@ in $keyword]) > 0] |  order(_createdAt  desc) | order(released desc)[0...7] {
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->
}`;

export const searchQuery = groq`*[_type == "movie" && $key in categories[]->title && title match $keyword + "*"]  | order(released desc){
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->

}`;
export const similarQuery = groq`*[_type == "movie" && slug.current match $keyword + "*"]  | order(released asc){
    ...,
    type[]->,
    categories[]->,
    genres[]->,
    language[]->,
    quality[]->,
    year[]->

}`;
