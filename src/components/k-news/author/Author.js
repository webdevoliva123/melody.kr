import Heading from "@/elements/Heading";
import Image from "next/image";
import React from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import news_video from "@/json/news/category/video.json";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

const Author = () => {
  return (
    <div className="relative w-full">
      <div className="w-full bg-secondary p-5 mb-6 rounded-lg">
        <div className="flex justify-start items-center mb-2">
          <div className="w-20 h-20 rounded-full overflow-hidden mr-4  ">
            <Image
              src={`https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703349257/ePe9mnFJAEpxhreJCg0J7ufusi40QtMmlM4_fvdIUxYxk6TU8ZzVLShN2FGpG1iR8bdidpk2jS0WHGWH0kM37bmkIZXECPRdY3tEN0gcPlm9F_yR_w192-h192-pp-rj-e365_rxompr.jpg`}
              alt="Eunna Lee"
              width={500}
              height={500}
              className="relative w-full h-full object-cover "
            />
          </div>
          <div>
            <article className="text-primary text-[18px] font-semibold cursor-pointer hover:text-accent ">
              Serah S. Cherrie
            </article>
            <article className="text-secondary text-sm font-light  ">
              serah.s.cherrie​@melodykr.com
            </article>
          </div>
          <div className="mx-6 h-[30px] border-r border-primary w-[1px]"></div>
          <div className="flex justify-start items-center gap-2">
            <FaXTwitter
              size={15}
              className="text-primary cursor-pointer hover:text-accent"
            />
            <FaLinkedin
              size={15}
              className="text-primary cursor-pointer hover:text-accent"
            />
            <FaInstagram
              size={15}
              className="text-primary cursor-pointer hover:text-accent"
            />
          </div>
        </div>
        <article className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iure
          ratione asperiores debitis quaerat adipisci ad beatae ipsam unde sit
          optio quidem eius et, cumque ex omnis, hic sunt? Minima. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Aliquam, repellendus?
          Suscipit reiciendis quis quo ab fugit.
        </article>
      </div>
      <div className="w-full bg-secondary p-5 mb-6 rounded-lg">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
          {news_video?.map((news, idx) => {
            return (
              <div className="w-full h-[550px]">
                {/* image */}
                <Image
                  src={news?.thumbnail}
                  alt={news?.title}
                  width={500}
                  height={500}
                  className="relative w-full h-[250px] rounded-lg object-cover overflow-hidden mb-2"
                />

                {/* article publicer content */}
                <div className="flex justify-start items-center my-5">
                  {/* image */}
                  <Image
                    src={news?.publiser?.profile}
                    alt={news?.publiser?.profile}
                    width={500}
                    height={500}
                    className="relative w-[60px] h-[60px] rounded-full overflow-hidden object-cover mr-4"
                  />
                  <div className="relative">
                    <article className="text-[14px] font-semibold text-primary  mb-1">
                      Published by{" "}
                      <span className="text-accent  cursor-pointer">
                        {news?.publiser?.name}
                      </span>
                    </article>
                    <div className="flex justify-start items-center gap-1">
                      <article className="text-[10px]  text-secondary">
                        {news?.publiser?.total_artile}
                      </article>
                      <GoDotFill size={5} className="text-secondary" />
                      <article className="text-[10px]  text-secondary">
                        {news?.publiser?.daily_views} Daily
                      </article>
                    </div>
                  </div>
                </div>
                <div className="w-full relative">
                  <article className="mb-2 text-[10px] font-semibold text-primary opacity-[0.5]">
                    {news?.created_At}
                  </article>
                  <Heading
                    label={news?.category}
                    htype={2}
                    custcss="!text-primary mb-2 !text-[14px]"
                  />
                  <Link href={`/news/article/${news?.id}`}>
                    <article className="text-[20px] font-semibold text-primary  mb-2 hover:underline cursor-pointer">
                      {news?.title?.length > 70
                        ? `${news?.title?.slice(0, 70)}...`
                        : news?.title}
                    </article>
                  </Link>
                  <article className="text-[14px] text-secondary  mb-2">
                    {news?.summary?.length > 150
                      ? `${news?.summary?.slice(0, 150)}...`
                      : news?.summary}{" "}
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Author;
