import {createSlice} from "@reduxjs/toolkit"

const searchSlice=createSlice({
    name:'search',
    initialState:{
        searchSuggestions:{}
    },
    reducers:{
        addSuggestion:(state, action)=>{
            state.searchSuggestions={...state.searchSuggestions, ...action.payload }
        },
        removeSuggestion:(state, action)=>{
            const deleteKeys=Object.keys(state.searchSuggestions)?.slice(0,action.payload)
            state.searchSuggestions=deleteKeys.forEach(key=> delete state.searchSuggestions[key])
        }
    }
})

export const {addSuggestion, removeSuggestion} = searchSlice.actions;
export default searchSlice.reducer;