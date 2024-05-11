import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import YOUTUBE_LIGHT from "../assests/logo_light.png"
import YOUTUBE_DARK from "../assests/logo_dark.png"
import { TfiSearch } from "react-icons/tfi";
import {MdKeyboardVoice} from "react-icons/md";
import {FaUserCircle} from "react-icons/fa";
import {IoMdNotificationsOutline} from "react-icons/io"
import {CiSun} from "react-icons/ci";
import {BsMoonFill} from "react-icons/bs";
import {RiVideoAddLine} from "react-icons/ri"
import {useDispatch} from "react-redux"
import { toggleSIdebarMenu } from '../utils/sidebarSlice';
import {useSelector} from "react-redux"
import { searchCache } from '../utils/searchSlice';
import MikeListening from "../assests/mic_open.gif";
import themeSlice from '../utils/themeSlice';
import {toggleTheme} from '../utils/themeSlice'; 
import Voice from './Voice';
import { setSearch } from '../utils/videoSlice';
import { addVideo } from '../utils/videoSlice';
import useTheme from '../utils/useTheme';

const Header = () => {

     
    const dispatch=useDispatch();
    const [searchText,setSearchText]=useState("");
    const [suggestions,setSuggestions]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);

    const [listening, setListening] = useState(false);
  

    const storedCache=useSelector((store)=>store.searchSlice);


    const getSearchResult=async()=>{
                    
        const data=await fetch(`https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchText}`);
        const json=await data.json();
      
        setSuggestions(json[1]);
        dispatch(searchCache({
           [searchText]:json[1]
        }));
     }

   
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


   const handleToggleClick=()=>{
       dispatch(toggleSIdebarMenu());
    }


    // theme Toggler functionality

  
  
 
  
  const handleThemeToggle=()=>{
      dispatch(toggleTheme());
  }


// voice search functionality
  const theme=useTheme();
   
  const speechRecognition=new (window.SpeechRecognition || window.webkitSpeechRecognition) ();
  speechRecognition.lang='en-US';

  speechRecognition.onstart=()=>{
     setListening(true);
  }

  speechRecognition.onresult=(e)=>{
     const transcript = e.results[0][0].transcript;
     setSearchText(transcript);
     if(transcript.length>0){
      setShowSuggestions(true);
     }
     
  }
  
  speechRecognition.onend=()=>{
    setListening(false);
 }
  
  
  const handleListen=()=>{
   if(listening){
       speechRecognition.stop();
    }else{
      speechRecognition.start();
    }
  }
  

  //search functionality

  const handleSubmit=(e)=>{
     e.preventDefault();
    if(searchText){
      dispatch(setSearch());
      searchResult();
    }
  }

  const searchResult=async()=>{
        const data=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchText}&key=AIzaSyB8bmu-ptu-aF0mldG3a3JWT5-pccwMS4E`);
        const json=await data.json();
      //   console.log(json.items);
        dispatch(addVideo(json.items));
        
  } 


  
   
  return (
    <div className={`flex justify-between items-center px-4 py-2 shadow-lg h-[3.8rem] transition-all duration-500 w-full top-0 z-10 sticky ${theme ? 'bg-white' : 'bg-zinc-900'}`}>
          <div className='left-items flex items-center'>
             <button onClick={()=>handleToggleClick()} className={`rounded-full  p-2 transition-all duration-500 ${theme ?  'text-black hover:bg-gray-300' : 'text-white hover:bg-zinc-700' }`}>
               <RxHamburgerMenu
                className='cursor-pointer'
                title='Menu'
                size="1.3rem"
               />
             </button>

             <div className='cursor-pointer flex items-center transition-all duration-500'>
                <a href="/">
                  <img 
                      src={theme? YOUTUBE_LIGHT : YOUTUBE_DARK } 
                      alt="Youtube Home"
                      className='pl-4 w-[7rem] transition-all duration-500'
                      title='logo'  
                      
                  />
                </a>
             </div>
          </div>

          <div className='w-3/5 flex-1 hidden md:flex lg:flex ml-16 items-center relative'>
              

            
              <div className={`relative flex items-center rounded-l-3xl  border border-gray-500 ml-10 w-full transition-all duration-500 ${theme ? 'bg-white':'bg-zinc-800'}`}>
                <form onSubmit={(e)=>handleSubmit(e)}
                 className={`rounded-3xl w-full  transition-all duration-500 ${theme? 'bg-white text-black' : 'bg-zinc-800 text-white' }`}
                >
                  <input 
                      type="text"
                      name='searchbar'
                      placeholder='Search'
                      className={`rounded-3xl p-2 pl-8 w-full border-none outline-none transition-all duration-500 ${theme? 'bg-white text-black' : 'bg-zinc-800 text-white' }`}
                      onChange={(e)=>setSearchText(e.target.value)}
                      value={searchText}
                      onFocus={()=>setShowSuggestions(true)}
                      onBlur={()=>setShowSuggestions(false)}
                      autoComplete='off'
                     />
                  </form>

                     
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
             
          
   

              <div onClick={(e)=>handleSubmit(e)} className={`border border-gray-500 px-4 p-3 rounded-r-3xl cursor-pointer transition-all duration-500 ${theme ? 'bg-white text-black' : 'bg-zinc-700 text-white'}`}>
                 <TfiSearch
                    size="1rem"
                    title='Search'
                    
                 />
              </div>


             

           {/*    voice search functionality */}

                                                
         <div  onClick={handleListen} className={`p-2 mx-1 ml-4 rounded-full cursor-pointer ${theme ?  'text-black hover:bg-gray-300' : 'text-white hover:bg-zinc-700' }`}>
               
             {
                listening?
                <img className='w-[1.88rem]' src={MikeListening} alt="" />
                : <MdKeyboardVoice
                    size="1.5rem" 
                    className={`transition-all duration-500  `}
                    title='Search With Your Voice'
                  />
             }
         </div> 
             

          </div>

         


          <div className={`flex ml-10 transition-all duration-500 ${theme ? 'text-black':'text-white'}`}>
  
          <div className={`rounded-full ml-4 cursor-pointer p-2 transition-all duration-500 ${theme ?  'text-black hover:bg-gray-300' : 'text-white hover:bg-zinc-700' }`}>
                 <RiVideoAddLine
                    size="1.5rem"
                    className=''
                    title='Create'
                 />
              </div>

              <div className={`rounded-full ml-4 cursor-pointer p-2 transition-all duration-500 ${theme ?  'text-black hover:bg-gray-300' : 'text-white hover:bg-zinc-700' }`}>
                 <IoMdNotificationsOutline
                    size="1.5rem"
                    className=''
                    title='Notifications'
                 />
              </div>
             <div className={`rounded-full ml-4 cursor-pointer p-2 transition-all duration-500 ${theme ?  'text-black hover:bg-gray-300' : 'text-white hover:bg-zinc-700' }`}>
                 <FaUserCircle
                    size="1.5rem"
                    className=''
                 />
              </div>

             
              <div onClick={()=>handleThemeToggle()} className={`rounded-full ml-4 cursor-pointer p-2 transition-all duration-500 ${theme ?  'text-black hover:bg-gray-300' : 'text-white hover:bg-zinc-700' }`}>
                 {
                  theme?
                 <BsMoonFill
                    size="1.5rem"
                    className='text-black'
                 />
                 : 
                 <CiSun
                  size="1.5rem"
                  className='text-yellow-600'
                 />
                 
               
                 }
              </div>
             
             
             
            
          </div>
    </div>
  )
}

export default Header