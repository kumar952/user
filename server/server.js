const express=require("express");
const app=express();

const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");
const dbpath=path.join(__dirname,"storage.db");
let db=null;
initializeDbandServer= async ()=>{
    try{
      db= await open({
        filename:dbpath,
        driver:sqlite3.Database

    })

    
app.listen(7000,()=>{
    console.log("server is running on port 6000");
})
    }
    catch(e){
      console.log(`db error is ${e.message}`);
    }
    

}


initializeDbandServer();

app.get("/",(request,response)=>{
    response.send("Hello busy people");
})

app.get("/names", async (request,response)=>{
    const dbquery=`select * from student`;
    const data =await db.all(dbquery)
    console.log(data);
    response.json(data);
})