import {configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
import themeSlice from "./themeSlice";



const store = configureStore({
       reducer:{
              sidebarSlice: sidebarSlice,
              searchSlice: searchSlice,
              themeSlice:themeSlice,
       }
})

export default store;