"use client";

import React from "react";

const Ads = ({ single }: any) => {
  return (
    <section
      className={`max-w-[90rem] mx-auto ${
        single && "p-0 md:p-0"
      } p-2 md:p-4 mt-5 sm:mt-3 space-y-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center overflow-hidden`}
    >
      {/* <div>
        <iframe
          data-aa="2256524"
          src="//ad.a-ads.com/2256524?size=300x250"
          className="w-[300px] h-[250px] border-0 p-0 overflow-hidden bg-transparent"
        ></iframe>
      </div> */}
      <div className="w-auto md:max-w-[750px] h-[6.5rem] mx-auto border border-white rounded-sm p-1 overflow-hidden">
        <iframe
          data-aa="2286561"
          src="//ad.a-ads.com/2286561?size=728x90"
          className="w-[728px] h-[90px] border-0 p-0 overflow-hidden bg-transparent"
        ></iframe>
      </div>
      {/* <div>
        <iframe
          data-aa="2256524"
          src="//ad.a-ads.com/2256524?size=300x250"
          className="w-[300px] h-[250px] border-0 p-0 overflow-hidden bg-transparent"
        ></iframe>
      </div> */}

      {/* </div> */}
      {/* </Link> */}

      {/* <div className="border border-dotted">
        <div id="container-61b9a08f8f37dea611c24336bd6b49fc"></div>
      </div> */}
    </section>
  );
};

export default Ads;
