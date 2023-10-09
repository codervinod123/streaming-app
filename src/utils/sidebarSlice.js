import {createSlice} from "@reduxjs/toolkit";

const sidebarSlice=createSlice({
    name:"sideabrSlice",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleSIdebarMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeSidebar:(state)=>{
            state.isMenuOpen=false;
        }
    }
})

export const {toggleSIdebarMenu,closeSidebar} =sidebarSlice.actions;
export default sidebarSlice.reducer;