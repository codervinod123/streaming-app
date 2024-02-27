import React from 'react'
import Button from './Button'
import category from '../config/category'


const ButtonList = () => {
  return (
    <div className='my-2 mx-6 flex gap-4 text-white'>
       {
        category.map((data)=>{
           return(
             <Button key={data} name={data}/>
           )
        })
       }
    </div>
  )
}

export default ButtonList
