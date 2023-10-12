import React from "react";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineWatchLater,
  MdOutlineContentCut,
  MdOutlineKeyboardArrowDown,
  MdOutlineMusicNote,
  MdOutlineLightbulb,
  MdHelpOutline,
  MdOutlineSettings,
  MdOutlinedFlag,
  MdOutlineFeedback,
} from "react-icons/md";
import { RiVideoLine, RiShoppingBag2Line } from "react-icons/ri";
import { ImFire } from "react-icons/im";
import { GiClapperboard, GiAerialSignal } from "react-icons/gi";
import { SiYoutubegaming } from "react-icons/si";
// import shortsLogo_light_theme from "../assets/YouTube-Shorts-Black.svg"
import { IoNewspaperOutline, IoTrophyOutline } from "react-icons/io5";
import { GiHanger } from "react-icons/gi";
import { BsPlusCircle } from "react-icons/bs";
import { FaYoutube, FaUserCircle } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { TbMoodKid } from "react-icons/tb";
import { ImDisplay } from "react-icons/im";
import {useSelector} from "react-redux"
import sidebarSlice from "../utils/sidebarSlice";


const Sidebar = () => {

    const isSidebarOpen=useSelector((store)=>store.sidebarSlice.isMenuOpen);
   
    if(!isSidebarOpen) return null;
   
  return (
    <div className="sidebar w-[15rem] flex flex-col  min-w-fit transition-all duration-200 bg-zinc-900 text-white overflow-y-scroll">
        <div className="flex w-[15rem] flex-col pl-2 pr-6 text-sm ">
            
            <a href="/">
              <div className="flex items-center px-4 py-2 mt-4 hover:bg-zinc-700 rounded-lg cursor-pointer">
                <MdHomeFilled 
                  size="1.5rem"
                  className="mb-1 mr-4"
                />
                <span>Home</span>
              </div>
            </a>
                
             {/* <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <img 
                    src={shortsLogo_light_theme}
                    alt="" 
                    title="shorts"
                    className="h-[1.5rem] mb-1 mr-4"
                  />
                  <span>Shorts</span>
             </div> */}

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineSubscriptions
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Subscriptions</span>
             </div>

             <div className="border-zinc-200 pt-3 w-full border-b "></div>
             
            
             <div className="flex items-center mt-4 px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineVideoLibrary
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Library</span>
             </div>

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineHistory
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>History</span>
             </div>

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <RiVideoLine
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Your Vedios</span>
             </div>

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineWatchLater
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Watch Later</span>
             </div>

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineContentCut
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Your Clips</span>
             </div>


             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineKeyboardArrowDown
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Show More</span>
             </div>

            <div className="border-zinc-200 pt-3 mt-4 w-full border-b "></div>
             
           <div className="pt-4 pl-4">
             <span className="text-sm">Sign in to like videos, comment, and subscribe.</span>
           </div>

           <div className="pt-4 pl-4">
             <button className="flex items-center border rounded-full px-4 p-2 font-bold gap-2">
               <FaUserCircle size="1.5rem"/> Sign In
             </button>
           </div> 

           <div className="border-zinc-200 pt-3 mt-4 w-full border-b "></div>
             
           <div className="pt-4 pl-4 mt-4">
              <span className="text-base">
                Explore
              </span>
            </div>

           <div className="flex items-center mt-4 px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <ImFire
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Trending</span>
             </div>

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <RiShoppingBag2Line
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Shopping</span>
             </div>

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineMusicNote
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Music</span>
             </div>

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <GiClapperboard
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Movies</span>
             </div>

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <GiAerialSignal
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Live</span>
             </div>


             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <SiYoutubegaming
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Gaming</span>
             </div>


             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <IoNewspaperOutline
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>News</span>
             </div>


             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <IoTrophyOutline
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Sports</span>
             </div>


             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineLightbulb
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Learning</span>
             </div>


             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <GiHanger
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Fashion & Beauty</span>
             </div>

             <div className="border-zinc-200 pt-3 mt-4 w-full border-b "></div>
               

             <div className="flex items-center mt-4 px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <BsPlusCircle
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Browse channels</span>
             </div>


             <div className="border-zinc-200 pt-3 mt-4 w-full border-b "></div>
               
             <div className="pt-4 mt-4 pl-4">
              <span className="text-base">
              More from Streamy
              </span>
            </div>

           <div className="flex items-center mt-4 px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <FaYoutube
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Streamy Premium</span>
             </div>

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <SiYoutubemusic
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Streamy Music</span>
             </div>

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <TbMoodKid
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Streamy kids</span>
             </div>

             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <ImDisplay
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Streamy TV</span>
             </div>

             <div className="border-zinc-200 pt-3 mt-4 w-full border-b "></div>
            
             <div className="flex items-center px-4 mt-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineSettings
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Settings</span>
             </div>
             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlinedFlag
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Report history</span>
             </div>
             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdHelpOutline
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Help</span>
             </div>
             <div className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineFeedback
                   size="1.5rem"
                   className="mb-1 mr-4"
                 />
                 <span>Send feedback</span>
             </div>
              

             <div className="border-zinc-200 pt-3 mt-4 w-full border-b "></div>
            

             <div className="links1 py-2 px-4  flex gap-1 flex-wrap font-medium text-[0.84rem] text-[#606060] dark:text-zinc-400">
            <div className="cursor-pointer ml-1">About</div>
            <div className="cursor-pointer ml-1">Press</div>
            <div className="cursor-pointer">Copyright</div>
            <div className="cursor-pointer ml-1">Contact us</div>
            <div className="cursor-pointer ml-1">Creators</div>
            <div className="cursor-pointer ml-1">Advertise</div>
            <div className="cursor-pointer ml-1">Developers</div>
          </div>
          <div className="links1 py-2 px-4  flex gap-1 flex-wrap font-medium text-[0.84rem] text-[#606060] dark:text-zinc-400">
            <div className="cursor-pointer ml-1">Terms</div>
            <div className="cursor-pointer ml-1">Privacy</div>
            <div className="cursor-pointer ml-1">Policy & Safety</div>
            <div className="cursor-pointer ml-1">How Streamy works</div>
            <div className="cursor-pointer ml-1">Test new features</div>
          </div>
          <div className="px-4 py-2 text-gray-400"> &copy; 2023 Google LLC</div>
       

        </div>
    </div>
  )
}

export default Sidebar