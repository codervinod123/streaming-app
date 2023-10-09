import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"searchSlice",
    initialState:{
            data:true,
    },
    reducers:{
        searchCache:(state,action)=>{
           state.data=!state.data;
        }
    }
})

export const {searchCache}=searchSlice.actions;
export default searchSlice.reducer;