import {createSlice} from     "@reduxjs/toolkit"

const loginslice= createSlice({
    name:'login',
    initialState:{
        loginData:null
    },
    reducers:{
        addtoLogindata:(state,action)=>{
            state.loginData=action.payload
        },
        removeDate:(state,action)=>{
            state.loginData=null
        }
    }
})
export const {addtoLogindata,removeDate}=loginslice.actions
export default loginslice.reducer