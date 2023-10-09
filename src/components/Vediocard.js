import React from 'react'

const Vediocard = ({info}) => {

  

  return (
    <div className=''>
      <div className=' w-56 bg-slate-200 rounded'>
         <img className='rounded' src={info.snippet.thumbnails.medium.url} alt="thumbnail" />
         {/* <h1 className='font-semibold px-2'>{info.snippet.channelTitle}</h1>
         <p className='px-2'>{info.statistics.viewCount/1000} K Views</p> */}
       </div>

       <div className='flex w-56 text-white py-3 gap-3'>
        <div className='h-[70px] w-[70px] '><img className='rounded-full'  src="https://yt3.ggpht.com/5KYJgS9_QFNDW7GJaiGb50tSRV_4I0Ijx5mt5SBsel9HRyy7ppKYJ8bd2TewTXa3bz1jnethU4Q=s68-c-k-c0x00ffffff-no-rj" alt="" /></div>
        <div>
           <p className='font-semibold'>{info.snippet.localized.title.slice(0,36)}...</p>
           <p className='text-gray-300'>{info.snippet.channelTitle}</p>
           <p className='text-gray-300'>{info.statistics.viewCount/1000}K Views</p>
        </div>
       </div>
       
    </div>
  )
}

export default Vediocard
