import React, { useState,useEffect } from 'react';
import Comment from './Comment';
import {commentsURL,API_KEY} from "../config/constant"

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
        comments.map((data,index)=>{
          return(
            <div key={index}>
             <Comment data={data}/>
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

  useEffect(()=>{
    getComments();
  },[])
  
  const getComments=async()=>{
      
      const data=await fetch(commentsURL+"videoId="+vedioId+"&key="+API_KEY);
      const json=await data.json();
      setComments(json.items);
  }


  return (
    <div className='w-[40rem]'>
        <h1 className='font-bold'>Comments :</h1>
        <CommentList comments={comments}/>
    </div>
  )
}

export default CommentContainer;
