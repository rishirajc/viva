import React, { useState } from 'react'
import { POSTDATA } from '../Api'
import { Link } from 'react-router-dom'
import {styled} from 'styled-components'
const MAIN=styled.div`
    width: 100%;
min-height: 100vh;
background-color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Signup = () => {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    function display(){
        console.log("first!!!!",name,email,password);
        
        POSTDATA({name,email,password})

    }

  return (
    <MAIN>


    <div>
        <input type="text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>
        <input type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={display}>SIGNUP</button>
       <Link to={'/'}><h3>Already have an account</h3></Link> 
      
    </div>
    </MAIN>
  )
}

export default Signup
