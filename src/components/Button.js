import React from 'react'
import useTheme from '../utils/useTheme';

const Button = ({name}) => {
  const theme=useTheme();

  return (
    <div>
      <button className={`px-3 py-[3px] rounded-lg transition-all duration-500 ${theme? "bg-gray-300 text-black hover:bg-gray-400" : "bg-zinc-800 hover:bg-zinc-700"} `}>{name}</button>
    </div>
  )
}

export default Button
