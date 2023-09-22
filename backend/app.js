const express=require('express')
const authRouter = require('./router/authRouter')

const app=express()

app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/',(req,res)=>{
    res.status(500).json({
        data:"auth app"
    })
})

module.exports=app