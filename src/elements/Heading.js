import React from 'react'

const Heading = ({label,htype=1,...props}) => {
    const type = {
        1 : 'font-semibold text-primary lg:text-lg text-base',
        2 : 'font-semibold text-primary lg:text-base text-sm'
    }
  return (
    <article className={`${type[htype]} ${props.custcss}`}>
      {label}
    </article>
  )
}

export default Heading
