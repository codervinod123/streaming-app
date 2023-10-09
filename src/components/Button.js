import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-zinc-600 px-3 py-[3px] rounded-sm'>{name}</button>
    </div>
  )
}

export default Button
