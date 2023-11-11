"use client";
import React from "react";
import blogs from "@/json/highlightMostViewBlog.json";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { ratingBgProvider } from "@/constant/ratings";
const HighlightMostView = () => {
  return (
    <div className="p-5 rounded-lg bg-secondary ">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
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
            slidesPerView: 3,
            spaceBetween: 6,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {blogs?.map((blog) => {
          return (
            <SwiperSlide className="w-full !flex justify-start items-center gap-4">
              {/* images */}
              <div className="relative rounded-full w-[80px] h-[80px]">
                {blog?.rating && 
                <div className={` lg:flex hidden absolute -left-[10px] w-[40px] h-[25px]  justify-center items-center rounded-lg ${ratingBgProvider(blog?.rating)}`}>
                    <span className="text-xs text-white">{blog?.rating}</span>
                </div>
                } 
                <Image
                  src={blog?.image}
                  alt={blog?.title}
                  width={500}
                  height={500}
                  className="reltaive w-full h-full object-cover rounded-full"
                />
              </div>
              {/* context  */}
              <div className="flex-1">
              
                <article
                  className="cursor-pointer text-[.82em] font-[600] text-primary hover:underline hover:ease-linear hover:duration-300 "
                  title={blog?.title}
                >
                  {blog?.title.length > 45
                    ? `${blog?.title?.slice(0, 45)}...`
                    : blog?.title}
                </article>
                <span className="text-[10px] font-[500] uppercase text-secondary">
                  {blog?.views} Views . {blog?.rating && `${blog?.rating} Rating . `} {blog?.created_At} 
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HighlightMostView;
