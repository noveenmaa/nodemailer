const express = require('express')
const app =express()

const sendmail=require("./controller/sendmail")
const port =8000

app.get("/",(req,res)=>{
    res.send("the page is ok")
})


app.get('/mail',sendmail)

const start=async()=>{
    try {
        
        app.listen(port,()=>{
            console.log("the port on the go")
        })

    } catch (error) {
        
    }
}


start()