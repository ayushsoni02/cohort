// const express = require('express');
// const Router = express.Router;     --->   this one way to do 

const { Router, json } = require('express')       // ---->>   this is the another way to do
const userRouter = Router();
const { userModel, purchaseModel } = require("../db");
const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = "ayushseiwr123e";
const bcrypt = require('bcrypt');

userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastname } = req.body;

  const hashedPassword = await bcrypt.hash(password, 5);

  await userModel.create({
    email: email,
    password: hashedPassword,
    firstName: firstName,
    lastname: lastname
  })
  res.json({
    message: "signup succeeded"
  })
})


userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email: email,
  })

  if (!user) {
    return res.status(403).json({
      message: "Incorrect Credentials"
    })
  }

  const PasswordMatch = await bcrypt.compare(password, user.password);

  if (PasswordMatch) {
    const token = jwt.sign({
      id: user._id
    }, JWT_USER_PASSWORD)


     // Do cookie logic 
     
    res.json({
      token: token,
      message:"you have logged in successfully"
    })

  } else {
    return res.status(403).json({
      message: "Incorrect Credentials"
    })
  }
})

userRouter.get("/purchase",async function (req, res) {
     const userId = req.userId;
    
     const purchase = await purchaseModel.find({
      userId,
     })
  
  
  res.json({
    purchase
  })
})


module.exports = {
  userRouter: userRouter
}


 // not working properly  user/course/preview or purchase take a look at this 
      // course and user need improvement (use chatgpt )