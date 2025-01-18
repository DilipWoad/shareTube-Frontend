import {configureStore} from "@reduxjs/toolkit";
import sidebareReducer from "../Slices/sidebarSlice.js";
import searchReducer from "../Slices/searchSlice.js";
const appStore=configureStore({
    reducer:{
        sidebar : sidebareReducer,
        search : searchReducer
    }
})

export default appStore;