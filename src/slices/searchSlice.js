import {createSlice} from "@reduxjs/toolkit"

const searchSlice=createSlice({
    name:'search',
    initialState:{
        searchSuggestions:{}
    },
    reducers:{
        addSuggestion:(state, action)=>{
            state.searchSuggestions={...state.searchSuggestions, ...action.payload }
        }
    }
})

export const {addSuggestion} = searchSlice.actions;
export default searchSlice.reducer;