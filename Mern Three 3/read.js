const { error } = require("console")
const fs=require("fs")
const path=require('path')
const js=path.join(__dirname,'js')
const php=path.join(__dirname,'php')


fs.readFile(`${js}/a200.js`, 'utf-8',(error, item)=> {
    if(error) throw(error)

    console.log(item)

})