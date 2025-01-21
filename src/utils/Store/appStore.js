import {configureStore} from "@reduxjs/toolkit";
import sidebareReducer from "../Slices/sidebarSlice.js";
import searchReducer from "../Slices/searchSlice.js";
import chatReducer from "../Slices/chatSlice.js"
const appStore=configureStore({
    reducer:{
        sidebar : sidebareReducer,
        search : searchReducer,
        chat : chatReducer,
    }
})

export default appStore;