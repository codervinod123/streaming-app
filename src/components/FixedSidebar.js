import React,{useEffect,useState} from "react";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
 
} from "react-icons/md";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";


const FixedSidebar = () => {

   const [theme,setTheme]=useState(false);
 
    const isSidebarOpen=useSelector((store)=>store.sidebarSlice.isMenuOpen);
    const themeMode=useSelector((store)=>store.themeSlice.isLightTheme);
  
    useEffect(()=>{
      setTheme(themeMode);
    },[themeMode])
   

  
   
  return (
    <div className={`flex flex-col  min-w-fit transition-all duration-500 ${theme ? 'bg-white text-black': 'bg-zinc-900 text-white'}`}>
        <div className="flex flex-col text-sm px-1 py-4">
            
            <Link to="/">
              <div className="flex flex-col py-4 items-center justify-center hover:bg-zinc-800 rounded-lg cursor-pointer">
                <MdHomeFilled 
                  size="1.3rem"
                  className=""
                />
                <span className="text-xs">Home</span>
              </div>
            </Link>
                

            <div className="flex flex-col py-4 items-center justify-center hover:bg-zinc-800 rounded-lg cursor-pointer">
            <MdOutlineSubscriptions
                   size="1.3rem"
                   className=""
                 />
                <span className="text-xs">Home</span>
            </div>

            <div className="flex flex-col py-4 items-center justify-center hover:bg-zinc-800 rounded-lg cursor-pointer">
            <MdOutlineVideoLibrary
                   size="1.3rem"
                   className=""
                 />
                <span className="text-xs">Home</span>
            </div>

            <div className="flex flex-col py-4 items-center justify-center hover:bg-zinc-800 rounded-lg cursor-pointer">
            <MdOutlineWatchLater
                   size="1.3rem"
                   className=""
                 />
                <span className="text-xs">Watch Later</span>
            </div>

        
        </div>
    </div>
  )
}

export default FixedSidebar