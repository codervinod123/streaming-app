
import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import {Provider} from "react-redux"
import store from './utils/store'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Maincontainer from './components/Maincontainer'
import Watchpage from './components/Watchpage'



const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"/watch/:channelId",
      element:<Watchpage/>
    }
  ]
}])


const App = () => {
  return (
    <Provider store={store}>
     <div className='global w-full'>
        <Header/>
        <RouterProvider router={appRouter}/>
     </div>
    </Provider>
  )
}

export default App
