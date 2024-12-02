const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors')
app.use(cors())
const mongoose=require('mongoose')
const rout=require('./Router/UserRouter')
const auth=require('./Router/AuthRouter')

mongoose.connect(process.env.mongourl).then(()=>{
    console.log('database are connected');
    
})
app.use(express.json())
app.use('/post',rout)
app.use('/log',auth)

app.listen(9000,()=>{
    console.log('port is connected');
    

})