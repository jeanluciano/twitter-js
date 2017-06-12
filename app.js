const express = require('express')
const app = express()

app.use('/', function(req,res,next){
    console.log(req.method, req.originalUrl, res.statusCode)
    next()
})



app.get('/',function(req,res){
    res.send("Welcome!")
})



app.listen(3000, function (){
    console.log('server listening')
})