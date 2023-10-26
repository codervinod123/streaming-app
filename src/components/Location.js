import React from 'react'

const Location = () => {

    window.navigator.geolocation.getCurrentPosition((e)=>{
         console.log(e);
    })
     
   

  return (
    <div>
        Location
    </div>
  )
}

export default Location
