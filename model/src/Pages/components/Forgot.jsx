import React, { useState } from 'react'
import { OTPGEN } from '../../Api'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
const MAIN=styled.div`
    width: 100%;
min-height: 100vh;
background-color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Forgot = () => {
    const dispatch=useDispatch()
    const[email,setemail]=useState('')
    function display(){
        console.log("first",email);
        
        OTPGEN({email},dispatch)

    }
  return (
   
<MAIN>


  
    <div>
      <input type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
      <h4>Enter your login email</h4>
      <button style={{backgroundColor:"lightgreen"}} onClick={display}>Submit</button>
    </div>
    </MAIN>
    
  )
}

export default Forgot
