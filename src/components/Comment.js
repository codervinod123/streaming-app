import React,{useState,useEffect} from 'react';
import {BiLike,BiDislike} from "react-icons/bi";
import { useSelector } from 'react-redux';

const Comment = ({data}) => {


   
  const [theme,setTheme]=useState(false);
  const themeMode=useSelector((store)=>store.themeSlice.isLightTheme);

  useEffect(()=>{
    setTheme(themeMode);
  },[themeMode])
 
   
    return (
        <div className='flex gap-2'>
            <div className='mx-2 h-[2.5rem] w-[2.5rem] mt-1'>
                <img className='rounded-full' src={data.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user" />
            </div>
            <div className={`${theme? 'text-black':'text-white'}`}>
                <h1>{data.snippet.topLevelComment.snippet.authorDisplayName}</h1>
                <p>{data.snippet.topLevelComment.snippet.textDisplay}</p>

                <div className={`flex gap-4 py-2`}>
                    <BiLike
                        size={"1.5rem"}
                        className='cursor-pointer'
                    />

                    <BiDislike
                        size={"1.5rem"}
                        className='cursor-pointer'
                    />

                    <h1 className='text-[12px] font-semibold'>Reply</h1>

                </div>
            </div>
        </div>
    )
}

export default Comment
