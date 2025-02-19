const express=require('express')
const app=express()
const PORT=7000
const math=require('./math')

app.set(express.json())

app.get("/add",(req,res)=>{
    const {a,b}=req.query
    const result=math.add(Number(a),Number(b))
    res.json({operation :"add value is", result})
})


app.listen(PORT,(err)=>{
    if(!err) console.log(`this server is running on- ${PORT}`)
})

