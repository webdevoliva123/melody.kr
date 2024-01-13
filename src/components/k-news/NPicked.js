import Heading from "@/elements/Heading";
import React, { useEffect, useState } from "react";
import pnews from "@/json/pickedOneNews.json";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetPickedOneArticlesAPI } from "@/apis/_list";
import melodyapi from "@/apis/_axios";
import { reDirectToRead } from "@/utils/reDirectToRead";
const NPicked = () => {
  const router = useRouter();
  const [articles, setArticles] = useState([]);

  const getVideosArticles = async () => {
    const response = await melodyapi(GetPickedOneArticlesAPI);
    setArticles(response?.data?.data);
  };

  useEffect(() => {
    getVideosArticles();
  },[router]);

  return (
    <div className="relative  p-5 bg-secondary rounded-lg">
      <div className="w-full flex justify-between items-center mb-6">
        <Heading label={"Picked One"} />
      </div>
      <div className="w-full">
        {articles?.map((news, idx) => {
          return (
            <div key={idx} className="flex gap-5 relative mb-5 cursor-pointer">
              {/* thumbnail */}
              <div className="w-[80px] h-[80px] rounded-lg overflow-hidden">
                <Image
                  src={news?.thumbnail}
                  alt={news?.title}
                  width={500}
                  height={500}
                  className="relative w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-[1] flex-col justify-center items-start">
                <article
                  className="text-sm text-primary font-semibold mb-2 hover:underline"
                  title={news?.title}
                  onClick={() => reDirectToRead(news?._id, news?.category)}
                >
                  {news?.title?.length > 50
                    ? `${news?.title?.slice(0, 50)}...`
                    : news?.title}
                </article>
                <article className="text-xs text-secondary">
                  {news?.category}
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NPicked;
