import React from 'react';
import {BiLike,BiDislike} from "react-icons/bi";

const Comment = ({data}) => {
   
    return (
        <div className='flex gap-2'>
            <div className='mx-2 h-[2.5rem] w-[2.5rem] mt-1'>
                <img className='rounded-full' src={data.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user" />
            </div>
            <div>
                <h1>{data.snippet.topLevelComment.snippet.authorDisplayName}</h1>
                <p>{data.snippet.topLevelComment.snippet.textDisplay}</p>

                <div className='text-white flex gap-4 py-2'>
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
