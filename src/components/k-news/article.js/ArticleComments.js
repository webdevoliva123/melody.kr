import Button from '@/elements/Button'
import Heading from '@/elements/Heading'
import React from 'react'

const ArticleComments = () => {
  return (
    <div className='p-5 bg-secondary rounded-lg'>
        <Heading label={'Comment Your Opinion'} htype={1}  />
         <textarea  className='w-full h-[200px] bg-transparent border-[1px] border-secondary my-4 rounded-lg resize-none p-4 font-light text-sm placeholder:font-light placeholder:text-secondary text-secondary outline-none' placeholder='Your Comment*' ></textarea>   
         <Button label={'Post Comment'} btnType={1} css={'!inline-block p-4'} />
    </div>
  )
}

export default ArticleComments