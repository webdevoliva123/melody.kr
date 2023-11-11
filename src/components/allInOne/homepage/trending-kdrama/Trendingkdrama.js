import Heading from '@/elements/Heading'
import React from 'react'
import trendingDramaList from  '@/json/trendingDrama.json'
import Image from 'next/image'
import MelodyLink from '@/elements/MelodyLink'

const Trendingkdrama = () => {
  return (
    <div className='w-full h-auto p-5 bg-secondary rounded-lg'>
      {/* heading */}
      <div className='flex justify-between items-center mb-4'>
        <Heading label={'Trending k-Dramas'} htype={2} />
        <MelodyLink />
      </div>
      <div className='w-full'>
        {
            trendingDramaList?.map((drama,idx) => {
                return (
                    <div  key={idx} className='w-full  mb-3 flex justify-start items-center'>
                        {/* image */}
                        <Image src={drama?.thumbnail} alt={drama?.name} width={500} height={500} className='relative w-[70px] h-[70px] object-cover rounded-lg  overflow-hidden mr-2'/>
                        {/* content */}
                        <div className='flex-1'>
                            <article className='text-secondary text-[10px]'>Worldwide Trending #{idx+1}</article>
                            <article className='text-primary font-bold text-sm mb-1 hover:underline cursor-pointer'>{drama?.name}</article>
                            <article className='text-orange text-[10px] opacity-[0.8]'>Rating {drama?.IMDB}</article>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Trendingkdrama
