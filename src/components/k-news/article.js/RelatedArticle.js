import Heading from "@/elements/Heading";
import React from "react";
import trendingNews from "@/json/highlightTrendingNews.json";
import Image from "next/image";
import Link from "next/link";
import { timeAgo } from "@/utils/dateformatter";
import { reDirectToRead } from "@/utils/reDirectToRead";

const RelatedArticle = ({data}) => {
  return (
    <div className="p-5 bg-secondary rounded-lg">
      <Heading label={"Related Article"} />
      <div className="mt-5 grid md:grid-cols-3 grid-cols-1 gap-4">
        {data?.map((article, idx) => {
          
            return (
              <div key={idx} className="w-full  card_container">
                <div className="w-full h-[200px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={article?.thumbnail}
                    alt={article?.title}
                    width={500}
                    height={500}
                    className="relative w-full h-full object-cover card_image"
                  />
                </div>
                <article className="text-xs text-secondary mb-2"><span className="uppercase">{article?.category}</span> . {timeAgo(article?.createdAt)}</article>
                <div onClick={() =>  reDirectToRead(article?._id,article?.category)}>
                <article className="text-primary font-semibold cursor-pointer hover:underline">{article?.title?.length > 50 ? `${article?.title?.slice(0,50)}...`:article?.title}</article>
                </div>
              </div>
            );
      
        })}
      </div>
    </div>
  );
};

export default RelatedArticle;
