import React from "react";
import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import Social from "../../components/Social";
import { bannerQuery } from "../../lib/sanityQuery";
import { client } from "../../sanity";
import Ads from "../../components/Ads";
import Adult from "../../components/Adult";
// import Categories from "../../components/Categories";

const HomePage = async () => {
  const bannerData: any = await client.fetch(bannerQuery, {
    keyword: "Adult 18+",
  });

  return (
    <div>
      <div className="relative overflow-hidden">
        <Nav />
        <Banner bannerData={bannerData} />
      </div>

      <main className="max-w-[90rem] mx-auto">
        <div className="block sm:hidden w-[90%] mt-5 mx-auto">
          <Search />
        </div>
        <Social />

        <Ads />

        <Adult />
      </main>
    </div>
  );
};

export default HomePage;
