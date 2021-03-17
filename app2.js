const express = require('express');
 
const app = express();
const port = 4445;
 
app.get("/", (req,res)=>{
    res.send("This is my homepage");
})
 
app.get("/about", (req,res)=>{
    res.send("This is about page");
})
 
app.get("/contact", (req,res)=>{
    res.send("This is contact page");
})
 
app.listen(port, ()=>{
    console.log("This application is running at port 4445");
})