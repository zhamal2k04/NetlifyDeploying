import express from "express";
import serverless from "serverless-http";
import path from "path"

const app = express()
const __dirname = path.resolve()

app.get("/", (req, res)=>{
    res.send("Welcome to my API server")
})

app.get("/about", (req,res)=>{
    res.sendFile(__dirname + "../dist/index.html")
})

app.listen(3000, (err)=>{
    if(err) throw err
    console.log("http://localhost:3000")
})

export const handler = serverless(app)