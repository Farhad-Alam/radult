"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

const Player = ({
  frameLink,
  drama,
  dstrm,
  fileMoon,
  strmsb,
  gdriveLink,
}: any) => {
  const [show, setShow] = useState(false);
  const [clickLink, setClickLink] = useState(dstrm || strmsb || fileMoon);

  return (
    <section>
      <main className="relative my-10">
        {clickLink && (
          <iframe
            src={clickLink}
            className="aspect-video w-full h-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        {frameLink && (
          <iframe
            src={frameLink}
            className="aspect-video w-full h-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        {/* Gdrive Link  */}
        {gdriveLink && (
          <div>
            <Link target="_blank" href={gdriveLink}>
              <button className="anim bg-red-500 text-white text-xs sm:text-sm px-2 py-1 tracking-wide font-semibold rounded-sm ml-auto block mt-4">
                Fast Download (G-Drive)
              </button>
            </Link>
          </div>
        )}

        <div className="my-5 sm:mt-8 text-[.7rem] sm:text-xs leading-[2rem] text-red-500">
          {/* Note */}

          <p className="text-center italic">
            Note :- আমাদের ওয়েবসাইটে মুভি কিংবা সিরিজ অনলাইনে দেখা কিংবা
            ডাউনলোড করার জন্য,,অবশ্যই Chrome/Uc Browser ব্যবহার করুন..অন্যথায়
            ADS এর জন্য সমস্যায় পড়তে হবে..
          </p>
        </div>
        {/* Other Server */}
        {!drama && (
          <div className="absolute top-0 right-4">
            {dstrm || strmsb || fileMoon ? (
              <button
                onClick={() => setShow(!show)}
                className="text-2xl anim absolute top-4 right-0"
              >
                {!show ? <RiMenu3Fill /> : <IoMdClose />}
              </button>
            ) : null}

            <div
              className={`flex flex-col items-end justify-end space-y-4 mt-14 w-0 overflow-hidden duration-300 ${
                show && "w-[10rem] overflow-visible"
              }`}
            >
              {fileMoon && (
                <button
                  onClick={() => setClickLink(fileMoon)}
                  className={`${
                    clickLink === fileMoon && "bg-black"
                  } anim border rounded-lg border-gray-300 px-4 py-2 w-full text-sm tracking-wide`}
                >
                  FileLion
                </button>
              )}
              {strmsb && (
                <button
                  onClick={() => setClickLink(strmsb)}
                  className={`${
                    clickLink === strmsb && "bg-black"
                  } anim border rounded-lg border-gray-300 px-4 py-2 w-full text-sm tracking-wide`}
                >
                  StreamSB
                </button>
              )}
              {dstrm && (
                <button
                  onClick={() => setClickLink(dstrm)}
                  className={`${
                    clickLink === dstrm && "bg-black"
                  } anim border rounded-lg border-gray-300 px-4 py-2 w-full text-sm tracking-wide`}
                >
                  Filemoon
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default Player;
