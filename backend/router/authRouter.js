const express=require('express')
const { signup } = require('../controller/controller')

const authRouter=express.Router()


authRouter.post('/signup',signup)

module.exports=authRouter