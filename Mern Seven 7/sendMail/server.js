require("dotenv").config()
const nodemailer=require("nodemailer")

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"aptacmp@gmail.com",
        pass:"vtnu babh xifu mrxo"
    },
})

const recipients=[
    "ayanbhattacharjee2004@gmail.com",
    "younussk1290@gmail.com"
]

async function sendmailtoall(){
    for(const r of recipients){
        const mailformat={
            from:"aptacmp@gmail.com",
            to:r,
            subject:"greeding",
            text:`HELLOW ${r},\n\n i am from ardent computech`
        }
        try{
            const info=await transporter.sendMail(mailformat);
            console.log(`email sending to ${r} and the mail is ${info}`)
        }catch(error){
            console.log(error)
        }
    }
}
sendmailtoall()