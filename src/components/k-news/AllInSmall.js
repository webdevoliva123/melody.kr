import Heading from '@/elements/Heading'
import React, { useState, useEffect } from 'react'
import trendingNews from "@/json/highlightTrendingNews.json";
import spotligthNews from "@/json/spotlightNews.json";
import pnews from "@/json/pickedOneNews.json";
import latestNews from "@/json/latestkNews.json";
import Image from 'next/image';
import { useRouter } from 'next/router';
import melodyapi from '@/apis/_axios';
import { GetCatgoriesArticlesAPI } from '@/apis/_list';
import { timeAgo } from '@/utils/dateformatter';
import { reDirectToRead } from '@/utils/reDirectToRead';

const AllInSmall = () => {
    const router = useRouter()
    const [articles,setArticles] = useState([])

   
    const getCatgoriesArticles = async () => {
        const response = await melodyapi.get(GetCatgoriesArticlesAPI)
        setArticles([{
            title : 'VIDEO',
            newsList : response?.data?.data?.videos
        },{
            title : 'STYLE',
            newsList : response?.data?.data?.style
        },{
            title : 'TV/FILM',
            newsList : response?.data?.data?.tv_film
        },{
            title : 'FEATURES',
            newsList : response?.data?.data?.features
        }])
    }
  
    useEffect(() => {
        getCatgoriesArticles()
    },[router])

  return  (
    <div className='relative w-full'>
        <Heading label={'All Latest News'} htype={1} custcss={'mb-6'}/>
        <div className='w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10'>
            {articles?.map((section,idx) => {
                return <div key={idx} className='w-full relative '>
                    <Heading label={section?.title} htype={2} custcss={'mb-4'} />
                    {
                        section?.newsList?.map((news,nidx) => {
                            if(nidx < 3){
                                return <div className={`w-full py-5 ${nidx !== 2 && 'border-b border-opacity-[0.5] border-primary '}`}>
                                   {nidx === 0 && <Image  src={news?.thumbnail} alt={news?.title} width={500} height={500} className='relative w-full h-[200px] object-cover rounded-lg mb-4'/>}
                                   <div>
                                    <article className='text-secondary text-xs mb-2'>{timeAgo(news?.createdAt)}</article>
                                    <article className='text-primary mb-2 cursor-pointer hover:underline' title={news?.title} onClick={() => reDirectToRead(news?._id, news?.category)}>{news?.title?.length > 50 ? `${news?.title?.slice(0,50)}...` : news?.title}</article>
                                   </div>
                                </div>
                            }
                        })
                    }
                </div>
            })}
        </div>
    </div>
  )
}

export default AllInSmall