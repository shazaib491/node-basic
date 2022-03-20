// FrameWork
// expressjs
// npm install package name
// npm install express
// import express from "express"
// import express

// const http = require("http");

// // request  get Response res server send
// http
//   .createServer(function (req, res) {
//     // res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("<h1>Hello World!</h1>");
//     res.end();
//   })
//   .listen(3000, () => {
//     console.log("Connected to  Node Server");
//   });


const express=require("express"); // import
const app=express() //function top level 
// app name varible
// middleware function
//   url callback function 
app.use(express.json())
app.use("/save",function(req,res){
    // res.send("Successfull");
    if(req.body.age >17){
        res.send("Eligible");
    }
    {
        res.send("Nabaliq")
    }
})

// to create a server in nodejs using express
const PORT =5000; //to give port no
app.listen(PORT,()=>{
    console.log("Listening's at port no",PORT)
}) 
// listen 
// nodemon







