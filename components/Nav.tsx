"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "../data";
import Search from "./Search";

const Nav = ({ moviePage }: any) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div
        className={`${
          !moviePage && "absolute"
        } top-0 left-0 right-0 max-w-[90rem] mx-auto p-2 py-4 md:p-4 flex items-center justify-between z-[69]`}
      >
        {/* Left */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="anim">
            <Link href="/">
              <h1 className="text-2xl md:text-[1.7rem] bg-red-500 px-3 py-1 rounded-sm uppercase font-semibold shadow-lg">
                RADULT
              </h1>
            </Link>
          </div>
          {/* Links */}
          {/* <div>
            <ul className="hidden md:flex items-center space-x-8 z-[9999]">
              {navLinks.map((items, i) => (
                <div key={i}>
                  <li className="relative group py-4 cursor-pointer hover:text-red-500 duration-300">
                    <Link href={items.error ? "" : items.link}>
                      {items.title}
                    </Link>
                    <ul className="z-[9999] absolute top-14 -left-6 bg-[rgba(0,0,0,0.5)] rounded-md text-white overflow-auto scrollbar-hide group-hover:w-72 w-0 duration-500 grid grid-cols-3">
                      {items.subLink?.map((item, i) => (
                        <li
                          key={i}
                          className="hover:bg-[rgba(0,0,0,0.8)] py-3 px-6 text-sm anim"
                        >
                          <Link href={`${items.link}/${item.name}`}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </div>
              ))}
            </ul>
          </div> */}
        </div>
        {/* Right */}
        <div className="hidden md:block">
          {/* SEarch */}
          <Search />
        </div>
        {/* Menu */}
        <div className="block md:hidden" onClick={(e) => setShow(true)}>
          <button className="text-3xl text-red-500 anim">
            <HiMenuAlt2 />
          </button>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={
          show
            ? "fixed top-0 w-[90%] h-screen bg-[rgba(0,0,0,0.8)] duration-300 z-[69] translate-x-0"
            : "fixed top-0 w-[90%] h-screen bg-[rgba(0,0,0,0.8)] duration-300 z-[69] translate-x-[-100%]"
        }
      >
        <div className="text-center mt-8">
          <Link href="/">
            <span className="text-2xl md:text-[1.7rem] bg-red-500 px-2 py-1 rounded-sm uppercase font-semibold shadow-lg">
              RTally
            </span>
          </Link>
        </div>
        <div className="mt-8 w-[80%] mx-auto">
          <Search />
        </div>
        {/* Links */}
        <div className="mt-4 ml-10">
          {/* <ul className="flex flex-col ">
            {navLinks.map((items, i) => (
              <div key={i}>
                <li className="relative group py-4 cursor-pointer hover:text-red-500 duration-300">
                  <Link href={items.error ? "" : items.link}>
                    {items.title}
                  </Link>
                  <ul className="absolute top-14 -left-6 bg-black z-[999] rounded-md text-white overflow-auto scrollbar-hide group-hover:w-72 w-0 duration-500 grid grid-cols-3">
                    {items.subLink?.map((item, i) => (
                      <li
                        key={i}
                        className="hover:bg-[rgba(0,0,0,0.7)] py-3 px-6 text-xs anim"
                      >
                        <Link href={`${items.link}/${item.name}`}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </div>
            ))}
          </ul> */}
          {/* Copyright */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between text-xs p-4 text-gray-400">
            <p>©Copyright by RTALLY</p>
            <p>Creator Code : FarhanJum</p>
          </div>
        </div>
        {/* Close Btn */}
        <div className="absolute top-4 right-4" onClick={(e) => setShow(false)}>
          <button className="text-3xl text-red-500 anim">
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
