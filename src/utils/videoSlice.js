import { createSlice } from "@reduxjs/toolkit";

const searchVideoSlice=createSlice({
    name:"videoSlice",
    initialState:{
        isSearchOn:false,
        videos:[],
    },
    reducers:{
       setSearch:(state)=>{
          state.isSearchOn=true;
       },
       addVideo:(state,action)=>{
          state.videos=action.payload;
       }
    }
})

export const {addVideo,setSearch}=searchVideoSlice.actions;
export default searchVideoSlice.reducer;