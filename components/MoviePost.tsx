import Link from "next/link";
import React from "react";
import { Movie } from "../types";
import Card from "./Card";

interface Props {
  title: string;
  link: any;
  movieData: Movie[];
}

const MoviePost = ({ title, movieData, link }: Props) => {
  return (
    <div className="p-2 md:p-4 space-y-10 my-10">
      <div className=" flex justify-between items-center">
        <h2 className="text-2xl rounded-md anim uppercase tracking-wide border border-red-700 w-fit px-2 py-1">
          {title}
        </h2>
        {title === "Trending" ? (
          <Link
            href={"/trending"}
            className="anim duration-75 text-sm border-b  border-l hover:border-r hover:border-t hover:border-l-0 hover:border-b-0 border-red-400 p-2 font-semibold"
          >
            View More
          </Link>
        ) : null}
        {title === "Anime" ? (
          <Link
            href={"/anime"}
            className="anim duration-75 text-sm border-b  border-l hover:border-r hover:border-t hover:border-l-0 hover:border-b-0 border-red-400 p-2 font-semibold"
          >
            View More
          </Link>
        ) : null}
        {title === "Adult 18+" ? (
          <Link
            href={"/adult"}
            className="anim duration-75 text-sm border-b  border-l hover:border-r hover:border-t hover:border-l-0 hover:border-b-0 border-red-400 p-2 font-semibold"
          >
            View More
          </Link>
        ) : null}

        {title === "Featured" ? (
          <Link
            href={"/featured"}
            className="anim duration-75 text-sm border-b  border-l hover:border-r hover:border-t hover:border-l-0 hover:border-b-0 border-red-400 p-2 font-semibold"
          >
            View More
          </Link>
        ) : null}
        {link && (
          <Link
            href={link}
            className="anim duration-75 text-sm border-b  border-l hover:border-r hover:border-t hover:border-l-0 hover:border-b-0 border-red-400 p-2 font-semibold"
          >
            View More
          </Link>
        )}
      </div>
      {/* all Movies */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-2 lg:gap-4 md:gap-y-8">
        {movieData.slice(0, 21).map((movie: Movie) => (
          <Card key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviePost;
