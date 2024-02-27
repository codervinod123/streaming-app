import React from 'react'
import {BiSolidUserCircle} from "react-icons/bi";
import useTheme from '../utils/useTheme';


const LiveComment = ({name,message}) => {

  const theme=useTheme();


  return (
    <div className='mx-2'>
        <div className={`px-2 my-1 flex shadow-lg py-1 items-center  rounded transition-all duration-500  ${theme?"bg-gray-300":"bg-zinc-800"}`}>
             <BiSolidUserCircle 
                className={`transition-all duration-500 ${theme?"text-black":"text-white"}`}
                size={"1.5rem"}
              />
            <span className='font-semibold px-3'>{name}</span>
            <span>{message}</span>
        </div>
        
    </div>
  )
}

export default LiveComment
