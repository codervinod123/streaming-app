import React from 'react'

const Vediocard = ({info}) => {
    console.log(info);
   

  return (
    <div className='shadow-lg'>
      <div className='p-2 w-56 bg-slate-200 rounded'>
         <img src={info.snippet.thumbnails.medium.url} alt="thumbnail" />
         <h1 className='font-semibold px-2'>{info.snippet.channelTitle}</h1>
         <p className='px-2'>{info.statistics.viewCount/1000} K Views</p>
       </div>
    </div>
  )
}

export default Vediocard
