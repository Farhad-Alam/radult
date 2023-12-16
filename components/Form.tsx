"use client";

import { useState } from "react";
import { client } from "../sanity";

const Form = ({ id }: any) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await client.create({
      _type: "comment",
      name: "RTALLY SOLDIERS",
      comment,
      movie: {
        _type: "reference",
        _ref: id,
      },
    });

    alert(
      `You comment ${comment} added Succesfully,Refresh the page to see ur comment`
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <textarea
          name="comment"
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter ur Comment.."
          className="outline-none bg-[rgba(0,0,0,0.8)] w-full h-[15rem] p-4 placeholder:text-sm placeholder:tracking-wide"
        ></textarea>
        <button
          type="submit"
          disabled={!comment}
          className="bg-white disabled:cursor-not-allowed hover:bg-black text-black hover:text-white duration-300 px-4 py-2 tracking-wider font-semibold rounded-md anim"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
