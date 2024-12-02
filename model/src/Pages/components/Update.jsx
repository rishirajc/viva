import React, { useState } from 'react'
import { UPDATE } from '../../Api'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MAIN=styled.div`
    width: 100%;
min-height: 100vh;
background-color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Update = () => {
    const localstorge=useSelector((state)=>state.login.loginData)
    console.log(localstorge);
    const Id=localstorge?.userid
    

    const[name,setname]=useState()
    const[email,setemail]=useState()
    const[password,setpassword]=useState()
    function display(){
        UPDATE(Id,{name,email,password})
    }
  return (
    <MAIN>
        <div>
        <input type="text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>
        <input type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
      <button style={{backgroundColor:"lightgray"}} onClick={display}>UPDATE</button>

        </div>
      
    </MAIN>
  )
}

export default Update
