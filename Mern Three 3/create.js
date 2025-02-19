const fs=require("fs")
const path=require('path')
const js=path.join(__dirname,'js')
const php=path.join(__dirname,'php')

for(i=1;i<=1000;i++){
    fs.writeFileSync(js+"/a"+i+".js","this is js file")
    fs.writeFileSync(php+"/b"+i+".php","this php file")
}