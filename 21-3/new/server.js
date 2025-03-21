import express from "express"
import fs from "fs"

let app=express()
let datafile="db.json"
let PORT=3000
let readFileData=()=>{

    try{
       let data= fs.readFileSync(datafile,"utf-8")
       return JSON.parse(data)
    }catch(err){
        return err.message
    }
}
app.get("/users",(req,res)=>{
    res.json(readFileData())
})
app.listen(PORT,()=>{
    console.log("server is running on port number 3000")
})