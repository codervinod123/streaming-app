import React, { useEffect ,useState} from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar,closeFixedBar } from '../utils/sidebarSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import {BiLike,BiDislike} from "react-icons/bi";
import {PiShareFatLight}  from "react-icons/pi";
import CommentContainer from './CommentContainer';
import {channelDetailURL,API_KEY} from "../config/constant"
import { vedioSummary } from '../config/constant';
import { useSelector } from 'react-redux';
import WatchPageShimmer from './WatchPageShimmer';
import LiveCommentContainer from './LiveCommentContainer';
import useTheme from '../utils/useTheme';
import Sidebar from './Sidebar';



const Watchpage = () => {

    const dispatch=useDispatch();
    const [queriedId]=useSearchParams();
    const vedID=queriedId.get("v");
    const {channelId}=useParams()

    const [vedDetails,setVedDetails]=useState(null);
    const [summary,setSummary]=useState(null);
    const [expand,setExpand]=useState(false);
   
    useEffect(()=>{
       dispatch(closeSidebar());
       dispatch(closeFixedBar());
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

   const theme=useTheme();
 
   
  return !vedDetails || !summary ? <WatchPageShimmer/> : (
    <>
    <div className='fixed top-[3.8rem] z-10 bg-zinc-900 transition-all duration-500'>
      <Sidebar/>
    </div>
    <div className={`flex relative w-screen transition-all duration-500   ${theme ?  'bg-white text-black' : 'bg-zinc-900 text-white' }`}>
    <div  className={`relative ml-[4rem] py-4 pl-4 flex flex-col transition-all duration-500 ${theme ?  'bg-white text-black' : 'bg-zinc-900 text-white'} `}>
           
           <div>
            <iframe 
               className='rounded-lg'
               width="640" 
               height="360" 
               src={"https://www.youtube.com/embed/"+queriedId.get("v")+"?autoplay=1"}
               title="YouTube video player" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             >
            </iframe>
           </div>

        {/* SfixesNeed */}

          <div className={`w-[40rem] text relative ${theme ? 'text-black' : 'text-white' }`}>
              <p className='font-semibold text-lg py-2'>{summary.snippet.title.slice(0,200)}...</p>
          </div>
 
         {/* EfixesNeed */}

        <div className='flex w-[40rem] items-center'>
          <div className='mx-2 h-[2.6rem] w-[2.6rem]'><img className='rounded-full' src={vedDetails.snippet.thumbnails.medium.url} alt="channelLogo" /></div>
          <div className='leading-[18px]'>
            <p className={`font-semibold ${theme ? "text-black" : "text-white"}`}>{vedDetails.snippet.title.slice(0,20)}...</p>
            <p className={`text-[13px] ${theme ? "text-gray-800" : "text-gray-300"}`}>{vedDetails.statistics.subscriberCount / 1000000}M subscribers</p>
          </div>
          <div className='mx-8'>
            <button className={`px-4 py-[.4rem] rounded-full font-semibold text-[14px] transition-all duration-500 ${theme?"text-white bg-zinc-900 hover:bg-zinc-800 ":"text-black bg-gray-200 hover:bg-gray-400"}`}>Subscribe</button>
          </div>

          <div>
            <div className={`cursor-pointer  px-4 py-[.4rem] rounded-full font-semibold flex gap-4  transition-all duration-500 ${theme?"bg-gray-200 hover:bg-gray-300":"bg-zinc-800 hover:bg-zinc-700"}`}>
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
              <div className={`cursor-pointer  px-4 py-[.4rem] rounded-full font-semibold flex gap-4 ${theme?"bg-gray-200 hover:bg-gray-300":"bg-zinc-800 hover:bg-zinc-700"}`}>
                   <PiShareFatLight  size={"1.5rem"}/>
              </div>
             </div>
           
             <div className={`rounded-full h-[2.4rem] w-[2.4rem] hover:bg-zinc-400 font-bold flex  justify-center  ${theme?"bg-gray-200 text-black hover:bg-gray-300":"bg-zinc-800 text-white hover:bg-zinc-700"}`}>...</div>
          </div>

          <div className={`w-[40rem] rounded my-3 p-2  ${theme?"bg-gray-200 text-black ":"bg-zinc-800 text-white "}`}>
              <p className=''>
                 {summary.snippet.title}  
                   <button className='font-bold px-1' onClick={()=>setExpand(!expand)}> {expand?"...More ":"...Less "}</button> 
              </p>
          </div>

          <div className='w-[40rem] py-2 text-white'>
              <CommentContainer vedioId={vedID} />
          </div>


    </div>
 
     
      <div className='w-full'>
        <LiveCommentContainer/>
      </div>
   
    </div>
    </>

  )
}

export default Watchpage






















 {/* <div className='w-[95%]'>
        <div className='flex mt-4 p-4 mx-4 h-[360px] border border-white rounded text-white overflow-y-auto'>

          <Suggestions videoID={vedID}/>

        </div>
      </div> */}
