import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../slices/navSlice";

const store=configureStore({
    reducer:{
        navigation:navSlice,
    }

    
})

export default store;