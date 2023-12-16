import Image from "next/image";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";
import { urlFor } from "../sanity";
import { Movie } from "../types";

interface Props {
  movie: Movie;
}

const Card = ({ movie }: Props) => {
  return (
    <Link href={`/post/${movie?.slug?.current}`} className="relative space-y-2">
      {/* Image */}
      <div className="relative w-full h-[16rem] lg:h-[18rem] group border border-gray-500 rounded-lg">
        <Image
          src={urlFor(movie?.mainImage)?.url()}
          alt={`${movie?.title} | Radult`}
          className="object-cover rounded-lg p-[3px]"
          fill
        />
        <div className="grid place-items-center absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.4)] opacity-0 group-hover:opacity-100 w-full h-full duration-500">
          <span className="grid place-items-center text-3xl bg-gray-900 text-white rounded-full w-14 group-hover:w-16 group-hover:h-16 h-14 p-2 duration-300">
            <BsFillPlayFill />
          </span>
        </div>
      </div>
      <h3 className="line-clamp-1">{movie?.title}</h3>
      <div className="flex justify-between items-center capitalize">
        <div className="space-x-4 text-sm text-gray-400 tracking-wide">
          <span className="text-xs">
            {movie?.year.map((item) => item.title)}
          </span>
          <span className="text-xs">{movie?.duration} min</span>
        </div>
        <span className="border border-gray-500 text-gray-300 text-xs px-1 lg:px-2 py-1 rounded-md">
          {movie?.type.map((item: any) => item.title)}
        </span>
      </div>
      {/* rating */}
      <span className="absolute top-0 right-2 bg-red-500 text-gray-700 font-bold p-1 rounded-sm text-xs">
        {movie?.rating}
      </span>
      {/* language */}
      <span className="absolute bottom-[4.5rem] left-2 bg-red-500 text-gray-700 font-bold p-1 rounded-sm text-xs">
        {movie?.language.map((item: any) => item.title)}
      </span>
    </Link>
  );
};

export default Card;
