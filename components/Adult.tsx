"use client";

import { useEffect, useState } from "react";
import { client } from "../sanity";
import { categoriesQuery } from "../lib/sanityQuery";
import Movie from "./Movie";


const Adult = () => {
  const [data, setData] = useState<any>([]);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(14);

  useEffect(() => {
    try {
      setLoading(true);
      const unSub = async () => {
        const movieData = await client.fetch(categoriesQuery, {
          keyword: "Adult 18+",
          end,
        });
        setLoading(false);
        setTotal(movieData.length);
        setData(movieData);
      };
      unSub();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [end, setEnd]);

  return (
    <div>
      <Movie
        title={"Adult 18+"}
        movieData={data}
        end={end}
        setEnd={setEnd}
        total={total}
        loading={loading}
      />
    </div>
  );
};

export default Adult;
