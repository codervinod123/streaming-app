import React, { useEffect ,useState} from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../utils/sidebarSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import {BiLike,BiDislike} from "react-icons/bi";
import {PiShareFatLight}  from "react-icons/pi";
import CommentContainer from './CommentContainer';
import {channelDetailURL,API_KEY} from "../config/constant"
import { vedioSummary } from '../config/constant';


import { useSelector } from 'react-redux';
import WatchPageShimmer from './WatchPageShimmer';
import LiveCommentContainer from './LiveCommentContainer';


const Watchpage = () => {

    const dispatch=useDispatch();
    const [queriedId]=useSearchParams();
    const vedID=queriedId.get("v");
    const {channelId}=useParams()

    const [vedDetails,setVedDetails]=useState(null);
    const [theme,setTheme]=useState(false);
    const [summary,setSummary]=useState(null);
    const [expand,setExpand]=useState(false);
   
    
   

   
    useEffect(()=>{
       dispatch(closeSidebar());
    },[])

    useEffect(()=>{
      getVedioChannelDetails();
    },[])

    useEffect(()=>{
         getVedioSummary();
    },[])

    const getVedioSummary=async()=>{

        const data=await fetch(vedioSummary+vedID+"&key="+API_KEY);
        const json=await data.json();
        setSummary(json.items[0]);
        

    }

    const getVedioChannelDetails=async()=>{
        const data=await fetch(channelDetailURL+channelId+"&key="+API_KEY);
        const json=await data.json();
        setVedDetails(json.items[0]);

    }




  
  const themeMode=useSelector((store)=>store.themeSlice.isLightTheme);

  useEffect(()=>{
    setTheme(themeMode);
  },[themeMode])
 
   
    

  



  return !vedDetails || !summary ? <WatchPageShimmer/> : (
    <div className={`w-full flex transition-all duration-500 ${theme ?  'bg-white text-black' : 'bg-zinc-900 text-black' }`}>
    <div  className='ml-[4rem]   my-4 pl-8 rounded-sm flex flex-col '>
           <iframe 
              width="640" 
              height="360" 
              src={"https://www.youtube.com/embed/"+queriedId.get("v")+"?autoplay=1"}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             >
          </iframe>

          

          <div className={`w-[40rem] ${theme ? 'text-black' : 'text-white' }`}>
              <p className='font-semibold text-lg py-2'>{summary.snippet.title.slice(0,110)}...</p>
          </div>

          <div className='flex w-[40rem] items-center'>
             <div className='mx-2 h-[2.6rem] w-[2.6rem]'><img className='rounded-full' src={vedDetails.snippet.thumbnails.medium.url} alt="channelLogo" /></div>
             <div>
                <p className={`font-bold ${theme?"text-black":"text-white"}`}>{vedDetails.snippet.title}</p>
                <p className={`${theme?"text-gray-800":"text-gray-300"}`}>{vedDetails.statistics.subscriberCount/1000000}M subscribers</p>
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

          <div className='w-[40rem] bg-zinc-600 rounded my-3 p-2'>
              <p className='text-white'>
                 {summary.snippet.title}  
                   <button className='font-bold px-1' onClick={()=>setExpand(!expand)}> {expand?"...More ":"...Less "}</button> 
              </p>
          </div>

          <div className='py-2 text-white'>
              <CommentContainer vedioId={vedID} />
          </div>


    </div>

      <div className=''>
        <LiveCommentContainer/>
      </div>
   
    </div>
  )
}

export default Watchpage
