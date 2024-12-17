const bcrypt = require('bcrypt');
const express = require('express');
const {UserModel, TodoModel} = require('./db');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const {z} = require("zod");

const JWT_SECRET = "ayush123";

mongoose.connect("mongodb+srv://ayush:Ayush%40mongo@cluster0.lazem.mongodb.net/todo-app-database");


const app = express();
app.use(express.json());

app.post("/signup",async function(req,res){
  // check that password has 1 upc, 1lc char , 1 spl character
     const requiredBody = z.object({
      email:z.string().min(3).max(100).email(),
      name: z.string().min(3).max(30),
      password: z.string()
      .min(8,"password must be at least 8 characters long ")
      .regex(/[A-Z]/,"password must contains at least one uppercase ")
      .regex(/[a-z]/,"password must contains at least one lowercase ")
      .regex(/[!@#$%^&*(),.?":{}|<>]/,"password must contains at least one special character ")
     })

     const parsedDatawithSucess = requiredBody.safeParse(req.body);

     if(!parsedDatawithSucess.success){
      res.json({
        message:"Incorrect format",
        error:parsedDatawithSucess.error
      })
      return 
     }


   const email = req.body.email;
   const password = req.body.password;
   const name = req.body.name;

   const hashedPassword = await bcrypt.hash(password,5);
   console.log(hashedPassword);

    await UserModel.create({
        email:email,
        password:hashedPassword,
        name:name,
  });

  res.json({
    message:"You have logged in"
  })
});


// using try and catch 

// app.post("/signup",async function(req,res){
//   const email = req.body.email;
//   const password = req.body.password;
//   const name = req.body.name;

//  let erroeThrown = false;

//  try{
//    const hashedPassword = await bcrypt.hash(password,5);
//    console.log(hashedPassword);
   
//    await UserModel.create(   {
//      email:email,
//      password:hashedPassword,
//      name:name,
//    });
   
//  }catch(e){
//  res.json({
//    message:"User already exists"
//  })
//  erroeThrown = true;
//  }

// if(!erroeThrown){
//  res.json({
//    message:"You have logged in"
//  })

// }
// });

app.post("/signin",async function(req,res){
    const email = req.body.email;
   const password = req.body.password;

   const response = await UserModel.findOne({
    email:email,
   })
   
   if(!response){
    res.status(403).json({
      message:"User doesn't exist in our db"
    })
    return 
   }
   
   const passwordMatch = await bcrypt.compare(password,response.password);
   
    
   if(passwordMatch){
   const token = jwt.sign({
    id:response._id
   },JWT_SECRET);
   res.json({
    token:token 
   });
   }else{
    res.status(403).json({
        message:"Incorrect cerendtials"
    })
   }
});

app.post("/todo",function(req,res){
     
});

app.get("/todo",function(req,res){
    
});

app.listen(3000)