import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";

const SimilarThings = ({ similarData }: any) => {
  return (
    <div>
      <div>
        <div className="text-center flex space-x-8 w-auto overflow-x-scroll scrollbar-thin pb-6 scrollbar-track-white scrollbar-thumb-red-400">
          {similarData.map((item: any) => (
            <Link
              href={`/post/${item.slug.current}`}
              className="relative  w-[8rem] sm:w-[10rem] h-[8rem] sm:h-[10rem] anim"
              key={item._id}
            >
              <div className="relative w-[8rem] sm:w-[10rem] h-[8rem] sm:h-[10rem] border-2 border-red-400 rounded-full">
                <Image
                  src={urlFor(item.mainImage).url()}
                  className="rounded-full object-cover p-2 anim"
                  alt={`${item?.title} | Radult`}
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
    </div>
  );
};

export default SimilarThings;
