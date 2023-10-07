
import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import {Provider} from "react-redux"
import store from './utils/store'
import {createBrowserRouter} from "react-router-dom"
import VedioPlayer from './components/VedioPlayer'
import {RouterProvider} from "react-router-dom"
import Maincontainer from './components/Maincontainer'



const App = () => {
  return (
    <Provider store={store}>
     <div className='global'>
        <Header/>
        <Body/>
     </div>
    </Provider>
  )
}

export default App
