import React from 'react'

const WatchPageShimmer = () => {

    const suggestionLength=Array.from({length:3});
    

  return (
    <div className='flex  w-full bg-zinc-800'>
        <div className='mx-[4rem]  my-4 px-8'>
        

            <div 
               className='h-[360px] w-[640px] bg-gray-500 rounded-lg'>
            </div>

            <div className='flex py-4 justify-between'>
                <div className='flex flex-col gap-2'>
                    <div className='h-6 bg-gray-500 w-[200px] rounded'></div>
                    <div className='h-6 bg-gray-500 w-[150px] rounded'></div>
                </div>
                <div className='flex gap-4'>
                     <div className='h-8 w-8 rounded-full bg-gray-500'></div>
                     <div className='h-8 w-8 rounded-full bg-gray-500'></div>
                     <div className='h-8 w-8 rounded-full bg-gray-500'></div>
                </div>
                
            </div>

            <div className='h-5 bg-gray-500 rounded'></div>
           
         
        </div>

        <div className='py-4 '>
            {
                suggestionLength.map((data,index)=>{
                    return(
                        <div key={index} className='flex gap-6 pt-3'>

                           <div className='w-[200px] h-[120px] bg-gray-500 rounded '></div>
                           
                           <div className='flex flex-col gap-2'>
                              <div className='h-6 w-[100px] bg-gray-500 rounded'></div>
                              <div className='h-6 w-[70px] bg-gray-500 rounded'></div>
                           </div>

                        </div>
                    )
                })
            }
         </div>

    </div>
  )
}

export default WatchPageShimmer
