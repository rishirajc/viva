import React from 'react'
import { Link } from 'react-router-dom'
import {styled} from "styled-components"
const NAV=styled.div`
     width: 100%;
 height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: antiquewhite;
  flex-wrap: wrap;
`

const Nevbar = () => {
  return (
    <NAV>



        <div><Link to={'/profile'}><h3>PROFILE</h3></Link> </div>
       <Link to={'/prod'}><div><h3>PRODUCT</h3></div></Link> 
<div><Link to={'/admin'}><h3>ADMIN</h3></Link> </div>
  
    <div><h3>USER MODULE</h3></div>

      
  
    </NAV>
  )
}

export default Nevbar
