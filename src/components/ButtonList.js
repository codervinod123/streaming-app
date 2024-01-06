import React from 'react'
import Button from './Button'

const buttons=[
  "All",
  "React",
  "Songs",
  "Gaming",
  "Entertain",
  "Treaking",
  "Movies",
  "Racing",
  "Bikes",
  "Engineering",
  "Riding",
  "Education",
  "Engineering",
  "UPSC"
]

const ButtonList = () => {
  return (
    <div className='my-2 mx-6 flex gap-4 text-white'>
       {
        buttons.map((data)=>{
           return(
             <Button key={data} name={data}/>
           )
        })
       }
    </div>
  )
}

export default ButtonList
