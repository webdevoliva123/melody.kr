import Heading from "@/elements/Heading";
import MelodyLink from "@/elements/MelodyLink";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import trendingKpopMusic from "@/json/trendingKpopMusic.json";
import latestKpopMusic from "@/json/latestKpopMusic.json";
import Image from "next/image";
import { PiMusicNotesSimpleBold } from "react-icons/pi";
import { GoClock } from "react-icons/go";
import { BsHeadphones, BsPlay } from "react-icons/bs";

const GlobalMusic = () => {
  return (
    <div className="w-full bg-secondary p-5 rounded-lg">
      <div className="mb-5">
        {/* heading */}
        <div className="w-full flex justify-between items-center mb-5">
          <Heading label={"Trending K-pop Music"} htype={1} />
          <div className="flex justify-start items-center gap-1">
            <PiMusicNotesSimpleBold className="text-accent  md:text-[12px] text-[10px]" />
            <MelodyLink label="Melody Music" LType={2} />
          </div>
        </div>
        {/* swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop
          speed={500}
          modules={[Autoplay]}
          className="mySwiper h-[50vh]"
        >
          {trendingKpopMusic?.map((song, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className="relative w-full !h-[50vh] rounded-lg overflow-hidden"
              >
                <div className="card_container relative w-full h-full overflow-hidden cursor-pointer">
                  {/* image */}
                  <Image
                    src={song?.thumbnail}
                    alt={song?.name}
                    width={500}
                    height={500}
                    className="card_image relative w-full h-full object-cover z-[0]"
                  />
                  {/* bg-layer */}
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.4] z-[1]"></div>
                  {/* content */}
                  <div className="card_content_small absolute top-0 left-0 w-full h-full p-4 flex justify-start items-end z-[2]">
                    <div className="flex justify-start items-center gap-2">
                      {/* profile */}
                      <div className="md:w-24 md:h-24 w-14 h-14 rounded overflow-hidden">
                        <Image
                          src={song?.artist?.profile}
                          alt={song?.name}
                          width={500}
                          height={500}
                          className="relative w-full h-full object-cover z-[0]"
                        />
                      </div>
                      {/* content */}
                      <div className="flex-1">
                        <div className="flex justify-start items-center mr-3 ">
                          <PiMusicNotesSimpleBold className="text-dark mr-1 md:text-[12px] text-[10px]" />
                          <article className="md:text-[12px] text-[10px] text-dark font-semibold">
                            {" "}
                            Music
                          </article>
                        </div>

                        {/* music name */}
                        <div>
                          <article className="font-semibold text-white md:text-lg text-sm">
                            {song?.name}
                          </article>
                        </div>
                        <div className="md:block hidden mb-1">
                          <article className="text-white md:text-xs text-[10px]">
                            {song?.artist?.name}
                            {song?.feature?.length > 0 &&
                              `, feat. ${song?.feature?.toString()}`}
                          </article>
                        </div>
                        {/* other info */}
                        <div className="flex justify-start items-center gap-2">
                          <div className="flex justify-start items-center gap-1">
                            <GoClock size={12} className="text-white" />
                            <article className="text-[10px] text-white">
                              {song?.duration}
                            </article>
                          </div>
                          <div className="flex justify-start items-center gap-1">
                            <BsHeadphones size={12} className="text-white" />
                            <article className="text-[10px] text-white">
                              {song?.listners}
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* title line */}
                  <div className="absolute top-0 left-0 p-4 flex justify-start items-end z-[2] mb-2">
                    <article className="text-[16px] text-[#fff] font-semibold ">
                      #{idx + 1} Trending
                    </article>
                  </div>
                  {/* card layer */}
                  <div className="card_layer absolute top-0 left-0 w-full h-full  bg-black bg-opacity-[0.3] z-[3]">
                    <BsPlay
                      size={40}
                      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[#ffff]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mb-5">
        {/* heading */}
        <div className="w-full flex justify-between items-center mb-5">
          <Heading label={"Latest K-pop Music"} htype={1} />
          <MelodyLink label="Listen More" LType={2} />
        </div>
        {/* latest music list */}
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5">
          {latestKpopMusic?.map((song, idx) => {
            return (
              <div
                key={idx}
                className="card_container hover:bg-primary bg-opacity-[0.5] w-full h-[80px] flex justify-start items-center gap-2 cursor-pointer rounded-lg"
              >
                {/*  thumbnail*/}
                <div className="relative w-[80px] h-[80px] rounded-lg overflow-hidden">
                  <Image
                    src={song?.thumbnail}
                    alt={song?.title}
                    width={500}
                    height={500}
                    className="card_image relative w-full h-full object-cover z-[0]"
                  />
                  {/* card layer */}
                  <div className="card_layer absolute top-0 left-0 w-full h-full  bg-black bg-opacity-[0.3] z-[3]">
                    <BsPlay
                      size={30}
                      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[#ffff]"
                    />
                  </div>
                </div>
                {/* content */}
                <div className="flex-1">
                  {/* music */}
                  <div className="flex justify-start items-center mr-3 ">
                    <PiMusicNotesSimpleBold className="text-accent mr-1 md:text-[12px] text-[10px]" />
                    <article className="md:text-[12px] text-[10px] text-accent font-semibold">
                      {" "}
                      Music
                    </article>
                  </div>
                  {/* name */}
                  <article className="text-primary font-semibold text-sm">
                    {song?.title?.length > 30
                      ? `${song?.title?.slice(0, 30)}...`
                      : song?.title}
                  </article>
                  <div className="flex justify-start items-center gap-2">
                    <article className="text-secondary text-[10px]">
                      By {song?.artist}
                    </article>

                    <div className="flex justify-start items-center gap-1">
                      <GoClock size={12} className="text-secondary" />
                      <article className="text-[10px] text-secondary">
                        {song?.duration}
                      </article>
                    </div>

                    <article className="text-[10px] text-secondary lowercase">
                      {song?.release}
                    </article>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GlobalMusic;
