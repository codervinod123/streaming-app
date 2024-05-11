import {createSlice} from "@reduxjs/toolkit";

const sidebarSlice=createSlice({
    name:"sideabrSlice",
    initialState:{
        isMenuOpen:false,
        isFixedbarOpen:true,
    },
    reducers:{
        toggleSIdebarMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
            state.isFixedbarOpen=!state.isFixedbarOpen;
        },
        closeSidebar:(state)=>{
            state.isMenuOpen=false;
        },
        closeFixedBar:(state)=>{
            state.isFixedbarOpen=false;
            state.isMenuOpen=false;
        }

    }
})

export const {toggleSIdebarMenu,closeSidebar,closeFixedBar} =sidebarSlice.actions;
export default sidebarSlice.reducer;