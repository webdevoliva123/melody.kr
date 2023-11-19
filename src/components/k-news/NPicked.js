import Heading from '@/elements/Heading'
import MelodyLink from '@/elements/MelodyLink'
import React from 'react'

const NPicked = () => {
  return (
    <div className='relative  p-5 bg-secondary rounded-lg'>
        <div className='w-full flex justify-between items-center mb-4'>
            <Heading label={'Picked One'} />
            <MelodyLink label='View More' />
        </div>

    </div>
  )
}

export default NPicked