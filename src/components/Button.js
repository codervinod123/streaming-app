import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toggleTheme } from '../utils/themeSlice';

const Button = ({name}) => {

   const [theme,setTheme]=useState(false);
   const themeMode=useSelector((store)=>store.themeSlice.isLightTheme);
   useEffect(()=>{
    setTheme(themeMode);
   },[themeMode])
   

  return (
    <div>
      <button className={`px-3 py-[3px] rounded-lg transition-all duration-500 ${theme? "bg-gray-300 text-black hover:bg-gray-400" : "bg-zinc-800 hover:bg-zinc-700"} `}>{name}</button>
    </div>
  )
}

export default Button
