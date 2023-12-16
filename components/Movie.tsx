"use client";

import React, { useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { Movie } from "../types";
import * as Loader from "react-loader-spinner";

const Movie = ({ movieData, title, end, setEnd, total, loading }: any) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [moviesPerPage, setMoviesPerPage] = useState(30);
  // const lastMovieIndex = currentPage * moviesPerPage;
  // const firstMovieIndex = lastMovieIndex - moviesPerPage;
  // const currentMovie = movieData.slice(firstMovieIndex, lastMovieIndex);

  const fecthMoreMovies = () => {
    setEnd(end + 14);
  };

  return (
    <div>
      <main className="max-w-[90rem] mx-auto p-2 md:p-4">
        <div>
          <h1 className="text-2xl sm:text-3xl tracking-wide my-10 sm:my-14 bg-red-500 text-gray-800 w-fit px-4 py-1 font-semibold uppercase mx-auto">
            {title}
          </h1>
        </div>
        <div className="grid-cols-2 grid md:grid-cols-5 lg:grid-cols-7 gap-4 mb-20">
          {movieData?.map((item: Movie) => (
            <Card key={item._id} movie={item} />
          ))}
        </div>
        {/* Pagination */}
        {/* <div className="max-w-2xl mx-auto">
          {movieData.length > 30 && (
            <Pagination
              totalMovies={movieData.length}
              moviesPerPage={moviesPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div> */}
        {movieData[0]?.count >= total ? (
          <div>
            <div className="flex justify-center ">
              <button
                className="disabled:cursor-not-allowed"
                disabled={loading}
                onClick={() => fecthMoreMovies()}
              >
                {loading ? (
                  <div className="border border-red-500 rounded-md px-4 py-1">
                    <Loader.Dna height="32" width="60" ariaLabel="loading" />
                  </div>
                ) : (
                  movieData[0]?.count > total && (
                    <p className="px-4 py-2 bg-red-500 rounded-sm hover:bg-transparent border border-red-400 duration-300 anim">
                      Show More
                    </p>
                  )
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center mb-10">
            <Loader.CirclesWithBar
              height="60"
              width="60"
              color="red"
              ariaLabel="loading"
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Movie;
