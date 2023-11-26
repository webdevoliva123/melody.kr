import Heading from "@/elements/Heading";
import MelodyLink from "@/elements/MelodyLink";
import React from "react";
import pnews from "@/json/pickedOneNews.json";
import Image from "next/image";
const NPicked = () => {
  return (
    <div className="relative  p-5 bg-secondary rounded-lg">
      <div className="w-full flex justify-between items-center mb-6">
        <Heading label={"Picked One"} />
        <MelodyLink label="View More" />
      </div>
      <div className="w-full">
        {pnews?.map((news, idx) => {
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
                <article className="text-sm text-primary font-semibold mb-2" title={news?.title}>
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
