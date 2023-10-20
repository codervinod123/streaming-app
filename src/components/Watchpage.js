import React, { useEffect ,useState} from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../utils/sidebarSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import {BiLike,BiDislike} from "react-icons/bi";
import {PiShareFatLight}  from "react-icons/pi";
import CommentContainer from './CommentContainer';
import {channelDetailURL,API_KEY} from "../config/constant"
import Voice from './Voice';

import { useSelector } from 'react-redux';
import WatchPageShimmer from './WatchPageShimmer';


const Watchpage = () => {

    const dispatch=useDispatch();
    const [queriedId]=useSearchParams();
    const vedID=queriedId.get("v");
    const {channelId}=useParams()
    const [vedDetails,setVedDetails]=useState(null);
    const [theme,setTheme]=useState(false);
   
    
   

   
    useEffect(()=>{
       dispatch(closeSidebar());
    },[])

    useEffect(()=>{
      getVedioChannelDetails();
    },[])

    const getVedioChannelDetails=async()=>{
        const data=await fetch(channelDetailURL+channelId+"&key="+API_KEY);
        const json=await data.json();
        setVedDetails(json.items[0]);

    }


  
  const themeMode=useSelector((store)=>store.themeSlice.isLightTheme);

  useEffect(()=>{
    setTheme(themeMode);
  },[themeMode])
 
   
    

  



  return !vedDetails ? <WatchPageShimmer/> : (
    <div className={`w-full flex transition-all duration-500 ${theme ?  'bg-white text-black' : 'bg-zinc-900 text-black' }`}>
    <div  className='mx-[4rem]  my-4 px-8 rounded-sm flex flex-col '>
           <iframe 
              width="640" 
              height="360" 
              src={"https://www.youtube.com/embed/"+queriedId.get("v")+"?autoplay=1"}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             >
          </iframe>

          

          <div className={`w-[40rem] ${theme ? 'text-black' : 'text-white' }`}>
              <p className='font-semibold text-xl py-2'>{vedDetails.snippet.description.slice(0,125)}...</p>
          </div>

          <div className='flex w-[40rem] items-center'>
             <div className='mx-2 h-[3rem] w-[3rem]'><img className='rounded-full' src={vedDetails.snippet.thumbnails.medium.url} alt="channelLogo" /></div>
             <div>
                <p className='font-bold'>{vedDetails.snippet.title}</p>
                <p className='text-gray-400'>{vedDetails.statistics.subscriberCount/1000000}M subscribers</p>
             </div>
             <div className='mx-8'>
                <button className='bg-gray-200 px-4 py-[.4rem] rounded-full font-semibold'>Subscribe</button>
             </div>
             <div>
             <div className='bg-zinc-700 cursor-pointer text-white px-4 py-[.4rem] rounded-full font-semibold flex gap-4'>
                   <BiLike 
                     size={"1.5rem"}
                    //  className='border-r'
                   />
                   |
                   <BiDislike
                     size={"1.5rem"}
                   />
             </div>
             </div>
        
             <div className='mx-4'> 
              <div className='bg-zinc-700 cursor-pointer  px-4 py-[.4rem] rounded-full font-semibold flex gap-4'>
                   <PiShareFatLight  size={"1.5rem"}/>
              </div>
             </div>
           
             <div className='bg-zinc-700 rounded-full h-[2.4rem] w-[2.4rem] hover:bg-zinc-400 font-bold flex text-white justify-center'>...</div>
          </div>

          <div className='py-2 text-white'>
              <CommentContainer vedioId={vedID} />
          </div>


    </div>

    </div>
  )
}

export default Watchpage
