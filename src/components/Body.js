import React from 'react'

// import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'



const Body = () => {
 
 

  return (
    <div className='flex w-[100%]'>
      <Outlet/>
    </div>
  )
}

export default Body
