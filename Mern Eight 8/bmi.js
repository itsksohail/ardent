require("dotenv").config()
const express=require("express")
const app=express()
const path=require("path")
const PORT=process.env.PORT || 4000
const bodyParser=require("body-parser")

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,'public')))

app.get("/bmi",(req,res)=>{
    res.render("home")
})

app.use(bodyParser.urlencoded({extended:true}))

app.post("/bmi",(req,res)=>{
    const H=req.body.H
    const W=req.body.W
    const newH=H/100
    const bmi_result=W/(newH*newH)
    res.send(`<h1> THE BMI IS ${bmi_result.toFixed(1)}</h1>
    <p><a href="/bmi">GO BACK</a></p>`)
})

app.listen(PORT,(err)=>{
    if(!err) console.log(`${PORT} IS RUNNING`)
})
// test//