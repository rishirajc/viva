import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETEDETAILS, GETDETAILS } from '../../Api';
import {styled} from 'styled-components'
import { Link } from 'react-router-dom';
const MAIN=styled.div`
         width: 100%;
min-height: 100vh;
background-color: #503ace;
    display: flex;
    align-items: center;
    justify-content: space-around;    
`

const Admin = () => {
    const localvalue=useSelector((state)=>state.login.loginData)
    console.log('first',localvalue);
    const Id=localvalue?.userid
    const dispatch=useDispatch()
    const[state,setstate]=useState([])
    const[state1,setstate1]=useState()
    useEffect(()=>{
        GETDETAILS(Id).then((data)=>{
            console.log("profile data",data);
            setstate(data)
            

        })
    },[])

    function cleardata(){

        DELETEDETAILS(Id,dispatch).then((data)=>{
          setstate1(data.message)
    
        })
      }
  return (
    <MAIN>


    <div>
        <h1> {state?.name}</h1>
        <h1>{state?.email}</h1>
        <button style={{backgroundColor:'lightgreen'}} onClick={cleardata}>DELETE PROFILE</button>
        <Link to={'/update'}><button>UPDATE</button></Link> 
      
    </div>
    </MAIN>
  )
}

export default Admin
