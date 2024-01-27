import Heading from "@/elements/Heading";
import React, { useState, useEffect } from "react";
import trendingNews from "@/json/highlightTrendingNews.json";
import Image from "next/image";
import melodyapi from "@/apis/_axios";
import { GetLatestArticlesAPI } from "@/apis/_list";
import { timeAgo } from "@/utils/dateformatter";
import { reDirectToRead } from "@/utils/reDirectToRead";

const Popular_cover = () => {
  const [articles, setArticles] = useState([]);

  const getLatestArticle = async () => {
    const response = await melodyapi.get(GetLatestArticlesAPI);
    setArticles(response?.data?.data);
  };

  useEffect(() => {
    getLatestArticle();
  }, []);
  return (
    <div className="w-full rounded-lg bg-secondary p-5">
      <Heading label={"Latest Article"} htype={2} custcss="mb-4" />
      <div className="w-full">
        {articles?.map((news, idx) => {
          if (idx < 6) {
            return (
              <div
                key={idx}
                className="w-full p-2 hover:bg-primary rounded-lg cursor-pointer mb-2 flex justify-start items-center gap-4"
                title={news?.title}
                onClick={() => reDirectToRead(news?._id,news?.category)}
              >
                <Image
                  src={news?.thumbnail}
                  alt={news?.title}
                  width={500}
                  height={500}
                  className="relative w-[60px] h-[60px] rounded-lg object-cover overflow-hidden"
                />
                <div className="flex-[1] relative">
                  <article className="text-[12px] font-semibold text-primary">
                    {news?.title?.length > 50
                      ? `${news?.title?.slice(0, 50)}...`
                      : news?.title}
                  </article>
                  <article className="text-[10px] text-secondary">
                    {timeAgo(news?.createdAt)}
                  </article>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Popular_cover;
