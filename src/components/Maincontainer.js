import React, { useState, useEffect } from 'react';
import { YOUTUBE_API_URL } from '../config/constant';
import ButtonList from './ButtonList';
import VedioContainer from './VedioContainer';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import  "./global.css";

const Maincontainer = () => {
  const [theme, setTheme] = useState(false);
  const themeMode = useSelector((store) => store.themeSlice.isLightTheme);


  useEffect(() => {
    setTheme(themeMode);
  }, [themeMode]);

  return (
    <div className="relative flex">
      <Sidebar />

      <div className={`transition-all duration-500 ${theme ? 'bg-white' : 'bg-zinc-900'}`}>
        
        {/* <div className='buttonlist-container border border-white overflow-auto max-h-screen max-w-screen-xl'> */}
          <ButtonList />
        {/* </div> */}


        <VedioContainer />  
      </div>
    </div>
  );
};

export default Maincontainer;
