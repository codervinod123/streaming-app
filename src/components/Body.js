import React from 'react'
import Sidebar from './Sidebar'
// import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'
import FixedSidebar from './FixedSidebar'

const Body = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '6% 94%' }} className='flex'>
      <FixedSidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
