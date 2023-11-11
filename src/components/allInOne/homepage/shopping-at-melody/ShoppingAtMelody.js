import Heading from "@/elements/Heading";
import MelodyLink from "@/elements/MelodyLink";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import shoppingCat from "@/json/shoppingCategory.json";
import newArrival from "@/json/newProductArrivals.json";
import Image from "next/image";
import number_formatter from "number_formatter";
// import { HiShoppingCart } from "react-icons/hi";
// import { BsArrowRight } from "react-icons/bs";

const ShoppingAtMelody = () => {
  return (
    <div className="w-full h-auto p-5 bg-secondary rounded-lg">
      {/* melody category */}
      <div className="mb-5">
        {/* heading */}
        <div className="flex justify-between items-center mb-4">
          <Heading label={"Shopping At Melody"} htype={2} />
          <MelodyLink label="Shop Now" />
        </div>
        {/*  */}
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            speed={500}
            loop
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-[300px]"
          >
            {shoppingCat?.map((category, idx) => {
              return (
                <SwiperSlide key={idx} className="cursor-pointer ">
                  <div className="relative w-full h-[250px] overflow-hidden rounded-lg  shopping_card_container">
                    <Image
                      src={category?.thumbnail}
                      alt={category?.name}
                      width={500}
                      height={500}
                      className="relative w-full h-[250px] object-cover bg-dark mb-2 z-[0] shopping_card_image"
                    />
                    <div className="absolute w-full h-full top-0 left-0 bg-layer opacity-[0.5]"></div>
                    {/* informartion */}
                    <div className="w-full h-auto absolute bottom-0 left-0 z-[2] p-2 shopping_card_content ">
                      <article className=" text-center w-full text-white font-semibold text-lg">
                        {category?.name}
                      </article>
                      <MelodyLink
                        label="Shop Now"
                        custcss="text-center w-full !text-dark"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            {/* <SwiperSlide className="cursor-pointer shopping_card_container">
            <div className="relative w-full h-[250px] overflow-hidden rounded-lg bg-[#fffef2]  ">
              <div className="w-full absolute left-0 top-[50%] -translate-y-[50%] z-[1]  ">
                <div className="mx-auto flex justify-center items-center">
                  <article className=" text-center  text-accent font-semibold text-lg mr-2">
                    Explore More
                  </article>
                  <BsArrowRight className="text-accent" />
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
      {/* New Arrivals */}
      <div className="w-full relative">
        <div className="flex justify-between items-center mb-4">
          <Heading label={"New Products's  Arrival"} htype={2} />
          <MelodyLink label="See More" />
        </div>
        {/* products */}
        <div className="w-full grid  md:grid-cols-3  sm:grid-cols-2 grid-cols-1  gap-5">
          {newArrival?.map((product, idx) => {
            return (
              <div
                key={idx}
                className="w-full h-[350px] cursor-pointer  rounded-lg card_container"
              >
                {/* image */}
                <div className="bg-[#f7f9f8] w-full md:h-[225px] h-[250px] rounded-lg overflow-hidden shadow p-2 mb-2">
                  <Image
                    src={product?.thumbnail}
                    alt={product?.name}
                    width={500}
                    height={500}
                    className="relative w-full h-full object-cover rounded-lg  card_image"
                  />
                </div>
                {/* content */}
                <div className="w-full">
                  <article
                    className="text-primary text-sm mb-1"
                    title={product?.name}
                  >
                    {product?.name?.length > 50
                      ? `${product?.name?.slice(0, 50)}...`
                      : product?.name}
                  </article>
                  {product?.price?.discount ? (
                    <div>
                      <div className="flex justify-start items-center mb-1">
                        <article className="text-xs text-primary mr-1">
                          {product?.price?.percent}% OFF
                        </article>
                        <article className="text-secondary text-xs ">
                          <del>
                            {number_formatter(product?.price?.originalAmt)}{" "}
                            {product?.price?.currentType}
                          </del>
                        </article>
                      </div>
                      <div className="text-orange inline-flex font-semibold">
                        <article className="mr-1">
                          {number_formatter(product?.price?.discountAmt)}
                        </article>{" "}
                        <article>{product?.price?.symbol}on</article>
                      </div>
                    </div>
                  ) : (
                    <div className="text-orange inline-flex font-semibold">
                      <article className="mr-1">
                        {number_formatter(product?.price?.originalAmt)}
                      </article>{" "}
                      <article>{product?.price?.symbol}on</article>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingAtMelody;
