import MelodyCategores from "@/components/allInOne/homepage/categores/MelodyCategores";
import Author from "@/components/k-news/author/Author";
import Popular_cover from "@/components/k-news/categories/Popular_cover";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <div>
      <Head>
        <title>
          Content Writer Serah S. Cherrie | Melody.kr
        </title>
      </Head>
      <div className="w-full grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 gap-5">
        {/* Left Section */}
        <div>
          <Author />
        </div>
        {/* right section */}
        <div className="w-full">
          <div className="mb-6">
            <Popular_cover />
          </div>
          <div className="my-6">
            <MelodyCategores title={"Explore Other Section"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
