import Heading from "@/elements/Heading";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiChevronRight, BiChevronLeft, BiSolidTv } from "react-icons/bi";
import { BsDot, BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import kProfile from "@/json/kProfile.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import "swiper/css";
import Image from "next/image";

const DramaProfile = () => {
  const [pop, setPop] = useState(false);
  const [trailer, setTrailer] = useState(false);
  
  const popOpen = (drama_trailer) => {
      setTrailer(drama_trailer), setPop(true);
    };
    
    const sliderRef = useRef(null);
    const [activeIndex,setActiveIndex] = useState(0)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <div className="relative">
        {/* heading */}
        <div className="flex justify-between items-center mb-5">
          <Heading label={"K-Drama On Air"} />
          <div className="flex justify-end items-center gap-2">
            <div
              onClick={handlePrev}
              className={`w-6 h-6 ${activeIndex === 0 ? ' bg-accent bg-opacity-[0.3] cursor-not-allowed' : 'bg-accent  cursor-pointer '} rounded  flex justify-center items-center`}
            >
              <BiChevronLeft size={20} className={activeIndex === 0 ? "text-accent" : 'text-white'} />
            </div>
            <div
              onClick={handleNext}
              className={`w-6 h-6 ${activeIndex === kProfile?.length-1 ? ' bg-accent bg-opacity-[0.3] cursor-not-allowed' : 'bg-accent  cursor-pointer '} rounded flex justify-center items-center`}
            >
              <BiChevronRight size={20} className={activeIndex === kProfile?.length-1  ? "text-accent" : 'text-white'} />
            </div>
          </div>
        </div>
        {/* swiper */}
        <Swiper
          ref={sliderRef}
          draggable={false}
          onSlideChange={(e) => setActiveIndex(e?.activeIndex)}
          className="mySwiper w-full h-[60vh]"
        >
          {kProfile?.map((drama, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className="relative w-full h-[60vh] rounded-lg overflow-hidden"
              >
                {/* Image */}
                <Image
                  src={drama?.thumbnail}
                  alt={drama?.name}
                  width={500}
                  height={500}
                  className="relative w-full h-full object-cover z-[0]"
                />
                {/* bg layer */}
                <div className="absolute top-0 left-0 w-full h-full bg-layer opacity-[0.9] z-[1]"></div>
                {/* content */}
                <div className="absolute top-0 left-0 w-full h-full z-[2] p-5 flex justify-start items-end">
                  {/*  */}
                  <div className="w-full">
                    <div className="flex justify-start items-center  text-white text-sm ">
                      <div className="flex justify-start items-center">
                        <BiSolidTv size={15} className="!text-white mr-1" />{" "}
                        <article>K-Drama</article>
                      </div>
                      <BsDot size={15} />
                      <article>Season {drama?.season}</article>
                    </div>
                    <article className="md:text-[40px] text-[20px] font-bold text-white max-w-[600px]">
                      {drama?.name}
                    </article>
                    <div
                      className="mb-2 flex justify-start items-center gap-1 "
                      onClick={() => popOpen(drama?.trailer)}
                    >
                      <BsFillPlayFill size={25} className="text-accent" />
                      <article className=" text-accent font-medium cursor-pointer ">
                        Watch Trailer
                      </article>
                    </div>
                    {/* other info */}
                    <div className="flex justify-start items-center text-xs text-dark ">
                      <article>{drama?.total_episode} Episodes </article>
                      <BsDot size={20} />
                      <article className=" capitalize">
                        {" "}
                        Next Episode {drama?.next_episode?.ep_name} on{" "}
                        {drama?.next_episode?.relase_date}{" "}
                      </article>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* pop */}
      {pop && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-[0.8] flex justify-center items-center z-[1000]"
          onClick={() => setPop(false)}
        >
          <div className="absolute top-5 right-5">
            <AiOutlineClose
              size={40}
              className="text-white hover:text-accent cursor-pointer"
            />
          </div>
          <div>
            <iframe
              width="800"
              height="500"
              src={trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default DramaProfile;
