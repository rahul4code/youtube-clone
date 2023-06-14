import { createSlice } from "@reduxjs/toolkit";

const navSlice=createSlice({
    name:'navSlice',
    initialState:{
        isSidebarOpen:false
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.isSidebarOpen=!state.isSidebarOpen
        },
        closeSidebar:(state)=>{
            state.isSidebarOpen=false;
        },
        openSidebar:(state)=>{
            state.isSidebarOpen=true;
        }
    }
})

export const {toggleSidebar, closeSidebar, openSidebar}=navSlice.actions;
export default navSlice.reducer;

