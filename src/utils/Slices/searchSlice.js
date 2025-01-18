import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{},
    reducers:{
        addSearchResults:(state,action)=>{
            //add each api respone to the slice
            Object.assign(state,action.payload);
        },
        clearSearchCaches:(state,action)=>{
            //clear the entire search results when clicked on search button
            for (var searchCache in state) delete state[searchCache];
        }
        //make a LRU with limit of 50-60 length array
    }
})


export default searchSlice.reducer;
export const{addSearchResults,clearSearchCaches} = searchSlice.actions;