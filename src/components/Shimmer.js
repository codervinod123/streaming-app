import React from "react"
import "./global.css";

const Shimmer=()=>{

     const shimmerarray=Array.from({length:36});
    
return(
    <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:m-4 sm:m-4 md:m-4 gap-6 my-4 transition-all duration-500'>
     {
        shimmerarray.map((data,index)=>{
            return(
                <div className="" key={index}>

                   <div  className='skeleton rounded-lg'>
                     <div className='skeleton p-2 w-60 h-32 rounded'> </div>
                   </div>

                   <div className="flex py-2 gap-2 w-[100%]">
                      <div>
                           <div className="h-8 w-8 rounded-full skeleton"></div>
                      </div>
                       <div className="flex flex-col gap-2 w-full">
                           <div className="h-4 skeleton rounded"></div>
                           <div className="h-4 skeleton rounded"></div>
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