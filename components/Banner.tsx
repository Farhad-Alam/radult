"use client";

import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";
import { Movie } from "../types";
import { urlFor } from "../sanity";
import { AiFillStar } from "react-icons/ai";

interface Props {
  bannerData: Movie[];
}

const Banner = ({ bannerData }: Props) => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="relative top-0 z-[10]"
    >
      {bannerData.slice(0, 50).map((item: Movie) => (
        <SwiperSlide key={item._id}>
          {/* Image */}
          <div className="relative w-screen h-screen overflow-hidden">
            <Image
              src={urlFor(item.bannerImg).url()}
              alt={`${item?.title} | Radult`}
              className="object-cover"
              fill
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]"></div>
          </div>
          {/* Content */}
          <div className="bg-gradient-to-t from-[rgba(0,0,0,1)] absolute bottom-0 w-full space-y-5 px-4 py-14 lg:py-40 lg:p-[15.5rem]">
            <h2 className="text-3xl">{item.title}</h2>
            <div className="grid grid-cols-3 gap-x-4 text-xs sm:text-sm sm:flex items-center">
              <div className="space-y-5 sm:space-y-0 sm:space-x-4 sm:flex items-center  ">
                <span className="bg-red-500 text-gray-900 font-bold p-[2px] rounded-sm w-fit">
                  HD
                </span>
                <h4>Duration : {item.duration}min</h4>
              </div>
              <div className="col-span-2 space-y-5 sm:space-y-0 sm:space-x-4 sm:flex items-center ">
                <h4 className="flex items-center space-x-1">
                  <span>IMDB :</span>
                  <p className="text-red-500 flex items-center">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>{item.rating}</span>
                  </p>
                </h4>
                <h4 className="flex items-center space-x-2">
                  <p> Genre :</p>
                  <div className="space-x-1">
                    {item.genres.map((item, i) => (
                      <span key={i}>{item.title} |</span>
                    ))}
                  </div>
                </h4>
              </div>
            </div>
            <p className="text-sm tracking-wide text-gray-400 leading-[1.8rem] line-clamp-3">
              {item.description}
            </p>
            <button className="bannerBtn anim">
              <Link
                href={`/post/${item.slug.current}`}
                className="flex items-center space-x-2"
              >
                <BsFillPlayFill className="text-xl" />
                <span>Watch Now</span>
              </Link>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
