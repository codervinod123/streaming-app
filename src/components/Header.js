import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import logo_dark from "../assests/logo_dark_theme.webp"
import { TfiSearch } from "react-icons/tfi";
import {MdKeyboardVoice} from "react-icons/md";
import {FaUserCircle} from "react-icons/fa";
import {IoMdNotificationsOutline} from "react-icons/io"
import {RiVideoAddLine} from "react-icons/ri"
import {useDispatch} from "react-redux"
import { toggleSIdebarMenu } from '../utils/sidebarSlice';

const Header = () => {


    const dispatch=useDispatch();
    const handleToggleClick=()=>{
      dispatch(toggleSIdebarMenu());
    }
  
  return (
    <div className='flex justify-between items-center px-4 py-2 shadow-lg h-[4.62rem] transition-all duration-500 w-full top-0 z-10 bg-zinc-900 sticky'>
          <div className='left-items flex items-center'>
             <button onClick={()=>handleToggleClick()} className="rounded-full hover:bg-zinc-700 p-2 text-white">
               <RxHamburgerMenu
                className='cursor-pointer'
                title='hamberger menu'
                size="1.5rem"
               />
             </button>
             <div className='cursor-pointer flex items-center'>
                <a href="/">
                  <img 
                  src={logo_dark} 
                  alt="logo"
                  className='pl-4 w-32'
                  title='logo'  
                  />
                </a>
             </div>
          </div>

          <div className='w-3/5 flex-1 flex ml-16 items-center relative'>
              <div className='flex items-center rounded-l-3xl bg-zinc-800 border border-gray-500 ml-10 w-full'>
                 <input 
                    type="text"
                    name='searchbar'
                    placeholder='Search'
                    className='bg-zinc-800 rounded-3xl p-2 pl-8 w-full focus:outline-none text-white'
                     />
              </div>

              <div className='bg-zinc-800 border-gray-500 px-4 p-3 rounded-r-3xl cursor-pointer text-white'>
                 <TfiSearch
                    size="1.2rem"
                    className=''
                 />
              </div>

              <div className='p-2 ml-4 cursor-pointer hover:bg-zinc-700 rounded-full text-white'>
                <MdKeyboardVoice
                  size="1.5rem" className=''
                />
              </div> 

          </div>

          <div className='flex ml-10'>
  
          <div className='p-2 ml-4 cursor-pointer hover:bg-zinc-700 rounded-full text-white'>
                 <RiVideoAddLine
                    size="1.5rem"
                    className=''
                 />
              </div>

              <div className='p-2 ml-4 cursor-pointer hover:bg-zinc-700 rounded-full text-white'>
                 <IoMdNotificationsOutline
                    size="1.5rem"
                    className=''
                 />
              </div>
             <div className='p-2 ml-4 cursor-pointer hover:bg-zinc-700 rounded-full text-white'>
                 <FaUserCircle
                    size="1.5rem"
                    className=''
                 />
              </div>
             
             
             
             
          </div>
    </div>
  )
}

export default Header