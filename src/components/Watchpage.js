import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../utils/sidebarSlice';
import { useSearchParams } from 'react-router-dom';

const Watchpage = () => {


     const [queriedId]=useSearchParams();
      
 
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(closeSidebar());
    },[])

  return (
    <div className='mx-[4rem] my-4 rounded-sm'>
           <iframe 
              width="680" 
              height="370" 
              src={"https://www.youtube.com/embed/"+queriedId.get("v")}
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
          </iframe>
    </div>
  )
}

export default Watchpage
