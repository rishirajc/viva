import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CartPage = () => {
    const userdetail=useParams()
    console.log("details",userdetail.id);
    
    const[state,setstate]=useState([])
   async function display(){
    const hello=await axios.get('https://fakestoreapi.com/products')
    console.log("cartpagedta",hello.data);
    setstate(hello.data)
    
 }
 useEffect(()=>{
    display()
 },[])
 const orderid=state.filter((ui)=>{
    return ui.id==userdetail.id
 })
 console.log("888888888",orderid);
 
  return (
    <div>
        {state?.map((li)=>(
            <>
           
            <h1>{li.id}</h1>
            <h2>{li.category}</h2>
            <img src={li.image} alt="" />
            <h1>{li.price}</h1>
            <h2>{li.description}</h2>
            </>

        ))}
      
    </div>
  )
}

export default CartPage
