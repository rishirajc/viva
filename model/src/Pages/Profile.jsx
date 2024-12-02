import React, { useEffect, useState } from 'react'
import { DELETEDETAILS, GETDETAILS } from '../Api'
import { useDispatch, useSelector } from 'react-redux'
import {styled} from 'styled-components'
import { removeDate } from './Redux/LoginSlice'
const MAIN=styled.div`
         width: 100%;
min-height: 100vh;
background-color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: space-around;    
`
const Profile = () => {
    const localvalue=useSelector((state)=>state.login.loginData)
    console.log('first',localvalue);
    const Id=localvalue?.userid
    const dispatch=useDispatch()
    const[state,setstate]=useState([])
    useEffect(()=>{
        GETDETAILS(Id).then((data)=>{
            console.log("profile data",data);
            setstate(data)
            

        })
    },[])

    function logout(){
        dispatch(removeDate())
    }
  return (
    <MAIN>


    <div>
        <h1> {state?.name}</h1>
        <h1>{state?.email}</h1>
        <button style={{backgroundColor:'lightgreen'}} onClick={logout}>LOGOUT</button>
       
      
    </div>
    </MAIN>
  )
}

export default Profile
