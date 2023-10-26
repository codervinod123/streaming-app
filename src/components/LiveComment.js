import React from 'react'
import {BiSolidUserCircle} from "react-icons/bi";

const LiveComment = ({name,message}) => {
  return (
    <div className='mx-2'>
        <div className='px-2 my-1 flex shadow-lg py-1 items-center bg-zinc-600 rounded'>
             <BiSolidUserCircle 
                className='text-white'
                size={"1.5rem"}
              />
            <span className='font-semibold px-3'>{name}</span>
            <span>{message}</span>
        </div>
        
    </div>
  )
}

export default LiveComment
