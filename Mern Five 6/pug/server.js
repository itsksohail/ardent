require("dotenv").config()
const express=require("express")
const app=express()
const path=require("path")
const PORT=process.env.PORT || 3000

app.set('view engine','pug')
app.use(express.static(path.join(__dirname,"public")))

app.get("/home",(req,res)=>{
    res.render('home')
})

app.listen(PORT,(ERR)=>{
    if(ERR) throw ERR
    console.log(`${PORT} :server is running`)
})