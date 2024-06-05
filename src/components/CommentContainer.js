import React, { useState,useEffect } from 'react';
import Comment from './Comment';
import {commentsURL,API_KEY} from "../config/constant"
import useTheme from '../utils/useTheme';


// example for n level comment nesting

// const commentData=[
//   {
//     name:"vinodpr737947@gmail1",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[
//         {
//           name:"vinodpr737947@gmail1.1",
//           text:"Hello sir you are creating awesome vedios",
//           replies:[
//           {
//             name:"vinodpr737947@gmail1.2",
//             text:"Hello sir you are creating awesome vedios",
//             replies:[
//            { 
//             name:"vinodpr737947@gmail1.3",
//             text:"Hello sir you are creating awesome vedios",
//             replies:[
       
//            ]}
//             ]
//           }
//           ]
//         }
//     ]
//   },
//   {
//     name:"vinodpr737947@gmail2",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[
//       {
//         name:"vinodpr737947@gmail2",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[
//    {
//     name:"vinodpr737947@gmail2",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[

//     ]
//    }
//     ]
//       }
//     ]
//   },
//   {
//     name:"vinodpr737947@gmail3",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[
// {
//   name:"vinodpr737947@gmail2",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[

//     ]
// }
//     ]
//   },
//   {
//     name:"vinodpr737947@gmail4",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[
// {
//   name:"vinodpr737947@gmail2",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[
// {
//   name:"vinodpr737947@gmail2",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[
// {
//   name:"vinodpr737947@gmail2",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[
// {
//   name:"vinodpr737947@gmail2",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[
// {
//   name:"vinodpr737947@gmail2",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[
// {
//   name:"vinodpr737947@gmail2",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[

//     ]
// }
//     ]
// }
//     ]
// }
//     ]
// }
//     ]
// }
//     ]
// }
//     ]
//   },
//   {
//     name:"vinodpr737947@gmail2",
//     text:"Hello sir you are creating awesome vedios",
//     replies:[

//     ]
//   }

// ]

const CommentList=({comments})=>{

  return(
    <>
      {
        comments?.map((data,index)=>{
          return(
            <div key={index}>
             <Comment key={index} data={data}/>
              {/* <div className='pl-6 border-l border-white'>
               <CommentList comments={data.replies}/>
             </div> */}
            </div>
          )
        })
      }
     
     
   </>
  )
}

const CommentContainer = ({vedioId}) => {

  const [comments,setComments]=useState([]);
  const [token,setToken]=useState("");

  useEffect(()=>{
    getComments();
  },[])
  
  const getComments=async()=>{
      
      const data=await fetch(commentsURL+"videoId="+vedioId+"&key="+API_KEY+(token ? '&pageToken=' + token : ''));
      const json=await data.json();
      setToken(json.nextPageToken);
      if(token){
        setComments((prev)=>[...prev,...json.items]); 
      } else{
        setComments(json.items);
      }
     
      
  }
 
  const nextPageToken=async()=>{
     getComments();
  }

 const theme=useTheme();

  return (
    <div className='w-[40rem]'>
        <h1 className='font-bold text-[25px] pb-2'>Comments :</h1>
        <CommentList comments={comments}/>
        <div className='w-full flex justify-center'>
           <button onClick={nextPageToken} className={` font-bold px-6 py-1 rounded ${theme?"bg-gray-400 text-black":"bg-gray-800"}`}>Load More</button>
        </div>
    </div>
  )
}

export default CommentContainer;
