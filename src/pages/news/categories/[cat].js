import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Popular_cover from "@/components/k-news/categories/Popular_cover";
import NCategories from "@/components/k-news/NCategories";
import MelodyCategores from "@/components/allInOne/homepage/categores/MelodyCategores";
import Heading from "@/elements/Heading";
import CatLoading from "@/components/global/loadings/k-news/CatLoading";
import Link from "next/link";
import Head from "next/head";
import { GetArticlesByCategoryAPI } from "@/apis/_list";
import melodyapi from "@/apis/_axios";
import { timeAgo } from "@/utils/dateformatter";
import { reDirectToAuthor, reDirectToRead } from "@/utils/reDirectToRead";

const Categories = () => {
  const router = useRouter();
  const [dataList, setDataList] = useState([]);
  const [viewFull, setViewFull] = useState(false);
  const [loading, setLoading] = useState(true);

  const getArticles =async () => {
    setLoading(true);
      switch (router?.query?.cat) {
        case "video":
          const videoResult = await melodyapi.get(GetArticlesByCategoryAPI(1))
          setDataList(videoResult?.data?.data || []);
          return setLoading(false);
        case "style":
          const styleResult = await melodyapi.get(GetArticlesByCategoryAPI(2))
          setDataList(styleResult?.data?.data || []);
          return setLoading(false);
        case "film":
          const filmResult = await melodyapi.get(GetArticlesByCategoryAPI(3))
          setDataList(filmResult?.data?.data || []);
          return setLoading(false);
        case "music":
          const musicResult = await melodyapi.get(GetArticlesByCategoryAPI(4))
          setDataList(musicResult?.data?.data || []);
          return setLoading(false);
        case "features":
          const featuresResult = await melodyapi.get(GetArticlesByCategoryAPI(5))
          setDataList(featuresResult?.data?.data || []);
          return setLoading(false);
      }
  }

  useEffect( () => {
    getArticles()
   
  }, [router]);


  return (
    <>
    <Head>
    <title >{ router?.query?.cat ? `${router?.query?.cat?.toUpperCase()}` : 'Loading...' || 'Loading...' } | Melody.kr</title>
    </Head>
      {loading ? (
        <CatLoading _name={router?.query?.cat} />
      ) : (
        <div className="grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 gap-5 mb-6 ">
          {/* left section */}
          <div className="relative w-full lg:h-[230vh] overflow-y-auto no-scrollbar">
            {/* first news */}
            <div className="w-full md:h-[60vh] h-[50vh] rounded-lg relative overflow-hidden mb-10 card_container">
              {/* image */}
              <Image
                src={dataList[0]?.thumbnail}
                alt={dataList[0]?.title}
                width={500}
                height={500}
                className="relative w-full h-full object-cover z-[0]  card_image"
              />
              {/* bg layer */}
              <div className="absolute w-full h-full top-0 left-0 bg-layer opacity-[0.8] z-[1]"></div>
              {/* content */}
              <div className="absolute w-full h-full top-0 left-0 z-[2] p-5 flex justify-start items-end">
                {/* main content */}
                <article className="text-white text-xl font-bold absolute top-5 left-5">#LATEST</article>
                <div>
                  {/* article content */}
                  <div className="mb-5">
                    <Heading
                      label={dataList[0]?.category}
                      htype={2}
                      custcss="!text-white !text-[14px] mb-2"
                    />
                      <article className="md:text-[30px] text-[20px] font-semibold text-white md:max-w-[90%] mb-2 hover:underline cursor-pointer" onClick={() => reDirectToRead(dataList[0]?._id,dataList[0]?.category)}>
                        {dataList[0]?.title?.length > 100
                          ? `${dataList[0]?.title?.slice(0, 100)}...`
                          : dataList[0]?.title}
                      </article>
                    <article className="md:text-[14px] text-[12px] text-dark md:max-w-[75%] ">
                      {dataList[0]?.summary?.length > 150
                        ? `${dataList[0]?.summary?.slice(0, 150)}...`
                        : dataList[0]?.summary}{" "}
                    </article>
                  </div>
                  <article className="mb-2 text-[12px] text-white">
                      Posted on {timeAgo(dataList[0]?.createdAt)}
                    </article>
                </div>
              </div>
            </div>
            {/* other news */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mb-10">
              {dataList?.map((news, idx) => {
                if (viewFull ? idx > 0 : idx > 0 && idx < 9) {
                  return (
                    <div className="w-full bg-secondary rounded-lg">
                      {/* image */}
                      <Image
                        src={news?.thumbnail}
                        alt={news?.title}
                        width={500}
                        height={500}
                        className="relative w-full h-[250px] rounded-lg object-cover overflow-hidden mb-2"
                      />

                      {/* article publicer content */}
                      
                      <div className="w-full relative p-5">
                        
                        <Heading
                          label={`${news?.subcategory ? news?.subcategory : news?.category}`}
                          htype={2}
                          custcss="!text-primary mb-2 !text-[14px]"
                        />
                       
                       <article className="text-[20px] font-semibold text-primary  mb-2 hover:underline cursor-pointer " onClick={() => reDirectToRead(news?._id,news?.category)}>
                          {news?.title?.length > 55
                            ? `${news?.title?.slice(0, 55)}...`
                            : news?.title}
                        </article>
                       
                        
                        <article className="mb-2 text-[10px] font-semibold text-primary opacity-[0.5]">
                          {timeAgo(news?.createdAt)}
                        </article>
                        <div className="flex justify-start items-center">
                        
                        <div className="relative">
                          <article className="text-[12px] font-semibold text-primary  ">
                            Posted by{" "}
                            <span className="text-accent  cursor-pointer" onClick={() => reDirectToAuthor(news?.author?._id)}>
                              {news?.author?.name}
                            </span>
                          </article>
                          
                        </div>
                      </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            {/* <div
              className="w-full flex justify-center item-center my-10"
              onClick={() => setViewFull(true)}
            >
              <Button label={"Load More"} btnType={1} css={"px-16 py-4"} />
            </div> */}
          </div>
          {/* right section */}
          <div className="w-full">
            {/* popluar cover */}
            <div className="mb-6">
              <Popular_cover />
            </div>
            {/* categories */}
            <div className="mb-6">
              <NCategories title="Other Categories" />
            </div>
            {/* Melody Categorys */}
            <div className="my-6">
              <MelodyCategores title={"Explore Other Section"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
