const { POST, GET, UPDATE, DELETE, OTPLOGIN } = require('../Controller/AppController')

const router=require('express').Router()
router.post('/postdata',POST)
router.get('/getdata/:id',GET)
router.put('/updatedata/:id',UPDATE)
router.delete('/deletedata/:id',DELETE)
router.post('/otp',OTPLOGIN)
module.exports=router