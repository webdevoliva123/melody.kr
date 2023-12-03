import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import news_video from "@/json/news/category/video.json";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Button from "@/elements/Button";
import Popular_cover from "@/components/k-news/categories.js/Popular_cover";
import NCategories from "@/components/k-news/NCategories";
import MelodyCategores from "@/components/allInOne/homepage/categores/MelodyCategores";
import Breadcrums from "@/elements/Breadcrums";

const Categories = () => {
  const router = useRouter();
  const [dataList, setDataList] = useState([]);
  const [viewFull,setViewFull] = useState(false)
  useEffect(() => {
    switch (router?.query?.cat) {
      case "video":
        return () => {
          setDataList(news_video);
        };
      default:
        return () => {
          router?.push("/news/_");
        };
    }
  }, [router?.query]);

  return (
    <>
    <Breadcrums pathCollection={['news',router?.query?.cat]}/>
    <div className="grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 gap-5 mb-6 ">
        
        {/* left section */}
        <div className="relative w-full lg:h-[230vh] overflow-y-auto no-scrollbar">
          {/* first news */}
          <div className="w-full h-[60vh] rounded-lg relative overflow-hidden mb-10 card_container">
            {/* image */}
            <Image
              src={dataList[0]?.thumbnail}
              alt={dataList[0]?.title}
              width={500}
              height={500}
              className="relative w-full h-full object-cover z-[0] card_image"
            />
            {/* bg layer */}
            <div className="absolute w-full h-full top-0 left-0 bg-layer opacity-[0.8] z-[1]"></div>
            {/* content */}
            <div className="absolute w-full h-full top-0 left-0 z-[2] p-5 flex justify-start items-end">
              {/* main content */}
              <div>
                {/* article content */}
                <div className="mb-5">
                  <article className="mb-2 text-[14px] text-white">
                    {" "}
                    Uploaded At {dataList[0]?.created_At}
                  </article>
                  <article className="md:text-[30px] text-[20px] font-semibold text-white md:max-w-[90%] mb-2 hover:underline cursor-pointer">
                    {dataList[0]?.title?.length > 100
                      ? `${dataList[0]?.title?.slice(0, 100)}...`
                      : dataList[0]?.title}
                  </article>
                  <article className="md:text-[14px] text-[12px] text-dark md:max-w-[75%] mb-2">
                    {dataList[0]?.summary?.length > 150
                      ? `${dataList[0]?.summary?.slice(0, 150)}...`
                      : dataList[0]?.summary}{" "}
                    <span className="text-[12px] cursor-pointer underline text-[#ccc] ml-2">
                      Read More
                    </span>
                  </article>
                </div>
                {/* article publicer content */}
                <div className="flex justify-start items-center">
                  {/* image */}
                  <Image
                    src={dataList[0]?.publiser?.profile}
                    alt={dataList[0]?.publiser?.profile}
                    width={500}
                    height={500}
                    className="relative md:w-[60px] w-[50px] md:h-[60px] h-[50px] rounded-full overflow-hidden object-cover mr-4"
                  />
                  <div className="relative">
                    <article className="md:text-[14px] text-[12px] font-semibold text-white  mb-1">
                      Published by{" "}
                      <span className="text-accent  cursor-pointer">
                        {dataList[0]?.publiser?.name}
                      </span>
                    </article>
                    <div className="flex justify-start items-center gap-1">
                      <article className="text-[10px]  text-white">
                        {dataList[0]?.publiser?.total_artile}
                      </article>
                      <GoDotFill size={5} className="text-white" />
                      <article className="text-[10px]  text-white">
                        {dataList[0]?.publiser?.daily_views} Daily
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* other news */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
            {dataList?.map((news, idx) => {
              if (viewFull ? idx > 0  : idx > 0 && idx < 9) {
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
                      <article className="text-[20px] font-semibold text-primary  mb-2 hover:underline cursor-pointer">
                        {news?.title?.length > 80
                          ? `${news?.title?.slice(0, 80)}...`
                          : news?.title}
                      </article>
                      <article className="text-[14px] text-secondary  mb-2">
                        {news?.summary?.length > 150
                          ? `${news?.summary?.slice(0, 150)}...`
                          : news?.summary}{" "}
                        <span className="text-[12px] cursor-pointer underline text-[#ccc] ml-2">
                          Read More
                        </span>
                      </article>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="w-full flex justify-center item-center mb-6" onClick={() => setViewFull(true)}>
              <Button label={'Load More'} btnType={1} css={'px-16 py-4'}/>
          </div>
        </div>
        {/* right section */}
        <div className="w-full">
          {/* popluar cover */}
          <div className="mb-6">
              <Popular_cover />
          </div>
          {/* categories */}
          <div className="mb-6">
              <NCategories title="Other Categories"/>
            </div>
          {/* Melody Categorys */}
          <div className="my-6">
              <MelodyCategores title={'Explore Other Section'} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
