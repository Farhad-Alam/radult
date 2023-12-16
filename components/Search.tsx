"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const Search = ({ nav }: any) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!searchValue) {
      alert("Please enter something");
    } else {
      router.push(`/search/${searchValue}`);
      setSearchValue("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-4 border border-red-500 border-opacity-80 rounded-md px-2"
      >
        <input
          type="text"
          placeholder="Search here..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.replace(/\s+/g, "-"))}
          className={`italic outline-none placeholder:tracking-wide tracking-wide bg-transparent py-2 px-2 w-[10rem] lg:w-[12rem] flex-1 ${
            !nav && "md:focus:w-[15rem]"
          } duration-300`}
        />
        <button type="submit">
          <IoMdSearch className="text-xl anim" />
        </button>
      </form>
    </>
  );
};

export default Search;
