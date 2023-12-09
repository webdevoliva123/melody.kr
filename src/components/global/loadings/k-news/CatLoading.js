import Heading from '@/elements/Heading'
import React from 'react'

const CatLoading = ({_name}) => {
  return (
    <div className='fixed top-0 left-0 w-full bg-secondary h-[100vh] overflow-hidden z-[2000]'>
        <div className='w-[1200px] mx-auto p-10'>
            <div className=' animate-pulse p-10 bg-primary rounded-lg mb-6'></div>
            <div className='grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 gap-5 mb-6'>
                <div className='w-full'>
                    <div className='w-full h-[60vh] bg-primary rounded-lg flex flex-col justify-center items-center mb-6'>
                        <Heading label={'FECTHING'} htype={1} custcss={'!text-primary  opacity-[0.2] mb-10'} />
                        <Heading label={`${_name}`} custcss="md:!text-[80px] !text-[40px] !text-secondary !font-extrabold !uppercase opacity-[0.2]" />
                        <Heading label={'Section Data For You, Please Wait.'} htype={1} custcss={'!text-primary  opacity-[0.2] mt-10'} />
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10'>
                    <div className='animate-pulse w-full h-[40vh] bg-primary rounded-lg'></div>
                    <div className='animate-pulse w-full h-[40vh] bg-primary rounded-lg'></div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='animate-pulse w-full h-[50vh] bg-primary rounded-lg mb-6'></div>
                    <div className=' animate-pulse w-full h-[50vh] bg-primary rounded-lg'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CatLoading