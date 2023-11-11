import Heading from '@/elements/Heading'
import React from 'react'
import topChannelMelody from '@/json/topChannelMelody.json'
import Image from 'next/image'
import {RiVerifiedBadgeFill} from 'react-icons/ri'
import MelodyLink from '@/elements/MelodyLink'

const TopChannelMelody = () => {
  return (
    <div className='bg-secondary p-5 rounded-lg'>
        <div className='mb-5'>
            <Heading label={'Top Channels Of Melody'}/>
        </div>
        <div className='mb-5'>
            {
                topChannelMelody?.map((channel,idx) => {
                    return (
                        <div key={idx} className='hover:bg-primary bg-opacity-[0.5] w-full h-[60px] flex justify-start items-center gap-3 rounded-lg overflow-hidden mb-5 cursor-pointer'>
                            <Image src={channel?.thumbnail} alt={channel?.name} width={500} height={500} className='relative w-[60px] h-full object-cover rounded-lg' />
                            <div className='flex-1'>
                                <div className='flex justify-start items-center gap-2'>
                                <article className='text-primary font-bold'>{channel?.name}</article>
                                    {channel?.verified &&  <RiVerifiedBadgeFill size={15} className='text-accent' />}
                                </div>
                                <article className='text-secondary text-xs'>{channel?.member} Members</article>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <MelodyLink label="Join Melody's Channels " LType={2}  custcss="text-center underline"/>
    </div>
  )
}

export default TopChannelMelody
