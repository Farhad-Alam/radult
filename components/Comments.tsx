import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Comments } from "../types";
import Form from "./Form";

interface Props {
  id: any;
  comments: Comments[];
}

const Comments = ({ id, comments }: Props) => {
  return (
    <section className="space-y-10">
      <h1 className="uppercase text-2xl tracking-wide">Comment Here</h1>
      <Form id={id}/>
      {/* Note */}
      <div>
        <p className="text-xs space-x-2">
          <span className="font-semibold"> Note :</span>
          <span className="text-red-500 tracking-wide">
            If you want any new or old Movies, Aniemes or Dramas. You can
            comment down below. We will publish it within 24 hours
          </span>
        </p>
      </div>

      {/* All Comments */}

      <section className=" bg-gray-300 text-black w-full px-2 py-6 sm:p-4 space-y-8 h-[20rem] overflow-y-scroll scrollbar-hide">
        {/* Img */}
        {comments.length === 0 ? (
          <div>
            <h1 className="text-2xl tracking-wide">No Comments Yet!!</h1>
          </div>
        ) : (
          comments.map((item) => (
            <div className="grid grid-cols-5 sm:grid-cols-12">
              <div className="relative w-14 h-14 border border-black rounded-full">
                <Image
                  src={"/comment.avif"}
                  className=" rounded-full p-1 anim object-cover"
                  alt="img"
                  fill
                />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center text-sm col-span-4 sm:col-span-11 space-y-1 text-left">
                <h1 className="font-semibold">{item.name}</h1>
                <p className="text-xs tracking-wide">{item.comment}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </section>
  );
};

export default Comments;
