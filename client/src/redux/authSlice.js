import { createSlice } from "@reduxjs/toolkit";

const initialState = {islogedIn : false , userName : "anas attar"}

const authSlice = createSlice({
    name : "auth" , 
    initialState , 
    reducers :{
        logedInOut:(state , action )=>{
            state.islogedIn = ! state.islogedIn
        }
    },
})
export const {logedInOut} = authSlice.actions ; 
export default authSlice.reducer