import React from "react"
import "./global.css";

const Shimmer=()=>{

     const shimmerarray=Array.from({length:36});
    
return(
    <div className='flex flex-wrap gap-8 m-4 justify-center bg-zinc-900'>
     {
        shimmerarray.map((data,index)=>{
            return(
                <div key={index}>

                   <div  className='skeleton rounded-lg'>
                     <div className='skeleton p-2 w-56 h-32 rounded'> </div>
                   </div>

                   <div className="flex py-2 gap-2">
                      <div>
                           <div className="h-8 w-8 rounded-full skeleton"></div>
                      </div>
                       <div className="flex flex-col w-[80%] gap-2">
                           <div className="h-4 skeleton rounded-lg"></div>
                           <div className="h-4 skeleton rounded-lg"></div>
                       </div>
                    </div>

                 </div>
            )
        })
     }
    </div>
)
}


export default Shimmer;