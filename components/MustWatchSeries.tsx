import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { MustWatch } from "../types";

interface Props {
  mustWatchData: MustWatch[];
}

const MustWatchSeries = ({ mustWatchData }: Props) => {
  return (
    <section className="max-w-[90rem] mx-auto p-2 md:p-4 mt-4 sm:mt-8 space-y-8">
      <h4 className="text-2xl sm:text-2xl rounded-md anim uppercase tracking-wide border border-red-700 w-fit px-2 py-1">
        Must Watch Series-Movies
      </h4>
      <div>
        <div className="text-center flex space-x-8 w-auto overflow-x-scroll scrollbar-thin pb-6 scrollbar-track-white scrollbar-thumb-red-400">
          {mustWatchData.map((item) => (
            <Link
              href={item.link}
              className="relative  w-[8rem] sm:w-[10rem] h-[8rem] sm:h-[10rem] anim"
              key={item._id}
            >
              <div className="relative w-[8rem] sm:w-[10rem] h-[8rem] sm:h-[10rem] border-2 border-red-400 rounded-full">
                <Image
                  src={urlFor(item.mainImage).url()}
                  className="rounded-full object-cover p-2 anim"
                  alt={`${item?.title} | RTALLY`}
                  fill
                />
              </div>
              <div className="flex justify-center items-center bg-[rgba(0,0,0,0.6)] w-[90%] h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full">
                <h2 className="text-xs sm:text-sm font-semibold uppercase p-1 text-gray-200 shad">
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MustWatchSeries;
