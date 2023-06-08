import { createSlice } from "@reduxjs/toolkit";

const navSlice=createSlice({
    name:'navSlice',
    initialState:{
        isToggle:true
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.isToggle=!state.isToggle
        }
    }
})

export const {toggleSidebar}=navSlice.actions;
export default navSlice.reducer;

