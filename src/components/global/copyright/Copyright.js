import React from 'react'
import {BsFacebook,BsYoutube} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {RiTwitterXFill} from 'react-icons/ri'

const Copyright = () => {
  return (
    <div className='w-full flex  md:flex-row flex-col md:justify-between justify-start md:items-center items-start md:mb-0 mb-6'>
    <article className='text-sm text-secondary md:mb-0 mb-2'>In Development @2023 | Melody.kr</article>
    <div className='flex justify-end items-center gap-3'>
        <BsFacebook size={15} className='text-secondary hover:text-accent cursor-pointer hover:scale-[0.9] transition-all duration-250 ease-linear' />
        <FaLinkedin size={15} className='text-secondary hover:text-accent cursor-pointer hover:scale-[0.9] transition-all duration-250 ease-linear' />
        <RiTwitterXFill size={15} className='text-secondary hover:text-accent cursor-pointer hover:scale-[0.9] transition-all duration-250 ease-linear' />
        <BsYoutube size={15} className='text-secondary hover:text-accent cursor-pointer hover:scale-[0.9] transition-all duration-250 ease-linear' />
    </div>
    </div>
  )
}

export default Copyright
