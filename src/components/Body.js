import React from 'react'
import Sidebar from './Sidebar'
// import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'
import FixedSidebar from './FixedSidebar'
import { useSelector } from 'react-redux'



const Body = () => {
 
  const fixedSidebarStatus=useSelector((store)=>store.sidebarSlice.isFixedbarOpen);
  

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '6% 94%' }} className='flex'>
      {fixedSidebarStatus && <FixedSidebar />}
      <Outlet/>
    </div>
  )
}

export default Body
