const express = require('express')
require('dotenv').config()
const app = express()
const imageRoutes = require('./routes/generate')

app.use(express.json())
app.use((req,res,next)=>{
    next()
})
app.use('/api/generate', imageRoutes)

app.listen('2000',()=>{
    console.log("listening on port 2000")
})