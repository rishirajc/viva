const user=require('../Schema/UserSchema')
const argon=require('argon2')

const POST=async(req,res)=>{
    console.log("password",req.body.password);
    req.body.password=await argon.hash(req.body.password)
    try {
        const log=await user.create(req.body)
        return res.status(200).json(log)
    } catch (error) {
        res.status(500).json(error)
    }
}
const GET=async(req,res)=>{
    try {
        const getdata=await user.findById(req.params.id)
        return res.status(200).json(getdata)
    } catch (error) {
        res.status(500).json(error)
    }
}
const UPDATE=async(req,res)=>{
    try {
        await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        return res.status(200).json({message:"updated"})
    } catch (error) {
        res.status(500).json(error)
    }
}
const DELETE=async(req,res)=>{
    try {
        await user.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports={POST,GET,UPDATE,DELETE}