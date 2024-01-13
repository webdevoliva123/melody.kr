import Button from "@/elements/Button";
import Heading from "@/elements/Heading";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import melodyapi from "@/apis/_axios";
import { GetSpotlightArticlesAPI } from "@/apis/_list";
import { timeAgo } from "@/utils/dateformatter";
import { reDirectToRead } from "@/utils/reDirectToRead";

const NSpotlight = () => {
  const router = useRouter()
  const [sort, setSort] = useState("recent");
  const [articles,setArticles] = useState([])

  const getSpotlight = async (spotlight = 1) => {
    const repsone = await melodyapi.get(GetSpotlightArticlesAPI(spotlight))
    setArticles(repsone?.data?.data)
  }

  useEffect(() => {
    getSpotlight()
  }, [router]);

  useEffect(() => {
      if(sort === "recent"){
        getSpotlight(1)
      }else if(sort === "popular"){
        getSpotlight(2)
      }
  },[sort])

  return (
    <div>
      {/* heading */}
      <div className="w-full flex justify-between items-center mb-4">
        <Heading label={`This Week Spotlight`} />
        <div className="flex justify-end items-center gap-2">
          <div onClick={() => setSort("recent")}>
            <Button label={"Recent"} btnType={sort === "recent" ? 1 : 2} />
          </div>
          <div onClick={() => setSort("popular")}>
            <Button label={"Popular"} btnType={sort === "popular" ? 1 : 2} />
          </div>
        </div>
      </div>
      {/* section */}
      <div className="w-full md:h-[55vh] h-auto flex md:flex-row flex-col justify-center items-center gap-5 card_container">
        {/* main div */}
        <div className=" relative lg:flex-[0.7] md:flex-[0.6] flex-[1] w-full h-full rounded-lg overflow-hidden">
          <Image
            src={articles[0]?.thumbnail}
            alt={articles[0]?.title}
            width={500}
            height={500}
            className="relative w-full h-full object-cover card_image"
          />
          {/* layer */}
          <div className="w-full h-full absolute top-0 left-0 bg-layer bg-opacity-[0.6] z-[1]"></div>
          {/* info */}
          <div className="absolute bottom-0 left-0 w-full  p-5 flex justify-start items-end z-[2] mb-5 card_content">
            {/* div */}
            <div>
              <article className="text-white text-xs cursor-pointer uppercase mb-2 opacity-[0.9]">
                {articles[0]?.category}
              </article>
              <article
                className="text-white  text-[20px]  font-semibold mb-3 hover:underline cursor-pointer"
                title={articles[0]?.title}
                onClick={() => reDirectToRead(articles[0]?._id,articles[0]?.category)}
              >
                {articles[0]?.title?.length > 60
                  ? `${articles[0]?.title?.slice(0, 60)}...`
                  : articles[0]?.title}
              </article>
              <article className="text-xs text-dark cursor-pointer">
                <span>{timeAgo(articles[0]?.createdAt)}</span>
              </article>
            </div>
          </div>
        </div>
        <div className="bg-secondary lg:flex-[0.3] md:flex-[0.4] flex-[1] w-full h-full rounded-lg overflow-hidden border-[1px] border-white border-opacity-[0.1] p-5 grid grid-cols-1 grid-rows-4">
          {articles?.map((news, idx) => {
            if (idx !== 0 && idx <= 4) {
              return (
                <div
                  key={idx}
                  className={`w-full h-full flex justify-start items-end ${
                    idx !== 4 && "border-b-[1px] border-white border-opacity-[0.1] "
                  } `}
                >
                 <div>
                 <article className="text-accent text-[10px] cursor-pointer uppercase mb-2 opacity-[0.9]">
                {news?.category}
              </article>
                 <article
                    className="text-primary  text-[14px]  font-semibold mb-3 hover:underline cursor-pointer"
                    title={news?.title}
                    onClick={() => reDirectToRead(news?._id,news?.category)}
                  >
                    {news?.title?.length > 60
                      ? `${news?.title?.slice(0, 60)}...`
                      : news?.title}
                  </article>
                 </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default NSpotlight;
