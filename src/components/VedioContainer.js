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

    useEffect(()=>{
          getVedios();
    },[]);

    const getVedios=async()=>{
        const data=await fetch(YOUTUBE_API_URL);
        const json=await data.json();
        setVedios(json.items);
    }

   
  const themeMode=useSelector((store)=>store.themeSlice.isLightTheme);

  useEffect(()=>{
    setTheme(themeMode);
  },[themeMode])
 

  
  return vedios.length===0 ? <Shimmer/> : (
    <div className='flex'>

     
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

    </div>
  )
}

export default VedioContainer;
