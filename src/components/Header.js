import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import logo_dark from "../assests/logo_dark_theme.webp"
import logo_light from "../assests/logo_light_theme.webp";
import { TfiSearch } from "react-icons/tfi";
import {MdKeyboardVoice} from "react-icons/md";
import {FaUserCircle} from "react-icons/fa";
import {IoMdNotificationsOutline} from "react-icons/io"
import {RiVideoAddLine} from "react-icons/ri"
import {useDispatch} from "react-redux"
import { toggleSIdebarMenu } from '../utils/sidebarSlice';
import {useSelector} from "react-redux"
import { searchCache } from '../utils/searchSlice';
import MikeListening from "../assests/mic_open.gif";
import themeSlice from '../utils/themeSlice';
import {toggleTheme} from '../utils/themeSlice'; 

const Header = () => {

   
    const dispatch=useDispatch();
    const [searchText,setSearchText]=useState("");
    const [suggestions,setSuggestions]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);
    const [theme,setTheme]=useState(false);
  

    const storedCache=useSelector((store)=>store.searchSlice);

    useEffect(()=>{

     const time=setTimeout(()=> {
      if(storedCache[searchText]){
         setSuggestions(storedCache[searchText]);
      }else{
         getSearchResult()
      }

     },300);

     return ()=>{
         clearTimeout(time);
      };

    },[searchText]);

    const getSearchResult=async()=>{
        const data=await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchText}`);
        const json=await data.json();
        setSuggestions(json[1]);
        dispatch(searchCache({
           [searchText]:json[1]
        }));
     }

   

   const handleToggleClick=()=>{
       dispatch(toggleSIdebarMenu());
    }


    // theme Toggler functionality

  
  
 
  
  const handleThemeToggle=()=>{
      dispatch(toggleTheme());
  }

  const themeMode=useSelector((store)=>store.themeSlice.isLightTheme);

  useEffect(()=>{
   setTheme(themeMode);
  },[themeMode])


    //voice search functionality

    const [listening, setListening] = useState(false);
    const [text, setText] = useState('');

    const handleMikeVoice=()=>{
      setListening(!listening)
    }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    setListening(true);
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setText(transcript);
  };

  recognition.onend = () => {
    setListening(false);
  };

  const handleListen = () => {
    if (listening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };



  
   
  return (
    <div className={`flex justify-between items-center px-4 py-2 shadow-lg h-[3.8rem] transition-all duration-500 w-full top-0 z-10 sticky ${theme ? 'bg-white' : 'bg-zinc-900'}`}>
          <div className='left-items flex items-center'>
             <button onClick={()=>handleToggleClick()} className={`rounded-full hover:bg-zinc-700 p-2 transition-all duration-500 ${theme ?  'text-black' : 'text-white' }`}>
               <RxHamburgerMenu
                className='cursor-pointer'
                title='Menu'
                size="1.5rem"
               />
             </button>

             <div className='cursor-pointer flex items-center transition-all duration-500'>
                <a href="/">
                  <img 
                      src={theme? logo_light : logo_dark } 
                      alt="Youtube Home"
                      className='pl-4 w-32 transition-all duration-500'
                      title='logo'  
                  />
                </a>
             </div>
          </div>

          <div className='w-3/5 flex-1 flex ml-16 items-center relative'>
              

            
              <div className={`relative flex items-center rounded-l-3xl  border border-gray-500 ml-10 w-full transition-all duration-500 ${theme ? 'bg-white':'bg-zinc-800'}`}>
                  <input 
                      type="text"
                      name='searchbar'
                      placeholder='Search'
                      className={`rounded-3xl p-2 pl-8 w-full focus:outline-none transition-all duration-500 ${theme? 'bg-white text-black' : 'bg-zinc-800 text-white' }`}
                      onChange={(e)=>setSearchText(e.target.value)}
                      onFocus={()=>setShowSuggestions(true)}
                      onBlur={()=>setShowSuggestions(false)}
                     />
              {suggestions.length>0 && showSuggestions && (<div className='bg-zinc-800 p-4 absolute top-12 left-2 w-[100%] rounded-lg'>
                 <ul>
                  {
                     suggestions.map((data)=>{
                        return(
                          
                            <li key={data} className='px-4 py-2 hover:bg-zinc-600 rounded flex items-center gap-3 text-white'> <TfiSearch size="1rem"/>{data}</li>
                          
                        )
                     })
                  }
                </ul>
              </div>
   )}

              </div>
             
          
   

              <div className={`border border-gray-500 px-4 p-3 rounded-r-3xl cursor-pointer transition-all duration-500 ${theme ? 'bg-white text-black' : 'bg-zinc-700 text-white'}`}>
                 <TfiSearch
                    size="1rem"
                  title='Search'
                 />
              </div>


             

              <div onClick={()=>handleMikeVoice()} className='p-2 ml-4 cursor-pointer hover:bg-zinc-700 rounded-full'>
                {listening?
                <img className='w-[1.85rem]' src={MikeListening} alt="" />
                :<MdKeyboardVoice
                  size="1.5rem" 
                  className={`transition-all duration-500 ${theme ? 'text-black':'text-white'}`}
                  title='Search With Your Voice'
                  onClick={handleListen}
                />
               }
              </div> 
             

          </div>

          <button onClick={()=>handleThemeToggle()} className='bg-red-700 rounded px-2 py-1 text-white'>
             Theme
          </button>


          <div className={`flex ml-10 transition-all duration-500 ${theme ? 'text-black':'text-white'}`}>
  
          <div className='p-2 ml-4 cursor-pointer hover:bg-zinc-700 rounded-full'>
                 <RiVideoAddLine
                    size="1.5rem"
                    className=''
                    title='Create'
                 />
              </div>

              <div className='p-2 ml-4 cursor-pointer hover:bg-zinc-700 rounded-full'>
                 <IoMdNotificationsOutline
                    size="1.5rem"
                    className=''
                    title='Notifications'
                 />
              </div>
             <div className='p-2 ml-4 cursor-pointer hover:bg-zinc-700 rounded-full'>
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