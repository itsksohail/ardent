const express=require("express")
const app=express()

app.get("/home",(req,res)=>{
    res.send("this is home page")
})

app.get("/about",(req,res)=>{
    res.send("this is about page")
})

app.get("/login",(req,res)=>{
    res.send("this is login page")
})

app.get("/signup",(req,res)=>{
    res.send("this is signup page")
})

app.get("/",(req,res)=>{
    res.send(`
        <a href="home">Home</a>
        <a href="login">login</a>
        <a href="about">about</a>
        <a href="signup">signup</a>
        `)
})
app.listen(5000)