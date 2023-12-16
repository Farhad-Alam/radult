import Card from "../../../../components/Card";
import Nav from "../../../../components/Nav";
import { searchQuery } from "../../../../lib/sanityQuery";
import { client } from "../../../../sanity";
import { Movie } from "../../../../types";

interface Props {
  params: {
    titleId: string;
  };
}

export const generateMetadata = async ({ params: { titleId } }: Props) => {
  return {
    title: titleId,
    description:
      "Discover the world of entertainment with Rtally – download movies, web series, and dramas from all over the world. Watch online or download and enjoy anytime. Visit Rtally now!",
  };
};

const SearchPage = async ({ params: { titleId } }: Props) => {
  const searchData: any = await client.fetch(searchQuery, {
    keyword: titleId,
    key: "Adult 18+"
  });

  return (
    <div className="mb-[10rem]">
      {/* Nav */}
      <Nav moviePage={true} />
      {/* Content */}
      <main className="max-w-[90rem] mx-auto p-2 md:p-4 space-y-10">
        <div>
          <h1 className="text-2xl sm:text-3xl tracking-wide my-10 sm:my-14 bg-red-500 text-gray-800 w-fit px-4 py-1 font-semibold uppercase mx-auto">
            You searched for : <span>{titleId}</span>
          </h1>
        </div>
        {/* Searched Results */}
        <div>
          {searchData.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full mb-8">
              <h1 className="text-2xl sm:text-3xl tracking-wide my-10 sm:my-14 bg-red-500 text-gray-800 w-fit px-4 py-1 font-semibold uppercase mx-auto">
                No results found
              </h1>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4">
              {searchData.map((movie: Movie) => (
                <Card key={movie._id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
