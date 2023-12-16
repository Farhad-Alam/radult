import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { BsChevronDoubleRight } from "react-icons/bs";
import Card from "../../../../components/Card";
import Details from "../../../../components/Details";
import Nav from "../../../../components/Nav";
import OtherEpisodes from "../../../../components/OtherEpisodes";
import Player from "../../../../components/Player";
import Social from "../../../../components/Social";
import {
  categoriesQuery,
  multipleCategoryQuery,
  similarQuery,
  singleMovieQuery,
} from "../../../../lib/sanityQuery";
import { client, urlFor } from "../../../../sanity";
import { Movie } from "../../../../types";
import SimilarThings from "../../../../components/SimilarThings";
import Ads from "../../../../components/Ads";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 60; //Revalidate the page after 30sec

// Genarate Metadata
export const generateMetadata = async ({ params: { slug } }: Props) => {
  try {
    const singleMovieData: Movie = await client.fetch(singleMovieQuery, {
      slug,
    });

    return {
      title: singleMovieData?.title,
      description: `${singleMovieData?.title} : ${singleMovieData?.description}`,
      keywords: `radult,  radult.vercel.app, badult.vercel.app, radult offcial, free movies online, movies, film, hollywood movie in hindi, dual audio, upcoming movies, free download, latest movies, new movies, 360p | 480p | 720P | 1080P – ${singleMovieData?.title} - Download & Watch Online`,
      alternates: {
        canonical: `/post/${singleMovieData?.slug.current}`,
      },
      twitter: {
        title: singleMovieData?.title,
        description: `${singleMovieData?.title} : ${singleMovieData?.description}`,
        creator: "@Radult_Official",
      },
      openGraph: {
        url: `/post/${singleMovieData?.slug.current}`,
        title: singleMovieData?.title,
        description: `${singleMovieData?.title} : ${singleMovieData?.description}`,
        type: "article",
        locale: "en-US",
        siteName: "Radult",
      },
    };
  } catch (error) {
    return {
      card: "summary_large_image",
      title: "Not Found",
      description: "The page you are looking for doesn't Exist",
    };
  }
};

// Genarate Static Page
export const generateStaticParams = async () => {
  const movieQuery = groq`
  *[_type == "movie" && $keyword in categories[]->title] |  order(_createdAt  desc) | order(released  desc){
    slug
  }`;

  const movieData = await client.fetch(movieQuery, {
    keyword: "Adult 18+",
  });
  const slug = movieData.map((item: any) => item?.slug.current);

  return slug.map((item: any) => ({
    slug: item,
  }));
};

const MoviePage = async ({ params: { slug } }: Props) => {
  const similarData = await client.fetch(categoriesQuery, {
    keyword: "Adult 18+",
    end: 14,
  });

  const singleMovieData: Movie = await client.fetch(singleMovieQuery, { slug });
  const movieData: any = await client.fetch(multipleCategoryQuery, {
    keyword: singleMovieData?.categories?.map((item) => item.title),
  });

  return (
    <div>
      <Nav moviePage={true} />
      <section className="max-w-[90rem] mx-auto p-2 md:p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="tracking-wide flex items-center space-x-2 text-gray-100 text-xs sm:text-sm">
              <BsChevronDoubleRight />
              <span>Movies </span>
              <span className="text-gray-400 line-clamp-1">
                / {singleMovieData?.title}
              </span>
            </h3>
          </div>
          {singleMovieData?.downloadLink && (
            <div>
              <Link target="_blank" href={singleMovieData?.downloadLink}>
                <button className="anim bg-red-500 text-white text-xs sm:text-sm px-2 py-1 tracking-wide font-semibold rounded-sm">
                  Download
                </button>
              </Link>
            </div>
          )}
        </div>

        {singleMovieData?.downloadLink && (
          <Player
            dstrm={singleMovieData?.doodStream}
            fileMoon={singleMovieData?.fileMoon}
            strmsb={singleMovieData?.streamSB}
            gdriveLink={singleMovieData?.gdriveLink}
          />
        )}
        {/* Others Episodes */}
        {singleMovieData?.dramasLink && (
          <OtherEpisodes
            dramaLang={singleMovieData?.language.map((item) => item.title)}
            dramaTitle={singleMovieData?.title}
            dramasData={singleMovieData?.dramasLink}
            zipFile={singleMovieData?.zipFile}
          />
        )}

        {/* Coming Soon */}
        {!singleMovieData?.doodStream &&
        !singleMovieData?.streamSB &&
        !singleMovieData?.fileMoon &&
        singleMovieData?.dramasLink?.length === undefined ? (
          <div className="my-10">
            <div className="space-y-4">
              <h3 className="text-2xl uppercase text-center">
                Coming Soon on &nbsp;
                <span className="text-red-500 font-semibold">
                  {singleMovieData?.released}
                </span>
              </h3>
              <hr className="w-20 mx-auto" />
            </div>
          </div>
        ) : null}
        {/* Important News
        <div className="space-y-4 mb-6">
          <p className="text-red-500 text-xs uppercase tracking-wider">
            Note :: Firstly we are extremely sorry,,For server errors many
            movies and series are not working,,we will try to fix it as soon as
            possible,,Thank YOU..
          </p>
          <p className="text-red-500 text-xs uppercase tracking-wider">
            বিঃদ্রঃ :: প্রথমেই আমরা অত্যন্ত দুঃখিত,,সার্ভার ত্রুটির জন্য অনেক
            সিনেমা এবং সিরিজ কাজ করছে না,,আমরা যত তাড়াতাড়ি সম্ভব এটি ঠিক করার
            চেষ্টা করব,,ধন্যবাদ..
          </p>
        </div> */}
        {/* Similar Things */}
        {/* {similarData.length > 1 && (
          <div>
            <SimilarThings similarData={similarData} />
          </div>
        )} */}
        {/* Social Links */}
        <div className="mb-8">
          <Social />
          {/* <FriendlyWeb /> */}
        </div>

        <Ads single={true} />

        {/* ScreenShot */}
        {singleMovieData?.screenImage && (
          <div>
            <div className="mb-2 space-y-4">
              <h3 className="text-xl tracking-[.4rem] text-center">
                ScreenShot
              </h3>
              <hr className="w-20 mx-auto bg-red-500" />
            </div>

            <div className="relative w-full h-[15rem] md:h-[35rem] lg:h-[50rem] mb-10">
              <Image
                src={urlFor(singleMovieData?.screenImage).url()}
                className="object-contain"
                fill
                alt={`${singleMovieData?.title} | Radult`}
              />
            </div>
          </div>
        )}
        {/* Details */}
        {/* Little Style */}
        <div className="text-center space-y-4">
          <h3 className="text-xl tracking-[.8rem]">Movie Details</h3>
          <hr className="w-40 h-10 mx-auto" />
        </div>
        <main className="grid space-y-20 lg:gap-8 ">
          {/* Left */}
          <Details singleMovieData={singleMovieData} />
          {/* Comment Section */}
          {/* <div>
            <Comments
              id={singleMovieData?._id}
              comments={singleMovieData?.comments}
            />
          </div> */}
          {/* Right // You May Also Like*/}
          <div className="space-y-10 pb-[5rem]">
            <div className="flex justify-between items-center space-y-1">
              <div className="space-y-4">
                <h3 className="text-2xl uppercase text-center">
                  You may also like
                </h3>
                <hr className="w-20 mx-auto" />
              </div>
              {/* Want More */}
              <Link
                href={"/"}
                className="anim duration-75 text-sm border-b  border-l hover:border-r hover:border-t hover:border-l-0 hover:border-b-0 border-red-400 p-2 font-semibold"
              >
                Want More
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-3 gap-y-8">
              {similarData?.map((item: Movie) => (
                <Card key={item._id} movie={item} />
              ))}
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default MoviePage;
