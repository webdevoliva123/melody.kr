import Heading from "@/elements/Heading";
import MelodyLink from "@/elements/MelodyLink";
import React, {useState,useEffect} from "react";
import latestNews from "@/json/latestkNews.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/router";
import melodyapi from "@/apis/_axios";
import { GetLatestArticlesAPI } from "@/apis/_list";
import { timeAgo } from "@/utils/dateformatter";
import { reDirectToRead } from "@/utils/reDirectToRead";

const NLatest = () => {
  const router = useRouter()
  const [articles,setArticles] = useState([])

  const getLatestKNews = async () =>{
    const response = await melodyapi.get(GetLatestArticlesAPI)
    setArticles(response?.data?.data)
  }

  useEffect(() => {
    getLatestKNews()
  },[router])

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Heading label={"Latest News"} />
        {/* <MelodyLink label="View More" LType={2} /> */}
      </div>
      {/* news */}
      <div className="w-full h-[30vh] ">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          draggable={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={500}
          loop
          breakpoints={{
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 6,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper w-full h-[30vh] z-[0]"
        >
          {articles?.map((news, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className="relative w-full h-full rounded-lg overflow-hidden card_container cursor-pointer"
              >
                <Image
                  src={news?.thumbnail}
                  alt={news?.title}
                  width={500}
                  height={500}
                  className="relative w-full h-full object-cover card_image"
                />
                {/* layer */}
                <div className="w-full h-full absolute top-0 left-0 bg-layer bg-opacity-[0.4] z-[1]"></div>
                {/* info */}
                <div className="absolute bottom-0 left-0 w-full  p-5 flex justify-start items-end z-[2] mb-2 card_content ">
                  {/* div */}
                  <div>
                    <article className="text-white  text-xs cursor-pointer uppercase mb-2 opacity-[0.9]">
                      {news?.category}
                    </article>
                    <article
                      className="text-white text-[16px]  font-semibold mb-3 hover:underline cursor-pointer"
                      title={news?.title}
                      onClick={() => reDirectToRead(news?._id,news?.category)}
                    >
                      {news?.title?.length > 60
                        ? `${news?.title?.slice(0, 60)}...`
                        : news?.title}
                    </article>
                    <article className="text-xs text-dark cursor-pointer">
                      <span>{timeAgo(news?.createdAt)}</span>
                    </article>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default NLatest;
