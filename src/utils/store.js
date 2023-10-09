import {configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
import {combineReducers} from "@reduxjs/toolkit"


// const rootReducer=combineReducers({
//       sideabrSlice: sidebarSlice,
//       searchSlice: searchSlice,
//     });

const store = configureStore({
       reducer:sidebarSlice,
})

export default store;