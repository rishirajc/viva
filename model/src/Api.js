import axios from 'axios'
import { addtoLogindata, removeDate } from './Pages/Redux/LoginSlice';

export const LOGIN1=async(data,dispatch)=>{
    console.log("second",data);
    
    try {
        const logdetails=await axios.post('http://localhost:9000/log/login',data)
        console.log('third',logdetails.data);
        dispatch(addtoLogindata(logdetails.data))
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}
export const POSTDATA=async(data)=>{
    console.log("second",data);
    
    try {
        const post=await axios.post('http://localhost:9000/post/postdata',data)
        console.log("third",post.data);
        
    } catch (error) {
        console.log(error);
        
        
    }
}
export const GETDETAILS=async(id)=>{
    console.log("second check",id);
    
    try {
        const details=await axios.get(`http://localhost:9000/post/getdata/${id}`)
        console.log("third check",details.data);
        return details.data
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}
export const DELETEDETAILS=async(id,dispatch)=>{
    console.log("second",id);
    
    try {
        const delete1=await axios.delete(`http://localhost:9000/post/deletedata/${id}`)
        console.log("delteddata",delete1.data);
        delete1.data? dispatch(removeDate()):null

        
    } catch (error) {
        console.log(error);
        
        
    }
}
export const UPDATE=async(id,data)=>{
    try {
        const updates=await axios.put(`http://localhost:9000/post/updatedata/${id}`,data)
        console.log(updates);
        
    } catch (error) {
        console.log(error);
        
        
    }
}