import {configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
import themeSlice from "./themeSlice";
import liveCommentSlice from "./liveCommentSlice";



const store = configureStore({
       reducer:{
              sidebarSlice: sidebarSlice,
              searchSlice: searchSlice,
              themeSlice:themeSlice,
              liveCommentSlice:liveCommentSlice,
       }
})

export default store;