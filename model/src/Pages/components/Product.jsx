import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {styled} from 'styled-components'
const MAIN=styled.div`
width: 100%;
min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;

`

const Product = () => {
    const[state,setstate]=useState([])
   async function display(){
      const hai=await axios.get('https://fakestoreapi.com/products')
      console.log("&&&&&&&&&",hai.data);
      setstate(hai.data)
      
    }

    useEffect(()=>{
   display()
    },[])
  return (
    <MAIN>
        <div>

     
        {state?.map((li)=>(
      
           <>
            <h1>{li.id}</h1>
            <Link to={`/cart/${li.id}`}> <img width={"300px"} src={li.image} alt="" />    </Link>
            <h2>{li.title}</h2>
        
            </>
           
        ))}
           </div>
      
    </MAIN>
  )
}

export default Product
