"use client";

import Link from "next/link";
import { useState } from "react";
import { TbDownload } from "react-icons/tb";
import { DramasLink } from "../types";
import Player from "./Player";

interface Props {
  dramaTitle: string;
  zipFile: string;
  dramaLang: any;
  dramasData: DramasLink[];
}

const OtherEpisodes = ({
  dramasData,
  dramaTitle,
  dramaLang,
  zipFile,
}: Props) => {
  const [frameLink, setFrameLink] = useState(dramasData[0]?.watchLink);

  const handleVideo = (watchLink: any) => {
    setFrameLink(watchLink);
  };
  return (
    <section className="space-y-8 my-10">
      {/* Player */}
      <Player frameLink={frameLink} drama={true} />
      {/* ZipFile Link  */}
      {zipFile && (
        <div>
          <Link target="_blank" href={zipFile}>
            <button className="anim bg-red-500 text-white text-xs sm:text-sm px-2 py-1 tracking-wide font-semibold rounded-sm ml-auto block mt-4">
              Zip File(G-Drive)
            </button>
          </Link>
        </div>
      )}

      <h1 className="bg-red-500 text-gray-200 w-fit px-4 py-1 capitalize space-x-2 text-xs sm:text-sm lg:text-base">
        <span className="text-white font-semibold">{dramaTitle}</span>
        <span> All Episodes</span>
      </h1>
      <main>
        {dramasData.map((item: DramasLink) => (
          <div
            key={item._id}
            onClick={() => handleVideo(item.watchLink)}
            className={`${
              frameLink === item.watchLink && "bg-[rgba(0,0,0,0.6)]"
            } space-x-2 px-2 flex justify-between items-center text-xs md:text-base capitalize border-b py-3 mb-2 hover:bg-[rgba(0,0,0,0.6)] duration-300 cursor-pointer hover:opacity-80`}
          >
            {/* Left */}
            <div className="flex items-center space-x-4 ">
              <h5 className="bg-red-500 text-xs p-1 sm:px-4 tracking-wide font-semibold uppercase">
                {!item?.watchLink && !item?.downloadLink
                  ? "Note ::"
                  : dramaLang}
              </h5>
              {/* Ukk */}
              <h2
                className={
                  !item?.watchLink && !item?.downloadLink
                    ? "line-clamp-1 text-red-500"
                    : "line-clamp-1 text-white"
                }
              >
                {item?.title}
              </h2>
            </div>
            {/* Right */}
            <div
              className={`grid place-items-center text-white anim bg-red-500 text-xs sm:text-sm px-2 py-1 tracking-wide font-semibold rounded-sm ${
                !item?.watchLink && !item?.downloadLink
                  ? "border-none"
                  : "border-2"
              } border-red-400 p-1 rounded-full anim`}
            >
              {item?.downloadLink ? (
                <Link
                  target={"_blank"}
                  href={item?.downloadLink ? item?.downloadLink : ""}
                >
                  {item?.downloadLink && "Download"}
                </Link>
              ) : (
                <Link
                  target={"_blank"}
                  href={
                    item?.watchLink
                      ? item?.watchLink?.replace("/e/", "/d/")
                      : ""
                  }
                >
                  {item?.watchLink && <TbDownload className="p-[1px]" />}
                </Link>
              )}
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default OtherEpisodes;
