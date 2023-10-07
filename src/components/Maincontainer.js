import React from 'react'
import {YOUTUBE_API_URL} from "../config/constant"
import ButtonList from './ButtonList';
import VedioContainer from './VedioContainer';

const Maincontainer = () => {
 
  return (
    <div>
      <ButtonList/>
      <VedioContainer/>
    </div>
  )
}

export default Maincontainer
