import React,{useEffect, useState} from 'react'
import {YOUTUBE_API_URL} from "../config/constant"
import Vediocard from './Vediocard';

const VedioContainer = () => {


    const [vedios,setVedios]=useState([]);

    useEffect(()=>{
          getVedios();
    },[]);

    const getVedios=async()=>{
        const data=await fetch(YOUTUBE_API_URL);
        const json=await data.json();
        setVedios(json.items);
        console.log(json.items);
    }

  
  return vedios.length===0 ? <h1>Hello here is no vedios</h1> : (
    <div className='flex flex-wrap gap-8 m-4 justify-center'>
       {
          vedios.map((data)=>{
            return(
              <Vediocard info={data}/>
            )
          })
       }
    </div>
  )
}

export default VedioContainer;
