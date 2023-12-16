"use client";

interface Props {
  totalMovies: any;
  moviesPerPage: any;
  currentPage: any;
  setCurrentPage: any;
}

const Pagination = ({
  totalMovies,
  moviesPerPage,
  currentPage,
  setCurrentPage,
}: Props) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex space-x-6 sm:space-x-8 overflow-x-scroll scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-black pb-4 last:pr-4">
      {pages.map((page, i) => {
        return (
          <button
            onClick={() => {
              setCurrentPage(page);
            }}
            className={`${
              page == currentPage && "bg-red-500 rounded-full"
            } border border-red-500 w-8 sm:w-10 h-8 flex items-center justify-center sm:h-10 p-4 rounded-full font-semibold`}
            key={i}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
