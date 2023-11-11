import React, { useState, useEffect } from "react";
import recentBlog from "@/json/HighlightRecentBlog.json";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const HightlightMainCard = ({ blog, slideIndex }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      }
    }, 50); // 50 milliseconds for a smoother animation

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  useEffect(() => {
    setCount(1);
  }, [slideIndex]);

  return (
    <>
      {/* image */}
      <Image
        src={blog?.thumbnail}
        alt={blog?.title}
        width={500}
        height={500}
        className="card_image relative w-full h-full object-cover"
      />
      {/* layer */}
      <div className="absolute top-0 left-0 bg-layer opacity-[0.9] w-full h-full z-[1]"></div>
      {/* info */}
      <div className="absolute bottom-0 left-0 p-5 flex justify-start items-end z-[2]">
        {/* div */}
        <div>
          <article className="text-white cursor-pointer text-[10px] uppercase mb-2 opacity-[0.9]">
            {blog?.category}
          </article>
          <article
            className="text-white text-sm font-semibold mb-3"
            title={blog?.title}
          >
            {blog?.title?.length > 100
              ? `${blog?.title?.slice(0, 100)}...`
              : blog?.title}
          </article>
          <article className="text-xs text-dark cursor-pointer">
            <span>{blog?.creator}</span> . <span>{`${blog?.view} views`}</span>{" "}
            . <span>{blog?.created_At}</span>
          </article>
          <div className="w-full h-[1px] bg-black relative mt-5">
            <div
              className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-white rounded"
              style={{ width: `${count}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

const HighlightRecentBlog = () => {
  const [slideIndex, setSlideIndex] = useState(null);
  return (
    <>
      {/* for desktop view */}
      <div className="w-full h-[75vh] grid-cols-[28.3%,40%,28.3%] gap-5 lg:grid hidden z-[0]">
        {/* left section */}
        <div className="w-full h-full grid grid-rows-2 gap-5">
          {recentBlog?.map((blog, idx) => {
            if (blog?.id > 2 && blog?.id <= 4) {
              return (
                <div
                  key={idx}
                  className="card_container relative w-full h-full rounded-lg overflow-hidden"
                >
                  {/* image */}
                  <Image
                    src={blog?.thumbnail}
                    alt={blog?.title}
                    width={500}
                    height={500}
                    className="card_image relative w-full h-full object-cover"
                  />
                  {/* layer */}
                  <div className="absolute top-0 left-0 bg-layer opacity-[0.9]  w-full h-full z-[1]"></div>
                  {/* info */}
                  <div className="absolute bottom-0 left-0 p-5 flex justify-start items-end z-[2] card_content">
                    {/* div */}
                    <div>
                      <article className="text-white cursor-pointer text-[10px] uppercase mb-2 opacity-[0.9]">
                        {blog?.category}
                      </article>
                      <article
                        className="text-white text-sm font-semibold mb-3"
                        title={blog?.title}
                      >
                        {blog?.title?.length > 100
                          ? `${blog?.title?.slice(0, 100)}...`
                          : blog?.title}
                      </article>
                      <article className="text-xs text-dark cursor-pointer">
                        <span>{blog?.creator}</span> .{" "}
                        <span>{`${blog?.view} views`}</span> .{" "}
                        <span>{blog?.created_At}</span>
                      </article>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {/* middle section */}
        <div className="w-full h-full  rounded-lg">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            speed={500}
            loop
            modules={[Autoplay]}
            className="mySwiper"
            onSlideChange={(slider) => setSlideIndex(slider.realIndex)}
          >
            {recentBlog?.map((blog, idx) => {
              if (blog?.id > 0 && blog?.id <= 2) {
                return (
                  <SwiperSlide
                    key={idx}
                    className="relative w-full !h-[75vh] rounded-lg overflow-hidden card_container"
                  >
                    <HightlightMainCard blog={blog} slideIndex={slideIndex} />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
        {/* right section */}
        <div className="w-full h-full grid grid-rows-2 gap-5">
          {recentBlog?.map((blog, idx) => {
            if (blog?.id > 4 && blog?.id <= 6) {
              return (
                <div
                  key={idx}
                  className="card_container relative w-full h-full rounded-lg overflow-hidden"
                >
                  {/* image */}
                  <Image
                    src={blog?.thumbnail}
                    alt={blog?.title}
                    width={500}
                    height={500}
                    className="card_image relative w-full h-full object-cover"
                  />
                  {/* layer */}
                  <div className="absolute top-0 left-0 bg-layer opacity-[0.9]  w-full h-full z-[1]"></div>
                  {/* info */}
                  <div className="card_content absolute bottom-0 left-0 p-5 flex justify-start items-end z-[2]">
                    {/* div */}
                    <div>
                      <article className="text-white cursor-pointer text-[10px] uppercase mb-2 opacity-[0.9]">
                        {blog?.category}
                      </article>
                      <article
                        className="text-white text-sm font-semibold mb-3"
                        title={blog?.title}
                      >
                        {blog?.title?.length > 100
                          ? `${blog?.title?.slice(0, 100)}...`
                          : blog?.title}
                      </article>
                      <article className="text-xs text-dark cursor-pointer">
                        <span>{blog?.creator}</span> .{" "}
                        <span>{`${blog?.view} views`}</span> .{" "}
                        <span>{blog?.created_At}</span>
                      </article>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* for mobile view */}
        <div className="lg:hidden block w-full  rounded-lg  mb-5 z-[0]">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            speed={500}
            loop
            modules={[Autoplay]}
            className="mySwiper"
            onSlideChange={(slider) => setSlideIndex(slider.realIndex)}
          >
            {recentBlog?.map((blog, idx) => {
              if (blog?.id > 0 && blog?.id <= 2) {
                return (
                  <SwiperSlide
                    key={idx}
                    className="relative w-full !h-[75vh] rounded-lg overflow-hidden"
                  >
                    <HightlightMainCard blog={blog} slideIndex={slideIndex} />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
        <div className="lg:hidden w-full grid md:grid-cols-2  grid-cols-1 gap-5 z-[0]">
          {recentBlog?.map((blog, idx) => {
            if (blog?.id > 2) {
              return (
                <div
                  key={idx}
                  className="relative w-full h-[40vh] rounded-lg overflow-hidden "
                >
                  {/* image */}
                  <Image
                    src={blog?.thumbnail}
                    alt={blog?.title}
                    width={500}
                    height={500}
                    className="relative w-full h-full object-cover"
                  />
                  {/* layer */}
                  <div className="absolute top-0 left-0 bg-layer opacity-[0.9]  w-full h-full z-[1]"></div>
                  {/* info */}
                  <div className="absolute bottom-0 left-0 p-5 flex justify-start items-end z-[2]">
                    {/* div */}
                    <div>
                      <article className="text-white cursor-pointer text-[10px] uppercase mb-2 opacity-[0.9]">
                        {blog?.category}
                      </article>
                      <article
                        className="text-white text-sm font-semibold mb-3"
                        title={blog?.title}
                      >
                        {blog?.title?.length > 100
                          ? `${blog?.title?.slice(0, 100)}...`
                          : blog?.title}
                      </article>
                      <article className="text-xs text-dark cursor-pointer">
                        <span>{blog?.creator}</span> .{" "}
                        <span>{`${blog?.view} views`}</span> .{" "}
                        <span>{blog?.created_At}</span>
                      </article>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
    </>
  );
};

export default HighlightRecentBlog;
