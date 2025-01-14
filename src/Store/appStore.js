import {configureStore} from "@reduxjs/toolkit";
import sidebareReducer from "../Slices/sidebarSlice.js"
const appStore=configureStore({
    reducer:{
        sidebar : sidebareReducer
    }
})

export default appStore;