import Link from "next/link";
import React from "react";

const FriendlyWeb = () => {
  return (
    <div className="mt-5">
      <h4 className="text-xl tracking-[.2rem] uppercase text-center">
        Friendly Website
      </h4>
      <div className="anim w-fit mt-5 mx-auto">
        <Link href="https://atally.vercel.app/" target="_blank">
          <h1 className="text-2xl md:text-[1.7rem] bg-red-500 px-3 py-1 rounded-sm uppercase font-semibold shadow-lg">
            ATally
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default FriendlyWeb;



