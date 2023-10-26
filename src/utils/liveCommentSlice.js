import { createSlice } from "@reduxjs/toolkit";

const liveCommentSlice=createSlice({
    name:"liveCommentSlice",
    initialState:{
        liveComments:[],
    },
    reducers:{
       addComments:(state,action)=>{
           state.liveComments.splice(50,1);
           state.liveComments.unshift(action.payload);
       }
    }
})

export const {addComments}=liveCommentSlice.actions;
export default liveCommentSlice.reducer;