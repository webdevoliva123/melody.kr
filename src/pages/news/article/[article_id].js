import Article from "@/components/k-news/article.js/Article";
import Popular_cover from "@/components/k-news/categories.js/Popular_cover";
import Head from "next/head";
import React from "react";

const Article_Data = () => {
  return (
    <>
      <Head>
        <title>
          Watch: BTS’s Jungkook Surprises With Emotional Visualizer For “Hate
          You” Ahead Of Enlistment | Melody.kr
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
        </div>
      </div>
    </>
  );
};

export default Article_Data;
