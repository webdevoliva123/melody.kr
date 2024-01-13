import Heading from "@/elements/Heading";
import React,{useEffect,useState} from "react";
import watchoutList from "@/json/watchoutTrailerReviews.json";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/router";
import melodyapi from "@/apis/_axios";
import { GetVideosArticlesAPI } from "@/apis/_list";
import { reDirectToRead } from "@/utils/reDirectToRead";
const NWatchout = () => {
  const router = useRouter()
  const [articles,setArticles] = useState([])

  const getVideosArticles = async ()  =>{
      const response = await melodyapi(GetVideosArticlesAPI)
      setArticles(response?.data?.data)
  }

  useEffect(() => {
    getVideosArticles()
  },[router])

  return (
    <div className="w-full p-5 rounded-lg bg-secondary">
      <div className="mb-6">
        <Heading label={"Watchout Video's Now"}/>
      </div>
      <div className="w-full lg:h-[50vh] h-auto grid lg:grid-cols-3 md:gridcols-2 gap-5">
        {articles?.map((video, idx) => {
          return (
            <div
              key={idx}
              className="relative w-full  rounded-lg watchout_card_container cursor-pointer "
            >
              <div className="relative w-full lg:h-[25vh] md:h-[40vh] rounded-lg overflow-hidden">
                <Image
                  src={video?.thumbnail}
                  alt={video?.title}
                  width={500}
                  height={500}
                  className="relative w-full  h-full object-cover watchout_card_image z-[0]"
                />
                {/* bglayer */}
                <div className="watchout_card_layer absolute top-0 left-0 w-full lg:h-[25vh] md:h-[40vh] bg-black bg-opacity-[0.4] z-[2]">
                    <FaPlay size={30} className="text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
                </div>
              </div>
              {/* info */}
              <div className=" w-full py-5 flex justify-start items-end  ">
                {/* div */}
                <div>
                  <article className="text-secondary  text-xs cursor-pointer uppercase mb-2 opacity-[0.9]">
                    {video?.category}
                  </article>
                  <article
                    className="text-primary text-[16px]  font-semibold mb-3 hover:underline cursor-pointer"
                    title={video?.title}
                    onClick={() => reDirectToRead(video?._id,video?.category)}
                  >
                    {video?.title?.length > 100
                      ? `${video?.title?.slice(0, 100)}...`
                      : video?.title}
                  </article>
                  <article className="text-xs text-accent cursor-pointer">
                    <span>{video?.created_At}</span>
                  </article>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NWatchout;
