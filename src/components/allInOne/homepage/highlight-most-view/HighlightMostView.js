"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { timeAgo } from "@/utils/dateformatter";
import { reDirectToRead } from "@/utils/reDirectToRead";



const HighlightMostView = ({ loading, data }) => {
  return loading ? (
    <div className="p-5 rounded-lg bg-secondary h-[90px] grid md:grid-cols-4  grid-cols-1 gap-10">
      <div className="md:block hidden w-full h-full bg-primary rounded-lg animate-pulse"></div>
      <div className="md:block hidden w-full h-full bg-primary rounded-lg animate-pulse"></div>
      <div className="md:block hidden w-full h-full bg-primary rounded-lg animate-pulse"></div>
      <div className="md:block hidden w-full h-full bg-primary rounded-lg animate-pulse"></div>
    </div>
  ) : (
    <div className="p-5 rounded-lg bg-secondary ">
      <Swiper
        slidesPerView={3.2}
        spaceBetween={10}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={500}
        loop
        breakpoints={{
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data?.map((blog) => {
          return (
            <SwiperSlide>
              <div
                title={blog?.title}
                className="w-full !flex md:flex-row flex-col justify-start items-center md:gap-4"
              >
                {/* images */}
                <div className="relative rounded-full w-[80px] h-[80px] md:border-none border-2 border-accent md:p-0 p-1 md:md-0 mb-2" onClick={() => reDirectToRead(blog?._id,blog?.category)}>
                  <Image
                    src={blog?.thumbnail}
                    alt={blog?.title}
                    width={500}
                    height={500}
                    className="reltaive w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* context for mobile */}
                <div className="md:hidden block">
                  <article className="text-primary text-xs text-center uppercase">{blog?.category}</article>
                  <article className="text-primary text-xs capitalize text-center">{timeAgo(blog?.createdAt)}</article>
                </div>
                {/* context  */}
                <div className="md:block hidden flex-1 ">
                  <article className="cursor-pointer text-[.82em] font-[600] text-primary hover:underline hover:ease-linear hover:duration-300" onClick={() => reDirectToRead(blog?._id,blog?.category)}>
                    {blog?.title.length > 40
                      ? `${blog?.title?.slice(0, 40)}...`
                      : blog?.title}
                  </article>
                  <span className="text-[10px] font-[500] uppercase text-secondary">
                    {blog?.category} . {timeAgo(blog?.createdAt)}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HighlightMostView;
