const { POST, GET, UPDATE, DELETE } = require('../Controller/AppController')
const Verifitoken = require('../VerifyToken')

const router=require('express').Router()
router.post('/postdata',POST)
router.get('/getdata/:id',Verifitoken,GET)
router.put('/updatedata/:id',UPDATE)
router.delete('/deletedata/:id',DELETE)
module.exports=router