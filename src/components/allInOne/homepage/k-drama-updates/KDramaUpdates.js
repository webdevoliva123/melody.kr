import Button from "@/elements/Button";
import React from "react";
import kUpdates from "@/json/kDramaUpdatesNews.json";
import Image from "next/image";
import Heading from "@/elements/Heading";
import MelodyLink from "@/elements/MelodyLink";

const KDramaUpdates = () => {
  return (
    <div className="relative w-full">
      {/* headers */}
      <div className="flex justify-between items-center w-full mb-5">
        {/* left Heading */}
        <Heading label={'Latest K-Drama Updates'} htype={1} />
        {/* options */}
        <div className="flex justify-end items-end gap-2">
          <Button label={"Recent"} btnType={1} />
          <Button label={"Popular"} btnType={2} />
        </div>
      </div>
      {/* section */}
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="relative w-full h-[60vh]  rounded-xl z-[0] overflow-hidden card_container">
          {/* bgimage */}
          <Image
            src={kUpdates[0].thumbnail}
            alt={kUpdates[0].title}
            width={500}
            height={500}
            className="card_image relative w-full h-full object-cover "
          />
          {/* bg-layer */}
          <div className="absolute top-0 left-0 w-full h-full bg-layer z-[1]"></div>
          {/* content */}
          <div className="absolute top-0 left-0 w-full h-full z-[2] p-5 flex justify-start items-end">
            <div className="relative">
              <article className="text-white cursor-pointer text-[10px] uppercase mb-2 opacity-[0.9]">
                K-Drama Updates
              </article>
              <article
                className="text-white text-xl font-bold mb-3 cursor-pointer hover:underline "
                title={kUpdates[0]?.title}
              >
                {kUpdates[0]?.title?.length > 80
                  ? `${kUpdates[0]?.title?.slice(0, 80)}...`
                  : kUpdates[0]?.title}
              </article>
              <article className="text-xs text-dark cursor-pointer">
                <span>Publish By {kUpdates[0]?.publisher}</span> .{" "}
                <span>{kUpdates[0]?.publish_At}</span>
              </article>
            </div>
          </div>
        </div>
        <div className="w-full  lg:h-[60vh] h-[80vh] bg-secondary rounded-lg relative p-5">
          {/* go to page */}
          <div className="absolute top-4 right-4 z-[1]">
            <MelodyLink LType={2} />
          </div>
          {/* list all */}
          <div className="relative w-full h-full grid grid-cols-1 grid-rows-4 gap-2">
            {kUpdates?.map((update, idx) => {
              if (idx > 0 && idx <= 4) {
                return (
                  <div key={idx} className="w-full h-full flex justify-start items-center ">
                    {/* image */}
                    <div className="h-[90px] w-[90px] mr-3">
                      <Image
                        src={update?.thumbnail}
                        alt={update?.tile}
                        width={500}
                        height={500}
                        className="relative w-full h-full object-cover rounded-full"
                      />
                    </div>
                    {/* content */}
                    <div className="flex-1 w-full">
                      <article className="text-xs text-secondary cursor-pointer mb-1">
                        <span>{update?.publisher}</span> .{" "}
                        <span>{update?.publish_At}</span>
                      </article>
                      <article
                        className="text-primary lg:text-base text-sm font-bold mb-3 cursor-pointer hover:underline "
                        title={update.title}
                      >
                        {update.title?.length > 50
                          ? `${update.title?.slice(0, 50)}...`
                          : update.title}
                      </article>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KDramaUpdates;
