import Link from "next/link";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SocialData } from "../data";
import Image from "next/image";

const Social = () => {
  return (
    <div className="text-center mt-10 space-y-4">
      <div className="flex justify-center items-center space-x-2 sm:space-x-4 mx-auto">
        <div className="w-fit rounded-full text-red-500 anim">
          <div className="space-y-4">
            <h4 className="text-md md:text-xl uppercase">
              2 ways to Download from our Website ??
            </h4>
            <h4 className="text-xs uppercase animate-bounce font-semibold">
              আমাদের ওয়েবসাইট থেকে ডাউনলোড করার 2টি উপায় ??
            </h4>
          </div>
        </div>
      </div>
      <hr className="w-14 h-1 mx-auto border-red-400" />

      {/* Link */}
      <div className="flex justify-center items-center space-x-4">
        <Link
          href={"https://www.facebook.com/reel/990927982359074"}
          target="_blank"
        >
          <div className="flex justify-center items-center space-x-2 bg-gray-800 py-2 px-4 anim hover:opacity-80 rounded-md">
            <Image
              src={"/filemoon.jpg"}
              width={20}
              height={20}
              alt="filemoon_rtally"
            />
            <p>FileMoon</p>
          </div>
        </Link>
        <Link
          href={"https://www.facebook.com/reel/277615928298725"}
          target="_blank"
        >
          <div className="flex justify-center items-center space-x-2 bg-yellow-400 text-gray-800 py-2 px-4 anim hover:opacity-80 rounded-md">
            <Image
              src={"/filelion.png"}
              width={20}
              height={20}
              alt="filelion_rtally"
            />
            <p>FileLion</p>
          </div>
        </Link>
      </div>

      <div className="space-y-4">
        {/* News Ticker */}
        {/* <h1 className="bg-red-500 uppercase text-lg w-fit mx-auto px-2">
          Rtally_News
        </h1> */}
        <div className="vwrap text-gray-400 w-fit mx-auto font-semibold grid place-items-center ">
          <div className="vmove">
            <Link
              href="https://www.facebook.com/groups/764017835099056/"
              target="_blank"
              className="vitem text-red-500"
            >
              আমাদের ফেসবুক গ্রুপে জয়েন করুন
            </Link>

            {SocialData.map((item) => (
              <div className="vitem">
                <Link
                  href="https://www.facebook.com/groups/764017835099056/"
                  target="_blank"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* <h1 className="text-red-500 font-semibold tracking-wider text-sm">Join Now</h1> */}
        <AiOutlineArrowDown className="text-xl mx-auto text-red-500" />
        <hr className="w-14 mx-auto border-red-400" />

        <div className="flex justify-center items-center space-x-2 sm:space-x-4 mx-auto">
          <div className="border border-red-400 w-fit rounded-full">
            <Link
              target="_blank"
              href="https://www.facebook.com/groups/764017835099056/"
            >
              <BsFacebook className="bg-red-500 text-3xl rounded-full p-[2px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
