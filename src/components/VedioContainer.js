import React,{useEffect, useState} from 'react'
import {YOUTUBE_API_URL} from "../config/constant"
import Vediocard from './Vediocard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
// import {ImFire} from "react-icons/im"

// import {
//   MdHomeFilled,
//   MdOutlineSubscriptions,
//   MdOutlineVideoLibrary,
// } from "react-icons/md";

const VedioContainer = () => {


    const [vedios,setVedios]=useState([]);

    useEffect(()=>{
          getVedios();
    },[]);

    const getVedios=async()=>{
        const data=await fetch(YOUTUBE_API_URL);
        const json=await data.json();
        setVedios(json.items);
    }

  
  return vedios.length===0 ? <Shimmer/> : (
    <div className='flex'>

      {/* <div className='mx-1'>
               <div className="flex flex-col items-center px-2 py-3 mt-4 hover:bg-zinc-700 rounded-lg cursor-pointer">
                <MdHomeFilled 
                  size="1.4rem"
                  className="mb-1 text-white"
                />
                <p className='text-white text-[10px]'>Home</p>
              </div>

               <div className="flex flex-col items-center mt-4 px-2 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <ImFire
                   size="1.4rem"
                   className="mb-1 text-white"
                 />
                 <p className='text-white text-[10px]'>Trending</p>
             </div>

              <div className="flex flex-col items-center mt-4 px-2 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineSubscriptions
                   size="1.4rem"
                   className="mb-1 text-white"
                 />
                 <p className='text-white text-[10px]'>Subscriptions</p>
             </div>

             <div className="flex flex-col items-center mt-4 px-2 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                 <MdOutlineVideoLibrary
                   size="1.4rem"
                   className="mb-1 text-white"
                 />
                 <p className='text-white text-[10px]'>Library</p>
             </div>









      </div> */}
     
      <div className='flex flex-wrap gap-8 m-4 justify-center bg-zinc-900'>
       {
           vedios.map((data)=>{
             return(
               <Link key={data.id} to={"watch?v="+data.id}>
                 <Vediocard  info={data}/>
               </Link>
             )
           })
       }
      </div>

    </div>
  )
}

export default VedioContainer;
