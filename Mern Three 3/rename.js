const fs=require("fs")
const path=require("path")
const js=path.join(__dirname,"js")
const php=path.join(__dirname,"php")
fs.rename(`${js}/a10.js`,"new1.js",(err)=>{
    if(err)throw err
    console.log("renamed")
})