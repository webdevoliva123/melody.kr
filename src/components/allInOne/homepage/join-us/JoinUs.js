import Heading from '@/elements/Heading'
import Image from 'next/image'
import React from 'react'
import facebookIcon from '@/assets/icons/facebook.png'
import linkedinIcon from '@/assets/icons/linkedin.png'
import twitterIcon from '@/assets/icons/twitter.png'
import youtubeIcon from '@/assets/icons/youtube.png'
import MelodyLink from '@/elements/MelodyLink'
const JoinUs = () => {
  return (
    <div className='relative w-full p-5 rounded-lg bg-secondary'>
      {/* Heading */}
      <div className='mb-2'>
      <Heading label={'Join Us'} />
      </div>
      <div className='w-full grid grid-cols-2 grid-row-2 gap-2'>
        <div className='p-2 flex justify-start items-center gap-3 cursor-pointer'>
            <div className='w-10 h-10'>
                <Image src={facebookIcon} alt='icon' width={500} height={500} className='relative w-full h-full object-cover' />
            </div>
            <div className='flex-[1]'>
                <article className='text-primary text-base font-medium'>Facebook</article>
                <MelodyLink label='Join Now' LType={2}  custcss="!text-[10px]"/>
            </div>
        </div>
        <div className='p-2 flex justify-start items-center gap-3 cursor-pointer'>
            <div className='w-10 h-10'>
                <Image src={linkedinIcon} alt='icon' width={500} height={500} className='relative w-full h-full object-cover' />
            </div>
            <div className='flex-[1]'>
                <article className='text-primary text-base font-medium'>Likedin</article>
                <MelodyLink label='Join Now' LType={2}  custcss="!text-[10px]"/>
            </div>
        </div>
        <div className='p-2 flex justify-start items-center gap-3 cursor-pointer'>
            <div className='w-10 h-10'>
                <Image src={twitterIcon} alt='icon' width={500} height={500} className='relative w-full h-full object-cover' />
            </div>
            <div className='flex-[1]'>
                <article className='text-primary text-base font-medium'>Twitter</article>
                <MelodyLink label='Join Now' LType={2}  custcss="!text-[10px]"/>
            </div>
        </div>
        <div className='p-2 flex justify-start items-center gap-3 cursor-pointer'>
            <div className='w-10 h-10'>
                <Image src={youtubeIcon} alt='icon' width={500} height={500} className='relative w-full h-full object-cover' />
            </div>
            <div className='flex-[1]'>
                <article className='text-primary text-base font-medium'>Youtube</article>
                <MelodyLink label='Join Now' LType={2}  custcss="!text-[10px]"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
