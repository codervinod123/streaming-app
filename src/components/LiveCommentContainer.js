import React, { useEffect,useState } from 'react'
import LiveComment from './LiveComment'
import { useDispatch } from 'react-redux'
import { addComments } from '../utils/liveCommentSlice'
import { useSelector } from 'react-redux'
import {generateRandomIndianName} from "../utils/commentDataGenerator";
import {generateRandomComment} from "../utils/commentDataGenerator";
import Suggestions from './Suggestions'

const LiveCommentContainer = () => {
    const dispatch=useDispatch();
    
    const comments=useSelector((store)=>store.liveCommentSlice.liveComments)
    const [commentText,setCommentText]=useState("");
    const [theme,setTheme]=useState(false);
  

    useEffect(()=>{
        const t=setInterval(()=>{
           dispatch(addComments({
                name:generateRandomIndianName(),
                message:generateRandomComment()
            }));
        },1000) 

        return ()=>clearTimeout(t);
    },[])
    
    const handleSubmit=(e)=>{
          e.preventDefault();
         if(commentText){
            dispatch(addComments({
                name:"vinod",
                message:commentText
              }));
         }
          setCommentText("");
    }
    
    const themeMode=useSelector((store)=>store.themeSlice.isLightTheme);
    useEffect(()=>{
      setTheme(themeMode);
    },[themeMode]);

  

   
  return (
    <div className=''>
    
    <div className=''>
    <div className={`flex flex-col-reverse mb-1 mt-4 mx-4 h-[320px]  rounded overflow-y-auto transition-all duration-500 ${theme?"bg-white text-black":"bg-zinc-900 text-white"}`}>
       {
          comments.map((data,index)=>{
            return(
                <div key={index}>
                  <LiveComment name={data.name} message={data.message+"👌"}/>
                </div>
            )
          })
       }
     </div>

       <div className={`mx-6 my-2 py-1 w-[90%] px-4 rounded-full flex items-center ${theme?"bg-gray-200":"bg-zinc-800" }`}>
         <form onSubmit={(e)=>handleSubmit(e)}>
           <input 
              type="text"
              placeholder='Comment'
              className={`w-[100%] py-1 outline-none   ${theme?"bg-gray-200 placeholder:text-black text-black":"bg-zinc-800 placeholder:text-white text-white" }`}
              value={commentText}
              onChange={(e)=>setCommentText(e.target.value)}
              />
           </form>
       </div>
    </div>

       <div className='mx-6 my-4 border border-white'>
          <Suggestions/>
       </div>

    </div>
  )
}

export default LiveCommentContainer
