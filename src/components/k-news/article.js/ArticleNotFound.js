
import { timeAgo } from '@/utils/dateformatter'
import {  reDirectToRead } from '@/utils/reDirectToRead'
import Image from 'next/image'
import React from 'react'

const ArticleNotFound = ({data}) => {
  return (
    <div className="w-full  bg-secondary rounded-lg p-5">
        <article className="text-center text-primary md:text-[40px] text-[20px] font-extrabold my-20">{data?.message}</article>
            <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-5">
                {
                    data?.data?.map((article,idx) => {
                        return (
                            <div key={idx} className="w-full  rounded-md overflow-hidden" title={article?.title}>
                                {/* thumbnail */}
                                <div className="w-full h-[20vh]">
                                    <Image  src={article?.thumbnail} width={500} height={500} className="relative w-full h-full object-cover "/>
                                </div>
                                <div className="py-4">
                                    <article className="text-xs text-[#ccc] font-medium">{timeAgo(article?.createdAt)}</article>
                                    <article className=" text-primary hover:underline cursor-pointer"  onClick={() => reDirectToRead(article?._id,article?.category)}>{article?.title?.length > 50 ? `${article?.title?.slice(0,50)}...` : article?.title}</article>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default ArticleNotFound