import MelodyCategores from "@/components/allInOne/homepage/categores/MelodyCategores";
import Article from "@/components/k-news/article.js/Article";
import RelatedArticle from "@/components/k-news/article.js/RelatedArticle";
import Popular_cover from "@/components/k-news/categories/Popular_cover";
import Head from "next/head";
import React from "react";

const Article_Data = () => {
  return (
    <>
      <Head>
        <title>
        BTS J-Hope’s Latest Instagram Update Features “Woori” — Here’s All You Need To Know About The Place | Melody.kr
        </title>
      </Head>
      <div className="w-full grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 gap-5">
        {/* Left Section */}
        <div>
          <Article />
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
    </>
  );
};

export default Article_Data;
