import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userdata:null
}

const authstatus = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true,
            state.userdata=action.payload
        },
        logout:(state)=>{
            state.status=false,
            state.userdata=null
        }
    }
})


export const {login,logout} = authstatus.actions;
export default authstatus.reducer;