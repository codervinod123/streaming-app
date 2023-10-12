import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"searchSlice",
    initialState:{
           
    },
    reducers:{
        searchCache:(state,action)=>{
          state=Object.assign(state,action.payload);
        }
    }
})

export const {searchCache}=searchSlice.actions;
export default searchSlice.reducer;