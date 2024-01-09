import React, { useState, useEffect } from 'react';
import { YOUTUBE_API_URL } from '../config/constant';
import ButtonList from './ButtonList';
import VedioContainer from './VedioContainer';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import  "./global.css";



import FixedSidebar from './FixedSidebar'



const Maincontainer = () => {
  const [theme, setTheme] = useState(false);
  const themeMode = useSelector((store) => store.themeSlice.isLightTheme);


  useEffect(() => {
    setTheme(themeMode);
  }, [themeMode]);


  const fixedSidebarStatus=useSelector((store)=>store.sidebarSlice.isFixedbarOpen);
  

  return (
    <div className="relative flex w-full mx-auto">
      {/* <Sidebar /> */}

      <div className='w-[5%] fixed top-[3.8rem] z-10 bg-zinc-900 transition-all duration-500'>
          {fixedSidebarStatus ? <FixedSidebar /> : <Sidebar/>}
      </div>

      <div className={`transition-all flex justify-center relative sm:ml-[5%] lg:ml-[5%] md:ml-[5%] w-[100%] sm:w-[95%] md:w-[95%]  lg:w-[95%]  duration-500 ${theme ? 'bg-white' : 'bg-zinc-900'}`}>
        
        {/* <div className='buttonlist-container  overflow-auto max-h-screen max-w-screen-xl'>
          <ButtonList />
        </div> */}

        <VedioContainer />  
      </div>
    </div>
  );
};

export default Maincontainer;
