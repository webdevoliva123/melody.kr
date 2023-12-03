import Heading from '@/elements/Heading'
import React from 'react'
import trendingNews from "@/json/highlightTrendingNews.json";
import Image from 'next/image';

const Popular_cover = () => {
  return (
    <div className='w-full rounded-lg bg-secondary p-5'>
        <Heading label={'Pouplar Article'} htype={2} custcss="mb-4"/>
        <div className='w-full'>
            {
                trendingNews?.map((news,idx) => {
                    return <div key={idx} className='w-full p-2 hover:bg-primary rounded-lg cursor-pointer mb-2 flex justify-start items-center gap-4' title={news?.title}>
                        <Image src={news?.thumbnail} alt={news?.title} width={500} height={500} className='relative w-[60px] h-[60px] rounded-lg object-cover overflow-hidden' />
                        <div className='flex-[1] relative'>
                            <article className='text-[12px] font-semibold text-primary'>{news?.title?.length > 50 ? `${news?.title?.slice(0,50)}...` : news?.title }</article>
                            <article className='text-[10px] text-secondary'>{news?.created_At}</article>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Popular_cover