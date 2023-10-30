import React,{useEffect, useState} from 'react'
import {YOUTUBE_API_URL} from "../config/constant"
import Vediocard from './Vediocard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { useSelector } from 'react-redux';
// import {ImFire} from "react-icons/im"

// import {
//   MdHomeFilled,
//   MdOutlineSubscriptions,
//   MdOutlineVideoLibrary,
// } from "react-icons/md";

const VedioContainer = () => {


    const [vedios,setVedios]=useState([]);
    const [theme,setTheme]=useState(false);
    const [nextPageToken,setNextPageToken]=useState("");

    const themeMode=useSelector((store)=>store.themeSlice.isLightTheme);

    useEffect(()=>{
      setTheme(themeMode);
    },[themeMode])
 
    
    const getVedios=async(nextPageToken="")=>{
      const data=await fetch(`${YOUTUBE_API_URL}${nextPageToken}`);
      const json=await data.json();
      setVedios((prev)=>[...prev,...json.items]);
      setNextPageToken(json.nextPageToken)
   }

    useEffect(()=>{
          getVedios();
    },[]);

    

  //  infinite scroll
  const handleScroll=()=>{
       const total=document.documentElement.scrollHeight;
       const innerHeight=window.innerHeight;
       const scrolled=document.documentElement.scrollTop;

       if(innerHeight+scrolled+30>total){
      
          if(nextPageToken){
            getVedios(nextPageToken);
          }
       }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nextPageToken]);

  
  return vedios.length===0 ? <Shimmer/> : (
    <div className=''>

     
      <div className={`flex flex-wrap gap-8 m-4 justify-center transition-all duration-500 ${theme ?'bg-white' : 'bg-zinc-900'}`}>
       {
           vedios.map((data)=>{
             return(
               <Link key={data.id} to={"watch/"+data.snippet.channelId+"?v="+data.id}>
                 <Vediocard  info={data} theme={theme}/>
               </Link>
             )
           })
       }
      </div>
           
      
      {/* <button
        onClick={
          ()=>getVedios()}
         className='bg-pink-600 px-2 py-1 rounded'>
         Load More
      </button> */}

    </div>
  )
}

export default VedioContainer;
