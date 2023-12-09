import Button from "@/elements/Button";
import Heading from "@/elements/Heading";
import React, { useEffect, useState } from "react";
import spotligthNews from "@/json/spotlightNews.json";
import Image from "next/image";

const NSpotlight = () => {
  const [sort, setSort] = useState("recent");
  const [snews, setSnews] = useState([]);
  useEffect(() => {
    setSnews(spotligthNews);
  }, []);

  return (
    <div>
      {/* heading */}
      <div className="w-full flex justify-between items-center mb-4">
        <Heading label={`Today's Spotlight`} />
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
            src={snews[0]?.thumbnail}
            alt={snews[0]?.title}
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
                {snews[0]?.category}
              </article>
              <article
                className="text-white  text-[20px]  font-semibold mb-3 hover:underline cursor-pointer"
                title={snews[0]?.title}
              >
                {snews[0]?.title?.length > 60
                  ? `${snews[0]?.title?.slice(0, 60)}...`
                  : snews[0]?.title}
              </article>
              <article className="text-xs text-dark cursor-pointer">
                <span>{snews[0]?.created_At}</span>
              </article>
            </div>
          </div>
        </div>
        <div className="bg-secondary lg:flex-[0.3] md:flex-[0.4] flex-[1] w-full h-full rounded-lg overflow-hidden border-[1px] border-white border-opacity-[0.1] p-5 grid grid-cols-1 grid-rows-4">
          {snews?.map((news, idx) => {
            if (idx !== 0) {
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
