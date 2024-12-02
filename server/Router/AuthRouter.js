const { LOGIN } = require('../Controller/AuthController')

const authrout=require('express').Router()
authrout.post('/login', LOGIN)
module.exports=authrout