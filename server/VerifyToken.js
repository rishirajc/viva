const jsw=require('jsonwebtoken')

const Verifitoken=async(req,res,next)=>{
    console.log("first",req.Headers.token);
    
    try {
        const token=req.Headers.token
        if(token){
            jsw.verify(token,process.env.jswseckey,(err,data)=>{
                console.log("final answer",data);
                if(err){
                    res.status(500).json("token not verify")
                }
                if(req.params.id==data.id){
                    next()
                }else{
                    res.status(401).json('user and token didnt match')
                }
                
            })
        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}
module.exports=Verifitoken