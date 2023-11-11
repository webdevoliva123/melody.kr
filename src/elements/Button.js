import React from 'react'

const Button = ({label,btnType,css}) => {
    const type = {
        1 : 'text-white bg-accent p-2 text-xs rounded-xl cursor-pointer',
        2 : 'text-primary bg-light-accent p-2 text-xs rounded-xl cursor-pointer hover:text-accent'
    }
  return (
    <div className={`${type[btnType]}  ${css}`}>{label}</div>
  )
}

export default Button