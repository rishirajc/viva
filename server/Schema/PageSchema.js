const mongoose=require('mongoose')
const otpschem=new mongoose.Schema({
    Email:{type:String,required:true},
    otpExpire:{type:String,required:true},
    OTP:{type:String,required:true}
    
})
module.exports=mongoose.model('OTP',otpschem)