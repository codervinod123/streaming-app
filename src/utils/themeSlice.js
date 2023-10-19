import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:"themeSlice",
    initialState:{
        isLightTheme:false,
    },
    reducers:{
        toggleTheme:(state)=>{
            state.isLightTheme=!state.isLightTheme;
        }
    }
})

export const {toggleTheme}=themeSlice.actions;
export default themeSlice.reducer;
