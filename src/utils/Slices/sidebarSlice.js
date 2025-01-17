import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice=createSlice({
    name:"sidebar",
    initialState:{
        sidebarStatus:true
    },
    reducers:{
        handleSidebar:(state,action)=>{
            state.sidebarStatus = !state?.sidebarStatus
        },
        menuClose:(state,action)=>{
            state.sidebarStatus = false
        }
    }
})

export default sidebarSlice.reducer;
export const{handleSidebar,menuClose} = sidebarSlice.actions;