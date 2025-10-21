const express = require("express");
const users = require("./sample.json");
const cors =require("cors");
const fs = require("fs");

const app= express();
app.use(express.json());

const port= 8000;
app.use(
    cors({
        orgin: " http://localhost:5174",
        methods: ["GET","POST","PATCH","DELETE"],
    })
);
app.use(express.json());

//display all users
app.get("/users",(req,res) =>{
    delete require.cache[require.resolve("./sample.json")]; // clear old cache
  const users = require("./sample.json"); // load new data each time
  return res.json(users);
  
});
//delete
app.delete("/users/:id",(req,res)=> {
  let id=Number(req.params.id);
  let filteredUsers=users.filter((user)=>user.id !== id);
  fs.writeFile("./sample.json",JSON.stringify(filteredUsers),(err,data)=>{
  return res.json(filteredUsers);
  });
});
 // Add new user
 app.post("/users",(req,res)=>{
    let{name,age,city}=req.body;
    if(!name || !age || !city){
        res.status(400).send({
            message:"All Feilds Required"
        });
    }
    let id=Date.now();
    users.push({id , name , age , city });
     fs.writeFile("./sample.json",JSON.stringify(users),(err,data)=>{
return res.json({"message": "User Detail added Sucess"});
  });
   
 }
 );
 //update user
  app.patch("/users/:id",(req,res)=>{
    let id=Number(req.params.id);
    let{name,age,city}=req.body;
    if(!name || !age || !city){
        res.status(400).send({
            message:"All Feilds Required"
        });
    }
    
    let index=users.findIndex((user)=>user.id == id);

    users.splice(index,1,{...req.body});
     fs.writeFile("./sample.json",JSON.stringify(users),(err,data)=>{
return res.json({"message": "User Detail Updated Sucessfully"});
  });
   
 }
 );

app.listen(port,(err) => {
  console.log(`App is running in port ${port}`);
});