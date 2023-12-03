import Heading from '@/elements/Heading'
import React from 'react'
import trendingNews from "@/json/highlightTrendingNews.json";
import spotligthNews from "@/json/spotlightNews.json";
import pnews from "@/json/pickedOneNews.json";
import latestNews from "@/json/latestkNews.json";
import Image from 'next/image';

const AllInSmall = () => {
    const allInOne = [{
        title : 'VIDEO',
        newsList : trendingNews
    },{
        title : 'STYLE',
        newsList : spotligthNews
    },{
        title : 'TV/FILM',
        newsList : pnews
    },{
        title : 'MUSIC',
        newsList : latestNews
    }]
  
  return (
    <div className='relative w-full'>
        <Heading label={'All Latest News'} htype={1} custcss={'mb-6'}/>
        <div className='w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10'>
            {allInOne?.map((section,idx) => {
                return <div key={idx} className='w-full relative '>
                    <Heading label={section?.title} htype={2} custcss={'mb-4'} />
                    {
                        section?.newsList?.map((news,nidx) => {
                            if(nidx < 3){
                                return <div className={`w-full py-5 ${nidx !== 2 && 'border-b border-opacity-[0.5] border-primary '}`}>
                                   {nidx === 0 && <Image  src={news?.thumbnail} alt={news?.title} width={500} height={500} className='relative w-full h-[200px] object-cover rounded-lg mb-4'/>}
                                   <div>
                                    <article className='text-secondary text-xs mb-2'>{news?.created_At}</article>
                                    <article className='text-primary mb-2 cursor-pointer' title={news?.title}>{news?.title?.length > 50 ? `${news?.title?.slice(0,50)}...` : news?.title}</article>
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