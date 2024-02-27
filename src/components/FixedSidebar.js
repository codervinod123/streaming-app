import React from "react";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
 
} from "react-icons/md";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import "./global.css"
import useTheme from "../utils/useTheme";


const FixedSidebar = () => {
 
    const isSidebarOpen=useSelector((store)=>store.sidebarSlice.isMenuOpen);
    const theme=useTheme();

    if(isSidebarOpen) return null;

  
   
  return (
    <div className={`w-[full] h-[100vh] justify-center transition-all hidden sm:flex md:flex lg:flex duration-500 ${theme ? 'bg-white text-black': 'bg-zinc-900 text-white'}`}>
        <div className="flex flex-col text-sm px-1 py-4">
            
            <Link to="/">
              <div className={`flex flex-col px-3 py-4 items-center justify-center rounded-lg cursor-pointer ${theme?"hover:bg-gray-300":"hover:bg-zinc-800"} `}>
                <MdHomeFilled 
                  size="1.3rem"
                  className=""
                />
                <span className="text-xs">Home</span>
              </div>
            </Link>
                

            <div className={`flex flex-col px-3 py-4 items-center justify-center rounded-lg cursor-pointer ${theme?"hover:bg-gray-300":"hover:bg-zinc-800"} `}>
            <MdOutlineSubscriptions
                   size="1.3rem"
                   className=""
                 />
                <span className="text-xs">Home</span>
            </div>

            <div className={`flex flex-col px-3 py-4 items-center justify-center rounded-lg cursor-pointer ${theme?"hover:bg-gray-300":"hover:bg-zinc-800"} `}>
            <MdOutlineVideoLibrary
                   size="1.3rem"
                   className=""
                 />
                <span className="text-xs">Shorts</span>
            </div>

           

            <div className={`flex flex-col px-3 py-4 items-center justify-center rounded-lg cursor-pointer ${theme?"hover:bg-gray-300":"hover:bg-zinc-800"} `}>
            <MdOutlineWatchLater
                   size="1.3rem"
                   className=""
                 />
                <span className="text-xs">Watch</span>
            </div>

        
        </div>
    </div>
  )
}

export default FixedSidebar