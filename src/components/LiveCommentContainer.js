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
    
   
  return (
    <div className=''>
    <div className='flex flex-col-reverse mb-1 mt-4 mx-4 h-[320px]  rounded text-white overflow-y-auto'>
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

       <div className='mx-6 py-1 w-[90%] px-4 rounded-full bg-zinc-800 flex items-center'>
         <form onSubmit={(e)=>handleSubmit(e)}>
           <input 
              type="text"
              placeholder='Comment'
              className='bg-zinc-800 w-[100%]  py-1 outline-none text-white placeholder:text-white'
              value={commentText}
              onChange={(e)=>setCommentText(e.target.value)}
              />
           </form>
       </div>

       <div className='mx-6 my-4 border border-white'>
          <Suggestions/>
       </div>

    </div>
  )
}

export default LiveCommentContainer
