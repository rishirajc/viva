const user=require('../Schema/UserSchema')
const otpschem=require('../Schema/PageSchema')
const argon=require('argon2')
const nodemailer=require('nodemailer')
const dotenv=require('dotenv')
dotenv.config()

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
const transporter = nodemailer.createTransport({

    service:'gmail',
    
      auth: {
        user: process.env.email,
        pass: process.env.paswwd
      },
    });
    
    function generateOTP(){
        return Math.round(Math.random() *10000).toString();
    
    }

    const OTPLOGIN=async(req,res)=>{
        const OTP=generateOTP()
        const otpExpire=new Date(Date.now()+5*60*1000)
        const {Email}=req.body;

        try {
            const helloi=await otpschem.create({OTP,otpExpire,Email})

            const htmlcontent=`
            <h1> Hi Welcome FuturaLabs </h1>
            <h1> Your OTP Code </h1>
            <img src="http://res.cloudinary.com/dxl4dwh5b/image/upload/v1732272817/uci3hr4pp0n4t33ffspv.jpg" width="200px" height="200px" />
            <p>Your OTP is shown below :</p>
            <p><strong>${OTP}</strog></p>
            `
            const mailoptions={
                from : process.env.email,
                to :Email,
                html:htmlcontent
            }
            console.log("email options",mailoptions);
            await transporter.sendMail(mailoptions)
            return res.status(200).json({message:"mail send successfully"})
            
        } catch (error) {
            
            res.status(500).json({error:"error sending mail"})
        }
      
        }
    
    
module.exports={POST,GET,UPDATE,DELETE,OTPLOGIN}