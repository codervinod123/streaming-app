import {createSlice} from "@reduxjs/toolkit";

const sidebarSlice=createSlice({
    name:"sideabrSlice",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleSIdebarMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        }
    }
})

export const {toggleSIdebarMenu} =sidebarSlice.actions;
export default sidebarSlice.reducer;