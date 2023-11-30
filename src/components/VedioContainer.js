import React,{useEffect, useState} from 'react'
import {YOUTUBE_API_URL} from "../config/constant"
import Vediocard from './Vediocard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import SearchResultCard from './SearchResultCard';

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
      setNextPageToken(json.nextPageToken)

      // video slice

     

      if(nextPageToken){
        setVedios((prev)=>[...prev,...json.items]); 
      }else{
        setVedios(json.items);
      }
   }
   
    useEffect(()=>{
          getVedios();
    },[]);

   

    

  //  infinite scroll
  const handleScroll=()=>{
       const total=document.documentElement.scrollHeight;
       const innerHeight=window.innerHeight;
       const scrolled=document.documentElement.scrollTop;

       if(innerHeight+scrolled+1>total){
      
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


  //  searched video implementation

  const isSearchOn=useSelector((store)=>store.searchVideoSlice.isSearchOn);
  const val=useSelector((store)=>store.searchVideoSlice.videos);
  


  if(isSearchOn) return(
    <div className=''>
    <div className={`flex flex-wrap gap-8 m-4 justify-center transition-all duration-500 ${theme ?'bg-white' : 'bg-zinc-900'}`}>
    {
        val.map((data,index)=>{
          return(
            <Link key={index} to={"watch/"+data.snippet.channelId+"?v="+data.id.videoId}>
              <SearchResultCard  info={data} theme={theme}/>
            </Link>
          )
        })
    }
   </div>
   </div>
  )

  
  else return vedios.length===0 ? <Shimmer/> : (
    <div className=''>

     
      <div className={`flex flex-wrap gap-6 p-2 m-4  transition-all duration-500 ${theme ?'bg-white' : 'bg-zinc-900'}`}>
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