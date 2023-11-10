import React from 'react'


const SearchResultCard = ({ info,theme }) => {

   
    console.log(info);
    return (
        <div className=''>

            <div className=' w-56  rounded'>
                <img className='rounded' src={info.snippet.thumbnails.medium.url} alt="thumbnail" />
            </div>

            <div className={`flex w-56 py-3 gap-3 ${theme ? 'text-black' : 'text-white'}`}>
                <div className='h-[70px] w-[70px] '><img className='rounded-full' src="https://yt3.ggpht.com/5KYJgS9_QFNDW7GJaiGb50tSRV_4I0Ijx5mt5SBsel9HRyy7ppKYJ8bd2TewTXa3bz1jnethU4Q=s68-c-k-c0x00ffffff-no-rj" alt="" /></div>

                <div>
                    <p className='font-semibold'>{info.snippet.title.slice(0, 36)}...</p>
                    <p>{info.snippet.channelTitle}</p>
                    {/* <p className={` ${theme ? 'text-gray-700' : 'text-gray-400'}`}>{info.statistics.viewCount / 1000000} M Views</p> */}
                </div>

            </div>

        </div>
    )
}

export default SearchResultCard
