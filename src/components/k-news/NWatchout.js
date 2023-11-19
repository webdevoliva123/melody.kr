import Heading from "@/elements/Heading";
import React from "react";
import watchoutList from "@/json/watchoutTrailerReviews.json";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
const NWatchout = () => {
  return (
    <div className="w-full p-5 rounded-lg bg-secondary">
      <div className="mb-6">
        <Heading label={"Watch Now"} custcss={"!text-2xl"} />
      </div>
      <div className="w-full lg:h-[50vh] h-auto grid lg:grid-cols-3 md:gridcols-2 gap-5">
        {watchoutList?.map((video, idx) => {
          return (
            <div
              key={idx}
              className="relative w-full  rounded-lg watchout_card_container cursor-pointer "
            >
              <div className="relative w-full lg:h-[30vh] md:h-[40vh] rounded-lg overflow-hidden">
                <Image
                  src={video?.thumbnail}
                  alt={video?.title}
                  width={500}
                  height={500}
                  className="relative w-full  object-cover watchout_card_image z-[0]"
                />
                {/* bglayer */}
                <div className="watchout_card_layer absolute top-0 left-0 w-full h-full bg-black bg-opacity-[0.4] z-[2]">
                    <FaPlay size={30} className="text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
                </div>
              </div>
              {/* info */}
              <div className=" w-full py-5 flex justify-start items-end  ">
                {/* div */}
                <div>
                  <article className="text-secondary  text-xs cursor-pointer uppercase mb-2 opacity-[0.9]">
                    {video?.category}
                  </article>
                  <article
                    className="text-primary text-[16px]  font-semibold mb-3 hover:underline cursor-pointer"
                    title={video?.title}
                  >
                    {video?.title?.length > 100
                      ? `${video?.title?.slice(0, 100)}...`
                      : video?.title}
                  </article>
                  <article className="text-xs text-accent cursor-pointer">
                    <span>{video?.created_At}</span>
                  </article>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NWatchout;
