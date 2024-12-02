import React, { useState } from 'react'
import { LOGIN1 } from '../Api'
import {useDispatch} from "react-redux"
import {styled} from 'styled-components'
import { Link } from 'react-router-dom'
const MAIN=styled.div`
    width: 100%;
min-height: 100vh;
background-color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Login = () => {
    const dispatch=useDispatch()
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    function display(){
        console.log("first check",email,password);
        
        LOGIN1({email,password},dispatch)

    }
  return (
    <MAIN>

  
    <div>
      <input type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
      <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
     <Link to={'/home'}><button onClick={display}>LOGIN</button></Link> 
      <Link to={'/sign'}><h3>Create an account</h3></Link>
    </div>
    </MAIN>
  )
}
export default Login
