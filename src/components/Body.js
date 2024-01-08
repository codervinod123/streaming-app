import React from 'react'
import Sidebar from './Sidebar'
// import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'
import FixedSidebar from './FixedSidebar'
import { useSelector } from 'react-redux'



const Body = () => {
 
  const fixedSidebarStatus=useSelector((store)=>store.sidebarSlice.isFixedbarOpen);
  

  return (
    <div className='flex w-[100%]'>
      {fixedSidebarStatus && <FixedSidebar />}
      <Outlet/>
    </div>
  )
}

export default Body
