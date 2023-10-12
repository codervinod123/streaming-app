import {configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";



const store = configureStore({
       reducer:{
              sidebarSlice: sidebarSlice,
              searchSlice: searchSlice,
       }
})

export default store;