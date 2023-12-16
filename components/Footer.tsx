import Link from "next/link";


const Footer = () => {
  return (
    <div className="bg-black pt-20">
      <div className="grid sm:grid-cols-4 max-w-[90rem] mx-auto p-2 md:px-4 gap-10 py-10">
        {/* Left */}
        <div className="space-y-5 sm:col-span-2">
          <div className="inline text-2xl sm:text-3xl font-bold uppercase bg-red-500 -fit p-1 rounded-sm ">
            <Link href="/">RADULT</Link>
          </div>
          <p className="text-gray-500 text-sm tracking-wide leading-[1.8rem]">
            Discover the world of entertainment with Rtally – download movies,
            web series, and dramas from all over the world. Watch online or
            download and enjoy anytime. Visit Rtally now!
          </p>
          <p className="text-xs text-gray-400 leading-[1.4rem]">
            <span className="font-semibold tracking-wider text-white">
              Disclaimer:
            </span>{" "}
            We do not host any files on our server. Instead, we provide links to
            media that is hosted on third-party services.
          </p>
        </div>
        {/* Right */}
        {/* <div className="space-y-4">
          {navLinks.map((item, i) => (
            <div key={i}>
              <Link
                className="text-gray-300 hover:text-red-500 duration-300 ease-out flex items-center space-x-2"
                href={item.error ? "" : item.link}
              >
               
                <span>{item.title}</span>
              </Link>
            </div>
          ))}
        </div> */}
        {/* Center */}
        <div className="space-y-4 ml-auto">
          <Link
            rel="noreferrer"
            target="_blank"
            className="anim hover:text-red-500 text-gray-400"
            href={"mailto:rtallyofficial@gmail.com"}
          >
            Contact Us
          </Link>
          <p className="text-sm text-gray-300 tracking-wide">
            rtallyofficial@gmail.com
          </p>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-b border-gray-200">
        <div className="bg-[#0c0c2b] flex items-center justify-between text-xs p-4 text-gray-400 max-w-[90rem] mx-auto tracking-wider">
          <p>Copyright © 2023 Rtally. All Rights Reserved.</p>
          <p>Creator Code : FarhanJum</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
