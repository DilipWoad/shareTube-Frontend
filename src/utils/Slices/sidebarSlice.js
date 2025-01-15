import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice=createSlice({
    name:"sidebar",
    initialState:{
        sidebarStatus:false
    },
    reducers:{
        handleSidebar:(state,action)=>{
            state.sidebarStatus = !state?.sidebarStatus
        }
    }
})

export default sidebarSlice.reducer;
export const{handleSidebar} = sidebarSlice.actions;