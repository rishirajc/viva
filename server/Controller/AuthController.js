const authuser=require('../Schema/UserSchema')
const argon=require('argon2')
const jsw=require('jsonwebtoken')
const LOGIN=async(req,res)=>{
    try {
        const finuser=await authuser.findOne({email:req.body.email})
        if(!finuser){
            res.status(500).json("email not found")
        }
        console.log(finuser);
        if(await argon.verify(finuser.password,req.body.password)){
            const token=jsw.sign({id:finuser._id},process.env.jswseckey,{expiresIn:'1d'})
            console.log("final token",token);
            return res.status(200).json({jswtoken:token,userid:finuser._id})
            
        }else{
            res.status(500).json("password disnt match")
        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}
module.exports={LOGIN}