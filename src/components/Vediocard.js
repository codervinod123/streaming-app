import React from 'react'

const Vediocard = ({info,theme}) => {

   

  return (
    <div className=''>
       
       <div className='rounded'>
         <img className='rounded lg:w-[700px]' src={info.snippet.thumbnails.medium.url} alt="thumbnail" />
       </div>

      <div className={`flex py-3 gap-3 ${theme ? 'text-black' : 'text-white' }`}>
       
        <div>
          <div className='h-[40px] w-[40px] '><img className='rounded-full'  src="https://yt3.ggpht.com/5KYJgS9_QFNDW7GJaiGb50tSRV_4I0Ijx5mt5SBsel9HRyy7ppKYJ8bd2TewTXa3bz1jnethU4Q=s68-c-k-c0x00ffffff-no-rj" alt="" /></div>
        </div>

        <div>
           <p style={{ textTransform: 'lowercase' }} className='font-semibold'>{info.snippet.localized.title.slice(0,36)}...</p>
           <p className="">{info.snippet.channelTitle}</p>
           <p className={` ${theme? 'text-gray-700' : 'text-gray-400'}`}>{info.statistics.viewCount/1000000} M Views</p>
        </div>

       </div>
       
    </div>
  )
}

export default Vediocard
