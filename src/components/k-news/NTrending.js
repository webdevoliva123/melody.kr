"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Heading from "@/elements/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import melodyapi from "@/apis/_axios";
import { GetTrendingArticlesAPI } from "@/apis/_list";
import { useRouter } from "next/router";
import { timeAgo } from "@/utils/dateformatter";
import formatViewsCount from "@/utils/viewsfomatter";
import { reDirectToRead } from "@/utils/reDirectToRead";

const NTrending = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [otherNewsData, setOtherNewsData] = useState([]);
  const router = useRouter()
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)

 
  const updateSlides = () => {
    let filterArray = articles.filter((_, idx) => idx > slideIndex);
    let prevArray = articles.filter((_, idx) => idx < slideIndex);
    setOtherNewsData([...filterArray, ...prevArray]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex < 5) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(0);
      }
    }, 3000); // 50 milliseconds for a smoother animation
    updateSlides();

    return () => {
      clearInterval(interval);
    };
  }, [slideIndex]);

  const getTrendingNews = async () => {
    setLoading(true)
    const response = await melodyapi.get(GetTrendingArticlesAPI)
    setArticles(response?.data?.data)
    setOtherNewsData(response?.data?.data?.filter((_,idx) => idx !== 0))
    setLoading(false)
  }

  useEffect(() => {
    getTrendingNews()
    
  },[router])

  return (
    <>
      {/* Trending News */}
      <div className="w-full lg:h-[70vh] md:h-[150vh] h-[50vh] grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 lg:gap-5  ">
        {/* left container */}
        {loading ? <div className="relative animate-pulse bg-secondary w-full h-full rounded-lg"></div> : <div className="relative bg-secondary w-full h-full rounded-lg overflow-hidden">
          <Swiper
            key={slideIndex}
            initialSlide={slideIndex}
            slidesPerView={1}
            spaceBetween={20}
            draggable={false}
            onSlideChange={(e) => setSlideIndex(e?.activeIndex)}
            className="mySwiper w-full h-full z-[0]"
          >
            {articles?.map((news, idx) => {
              return (
                <SwiperSlide key={idx} className="w-full h-full card_container">
                  <Image
                    src={news?.thumbnail}
                    alt={news?.title}
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
                      <article className="text-white md:text-sm text-xs cursor-pointer uppercase mb-2 opacity-[0.9]">
                        {news?.subcategory ? news?.subcategory : news?.category}
                      </article>
                      <article
                        className="text-white lg:text-[40px] md:text-[30px] text-[20px]  font-semibold mb-3 hover:underline cursor-pointer"
                        title={news?.title}
                        onClick={() => reDirectToRead(news?._id,news?.category)}
                      >
                        {news?.title?.length > 100
                          ? `${news?.title?.slice(0, 100)}...`
                          : news?.title}
                      </article>
                      <article className="text-xs text-dark cursor-pointer">
                        <span>{news?.author?.name}</span> .{" "}
                        <span>{`${formatViewsCount(news?.views)} views`}</span> .{" "}
                        <span>{timeAgo(news?.createdAt)}</span>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className=" absolute bottom-5 left-0 w-full flex justify-center items-center   gap-3 z-[1]">
            {articles?.map((_, idx) => {
              return (
                <div
                  key={idx}
                  className={`${
                    slideIndex === idx && "!w-4 !bg-accent"
                  } w-2 h-2 rounded-full bg-white transition-all duration-250 ease-linear`}
                ></div>
              );
            })}
          </div>
        </div>}
        {/* right-list */}
        {loading ?  <div className="bg-secondary w-full h-full rounded-lg overflow-hidden p-5 md:block hidden"> </div>  : <div className="bg-secondary w-full h-full rounded-lg overflow-hidden p-5 md:block hidden">
          <Heading label={"Trending News "} custcss="mb-4" />
          <div className="w-full h-[95%] grid grid-cols-1 grid-rows-5 gap-4 ">
            {otherNewsData?.map((news, idx) => {
              return (
                <div key={idx} className="w-full h-full"  >
                  <div className="w-full !flex justify-start items-center gap-4">
                    {/* images */}
                    <div className="relative rounded-full w-[80px] h-[80px]">
                      {news?.rating && (
                        <div
                          className={` lg:flex hidden absolute -left-[10px] w-[40px] h-[25px]  justify-center items-center rounded-lg ${ratingBgProvider(
                            news?.rating
                          )}`}
                        >
                          <span className="text-xs text-white">
                            {news?.rating}
                          </span>
                        </div>
                      )}
                      <Image
                        src={news?.thumbnail}
                        alt={news?.title}
                        width={500}
                        height={500}
                        className="reltaive w-full h-full object-cover rounded-full"
                      />
                    </div>
                    {/* context  */}
                    <div className="flex-1">
                      <article
                        className="cursor-pointer text-[.82em] font-[600] text-primary hover:underline hover:ease-linear hover:duration-300 "
                        title={news?.title}
                        onClick={() => reDirectToRead(news?._id,news?.category)}
                      >
                        {news?.title?.length > 45
                          ? `${news?.title?.slice(0, 45)}...`
                          : news?.title}
                      </article>
                      <span className="text-[10px] font-[500] uppercase text-secondary">
                        {formatViewsCount(news?.views)} Views .{" "}
                        {timeAgo(news?.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>}
      </div>
    </>
  );
};

export default NTrending;
