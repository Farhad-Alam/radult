"use client";

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { urlFor } from "../sanity";
import { Movie } from "../types";

interface Props {
  singleMovieData: Movie;
}
// grid md:grid-cols-3 gap-10 lg:gap-10

// mx-auto w-[15rem] md:w-full lg:w-[60%] h-[25rem] lg:h-full border border-gray-400 rounded-lg

// md:col-span-2

const Details = ({ singleMovieData }: Props) => {
  return (
    <div
    onContextMenu={(e) => e.preventDefault()}
    onCopy={(e) => e.preventDefault()}
    className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start space-y-10 sm:space-y-0 md:space-x-10 lg:space-x-20"
  >
    {/* Left */}
    <div className="relative w-[18rem] h-[25rem] md:w-[17rem] lg:w-[20rem] md:h-[28rem] lg:h-[30rem] border border-gray-400 rounded-lg">
      <Image
        src={urlFor(singleMovieData.mainImage).url()}
        className="object-cover p-[5px] anim"
        fill
        alt={`${singleMovieData?.title} | RTALLY`}
      />
    </div>
    {/* Right */}
    <div className=" space-y-6 md:flex-1 lg:w-auto">
      <h3 className="text-3xl font-semibold">{singleMovieData.title}</h3>
      <div className="flex items-center space-x-4 text-sm text-gray-300">
        <span className="bg-sky-400 p-1 text-sm font-semibold text-white">
          HD
        </span>
        <span className="flex items-center space-x-1">
          <AiFillStar />
          <span>{singleMovieData.rating}</span>
        </span>
        <span>{singleMovieData.duration} min</span>
      </div>
      <p className="text-gray-400 text-sm tracking-wide leading-[1.8rem]">
        {singleMovieData.description}
      </p>
      <div className="text-gray-300 space-y-4">
        <div className="grid grid-cols-3">
          <h4>Country :</h4>
          <p className="col-span-2">{singleMovieData.country}</p>
        </div>
        <div className="grid grid-cols-3">
          <h4>Genre :</h4>
          <p className="col-span-2 space-x-2">
            {singleMovieData.genres.map((item, i) => (
              <span key={i}>{item.title} |</span>
            ))}
          </p>
        </div>
        <div className="grid grid-cols-3">
          <h4>Released :</h4>
          <p className="col-span-2">
            {singleMovieData.year.map((item, i) => (
              <span key={i}>{item.title}</span>
            ))}
          </p>
        </div>
        <div className="grid grid-cols-3">
          <h4>Director :</h4>
          <p className="col-span-2">{singleMovieData.director}</p>
        </div>
        <div className="grid grid-cols-3">
          <h4>Casts :</h4>
          <p className="col-span-2 space-x-2">{singleMovieData.casts}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Details;
