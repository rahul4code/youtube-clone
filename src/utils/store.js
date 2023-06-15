import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../slices/navSlice";
import searchSlice from "../slices/searchSlice";

const store=configureStore({
    reducer:{
        navigation:navSlice,
        suggestions:searchSlice
    }

    
})

export default store;