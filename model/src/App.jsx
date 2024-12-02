import {createBrowserRouter,RouterProvider} from   "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile"
import SignSucs from "./Pages/components/SignSucs"
import Admin from "./Pages/components/Admin"
import { useSelector } from "react-redux"
import Product from "./Pages/components/Product"
import CartPage from "./Pages/CartPage"
import User from "./Pages/components/User"
import Update from "./Pages/components/Update"

function app(){
const logdata=useSelector((state)=>state.login.loginData)
console.log("login data"),logdata;
if(logdata){
  var tokendata=logdata?.jswtoken
}
console.log("final token data",tokendata);



  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:"/sign",
      element:<Signup/>

    },
    {
      path:'/home',
      element:tokendata? <Home/> : <Login/>
    },
    {
      path:'/profile',
      element:tokendata? <Profile/> :<Login/>
    },
    {
      path:'/succ',
      element:<SignSucs/>
    },
    {
      path:'/admin',
      element:tokendata? <Admin/>:<Login/>
    },
    {
      path:'/prod',
      element:tokendata? <Product/>:<Login/>
    },
    {
      path:'/cart/:id',
      element:tokendata? <CartPage/>:<Login/>
    },
    {
      path:'/user',
      element:tokendata? <User/>:<Login/>
    },{
      path:'/admin',
      element:tokendata? <Admin/>:<Login/>
    },
    {
      path:"/update",
      element:tokendata? <Update/>:<Login/>
    }
  ])
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}
export default app