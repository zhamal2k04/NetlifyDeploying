import express from "express";
import serverless from "serverless-http";

const app = express()

app.get("/", (req, res)=>{
    res.send("Welcome to my API server")
})

app.get("/about", (req,res)=>{
    res.json({
        "name": "Jamol",
        "hobby": {
            "1": "Playing the Piano",
            "2": "Fast Typing",
            "3": "Drawing"
        }
    })
})

app.listen(3000, (err)=>{
    if(err) throw err
    console.log("http://localhost:3000")
})

export const handler = serverless(app)